"use strict";
pontosApp.controller('buscaCtrl', [ '$scope', '$filter', function($scope, $filter) {
    
    var db = window.openDatabase("sgpw", "1.0", "PhoneGap Demo", 200000); 

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() { 

	$scope.teste = "teste";

    }
    
    
    
    
    $scope.selected = "";
    $scope.users = [
      {'id': 1, 'nome': 'Coxinha', 'pontos': 42}, 
      {'id': 2, 'nome': 'Arroz', 'pontos': 27},
      {'id': 3, 'nome': 'Coxa de Frango', 'pontos': 18},
      {'id': 4, 'nome': 'Carne', 'pontos': 37},
      {'id': 5, 'nome': 'Batata Frita', 'pontos': 50},
    ];
    
    var niveis = {
	    warning: 20,
	    danger:  40
    }
    
    $scope.matchBegin = function(expected, actual)
    {
	if(actual === null) return;
	var substr = $filter('limitTo')(expected, actual.length)
	return $filter('uppercase')(actual) === $filter('uppercase')(substr);
    };
    
    $scope.tipoDeComida = function(comida){
	if(comida === null)
	    return "default";
	if(comida.pontos < niveis.warning)
	    return "success";
	if(comida.pontos < niveis.danger)
	    return "warning";
	return "danger";
    }
    
    
    
} ]);