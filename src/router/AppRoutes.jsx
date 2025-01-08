import { Routes, Route } from "react-router";
import AccountPage from "@/pages/accounting";
import ClientPage from "@/pages/clientsVendor/client";
import DashboardPage from "@/pages/dashboard";
import ProjectPage from "@/pages/projects";
import VendorPage from "@/pages/clientsVendor/vendor";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/finance" element={<AccountPage />} />
            <Route path="/clients" element={<ClientPage />} />
            <Route path="/vendors" element={<VendorPage />} />
        </Routes>
    )
}

export default AppRoutes;