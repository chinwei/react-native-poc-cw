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

        var tsRestService = require('./rest/fetch.rest.api.js');

        setupRest();

        function setupRest () {

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

            return tsAuthService.grantNewTokenOrRefreshToken('password', credentials.userName, credentials.password, credentials.subdomain, credentials.adminDataSourceId).then(function (result) {
                tsRestService.configure().token(result['access_token']);
                return result;
            });
        }

        function getGoldenRecords () {

            var tsMdmService = require('./rest/services/mdm.service.js');

            var body = {"type":"mdmdiseaseGolden"};

            return tsMdmService.processFreeformQuery(body, { pageSize:30 })
        }

        return {
            login: login,
            getGoldenRecords: getGoldenRecords
        };
    }

})();
