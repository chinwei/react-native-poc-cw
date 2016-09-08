/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsAuthService(tsRestService);

    function tsAuthService (
        tsRestService
    ) {

        function checkAccessToken (accessToken) {
            return tsRestService.$get('oauth2/token/' + accessToken);
        }

        function grantNewTokenOrRefreshToken (grantType, username, password, subdomain, applicationId) {
            var body = {
                'grant_type': grantType,
                'username': username,
                'password': password,
                'subdomain': subdomain,
                'applicationId': applicationId
            };
            var options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            return tsRestService.$post('oauth2/token', body, options);
        }

        function userLogout (accessToken) {
            var body = {
                'access_token': accessToken
            };
            var options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            return tsRestService.$post('oauth2/logout', body, options);
        }

        return {
            checkAccessToken: checkAccessToken,
            grantNewTokenOrRefreshToken: grantNewTokenOrRefreshToken,
            userLogout: userLogout
        };
    }

})();
