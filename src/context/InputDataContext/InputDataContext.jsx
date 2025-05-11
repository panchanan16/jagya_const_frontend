// DataContext.js
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

// Create the context
const DataContext = createContext({});

// Cache object to store data for different entities
const dataCache = {};

export function DataProvider({ children }) {
  const [entityData, setEntityData] = useState({});
  const [loading, setLoading] = useState({});

  // Function to fetch data for a specific entity type
  const fetchEntityData = useCallback(async (entityType, endpoint) => {
    // Check if we're already loading this entity type
    if (loading[entityType]) return;
    
    // Check if we already have cached data for this entity type
    if (dataCache[entityType]) {
      setEntityData(prev => ({
        ...prev,
        [entityType]: dataCache[entityType]
      }));
      return;
    }

    try {
      // Mark this entity type as loading
      setLoading(prev => ({ ...prev, [entityType]: true }));
      
      // Fetch the data
      const response = await fetch(endpoint);
      const data = await response.json();
      
      // Store in cache and state
      dataCache[entityType] = data;
      setEntityData(prev => ({ ...prev, [entityType]: data }));
    } catch (error) {
      console.error(`Error fetching ${entityType} data:`, error);
    } finally {
      // Mark loading as finished
      setLoading(prev => ({ ...prev, [entityType]: false }));
    }
  }, []);

  // The value we'll provide through the context
  const contextValue = {
    entityData,
    loading,
    fetchEntityData
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}