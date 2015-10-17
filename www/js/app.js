angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $timeout, $ionicPopup) {
 // Triggered on a button click, or some other target
   $scope.popupAnimations = ['bounceIn'
                          , 'bounceInDown'
                          , 'bounceInLeft'
                          , 'bounceInRight'
                          , 'bounceInUp'
                          , 'fadeIn'
                          , 'fadeInDown'
                          , 'fadeInDownBig'
                          , 'fadeInLeft'
                          , 'fadeInLeftBig'
                          , 'fadeInRight'
                          , 'fadeInRightBig'
                          , 'fadeInUp'
                          , 'fadeInUpBig'
                          , 'flipInX'
                          , 'flipInY'
                          , 'lightSpeedIn'
                          , 'rotateIn'
                          , 'rotateInDownLeft'
                          , 'rotateInDownRight'
                          , 'rotateInUpLeft'
                          , 'rotateInUpRight'
                          , 'slideInUp'
                          , 'slideInDown'
                          , 'slideInLeft'
                          , 'slideInRight'
                          , 'zoomIn'
                          , 'zoomInDown'
                          , 'zoomInLeft'
                          , 'zoomInRight'
                          , 'zoomInUp'
                          , 'rollIn'
                          ]
   // A confirm dialog
   $scope.showConfirm = function(animation) {
     $timeout(function(){
      var popupElements = document.getElementsByClassName("popup-container")
      if (popupElements.length) {
        $scope.popupElement = angular.element(popupElements[0]);
          $scope.popupElement.addClass('animated')
          $scope.popupElement.addClass(animation)
      };
    }, 1)


     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?',
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

});