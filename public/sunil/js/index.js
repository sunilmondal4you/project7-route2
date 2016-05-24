var app  = angular.module("myapp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/first", {
            "templateUrl" : "first.html",
            "controller" : "default"
        })

        .when("/second", {
            "templateUrl" : "second.html",
            "controller" : "second"
        })

        .when("/third", {
            "templateUrl" : "third.html",
            "controller" : "third"
        })
});
