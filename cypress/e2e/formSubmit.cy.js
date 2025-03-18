describe('Form Submission test with display msg and loader', () => {
    it('finds the content here', () => {
        cy.visit('/clients')
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
        cy.get('input[name="client_ref_no"]').type('7832ktd1')
        // cy.intercept('POST', 'http://localhost:3500/api/v1/entity/client/create', {
        //     statusCode: 201,
        //     body: { success: true, msg: "created successfully!" },
        //     log: false
        // }).as('createClient')

        cy.get('button[type=submit]').contains('Add').click()
        cy.get('div').contains('Submission in Update...')
        cy.get('div').contains('Something Went Wrong!').should('not.exist')
        cy.get('div').contains('Client created successfully').should('be.visible')
        cy.wait(3000)
        cy.contains('Client created successfully').should('not.exist')
        cy.contains('Something Went Wrong!').should('not.be.visible')

        // cy.wait('@createClient').then((interception) => {
        //     expect(interception.response.statusCode).to.equal(201);
        //     cy.get('div').contains('Submission in Update...')
        //     cy.get('div').contains('Something Went Wrong!')
        //     cy.contains('Something Went Wrong!').should('not.be.visible')
        // })

    })
})
