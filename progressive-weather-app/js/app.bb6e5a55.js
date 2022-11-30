webpackJsonp(
  [1],
  {
    "+Iod": function (e, t, r) {
      e.exports = r.p + "img/thunderstorm.7e644c1a.svg";
    },
    0: function (e, t, r) {
      e.exports = r("NHnr");
    },
    "7DuZ": function (e, t) {},
    "C/RA": function (e, t, r) {
      e.exports = r.p + "img/rain.a56a7915.svg";
    },
    DWry: function (e, t) {},
    FFdu: function (e, t) {},
    Iz0Z: function (e, t, r) {
      e.exports = r.p + "img/humidity.e7cc8477.svg";
    },
    NHnr: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r("/5sW"),
        i = {
          name: "Weather",
          props: {
            location: { type: String, required: !0 },
            description: { type: String, required: !0 },
            icon: { type: String, required: !0 },
          },
        },
        a = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("section", [
            r("div", { staticClass: "location" }, [e._v(e._s(e.location))]),
            e._v(" "),
            r("div", { staticClass: "weather__description" }, [
              e._v(e._s(e.description)),
            ]),
            e._v(" "),
            r("img", {
              staticClass: "weather__icon",
              attrs: { src: e.icon, alt: e.description },
            }),
          ]);
        },
        s = [],
        o = r("XyMi");
      function c(e) {
        r("DWry");
      }
      var u = !1,
        l = c,
        p = "data-v-148cacf0",
        h = null,
        d = Object(o["a"])(i, a, s, u, l, p, h),
        m = d.exports,
        f = {
          name: "Temperature",
          props: {
            value: { type: Number, required: !0 },
            high: { type: Number, required: !0 },
            low: { type: Number, required: !0 },
          },
          data: function () {
            return { scale: "Celcius" };
          },
          computed: {
            scaleSymbol: function () {
              return this.scale.charAt(0);
            },
            fValue: function () {
              return this.toFahrenheit(this.value);
            },
            fHigh: function () {
              return this.toFahrenheit(this.high);
            },
            fLow: function () {
              return this.toFahrenheit(this.low);
            },
          },
          methods: {
            toFahrenheit: function (e) {
              return Math.floor(1.8 * e + 32);
            },
            toggleTemperature: function () {
              "Celcius" === this.scale
                ? (this.scale = "Fahrenheit")
                : (this.scale = "Celcius");
            },
          },
        },
        v = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("section", [
            n("div", { staticClass: "temperature__value" }, [
              e._v(e._s("C" === e.scaleSymbol ? e.value : e.fValue)),
            ]),
            e._v(" "),
            n("div", { staticClass: "temperature__right" }, [
              n("div", { staticClass: "temperature__scale" }, [
                n(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function (t) {
                        t.preventDefault(), e.toggleTemperature(t);
                      },
                    },
                  },
                  [e._v("°" + e._s(e.scaleSymbol))]
                ),
              ]),
              e._v(" "),
              n("div", { staticClass: "temperature__high" }, [
                n("img", {
                  attrs: { src: r("aF19"), alt: "high temperature" },
                }),
                n("span", [
                  e._v(e._s("C" === e.scaleSymbol ? e.high : e.fHigh)),
                ]),
                e._v("°\n        "),
              ]),
              e._v(" "),
              n("div", { staticClass: "temperature__low" }, [
                n("img", { attrs: { src: r("ickf"), alt: "low temperature" } }),
                n("span", [e._v(e._s("C" === e.scaleSymbol ? e.low : e.fLow))]),
                e._v("°\n        "),
              ]),
            ]),
          ]);
        },
        _ = [];
      function g(e) {
        r("FFdu");
      }
      var y = !1,
        w = g,
        b = "data-v-35c83f4c",
        C = null,
        x = Object(o["a"])(f, v, _, y, w, b, C),
        k = x.exports,
        F = {
          name: "Measurements",
          props: {
            cloudiness: { type: Number, required: !0 },
            windSpeed: { type: Number, required: !0 },
            humidity: { type: Number, required: !0 },
          },
        },
        A = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("section", [
            n("div", { staticClass: "cloudiness" }, [
              n("img", { attrs: { src: r("jG2R"), alt: "cloudiness" } }),
              n("span", { staticClass: "cloudiness__value" }, [
                e._v(e._s(e.cloudiness)),
              ]),
              e._v("%\n    "),
            ]),
            e._v(" "),
            n("div", { staticClass: "wind-speed" }, [
              n("img", { attrs: { src: r("cUAQ"), alt: "wind speed" } }),
              n("span", { staticClass: "wind__value" }, [
                e._v(e._s(e.windSpeed)),
              ]),
              e._v("m/s\n    "),
            ]),
            e._v(" "),
            n("div", { staticClass: "humidity" }, [
              n("img", { attrs: { src: r("Iz0Z"), alt: "humidity" } }),
              n("span", { staticClass: "humidity__value" }, [
                e._v(e._s(e.humidity)),
              ]),
              e._v("%\n    "),
            ]),
          ]);
        },
        S = [];
      function j(e) {
        r("7DuZ");
      }
      var T = !1,
        W = j,
        M = "data-v-a8acd09e",
        q = null,
        D = Object(o["a"])(F, A, S, T, W, M, q),
        E = D.exports,
        N = (r("EuXz"), r("SldL"), r("7hDC")),
        R = r.n(N),
        I = r("Z60a"),
        L = r.n(I),
        H = r("C9uT"),
        O = r.n(H),
        $ = (function () {
          function e() {
            L()(this, e),
              (this.cloudiness = 0),
              (this.windSpeed = 0),
              (this.humidity = 0),
              (this.temperatureValue = 0),
              (this.temperatureHigh = 0),
              (this.temperatureLow = 0),
              (this.location = " "),
              (this.description =
                "Please connect to internet to fetch latest forecast :)"),
              (this.weatherIcon = r("Tavs")),
              this.update();
          }
          return (
            O()(e, [
              {
                key: "update",
                value: function () {
                  var e = this;
                  navigator.onLine &&
                    navigator.geolocation.getCurrentPosition(function (t) {
                      return e.updateForecast(t);
                    });
                },
              },
              {
                key: "updateForecast",
                value: (function () {
                  var e = R()(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = null),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this.getForecast(t.coords)
                                );
                              case 4:
                                (r = e.sent), (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e["catch"](1)),
                                  (r = this.getErrorData());
                              case 10:
                                this.populate(r);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getForecast",
                value: (function () {
                  var e = R()(
                    regeneratorRuntime.mark(function e(t) {
                      var r, n, i;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = "a3e7bdc246b811691b06aab13ccb0dbb"),
                                  (n =
                                    "https://api.openweathermap.org/data/2.5/weather?lat="
                                      .concat(t.latitude, "&lon=")
                                      .concat(t.longitude, "&appid=")
                                      .concat(r, "&units=metric")),
                                  (e.next = 4),
                                  fetch(n)
                                );
                              case 4:
                                return (i = e.sent), (e.next = 7), i.json();
                              case 7:
                                return e.abrupt("return", e.sent);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getErrorData",
                value: function () {
                  return {
                    clouds: { all: 0 },
                    wind: { speed: 0 },
                    main: { humidity: 0, temp: 0, temp_max: 0, temp_min: 0 },
                    weather: [
                      {
                        id: 0,
                        description:
                          "There's a problem at the weather forecast server ¯\\_(ツ)_/¯",
                      },
                    ],
                    name: null,
                    sys: { country: null },
                  };
                },
              },
              {
                key: "populate",
                value: function (e) {
                  (this.cloudiness = e.clouds.all),
                    (this.windSpeed = e.wind.speed),
                    (this.humidity = e.main.humidity),
                    (this.temperatureValue = Math.round(e.main.temp)),
                    (this.temperatureHigh = Math.round(e.main.temp_max)),
                    (this.temperatureLow = Math.round(e.main.temp_min)),
                    (this.location = this.formatLocation(
                      e.name,
                      e.sys.country
                    )),
                    (this.description = e.weather[0].description),
                    (this.weatherIcon = this.getWeatherIcon(e.weather[0].id));
                },
              },
              {
                key: "formatLocation",
                value: function (e, t) {
                  return null === e && null === t
                    ? ""
                    : "".concat(e, ", ").concat(t);
                },
              },
              {
                key: "getWeatherIcon",
                value: function (e) {
                  return this.isThunderstorm(e)
                    ? r("+Iod")
                    : this.isDrizzle(e) || this.isRain(e)
                    ? r("C/RA")
                    : this.isSnow(e)
                    ? r("ptMa")
                    : r("Tavs");
                },
              },
              {
                key: "isThunderstorm",
                value: function (e) {
                  return e > 199 && e < 233;
                },
              },
              {
                key: "isDrizzle",
                value: function (e) {
                  return e > 299 && e < 322;
                },
              },
              {
                key: "isRain",
                value: function (e) {
                  return e > 499 && e < 532;
                },
              },
              {
                key: "isSnow",
                value: function (e) {
                  return e > 599 && e < 623;
                },
              },
            ]),
            e
          );
        })(),
        z = $,
        Z = {
          name: "WeatherApp",
          components: { Weather: m, Temperature: k, Measurements: E },
          data: function () {
            return { forecast: new z() };
          },
        },
        V = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "main",
            [
              r("Measurements", {
                attrs: {
                  cloudiness: this.forecast.cloudiness,
                  windSpeed: this.forecast.windSpeed,
                  humidity: this.forecast.humidity,
                },
              }),
              e._v(" "),
              r("Temperature", {
                attrs: {
                  value: this.forecast.temperatureValue,
                  high: this.forecast.temperatureHigh,
                  low: this.forecast.temperatureLow,
                },
              }),
              e._v(" "),
              r("Weather", {
                attrs: {
                  location: this.forecast.location,
                  description: this.forecast.description,
                  icon: this.forecast.weatherIcon,
                },
              }),
            ],
            1
          );
        },
        P = [];
      function G(e) {
        r("Z9WF");
      }
      var U = !1,
        Y = G,
        J = "data-v-5842378c",
        Q = null,
        X = Object(o["a"])(Z, V, P, U, Y, J, Q),
        B = X.exports,
        K = {
          name: "AppCredits",
          props: { year: { type: Number, required: !0 } },
        },
        ee = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("footer", [
            r("small", [
              e._v("© "),
              e._m(0),
              e._v(" " + e._s(e.year) + " - A "),
              r("cite", [e._v("freeCodeCamp")]),
              e._v(" Project"),
            ]),
          ]);
        },
        te = [
          
        ];
      function re(e) {
        r("xdAY");
      }
      var ne = !1,
        ie = re,
        ae = "data-v-635903fa",
        se = null,
        oe = Object(o["a"])(K, ee, te, ne, ie, ae, se),
        ce = oe.exports,
        ue = {
          name: "App",
          components: { WeatherApp: B, AppCredits: ce },
          data: function () {
            return { date: new Date() };
          },
          computed: {
            year: function () {
              return this.date.getFullYear();
            },
            period: function () {
              var e = this.date.getHours();
              return e > 5 && e < 18 ? "app--day" : "app--night";
            },
          },
        },
        le = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { attrs: { id: "app" } }, [
            r(
              "div",
              { staticClass: "app", class: e.period },
              [
                r("WeatherApp", { class: e.period }),
                e._v(" "),
                r("AppCredits", { class: e.period, attrs: { year: e.year } }),
              ],
              1
            ),
          ]);
        },
        pe = [];
      function he(e) {
        r("atik");
      }
      var de = !1,
        me = he,
        fe = null,
        ve = null,
        _e = Object(o["a"])(ue, le, pe, de, me, fe, ve),
        ge = _e.exports,
        ye = r("ydGU");
      Object(ye["a"])(
        "".concat("/progressive-weather-app/", "service-worker.js"),
        {
          ready: function () {
            console.log(
              "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
            );
          },
          cached: function () {
            console.log("Content has been cached for offline use.");
          },
          updated: function () {
            console.log("New content is available; please refresh.");
          },
          offline: function () {
            console.log(
              "No internet connection found. App is running in offline mode."
            );
          },
          error: function (e) {
            console.error("Error during service worker registration:", e);
          },
        }
      ),
        (n["a"].config.productionTip = !1),
        new n["a"]({
          render: function (e) {
            return e(ge);
          },
        }).$mount("#app");
    },
    Tavs: function (e, t, r) {
      e.exports = r.p + "img/cloud.775ad4d1.svg";
    },
    Z9WF: function (e, t) {},
    aF19: function (e, t, r) {
      e.exports = r.p + "img/high.d70bbaa2.svg";
    },
    atik: function (e, t) {},
    cUAQ: function (e, t, r) {
      e.exports = r.p + "img/wind.05f5c4cf.svg";
    },
    ickf: function (e, t, r) {
      e.exports = r.p + "img/low.61a481cf.svg";
    },
    jG2R: function (e, t, r) {
      e.exports = r.p + "img/cloud.2b02f907.svg";
    },
    ptMa: function (e, t, r) {
      e.exports = r.p + "img/snow.0bb8cb16.svg";
    },
    xdAY: function (e, t) {},
  },
  [0]
);
//# sourceMappingURL=app.bb6e5a55.js.map
