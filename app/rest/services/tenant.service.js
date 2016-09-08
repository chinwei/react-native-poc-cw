/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsTenantService(tsRestService);

    function tsTenantService (
        tsRestService
    ) {

        /* queryParams Defaults: EntityTemplateTypeId=, VerticalIds= */
        function getPossibleEntityTemplates (mdmTenantId, queryParams) {
            return tsRestService.$get('tenants/' + mdmTenantId + '/possibleEntityTemplates', queryParams);
        }

        function getTenant (mdmTenantId) {
            return tsRestService.$get('tenants/' + mdmTenantId);
        }

        function getTenantByDomain (domain) {
            return tsRestService.$get('tenants/domain/' + domain);
        }

        function onboardTemplateToTenant (mdmTenantId, EntityTemplateId) {
            return tsRestService.$post('tenants/' + mdmTenantId + '/onboard/' + EntityTemplateId);
        }

        function updateTenant (mdmTenantId, body) {
            return tsRestService.$put('tenants/' + mdmTenantId, body);
        }

        return {
            getPossibleEntityTemplates: getPossibleEntityTemplates,
            getTenant: getTenant,
            getTenantByDomain: getTenantByDomain,
            onboardTemplateToTenant: onboardTemplateToTenant,
            updateTenant: updateTenant
        };
    }

})();
