// Generated by CoffeeScript 1.3.3
/*
@author Matt Crinklaw-Vogt
*/

define(["vendor/backbone", "model/geom/SpatialObject", "./components/ComponentFactory"], function(Backbone, SpatialObject, CompnentFactory) {
  return SpatialObject.extend({
    initialize: function() {
      var components, hydratedComps,
        _this = this;
      components = this.get("components");
      if (!(components != null)) {
        this.set("components", []);
      } else {
        hydratedComps = [];
        this.set("components", hydratedComps);
        components.forEach(function(rawComp) {
          var comp;
          if (rawComp instanceof Backbone.Model) {
            comp = rawComp.clone();
            hydratedComps.push(comp);
          } else {
            switch (rawComp.type) {
              case "ImageModel":
                comp = CompnentFactory.createImage(rawComp);
                hydratedComps.push(comp);
                break;
              case "TextBox":
                comp = CompnentFactory.createTextBox(rawComp);
                hydratedComps.push(comp);
            }
          }
          return _this._registerWithComponent(comp);
        });
      }
      return this.on("unrender", this._unrendered, this);
    },
    _unrendered: function() {
      return this.get("components").forEach(function(component) {
        return component.trigger("unrender", true);
      });
    },
    _registerWithComponent: function(component) {
      component.on("dispose", this.remove, this);
      component.on("change:selected", this.selectionChanged, this);
      return component.on("change", this.componentChanged, this);
    },
    getPositionData: function() {
      return {
        x: this.attributes.x,
        y: this.attributes.y,
        z: this.attributes.z,
        impScale: this.attributes.impScale,
        rotateX: this.attributes.rotateX,
        rotateY: this.attributes.rotateY,
        rotateZ: this.attributes.rotateZ
      };
    },
    add: function(component) {
      this.attributes.components.push(component);
      this._registerWithComponent(component);
      this.trigger("contentsChanged");
      return this.trigger("change:components.add", this, component);
    },
    dispose: function() {
      this.set({
        active: false,
        selected: false
      });
      this.trigger("dispose", this);
      return this.off("dispose");
    },
    remove: function(component) {
      var idx;
      idx = this.attributes.components.indexOf(component);
      if (idx !== -1) {
        this.attributes.components.splice(idx, 1);
        this.trigger("contentsChanged");
        this.trigger("change:components.remove", this, component);
        component.trigger("unrender");
        return component.off(null, null, this);
      }
    },
    componentChanged: function() {
      return this.trigger("contentsChanged");
    },
    unselectComponents: function() {
      if (this.lastSelection) {
        return this.lastSelection.set("selected", false);
      }
    },
    selectionChanged: function(model, selected) {
      if (selected) {
        if (this.lastSelection !== model) {
          this.attributes.components.forEach(function(component) {
            if (component !== model) {
              return component.set("selected", false);
            }
          });
          this.lastSelection = model;
        }
        return this.trigger("change:activeComponent", this, model, selected);
      } else {
        this.trigger("change:activeComponent", this, null);
        return this.lastSelection = null;
      }
    },
    constructor: function Slide() {
			SpatialObject.prototype.constructor.apply(this, arguments);
		}
  });
});
