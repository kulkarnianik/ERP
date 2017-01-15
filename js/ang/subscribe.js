angular.module("app").controller('subscribe', function ($scope, userService, $location) {

    console.log("Loaded init ..");
    $scope.response = {};
   
    $scope.loggedIn = null;
    $scope.showProgress = false;

    /*$.skylo({
        state: 'success',
        inchSpeed: 200,
        initialBurst: 30,
        flat: false
    });*/


    $scope.goToLogin = function() {
        window.location.href = "login.html";
    }
    
    $scope.subscribeUser = function (formValid) {
        if (!formValid) {
            $scope.subscribeShowErrors = true;
            return;
        }

       /* $scope.showProgress = true;
        $.skylo('start');
        $.skylo('inch', 5);*/
        
        $scope.showProgress = true;
        
        userService.subscribe($scope).then(function (response) {
            $.skylo('end');
            $scope.showProgress = false;
            if (response == null) {
                $scope.response.responseText = "Error connecting server ..";
            }
            $scope.response = response;
           
        });

    };


});



