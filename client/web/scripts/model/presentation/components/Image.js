// Generated by CoffeeScript 1.3.3
/*
@author Tantaman
*/

define(["./Component"], function(Component) {
  return Component.extend({
    initialize: function() {
      Component.prototype.initialize.apply(this, arguments);
      this.set("type", "ImageModel");
      this.on("change:src", this._updateCache, this);
      this.cachedImage = new Image();
      return this._updateCache();
    },
    _updateCache: function() {
      this.cachedImage.src = this.get("src");
      return console.log(this.get("src"));
    },
    constructor: function ImageModel() {
			Component.prototype.constructor.apply(this, arguments);
		}
  });
});
