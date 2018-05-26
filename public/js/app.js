// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl', 'queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Join Team Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        // Find Teammates Control Panel
        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',

        // All else forward to the Join Team Control Panel
        }).when('/addpoi', {
            controller: 'addPOICtrl',
            templateUrl: 'partials/addPOIForm.html',

        // All else forward to the Join Team Control Panel
        }).when('/findpoi', {
            controller: 'queryPOICtrl',
            templateUrl: 'partials/queryPOIForm.html',

        // All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/join'})
    });
