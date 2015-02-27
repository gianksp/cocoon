/**
 * Main application controller
 * @param  {[type]} $rootScope  [description]
 * @param  {[type]} $scope      [description]
 * @param  {[type]} $ionicModal [description]
 * @param  {[type]} $timeout)   {}          [description]
 * @return {[type]}             [description]
 */
angular.module('core').controller('controller', function($rootScope, $scope, $ionicModal, $timeout) {

    // Default to an empty list of friends - this data
    // will be loaded from the remote data module using
    // require.
    $scope.friends = [];


    // ---
    // PUBLIC METHODS.
    // ---


    // I load the remote friends data.
    $scope.loadData = function() {

        require(
            [ "https://code.jquery.com/jquery-2.1.3.min.js" ],
            function( newFriends ) {

                $scope.friends = newFriends;

            }
        );

    };


    $scope.loadData();

});