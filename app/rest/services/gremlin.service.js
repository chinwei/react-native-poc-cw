/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsGremlinService(tsRestService);

    function tsGremlinService (
        tsRestService
    ) {

        function clearGraphCache () {
            return tsRestService.$get('gremlin/clearGraphCache');
        }

        /* queryParams Defaults: relationship= */
        function getNeighbors (mdmId, queryParams) {
            return tsRestService.$get('gremlin/neighbors/mdmId/' + mdmId, queryParams);
        }

        function getResultMap (body) {
            var options = {
                headers: { 'Content-Type': 'text/plain' }
            };
            return tsRestService.$post('gremlin/execute', body, options);
        }

        return {
            clearGraphCache: clearGraphCache,
            getNeighbors: getNeighbors,
            getResultMap: getResultMap
        };
    }

})();
