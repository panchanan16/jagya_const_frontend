import { DashboardIcon, ProjectIcon, ClientVendorIcon, AccountingIcon, MaterialsIcon, LaboursIcon, BranchIcon, UserMangerIcon, NotificationIcon, SettingsIcon, LogoutIcon } from "./icons";
const entity = "admin"
const asideMenuItems = [
    {
        name: 'Analytics',
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
            { name: 'Clients', url: `${entity}/clients` },
            { name: 'Vendors', url: `${entity}/vendors` }
        ],
        svgImg: ClientVendorIcon,
        redirect: ''
    },

    {
        name: 'Accounting',
        submenu: [
            { name: 'Finance', url: `${entity}/finance` },
            { name: 'Expense', url: `${entity}/expense` },
            { name: 'Invoices', url: `${entity}/invoices` }
        ],
        svgImg: AccountingIcon,
        redirect: ''
    },

    {
        name: 'Materials',
        submenu: [
            { name: 'Inventory', url: 'inventory' },
            { name: 'Material request', url: `${entity}/material-request` },
            { name: 'Finance requests', url: `${entity}/finance-request` },
            { name: 'Incharge', url: `${entity}/incharge` },
            { name: 'Stock', url: `${entity}/inventory-stocks` }
        ],
        svgImg: MaterialsIcon,
        redirect: ''
    },

    {
        name: 'Man Power',
        submenu: [
            { name: 'Labour', url: `${entity}/labour` },
            { name: 'Contractor', url: `${entity}/contractor` }
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
        redirect: `/${entity}/users`
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