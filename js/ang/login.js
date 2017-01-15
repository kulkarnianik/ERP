angular.module("app").controller('login', function ($scope, userService, $location) {

    $scope.response = {};
    console.log("Loaded ..");
    $scope.showProgress = false;

    /*$.skylo({
        state: 'success',
        inchSpeed: 200,
        initialBurst: 30,
        flat: false
    });*/


    $scope.loginUser = function () {
       
       /* $scope.showProgress = true;
        $.skylo('start');
        $.skylo('inch', 5);*/
        $scope.showProgress = true;
        
        userService.login($scope).then(function (response) {
            //$.skylo('end');
            $scope.showProgress = false;
            if (response == null) {
                $scope.response.responseText = "Error connecting server ..";
                return;
            }
            if(response.status != 200) {
                $scope.response.responseText = response.responseText;
                return;
            }
            localStorage.erpUser = JSON.stringify($scope.user);
            console.log("Successful!");
            window.location.href = "home.html";
            
           
        });

    };


});



