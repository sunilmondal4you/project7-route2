var app  = angular.module("myapp", ['ngRoute','ngMessages']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
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
