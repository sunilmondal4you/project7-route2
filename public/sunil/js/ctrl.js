var app = angular.module("app");

app.controller("default", function($scope){

    $scope.home = "My first home";
});


app.controller("second", function($scope){

    $scope.first = "My second home";
});


app.controller("third", function($scope){

    $scope.second = "My third home";
});