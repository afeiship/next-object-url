(function() {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var GLOBAL_URL = global.URL || global.webkitURL;
  var createObjectURL = GLOBAL_URL.createObjectURL;
  var revokeObjectURL = GLOBAL_URL.revokeObjectURL;

  var NxObjectUrl = nx.declare('nx.ObjectUrl', {
    statics: {
      create: function (inObject, inOptions) {
        var url = createObjectURL(inObject, inOptions);
        return {
          url: url,
          destroy: function () {
            return revokeObjectURL(url);
          }
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxObjectUrl;
  }
})();
