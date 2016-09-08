(function () {
    'use strict';

    module.exports = loginHelper();

    function loginHelper() {

        //START TODO: define these externally and import
        var tsAppConfig = {
            domain: 'fluigdata.com',
            restPort: '8443',
            restBaseUrl: '/api/v1/'
        };

        var credentials = {
            subdomain: 'totvslabs',
            adminDataSourceId: '0a0829172fc2433c9aa26460c31b78f0',
            userName: 'admin@totvslabs.com',
            password: 'Foobar1!'
        };
        // END TODO

        setupRest();

        function setupRest () {

          var tsRestService = require('./rest/fetch.rest.api.js');

          var baseUrl = 'https://app.' + tsAppConfig.domain + ':' + tsAppConfig.restPort + tsAppConfig.restBaseUrl;

          tsRestService.configure()
                  .baseUrl(baseUrl)
                  .error(restProcessError);
        }

        function restProcessError (data, status, headers, config) {

            if (status === 401) {
                //Need authentication - redirect to login page
            }

            if (data && data.errorCode) {
                //tsNotificationService.error(data.errorMessage || 'An error has occurred. Code: ' + data.errorCode);
            }
        }

        function login() {

          var tsAuthService = require('./rest/services/auth.service.js');

            return tsAuthService.grantNewTokenOrRefreshToken('password', credentials.userName, credentials.password, credentials.subdomain, credentials.adminDataSourceId);
        }

        return {
            login: login
        };
    }

})();
