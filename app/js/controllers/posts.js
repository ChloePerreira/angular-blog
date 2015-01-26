var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {
  $scope.name = 'posts controller';

  apiService.get('posts')
  .success(function(data){
      $scope.posts = data;
  });
 
   $scope.posts = [];
   $scope.tags = [];
   /*$http.get('http://localhost:3000/tags')*/
   apiService.get('tags')
     .success(function(data){
       $scope.tags = data;
     });
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', 'apiService', function($scope, $http, $stateParams, apiService) {
  $scope.postName = 'this is post view';
  $scope.id = $stateParams.id;
  apiService.get('posts/'+$scope.id)
    .success(function(data){
      $scope.post= data;
    });

}]);

