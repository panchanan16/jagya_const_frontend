import React, { useState } from 'react';
import styles from './MaterialRequestPanel.module.css';

const MaterialRequestPanel = () => {
  const [activeTab, setActiveTab] = useState('materials');
  const [selectedRows, setSelectedRows] = useState([]);
  const [balanceSelectedRows, setBalanceSelectedRows] = useState([]);
  const [remainingStatuses, setRemainingStatuses] = useState({});

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

  // Balance Amount data - replace with your actual data
  const remainingPayments = [
    {
      id: 1,
      remainingNumber: 'Remaining 1',
      items: [
        { id: 'b1', requestNumber: 'Request 1', name: 'Cement', totalAmount: 5000, paymentMade: 3000, paymentRemaining: 2000 },
        { id: 'b2', requestNumber: 'Request 1', name: 'Steel Bars', totalAmount: 8000, paymentMade: 5000, paymentRemaining: 3000 },
        { id: 'b3', requestNumber: 'Request 2', name: 'Bricks', totalAmount: 12000, paymentMade: 10000, paymentRemaining: 2000 },
      ],
      status: 'Pending'
    },
    {
      id: 2,
      remainingNumber: 'Remaining 2',
      items: [
        { id: 'b4', requestNumber: 'Request 2', name: 'Tiles', totalAmount: 15000, paymentMade: 12000, paymentRemaining: 3000 },
        { id: 'b5', requestNumber: 'Request 3', name: 'Wire', totalAmount: 2500, paymentMade: 1500, paymentRemaining: 1000 },
      ],
      status: 'Pending'
    },
    {
      id: 3,
      remainingNumber: 'Remaining 3',
      items: [
        { id: 'b6', requestNumber: 'Request 3', name: 'Pipes', totalAmount: 6000, paymentMade: 4000, paymentRemaining: 2000 },
      ],
      status: 'Approved'
    }
  ];

  // Material Requests handlers
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
    alert(`Updating status for ${selectedRows.length} selected items`);
  };

  const handleClearSelection = () => {
    setSelectedRows([]);
  };

  // Balance Amount handlers
  const handleBalanceRowSelect = (itemId) => {
    setBalanceSelectedRows(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleBalanceSelectAll = (items) => {
    const allItemIds = items.map(item => item.id);
    const allSelected = allItemIds.every(id => balanceSelectedRows.includes(id));
    
    if (allSelected) {
      setBalanceSelectedRows(prev => prev.filter(id => !allItemIds.includes(id)));
    } else {
      setBalanceSelectedRows(prev => [...new Set([...prev, ...allItemIds])]);
    }
  };

  const isBalanceFullySelected = (items) => {
    return items.every(item => balanceSelectedRows.includes(item.id));
  };

  const handleStatusChange = (remainingId, newStatus) => {
    setRemainingStatuses(prev => ({
      ...prev,
      [remainingId]: newStatus
    }));
    console.log(`Status updated for ${remainingId}: ${newStatus}`);
    alert(`Status updated for ${remainingId}: ${newStatus}`);
  };

  const handleBalanceClearSelection = () => {
    setBalanceSelectedRows([]);
  };

  const handleBalanceUpdateStatus = () => {
    console.log('Update status for balance items:', balanceSelectedRows);
    alert(`Updating status for ${balanceSelectedRows.length} selected balance items`);
  };

  const calculateTotals = (items) => {
    return items.reduce((acc, item) => ({
      totalAmount: acc.totalAmount + item.totalAmount,
      paymentMade: acc.paymentMade + item.paymentMade,
      paymentRemaining: acc.paymentRemaining + item.paymentRemaining
    }), { totalAmount: 0, paymentMade: 0, paymentRemaining: 0 });
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
          className={`${styles.tab} ${activeTab === 'balance' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('balance')}
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
          <div className={styles.materialsTab}>
            {remainingPayments.map((remaining) => {
              const totals = calculateTotals(remaining.items);
              const currentStatus = remainingStatuses[remaining.id] || remaining.status;
              
              return (
                <div key={remaining.id} className={styles.requestSection}>
                  <div className={styles.requestHeader}>
                    <div className={styles.headerLeft}>
                      <h3>{remaining.remainingNumber}</h3>
                      <div className={styles.statusUpdateContainer}>
                        <label className={styles.statusLabel}>Status:</label>
                        <select
                          className={styles.statusSelect}
                          value={currentStatus}
                          onChange={(e) => handleStatusChange(remaining.id, e.target.value)}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    </div>
                    <button
                      className={styles.selectAllBtn}
                      onClick={() => handleBalanceSelectAll(remaining.items)}
                    >
                      {isBalanceFullySelected(remaining.items) ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>
                  
                  <div className={styles.tableContainer}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th className={styles.checkboxColumn}>
                            <input
                              type="checkbox"
                              checked={isBalanceFullySelected(remaining.items)}
                              onChange={() => handleBalanceSelectAll(remaining.items)}
                            />
                          </th>
                          <th>Request Number</th>
                          <th>Item Name</th>
                          <th>Payment Made</th>
                          <th>Payment Remaining</th>
                        </tr>
                      </thead>
                      <tbody>
                        {remaining.items.map((item) => (
                          <tr
                            key={item.id}
                            className={balanceSelectedRows.includes(item.id) ? styles.selectedRow : ''}
                            onClick={() => handleBalanceRowSelect(item.id)}
                          >
                            <td className={styles.checkboxColumn}>
                              <input
                                type="checkbox"
                                checked={balanceSelectedRows.includes(item.id)}
                                onChange={() => handleBalanceRowSelect(item.id)}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </td>
                            <td>{item.requestNumber}</td>
                            <td>{item.name}</td>
                            <td>₹ {item.paymentMade.toLocaleString()}</td>
                            <td className={styles.remainingAmount}>
                              ₹ {item.paymentRemaining.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className={styles.totalRow}>
                          <td colSpan="2" className={styles.totalLabel}>
                            Total ({remaining.items.length} item{remaining.items.length > 1 ? 's' : ''})
                          </td>
                          <td className={styles.totalValue}>Total Amount: ₹ {totals.totalAmount.toLocaleString()}</td>
                          <td className={styles.totalValue}>₹ {totals.paymentMade.toLocaleString()}</td>
                          <td className={styles.totalValue}>₹ {totals.paymentRemaining.toLocaleString()}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Action Bar for Material Requests */}
      {activeTab === 'materials' && selectedRows.length > 0 && (
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

      {/* Bottom Action Bar for Balance Amount */}
      {activeTab === 'balance' && balanceSelectedRows.length > 0 && (
        <div className={styles.actionBar}>
          <div className={styles.actionBarContent}>
            <span className={styles.selectedCount}>
              {balanceSelectedRows.length} item{balanceSelectedRows.length > 1 ? 's' : ''} selected
            </span>
            <div className={styles.actionButtons}>
              <button className={styles.clearBtn} onClick={handleBalanceClearSelection}>
                Clear Selection
              </button>
              <button className={styles.updateBtn} onClick={handleBalanceUpdateStatus}>
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