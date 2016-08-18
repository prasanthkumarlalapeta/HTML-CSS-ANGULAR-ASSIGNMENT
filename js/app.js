var app = angular.module('myDashboard', []); 
app.controller('headerCtrl', function($scope) {
    $scope.accessories = "6";
    $scope.messages = "5";
    $scope.notifications = "4";
    $scope.user = "prasanth";
});
app.controller('sidebarCtrl', function($scope) {
    
});
app.controller('mainCtrl', function($scope) {
    
});
app.controller('pagetitleCtrl', function($scope) {
   
});
app.controller('pagecontentCtrl', function($scope) {
   
});
app.controller('widgetCtrl', function($scope) {
    $scope.newUsers = "320";
    $scope.sales = "970";
    $scope.comments = "45";
    $scope.visitors = "90";
    $scope.updates = "200";
    $scope.newOrders = "30";
    $scope.stock = "3000";
    $scope.messages = "123";
    $scope.cancelled = "30";
    $scope.profit = "5000";
});
app.controller('notificationsCtrl', function($scope, $http) {
    $http.get("api/notification.json").then(function (response) {
      $scope.notifications = response.data;
    });
    
});
app.controller('tasksCtrl', function($scope, $http) {
    $http.get("api/tasks.json").then(function (response) {
      $scope.progressbars = response.data;
    });
});
app.controller('alertsCtrl', function($scope) {
    $scope.alerts = [
      {alertname: "warning", message: "This is warning message.. Please close it for further usage."},
      {alertname: "success", message: "You successfully read this is important message."},
      {alertname: "info", message: "Alert three"},
      {alertname: "error", message: "Alert four"},
    ];
});