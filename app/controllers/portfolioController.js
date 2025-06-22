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

            $scope.brandingImages = [
                { src: './app/views/imageFolder/corporatebranding/corporatebranding.jpg', alt: 'Corporate Branding 1' },
                { src: './app/views/imageFolder/corporatebranding/corporatebranding2.jpg', alt: 'Corporate Branding 2' },
                { src: './app/views/imageFolder/corporatebranding/corporatebranding3.jpg', alt: 'Corporate Branding 3' },
                { src: './app/views/imageFolder/corporatebranding/corporatebranding4.jpg', alt: 'Corporate Branding 4' },
                { src: './app/views/imageFolder/corporatebranding/corporatebranding5.jpg', alt: 'Corporate Branding 5' },
                { src: './app/views/imageFolder/corporatebranding/corporatebranding6.jpg', alt: 'Corporate Branding 6' }
            ];

            $scope.familyimages = [
                { src: "./app/views/imageFolder/familes/familes.jpg", alt: "Image 1" },
                { src: "./app/views/imageFolder/familes/familes2.jpg", alt: "Image 2" },
                { src: "./app/views/imageFolder/familes/familes3.jpg", alt: "Image 3" },
                { src: "./app/views/imageFolder/familes/familes4.jpg", alt: "Image 4" },
                { src: "./app/views/imageFolder/familes/familes5.jpg", alt: "Image 5" },
                { src: "./app/views/imageFolder/familes/familes6.jpg", alt: "Image 6" },
                { src: "./app/views/imageFolder/familes/familes7.jpg", alt: "Image 7" },
                { src: "./app/views/imageFolder/familes/familes8.jpg", alt: "Image 8" },
                { src: "./app/views/imageFolder/familes/familes9.jpg", alt: "Image 9" },
                { src: "./app/views/imageFolder/familes/familes10.jpg", alt: "Image 10" },
                { src: "./app/views/imageFolder/familes/familes11.jpg", alt: "Image 11" },
                { src: "./app/views/imageFolder/familes/familes12.jpg", alt: "Image 12" },
                { src: "./app/views/imageFolder/familes/familes13.jpg", alt: "Image 13" },
                { src: "./app/views/imageFolder/familes/familes14.jpg", alt: "Image 14" },
                { src: "./app/views/imageFolder/familes/familes15.jpg", alt: "Image 15" },
                { src: "./app/views/imageFolder/familes/familes16.jpg", alt: "Image 16" },
                { src: "./app/views/imageFolder/familes/familes17.jpg", alt: "Image 17" },
                { src: "./app/views/imageFolder/familes/familes18.jpg", alt: "Image 18" },
                { src: "./app/views/imageFolder/familes/familes19.jpg", alt: "Image 19" },
                { src: "./app/views/imageFolder/familes/familes20.jpg", alt: "Image 20" },
                { src: "./app/views/imageFolder/familes/familes21.jpg", alt: "Image 21" }
            ];

            $scope.seniorimages = [
                "./app/views/imageFolder/seniors/senior.jpg",
                "./app/views/imageFolder/seniors/senior41.jpg",
                "./app/views/imageFolder/seniors/senior2.jpg",
                "./app/views/imageFolder/seniors/senior3.jpg",
                "./app/views/imageFolder/seniors/senior38.jpg",
                "./app/views/imageFolder/seniors/senior4.jpg",
                "./app/views/imageFolder/seniors/senior5.jpg",
                "./app/views/imageFolder/seniors/senior50.jpg",
                "./app/views/imageFolder/seniors/senior6.jpg",
                "./app/views/imageFolder/seniors/senior7.jpg",
                "./app/views/imageFolder/seniors/senior53.jpg",
                "./app/views/imageFolder/seniors/senior8.jpg",
                "./app/views/imageFolder/seniors/senior48.jpg",
                "./app/views/imageFolder/seniors/senior15.jpg",
                "./app/views/imageFolder/seniors/senior9.jpg",
                "./app/views/imageFolder/seniors/senior10.jpg",
                "./app/views/imageFolder/seniors/senior55.jpg",
                "./app/views/imageFolder/seniors/senior11.jpg",
                "./app/views/imageFolder/seniors/senior12.jpg",
                "./app/views/imageFolder/seniors/senior37.jpg",
                "./app/views/imageFolder/seniors/senior13.jpg",
                "./app/views/imageFolder/seniors/senior54.jpg",
                "./app/views/imageFolder/seniors/senior39.jpg",
                "./app/views/imageFolder/seniors/senior49.jpg",
                "./app/views/imageFolder/seniors/senior40.jpg",
                "./app/views/imageFolder/seniors/senior42.jpg",
                "./app/views/imageFolder/seniors/senior43.jpg",
                "./app/views/imageFolder/seniors/senior44.jpg",
                "./app/views/imageFolder/seniors/senior45.jpg",
                "./app/views/imageFolder/seniors/senior46.jpg",
                "./app/views/imageFolder/seniors/senior47.jpg",
                "./app/views/imageFolder/seniors/senior52.jpg",
                "./app/views/imageFolder/seniors/senior56.jpg",
            ];
    
            // $scope.showImage = function (imageSrc) {
            //     $scope.selectedImage = imageSrc;
            //     $('#imageModal').modal('show');
            // };

        }]);
})();
