import React from 'react';
import { Search } from 'lucide-react';

// TableSearchLoading.module.css styles (embedded for demo)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    minHeight: '120px',
    color: '#6b7280',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px dashed #d1d5db'
  },
  iconContainer: {
    position: 'relative',
    marginBottom: '0.75rem'
  },
  searchIcon: {
    width: '32px',
    height: '32px',
    color: '#9ca3af',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  },
  loadingDots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px'
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#9ca3af',
    animation: 'bounce 1.4s ease-in-out infinite both'
  },
  dot1: {
    animationDelay: '-0.32s'
  },
  dot2: {
    animationDelay: '-0.16s'
  },
  text: {
    marginTop: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    textAlign: 'center'
  }
};

// CSS animations as a style element
const styleSheet = `
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
`;

const TableSearchLoading = ({ 
  message = "Searching...", 
  showDots = true,
  iconSize = 32,
  className = "" 
}) => {
  React.useEffect(() => {
    // Inject keyframes if not already present
    if (!document.querySelector('#table-search-loading-styles')) {
      const style = document.createElement('style');
      style.id = 'table-search-loading-styles';
      style.textContent = styleSheet;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className} style={styles.container}>
      <div style={styles.iconContainer}>
        <Search 
          size={iconSize}
          style={styles.searchIcon}
        />
      </div>
      
      {showDots && (
        <div style={styles.loadingDots}>
          <div style={{...styles.dot, ...styles.dot1}}></div>
          <div style={{...styles.dot, ...styles.dot2}}></div>
          <div style={styles.dot}></div>
        </div>
      )}
      
      <div style={styles.text}>
        {message}
      </div>
    </div>
  );
};

export default TableSearchLoading;