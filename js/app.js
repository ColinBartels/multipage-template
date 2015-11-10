// Create app
var myApp = angular.module('myApp', ['ui.router']);
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	.state('about', {
		url:'/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.state('content', {
		url: '/content',
		templateUrl: 'templates/content.html',
		controller: 'ContentController'
	});
});
	// Landing page controller: define $scope.number as a number
	var HomeController = myApp.controller('HomeController', function($scope) {
		$scope.number = "2";
	});

	// About page controller: define $scope.about as a string
	var aboutController = myApp.controller('AboutController', function($scope) {
		$scope.about = "this is a string";
	});

	// Content controller: define $scope.url as an image
	var contentController = myApp.controller('ContentController', function($scope) {
		$scope.url = "http://cdn-img.people.com/emstag/i/2012/pets/news/120430/penguin-1-440.jpg";
	});