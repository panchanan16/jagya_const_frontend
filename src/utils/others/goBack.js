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