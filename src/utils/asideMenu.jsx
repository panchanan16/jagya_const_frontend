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
            { name: 'incharge', url: 'incharge' }
        ],
        svgImg: MaterialsIcon,
        redirect: ''
    },

    {
        name: 'Labours',
        submenu: [],
        svgImg: LaboursIcon,
        redirect: '/'
    },

    {
        name: 'Branches',
        submenu: [],
        svgImg: BranchIcon,
        redirect: '/'
    },

    {
        name: 'User Manager',
        submenu: [],
        svgImg: UserMangerIcon,
        redirect: '/'
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
        redirect: '/'
    },

    {
        name: 'Logout',
        submenu: [],
        svgImg: LogoutIcon,
        redirect: '/'
    }
]

export default asideMenuItems;