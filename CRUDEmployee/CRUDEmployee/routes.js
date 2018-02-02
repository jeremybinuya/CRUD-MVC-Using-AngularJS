var myApp = angular.module("appRoute", ['ngRoute']);

myApp.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider

        //Full Employye Route
        .when('/Employees', {
            templateUrl: 'Templates/Employees/employeelist.html',
            controller: 'employessController'
        })

        .when('/Employees/Details/:id', {
            templateUrl: 'Templates/Employees/employeedetails.html',
            controller: 'employessController'
        })

        .when('/Employees/Create',{
            templateUrl: 'Templates/Employees/employeecreate.html',
            controller: 'employessController'
        })

         .when('/Employees/Edit/:id', {
             templateUrl: 'Templates/Employees/employeeedit.html',
             controller: 'employessController'
         })

        //Full Events Route
        //.when('/Events', {
        //    templateUrl: 'Templates/Events/event.html',
        //    controller: 'eventController'
        //})

        //.when('/Login', {
        //    templateUrl: 'Templates/Login/login.html',
        //    controller: 'loginController'
        //})

        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');
}]);