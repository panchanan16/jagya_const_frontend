// src/context/AuthContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axiosInstance from '../utils/axiosConfig';

// Create context
const AuthContext = createContext();

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  role: 'GUEST',
};

// Action types
const AUTH_ACTIONS = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  AUTH_ERROR: 'AUTH_ERROR',
  LOADING: 'LOADING',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        role: action.payload.role,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...initialState,
        isLoading: false,
      };
    case AUTH_ACTIONS.AUTH_ERROR:
      return {
        ...initialState,
        isLoading: false,
      };
    case AUTH_ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_ACTIONS.REFRESH_TOKEN:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload.token,
        },
      };
    default:
      return state;
  }
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Try to authenticate user on mount
  useEffect(() => {
    const initializeAuth = async () => {
      dispatch({ type: AUTH_ACTIONS.LOADING });
      
      try {
        const token = localStorage.getItem('accessToken');
        
        if (!token) {
          dispatch({ type: AUTH_ACTIONS.AUTH_ERROR });
          return;
        }
        
        // Validate the token
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        
        if (decoded.exp < currentTime) {
          // Token expired, try refresh
          await refreshTokenHandler();
        } else {
          // Token valid, set user
          const userData = {
            id: decoded.sub || decoded.id,
            email: decoded.email,
            name: decoded.name,
            token,
          };
          
          dispatch({
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            payload: {
              user: userData,
              role: decoded.role || 'GUEST',
            },
          });
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        dispatch({ type: AUTH_ACTIONS.AUTH_ERROR });
      }
    };
    
    initializeAuth();
  }, []);
  
  // Handler for refreshing token
  const refreshTokenHandler = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }
      
      // Call refresh token endpoint using a separate axios instance to avoid interceptors
      const response = await axiosInstance.post('/auth/refresh', { refreshToken });
      
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      
      // Update tokens in storage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      
      // Decode new token
      const decoded = jwtDecode(accessToken);
      
      const userData = {
        id: decoded.sub || decoded.id,
        email: decoded.email,
        name: decoded.name,
        token: accessToken,
      };
      
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: {
          user: userData,
          role: decoded.role || 'GUEST',
        },
      });
      
      return accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      dispatch({ type: AUTH_ACTIONS.AUTH_ERROR });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      throw error;
    }
  };
  
  // Login function
  const login = async (credentials) => {
    try {
      dispatch({ type: AUTH_ACTIONS.LOADING });
      
      // Make login request
      const response = await axiosInstance.post('/auth/login', credentials);
      
      const { accessToken, refreshToken } = response.data;
      
      // Store tokens
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      
      // Decode token to get user info
      const decoded = jwtDecode(accessToken);
      
      const userData = {
        id: decoded.sub || decoded.id,
        email: decoded.email,
        name: decoded.name,
        token: accessToken,
      };
      
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: {
          user: userData,
          role: decoded.role || 'GUEST',
        },
      });
      
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ type: AUTH_ACTIONS.AUTH_ERROR });
      throw error;
    }
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };
  
  // Check if user has required role
  const hasRole = (requiredRole) => {
    if (!state.isAuthenticated) return false;
    
    const roleAccessLevel = {
      ADMIN: 3,
      MANAGER: 2,
      USER: 1,
      GUEST: 0,
    };
    
    const userLevel = roleAccessLevel[state.role] || 0;
    const requiredLevel = roleAccessLevel[requiredRole] || 0;
    
    return userLevel >= requiredLevel;
  };
  
  // Auth context value
  const value = {
    ...state,
    login,
    logout,
    refreshToken: refreshTokenHandler,
    hasRole,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;