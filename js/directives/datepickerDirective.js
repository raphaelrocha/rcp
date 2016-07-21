angular.module("rcpApp").directive('datepicker', function() {
  return {
    require: 'ngModel',
    link: function(scope, el, attr, ngModel) {
    	console.log("DATEPICKER DIRECTIVE");
    	console.log(el[0].id);
      $("#"+el[0].id).datepicker({
      	dateFormat: 'dd/mm/yy',                
		dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
	    dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
	    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
	    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
	    nextText: 'Próximo',
	    prevText: 'Anterior',
	    //showOn: "button",
	    //buttonImage: "img/calendar-icon.png",
	    //buttonImageOnly: true,
        onSelect: function(dateText) {
        	console.log("onSelect");
        	console.log(dateText);
          scope.$apply(function() {
            ngModel.$setViewValue(dateText);
          });
        }
      });
    }
  };
});