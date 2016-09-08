/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsUserService(tsRestService);

    function tsUserService (
        tsRestService
    ) {

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getAllUsers (queryParams) {
            return tsRestService.$get('users', queryParams);
        }

        function getInviteByToken (inviteToken) {
            return tsRestService.$get('users/invites/' + inviteToken);
        }

        function getRole (mdmId) {
            return tsRestService.$get('roles/' + mdmId);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getRoles (queryParams) {
            return tsRestService.$get('roles', queryParams);
        }

        function getUser (mdmId) {
            return tsRestService.$get('users/' + mdmId);
        }

        function getUserByUserLogin (userLogin) {
            return tsRestService.$get('users/userLogin/' + userLogin);
        }

        /* queryParams Defaults: inviteType=mdmAdminInvite */
        function getUserInvites (queryParams) {
            return tsRestService.$get('users/invites', queryParams);
        }

        function getUserProperty (property) {
            return tsRestService.$get('users/property/' + property);
        }

        function createRole (body) {
            return tsRestService.$post('roles', body);
        }

        function createUser (body) {
            return tsRestService.$post('users', body);
        }

        function inviteUser (inviteType, email, url) {
            var body = {
                'inviteType': inviteType,
                'email': email,
                'url': url
            };
            var options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            return tsRestService.$post('users/invites', body, options);
        }

        function updateUserProperty (property, body) {
            return tsRestService.$post('users/property/' + property, body);
        }

        function updateRole (mdmId, body) {
            return tsRestService.$put('roles/' + mdmId, body);
        }

        function updateUser (mdmId, body) {
            return tsRestService.$put('users/' + mdmId, body);
        }

        return {
            getAllUsers: getAllUsers,
            getInviteByToken: getInviteByToken,
            getRole: getRole,
            getRoles: getRoles,
            getUser: getUser,
            getUserByUserLogin: getUserByUserLogin,
            getUserInvites: getUserInvites,
            getUserProperty: getUserProperty,
            createRole: createRole,
            createUser: createUser,
            inviteUser: inviteUser,
            updateUserProperty: updateUserProperty,
            updateRole: updateRole,
            updateUser: updateUser
        };
    }

})();
