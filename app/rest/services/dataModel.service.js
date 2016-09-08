/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsDataModelService(tsRestService);

    function tsDataModelService (
        tsRestService
    ) {

        function createEntityContributionStatistics (entityTemplateId) {
            return tsRestService.$get('entities/templates/stats/contribution/' + entityTemplateId);
        }

        function getEntityTemplate (entityTemplateId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId);
        }

        function getEntityTemplateByName (entityTemplateName) {
            return tsRestService.$get('entities/templates/name/' + entityTemplateName);
        }

        function getEntityTemplateFromProduction (entityTemplateId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/published');
        }

        /* queryParams Defaults: entitySpace=PRODUCTION */
        function getEntityTemplateSnapshot (entityTemplateId, queryParams) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/snapshot', queryParams);
        }

        function getEntityTemplateWithAllRelatedTemplates (entityTemplateId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/published/allrelated');
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getEntityTemplates (queryParams) {
            return tsRestService.$get('entities/templates', queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getEntityTemplatesThatArePublished (queryParams) {
            return tsRestService.$get('entities/templates/published', queryParams);
        }

        function getEntityValidationRule (entityTemplateId, entityValidationRuleId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/entityValidationRules/' + entityValidationRuleId);
        }

        function getField (mdmId) {
            return tsRestService.$get('fields/' + mdmId);
        }

        function getFieldMergeRule (entityTemplateId, id) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/fieldMergeRules/' + id);
        }

        function getFieldMergeRules (entityTemplateId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/fieldMergeRules');
        }

        function getFieldSurvivorshipRule (entityTemplateId, fieldId, fieldSurvivorshipRuleId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldSurvivorshipRules/' + fieldSurvivorshipRuleId);
        }

        function getFieldTemplate (mdmId) {
            return tsRestService.$get('fields/templates/' + mdmId);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getFieldTemplates (queryParams) {
            return tsRestService.$get('fields/templates', queryParams);
        }

        function getFieldValidationRule (entityTemplateId, fieldId, fieldValidationRuleId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldValidationRules/' + fieldValidationRuleId);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getFields (queryParams) {
            return tsRestService.$get('fields', queryParams);
        }

        function getFieldsThatCanBeAddedToTheTemplate (entityTemplateId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/possibleFields');
        }

        function getGlobalEntityTemplate (entityTemplateId) {
            return tsRestService.$get('entities/templates/global/' + entityTemplateId);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC, EntityTemplateTypeId=, VerticalIds= */
        function getGlobalEntityTemplates (queryParams) {
            return tsRestService.$get('entities/templates/global', queryParams);
        }

        /* queryParams Defaults: goldenType= */
        function getGoldenRecord (entityTemplateId, goldenRecordId, queryParams) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/goldenRecords/' + goldenRecordId, queryParams);
        }

        function getGoldenRecordMergeRecommendations (entityTemplateId, goldenRecordId) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/goldenRecords/' + goldenRecordId + '/mergeRecommendations');
        }

        /* queryParams Defaults: masterType= */
        function getMasterRecord (entityTemplateId, masterRecordId, queryParams) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/masterRecords/' + masterRecordId, queryParams);
        }

        /* queryParams Defaults: filter= */
        function getMergesCountForTheGoldenRecord (entityTemplateId, queryParams) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/goldenRecords/mergesCount', queryParams);
        }

        function getPossibleFieldTypes () {
            return tsRestService.$get('fields/possibleTypes');
        }

        /* queryParams Defaults: rejectedType= */
        function getRejectedRecord (entityTemplateId, rejectedRecordId, queryParams) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/rejectedRecords/' + rejectedRecordId, queryParams);
        }

        /* queryParams Defaults: filter= */
        function getRejectedRecordStats (entityTemplateId, queryParams) {
            return tsRestService.$get('entities/templates/' + entityTemplateId + '/rejectedRecords/stats', queryParams);
        }

        function addFieldToTemplateField (entityTemplateId, fieldId, childId) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/onboardField/' + fieldId + '/' + childId);
        }

        function addFieldToTheTemplate (entityTemplateId, fieldId) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/onboardField/' + fieldId);
        }

        function createEntityTemplate (body) {
            return tsRestService.$post('entities/templates', body);
        }

        function createEntityValidationRule (entityTemplateId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/entityValidationRules', body);
        }

        function createField (body) {
            return tsRestService.$post('fields', body);
        }

        function createFieldMergeRule (entityTemplateId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldMergeRules', body);
        }

        /* queryParams Defaults: insertAtIndex= */
        function createFieldSurvivorshipRule (entityTemplateId, fieldId, body, queryParams) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldSurvivorshipRules', body, null, queryParams);
        }

        function createFieldTemplate (body) {
            return tsRestService.$post('fields/templates', body);
        }

        /* queryParams Defaults: insertAtIndex= */
        function createFieldValidationRule (entityTemplateId, fieldId, body, queryParams) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldValidationRules', body, null, queryParams);
        }

        function createWithEntityTemplateSnapshot (body) {
            return tsRestService.$post('entities/templates/snapshot', body);
        }

        function dismissMergeRecommendation (entityTemplateId, goldenRecordId, mergeGoldenRecordId) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/goldenRecords/' + goldenRecordId + '/dismissRecommendation/' + mergeGoldenRecordId);
        }

        function editGoldenRecord (entityTemplateId, goldenRecordId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/goldenRecords/' + goldenRecordId + '/edit', body);
        }

        function mergeDryRun (entityTemplateId, goldenRecordId, mergeGoldenRecordId) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/goldenRecords/' + goldenRecordId + '/mergeDryRun/' + mergeGoldenRecordId);
        }

        function mergeGoldenRecords (entityTemplateId, goldenRecordId, mergeGoldenRecordId) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/goldenRecords/' + goldenRecordId + '/merge/' + mergeGoldenRecordId);
        }

        function publishEntityTemplate (entityTemplateId) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/publish');
        }

        function reorderFieldSurvivorshipRulesForField (entityTemplateId, fieldId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldSurvivorshipRules/reorder', body);
        }

        function reorderFieldValidationRulesForField (entityTemplateId, fieldId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldValidationRules/reorder', body);
        }

        /* queryParams Defaults: rejectedType= */
        function reprocessAllRejectedRecords (entityTemplateId, queryParams) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/rejectedRecords/reprocessAll', null, null, queryParams);
        }

        /* queryParams Defaults: rejectedType= */
        function reprocessRejectedRecord (entityTemplateId, body, queryParams) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/rejectedRecords/reprocess', body, null, queryParams);
        }

        function saveAllEntityValidationRules (entityTemplateId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/entityValidationRules/save', body);
        }

        function saveAllFieldMergeRules (entityTemplateId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldMergeRules/save', body);
        }

        function saveAllFieldSurvivorshipRules (entityTemplateId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldSurvivorshipRules/save', body);
        }

        function saveAllFieldValidationRules (entityTemplateId, fieldId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldValidationRules/save', body);
        }

        function updateProfileTitleFields (entityTemplateId, body) {
            return tsRestService.$post('entities/templates/' + entityTemplateId + '/profileTitle', body);
        }

        function updateEntityTemplate (entityTemplateId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId, body);
        }

        function updateEntityTemplateChildFieldValues (entityTemplateId, fieldId, childId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/field/' + fieldId + '/' + childId, body);
        }

        function updateEntityTemplateFieldValues (entityTemplateId, fieldId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/field/' + fieldId, body);
        }

        function updateEntityValidationRule (entityTemplateId, entityValidationRuleId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/entityValidationRules/' + entityValidationRuleId, body);
        }

        function updateField (mdmId, body) {
            return tsRestService.$put('fields/' + mdmId, body);
        }

        function updateFieldMergeRule (entityTemplateId, id, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/fieldMergeRules/' + id, body);
        }

        function updateFieldSurvivorshipRule (entityTemplateId, fieldId, fieldSurvivorshipRuleId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldSurvivorshipRules/' + fieldSurvivorshipRuleId, body);
        }

        function updateFieldTemplate (mdmId, body) {
            return tsRestService.$put('fields/templates/' + mdmId, body);
        }

        function updateFieldValidationRule (entityTemplateId, fieldId, fieldValidationRuleId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldValidationRules/' + fieldValidationRuleId, body);
        }

        function updateWithEntityTemplateSnapshot (entityTemplateId, body) {
            return tsRestService.$put('entities/templates/' + entityTemplateId + '/snapshot', body);
        }

        function deleteEntityTemplateField (entityTemplateId, fieldId) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId + '/field/' + fieldId);
        }

        function deleteEntityTemplateNestedField (entityTemplateId, fieldId, childId) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId + '/field/' + fieldId + '/' + childId);
        }

        function deleteEntityValidationRule (entityTemplateId, entityValidationRuleId) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId + '/entityValidationRules/' + entityValidationRuleId);
        }

        function deleteFieldMergeRule (entityTemplateId, id) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId + '/fieldMergeRules/' + id);
        }

        function deleteFieldSurvivorshipRule (entityTemplateId, fieldId, fieldSurvivorshipRuleId) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldSurvivorshipRules/' + fieldSurvivorshipRuleId);
        }

        function deleteFieldValidationRule (entityTemplateId, fieldId, fieldValidationRuleId) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId + '/fieldId/' + fieldId + '/fieldValidationRules/' + fieldValidationRuleId);
        }

        function deleteWorkingCopyOfEntityTemplate (entityTemplateId) {
            return tsRestService.$delete('entities/templates/' + entityTemplateId);
        }

        return {
            createEntityContributionStatistics: createEntityContributionStatistics,
            getEntityTemplate: getEntityTemplate,
            getEntityTemplateByName: getEntityTemplateByName,
            getEntityTemplateFromProduction: getEntityTemplateFromProduction,
            getEntityTemplateSnapshot: getEntityTemplateSnapshot,
            getEntityTemplateWithAllRelatedTemplates: getEntityTemplateWithAllRelatedTemplates,
            getEntityTemplates: getEntityTemplates,
            getEntityTemplatesThatArePublished: getEntityTemplatesThatArePublished,
            getEntityValidationRule: getEntityValidationRule,
            getField: getField,
            getFieldMergeRule: getFieldMergeRule,
            getFieldMergeRules: getFieldMergeRules,
            getFieldSurvivorshipRule: getFieldSurvivorshipRule,
            getFieldTemplate: getFieldTemplate,
            getFieldTemplates: getFieldTemplates,
            getFieldValidationRule: getFieldValidationRule,
            getFields: getFields,
            getFieldsThatCanBeAddedToTheTemplate: getFieldsThatCanBeAddedToTheTemplate,
            getGlobalEntityTemplate: getGlobalEntityTemplate,
            getGlobalEntityTemplates: getGlobalEntityTemplates,
            getGoldenRecord: getGoldenRecord,
            getGoldenRecordMergeRecommendations: getGoldenRecordMergeRecommendations,
            getMasterRecord: getMasterRecord,
            getMergesCountForTheGoldenRecord: getMergesCountForTheGoldenRecord,
            getPossibleFieldTypes: getPossibleFieldTypes,
            getRejectedRecord: getRejectedRecord,
            getRejectedRecordStats: getRejectedRecordStats,
            addFieldToTemplateField: addFieldToTemplateField,
            addFieldToTheTemplate: addFieldToTheTemplate,
            createEntityTemplate: createEntityTemplate,
            createEntityValidationRule: createEntityValidationRule,
            createField: createField,
            createFieldMergeRule: createFieldMergeRule,
            createFieldSurvivorshipRule: createFieldSurvivorshipRule,
            createFieldTemplate: createFieldTemplate,
            createFieldValidationRule: createFieldValidationRule,
            createWithEntityTemplateSnapshot: createWithEntityTemplateSnapshot,
            dismissMergeRecommendation: dismissMergeRecommendation,
            editGoldenRecord: editGoldenRecord,
            mergeDryRun: mergeDryRun,
            mergeGoldenRecords: mergeGoldenRecords,
            publishEntityTemplate: publishEntityTemplate,
            reorderFieldSurvivorshipRulesForField: reorderFieldSurvivorshipRulesForField,
            reorderFieldValidationRulesForField: reorderFieldValidationRulesForField,
            reprocessAllRejectedRecords: reprocessAllRejectedRecords,
            reprocessRejectedRecord: reprocessRejectedRecord,
            saveAllEntityValidationRules: saveAllEntityValidationRules,
            saveAllFieldMergeRules: saveAllFieldMergeRules,
            saveAllFieldSurvivorshipRules: saveAllFieldSurvivorshipRules,
            saveAllFieldValidationRules: saveAllFieldValidationRules,
            updateProfileTitleFields: updateProfileTitleFields,
            updateEntityTemplate: updateEntityTemplate,
            updateEntityTemplateChildFieldValues: updateEntityTemplateChildFieldValues,
            updateEntityTemplateFieldValues: updateEntityTemplateFieldValues,
            updateEntityValidationRule: updateEntityValidationRule,
            updateField: updateField,
            updateFieldMergeRule: updateFieldMergeRule,
            updateFieldSurvivorshipRule: updateFieldSurvivorshipRule,
            updateFieldTemplate: updateFieldTemplate,
            updateFieldValidationRule: updateFieldValidationRule,
            updateWithEntityTemplateSnapshot: updateWithEntityTemplateSnapshot,
            deleteEntityTemplateField: deleteEntityTemplateField,
            deleteEntityTemplateNestedField: deleteEntityTemplateNestedField,
            deleteEntityValidationRule: deleteEntityValidationRule,
            deleteFieldMergeRule: deleteFieldMergeRule,
            deleteFieldSurvivorshipRule: deleteFieldSurvivorshipRule,
            deleteFieldValidationRule: deleteFieldValidationRule,
            deleteWorkingCopyOfEntityTemplate: deleteWorkingCopyOfEntityTemplate
        };
    }

})();
