Feature: todo
  Scenario: Completar una tarea
    Given creo la tarea 
    When hago click en la tarea
    Then se muestra como completada

  Scenario: Eliminar tarea
   Given elimino la tarea
    When selecciono click en la tarea
    Then queda eliminada

  Scenario: Eliminar varias tareas
   Given que tengo varias tareas creadas
    When selecciono todas las tareas
    Then quedan eliminadas las tareas