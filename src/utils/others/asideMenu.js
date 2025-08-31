import roles from "@/auth/role";
import { DashboardIcon, ProjectIcon, ClientVendorIcon, AccountingIcon, MaterialsIcon, LaboursIcon, BranchIcon, UserMangerIcon, NotificationIcon, SettingsIcon, LogoutIcon } from "./icons";
import { ROLES } from "@/config/route.config";
import { BadgeDollarSignIcon, BookUserIcon, CirclePoundSterling, HatGlassesIcon, LayoutDashboard, PencilRulerIcon, PickaxeIcon, Settings2Icon, Users2 } from "lucide-react";

const entity = "admin"
const asideMenuItems = [
    {
        name: 'Analytics',
        submenu: [],
        svgImg: LayoutDashboard,
        redirect: '/admin/dashboard',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Projects',
        submenu: [],
        svgImg: PickaxeIcon,
        redirect: `/${entity}/projects`,
        role: [ROLES.SUPERADMIN]
    },
    {
        name: 'Clients & Vendors',
        submenu: [
            { name: 'Clients', url: `${entity}/clients` },
            { name: 'Vendors', url: `${entity}/vendors` }
        ],
        svgImg: BookUserIcon,
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
        svgImg: BadgeDollarSignIcon,
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
        svgImg: PencilRulerIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN]
    },

    {
        name: 'Man Power',
        submenu: [
            { name: 'Labour', url: `${entity}/labour` },
            { name: 'Contractor', url: `${entity}/contractor` }
        ],
        svgImg: HatGlassesIcon,
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
        // svgImg: BranchIcon,
        redirect: '',
        role: [ROLES.SUPERADMIN, ROLES.BRANCH]
    },

    {
        name: 'User Manager',
        submenu: [],
        svgImg: Users2,
        redirect: `/${entity}/users`,
        role: [ROLES.SUPERADMIN]

    },

    {
        name: 'Settings',
        submenu: [],
        svgImg: Settings2Icon,
        redirect: `/${entity}/settings`,
        role: [ROLES.SUPERADMIN]
    }
]

export default asideMenuItems;