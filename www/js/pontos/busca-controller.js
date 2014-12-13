"use strict";
pontosApp.controller('buscaCtrl', [ '$scope', '$filter', function($scope, $filter) {
    
    $scope.selected = "";
    $scope.users = [
      {'id': 1, 'nome': 'Coxinha'}, 
      {'id': 2, 'nome': 'Arroz'},
      {'id': 3, 'nome': 'Coxa de Frango'},
      {'id': 4, 'nome': 'Carne'},
      {'id': 5, 'nome': 'Batata Frita'},
    ];
    
    $scope.matchBegin = function(expected, actual)
    {
	if(actual === null) return;
	var substr = $filter('limitTo')(expected, actual.length)
	return $filter('uppercase')(actual) === $filter('uppercase')(substr);
    };
    
} ]);