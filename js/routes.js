angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('pitScouting', {
    url: '/page5',
    templateUrl: 'templates/pitScouting.html',
    controller: 'pitScoutingCtrl'
  })

  .state('tabsController.matchScouting', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/matchScouting.html',
        controller: 'matchScoutingCtrl'
      }
    }
  })

  .state('settings', {
    url: '/page7',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('importExport', {
    url: '/page8',
    templateUrl: 'templates/importExport.html',
    controller: 'importExportCtrl'
  })

  .state('photos', {
    url: '/page9',
    templateUrl: 'templates/photos.html',
    controller: 'photosCtrl'
  })

  .state('profile', {
    url: '/page10',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('faQ', {
    url: '/page11',
    templateUrl: 'templates/faQ.html',
    controller: 'faQCtrl'
  })

  .state('ranking', {
    url: '/ranking/page12',
    templateUrl: 'templates/ranking.html',
    controller: 'rankingCtrl'
  })

$urlRouterProvider.otherwise('')

  

});