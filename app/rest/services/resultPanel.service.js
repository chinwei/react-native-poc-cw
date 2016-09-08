/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsResultPanelService(tsRestService);

    function tsResultPanelService (
        tsRestService
    ) {

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=value, sortOrder=DESC */
        function fieldLengthDistribution (body, queryParams) {
            return tsRestService.$post('resultpanel/lengthdist', body, null, queryParams);
        }

        /* queryParams Defaults: offset=0, pageSize=10, sortBy=value, sortOrder=DESC, length=-1 */
        function fieldValueDistribution (body, queryParams) {
            return tsRestService.$post('resultpanel/valuedist', body, null, queryParams);
        }

        return {
            fieldLengthDistribution: fieldLengthDistribution,
            fieldValueDistribution: fieldValueDistribution
        };
    }

})();
