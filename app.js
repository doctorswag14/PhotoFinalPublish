(function () {
    'use strict';

    // Define the app module with dependencies
    angular.module('kayleejeanphotoApp', ['ngRoute'])

        // Configure routes
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/home.html',
                    // controller: 'RecipeController'
                })
                .when('/about', {
                    templateUrl: 'app/views/about.html',
                    // controller: 'RecipeController'
                })
                .when('/blog', {
                    templateUrl: 'app/views/blog.html',
                    // controller: 'RecipeController'
                })
                .when('/mywork', {
                    templateUrl: 'app/views/mywork.html',
                    // controller: 'RecipeController'
                })
                .when('/pricing', {
                    templateUrl: 'app/views/pricing.html',
                    // controller: 'RecipeController'
                })
                .when('/booknow', {
                    templateUrl: 'app/views/booknow.html',
                    controller: 'booknowController'
                })
                .when('/weddingpricingandpackage', {
                    templateUrl: 'app/views/weddingpricingandpackage.html',
                    // controller: 'booknowController'
                })
                .when('/sessionpricingandpackage', {
                    templateUrl: 'app/views/sessionpricingandpackage.html',
                    // controller: 'booknowController'
                })
                .when('/portfolio-seniors', {
                    templateUrl: 'app/views/portfolioseniors.html',
                    controller: 'portfolioController'
                })
                .when('/portfolio-corporate', {
                    templateUrl: 'app/views/portfoliocorporatebranding.html',
                    controller: 'portfolioController'
                })
                .when('/portfolio-familes', {
                    templateUrl: 'app/views/portfoliofamiles.html',
                    controller: 'portfolioController'
                })
                .when('/portfolio-wedding', {
                    templateUrl: 'app/views/portfoliowedding.html',
                    controller: 'portfolioController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])

        // Add the run block to dynamically set the page title
        .run(['$rootScope', '$route', function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
                if ($route.current && $route.current.templateUrl) {
                    switch ($route.current.templateUrl) {
                        case 'app/views/booknow.html':
                            $rootScope.title = 'Book Now - Kaylee Jean Photography';
                            break;
                        case 'app/views/home.html':
                            $rootScope.title = 'Home - Kaylee Jean Photography';
                            break;
                        case 'app/views/about.html':
                            $rootScope.title = 'About - Kaylee Jean Photography';
                            break;
                        case 'app/views/blog.html':
                            $rootScope.title = 'Blog - Kaylee Jean Photography';
                            break;
                        case 'app/views/mywork.html':
                            $rootScope.title = 'My Work - Kaylee Jean Photography';
                            break;
                        case 'app/views/pricing.html':
                            $rootScope.title = 'Pricing - Kaylee Jean Photography';
                            break;
                        case 'app/views/weddingpricingandpackage.html':
                            $rootScope.title = 'Wedding Pricing and Packages - Kaylee Jean Photography';
                            break;
                        case 'app/views/sessionpricingandpackage.html':
                            $rootScope.title = 'Session Pricing and Packages - Kaylee Jean Photography';
                            break;
                        default:
                            $rootScope.title = 'Kaylee Jean Photography';
                    }
                }
            });
        }]);
})();