(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var GLOBAL_URL = global.URL || global.webkitURL;
  var createObjectURL = GLOBAL_URL.createObjectURL;
  var revokeObjectURL = GLOBAL_URL.revokeObjectURL;

  var NxObjectUrl = nx.declare('nx.ObjectUrl', {
    statics: {
      create: function(inObject, inOptions) {
        var url = createObjectURL(inObject, inOptions);
        return {
          url: url,
          destroy: function() {
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
