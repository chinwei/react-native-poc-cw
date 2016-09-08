/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsRelationshipService(tsRestService);

    function tsRelationshipService (
        tsRestService
    ) {

        /* queryParams Defaults: entityTypes=, relationshipNames=, offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getAllRelationshipMappingsOfTenant (queryParams) {
            return tsRestService.$get('relationship/mapping', queryParams);
        }

        function getDirectRelationshipMappingsByEntityTemplateId (mdmId) {
            return tsRestService.$get('relationship/mapping/direct/id/' + mdmId);
        }

        function getDirectRelationshipMappingsByEntityTemplateName (mdmName) {
            return tsRestService.$get('relationship/mapping/direct/name/' + mdmName);
        }

        /* queryParams Defaults: entityTypes=, relationshipNames=, offset=0, pageSize=10, sortBy=mdmId, sortOrder=ASC */
        function getEntityMappingsThatArePublished (queryParams) {
            return tsRestService.$get('relationship/published', queryParams);
        }

        function getIndirectRelationshipMappingsByEntityTemplateId (mdmId) {
            return tsRestService.$get('relationship/mapping/indirect/id/' + mdmId);
        }

        function getIndirectRelationshipMappingsByEntityTemplateName (mdmName) {
            return tsRestService.$get('relationship/mapping/indirect/name/' + mdmName);
        }

        function processingRelationship (mdmId) {
            return tsRestService.$get('relationship/' + mdmId + '/run');
        }

        function createRelationshipMapping (body) {
            return tsRestService.$post('relationship/mapping', body);
        }

        function publishRelationshipMapping (mdmId) {
            return tsRestService.$post('relationship/' + mdmId + '/publish');
        }

        function updateRelationshipMapping (mdmId, body) {
            return tsRestService.$put('relationship/mapping/' + mdmId, body);
        }

        function deleteRelationshipMapping (mdmId) {
            return tsRestService.$delete('relationship/mapping/' + mdmId);
        }

        return {
            getAllRelationshipMappingsOfTenant: getAllRelationshipMappingsOfTenant,
            getDirectRelationshipMappingsByEntityTemplateId: getDirectRelationshipMappingsByEntityTemplateId,
            getDirectRelationshipMappingsByEntityTemplateName: getDirectRelationshipMappingsByEntityTemplateName,
            getEntityMappingsThatArePublished: getEntityMappingsThatArePublished,
            getIndirectRelationshipMappingsByEntityTemplateId: getIndirectRelationshipMappingsByEntityTemplateId,
            getIndirectRelationshipMappingsByEntityTemplateName: getIndirectRelationshipMappingsByEntityTemplateName,
            processingRelationship: processingRelationship,
            createRelationshipMapping: createRelationshipMapping,
            publishRelationshipMapping: publishRelationshipMapping,
            updateRelationshipMapping: updateRelationshipMapping,
            deleteRelationshipMapping: deleteRelationshipMapping
        };
    }

})();
