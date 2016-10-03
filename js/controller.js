angular.module('app', ['pascalprecht.translate', 'ngSanitize'])

  .config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TITLE': 'Web developer & designer.',
    'DESCRIPTION': 'I\'m a web developer and designer living in Bogotá, CO. What I do is conceive, develop and empower ideas on the web, at the intersection between design, art and tech.',
    'READ_MORE': 'Read more',
    'READ_LESS': 'Read less'
  });
 
  $translateProvider.translations('es', {
    'TITLE': 'Diseñador & desarrollador web.',
    'DESCRIPTION': 'Soy diseñador y desarollador web en Bogotá, CO. Lo que hago es concebir, desarrollar y empoderar experiencias en la web, en la intersección entre el diseño, el arte y la tecnología.',
    'READ_MORE': 'Leer más',
    'READ_LESS': 'Leer menos'
  });
 
  $translateProvider.preferredLanguage('en');
}])

.controller('ctrl', function($scope) {
  console.log('omg');

  $scope.readMore = false;

  // var userLang = (navigator.language || navigator.userLanguage).substring(0, 2);

  // $scope.setLang = function(lang, reload) {
  //   if (lang === 'es') {
  //     vm.lang = LangSvc.es;
  //   } else if (lang === 'en') {
  //     vm.lang = LangSvc.en;
  //   }
  // };

  // $scope.setLang(userLang, false);
});