'use strict';

//angular.module('confusionApp', ['ui.router','ngResource','ngDialog'])
angular.module('Destinator', ['ui.router','ngResource','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
            .state('redirect', {
        
                controller: function($state) {
                    $state.go('app', null, {reload: true});
                }
            })

            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        //templateUrl : 'views/aboutus.html',
                        //controller  : 'AboutController' 
                        template: '<h1>To be Completed</h1>'                 
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        //templateUrl : 'views/contactus.html',
                        //controller  : 'ContactController' 
                        template: '<h1>To be Completed</h1>'                 
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        //templateUrl : 'views/menu.html',
                        //controller  : 'MenuController'
                        template: '<h1>To be Completed</h1>' 
                    }
                }
            })

            // route for the dishdetail page
            /*.state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   }
                }
            })
        
            // route for the dishdetail page
            .state('app.favorites', {
                url: 'favorites',
                views: {
                    'content@': {
                        templateUrl : 'views/favorites.html',
                        controller  : 'FavoriteController'
                   }
                }
            });*/

       

        // route for the menu page
        /*.state('app.menu', {
            url: 'menu',
            views: {
                'content@': {
                    templateUrl : 'views/menu.html',
                    controller  : 'MenuController'
                }
            }
        })*/
            ;

        $urlRouterProvider.otherwise('/');

});

