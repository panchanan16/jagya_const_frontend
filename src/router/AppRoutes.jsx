import { Routes, Route } from "react-router";
import ClientPage from "@/pages/clientsVendor/client";
import DashboardPage from "@/pages/dashboard";
import ProjectPage from "@/pages/projects";
import VendorPage from "@/pages/clientsVendor/vendor";
import MaterialRequestPage from "@/pages/material/materialRequest";
import AddProjectForm from "@/forms/addProject/addProjectForm";
import SecondSlideProject from "@/pages/projects/modules/secondSlide";
import SecondSlide from "@/pages/clientsVendor/modules/clientsModule/secondSlide";
import AddClientForm from "@/forms/addClient/addClientForm";
import FinancePage from "@/pages/accounting/finance";
import SecondSlideFinance from "@/pages/accounting/modules/financeModule/secondSlideFinance";
import InstallmentForm from "@/forms/addInstallment/installmentForm";
import ExpensePage from "@/pages/accounting/expense";
import AddExpenseForm from "@/forms/addExpense/AddExpenseForm";



function AppRoutes() {

    // let element = useRoutes([
    //     {
    //         path: "/clients",
    //         element: <ClientPage />,
    //         children: [
    //             {
    //                 path: "client-details/:clientId",
    //                 element: <SecondSlide />,
    //             },
    //             { path: "add-clients", element: <AddClientForm /> },
    //         ],
    //     }
    // ]);

    // return element
        return (
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/projects" element={<ProjectPage />}>
                    <Route path="add-project" element={<AddProjectForm />} />
                    <Route path="project-details/:userId" element={<SecondSlideProject />} />
                </Route>
                <Route path="/clients" element={<ClientPage />}>
                    <Route path="client-details/:clientId" element={<SecondSlide />} />
                    <Route path="add-clients" element={<AddClientForm />} />
                </Route>
                <Route path="/vendors" element={<VendorPage />} />
                {/* Acounting Routes */}
                <Route path="/finance" element={<FinancePage />}>
                    <Route path="finance-details/:id" element={<SecondSlideFinance />} />
                    <Route path="add-installment" element={<InstallmentForm />} />
                </Route>
                <Route path="/expense" element={<ExpensePage />}>
                    <Route path="finance-details/:id" element={<SecondSlideFinance />} />
                    <Route path="add-expense" element={<AddExpenseForm />} />
                </Route>
                {/* material Routes */}
                <Route path="/material-request" element={<MaterialRequestPage />} />
            </Routes>
        )
}

export default AppRoutes;