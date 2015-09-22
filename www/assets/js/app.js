// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// app.js
var app = angular.module('app', [
    
    'ngAnimate',
    'ui.router',
    'ngTouch',
    'swipe',
    'ionic',
    'ionic.contrib.ui.hscrollcards',
    
    'globalControllers'
                                      
]); 

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================
// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    
        .state('home', {
            url: '/home',
            templateUrl: 'partials/landing.html',
            
        })
    
    });

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================
// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var globalControllers = angular.module('globalControllers', []);

globalControllers.controller('globalCtrl', ['$scope', '$http',
  
    function($scope, $http) {

        //A.1. DIV SLIDE ON SCROLL --------------------------------------------------------------------------------------

        //AOS.init();

        //A.1. END ------------------------------------------------------------------------------------------------------

    //A.2. PARALLAX SLIDERS -------------------------------------------------------------------------------------------
      
      
    //A.2.1. changing the sides of the button only on load and on browser resize

    $(window).on("load resize", function() {
        topHalf();
        leftHalf();
    });
      
    //A.2.1. END 

    //A.2.2. when scrolling vertically only top and bottom sides need to be recalculated

    $("body").scroll(function() {
        topHalf();
    });
      
    //A.2.2. END  

    //A.2.3. toggle button class if it's in the top or bottom half of the screen

    function topHalf() {
        $(".button").each(function() {
            var self = $(this),
            offTop = self.offset().top,
            scrTop = $(window).scrollTop(),
            halfWindowHeight = ($(window).height())/2;

            self.toggleClass("top-half", (offTop - scrTop) < halfWindowHeight);
        });
    }
      
    //A.2.3. END   

    //A.2.4. toggle button class if it's in left or right half of the screen
      
    function leftHalf() {
        $(".button").each(function() {
            var self = $(this),
            offLeft = self.offset().left,
            halfWindowWidth = ($(window).width())/2;

            self.toggleClass("left-half", offLeft < halfWindowWidth);
        });
    }// changing the sides of the button only on load and on browser resize
    $(window).on("load resize", function() {
        topHalf();
        leftHalf();
    });
      
    //A.2.4. END   

    //A.2.5. when scrolling vertically only top and bottom sides need to be recalculated
      
    $("body").scroll(function() {
        topHalf();
    });

    //A.2.5. END  
      
    //A.2.6. toggle button class if it's in the top or bottom half of the screen
      
    function topHalf() {
        $(".button").each(function() {
            var self = $(this),
            offTop = self.offset().top,
            scrTop = $(window).scrollTop(),
            halfWindowHeight = ($(window).height())/2;

            self.toggleClass("top-half", (offTop - scrTop) < halfWindowHeight);
        });
    }

    //A.2.6. END  
      
    //A.2.7. toggle button class if it's in left or right half of the screen
      
    function leftHalf() {
        $(".button").each(function() {
            var self = $(this),
            offLeft = self.offset().left,
            halfWindowWidth = ($(window).width())/2;

            self.toggleClass("left-half", offLeft < halfWindowWidth);
        });
    }
      
    //A.2.7. END
      
    //A.2. END --------------------------------------------------------------------------------------------------------
  
      
      
      
      
      
  }]);

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================