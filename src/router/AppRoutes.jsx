import { Routes, Route } from "react-router";
import AccountPage from "@/pages/accounting";
import ClientPage from "@/pages/clientsVendor/client";
import DashboardPage from "@/pages/dashboard";
import ProjectPage from "@/pages/projects";
import VendorPage from "@/pages/clientsVendor/vendor";
import MaterialRequestPage from "@/pages/material/materialRequest";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            {/* <Route path="/projects" element={<ProjectPage />} />
            <Route path="/finance" element={<AccountPage />} />
            <Route path="/clients" element={<ClientPage />} />
            <Route path="/vendors" element={<VendorPage />} /> */}
            <Route path="/material-request" element={<MaterialRequestPage />} />
        </Routes>
    )
}

export default AppRoutes;