angular.module('app', ['pascalprecht.translate', 'ngSanitize', 'ngAnimate', 'ui.router'])

  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'TITLE': 'Web developer & designer.',
      'DESCRIPTION': 'I\'m a web developer and designer living in Bogotá, CO. What I do is conceive, develop and empower ideas on the web, at the intersection between design, art and tech.',
      'READ_MORE': 'Read more',
      'READ_LESS': 'Read less'
    });
   
    $translateProvider.translations('es', {
      'TITLE': 'Vivo en la internet.',
      'DESCRIPTION': 'Soy diseñador y desarollador web en Bogotá, CO. Lo que hago es concebir, desarrollar y empoderar experiencias en la web, en la intersección entre el diseño, el arte y la tecnología.',
      'READ_MORE': 'Leer más',
      'READ_LESS': 'Leer menos'
    });
   
    $translateProvider.preferredLanguage('en');
  })

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    // $urlRouterProvider.when('/a', '/a/overview');
    // $locationProvider.html5Mode(true);
    $stateProvider
      // login page
      .state('main', {
        url         : "/",
        templateUrl : "views/index.tpl.html"
      })
      .state('porc', {
        url         : "/porc",
        templateUrl : "views/porc.tpl.html"
      })
  })


  .controller('ctrl', function($scope, $translate) {
    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    if (userLang === 'es') {
      $translate.use('es');
    } else if (userLang === 'en') {
      $translate.use('es');
    }
  });