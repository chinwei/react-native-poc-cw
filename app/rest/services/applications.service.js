/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsApplicationsService(tsRestService);

    function tsApplicationsService (
        tsRestService
    ) {

        function dryRunStats (applicationId, entityMappingId) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/dryrunProgressStats');
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getAllGoldenTestRecords (applicationId, entityMappingId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/goldenTestRecord', queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getAllRejectedTestRecords (applicationId, entityMappingId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/rejectedTestRecord', queryParams);
        }

        function getApplication (applicationId) {
            return tsRestService.$get('applications/' + applicationId);
        }

        function getApplicationStats (applicationId) {
            return tsRestService.$get('applications/' + applicationId + '/stats');
        }

        /* queryParams Defaults: stagingType=, entitySpace=PRODUCTION */
        function getApplicationTypeMappings (applicationId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/applicationTypeMappings', queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getApplications (queryParams) {
            return tsRestService.$get('applications', queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function getEntityMapping (applicationId, entityMappingId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId, queryParams);
        }

        /* queryParams Defaults: entitySpace=, reverseMapping=false */
        function getEntityMappingSnapshot (applicationId, entityMappingId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/snapshot', queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, stagingType=, entityId=, offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getEntityMappings (applicationId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings', queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, stagingType=, entityId=, offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getEntityMappingsThatArePublished (applicationId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/published', queryParams);
        }

        function getFieldCleanseRule (applicationId, entityMappingId, fieldMappingId, fieldCleanseRuleId) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/fieldCleanseRules/' + fieldCleanseRuleId);
        }

        function getFieldMapping (applicationId, entityMappingId, fieldMappingId) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId);
        }

        function getFieldMappingRecommendations (applicationId, entityMappingId, fieldName) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/recommendations/' + fieldName);
        }

        function getGoldenTestRecord (applicationId, entityMappingId, recordId) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/goldenTestRecord/' + recordId);
        }

        /* queryParams Defaults: reverseMapping=false */
        function getPublishedEntityMapping (applicationId, entityMappingId, queryParams) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/published', queryParams);
        }

        function getRejectedTestRecord (applicationId, entityMappingId, recordId) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/rejectedTestRecord/' + recordId);
        }

        function testStagingRecord (applicationId, entityMappingId, recordId) {
            return tsRestService.$get('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/testStagingRecord/' + recordId);
        }

        /* queryParams Defaults: reverseMapping=false, offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function analyzeFieldMapping (applicationId, entityMappingId, fieldMappingId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/analyze', body, null, queryParams);
        }

        function cancelDryRun (applicationId, entityMappingId) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/dryrunCancel');
        }

        function createApplication (body) {
            return tsRestService.$post('applications', body);
        }

        /* queryParams Defaults: reverseMapping=false */
        function createEmbeddedEntityMapping (applicationId, entityMappingId, relationshipLabel, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/embedded/' + relationshipLabel, body, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function createEntityMapping (applicationId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings', body, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, insertAtIndex= */
        function createFieldCleanseRule (applicationId, entityMappingId, fieldMappingId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/fieldCleanseRules', body, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, parentFieldMappingId= */
        function createFieldMapping (applicationId, entityMappingId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings', body, null, queryParams);
        }

        /* queryParams Defaults: fullyQualifiedEntityName=, fullyQualifiedFieldName=, reverseMapping=false */
        function createFieldMappingUsingFullyQualifiedFieldName (applicationId, entityMappingId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/usingFullyQualifiedPath', body, null, queryParams);
        }

        function createWithEntityMappingSnapshot (applicationId, body) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/snapshot', body);
        }

        /* queryParams Defaults: numberOfStagingRecords=10 */
        function dryRunStagingRecords (applicationId, entityMappingId, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/dryrun', null, null, queryParams);
        }

        /* queryParams Defaults: stagingRecordIds= */
        function dryRunStagingRecordsUsingIds (applicationId, entityMappingId, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/dryrunUsingIds', null, null, queryParams);
        }

        /* queryParams Defaults: percentOfStagingRecords=5 */
        function dryRunStagingRecordsUsingPercent (applicationId, entityMappingId, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/dryrunUsingPercent', null, null, queryParams);
        }

        function pauseSpecificEntityMapping (applicationId, entityMappingId) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/pause');
        }

        function playStartProcessingSpecificEntityMapping (applicationId, entityMappingId) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/play');
        }

        /* queryParams Defaults: reverseMapping=false */
        function publishEntityMapping (applicationId, entityMappingId, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/publish', null, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function reorderFieldCleanseRules (applicationId, entityMappingId, fieldMappingId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/fieldCleanseRules/reorder', body, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function resetEntityMapping (applicationId, entityMappingId, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/reset', null, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function saveAllFieldCleanseRules (applicationId, entityMappingId, fieldMappingId, body, queryParams) {
            return tsRestService.$post('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/fieldCleanseRules/save', body, null, queryParams);
        }

        function updateApplication (applicationId, body) {
            return tsRestService.$put('applications/' + applicationId, body);
        }

        /* queryParams Defaults: reverseMapping=false */
        function updateEntityMapping (applicationId, entityMappingId, body, queryParams) {
            return tsRestService.$put('applications/' + applicationId + '/entityMappings/' + entityMappingId, body, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function updateFieldCleanseRule (applicationId, entityMappingId, fieldMappingId, fieldCleanseRuleId, body, queryParams) {
            return tsRestService.$put('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/fieldCleanseRules/' + fieldCleanseRuleId, body, null, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, parentFieldMappingId= */
        function updateFieldMapping (applicationId, entityMappingId, fieldMappingId, body, queryParams) {
            return tsRestService.$put('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId, body, null, queryParams);
        }

        function updateWithEntityMappingSnapshot (applicationId, entityMappingId, body) {
            return tsRestService.$put('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/snapshot', body);
        }

        /* queryParams Defaults: forceDeletion= */
        function deleteApplication (applicationId, queryParams) {
            return tsRestService.$delete('applications/' + applicationId, queryParams);
        }

        /* queryParams Defaults: forceDeletion= */
        function deleteApplicationEntity (applicationId, entityName, queryParams) {
            return tsRestService.$delete('applications/' + applicationId + '/' + entityName, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false */
        function deleteEntityMapping (applicationId, entityMappingId, queryParams) {
            return tsRestService.$delete('applications/' + applicationId + '/entityMappings/' + entityMappingId, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, parentFieldCleanseRuleId= */
        function deleteFieldCleanseRule (applicationId, entityMappingId, fieldMappingId, fieldCleanseRuleId, queryParams) {
            return tsRestService.$delete('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId + '/fieldCleanseRules/' + fieldCleanseRuleId, queryParams);
        }

        /* queryParams Defaults: reverseMapping=false, parentFieldMappingId= */
        function deleteFieldMapping (applicationId, entityMappingId, fieldMappingId, queryParams) {
            return tsRestService.$delete('applications/' + applicationId + '/entityMappings/' + entityMappingId + '/fieldMappings/' + fieldMappingId, queryParams);
        }

        return {
            dryRunStats: dryRunStats,
            getAllGoldenTestRecords: getAllGoldenTestRecords,
            getAllRejectedTestRecords: getAllRejectedTestRecords,
            getApplication: getApplication,
            getApplicationStats: getApplicationStats,
            getApplicationTypeMappings: getApplicationTypeMappings,
            getApplications: getApplications,
            getEntityMapping: getEntityMapping,
            getEntityMappingSnapshot: getEntityMappingSnapshot,
            getEntityMappings: getEntityMappings,
            getEntityMappingsThatArePublished: getEntityMappingsThatArePublished,
            getFieldCleanseRule: getFieldCleanseRule,
            getFieldMapping: getFieldMapping,
            getFieldMappingRecommendations: getFieldMappingRecommendations,
            getGoldenTestRecord: getGoldenTestRecord,
            getPublishedEntityMapping: getPublishedEntityMapping,
            getRejectedTestRecord: getRejectedTestRecord,
            testStagingRecord: testStagingRecord,
            analyzeFieldMapping: analyzeFieldMapping,
            cancelDryRun: cancelDryRun,
            createApplication: createApplication,
            createEmbeddedEntityMapping: createEmbeddedEntityMapping,
            createEntityMapping: createEntityMapping,
            createFieldCleanseRule: createFieldCleanseRule,
            createFieldMapping: createFieldMapping,
            createFieldMappingUsingFullyQualifiedFieldName: createFieldMappingUsingFullyQualifiedFieldName,
            createWithEntityMappingSnapshot: createWithEntityMappingSnapshot,
            dryRunStagingRecords: dryRunStagingRecords,
            dryRunStagingRecordsUsingIds: dryRunStagingRecordsUsingIds,
            dryRunStagingRecordsUsingPercent: dryRunStagingRecordsUsingPercent,
            pauseSpecificEntityMapping: pauseSpecificEntityMapping,
            playStartProcessingSpecificEntityMapping: playStartProcessingSpecificEntityMapping,
            publishEntityMapping: publishEntityMapping,
            reorderFieldCleanseRules: reorderFieldCleanseRules,
            resetEntityMapping: resetEntityMapping,
            saveAllFieldCleanseRules: saveAllFieldCleanseRules,
            updateApplication: updateApplication,
            updateEntityMapping: updateEntityMapping,
            updateFieldCleanseRule: updateFieldCleanseRule,
            updateFieldMapping: updateFieldMapping,
            updateWithEntityMappingSnapshot: updateWithEntityMappingSnapshot,
            deleteApplication: deleteApplication,
            deleteApplicationEntity: deleteApplicationEntity,
            deleteEntityMapping: deleteEntityMapping,
            deleteFieldCleanseRule: deleteFieldCleanseRule,
            deleteFieldMapping: deleteFieldMapping
        };
    }

})();
