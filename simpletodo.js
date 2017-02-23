var app = angular.module("myApp",[]);
app.controller("firstCtrl", function($scope){
//    создать временную переменную
    $scope.tempInput="new task";
    
//    создать общее хранилище для всех заданий
    $scope.tasksArray=["task 1", "task 2"];
    
//    создать функцию, которая переносит из временной переменной в общее хранилище
    $scope.addNew = function(){
        if($scope.tempInput && ($scope.tasksArray.indexOf($scope.tempInput) == -1)){
            console.log($scope.tasksArray.indexOf($scope.tempInput));
            $scope.tasksArray.push($scope.tempInput);
            $scope.tempInput="";
        } else {
            console.log("input empty or task exist");
        };
    };
    
//    создать функцию, которая удаляет выполненное задание из списка
    $scope.deleteItem = function(item){
        var index = $scope.tasksArray.indexOf(item);
        $scope.tasksArray.splice(index, 1);
    };
    
});