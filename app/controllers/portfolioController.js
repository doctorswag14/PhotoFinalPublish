(function () {
    'use strict';
    angular
        .module('kayleejeanphotoApp')
        .controller('portfolioController', ['$scope', function ($scope) {
            $scope.showImage = _showImage;
            function _showImage(imageSrc) {
                // Set the modal image source
                document.getElementById('modalImage').src = imageSrc;
    
                // Show the modal
                var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
                imageModal.show();
            }

        }]);
})();
