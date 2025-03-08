import AddClientForm from "@/forms/addClient/addClientForm";
import AddExpenseForm from "@/forms/addExpense/AddExpenseForm";
import InstallmentForm from "@/forms/addInstallment/installmentForm";
import AddInventoryForm from "@/forms/addInventory/addInventoryForm";
import AddProjectForm from "@/forms/addProject/addProjectForm";
import AddRequestForm from "@/forms/addRequest/addRequestForm";
import AddvendorForm from "@/forms/addVendor/addvendorForm";
import ExpensePage from "@/pages/accounting/expense";
import FinancePage from "@/pages/accounting/finance";
import SecondSlideExpense from "@/pages/accounting/modules/expenseModule/secondSlideExpense";
import SecondSlideFinance from "@/pages/accounting/modules/financeModule/secondSlideFinance";
import ClientPage from "@/pages/clientsVendor/client";
import SecondSlide from "@/pages/clientsVendor/client/modules/secondSlide";
import SecondSlideVendor from "@/pages/clientsVendor/vendor/modules/secondSlidevendor";
import VendorPage from "@/pages/clientsVendor/vendor";
import DashboardPage from "@/pages/dashboard";
import LabourPage from "@/pages/manpower/labours";
import FinanceRequestPage from "@/pages/material/financeRequest";
import SecondSlideFinanceReq from "@/pages/material/financeRequest/modules/secondSlideFinanceReq";
import InchargeReqPage from "@/pages/material/inchargeRequest";
import SecondSlideInchargeReq from "@/pages/material/inchargeRequest/modules/secondSlideInchargeReq";
import InventoryPage from "@/pages/material/inventory";
import SecondSlideInventory from "@/pages/material/inventory/modules/secondSlideInventory";
import MaterialRequestPage from "@/pages/material/materialRequest";
import SecondSlideMR from "@/pages/material/materialRequest/modules/secondSlide";
import ProjectPage from "@/pages/projects";
import SecondSlideProject from "@/pages/projects/modules/secondSlideProject";
import AssignContractorForm from "@/forms/assignContractor/AssignContractorForm";
import ContractorAssigned from "@/pages/projects/modules/contractors/ContractorAssigned";
import AddNewPhaseForm from "@/forms/addPhase/AddNewPhaseForm";
import AddSubphaseForm from "@/forms/addSubphase/AddSubphaseForm";
import ContractorPage from "@/pages/manpower/contractors";
import SecondSlideContractor from "@/pages/manpower/contractors/modules/secondSlideContractors";
import AddContractorForm from "@/forms/addContractor/addContractorForm";

const routePages = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
    children: [
      { path: "add-project", element: <AddProjectForm /> },
      {
        path: ":userId",
        element: <SecondSlideProject />,
        children: [
          { path: "assign", element: <AssignContractorForm /> },
          { path: "assigned", element: <ContractorAssigned /> },
          { path: "add-phase", element: <AddNewPhaseForm /> },
          { path: "add-subphase", element: <AddSubphaseForm /> },
        ],
      },
    ],
  },
  {
    path: "/clients",
    element: <ClientPage />,
    children: [
      { path: ":id", element: <SecondSlide /> },
      { path: "add-clients", element: <AddClientForm /> },
    ],
  },
  {
    path: "/vendors",
    element: <VendorPage />,
    children: [
      { path: ":id", element: <SecondSlideVendor /> },
      { path: "add-vendor", element: <AddvendorForm /> },
    ],
  },
  {
    path: "/finance",
    element: <FinancePage />,
    children: [
      { path: "finance-details/:id", element: <SecondSlideFinance /> },
      { path: "add-installment", element: <InstallmentForm /> },
    ],
  },
  {
    path: "/expense",
    element: <ExpensePage />,
    children: [
      { path: "expense-details/:id", element: <SecondSlideExpense /> },
      { path: "add-expense", element: <AddExpenseForm /> },
    ],
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
    children: [
      { path: "inventory-details/:id", element: <SecondSlideInventory /> },
      { path: "add-inventory", element: <AddInventoryForm /> },
    ],
  },
  {
    path: "/material-request",
    element: <MaterialRequestPage />,
    children: [
      { path: ":id", element: <SecondSlideMR /> },
      { path: "add-inventory", element: <AddInventoryForm /> },
    ],
  },
  {
    path: "/finance-request",
    element: <FinanceRequestPage />,
    children: [
      { path: ":id", element: <SecondSlideFinanceReq /> },
      { path: "add-inventory", element: <AddInventoryForm /> },
    ],
  },
  {
    path: "/incharge",
    element: <InchargeReqPage />,
    children: [
      { path: ":id", element: <SecondSlideInchargeReq /> },
      { path: "add-request", element: <AddRequestForm /> },
    ],
  },
  {
    path: "/labour",
    element: <LabourPage />,
    children: [
      { path: ":id", element: <SecondSlideMR /> },
      { path: "add-inventory", element: <AddInventoryForm /> },
    ],
  },

  {
    path: "/contractor",
    element: <ContractorPage />,
    children: [
      { path: ":id", element: <SecondSlideContractor /> },
      { path: "add-contractor", element: <AddContractorForm /> },
    ],
  },
];

export default routePages;
