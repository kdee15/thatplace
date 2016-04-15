// JAVASCRIPT LAYER [3.2. APP: ROUTING]  ===============================================================================

// ====== INDEX  =======================================================================================================
// ==
// == A. ROUTES
// ==
// == B. DEFAULT ROUTE
// ==
// ====== INDEX  =======================================================================================================



app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    
        .state('home', {
            url: '/home',
            templateUrl: 'index.html',
        })
    

    
    });

// END OF FILE =========================================================================================================