describe ('Alert by elementosForm:nome', () => {
   it ('Should return failed if the spelling is wrong', () =>{

       cy.visit('./toTest.html')

       cy.get('[id="elementosForm:cadastrar"]').click()

       cy.on('window:alert', function(alertText){
           expect(alertText).eq('Nome é obrigatório')
       })

   })
})
describe ('Alert by elementosForm:sobrenome', () => {
    it ('Should return failed if the spelling is wrong', () =>{
 
        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Teste')
 
        cy.get('[id="elementosForm:cadastrar"]').click()
 
        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Sobrenome é obrigatório')
        })
 
    })
 })
 describe ('Alert by elementosForm:sexo:1', () => {
    it ('Should return failed if the spelling is wrong', () =>{
 
        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Teste')

        cy.get('[id="elementosForm:sobrenome"]').type('Um')

        cy.get('[id="elementosForm:cadastrar"]').click()
 
        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Sexo é obrigatório')
        })
 
    })
 })
 describe ('Alert by elementosForm:comidaFavorita:3', () => {
    it ('Should return failed if the spelling is wrong', () =>{

       cy.get('[id="elementosForm:nome"]').type('Teste')

       cy.get('[id="elementosForm:sobrenome"]').type('Dois')

       cy.get('[id="elementosForm:sexo:1"]').check()

       cy.get('[id="elementosForm:comidaFavorita:3"]').check()

       cy.get('[id="elementosForm:comidaFavorita:1"]').check()

       cy.get('[id="elementosForm:cadastrar"]').click()

       cy.on('window:alert', function(alertText){
           expect(alertText).eq('Tem certeza que você é vegetariano?')
       })
    })
})
describe ('Alert by elementosForm:esportes', () => {
    it ('Should return failed if the spelling is wrong', () =>{

       cy.get('[id="elementosForm:nome"]').type('Teste')

       cy.get('[id="elementosForm:sobrenome"]').type('Três')

       cy.get('[id="elementosForm:sexo:1"]').check()

       cy.get('[id="elementosForm:comidaFavorita:3"]').check()

       cy.get('[id="elementosForm:comidaFavorita:1"]').check()

       cy.get('[id="elementosForm:esportes"]').select('Natacao')

       cy.get('[id="elementosForm:esportes"]').select('O que eh esporte?')

       cy.get('[id="elementosForm:cadastrar"]').click()

       cy.on('window:alert', function(alertText){
           expect(alertText).eq('Você faz esporte ou não?')
       })
    })
})

