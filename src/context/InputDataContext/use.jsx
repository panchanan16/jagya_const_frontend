// useEntityData.js
import { useEffect } from 'react';
import { useData } from './DataContext';

export function useEntityData(entityType, endpoint) {
  const { entityData, loading, fetchEntityData } = useData();
  
  useEffect(() => {
    // Fetch data for this entity type if we don't have it yet
    if (!entityData[entityType] && !loading[entityType]) {
      fetchEntityData(entityType, endpoint);
    }
  }, [entityType, endpoint, entityData, loading, fetchEntityData]);
  
  return {
    items: entityData[entityType] || [],
    loading: loading[entityType] || false
  };
}


// SearchInput.js
import React, { useState } from 'react';
import { useEntityData } from './useEntityData';

function SearchInput({ 
  name,
  label,
  entityType,
  apiEndpoint,
  displayField = 'name',
  valueField = 'id'
}) {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  // Use our custom hook to get data for this specific entity type
  const { items, loading } = useEntityData(entityType, apiEndpoint);

  const handleItemClick = (item) => {
    setInputValue(item[displayField]);
    setSelectedValue(item[valueField]);
    setIsOpen(false);
  };

  return (
    <div className="search-input">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      <input type="hidden" name={`${name}_id`} value={selectedValue} />
      
      {isOpen && (
        <ul className="item-list">
          {loading ? (
            <li>Loading...</li>
          ) : (
            items
              .filter(item => 
                item[displayField].toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => (
                <li 
                  key={item[valueField]} 
                  onClick={() => handleItemClick(item)}
                >
                  {item[displayField]}
                </li>
              ))
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;