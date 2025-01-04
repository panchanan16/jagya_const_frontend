import AccountPage from "@/pages/accounting/AccountPage"
import AsideBar from "./asideBar/asideBar"

function MainLayout() {
    return (
        <section>
            <AsideBar />
            <AccountPage />
        </section>
    )
}

export default MainLayout