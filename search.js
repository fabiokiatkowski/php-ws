function SearchCtrl($scope, $http) {
  $scope.cep;

  $scope.search = function () {
    if (!$scope.cep || $scope.cep.length < 8) return;
    var url = 'server.php?cep=' + $scope.cep; 
    $http.get(url)
      .success(function(data){
        $scope.result = data;
      })
      .error(function (err) {
        $scope.result = err;
      });
  };
}