

function PageLayout({children}) {
    return (
        <section>
            <AsideBar />
            {children}
        </section>
    )
}

export default PageLayout;