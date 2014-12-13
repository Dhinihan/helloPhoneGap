'use strict';

var pontosApp = angular.module('pontosApp', [ 'ngRoute', 'ui.bootstrap']);

pontosApp.config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
	templateUrl : 'pontos/busca.html',
	controller : 'buscaCtrl'
    }).otherwise({
	redirectTo : '/index'
    });
} ]);