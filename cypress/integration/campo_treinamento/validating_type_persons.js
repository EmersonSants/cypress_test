describe ('Registration type of person 1', () => {
    // Person 1 = Contém apenas Nome e Sobrenome
    it('Should return an alert "Sexo eh obrigatorio" and status "Não Cadastrado"', () => {
        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Pessoa')

        cy.get('[id="elementosForm:sobrenome"]').type('Um')

        cy.get('[id="elementosForm:cadastrar"]').click()

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Sexo eh obrigatorio')
        })

        cy.contains('Status: Nao cadastrado')

    })
}) 
describe ('Registration type of person 2', () =>{
    // Person 2 = Contém apenas Nome,Sobrenome e Sexo Masculino
    it('Should return status "Cadastrado!"', () => {
        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Pessoa')

        cy.get('[id="elementosForm:sobrenome"]').type('Dois')

        cy.get('[id="elementosForm:sexo:0"]').check()

        cy.get('[id="elementosForm:cadastrar"]').click()

        cy.contains('Cadastrado!')
    })
})
describe ('Registration type of person 3', () => {
     // Person 3 = Contém apenas Nome,Sobrenome e Sexo Feminino e vegetariana

    it ('Should return status "Cadastrado!"', () =>{
        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Pessoa')

        cy.get('[id="elementosForm:sobrenome"]').type('Três')

        cy.get('[id="elementosForm:sexo:1"]').check()

        cy.get('[id="elementosForm:comidaFavorita:3"]').check()

        cy.get('[id="elementosForm:comidaFavorita:2"]').check()

        cy.get('[id="elementosForm:cadastrar"]').click()

        cy.contains('Cadastrado!')

    })
})
describe ('Registration type of person 4', () => {
    // Person 4 = Contém apenas Nome,Sobrenome e Sexo Feminino com checkbox Carne e Vegetariana

   it ('Should return status "Não cadastrado" e alert "Tem certeza que é vegetariano ?"', () =>{
       cy.visit('./toTest.html')

       cy.get('[id="elementosForm:nome"]').type('Pessoa')

       cy.get('[id="elementosForm:sobrenome"]').type('Quatro')

       cy.get('[id="elementosForm:sexo:1"]').check()

       cy.get('[id="elementosForm:comidaFavorita:3"]').check()

       cy.get('[id="elementosForm:comidaFavorita:1"]').check()

       cy.get('[id="elementosForm:cadastrar"]').click()

       cy.on('window:alert', function(alertText){
           expect(alertText).eq('Tem certeza que voce eh vegetariano?')
       })

       cy.contains('Status: Nao cadastrado')

   })
})
describe ('Registration type of person 5', () => {
        // Person 5 = Contém apenas Nome,Sobrenome,Sexo Feminino,checkbox e combobox marcada
    it ('Should return status "Cadastrado!', () =>{

        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Pessoa')

        cy.get('[id="elementosForm:sobrenome"]').type('Cinco')

        cy.get('[id="elementosForm:sexo:1"]').check()

        cy.get('[id="elementosForm:comidaFavorita:0"]').check()

        cy.get('[id="elementosForm:comidaFavorita:1"]').check()

        cy.get('[id="elementosForm:escolaridade"]').select('2o grau completo')

        cy.get('[id="elementosForm:cadastrar"]').click()

        cy.contains('Cadastrado!')

    })
})

describe ('Registration type of person 6', () => {
    //Person 6 = Contém apenas Nome, Sobrenome, Sexo Feminino, Checkbox, Combobox marcada e Listbox
    it('Should return status "Cadastrado!"', () =>{

        cy.visit('./toTest.html')

        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Pessoa')

        cy.get('[id="elementosForm:sobrenome"]').type('Seis')

        cy.get('[id="elementosForm:sexo:1"]').check()

        cy.get('[id="elementosForm:comidaFavorita:0"]').check()

        cy.get('[id="elementosForm:comidaFavorita:1"]').check()

        cy.get('[id="elementosForm:escolaridade"]').select('Mestrado')

        cy.get('[id="elementosForm:esportes"]').select('Natacao')

        cy.get('[id="elementosForm:cadastrar"]').click()

        cy.contains('Cadastrado!')

    })
})
describe ('Registration type of person 7', () => {
    //Person 7 = Contém apenas Nome, Sobrenome, Sexo Feminino, Checkbox, Combobox marcada,Listbox e Textbox preenchida
    it('Should return status "Cadastrado!"', () =>{

        cy.visit('./toTest.html')

        cy.get('[id="elementosForm:nome"]').type('Pessoa')

        cy.get('[id="elementosForm:sobrenome"]').type('Seis')

        cy.get('[id="elementosForm:sexo:1"]').check()

        cy.get('[id="elementosForm:comidaFavorita:0"]').check()

        cy.get('[id="elementosForm:comidaFavorita:1"]').check()

        cy.get('[id="elementosForm:escolaridade"]').select('Doutorado')

        cy.get('[id="elementosForm:esportes"]').select('Futebol')

        cy.get('[id="elementosForm:sugestoes"]').type('O tempo que se passa dedicado a prejudicar o outro é o tempo que se perde para construir a própria vida, reflita, faça as contas e veja o que compensa.')

        cy.get('[id="elementosForm:cadastrar"]').click()

        cy.contains('Cadastrado!')

    })
})

