/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsDataConsumptionService(tsRestService);

    function tsDataConsumptionService (
        tsRestService
    ) {

        /* queryParams Defaults: entityList=, pageSize=10 */
        function getGoldenRecords (queryParams) {
            return tsRestService.$get('dataConsumption/entities/records', queryParams);
        }

        /* queryParams Defaults: applicationId=, stagingType=, crosswalks= */
        function getGoldenRecordsForTheListOfCrosswalksSent (entityTemplateId, queryParams) {
            return tsRestService.$get('dataConsumption/entities/' + entityTemplateId + '/recordsUsingCrosswalks', queryParams);
        }

        /* queryParams Defaults: mdmIds= */
        function getGoldenRecordsForTheListOfMdmIdsSent (entityTemplateId, queryParams) {
            return tsRestService.$get('dataConsumption/entities/' + entityTemplateId + '/recordsUsingMdmIds', queryParams);
        }

        function confirmTheRecordsConsumedSuccessfully (body) {
            return tsRestService.$post('dataConsumption/entities/confirmRecordsConsumed', body);
        }

        return {
            getGoldenRecords: getGoldenRecords,
            getGoldenRecordsForTheListOfCrosswalksSent: getGoldenRecordsForTheListOfCrosswalksSent,
            getGoldenRecordsForTheListOfMdmIdsSent: getGoldenRecordsForTheListOfMdmIdsSent,
            confirmTheRecordsConsumedSuccessfully: confirmTheRecordsConsumedSuccessfully
        };
    }

})();
