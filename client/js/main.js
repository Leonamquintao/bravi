var app = angular.module('bravi', []);
app.controller('ContactsCtrl', function($scope, $http) {

  $scope.contacts = [];
  $scope.save = true;
  $scope.edit = false;

  var getContacts = function() {
    $http.get("http://localhost:3000/contacts").then((res) => {
      $scope.contacts = res.data;
    });
  }

  $scope.addContatct = function(contact) {
    $scope.contacts.push(contact);
    $http.post('http://localhost:3000/contacts', contact).then((res) => {
      delete $scope.contact;
    });
  }

  $scope.editContatct = function(contact) {
    $scope.contact = contact;
    $scope.save = false;
    $scope.edit = true;
  }

  $scope.saveContactChanges = function(contact) {
    $http.put("http://localhost:3000/contacts/", contact).then((res) => {
      $scope.save = true;
      $scope.edit = false;
      delete $scope.contact;
    });
  }

  $scope.removeContatct = function(contact) {
    let id = parseInt(contact.id);
    $http.delete('http://localhost:3000/contacts/'+id).then((res) => {
      $scope.contacts = $scope.contacts.filter((rm) => {
        return rm.id !== contact.id
      })
    });
  }

  getContacts();

});
