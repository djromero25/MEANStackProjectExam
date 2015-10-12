var DocApps = angular.module('DocApps', ['ngRoute','angularMoment']);

DocApps.config(function ($routeProvider) {
    $routeProvider
        .when('/appointments',{
        templateUrl: '/views/appointment/appointment.html'
    })
        .when('/no-user',{
        templateUrl: '/views/no-user.html'
    })
        .when('/',{
        templateUrl: '/views/dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});