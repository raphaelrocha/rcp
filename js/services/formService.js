angular.module("rcpApp").service('formService', function() {
  var formulario;
  var horarios;

  var addFormulario = function(newObj) {
      formulario = newObj;
  };

  var addHorarios = function(newObj) {
      horarios = newObj;
  };

  var getFormulario = function(){
      return formulario;
  };

  var getHorarios = function(){
      return horarios;
  };

  return {
    addFormulario: addFormulario,
    addHorarios: addHorarios,
    getFormulario: getFormulario,
    getHorarios: getHorarios,
  };

});