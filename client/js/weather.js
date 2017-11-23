var app = angular.module('bravi-weather', []);
app.controller('WeatherCtrl', function($scope, $http) {

  $scope.consults = [];
  $scope.cityConditions = []

  $scope.searchCity = function(ct) {

    let citiesList = [];
    $scope.cityConditions = []
    $http.get('../city.list.json').then((res) => {
      citiesList = res.data;
      let val = ct.name;

      let city = citiesList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      $scope.consults = city;

    });
  }

  $scope.consultWeather = function(city) {
    $scope.consults = [];
    $scope.city.name = '';
    let key = "bf53a39931e65eb05c80e9960364ca9d";
    let url = "http://api.openweathermap.org/data/2.5/forecast?id="+city.id+"&APPID="+key;
    $http.get(url).then((res) => {
      console.log(res.data.list);
      $scope.cityConditions = res.data.list;
    })
  }
})
