import data from './crud-date.json';
class CrudController {
  constructor($scope) {
      "ngInject";
      
    let vm = this;
    vm.name = 'crud';
    vm.data = data;
    var store = this;
    store.data = data;
    $scope.eEditable= -1; 
    $scope.AddPerson = function(){
            if($scope.formPerson.$valid) {
                store.data.push({
                    "name" : $scope.Person.name,
                    "nick" : $scope.Person.nick,
                });
                $scope.Person.name = "";
                $scope.Person.nick = "";
            }
    };
  }
  
}

export default CrudController;
