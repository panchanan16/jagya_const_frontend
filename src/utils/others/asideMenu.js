import roles from "@/auth/role";
import { DashboardIcon, ProjectIcon, ClientVendorIcon, AccountingIcon, MaterialsIcon, LaboursIcon, BranchIcon, UserMangerIcon, NotificationIcon, SettingsIcon, LogoutIcon } from "./icons";
import { ROLES } from "@/config/route.config";

const entity = "admin"
const asideMenuItems = [
    {
        name: 'Analytics',
        submenu: [],
        svgImg: DashboardIcon,
        redirect: '/',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Projects',
        submenu: [],
        svgImg: ProjectIcon,
        redirect: `/${entity}/projects`,
        role: [ROLES.SUPERADMIN]
    },
    {
        name: 'Clients & Vendors',
        submenu: [
            { name: 'Clients', url: `${entity}/clients` },
            { name: 'Vendors', url: `${entity}/vendors` }
        ],
        svgImg: ClientVendorIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Accounting',
        submenu: [
            { name: 'Installments', url: `${entity}/finance` },
            { name: 'Expenses', url: `${entity}/expense` },
            { name: 'Invoices', url: `${entity}/invoices` }
        ],
        svgImg: AccountingIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Materials',
        submenu: [
            // { name: 'Inventory', url: 'inventory' },
            // { name: 'Material request', url: `${entity}/material-request` },
            { name: 'Finance requests', url: `${entity}/finance-request` },
            { name: 'Incharge', url: `${entity}/incharge` },
            { name: 'Stock', url: `${entity}/inventory-stocks` }
        ],
        svgImg: MaterialsIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Man Power',
        submenu: [
            { name: 'Labour', url: `${entity}/labour` },
            { name: 'Contractor', url: `${entity}/contractor` }
        ],
        svgImg: LaboursIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Branches',
        submenu: [
            { name: 'Branch List', url: `${entity}/branch-list` },
            { name: 'Branch Request', url: `${entity}/branch-request` },
            { name: 'Branch Dashboard', url: `${entity}/branch-dashboard` }
        ],
        svgImg: BranchIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN, ROLES.BRANCH]
    },

    {
        name: 'User Manager',
        submenu: [],
        svgImg: UserMangerIcon,
        redirect: `/${entity}/users`,
        role: [ROLES.SUPERADMIN]

    },

    {
        name: 'Settings',
        submenu: [],
        svgImg: SettingsIcon,
        redirect: `/${entity}/settings`,
        role: [ROLES.SUPERADMIN]
    }
]

export default asideMenuItems;