describe('Clique me button', () => {
    it('Post click response', () =>{

        cy.visit('./toTest.html');

        cy.get('[id="buttonSimple"]').click();

        cy.get('[id="buttonSimple"]').should('have.value', 'Obrigado!');


    })
})
describe('Open Pop up function', () =>{
    it('Abrir Pop up', () => {

        cy.visit('./toTest.html');

        cy.get('[id="buttonPopUpEasy"]').click();

    })
})
describe('Open Pop up function', () =>{
    it('Abrir Popup do mal', () =>{

        cy.visit('./toTest.html');

        cy.get('[id="buttonPopUpHard"]').click();

    })
})
describe('Open Pop up function', () =>{
    it('Resposta Demorada', () =>{

        cy.visit('./toTest.html');

        cy.get('#buttonDelay').click();

        cy.wait(500);

    })
})
describe('Open alerts windows ', () =>{
    it('Must open an alert for each button 1', () => {

        // Francisco

        cy.visit('./toTest.html');

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input').click();

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Francisco')
        })

    })
})
describe('Open alerts windows', () => {
    it('Must open an alert for each button 2', () =>{
        
        // Maria

        cy.visit('./toTest.html');

        cy.get(':nth-child(2) > :nth-child(3) > input').click();

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Maria')
        })
    })
})
describe('Open alerts windows', () => {
    it('Must open an alert for each button 3', () =>  {

        // Usuário A 

        cy.visit('./toTest.html');

        cy.get(':nth-child(3) > :nth-child(3) > input').click();

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Usuario A')
        })
    })
})
describe('Open alerts windows', () => {
    it('Must open an alert for each button 4', () =>{

        // Doutorado

        cy.visit('./toTest.html');

        cy.get(':nth-child(4) > :nth-child(3) > input').click();

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Doutorado')
        })
    })
})
describe('Open alert windows', () => {
    it('Must open an alert for each button 5', () => {

        // Usuário B

        cy.visit('./toTest.html');

        cy.get(':nth-child(5) > :nth-child(3) > input').click();

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Usuario B')
        })
    })
})
describe('Checkbox Test', () => {
    it('Should be possible to be selected and unselected ', () => {

        // Selected

        cy.visit('./toTest.html');

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').check();
        cy.get(':nth-child(2) > :nth-child(4) > input').check();
        cy.get(':nth-child(3) > :nth-child(4) > input').check();
        cy.get(':nth-child(4) > :nth-child(4) > input').check();
        cy.get(':nth-child(5) > :nth-child(4) > input').check();

        // Unselected

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').uncheck(); 
        cy.get(':nth-child(2) > :nth-child(4) > input').uncheck();
        cy.get(':nth-child(3) > :nth-child(4) > input').uncheck();
        cy.get(':nth-child(4) > :nth-child(4) > input').uncheck();
        cy.get(':nth-child(5) > :nth-child(4) > input').uncheck();
 
    })
})
describe('Radio Tests', () => {
    it('Should be possible to be selected', () => {
        
        // Selected 

        cy.visit('./toTest.html');

        cy.get(':nth-child(1) > :nth-child(5) > table > tbody > tr > td > input').check();
        cy.get(':nth-child(2) > :nth-child(5) > table > tbody > tr > td > input').check();
        cy.get(':nth-child(3) > :nth-child(5) > table > tbody > tr > td > input').check();
        cy.get(':nth-child(4) > :nth-child(5) > table > tbody > tr > td > input').check();
        cy.get(':nth-child(5) > :nth-child(5) > table > tbody > tr > td > input').check();

    
    })
})
describe('Text Inputs', () => {
    it('Should be possible to type and delete', () => {

        cy.visit('./toTest.html');
        // Testando se caracteres especiais são aceitos
        cy.get(':nth-child(6) > input').first().type('123456789');
        cy.get(':nth-child(2) > :nth-child(6) > input').type('!@#$%¨&*');
        cy.get(':nth-child(3) > :nth-child(6) > input').type('MAIÚSCULAS');
        cy.get(':nth-child(4) > :nth-child(6) > input').type('minúsculas');
        cy.get(':nth-child(5) > :nth-child(6) > input').type('O sucesso é a soma de pequenos esforços dia após dia');

    })
})
describe('Testing alerts in the bottom corner', () => {
    it('Alert button', () => {

        cy.visit('./toTest.html');

        cy.get('#alert').click();

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Alert Simples')
        })
    })
})
describe('Testing alerts in the bottom corner', () => {
    it('Confirm buttom', () => {

        cy.visit('./toTest.html');

        cy.get('#confirm').click();

        cy.on('window:confirm', function(confirmText){
            return true,
            expect(confirmText).eq('Confirm Simples')
        })

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('Confirmado')
        })


    })
})
describe('Testing alerts in the bottom corner', () => {
    it('Prompt buttom', () => {

        cy.visit('./toTest.html');

        cy.get('#prompt').click();

        cy.on('window:confirm', function(confirmText){
            return true,
            expect(confirmText).eq('Era 5?')
        })
        cy.on('window:alert', function(alertText){
            expect(alertText).eq(':D')
        })


    })
})
describe('Testing link "Voltar"', () => {
    it('Should return the empty page', () =>{

        cy.visit('./toTest.html')

        cy.get(':nth-child(1) > a').click()

        cy.contains('Voltou!')

    })
})
