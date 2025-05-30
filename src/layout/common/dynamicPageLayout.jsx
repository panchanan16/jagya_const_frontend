import AsideBar from "@/apps/asideBar/asideBar";


function PageLayout({children, name}) {
    return (
        <section>
            <AsideBar />
            {children}
        </section>
    )
}

export default PageLayout;