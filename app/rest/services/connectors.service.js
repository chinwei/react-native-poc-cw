/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsConnectorsService(tsRestService);

    function tsConnectorsService (
        tsRestService
    ) {

        function getApplicationConnectors (applicationId) {
            return tsRestService.$get('connectors/' + applicationId);
        }

        function getPossibleConnectors () {
            return tsRestService.$get('connectors/possible');
        }

        function createConnectorApplication (applicationName, body) {
            return tsRestService.$post('connectors/create/' + applicationName, body);
        }

        function createConnectors (applicationId, body) {
            return tsRestService.$post('connectors/' + applicationId + '/create', body);
        }

        function pauseConnector (connectorId) {
            return tsRestService.$post('connectors/' + connectorId + '/pause');
        }

        function playConnector (connectorId) {
            return tsRestService.$post('connectors/' + connectorId + '/play');
        }

        function updateConnector (connectorId, body) {
            return tsRestService.$put('connectors/' + connectorId, body);
        }

        function deleteConnector (connectorId) {
            return tsRestService.$delete('connectors/' + connectorId);
        }

        return {
            getApplicationConnectors: getApplicationConnectors,
            getPossibleConnectors: getPossibleConnectors,
            createConnectorApplication: createConnectorApplication,
            createConnectors: createConnectors,
            pauseConnector: pauseConnector,
            playConnector: playConnector,
            updateConnector: updateConnector,
            deleteConnector: deleteConnector
        };
    }

})();
