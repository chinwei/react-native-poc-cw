/**
 * Created by TOTVS Labs Rest Api to Angular Class Generator
 */

(function () {
    'use strict';

    var tsRestService = require('../fetch.rest.api.js');

    module.exports = tsUploadService(tsRestService);

    function tsUploadService (
        tsRestService
    ) {

        function uploadFileInGzipRFC1952Format () {
            return tsRestService.$post('upload/file');
        }

        function uploadFileInGzipRFC1952FormatDetectFileType () {
            return tsRestService.$post('upload/fileDetectType');
        }

        function uploadFileInGzipRFC1952FormatParseFile () {
            return tsRestService.$post('upload/fileParse');
        }

        function uploadFileUsingFormInGzipRFC1952FormatMultiPartFieldNameFile () {
            return tsRestService.$post('upload/form');
        }

        function uploadPluginInGzipRFC1952Format () {
            return tsRestService.$post('upload/plugin');
        }

        return {
            uploadFileInGzipRFC1952Format: uploadFileInGzipRFC1952Format,
            uploadFileInGzipRFC1952FormatDetectFileType: uploadFileInGzipRFC1952FormatDetectFileType,
            uploadFileInGzipRFC1952FormatParseFile: uploadFileInGzipRFC1952FormatParseFile,
            uploadFileUsingFormInGzipRFC1952FormatMultiPartFieldNameFile: uploadFileUsingFormInGzipRFC1952FormatMultiPartFieldNameFile,
            uploadPluginInGzipRFC1952Format: uploadPluginInGzipRFC1952Format
        };
    }

})();
