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
import InventoryPage from "@/pages/material/inventory";
import SecondSlideInventory from "@/pages/material/inventory/modules/secondSlideInventory";
import AddInventoryForm from "@/forms/addInventory/addInventoryForm";
import SecondSlideMR from "@/pages/material/materialRequest/modules/secondSlide";
import LabourPage from "@/pages/manpower/labours";
import FinanceRequestPage from "@/pages/material/financeRequest";
import SecondSlideFinanceReq from "@/pages/material/financeRequest/modules/secondSlideFinanceReq";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routePages from "./routes";

function AppRoutes() {
  const router = createBrowserRouter(routePages);

  return <RouterProvider router={router} />;

  // return (
  //     <Routes>
  //         <Route path="/" element={<DashboardPage />} />
  //         <Route path="/projects" element={<ProjectPage />}>
  //             <Route path="add-project" element={<AddProjectForm />} />
  //             <Route path="project-details/:userId" element={<SecondSlideProject />} />
  //         </Route>
  //         <Route path="/clients" element={<ClientPage />}>
  //             <Route path="client-details/:clientId" element={<SecondSlide />} />
  //             <Route path="add-clients" element={<AddClientForm />} />
  //         </Route>
  //         <Route path="/vendors" element={<VendorPage />} />
  //         {/* Acounting Routes */}
  //         <Route path="/finance" element={<FinancePage />}>
  //             <Route path="finance-details/:id" element={<SecondSlideFinance />} />
  //             <Route path="add-installment" element={<InstallmentForm />} />
  //         </Route>
  //         <Route path="/expense" element={<ExpensePage />}>
  //             <Route path="finance-details/:id" element={<SecondSlideFinance />} />
  //             <Route path="add-expense" element={<AddExpenseForm />} />
  //         </Route>
  //         {/* material Routes */}
  //         <Route path="/inventory" element={<InventoryPage />}>
  //             <Route path="inventory-details/:id" element={<SecondSlideInventory />} />
  //             <Route path="add-inventory" element={<AddInventoryForm />} />
  //         </Route>
  //         <Route path="/material-request" element={<MaterialRequestPage />}>
  //             <Route path=":id" element={<SecondSlideMR />} />
  //             <Route path="add-inventory" element={<AddInventoryForm />} />
  //         </Route>
  //         <Route path="/finance-request" element={<FinanceRequestPage />}>
  //             <Route path=":id" element={<SecondSlideFinanceReq />} />
  //             <Route path="add-inventory" element={<AddInventoryForm />} />
  //         </Route>
  //         {/* Man Powers */}
  //         <Route path="/labour" element={<LabourPage />}>
  //             <Route path=":id" element={<SecondSlideMR />} />
  //             <Route path="add-inventory" element={<AddInventoryForm />} />
  //         </Route>
  //     </Routes>
  // )
}

export default AppRoutes;
