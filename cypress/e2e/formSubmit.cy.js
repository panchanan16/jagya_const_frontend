describe('Form Submission test with display msg and loader', () => {
    it('finds the content here', () => {
        cy.visit('http://localhost:5173/clients')
        cy.contains('Clients retrieved successfully')
        cy.wait(3000)
        cy.contains('add clients').click()
        cy.get('form').within(() => {
            cy.get('input[name="client_name"]').type('Panchanan deka')
            cy.get('input[name="client_email"]').type('deka@gmail.com')
            cy.get('input[name="client_contact"]').type('9090909090')
            cy.get('input[name="client_alt_contact"]').type('8080808080')
            cy.get('input[name="client_address"]').type('Nagaon, bebejia')     
            cy.contains('Add').click()
        })

        cy.get('button[type=submit]').contains('Add').click()
        cy.get('span').contains('This field is required')
        cy.get('input[name="client_ref_no"]').type('789h5td')
        cy.get('button[type=submit]').contains('Add').click()
        cy.get('div').contains('Submission in Progress...')
        cy.get('div').contains('Something Went Wrong!')
    })
})
