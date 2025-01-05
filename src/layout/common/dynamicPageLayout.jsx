import AsideBar from "@/apps/asideBar/asideBar";


function PageLayout({children}) {
    return (
        <section>
            <AsideBar />
            {children}
        </section>
    )
}

export default PageLayout;