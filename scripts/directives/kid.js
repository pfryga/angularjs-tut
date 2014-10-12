myAngularApp.directive('kid', function () {
    return {
        restrict: 'E',
        template: '<input type="text" ng-model="chore">',
        link: function(scope, element, attrs) {
            scope.chore = 'test';
            scope.$watch("chore", function (value) {
                console.log(value);
            });
        }
    };
});
