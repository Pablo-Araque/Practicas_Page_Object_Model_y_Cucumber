export class GestionTarea {
 // Selectores
 elements = {
  inputNuevaTarea: () => cy.get('[data-testid="text-input"]'),
  seleccionarTarea: (texto) => cy.contains('label', texto),
  barraHerramientaAll: () => cy.get('.selected'),
  barraHerramientaActive: () => cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a'),
  barraHerramientaCompleted: () => cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a'),
  botonBorrar: function(texto) {
    return this.seleccionarTarea(texto).parent().find('button.destroy')},
  checkTarea: function(texto) {
    return this.seleccionarTarea(texto).parent().find('input.toggle')}
}

// Métodos
visitarPagina() {
    cy.visit('https://todomvc.com/examples/react/dist/');}


agregarTarea(nombreTarea) {
  this.elements.inputNuevaTarea().click().type(`${nombreTarea}{enter}`);}


borrarTarea(nombreTarea) {
  this.elements.botonBorrar(nombreTarea).click({ force: true });}


marcarTarea(nombreTarea) {
    this.elements.checkTarea(nombreTarea).click()}


filtrarTareaCompletadas(nombreTarea) {
    this.elements.barraHerramientaCompleted().click();
    this.elements.seleccionarTarea(nombreTarea).should('be.visible');
  }

    
  filtrarTareaActivas() {
    this.elements.barraHerramientaActive().click();}      
}
export const gestionTarea = new GestionTarea();
