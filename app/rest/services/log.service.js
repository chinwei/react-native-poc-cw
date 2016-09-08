/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsLogService(tsRestService);

    function tsLogService (
        tsRestService
    ) {

        function getLogFile (file) {
            return tsRestService.$get('log/download/' + file);
        }

        function saveLogging (body) {
            var options = {
                headers: { 'Content-Type': 'text/plain' }
            };
            return tsRestService.$post('log/text', body, options);
        }

        return {
            getLogFile: getLogFile,
            saveLogging: saveLogging
        };
    }

})();
