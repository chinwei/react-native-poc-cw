/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsAdminService(tsRestService);

    function tsAdminService (
        tsRestService
    ) {

        function getInvite (inviteToken) {
            return tsRestService.$get('register/' + inviteToken);
        }

        /* queryParams Defaults: inviteToken= */
        function registerUser (body, queryParams) {
            return tsRestService.$post('register', body, null, queryParams);
        }

        return {
            getInvite: getInvite,
            registerUser: registerUser
        };
    }

})();
