System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, Welcome;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome(router) {
          _classCallCheck(this, Welcome);

          this.heading = "Child Router";
          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
          });
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jaGlsZC1yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsTUFBTSx5Q0FFRCxPQUFPOzs7QUFGWixZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7QUFFRCxhQUFPO0FBRVAsaUJBRkEsT0FBTyxDQUVOLE1BQU07Z0NBRlAsT0FBTzs7QUFHaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDOUIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUNoRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVMsUUFBUSxFQUFFLFFBQVEsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQy9ELEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLGNBQWMsRUFBRSxDQUN0RixDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBWlUsT0FBTztBQUNYLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEekIsT0FBTyIsImZpbGUiOiJjbGllbnQvY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvY2xpZW50In0=