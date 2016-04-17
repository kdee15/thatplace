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

        AOS.init();

        //A.1. END ------------------------------------------------------------------------------------------------------

    //A.2. PARALLAX SLIDERS -------------------------------------------------------------------------------------------
        
        
        
// changing the sides of the button only on load and on browser resize
        
$(window).on("load resize", function() {
	topHalf();
	leftHalf();
});

// when scrolling vertically only top and bottom sides need to be recalculated
        
$("body").scroll(function() {
	topHalf();
});

// toggle button class if it's in the top or bottom half of the screen
        
function topHalf() {
	$(".button").each(function() {
		var self = $(this),
        offTop = self.offset().top,
        scrTop = $(window).scrollTop(),
        halfWindowHeight = ($(window).height())/2;

		self.toggleClass("top-half", (offTop - scrTop) < halfWindowHeight);
	});
}

// toggle button class if it's in left or right half of the screen
        
function leftHalf() {
	$(".button").each(function() {
		var self = $(this),
        offLeft = self.offset().left,
        halfWindowWidth = ($(window).width())/2;

		self.toggleClass("left-half", offLeft < halfWindowWidth);
	});
}
        
        
        

      
    //A.2. END --------------------------------------------------------------------------------------------------------
  
      
      
      
      
      
  }]);

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================