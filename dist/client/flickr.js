System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, url, Flickr;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
      Flickr = _export("Flickr", (function () {
        function Flickr(http) {
          _classCallCheck(this, Flickr);

          this.heading = "Flickr";
          this.images = [];
          this.http = http;
        }

        _prototypeProperties(Flickr, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.http.jsonp(url).then(function (response) {
                _this.images = response.content.items;
              });
            },
            writable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {
              return confirm("Are you sure you want to leave?");
            },
            writable: true,
            configurable: true
          }
        });

        return Flickr;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9mbGlja3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FFZCxHQUFHLEVBRU0sTUFBTTs7O0FBSlgsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUVkLFNBQUcsR0FBRyw2RkFBNkY7QUFFMUYsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxJQUFJO2dDQUZMLE1BQU07O0FBR2YsY0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDeEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7OzZCQU5VLE1BQU07QUFDVixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFPeEMsa0JBQVE7bUJBQUEsb0JBQUU7O0FBQ1IscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzNDLHNCQUFLLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztlQUN0QyxDQUFDLENBQUM7YUFDSjs7OztBQUVELHVCQUFhO21CQUFBLHlCQUFFO0FBQ2IscUJBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDbkQ7Ozs7OztlQWhCVSxNQUFNIiwiZmlsZSI6ImNsaWVudC9mbGlja3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy9jbGllbnQifQ==