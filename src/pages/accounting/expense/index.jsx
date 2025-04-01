import DynamicLayout from "@/layout/common/dynamicLayout"
import PageLayout from "@/layout/common/dynamicPageLayout"
import { Outlet } from "react-router-dom"
import FirstSlideExpense from "./modules/firstSlideExpense"


function ExpensePage() {
    return (
        <PageLayout>
            <DynamicLayout>
                <FirstSlideExpense />
                <Outlet />
            </DynamicLayout>
        </PageLayout>
    )
}

export default ExpensePage