// routes/routeConfig.js
export const ROLES = {
  EMPLOYEE: 'employee',
  MANAGER: 'manager',
  ADMIN: 'admin',
  SUPERADMIN: 'superadmin'
};

// Define role hierarchy - higher roles inherit lower role permissions
export const ROLE_HIERARCHY = {
  [ROLES.EMPLOYEE]: 1,
  [ROLES.MANAGER]: 2,
  [ROLES.ADMIN]: 3,
  [ROLES.SUPERADMIN]: 4
};

// Import all your components
import Login from '../components/Login';
import Unauthorized from '../components/Unauthorized';
import RootLayout from '../components/RootLayout';

// Employee components
import EmployeeDashboard from '../components/Employee/Dashboard';
import EmployeeProfile from '../components/Employee/Profile';
import EmployeeTasks from '../components/Employee/Tasks';
import EmployeeTimesheet from '../components/Employee/Timesheet';

// Manager components
import ManagerDashboard from '../components/Manager/Dashboard';
import TeamManagement from '../components/Manager/TeamManagement';
import ManagerReports from '../components/Manager/Reports';
import Performance from '../components/Manager/Performance';

// Admin components
import AdminDashboard from '../components/Admin/Dashboard';
import UserManagement from '../components/Admin/UserManagement';
import AdminSettings from '../components/Admin/Settings';
import SystemManagement from '../components/Admin/System';

// Shared components
import Notifications from '../components/Shared/Notifications';
import Help from '../components/Shared/Help';

// Define route configurations with their required roles
export const ROUTE_CONFIGS = {
  // Public routes
  login: {
    path: '/login',
    element: Login,
    public: true
  },
  unauthorized: {
    path: '/unauthorized',
    element: Unauthorized,
    public: true
  },

  // Employee routes
  employeeDashboard: {
    path: '/employee/dashboard',
    element: EmployeeDashboard,
    requiredRoles: [ROLES.EMPLOYEE]
  },
  employeeProfile: {
    path: '/employee/profile',
    element: EmployeeProfile,
    requiredRoles: [ROLES.EMPLOYEE]
  },
  employeeTasks: {
    path: '/employee/tasks',
    element: EmployeeTasks,
    requiredRoles: [ROLES.EMPLOYEE]
  },
  employeeTimesheet: {
    path: '/employee/timesheet',
    element: EmployeeTimesheet,
    requiredRoles: [ROLES.EMPLOYEE]
  },

  // Manager routes
  managerDashboard: {
    path: '/manager/dashboard',
    element: ManagerDashboard,
    requiredRoles: [ROLES.MANAGER]
  },
  teamManagement: {
    path: '/manager/team',
    element: TeamManagement,
    requiredRoles: [ROLES.MANAGER]
  },
  managerReports: {
    path: '/manager/reports',
    element: ManagerReports,
    requiredRoles: [ROLES.MANAGER]
  },
  performance: {
    path: '/manager/performance',
    element: Performance,
    requiredRoles: [ROLES.MANAGER]
  },

  // Admin routes
  adminDashboard: {
    path: '/admin/dashboard',
    element: AdminDashboard,
    requiredRoles: [ROLES.ADMIN]
  },
  userManagement: {
    path: '/admin/users',
    element: UserManagement,
    requiredRoles: [ROLES.ADMIN]
  },
  adminSettings: {
    path: '/admin/settings',
    element: AdminSettings,
    requiredRoles: [ROLES.ADMIN]
  },
  systemManagement: {
    path: '/admin/system',
    element: SystemManagement,
    requiredRoles: [ROLES.ADMIN]
  },

  // Shared routes
  notifications: {
    path: '/shared/notifications',
    element: Notifications,
    requiredRoles: [ROLES.EMPLOYEE, ROLES.MANAGER, ROLES.ADMIN]
  },
  help: {
    path: '/shared/help',
    element: Help,
    requiredRoles: [ROLES.EMPLOYEE, ROLES.MANAGER, ROLES.ADMIN]
  }
};

// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requiredRoles = [] }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Superadmin has access to everything
  if (user.role === ROLES.SUPERADMIN) {
    return children;
  }

  // Check if user has required role
  const hasPermission = requiredRoles.length === 0 || 
    requiredRoles.includes(user.role) ||
    hasHigherRole(user.role, requiredRoles);

  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Helper function to check role hierarchy
const hasHigherRole = (userRole, requiredRoles) => {
  const userLevel = ROLE_HIERARCHY[userRole];
  return requiredRoles.some(role => userLevel >= ROLE_HIERARCHY[role]);
};

export default ProtectedRoute;

// components/RoleBasedRedirect.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RoleBasedRedirect = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const defaultRoutes = {
    [ROLES.EMPLOYEE]: '/employee/dashboard',
    [ROLES.MANAGER]: '/manager/dashboard',
    [ROLES.ADMIN]: '/admin/dashboard',
    [ROLES.SUPERADMIN]: '/admin/dashboard' // or a superadmin-specific dashboard
  };

  const defaultRoute = defaultRoutes[user.role] || '/unauthorized';
  return <Navigate to={defaultRoute} replace />;
};

export default RoleBasedRedirect;

// routes/generateRoutePages.js
import { ROUTE_CONFIGS, ROLES } from './routeConfig';
import ProtectedRoute from '../components/ProtectedRoute';
import RoleBasedRedirect from '../components/RoleBasedRedirect';
import RootLayout from '../components/RootLayout';
import { Navigate } from 'react-router-dom';

export const generateRoutePages = () => {
  // Helper function to create protected route element
  const createProtectedElement = (Component, requiredRoles = []) => {
    return (
      <ProtectedRoute requiredRoles={requiredRoles}>
        <Component />
      </ProtectedRoute>
    );
  };

  // Generate routes from configuration
  const routes = Object.values(ROUTE_CONFIGS).map(config => {
    const { path, element: Component, requiredRoles, public: isPublic } = config;
    
    return {
      path,
      element: isPublic ? <Component /> : createProtectedElement(Component, requiredRoles)
    };
  });

  // Add root redirect route
  routes.push({
    path: '/',
    element: <RoleBasedRedirect />
  });

  // Add catch-all route
  routes.push({
    path: '*',
    element: <Navigate to="/unauthorized" replace />
  });

  return [
    {
      path: '/',
      element: <RootLayout />,
      children: routes
    }
  ];
};

// Alternative approach: Generate routes with role filtering
export const generateRoleBasedRoutes = (userRole) => {
  const hasAccess = (requiredRoles) => {
    if (!requiredRoles || requiredRoles.length === 0) return true;
    if (userRole === ROLES.SUPERADMIN) return true;
    
    const userLevel = ROLE_HIERARCHY[userRole];
    return requiredRoles.some(role => userLevel >= ROLE_HIERARCHY[role]);
  };

  const routes = Object.values(ROUTE_CONFIGS)
    .filter(config => config.public || hasAccess(config.requiredRoles))
    .map(config => {
      const { path, element: Component, public: isPublic } = config;
      
      return {
        path,
        element: isPublic ? <Component /> : <Component />
      };
    });

  // Add root redirect route
  routes.push({
    path: '/',
    element: <RoleBasedRedirect />
  });

  // Add catch-all route
  routes.push({
    path: '*',
    element: <Navigate to="/unauthorized" replace />
  });

  return [
    {
      path: '/',
      element: <RootLayout />,
      children: routes
    }
  ];
};

// components/RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import RoleBasedNavigation from './RoleBasedNavigation';

const RootLayout = () => {
  return (
    <div className="app">
      <RoleBasedNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

// components/RoleBasedNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ROLES } from '../routes/routeConfig';

const RoleBasedNavigation = () => {
  const { user } = useAuth();

  const getNavigationItems = () => {
    const baseItems = [
      { path: '/shared/notifications', label: 'Notifications' },
      { path: '/shared/help', label: 'Help' }
    ];

    switch (user?.role) {
      case ROLES.SUPERADMIN:
        return [
          ...baseItems,
          { path: '/admin/dashboard', label: 'Admin Dashboard' },
          { path: '/manager/dashboard', label: 'Manager Dashboard' },
          { path: '/employee/dashboard', label: 'Employee Dashboard' },
          { path: '/admin/users', label: 'User Management' },
          { path: '/admin/settings', label: 'System Settings' },
          { path: '/manager/team', label: 'Team Management' },
          { path: '/manager/reports', label: 'Reports' },
          { path: '/employee/tasks', label: 'Tasks' },
          { path: '/employee/timesheet', label: 'Timesheet' }
        ];
      
      case ROLES.ADMIN:
        return [
          ...baseItems,
          { path: '/admin/dashboard', label: 'Admin Dashboard' },
          { path: '/admin/users', label: 'User Management' },
          { path: '/admin/settings', label: 'System Settings' },
          { path: '/admin/system', label: 'System' }
        ];
      
      case ROLES.MANAGER:
        return [
          ...baseItems,
          { path: '/manager/dashboard', label: 'Manager Dashboard' },
          { path: '/manager/team', label: 'Team Management' },
          { path: '/manager/reports', label: 'Reports' },
          { path: '/manager/performance', label: 'Performance' }
        ];
      
      case ROLES.EMPLOYEE:
        return [
          ...baseItems,
          { path: '/employee/dashboard', label: 'Employee Dashboard' },
          { path: '/employee/profile', label: 'Profile' },
          { path: '/employee/tasks', label: 'Tasks' },
          { path: '/employee/timesheet', label: 'Timesheet' }
        ];
      
      default:
        return baseItems;
    }
  };

  if (!user) return null;

  return (
    <nav>
      <ul>
        {getNavigationItems().map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoleBasedNavigation;

// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { generateRoutePages } from './routes/generateRoutePages';

function App() {
  const router = createBrowserRouter(generateRoutePages());
  
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

// Alternative App.jsx with dynamic route generation based on user role
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { generateRoleBasedRoutes } from './routes/generateRoutePages';

const AppRouter = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter(
    user ? generateRoleBasedRoutes(user.role) : generateRoutePages()
  );
  
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

// contexts/AuthContext.jsx (Same as before)
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const validateToken = async (token) => {
    try {
      const response = await fetch('/api/auth/validate', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('authToken');
      }
    } catch (error) {
      console.error('Token validation failed:', error);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        const { token, user } = await response.json();
        localStorage.setItem('authToken', token);
        setUser(user);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};