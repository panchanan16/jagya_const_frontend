import { DashboardIcon, ProjectIcon, ClientVendorIcon, AccountingIcon, MaterialsIcon, LaboursIcon, BranchIcon, UserMangerIcon, NotificationIcon, SettingsIcon, LogoutIcon } from "./icons";
const entity = "admin"
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
        redirect: `/${entity}/projects`
    },
    {
        name: 'Clients & Vendors',
        submenu: [
            { name: 'clients', url: `${entity}/clients` },
            { name: 'vendors', url: `${entity}/vendors` }
        ],
        svgImg: ClientVendorIcon,
        redirect: ''
    },

    {
        name: 'Accounting',
        submenu: [
            { name: 'finance', url: `${entity}/finance` },
            { name: 'expense', url: `${entity}/expense` },
            { name: 'invoices', url: `${entity}/invoices` }
        ],
        svgImg: AccountingIcon,
        redirect: ''
    },

    {
        name: 'Materials',
        submenu: [
            { name: 'inventory', url: 'inventory' },
            { name: 'material request', url: `${entity}/material-request` },
            { name: 'finance requests', url: `${entity}/finance-request` },
            { name: 'incharge', url: `${entity}/incharge` },
            { name: 'stock', url: `${entity}/inventory-stocks` }
        ],
        svgImg: MaterialsIcon,
        redirect: ''
    },

    {
        name: 'Man Power',
        submenu: [
            { name: 'labour', url: `${entity}/labour` },
            { name: 'contractor', url: `${entity}/contractor` }
        ],
        svgImg: LaboursIcon,
        redirect: ''
    },

    {
        name: 'Branches',
        submenu: [
            { name: 'Branch List', url: `${entity}/branch-list` },
            { name: 'Branch Request', url: `${entity}/branch-request` },
            { name: 'Branch Dashboard', url: `${entity}/branch-dashboard` }
        ],
        svgImg: BranchIcon,
        redirect: ''
    },

    {
        name: 'User Manager',
        submenu: [],
        svgImg: UserMangerIcon,
        redirect: `${entity}/users`
    },

    {
        name: 'Settings',
        submenu: [],
        svgImg: SettingsIcon,
        redirect: `/${entity}/settings`
    },

    {
        name: 'Logout',
        submenu: [],
        svgImg: LogoutIcon,
        redirect: '/admin/login'
    }
]

export default asideMenuItems;