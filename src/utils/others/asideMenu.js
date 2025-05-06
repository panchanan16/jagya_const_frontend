import { DashboardIcon, ProjectIcon, ClientVendorIcon, AccountingIcon, MaterialsIcon, LaboursIcon, BranchIcon, UserMangerIcon, NotificationIcon, SettingsIcon, LogoutIcon } from "./icons";

const asideMenuItems = [
    {
        name: 'Dashboard',
        submenu: [],
        svgImg: DashboardIcon,
        redirect: '/'
    },

    {
        name: 'Projects',
        submenu: [],
        svgImg: ProjectIcon,
        redirect: '/projects'
    },
    {
        name: 'Clients & Vendors',
        submenu: [
            { name: 'clients', url: 'clients' },
            { name: 'vendors', url: 'vendors' }
        ],
        svgImg: ClientVendorIcon,
        redirect: ''
    },

    {
        name: 'Accounting',
        submenu: [
            { name: 'finance', url: 'finance' },
            { name: 'expense', url: 'expense' },
            { name: 'invoices', url: 'invoices' }
        ],
        svgImg: AccountingIcon,
        redirect: ''
    },

    {
        name: 'Materials',
        submenu: [
            { name: 'inventory', url: 'inventory' },
            { name: 'material request', url: 'material-request' },
            { name: 'finance requests', url: 'finance-request' },
            { name: 'incharge', url: 'incharge' },
            { name: 'stock', url: 'inventory-stocks' }
        ],
        svgImg: MaterialsIcon,
        redirect: ''
    },

    {
        name: 'Man Power',
        submenu: [
            { name: 'labour', url: 'labour' },
            { name: 'contractor', url: 'contractor' }
        ],
        svgImg: LaboursIcon,
        redirect: ''
    },

    {
        name: 'Branches',
        submenu: [
            { name: 'Branch List', url: 'branch-list' },
            { name: 'Branch Request', url: 'branch-request' },
            { name: 'Branch Dashboard', url: 'branch-dashboard' }
        ],
        svgImg: BranchIcon,
        redirect: ''
    },

    {
        name: 'User Manager',
        submenu: [],
        svgImg: UserMangerIcon,
        redirect: '/users'
    },

    {
        name: 'Notifications',
        submenu: [],
        svgImg: NotificationIcon,
        redirect: '/'
    },

    {
        name: 'Settings',
        submenu: [],
        svgImg: SettingsIcon,
        redirect: '/settings'
    },

    {
        name: 'Logout',
        submenu: [],
        svgImg: LogoutIcon,
        redirect: '/'
    }
]

export default asideMenuItems;