import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './features/clientSlice/slice'
import vendorSlice from './features/vendorSlice/slice'
import projectSlice from './features/projectSlice/slice'
import contractorSlice from './features/contractorSlice/slice'
import expenseSlice from './features/expenseSlice/slice'
import branchSlice from './features/branchSlice/slice'
import branchClientSlice from './features/branchClientSlice/slice'
import collectionSlice from './features/collectionSlice/slice'
import labourSlice from './features/labourSlice/slice'
import settingSlice from './features/settingsSlice/slice'
import material_reqSlice from './features/materiai_reqSlice/slice'
import projectPhaseSlice from './features/projectPhaseSlice/slice'
import projectContractorSlice from './features/projectContractorSlice/slice'
import searchSlice from './features/searchSlice/slice'
import loginSlice from './features/loginSlice/slice'
import usersSlice from './features/usersSlice/slice'
import invoiceSlice from './features/invoiceSlice/slice'
import paginateSlice from './features/paginateSlice/slice'


export const store = configureStore({
  reducer: {
    client: clientSlice,
    vendor: vendorSlice,
    project: projectSlice,
    contractor: contractorSlice,
    expense: expenseSlice,
    branch_data: branchSlice,
    branch_client: branchClientSlice,
    collection: collectionSlice,
    labour: labourSlice,
    material_req: material_reqSlice,
    settings: settingSlice,
    project_phase: projectPhaseSlice,
    project_contractor: projectContractorSlice,
    search: searchSlice,
    login: loginSlice,
    users: usersSlice,
    invoice: invoiceSlice,
    paginate: paginateSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

