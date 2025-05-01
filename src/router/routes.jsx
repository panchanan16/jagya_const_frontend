import AddClientForm from "@/forms/addClient/addClientForm";
import AddExpenseForm from "@/forms/addExpense/AddExpenseForm";
import InstallmentForm from "@/forms/addInstallment/installmentForm";
import AddInventoryForm from "@/forms/addInventory/addInventoryForm";
import AddProjectForm from "@/forms/addProject/addProjectForm";
import AddRequestForm from "@/forms/addRequest/addRequestForm";
import AddvendorForm from "@/forms/addVendor/addvendorForm";
import ExpensePage from "@/pages/accounting/expense";
import FinancePage from "@/pages/accounting/finance";
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
import BranchRequestPage from "@/pages/branch/branchRequest";
import SecondSlideBranchRequest from "@/pages/branch/branchRequest/modules/secondSlideBranchRequest";
import BranchListPage from "@/pages/branch/branch";
import SecondSlideBranchList from "@/pages/branch/branch/modules/secondSlideBranchList";
import AddBranchForm from "@/forms/addBranch/addBranch";
import BranchDashboard from "@/pages/branch/branchDashboard";
import AddBranchProjectForm from "@/forms/addBranchProject/addBranchProjectForm";
import SecondSlideBranchDashboard from "@/pages/branch/branchDashboard/modules/secondSlideBranchDashboard";
import SecondSlideFinance from "@/pages/accounting/finance/modules/secondSlideFinance";
import SecondSlideExpense from "@/pages/accounting/expense/modules/secondSlideExpense";
import SettingsPage from "@/pages/settings";
import AddLabourForm from "@/forms/addLabour/AddLabourForm";
import InvoicePage from "@/pages/accounting/invoice";
import AddInvoiceForm from "@/forms/addInvoice/AddInvoiceForm";
import SecondSlideInvoice from "@/pages/accounting/invoice/modules/SecondSlideInvoice";
import AddRequestFinance from "@/forms/addRequestFinance/AddRequestFinance";

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
      { path: "create/:id", element: <AddProjectForm /> },
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
      { path: "create", element: <AddClientForm /> },
      { path: "create/:id", element: <AddClientForm /> },
    ],
  },
  {
    path: "/vendors",
    element: <VendorPage />,
    children: [
      { path: ":id", element: <SecondSlideVendor /> },
      { path: "create", element: <AddvendorForm /> },
      { path: "create/:id", element: <AddvendorForm /> },
    ],
  },
  {
    path: "/finance",
    element: <FinancePage />,
    children: [
      { path: ":id", element: <SecondSlideFinance /> },
      { path: "add-installment", element: <InstallmentForm /> },
      { path: "create/:id", element: <InstallmentForm /> },
    ],
  },
  {
    path: "/expense",
    element: <ExpensePage />,
    children: [
      { path: ":id", element: <SecondSlideExpense /> },
      { path: "add-expense", element: <AddExpenseForm /> },
      { path: "create/:id", element: <AddExpenseForm /> },
    ],
  },
  {
    path: "/invoices",
    element: <InvoicePage />,
    children: [
      { path: ":id", element: <SecondSlideInvoice /> },
      { path: "create", element: <AddInvoiceForm /> },
      { path: "create/:id", element: <AddInvoiceForm /> },
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
      { path: "create/:id", element: <AddRequestFinance /> },
      { path: "add-inventory", element: <AddInventoryForm /> },
    ],
  },
  {
    path: "/incharge",
    element: <InchargeReqPage />,
    children: [
      { path: ":id", element: <SecondSlideInchargeReq /> },
      { path: "create", element: <AddRequestForm /> },
    ],
  },
  {
    path: "/labour",
    element: <LabourPage />,
    children: [
      { path: ":id", element: <SecondSlideMR /> },
      { path: "create", element: <AddLabourForm /> },
      { path: "create/:id", element: <AddLabourForm /> },
    ],
  },

  {
    path: "/contractor",
    element: <ContractorPage />,
    children: [
      { path: ":id", element: <SecondSlideContractor /> },
      { path: "create", element: <AddContractorForm /> },
      { path: "create/:id", element: <AddContractorForm /> },
    ],
  },

  {
    path: "/branch-dashboard",
    element: <BranchDashboard />,
    children: [
      { path: ":id", element: <SecondSlideBranchDashboard /> },
      { path: "add-branch-project", element: <AddBranchProjectForm /> },
    ],
  },

  {
    path: "/branch-request",
    element: <BranchRequestPage />,
    children: [
      { path: ":id", element: <SecondSlideBranchRequest /> },
      { path: "add-contractor", element: <AddContractorForm /> },
    ],
  },

  {
    path: "/branch-list",
    element: <BranchListPage />,
    children: [
      { path: ":id", element: <SecondSlideBranchList /> },
      { path: "add-branch", element: <AddBranchForm /> },
    ],
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    children: [
      { path: ":id", element: <SecondSlideBranchList /> },
      { path: "add-branch", element: <AddBranchForm /> },
    ],
  },
];

export default routePages;
