import { Routes, Route } from "react-router";
import AccountPage from "@/pages/accounting";
import ClientPage from "@/pages/clientsVendor/client";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AccountPage />} />
            <Route path="/clients" element={<ClientPage />} />
        </Routes>
    )
}

export default AppRoutes