/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsMdmService(tsRestService);

    function tsMdmService (
        tsRestService
    ) {

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getAllEntityTemplateTypes (queryParams) {
            return tsRestService.$get('entityTemplateTypes', queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getAllVerticals (queryParams) {
            return tsRestService.$get('verticals', queryParams);
        }

        /* queryParams Defaults: entityId=, entityType=, timestamp= */
        function getAnEntityAtSpecificTime (queryParams) {
            return tsRestService.$get('histories/snapshot', queryParams);
        }

        function getFieldFunction (mdmId) {
            return tsRestService.$get('fieldFunctions/' + mdmId);
        }

        /* queryParams Defaults: fieldFunctionType=ALL, functionReturnType=ALL, offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getFieldFunctions (queryParams) {
            return tsRestService.$get('fieldFunctions', queryParams);
        }

        /* queryParams Defaults: entityId=, entityType= */
        function getHistoriesForAnEntity (queryParams) {
            return tsRestService.$get('histories', queryParams);
        }

        function getSurvivorshipFunction (mdmId) {
            return tsRestService.$get('survivorshipFunctions/' + mdmId);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getSurvivorshipFunctions (queryParams) {
            return tsRestService.$get('survivorshipFunctions', queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC, query= */
        function processGlobalGoldenQuery (queryParams) {
            return tsRestService.$get('queries/global/golden', queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC, query= */
        function processGlobalQuery (queryParams) {
            return tsRestService.$get('queries/global', queryParams);
        }

        function createFieldFunction (body) {
            return tsRestService.$post('fieldFunctions', body);
        }

        function createSurvivorshipFunctions (body) {
            return tsRestService.$post('survivorshipFunctions', body);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function processFreeformQuery (body, queryParams) {
            return tsRestService.$post('queries/freeform', body, null, queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function processFreeformQueryBatch (body, queryParams) {
            return tsRestService.$post('queries/freeform/batch', body, null, queryParams);
        }

        function processFreeformStatisticsQuery (body) {
            return tsRestService.$post('queries/freeform/stats', body);
        }

        function updateFieldFunction (mdmId, body) {
            return tsRestService.$put('fieldFunctions/' + mdmId, body);
        }

        function updateSurvivorshipFunction (mdmId, body) {
            return tsRestService.$put('survivorshipFunctions/' + mdmId, body);
        }

        return {
            getAllEntityTemplateTypes: getAllEntityTemplateTypes,
            getAllVerticals: getAllVerticals,
            getAnEntityAtSpecificTime: getAnEntityAtSpecificTime,
            getFieldFunction: getFieldFunction,
            getFieldFunctions: getFieldFunctions,
            getHistoriesForAnEntity: getHistoriesForAnEntity,
            getSurvivorshipFunction: getSurvivorshipFunction,
            getSurvivorshipFunctions: getSurvivorshipFunctions,
            processGlobalGoldenQuery: processGlobalGoldenQuery,
            processGlobalQuery: processGlobalQuery,
            createFieldFunction: createFieldFunction,
            createSurvivorshipFunctions: createSurvivorshipFunctions,
            processFreeformQuery: processFreeformQuery,
            processFreeformQueryBatch: processFreeformQueryBatch,
            processFreeformStatisticsQuery: processFreeformStatisticsQuery,
            updateFieldFunction: updateFieldFunction,
            updateSurvivorshipFunction: updateSurvivorshipFunction
        };
    }

})();
