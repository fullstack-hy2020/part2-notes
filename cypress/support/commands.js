Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST',  `${Cypress.env('BACKEND')}/login`, {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedNoteappUser', JSON.stringify(body))
    cy.visit('')
  })
})

Cypress.Commands.add('createNote', ({ content, important }) => {
  cy.request({
    url: `${Cypress.env('BACKEND')}/notes`,
    method: 'POST',
    body: { content, important },
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('loggedNoteappUser')).token}`
    }
  })

  cy.visit('')
})