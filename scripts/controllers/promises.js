'use strict';

myAngularApp.controller('PromisesCtrl', function ($scope, $q) {
        var defer = $q.defer();

        defer.promise
            .then(function(weapon) {
                alert('You can have my ' + weapon);

                return 'bow';
            })
            .then(function(weapon) {
                console.log('and my ' + weapon);

                return 'axe';
            })
            .then(function(weapon) {
                console.log('and my ' + weapon);
            });

        defer.resolve('sword');
    });
