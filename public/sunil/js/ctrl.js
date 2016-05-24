var app = angular.module("myapp");

app.controller("default", function($scope){

    $scope.usertable=[];

    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];

    $scope.savme=function(myform){
        debugger;
        myform.nm.$touched=false;
        myform.eml.$touched=false;
        myform.mbl.$touched=false;
        myform.qlf.$touched=false;

        $scope.usertable.push($scope.user);
        $scope.id = $scope.id +1 ;

        $scope.user={'id':$scope.id};
    };

    $scope.cls=function () {
        $scope.editg=false;
        $scope.user={'id':$scope.id};
    }


    $scope.updatme=function($index){
        $scope.editg=false;
        $scope.user={'id':$scope.id};
    };

    $scope.edtme=function (val) {
        $scope.editg=true;
        $scope.user=$scope.usertable[val];
    };

    $scope.deleteme=function ($index) {
        $scope.usertable.splice($index,1);
    };


});


app.controller("second", function($scope){


});


app.controller("third", function($scope){


});