angular.module('myApp', [])
    .controller('directoryController', function() {

        var dirList = this;
        dirList.list = [{name: 'Bob', age: '29'}, {name: 'Chris', age: '25'},
        {name: 'Scott', age: '36'}, {name: 'Ross', age: '19'}, 
        {name: 'Jim', age: '21'}, {name: 'Rob', age: '32'}];

        dirList.addPerson = function() {
            dirList.list.push({name: dirList.name, age: dirList.age});
            dirList.name = '';
            dirList.age = 0;
        };
    });
