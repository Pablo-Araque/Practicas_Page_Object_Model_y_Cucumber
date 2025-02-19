import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTarea } from "../../pages/GestionTarea";

Given("creo la tarea", () => {
  gestionTarea.visitarPagina();
  gestionTarea.agregarTarea("Comprar el pan {enter}");
});
When("hago click en la tarea", () => {
  gestionTarea.marcarTarea("Comprar el pan");
});
Then("se muestra como completada", () => {
  gestionTarea.filtrarTareaCompletadas("Comprar el pan");
});

Given("elimino la tarea", () => {
  gestionTarea.visitarPagina();
  gestionTarea.agregarTarea("Vender el coche {enter}");
});
When("selecciono click en la tarea", () => {
  gestionTarea.marcarTarea("Vender el coche");
});
Then("queda eliminada", () => {
  gestionTarea.borrarTarea("Vender el coche");
});


Given("que tengo varias tareas creadas", () => {
  gestionTarea.visitarPagina();
  gestionTarea.agregarTarea("Vender el coche {enter}");
  gestionTarea.agregarTarea("Comprar el pan {enter}");
});
When("selecciono todas las tareas", () => {
  gestionTarea.marcarTarea("Vender el coche");
  gestionTarea.marcarTarea("Comprar el pan");
});
Then("quedan eliminadas las tareas", () => {
  gestionTarea.borrarTarea("Vender el coche");
  gestionTarea.borrarTarea("Comprar el pan");
});