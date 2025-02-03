(function () {
    'use strict';
    angular
        .module('kayleejeanphotoApp')
        .controller('booknowController', ['$scope', function ($scope) {
            $scope.statusMessage = '';
            emailjs.init('cC1Sf4m2oOF5wMDq3');

            $scope.submitBooking = function () {
                if (!$scope.bookingData.user_name || !$scope.bookingData.user_email) {
                    $scope.statusMessage = "Please fill in all required fields.";
                    console.log("Validation failed", $scope.bookingData);
                    return;
                }
                const emailData = {
                    user_name: $scope.bookingData.user_name,
                    user_email: $scope.bookingData.user_email,
                    type_session: $scope.bookingData.type_session,
                    heard_about: $scope.bookingData.heard_about,
                    user_message: $scope.bookingData.user_message
                };
                emailjs.send('service_vlbjb5e', 'template_wpq783b', emailData)
                    .then(function (response) {
                        console.log("Email sent successfully:", response);
                        $scope.statusMessage = "Booking successfully submitted! We will contact you shortly.";
                        $scope.bookingData = {}; // Reset form
                        $scope.$apply();
                    })
                    .catch(function (error) {
                        console.error("Error sending email:", error);
                        $scope.statusMessage = "An error occurred. Please try again later.";
                        $scope.$apply();
                    });
            };

        }]);
})();
