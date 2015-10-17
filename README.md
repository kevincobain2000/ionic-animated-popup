#### I tweeted

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">32 Popup animations with <a href="https://twitter.com/Ionicframework">@Ionicframework</a>. Hooked many in just 5 mins. <a href="https://t.co/To10HoJWcM">https://t.co/To10HoJWcM</a> <a href="http://t.co/094r1V4G9s">pic.twitter.com/094r1V4G9s</a></p>&mdash; Kevin Cobain (@kevincobain2000) <a href="https://twitter.com/kevincobain2000/status/655345452724826112">October 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

https://twitter.com/kevincobain2000/status/655345452724826112

#### Idea from

https://github.com/kevincobain2000/ionic-animated-modal

### Personal favorite ``bounceIn``

I use that in my app. http://friendsapp.parseapp.com/

### DEMO (codepen)

![alt tag](animate.gif)

http://codepen.io/kevincobain2000/pen/RWjoNR

## How TO

### Add Animate css

https://daneden.github.io/animate.css/

```
<link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css" rel="stylesheet">
```


### How To


#### HTML

```
<button type="" class="button" ng-click="showConfirm('bounceIn')">showConfirm bounceIn</button>
```

#### In your controller

```
.controller('AppCtrl', function($scope, $timeout, $ionicPopup) {
   // A confirm dialog
   $scope.showConfirm = function(animation) {

    // Add animate css class to out popup container
     $timeout(function(){
      var popupElements = document.getElementsByClassName("popup-container")
      if (popupElements.length) {
        $scope.popupElement = angular.element(popupElements[0]);
          $scope.popupElement.addClass('animated')
          $scope.popupElement.addClass(animation)
      };
    }, 1)
    // Done

    // A confirm dialog TAKEN FROM http://ionicframework.com/docs/api/service/$ionicPopup/
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
})
```


#### List of Animations

```
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
fadeIn
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInUp
fadeInUpBig
flipInX
flipInY
lightSpeedIn
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
slideInUp
slideInDown
slideInLeft
slideInRight
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp
rollIn
```
