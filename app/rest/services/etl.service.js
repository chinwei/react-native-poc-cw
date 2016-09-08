/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsEtlService(tsRestService);

    function tsEtlService (
        tsRestService
    ) {

        function dryRunETLConfigurations (etlConfigurationId, entitySpaceType) {
            return tsRestService.$get('etl/' + etlConfigurationId + '/' + entitySpaceType + '/dryRun');
        }

        function getETLConfiguration (etlConfigurationId) {
            return tsRestService.$get('etl/' + etlConfigurationId);
        }

        function getETLConfigurationByApplicationIdSourceEntityName (applicationId, sourceEntityName) {
            return tsRestService.$get('etl/application/' + applicationId + '/sourceEntity/' + sourceEntityName);
        }

        function getETLRunningStatus (etlConfigurationId, entitySpaceType) {
            return tsRestService.$get('etl/' + etlConfigurationId + '/' + entitySpaceType + '/runningStatus');
        }

        function pauseETLRun (etlConfigurationId, entitySpaceType) {
            return tsRestService.$get('etl/' + etlConfigurationId + '/' + entitySpaceType + '/pause');
        }

        function playOrResumePublishedETLConfigurations (etlConfigurationId) {
            return tsRestService.$get('etl/' + etlConfigurationId + '/playOrResume');
        }

        function resumeETLDryRun (etlConfigurationId, entitySpaceType) {
            return tsRestService.$get('etl/' + etlConfigurationId + '/' + entitySpaceType + '/resumeDryRun');
        }

        function saveAllETLConfigurations (etlConfigurationId) {
            return tsRestService.$get('etl/' + etlConfigurationId + '/publish');
        }

        function createETLConfiguration (applicationId, body) {
            return tsRestService.$post('etl/application/' + applicationId, body);
        }

        function reorderETLConfigurations (etlConfigurationId, body) {
            return tsRestService.$post('etl/' + etlConfigurationId + '/updateRules', body);
        }

        function updateETLConfiguration (etlConfigurationId, body) {
            return tsRestService.$put('etl/' + etlConfigurationId, body);
        }

        function deleteETLConfiguration (etlConfigurationId) {
            return tsRestService.$delete('etl/' + etlConfigurationId);
        }

        return {
            dryRunETLConfigurations: dryRunETLConfigurations,
            getETLConfiguration: getETLConfiguration,
            getETLConfigurationByApplicationIdSourceEntityName: getETLConfigurationByApplicationIdSourceEntityName,
            getETLRunningStatus: getETLRunningStatus,
            pauseETLRun: pauseETLRun,
            playOrResumePublishedETLConfigurations: playOrResumePublishedETLConfigurations,
            resumeETLDryRun: resumeETLDryRun,
            saveAllETLConfigurations: saveAllETLConfigurations,
            createETLConfiguration: createETLConfiguration,
            reorderETLConfigurations: reorderETLConfigurations,
            updateETLConfiguration: updateETLConfiguration,
            deleteETLConfiguration: deleteETLConfiguration
        };
    }

})();
