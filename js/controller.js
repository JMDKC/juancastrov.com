angular.module('app', ['pascalprecht.translate', 'ngSanitize', 'ngAnimate', 'ui.router'])

  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'TITLE': 'Web developer & designer.',
      'DESCRIPTION': 'I\'m a web developer and designer living in Bogotá, CO. I conceive, develop and empower ideas on the web, at the intersection between design, art and tech.',
      'READ_MORE': 'Read more',
      'READ_LESS': 'Read less',

      'MAY': 'May',
      'JUL': 'July',
      'AGO': 'August',
      'OCT': 'October',
      'SEP': 'September',

      'DESIGN': 'Design',
      'DEVELOPMENT': 'Development',
      'ART': 'Art',
      'PORTFOLIO': 'Portfolio',

    });
   
    $translateProvider.translations('es', {
      'TITLE': 'Diseñador y desarollador web.',
      'DESCRIPTION': 'Soy diseñador y desarollador web en Bogotá, CO. Lo que hago es concebir, desarrollar y empoderar experiencias en la web, en la intersección entre el diseño, el arte y la tecnología.',
      'READ_MORE': 'Leer más',
      'READ_LESS': 'Leer menos',

      'MAY': 'Mayo',
      'JUL': 'Julio',
      'AGO': 'Agosto',
      'OCT': 'Octubre',
      'SEP': 'Septiembre',

      'DESIGN': 'Diseño',
      'DEVELOPMENT': 'Desarrollo',
      'ART': 'Arte',
      'PORTFOLIO': 'Portafolio',

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
        templateUrl : "views/porc.tpl.html",
        controller  : 'inner'
      })
      .state('becomeacurator', {
        url         : "/becomeacurator",
        templateUrl : "views/becomeacurator.tpl.html",
        controller  : 'inner'
      })
  })

  .controller('ctrl', function($scope, $translate, $rootScope) {

    $rootScope.$on('$stateChangeStart', function (){ 
      $scope.readMore = false;
      // var myElement = angular.element( document.querySelector(') );
      $('#collapseExample').collapse('hide');
    });

    var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

    if (userLang === 'es') {
      $translate.use('es');
    } else if (userLang === 'en') {
      $translate.use('en');
    }
  })

  .controller('inner', function($scope, $translate, $rootScope) {
    jQuery(document).ready(function($) {
      $('.slider').unslider({
        arrows: true,
        infinite: true,
        // animateHeight: true
      });
    });
  });