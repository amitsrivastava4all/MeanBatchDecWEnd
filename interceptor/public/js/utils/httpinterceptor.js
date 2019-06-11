app.factory('AuthInterceptor',()=> {
  return {
    request: function(config) {
        console.log('Request Interceptor Call');
        config.headers['auth-token'] = localStorage.tokenId;
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      return res;
    },

    responseError: function(res) {
      return res;
    }
  }
});