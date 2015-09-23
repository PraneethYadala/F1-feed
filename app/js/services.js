angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

  	var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
      	method: 'JSONP', 
      	url: 'http://ergast.com/api/f1/2014/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
      	method: 'JSONP', 
      	url: 'http://ergast.com/api/f1/2014/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
      	method: 'JSONP', 
      	url: 'http://ergast.com/api/f1/2014/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getTeams = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/constructorStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getTeamDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/constructors/'+ id +'/constructorStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getTeamRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/constructors/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getRaceWinners = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/results/1.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getRaces = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getRaceDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getQualiDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2014/'+ id +'/qualifying.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });