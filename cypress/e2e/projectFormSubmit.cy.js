describe('Projet Form Submission test', () => {
    it('finds the content here', () => {
        cy.visit('/projects')
        cy.contains('Projects retrieved successfully')
        cy.contains('Add Projects').click()
        cy.get('#angle-down').click()
        cy.get('form').within(() => {
            cy.get('#searchInp').click()
            cy.contains('JGCC0004 -| Babu lal mintu').click()
            cy.get('input[name="others"]').type('Nothing is speacial')
            cy.get('input[name="projectName"]').type('Nagaon, bebejia')
            cy.get('input[name="deadline"]').type('10/12/1220')
            cy.get('input[name="totalAmount"]').type(800000)
            cy.get('input[name="advanceAmount"]').type(800000)
            cy.get('input[name="siteDescription"]').type('Nagaon, bebejia')
            cy.get('input[name="projectDuration"]').type('Nagaon, bebejia')
            cy.get('select').select('G+1')
        })


        cy.get('button[type=submit]').contains('Add').click()

    })
})