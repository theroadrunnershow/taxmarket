angular.module('ngTaxMarkets', ['ngAria', 'ngMessages', 'ngAnimate'])
    .controller('SignUpController', function () {
        var ctrl = this,
            newServiceProvider = { email:'', userName:'', password:'' , businessName:'' 
            	, contactName:'' , addressLine1:'' , addressLine1:'', phoneNumber:'', zipCode:''};

        var signup = function () {
            if( ctrl.signupForm.$valid) {
                ctrl.showSubmittedPrompt = true;
                clearForm();
            }
        };

        var clearForm = function () {
            ctrl.newServiceProvider = { email:'', userName:'', password:'' , businessName:'' 
            	, contactName:'' , addressLine1:'' , addressLine1:'', phoneNumber:'', zipCode:''}
            ctrl.signupForm.$setUntouched();
            ctrl.signupForm.$setPristine();
        };

        var getPasswordType = function () {
            return ctrl.signupForm.showPassword ? 'text' : 'password';
        };

        var toggleEmailPrompt = function (value) {
            ctrl.showEmailPrompt = value;
        };

        var toggleUsernamePrompt = function (value) {
            ctrl.showUsernamePrompt = value;
        };
        
        var toggleBusinessnamePrompt = function (value) {
            ctrl.toggleBusinessnamePrompt = value;
        };
        
        var toggleContactnamePrompt = function (value) {
            ctrl.toggleContactnamePrompt = value;
        };
        
        var toggleAdd1Prompt = function (value) {
            ctrl.toggleAdd1Prompt = value;
        };
        
        var toggleAdd2Prompt = function (value) {
            ctrl.toggleAdd2Prompt = value;
        };
        
        var togglePhonePrompt = function (value) {
            ctrl.togglePhonePrompt = value;
        };
        
        var toggleZipPrompt = function (value) {
            ctrl.toggleZipPrompt = value;
        };

        var hasErrorClass = function (field) {
            return ctrl.signupForm[field].$touched && ctrl.signupForm[field].$invalid;
        };

        var showMessages = function (field) {
            return ctrl.signupForm[field].$touched || ctrl.signupForm.$submitted
        };

        ctrl.showEmailPrompt = false;
        ctrl.showUsernamePrompt = false;
        ctrl.showSubmittedPrompt = false;
        ctrl.toggleEmailPrompt = toggleEmailPrompt;
        ctrl.toggleUsernamePrompt = toggleUsernamePrompt;
        ctrl.toggleBusinessnamePrompt = toggleBusinessnamePrompt;
        ctrl.toggleContactnamePrompt = toggleContactnamePrompt;
        ctrl.toggleAdd1Prompt = toggleAdd1Prompt;
        ctrl.toggleAdd2Prompt = toggleAdd2Prompt;
        ctrl.togglePhonePrompt = togglePhonePrompt;
        ctrl.toggleZipPrompt = toggleZipPrompt;
        ctrl.getPasswordType = getPasswordType;
        ctrl.hasErrorClass = hasErrorClass;
        ctrl.showMessages = showMessages;
        ctrl.newServiceProvider = newServiceProvider;
        ctrl.signup = signup;
        ctrl.clearForm = clearForm;
    })
    .directive('validatePasswordCharacters', function () {
        return {
            require: 'ngModel',
            link: function ($scope, element, attrs, ngModel) {
                ngModel.$validators.lowerCase = function (value) {
                    var pattern = /[a-z]+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.upperCase = function (value) {
                    var pattern = /[A-Z]+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.number = function (value) {
                    var pattern = /\d+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.specialCharacter = function (value) {
                    var pattern = /\W+/;
                    return (typeof value !== 'undefined') && pattern.test(value);
                };
                ngModel.$validators.eightCharacters = function (value) {
                    return (typeof value !== 'undefined') && value.length >= 8;
                };
            }
        }
    })
;