import React, { useState } from 'react';
import styles from './MaterialRequestPanel.module.css';

const MaterialRequestPanel = () => {
  const [activeTab, setActiveTab] = useState('materials');
  const [selectedRows, setSelectedRows] = useState([]);

  // Sample data - replace with your actual data
  const requests = [
    {
      id: 1,
      requestNumber: 'Request 1',
      items: [
        { id: 1, name: 'Cement', amount: 5000, quantity: 100, status: 'Pending' },
        { id: 2, name: 'Steel Bars', amount: 8000, quantity: 50, status: 'Approved' },
        { id: 3, name: 'Sand', amount: 3000, quantity: 200, status: 'Pending' },
      ]
    },
    {
      id: 2,
      requestNumber: 'Request 2',
      items: [
        { id: 4, name: 'Bricks', amount: 12000, quantity: 500, status: 'Pending' },
        { id: 5, name: 'Paint', amount: 4500, quantity: 30, status: 'Rejected' },
        { id: 6, name: 'Tiles', amount: 15000, quantity: 100, status: 'Approved' },
      ]
    },
    {
      id: 3,
      requestNumber: 'Request 3',
      items: [
        { id: 7, name: 'Wire', amount: 2500, quantity: 75, status: 'Pending' },
        { id: 8, name: 'Pipes', amount: 6000, quantity: 40, status: 'Pending' },
      ]
    }
  ];

  const handleRowSelect = (itemId) => {
    setSelectedRows(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleSelectAll = (items) => {
    const allItemIds = items.map(item => item.id);
    const allSelected = allItemIds.every(id => selectedRows.includes(id));
    
    if (allSelected) {
      setSelectedRows(prev => prev.filter(id => !allItemIds.includes(id)));
    } else {
      setSelectedRows(prev => [...new Set([...prev, ...allItemIds])]);
    }
  };

  const isRequestFullySelected = (items) => {
    return items.every(item => selectedRows.includes(item.id));
  };

  const handleUpdateStatus = () => {
    console.log('Update status for items:', selectedRows);
    // Implement your status update logic here
    alert(`Updating status for ${selectedRows.length} selected items`);
  };

  const handleClearSelection = () => {
    setSelectedRows([]);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return styles.statusApproved;
      case 'rejected':
        return styles.statusRejected;
      case 'pending':
        return styles.statusPending;
      default:
        return '';
    }
  };

  return (
    <div className={styles.panelContainer}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'materials' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('materials')}
        >
          Material Requests
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'other' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('other')}
        >
          Balance Amount
        </button>       
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === 'materials' ? (
          <div className={styles.materialsTab}>
            {requests.map((request) => (
              <div key={request.id} className={styles.requestSection}>
                <div className={styles.requestHeader}>
                  <h3>{request.requestNumber}</h3>
                  <button
                    className={styles.selectAllBtn}
                    onClick={() => handleSelectAll(request.items)}
                  >
                    {isRequestFullySelected(request.items) ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                
                <div className={styles.tableContainer}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th className={styles.checkboxColumn}>
                          <input
                            type="checkbox"
                            checked={isRequestFullySelected(request.items)}
                            onChange={() => handleSelectAll(request.items)}
                          />
                        </th>
                        <th>Item Name</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {request.items.map((item) => (
                        <tr
                          key={item.id}
                          className={selectedRows.includes(item.id) ? styles.selectedRow : ''}
                          onClick={() => handleRowSelect(item.id)}
                        >
                          <td className={styles.checkboxColumn}>
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(item.id)}
                              onChange={() => handleRowSelect(item.id)}
                              onClick={(e) => e.stopPropagation()}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>₹ {item.amount.toLocaleString()}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <span className={`${styles.statusBadge} ${getStatusClass(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.otherTab}>
            <p className={styles.placeholder}>Add your own content here</p>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      {selectedRows.length > 0 && (
        <div className={styles.actionBar}>
          <div className={styles.actionBarContent}>
            <span className={styles.selectedCount}>
              {selectedRows.length} item{selectedRows.length > 1 ? 's' : ''} selected
            </span>
            <div className={styles.actionButtons}>
              <button className={styles.clearBtn} onClick={handleClearSelection}>
                Clear Selection
              </button>
              <button className={styles.updateBtn} onClick={handleUpdateStatus}>
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaterialRequestPanel;