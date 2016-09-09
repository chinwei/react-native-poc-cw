/* global define, Promise */
(function () {

  'use strict';

  module.exports = tsRestService();

  function tsRestService () {

    var restConfiguration = new RestConfiguration();

    var processErrorCallback;
    var BASE_URL = '';
    var AUTH_TOKEN = '';

    function RestConfiguration () {

      this.baseUrl = function (url) {

        if (!url) {
          return BASE_URL;
        }

        BASE_URL = url;

        return this;
      };

      this.token = function (token) {

        if (!token) {
          return AUTH_TOKEN;
        }

        AUTH_TOKEN = token;

        return this;
      };

      this.error = function (callback) {

        if (!callback) {
          return processErrorCallback;
        }

        processErrorCallback = callback;

        return this;
      };
    }

    function $post (url, data, options, queryParams) {
      return httpRequest(url, 'POST', data, options, queryParams);
    }

    function $get (url, queryParams, options) {
      return httpRequest(url, 'GET', null, options, queryParams);
    }

    function $put (url, data, options, queryParams) {
      return httpRequest(url, 'PUT', data, options, queryParams);
    }

    function $delete (url, queryParams, options) {
      return httpRequest(url, 'DELETE', null, options, queryParams);
    }

    function resolveUrl (url, queryParams, options) {

      if (options && options.baseUrl !== undefined) {
        url = options.baseUrl + url;
      }
      else {
        url = BASE_URL + url;
      }

      if (queryParams) {
        var params = [];

        for (var i in queryParams) {
          if (queryParams.hasOwnProperty(i)) {
            params.push(i + '=' + queryParams[i]);
          }
        }
        if (params.length) {
          url = url + '?' + params.join('&');
        }
      }

      return url;
    }

    function httpRequest (url, method, data, options, queryParams) {

      var promise = new Promise(function (resolve, reject) {

        if (!options) {
          options = {};
        }

        options.url = resolveUrl(url, queryParams, options);
        options.body = data;
        options.method = method;
        options.successFunction = resolve;
        options.errorFunction = reject;

        makeHttpRequest(options);
      });

      return promise;
    }

    function configure () {
      return restConfiguration;
    }

    // PRIVATE FUNCTIONS

    function serialize (obj) {
      return Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
      }).join('&');
    }

    function makeHttpRequest (options) {

      if (!options && !options.url) {
        throw new Error('You must configure at least the http method and url');
      }

      if (AUTH_TOKEN && !options.noAuthHeader) {
        if (!options.headers) {
          options.headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          };

            if (options.body) {
                options.body = JSON.stringify(options.body);
            }
        }

        options.headers['Authorization'] = AUTH_TOKEN;
      }

      if (options.urlReplaceList) {
        options.url = buildUrl(options.url, options.urlReplaceList);
      }

      var httpOptions = buildOptions(options);

      fetch(httpOptions.url, httpOptions)
              .then(function (response) {

                if (!response.ok) {
                  return Promise.reject(response);
                }

                return response;
              })
              .then(function (response) {

                if (options.successFunction === undefined) {
                  /*eslint-disable no-console */
                  console.log('Successfully received data, no functionality defined to process it. ', options.body);
                  /*eslint-enable no-console */
                }
                else {
                  options.successFunction(response.json(), response.status, response.headers);
                }
              })
              .catch(function (response) {

                if (response.status !== 0) {
                  processError(response, options.errorFunction);
                }
              });
    }

    // Don't allow any undefined values into httpOptions
    function buildOptions (srcOptions) {

      var keys = ['method', 'url', 'params', 'body', 'cache', 'headers'];

      var result = {};

      keys.map(function (k) {

        if (srcOptions[k]) {
          result[k] = srcOptions[k];
        }
      });

      if (result.body) {
        if (result.headers && result.headers['Content-Type'] && result.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
          result.body = serialize(result.body);
        }
      }

      return result;
    }

    function buildUrl (url, argList) {

      var finalURL = url;

      if (argList || argList === []) {

        var replaceStr = '';
        var i = 0;
        var len = argList.length;

        for (; i < len; i++) {
          replaceStr = '{' + i + '}';
          finalURL = finalURL.replace(replaceStr, argList[i]);
        }
      }

      return finalURL;
    }

    function processError (response,  errorFunction) {

      if (processErrorCallback) {
        processErrorCallback(response.statusText, response.status, response.headers, errorFunction);
      }

      if (typeof errorFunction === 'function') {
        errorFunction(response);
      }
    }

    return {
      $delete: $delete,
      $get: $get,
      $put: $put,
      $post: $post,
      resolveUrl: resolveUrl,
      httpRequest: httpRequest,
      configure: configure
    };
  }

})();
