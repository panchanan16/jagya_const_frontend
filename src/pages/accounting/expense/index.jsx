import DynamicLayout from "@/layout/common/dynamicLayout"
import PageLayout from "@/layout/common/dynamicPageLayout"
import { Outlet } from "react-router"
import FirstSlideExpense from "../modules/expenseModule/firstSlideExpense"

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