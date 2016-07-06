var THREE = {
    REVISION: "77dev"
};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE),
void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
void 0 === Math.sign && (Math.sign = function(e) {
    return 0 > e ? -1 : e > 0 ? 1 : +e
}
),
void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
}),
void 0 === Object.assign && Object.defineProperty(Object, "assign", {
    writable: !0,
    configurable: !0,
    value: function(e) {
        "use strict";
        if (void 0 === e || null  === e)
            throw new TypeError("Cannot convert first argument to object");
        for (var t = Object(e), n = 1, r = arguments.length; n !== r; ++n) {
            var i = arguments[n];
            if (void 0 !== i && null  !== i) {
                i = Object(i);
                for (var a = Object.keys(i), o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o]
                      , h = Object.getOwnPropertyDescriptor(i, c);
                    void 0 !== h && h.enumerable && (t[c] = i[c])
                }
            }
        }
        return t
    }
}),
THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
},
THREE.CullFaceNone = 0,
THREE.CullFaceBack = 1,
THREE.CullFaceFront = 2,
THREE.CullFaceFrontBack = 3,
THREE.FrontFaceDirectionCW = 0,
THREE.FrontFaceDirectionCCW = 1,
THREE.BasicShadowMap = 0,
THREE.PCFShadowMap = 1,
THREE.PCFSoftShadowMap = 2,
THREE.FrontSide = 0,
THREE.BackSide = 1,
THREE.DoubleSide = 2,
THREE.FlatShading = 1,
THREE.SmoothShading = 2,
THREE.NoColors = 0,
THREE.FaceColors = 1,
THREE.VertexColors = 2,
THREE.NoBlending = 0,
THREE.NormalBlending = 1,
THREE.AdditiveBlending = 2,
THREE.SubtractiveBlending = 3,
THREE.MultiplyBlending = 4,
THREE.CustomBlending = 5,
THREE.AddEquation = 100,
THREE.SubtractEquation = 101,
THREE.ReverseSubtractEquation = 102,
THREE.MinEquation = 103,
THREE.MaxEquation = 104,
THREE.ZeroFactor = 200,
THREE.OneFactor = 201,
THREE.SrcColorFactor = 202,
THREE.OneMinusSrcColorFactor = 203,
THREE.SrcAlphaFactor = 204,
THREE.OneMinusSrcAlphaFactor = 205,
THREE.DstAlphaFactor = 206,
THREE.OneMinusDstAlphaFactor = 207,
THREE.DstColorFactor = 208,
THREE.OneMinusDstColorFactor = 209,
THREE.SrcAlphaSaturateFactor = 210,
THREE.NeverDepth = 0,
THREE.AlwaysDepth = 1,
THREE.LessDepth = 2,
THREE.LessEqualDepth = 3,
THREE.EqualDepth = 4,
THREE.GreaterEqualDepth = 5,
THREE.GreaterDepth = 6,
THREE.NotEqualDepth = 7,
THREE.MultiplyOperation = 0,
THREE.MixOperation = 1,
THREE.AddOperation = 2,
THREE.NoToneMapping = 0,
THREE.LinearToneMapping = 1,
THREE.ReinhardToneMapping = 2,
THREE.Uncharted2ToneMapping = 3,
THREE.CineonToneMapping = 4,
THREE.UVMapping = 300,
THREE.CubeReflectionMapping = 301,
THREE.CubeRefractionMapping = 302,
THREE.EquirectangularReflectionMapping = 303,
THREE.EquirectangularRefractionMapping = 304,
THREE.SphericalReflectionMapping = 305,
THREE.CubeUVReflectionMapping = 306,
THREE.CubeUVRefractionMapping = 307,
THREE.RepeatWrapping = 1e3,
THREE.ClampToEdgeWrapping = 1001,
THREE.MirroredRepeatWrapping = 1002,
THREE.NearestFilter = 1003,
THREE.NearestMipMapNearestFilter = 1004,
THREE.NearestMipMapLinearFilter = 1005,
THREE.LinearFilter = 1006,
THREE.LinearMipMapNearestFilter = 1007,
THREE.LinearMipMapLinearFilter = 1008,
THREE.UnsignedByteType = 1009,
THREE.ByteType = 1010,
THREE.ShortType = 1011,
THREE.UnsignedShortType = 1012,
THREE.IntType = 1013,
THREE.UnsignedIntType = 1014,
THREE.FloatType = 1015,
THREE.HalfFloatType = 1025,
THREE.UnsignedShort4444Type = 1016,
THREE.UnsignedShort5551Type = 1017,
THREE.UnsignedShort565Type = 1018,
THREE.AlphaFormat = 1019,
THREE.RGBFormat = 1020,
THREE.RGBAFormat = 1021,
THREE.LuminanceFormat = 1022,
THREE.LuminanceAlphaFormat = 1023,
THREE.RGBEFormat = THREE.RGBAFormat,
THREE.DepthFormat = 1026,
THREE.RGB_S3TC_DXT1_Format = 2001,
THREE.RGBA_S3TC_DXT1_Format = 2002,
THREE.RGBA_S3TC_DXT3_Format = 2003,
THREE.RGBA_S3TC_DXT5_Format = 2004,
THREE.RGB_PVRTC_4BPPV1_Format = 2100,
THREE.RGB_PVRTC_2BPPV1_Format = 2101,
THREE.RGBA_PVRTC_4BPPV1_Format = 2102,
THREE.RGBA_PVRTC_2BPPV1_Format = 2103,
THREE.RGB_ETC1_Format = 2151,
THREE.LoopOnce = 2200,
THREE.LoopRepeat = 2201,
THREE.LoopPingPong = 2202,
THREE.InterpolateDiscrete = 2300,
THREE.InterpolateLinear = 2301,
THREE.InterpolateSmooth = 2302,
THREE.ZeroCurvatureEnding = 2400,
THREE.ZeroSlopeEnding = 2401,
THREE.WrapAroundEnding = 2402,
THREE.TrianglesDrawMode = 0,
THREE.TriangleStripDrawMode = 1,
THREE.TriangleFanDrawMode = 2,
THREE.LinearEncoding = 3e3,
THREE.sRGBEncoding = 3001,
THREE.GammaEncoding = 3007,
THREE.RGBEEncoding = 3002,
THREE.LogLuvEncoding = 3003,
THREE.RGBM7Encoding = 3004,
THREE.RGBM16Encoding = 3005,
THREE.RGBDEncoding = 3006,
THREE.BasicDepthPacking = 3200,
THREE.RGBADepthPacking = 3201,
THREE.Color = function(e) {
    return 3 === arguments.length ? this.fromArray(arguments) : this.set(e)
}
,
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(e) {
        return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
        this
    },
    setScalar: function(e) {
        this.r = e,
        this.g = e,
        this.b = e
    },
    setHex: function(e) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (255 & e) / 255,
        this
    },
    setRGB: function(e, t, n) {
        return this.r = e,
        this.g = t,
        this.b = n,
        this
    },
    setHSL: function() {
        function e(e, t, n) {
            return 0 > n && (n += 1),
            n > 1 && (n -= 1),
            1 / 6 > n ? e + 6 * (t - e) * n : .5 > n ? t : 2 / 3 > n ? e + 6 * (t - e) * (2 / 3 - n) : e
        }
        return function(t, n, r) {
            if (t = THREE.Math.euclideanModulo(t, 1),
            n = THREE.Math.clamp(n, 0, 1),
            r = THREE.Math.clamp(r, 0, 1),
            0 === n)
                this.r = this.g = this.b = r;
            else {
                var i = .5 >= r ? r * (1 + n) : r + n - r * n
                  , a = 2 * r - i;
                this.r = e(a, i, t + 1 / 3),
                this.g = e(a, i, t),
                this.b = e(a, i, t - 1 / 3)
            }
            return this
        }
    }(),
    setStyle: function(e) {
        function t(t) {
            void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        var n;
        if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
            var r, i = n[1], a = n[2];
            switch (i) {
            case "rgb":
            case "rgba":
                if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                    return this.r = Math.min(255, parseInt(r[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(r[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(r[3], 10)) / 255,
                    t(r[5]),
                    this;
                if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                    return this.r = Math.min(100, parseInt(r[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(r[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(r[3], 10)) / 100,
                    t(r[5]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                    var o = parseFloat(r[1]) / 360
                      , s = parseInt(r[2], 10) / 100
                      , c = parseInt(r[3], 10) / 100;
                    return t(r[5]),
                    this.setHSL(o, s, c)
                }
            }
        } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
            var h = n[1]
              , l = h.length;
            if (3 === l)
                return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255,
                this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255,
                this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255,
                this;
            if (6 === l)
                return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255,
                this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255,
                this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255,
                this
        }
        if (e && e.length > 0) {
            var h = THREE.ColorKeywords[e];
            void 0 !== h ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + e)
        }
        return this
    },
    clone: function() {
        return new this.constructor(this.r,this.g,this.b)
    },
    copy: function(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    },
    copyGammaToLinear: function(e, t) {
        return void 0 === t && (t = 2),
        this.r = Math.pow(e.r, t),
        this.g = Math.pow(e.g, t),
        this.b = Math.pow(e.b, t),
        this
    },
    copyLinearToGamma: function(e, t) {
        void 0 === t && (t = 2);
        var n = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, n),
        this.g = Math.pow(e.g, n),
        this.b = Math.pow(e.b, n),
        this
    },
    convertGammaToLinear: function() {
        var e = this.r
          , t = this.g
          , n = this.b;
        return this.r = e * e,
        this.g = t * t,
        this.b = n * n,
        this
    },
    convertLinearToGamma: function() {
        return this.r = Math.sqrt(this.r),
        this.g = Math.sqrt(this.g),
        this.b = Math.sqrt(this.b),
        this
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(e) {
        var t, n, r = e || {
            h: 0,
            s: 0,
            l: 0
        }, i = this.r, a = this.g, o = this.b, s = Math.max(i, a, o), c = Math.min(i, a, o), h = (c + s) / 2;
        if (c === s)
            t = 0,
            n = 0;
        else {
            var l = s - c;
            switch (n = .5 >= h ? l / (s + c) : l / (2 - s - c),
            s) {
            case i:
                t = (a - o) / l + (o > a ? 6 : 0);
                break;
            case a:
                t = (o - i) / l + 2;
                break;
            case o:
                t = (i - a) / l + 4
            }
            t /= 6
        }
        return r.h = t,
        r.s = n,
        r.l = h,
        r
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(e, t, n) {
        var r = this.getHSL();
        return r.h += e,
        r.s += t,
        r.l += n,
        this.setHSL(r.h, r.s, r.l),
        this
    },
    add: function(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    },
    addColors: function(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    },
    addScalar: function(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    },
    multiply: function(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    },
    multiplyScalar: function(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    },
    lerp: function(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    },
    equals: function(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
},
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
},
THREE.Quaternion = function(e, t, n, r) {
    this._x = e || 0,
    this._y = t || 0,
    this._z = n || 0,
    this._w = void 0 !== r ? r : 1
}
,
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e,
        this.onChangeCallback()
    },
    get w() {
        return this._w
    },
    set w(e) {
        this._w = e,
        this.onChangeCallback()
    },
    set: function(e, t, n, r) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = r,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    },
    copy: function(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this.onChangeCallback(),
        this
    },
    setFromEuler: function(e, t) {
        if (e instanceof THREE.Euler == !1)
            throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var n = Math.cos(e._x / 2)
          , r = Math.cos(e._y / 2)
          , i = Math.cos(e._z / 2)
          , a = Math.sin(e._x / 2)
          , o = Math.sin(e._y / 2)
          , s = Math.sin(e._z / 2)
          , c = e.order;
        return "XYZ" === c ? (this._x = a * r * i + n * o * s,
        this._y = n * o * i - a * r * s,
        this._z = n * r * s + a * o * i,
        this._w = n * r * i - a * o * s) : "YXZ" === c ? (this._x = a * r * i + n * o * s,
        this._y = n * o * i - a * r * s,
        this._z = n * r * s - a * o * i,
        this._w = n * r * i + a * o * s) : "ZXY" === c ? (this._x = a * r * i - n * o * s,
        this._y = n * o * i + a * r * s,
        this._z = n * r * s + a * o * i,
        this._w = n * r * i - a * o * s) : "ZYX" === c ? (this._x = a * r * i - n * o * s,
        this._y = n * o * i + a * r * s,
        this._z = n * r * s - a * o * i,
        this._w = n * r * i + a * o * s) : "YZX" === c ? (this._x = a * r * i + n * o * s,
        this._y = n * o * i + a * r * s,
        this._z = n * r * s - a * o * i,
        this._w = n * r * i - a * o * s) : "XZY" === c && (this._x = a * r * i - n * o * s,
        this._y = n * o * i - a * r * s,
        this._z = n * r * s + a * o * i,
        this._w = n * r * i + a * o * s),
        t !== !1 && this.onChangeCallback(),
        this
    },
    setFromAxisAngle: function(e, t) {
        var n = t / 2
          , r = Math.sin(n);
        return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(n),
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(e) {
        var t, n = e.elements, r = n[0], i = n[4], a = n[8], o = n[1], s = n[5], c = n[9], h = n[2], l = n[6], u = n[10], p = r + s + u;
        return p > 0 ? (t = .5 / Math.sqrt(p + 1),
        this._w = .25 / t,
        this._x = (l - c) * t,
        this._y = (a - h) * t,
        this._z = (o - i) * t) : r > s && r > u ? (t = 2 * Math.sqrt(1 + r - s - u),
        this._w = (l - c) / t,
        this._x = .25 * t,
        this._y = (i + o) / t,
        this._z = (a + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - r - u),
        this._w = (a - h) / t,
        this._x = (i + o) / t,
        this._y = .25 * t,
        this._z = (c + l) / t) : (t = 2 * Math.sqrt(1 + u - r - s),
        this._w = (o - i) / t,
        this._x = (a + h) / t,
        this._y = (c + l) / t,
        this._z = .25 * t),
        this.onChangeCallback(),
        this
    },
    setFromUnitVectors: function() {
        var e, t, n = 1e-6;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector3),
            t = r.dot(i) + 1,
            n > t ? (t = 0,
            Math.abs(r.x) > Math.abs(r.z) ? e.set(-r.y, r.x, 0) : e.set(0, -r.z, r.y)) : e.crossVectors(r, i),
            this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = t,
            this.normalize()
        }
    }(),
    inverse: function() {
        return this.conjugate().normalize()
    },
    conjugate: function() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this.onChangeCallback(),
        this
    },
    dot: function(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var e = this.length();
        return 0 === e ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this.onChangeCallback(),
        this
    },
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
        this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    },
    multiplyQuaternions: function(e, t) {
        var n = e._x
          , r = e._y
          , i = e._z
          , a = e._w
          , o = t._x
          , s = t._y
          , c = t._z
          , h = t._w;
        return this._x = n * h + a * o + r * c - i * s,
        this._y = r * h + a * s + i * o - n * c,
        this._z = i * h + a * c + n * s - r * o,
        this._w = a * h - n * o - r * s - i * c,
        this.onChangeCallback(),
        this
    },
    slerp: function(e, t) {
        if (0 === t)
            return this;
        if (1 === t)
            return this.copy(e);
        var n = this._x
          , r = this._y
          , i = this._z
          , a = this._w
          , o = a * e._w + n * e._x + r * e._y + i * e._z;
        if (0 > o ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        o = -o) : this.copy(e),
        o >= 1)
            return this._w = a,
            this._x = n,
            this._y = r,
            this._z = i,
            this;
        var s = Math.sqrt(1 - o * o);
        if (Math.abs(s) < .001)
            return this._w = .5 * (a + this._w),
            this._x = .5 * (n + this._x),
            this._y = .5 * (r + this._y),
            this._z = .5 * (i + this._z),
            this;
        var c = Math.atan2(s, o)
          , h = Math.sin((1 - t) * c) / s
          , l = Math.sin(t * c) / s;
        return this._w = a * h + this._w * l,
        this._x = n * h + this._x * l,
        this._y = r * h + this._y * l,
        this._z = i * h + this._z * l,
        this.onChangeCallback(),
        this
    },
    equals: function(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this.onChangeCallback(),
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    },
    onChange: function(e) {
        return this.onChangeCallback = e,
        this
    },
    onChangeCallback: function() {}
},
Object.assign(THREE.Quaternion, {
    slerp: function(e, t, n, r) {
        return n.copy(e).slerp(t, r)
    },
    slerpFlat: function(e, t, n, r, i, a, o) {
        var s = n[r + 0]
          , c = n[r + 1]
          , h = n[r + 2]
          , l = n[r + 3]
          , u = i[a + 0]
          , p = i[a + 1]
          , d = i[a + 2]
          , E = i[a + 3];
        if (l !== E || s !== u || c !== p || h !== d) {
            var f = 1 - o
              , m = s * u + c * p + h * d + l * E
              , g = m >= 0 ? 1 : -1
              , v = 1 - m * m;
            if (v > Number.EPSILON) {
                var T = Math.sqrt(v)
                  , y = Math.atan2(T, m * g);
                f = Math.sin(f * y) / T,
                o = Math.sin(o * y) / T
            }
            var R = o * g;
            if (s = s * f + u * R,
            c = c * f + p * R,
            h = h * f + d * R,
            l = l * f + E * R,
            f === 1 - o) {
                var H = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                s *= H,
                c *= H,
                h *= H,
                l *= H
            }
        }
        e[t] = s,
        e[t + 1] = c,
        e[t + 2] = h,
        e[t + 3] = l
    }
}),
THREE.Vector2 = function(e, t) {
    this.x = e || 0,
    this.y = t || 0
}
,
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    get width() {
        return this.x
    },
    set width(e) {
        this.x = e
    },
    get height() {
        return this.y
    },
    set height(e) {
        this.y = e
    },
    set: function(e, t) {
        return this.x = e,
        this.y = t,
        this
    },
    setScalar: function(e) {
        return this.x = e,
        this.y = e,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    },
    multiply: function(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e,
        this.y *= e) : (this.x = 0,
        this.y = 0),
        this
    },
    divide: function(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(n, r) {
            return void 0 === e && (e = new THREE.Vector2,
            t = new THREE.Vector2),
            e.set(n, n),
            t.set(r, r),
            this.clamp(e, t)
        }
    }(),
    clampLength: function(e, t) {
        var n = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, n)) / n)
    },
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    angle: function() {
        var e = Math.atan2(this.y, this.x);
        return 0 > e && (e += 2 * Math.PI),
        e
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    },
    lerpVectors: function(e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e)
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e
    },
    fromAttribute: function(e, t, n) {
        return void 0 === n && (n = 0),
        t = t * e.itemSize + n,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this
    },
    rotateAround: function(e, t) {
        var n = Math.cos(t)
          , r = Math.sin(t)
          , i = this.x - e.x
          , a = this.y - e.y;
        return this.x = i * n - a * r + e.x,
        this.y = i * r + a * n + e.y,
        this
    }
},
THREE.Vector3 = function(e, t, n) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = n || 0
}
,
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(e, t, n) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this
    },
    setScalar: function(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setZ: function(e) {
        return this.z = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    },
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
        this.multiplyVectors(e, t)) : (this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this)
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e,
        this.y *= e,
        this.z *= e) : (this.x = 0,
        this.y = 0,
        this.z = 0),
        this
    },
    multiplyVectors: function(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    },
    applyEuler: function() {
        var e;
        return function(t) {
            return t instanceof THREE.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            void 0 === e && (e = new THREE.Quaternion),
            this.applyQuaternion(e.setFromEuler(t))
        }
    }(),
    applyAxisAngle: function() {
        var e;
        return function(t, n) {
            return void 0 === e && (e = new THREE.Quaternion),
            this.applyQuaternion(e.setFromAxisAngle(t, n))
        }
    }(),
    applyMatrix3: function(e) {
        var t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6] * r,
        this.y = i[1] * t + i[4] * n + i[7] * r,
        this.z = i[2] * t + i[5] * n + i[8] * r,
        this
    },
    applyMatrix4: function(e) {
        var t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements;
        return this.x = i[0] * t + i[4] * n + i[8] * r + i[12],
        this.y = i[1] * t + i[5] * n + i[9] * r + i[13],
        this.z = i[2] * t + i[6] * n + i[10] * r + i[14],
        this
    },
    applyProjection: function(e) {
        var t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements
          , a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
        return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a,
        this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a,
        this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a,
        this
    },
    applyQuaternion: function(e) {
        var t = this.x
          , n = this.y
          , r = this.z
          , i = e.x
          , a = e.y
          , o = e.z
          , s = e.w
          , c = s * t + a * r - o * n
          , h = s * n + o * t - i * r
          , l = s * r + i * n - a * t
          , u = -i * t - a * n - o * r;
        return this.x = c * s + u * -i + h * -o - l * -a,
        this.y = h * s + u * -a + l * -i - c * -o,
        this.z = l * s + u * -o + c * -a - h * -i,
        this
    },
    project: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
            this.applyProjection(e)
        }
    }(),
    unproject: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
            this.applyProjection(e)
        }
    }(),
    transformDirection: function(e) {
        var t = this.x
          , n = this.y
          , r = this.z
          , i = e.elements;
        return this.x = i[0] * t + i[4] * n + i[8] * r,
        this.y = i[1] * t + i[5] * n + i[9] * r,
        this.z = i[2] * t + i[6] * n + i[10] * r,
        this.normalize()
    },
    divide: function(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(n, r) {
            return void 0 === e && (e = new THREE.Vector3,
            t = new THREE.Vector3),
            e.set(n, n, n),
            t.set(r, r, r),
            this.clamp(e, t)
        }
    }(),
    clampLength: function(e, t) {
        var n = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, n)) / n)
    },
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    },
    lerpVectors: function(e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e)
    },
    cross: function(e, t) {
        if (void 0 !== t)
            return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(e, t);
        var n = this.x
          , r = this.y
          , i = this.z;
        return this.x = r * e.z - i * e.y,
        this.y = i * e.x - n * e.z,
        this.z = n * e.y - r * e.x,
        this
    },
    crossVectors: function(e, t) {
        var n = e.x
          , r = e.y
          , i = e.z
          , a = t.x
          , o = t.y
          , s = t.z;
        return this.x = r * s - i * o,
        this.y = i * a - n * s,
        this.z = n * o - r * a,
        this
    },
    projectOnVector: function() {
        var e, t;
        return function(n) {
            return void 0 === e && (e = new THREE.Vector3),
            e.copy(n).normalize(),
            t = this.dot(e),
            this.copy(e).multiplyScalar(t)
        }
    }(),
    projectOnPlane: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            e.copy(this).projectOnVector(t),
            this.sub(e)
        }
    }(),
    reflect: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        }
    }(),
    angleTo: function(e) {
        var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
        return Math.acos(THREE.Math.clamp(t, -1, 1))
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.x - e.x
          , n = this.y - e.y
          , r = this.z - e.z;
        return t * t + n * n + r * r
    },
    setFromSpherical: function(e) {
        var t = Math.sin(e.phi) * e.radius;
        return this.x = t * Math.sin(e.theta),
        this.y = Math.cos(e.phi) * e.radius,
        this.z = t * Math.cos(e.theta),
        this
    },
    setFromMatrixPosition: function(e) {
        return this.setFromMatrixColumn(e, 3)
    },
    setFromMatrixScale: function(e) {
        var t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = r,
        this
    },
    setFromMatrixColumn: function(e, t) {
        return "number" == typeof e && (console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index )."),
        e = arguments[1],
        t = arguments[0]),
        this.fromArray(e.elements, 4 * t)
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    },
    fromAttribute: function(e, t, n) {
        return void 0 === n && (n = 0),
        t = t * e.itemSize + n,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this.z = e.array[t + 2],
        this
    }
},
THREE.Vector4 = function(e, t, n, r) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = n || 0,
    this.w = void 0 !== r ? r : 1
}
,
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(e, t, n, r) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = r,
        this
    },
    setScalar: function(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setZ: function(e) {
        return this.z = e,
        this
    },
    setW: function(e) {
        return this.w = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = void 0 !== e.w ? e.w : 1,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e) : (this.x = 0,
        this.y = 0,
        this.z = 0,
        this.w = 0),
        this
    },
    applyMatrix4: function(e) {
        var t = this.x
          , n = this.y
          , r = this.z
          , i = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i,
        this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i,
        this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i,
        this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    setAxisAngleFromQuaternion: function(e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return 1e-4 > t ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    },
    setAxisAngleFromRotationMatrix: function(e) {
        var t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], h = s[4], l = s[8], u = s[1], p = s[5], d = s[9], E = s[2], f = s[6], m = s[10];
        if (Math.abs(h - u) < a && Math.abs(l - E) < a && Math.abs(d - f) < a) {
            if (Math.abs(h + u) < o && Math.abs(l + E) < o && Math.abs(d + f) < o && Math.abs(c + p + m - 3) < o)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            var g = (c + 1) / 2
              , v = (p + 1) / 2
              , T = (m + 1) / 2
              , y = (h + u) / 4
              , R = (l + E) / 4
              , H = (d + f) / 4;
            return g > v && g > T ? a > g ? (n = 0,
            r = .707106781,
            i = .707106781) : (n = Math.sqrt(g),
            r = y / n,
            i = R / n) : v > T ? a > v ? (n = .707106781,
            r = 0,
            i = .707106781) : (r = Math.sqrt(v),
            n = y / r,
            i = H / r) : a > T ? (n = .707106781,
            r = .707106781,
            i = 0) : (i = Math.sqrt(T),
            n = R / i,
            r = H / i),
            this.set(n, r, i, t),
            this
        }
        var x = Math.sqrt((f - d) * (f - d) + (l - E) * (l - E) + (u - h) * (u - h));
        return Math.abs(x) < .001 && (x = 1),
        this.x = (f - d) / x,
        this.y = (l - E) / x,
        this.z = (u - h) / x,
        this.w = Math.acos((c + p + m - 1) / 2),
        this
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(n, r) {
            return void 0 === e && (e = new THREE.Vector4,
            t = new THREE.Vector4),
            e.set(n, n, n, n),
            t.set(r, r, r, r),
            this.clamp(e, t)
        }
    }(),
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    },
    lerpVectors: function(e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e)
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    },
    fromAttribute: function(e, t, n) {
        return void 0 === n && (n = 0),
        t = t * e.itemSize + n,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this.z = e.array[t + 2],
        this.w = e.array[t + 3],
        this
    }
},
THREE.Euler = function(e, t, n, r) {
    this._x = e || 0,
    this._y = t || 0,
    this._z = n || 0,
    this._order = r || THREE.Euler.DefaultOrder
}
,
THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
THREE.Euler.DefaultOrder = "XYZ",
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e,
        this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(e) {
        this._order = e,
        this.onChangeCallback()
    },
    set: function(e, t, n, r) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = r || this._order,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    },
    copy: function(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(e, t, n) {
        var r = THREE.Math.clamp
          , i = e.elements
          , a = i[0]
          , o = i[4]
          , s = i[8]
          , c = i[1]
          , h = i[5]
          , l = i[9]
          , u = i[2]
          , p = i[6]
          , d = i[10];
        return t = t || this._order,
        "XYZ" === t ? (this._y = Math.asin(r(s, -1, 1)),
        Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d),
        this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h),
        this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-r(l, -1, 1)),
        Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d),
        this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a),
        this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(r(p, -1, 1)),
        Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d),
        this._z = Math.atan2(-o, h)) : (this._y = 0,
        this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-r(u, -1, 1)),
        Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d),
        this._z = Math.atan2(c, a)) : (this._x = 0,
        this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(r(c, -1, 1)),
        Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h),
        this._y = Math.atan2(-u, a)) : (this._x = 0,
        this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-r(o, -1, 1)),
        Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h),
        this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d),
        this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t),
        this._order = t,
        n !== !1 && this.onChangeCallback(),
        this
    },
    setFromQuaternion: function() {
        var e;
        return function(t, n, r) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(e, n, r)
        }
    }(),
    setFromVector3: function(e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    },
    reorder: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            return e.setFromEuler(this),
            this.setFromQuaternion(e, t)
        }
    }(),
    equals: function(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    fromArray: function(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        void 0 !== e[3] && (this._order = e[3]),
        this.onChangeCallback(),
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    },
    toVector3: function(e) {
        return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x,this._y,this._z)
    },
    onChange: function(e) {
        return this.onChangeCallback = e,
        this
    },
    onChangeCallback: function() {}
},
THREE.Line3 = function(e, t) {
    this.start = void 0 !== e ? e : new THREE.Vector3,
    this.end = void 0 !== t ? t : new THREE.Vector3
}
,
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(e, t) {
        return this.start.copy(e),
        this.end.copy(t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.start.copy(e.start),
        this.end.copy(e.end),
        this
    },
    center: function(e) {
        var t = e || new THREE.Vector3;
        return t.addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(e) {
        var t = e || new THREE.Vector3;
        return t.subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(e, t) {
        var n = t || new THREE.Vector3;
        return this.delta(n).multiplyScalar(e).add(this.start)
    },
    closestPointToPointParameter: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(n, r) {
            e.subVectors(n, this.start),
            t.subVectors(this.end, this.start);
            var i = t.dot(t)
              , a = t.dot(e)
              , o = a / i;
            return r && (o = THREE.Math.clamp(o, 0, 1)),
            o
        }
    }(),
    closestPointToPoint: function(e, t, n) {
        var r = this.closestPointToPointParameter(e, t)
          , i = n || new THREE.Vector3;
        return this.delta(i).multiplyScalar(r).add(this.start)
    },
    applyMatrix4: function(e) {
        return this.start.applyMatrix4(e),
        this.end.applyMatrix4(e),
        this
    },
    equals: function(e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }
},
THREE.Box2 = function(e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector2(+(1 / 0),+(1 / 0)),
    this.max = void 0 !== t ? t : new THREE.Vector2(-(1 / 0),-(1 / 0))
}
,
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    },
    setFromPoints: function(e) {
        this.makeEmpty();
        for (var t = 0, n = e.length; n > t; t++)
            this.expandByPoint(e[t]);
        return this
    },
    setFromCenterAndSize: function() {
        var e = new THREE.Vector2;
        return function(t, n) {
            var r = e.copy(n).multiplyScalar(.5);
            return this.min.copy(t).sub(r),
            this.max.copy(t).add(r),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = +(1 / 0),
        this.max.x = this.max.y = -(1 / 0),
        this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(e) {
        var t = e || new THREE.Vector2;
        return t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(e) {
        var t = e || new THREE.Vector2;
        return t.subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    },
    expandByVector: function(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    },
    expandByScalar: function(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    },
    containsPoint: function(e) {
        return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
    },
    containsBox: function(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(e, t) {
        var n = t || new THREE.Vector2;
        return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(e) {
        return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(e, t) {
        var n = t || new THREE.Vector2;
        return n.copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var e = new THREE.Vector2;
        return function(t) {
            var n = e.copy(t).clamp(this.min, this.max);
            return n.sub(t).length()
        }
    }(),
    intersect: function(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this
    },
    union: function(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    },
    translate: function(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    },
    equals: function(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},
THREE.Box3 = function(e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector3(+(1 / 0),+(1 / 0),+(1 / 0)),
    this.max = void 0 !== t ? t : new THREE.Vector3(-(1 / 0),-(1 / 0),-(1 / 0))
}
,
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    },
    setFromArray: function(e) {
        for (var t = +(1 / 0), n = +(1 / 0), r = +(1 / 0), i = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = e.length; c > s; s += 3) {
            var h = e[s]
              , l = e[s + 1]
              , u = e[s + 2];
            t > h && (t = h),
            n > l && (n = l),
            r > u && (r = u),
            h > i && (i = h),
            l > a && (a = l),
            u > o && (o = u)
        }
        this.min.set(t, n, r),
        this.max.set(i, a, o)
    },
    setFromPoints: function(e) {
        this.makeEmpty();
        for (var t = 0, n = e.length; n > t; t++)
            this.expandByPoint(e[t]);
        return this
    },
    setFromCenterAndSize: function() {
        var e = new THREE.Vector3;
        return function(t, n) {
            var r = e.copy(n).multiplyScalar(.5);
            return this.min.copy(t).sub(r),
            this.max.copy(t).add(r),
            this
        }
    }(),
    setFromObject: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var n = this;
            return t.updateMatrixWorld(!0),
            this.makeEmpty(),
            t.traverse(function(t) {
                var r = t.geometry;
                if (void 0 !== r)
                    if (r instanceof THREE.Geometry)
                        for (var i = r.vertices, a = 0, o = i.length; o > a; a++)
                            e.copy(i[a]),
                            e.applyMatrix4(t.matrixWorld),
                            n.expandByPoint(e);
                    else if (r instanceof THREE.BufferGeometry && void 0 !== r.attributes.position)
                        for (var s = r.attributes.position.array, a = 0, o = s.length; o > a; a += 3)
                            e.fromArray(s, a),
                            e.applyMatrix4(t.matrixWorld),
                            n.expandByPoint(e)
            }),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = this.min.z = +(1 / 0),
        this.max.x = this.max.y = this.max.z = -(1 / 0),
        this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(e) {
        var t = e || new THREE.Vector3;
        return t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(e) {
        var t = e || new THREE.Vector3;
        return t.subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    },
    expandByVector: function(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    },
    expandByScalar: function(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    },
    containsPoint: function(e) {
        return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
    },
    containsBox: function(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(e, t) {
        var n = t || new THREE.Vector3;
        return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(e) {
        return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
    },
    intersectsSphere: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            this.clampPoint(t.center, e),
            e.distanceToSquared(t.center) <= t.radius * t.radius
        }
    }(),
    intersectsPlane: function(e) {
        var t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= e.constant && n >= e.constant
    },
    clampPoint: function(e, t) {
        var n = t || new THREE.Vector3;
        return n.copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var n = e.copy(t).clamp(this.min, this.max);
            return n.sub(t).length()
        }
    }(),
    getBoundingSphere: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var n = t || new THREE.Sphere;
            return n.center = this.center(),
            n.radius = .5 * this.size(e).length(),
            n
        }
    }(),
    intersect: function(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    },
    union: function(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    },
    applyMatrix4: function() {
        var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function(t) {
            return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(e),
            this)
        }
    }(),
    translate: function(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    },
    equals: function(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},
THREE.Matrix3 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
    arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}
,
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(e, t, n, r, i, a, o, s, c) {
        var h = this.elements;
        return h[0] = e,
        h[1] = r,
        h[2] = o,
        h[3] = t,
        h[4] = i,
        h[5] = s,
        h[6] = n,
        h[7] = a,
        h[8] = c,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements)
    },
    copy: function(e) {
        var t = e.elements;
        return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]),
        this
    },
    setFromMatrix4: function(e) {
        var t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    },
    applyToVector3Array: function() {
        var e;
        return function(t, n, r) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === n && (n = 0),
            void 0 === r && (r = t.length);
            for (var i = 0, a = n; r > i; i += 3,
            a += 3)
                e.fromArray(t, a),
                e.applyMatrix3(this),
                e.toArray(t, a);
            return t
        }
    }(),
    applyToBuffer: function() {
        var e;
        return function(t, n, r) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === n && (n = 0),
            void 0 === r && (r = t.length / t.itemSize);
            for (var i = 0, a = n; r > i; i++,
            a++)
                e.x = t.getX(a),
                e.y = t.getY(a),
                e.z = t.getZ(a),
                e.applyMatrix3(this),
                t.setXYZ(e.x, e.y, e.z);
            return t
        }
    }(),
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    },
    determinant: function() {
        var e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , i = e[3]
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , c = e[7]
          , h = e[8];
        return t * a * h - t * o * c - n * i * h + n * o * s + r * i * c - r * a * s
    },
    getInverse: function(e, t) {
        e instanceof THREE.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
        var n = e.elements
          , r = this.elements
          , i = n[0]
          , a = n[1]
          , o = n[2]
          , s = n[3]
          , c = n[4]
          , h = n[5]
          , l = n[6]
          , u = n[7]
          , p = n[8]
          , d = p * c - h * u
          , E = h * l - p * s
          , f = u * s - c * l
          , m = i * d + a * E + o * f;
        if (0 === m) {
            var g = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
            if (t)
                throw new Error(g);
            return console.warn(g),
            this.identity()
        }
        return r[0] = d,
        r[1] = o * u - p * a,
        r[2] = h * a - o * c,
        r[3] = E,
        r[4] = p * i - o * l,
        r[5] = o * s - h * i,
        r[6] = f,
        r[7] = a * l - u * i,
        r[8] = c * i - a * s,
        this.multiplyScalar(1 / m)
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    },
    flattenToArrayOffset: function(e, t) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
        this.toArray(e, t)
    },
    getNormalMatrix: function(e) {
        return this.setFromMatrix4(e).getInverse(this).transpose()
    },
    transposeIntoArray: function(e) {
        var t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    },
    fromArray: function(e) {
        return this.elements.set(e),
        this
    },
    toArray: function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = 0);
        var n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
},
THREE.Matrix4 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
    arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
,
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(e, t, n, r, i, a, o, s, c, h, l, u, p, d, E, f) {
        var m = this.elements;
        return m[0] = e,
        m[4] = t,
        m[8] = n,
        m[12] = r,
        m[1] = i,
        m[5] = a,
        m[9] = o,
        m[13] = s,
        m[2] = c,
        m[6] = h,
        m[10] = l,
        m[14] = u,
        m[3] = p,
        m[7] = d,
        m[11] = E,
        m[15] = f,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new THREE.Matrix4).fromArray(this.elements)
    },
    copy: function(e) {
        return this.elements.set(e.elements),
        this
    },
    copyPosition: function(e) {
        var t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    },
    extractBasis: function(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    },
    makeBasis: function(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    },
    extractRotation: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Vector3);
            var n = this.elements
              , r = t.elements
              , i = 1 / e.setFromMatrixColumn(t, 0).length()
              , a = 1 / e.setFromMatrixColumn(t, 1).length()
              , o = 1 / e.setFromMatrixColumn(t, 2).length();
            return n[0] = r[0] * i,
            n[1] = r[1] * i,
            n[2] = r[2] * i,
            n[4] = r[4] * a,
            n[5] = r[5] * a,
            n[6] = r[6] * a,
            n[8] = r[8] * o,
            n[9] = r[9] * o,
            n[10] = r[10] * o,
            this
        }
    }(),
    makeRotationFromEuler: function(e) {
        e instanceof THREE.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements
          , n = e.x
          , r = e.y
          , i = e.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , s = Math.cos(r)
          , c = Math.sin(r)
          , h = Math.cos(i)
          , l = Math.sin(i);
        if ("XYZ" === e.order) {
            var u = a * h
              , p = a * l
              , d = o * h
              , E = o * l;
            t[0] = s * h,
            t[4] = -s * l,
            t[8] = c,
            t[1] = p + d * c,
            t[5] = u - E * c,
            t[9] = -o * s,
            t[2] = E - u * c,
            t[6] = d + p * c,
            t[10] = a * s
        } else if ("YXZ" === e.order) {
            var f = s * h
              , m = s * l
              , g = c * h
              , v = c * l;
            t[0] = f + v * o,
            t[4] = g * o - m,
            t[8] = a * c,
            t[1] = a * l,
            t[5] = a * h,
            t[9] = -o,
            t[2] = m * o - g,
            t[6] = v + f * o,
            t[10] = a * s
        } else if ("ZXY" === e.order) {
            var f = s * h
              , m = s * l
              , g = c * h
              , v = c * l;
            t[0] = f - v * o,
            t[4] = -a * l,
            t[8] = g + m * o,
            t[1] = m + g * o,
            t[5] = a * h,
            t[9] = v - f * o,
            t[2] = -a * c,
            t[6] = o,
            t[10] = a * s
        } else if ("ZYX" === e.order) {
            var u = a * h
              , p = a * l
              , d = o * h
              , E = o * l;
            t[0] = s * h,
            t[4] = d * c - p,
            t[8] = u * c + E,
            t[1] = s * l,
            t[5] = E * c + u,
            t[9] = p * c - d,
            t[2] = -c,
            t[6] = o * s,
            t[10] = a * s
        } else if ("YZX" === e.order) {
            var T = a * s
              , y = a * c
              , R = o * s
              , H = o * c;
            t[0] = s * h,
            t[4] = H - T * l,
            t[8] = R * l + y,
            t[1] = l,
            t[5] = a * h,
            t[9] = -o * h,
            t[2] = -c * h,
            t[6] = y * l + R,
            t[10] = T - H * l
        } else if ("XZY" === e.order) {
            var T = a * s
              , y = a * c
              , R = o * s
              , H = o * c;
            t[0] = s * h,
            t[4] = -l,
            t[8] = c * h,
            t[1] = T * l + H,
            t[5] = a * h,
            t[9] = y * l - R,
            t[2] = R * l - y,
            t[6] = o * h,
            t[10] = H * l + T
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    },
    makeRotationFromQuaternion: function(e) {
        var t = this.elements
          , n = e.x
          , r = e.y
          , i = e.z
          , a = e.w
          , o = n + n
          , s = r + r
          , c = i + i
          , h = n * o
          , l = n * s
          , u = n * c
          , p = r * s
          , d = r * c
          , E = i * c
          , f = a * o
          , m = a * s
          , g = a * c;
        return t[0] = 1 - (p + E),
        t[4] = l - g,
        t[8] = u + m,
        t[1] = l + g,
        t[5] = 1 - (h + E),
        t[9] = d - f,
        t[2] = u - m,
        t[6] = d + f,
        t[10] = 1 - (h + p),
        t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    },
    lookAt: function() {
        var e, t, n;
        return function(r, i, a) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === t && (t = new THREE.Vector3),
            void 0 === n && (n = new THREE.Vector3);
            var o = this.elements;
            return n.subVectors(r, i).normalize(),
            0 === n.lengthSq() && (n.z = 1),
            e.crossVectors(a, n).normalize(),
            0 === e.lengthSq() && (n.x += 1e-4,
            e.crossVectors(a, n).normalize()),
            t.crossVectors(n, e),
            o[0] = e.x,
            o[4] = t.x,
            o[8] = n.x,
            o[1] = e.y,
            o[5] = t.y,
            o[9] = n.y,
            o[2] = e.z,
            o[6] = t.z,
            o[10] = n.z,
            this
        }
    }(),
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
        this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    },
    premultiply: function(e) {
        return this.multiplyMatrices(e, this)
    },
    multiplyMatrices: function(e, t) {
        var n = e.elements
          , r = t.elements
          , i = this.elements
          , a = n[0]
          , o = n[4]
          , s = n[8]
          , c = n[12]
          , h = n[1]
          , l = n[5]
          , u = n[9]
          , p = n[13]
          , d = n[2]
          , E = n[6]
          , f = n[10]
          , m = n[14]
          , g = n[3]
          , v = n[7]
          , T = n[11]
          , y = n[15]
          , R = r[0]
          , H = r[4]
          , x = r[8]
          , b = r[12]
          , _ = r[1]
          , M = r[5]
          , w = r[9]
          , S = r[13]
          , L = r[2]
          , A = r[6]
          , C = r[10]
          , P = r[14]
          , D = r[3]
          , B = r[7]
          , I = r[11]
          , U = r[15];
        return i[0] = a * R + o * _ + s * L + c * D,
        i[4] = a * H + o * M + s * A + c * B,
        i[8] = a * x + o * w + s * C + c * I,
        i[12] = a * b + o * S + s * P + c * U,
        i[1] = h * R + l * _ + u * L + p * D,
        i[5] = h * H + l * M + u * A + p * B,
        i[9] = h * x + l * w + u * C + p * I,
        i[13] = h * b + l * S + u * P + p * U,
        i[2] = d * R + E * _ + f * L + m * D,
        i[6] = d * H + E * M + f * A + m * B,
        i[10] = d * x + E * w + f * C + m * I,
        i[14] = d * b + E * S + f * P + m * U,
        i[3] = g * R + v * _ + T * L + y * D,
        i[7] = g * H + v * M + T * A + y * B,
        i[11] = g * x + v * w + T * C + y * I,
        i[15] = g * b + v * S + T * P + y * U,
        this
    },
    multiplyToArray: function(e, t, n) {
        var r = this.elements;
        return this.multiplyMatrices(e, t),
        n[0] = r[0],
        n[1] = r[1],
        n[2] = r[2],
        n[3] = r[3],
        n[4] = r[4],
        n[5] = r[5],
        n[6] = r[6],
        n[7] = r[7],
        n[8] = r[8],
        n[9] = r[9],
        n[10] = r[10],
        n[11] = r[11],
        n[12] = r[12],
        n[13] = r[13],
        n[14] = r[14],
        n[15] = r[15],
        this
    },
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    },
    applyToVector3Array: function() {
        var e;
        return function(t, n, r) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === n && (n = 0),
            void 0 === r && (r = t.length);
            for (var i = 0, a = n; r > i; i += 3,
            a += 3)
                e.fromArray(t, a),
                e.applyMatrix4(this),
                e.toArray(t, a);
            return t
        }
    }(),
    applyToBuffer: function() {
        var e;
        return function(t, n, r) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === n && (n = 0),
            void 0 === r && (r = t.length / t.itemSize);
            for (var i = 0, a = n; r > i; i++,
            a++)
                e.x = t.getX(a),
                e.y = t.getY(a),
                e.z = t.getZ(a),
                e.applyMatrix4(this),
                t.setXYZ(e.x, e.y, e.z);
            return t
        }
    }(),
    determinant: function() {
        var e = this.elements
          , t = e[0]
          , n = e[4]
          , r = e[8]
          , i = e[12]
          , a = e[1]
          , o = e[5]
          , s = e[9]
          , c = e[13]
          , h = e[2]
          , l = e[6]
          , u = e[10]
          , p = e[14]
          , d = e[3]
          , E = e[7]
          , f = e[11]
          , m = e[15];
        return d * (+i * s * l - r * c * l - i * o * u + n * c * u + r * o * p - n * s * p) + E * (+t * s * p - t * c * u + i * a * u - r * a * p + r * c * h - i * s * h) + f * (+t * c * l - t * o * p - i * a * l + n * a * p + i * o * h - n * c * h) + m * (-r * o * h - t * s * l + t * o * u + r * a * l - n * a * u + n * s * h)
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this
    },
    flattenToArrayOffset: function(e, t) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
        this.toArray(e, t)
    },
    getPosition: function() {
        var e;
        return function() {
            return void 0 === e && (e = new THREE.Vector3),
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
            e.setFromMatrixColumn(this, 3)
        }
    }(),
    setPosition: function(e) {
        var t = this.elements;
        return t[12] = e.x,
        t[13] = e.y,
        t[14] = e.z,
        this
    },
    getInverse: function(e, t) {
        var n = this.elements
          , r = e.elements
          , i = r[0]
          , a = r[1]
          , o = r[2]
          , s = r[3]
          , c = r[4]
          , h = r[5]
          , l = r[6]
          , u = r[7]
          , p = r[8]
          , d = r[9]
          , E = r[10]
          , f = r[11]
          , m = r[12]
          , g = r[13]
          , v = r[14]
          , T = r[15]
          , y = d * v * u - g * E * u + g * l * f - h * v * f - d * l * T + h * E * T
          , R = m * E * u - p * v * u - m * l * f + c * v * f + p * l * T - c * E * T
          , H = p * g * u - m * d * u + m * h * f - c * g * f - p * h * T + c * d * T
          , x = m * d * l - p * g * l - m * h * E + c * g * E + p * h * v - c * d * v
          , b = i * y + a * R + o * H + s * x;
        if (0 === b) {
            var _ = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
            if (t)
                throw new Error(_);
            return console.warn(_),
            this.identity()
        }
        return n[0] = y,
        n[1] = g * E * s - d * v * s - g * o * f + a * v * f + d * o * T - a * E * T,
        n[2] = h * v * s - g * l * s + g * o * u - a * v * u - h * o * T + a * l * T,
        n[3] = d * l * s - h * E * s - d * o * u + a * E * u + h * o * f - a * l * f,
        n[4] = R,
        n[5] = p * v * s - m * E * s + m * o * f - i * v * f - p * o * T + i * E * T,
        n[6] = m * l * s - c * v * s - m * o * u + i * v * u + c * o * T - i * l * T,
        n[7] = c * E * s - p * l * s + p * o * u - i * E * u - c * o * f + i * l * f,
        n[8] = H,
        n[9] = m * d * s - p * g * s - m * a * f + i * g * f + p * a * T - i * d * T,
        n[10] = c * g * s - m * h * s + m * a * u - i * g * u - c * a * T + i * h * T,
        n[11] = p * h * s - c * d * s - p * a * u + i * d * u + c * a * f - i * h * f,
        n[12] = x,
        n[13] = p * g * o - m * d * o + m * a * E - i * g * E - p * a * v + i * d * v,
        n[14] = m * h * o - c * g * o - m * a * l + i * g * l + c * a * v - i * h * v,
        n[15] = c * d * o - p * h * o + p * a * l - i * d * l - c * a * E + i * h * E,
        this.multiplyScalar(1 / b)
    },
    scale: function(e) {
        var t = this.elements
          , n = e.x
          , r = e.y
          , i = e.z;
        return t[0] *= n,
        t[4] *= r,
        t[8] *= i,
        t[1] *= n,
        t[5] *= r,
        t[9] *= i,
        t[2] *= n,
        t[6] *= r,
        t[10] *= i,
        t[3] *= n,
        t[7] *= r,
        t[11] *= i,
        this
    },
    getMaxScaleOnAxis: function() {
        var e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r))
    },
    makeTranslation: function(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    },
    makeRotationX: function(e) {
        var t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    },
    makeRotationY: function(e) {
        var t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    },
    makeRotationZ: function(e) {
        var t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    makeRotationAxis: function(e, t) {
        var n = Math.cos(t)
          , r = Math.sin(t)
          , i = 1 - n
          , a = e.x
          , o = e.y
          , s = e.z
          , c = i * a
          , h = i * o;
        return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, h * o + n, h * s - r * a, 0, c * s - r * o, h * s + r * a, i * s * s + n, 0, 0, 0, 0, 1),
        this
    },
    makeScale: function(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    },
    compose: function(e, t, n) {
        return this.makeRotationFromQuaternion(t),
        this.scale(n),
        this.setPosition(e),
        this
    },
    decompose: function() {
        var e, t;
        return function(n, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === t && (t = new THREE.Matrix4);
            var a = this.elements
              , o = e.set(a[0], a[1], a[2]).length()
              , s = e.set(a[4], a[5], a[6]).length()
              , c = e.set(a[8], a[9], a[10]).length()
              , h = this.determinant();
            0 > h && (o = -o),
            n.x = a[12],
            n.y = a[13],
            n.z = a[14],
            t.elements.set(this.elements);
            var l = 1 / o
              , u = 1 / s
              , p = 1 / c;
            return t.elements[0] *= l,
            t.elements[1] *= l,
            t.elements[2] *= l,
            t.elements[4] *= u,
            t.elements[5] *= u,
            t.elements[6] *= u,
            t.elements[8] *= p,
            t.elements[9] *= p,
            t.elements[10] *= p,
            r.setFromRotationMatrix(t),
            i.x = o,
            i.y = s,
            i.z = c,
            this
        }
    }(),
    makeFrustum: function(e, t, n, r, i, a) {
        var o = this.elements
          , s = 2 * i / (t - e)
          , c = 2 * i / (r - n)
          , h = (t + e) / (t - e)
          , l = (r + n) / (r - n)
          , u = -(a + i) / (a - i)
          , p = -2 * a * i / (a - i);
        return o[0] = s,
        o[4] = 0,
        o[8] = h,
        o[12] = 0,
        o[1] = 0,
        o[5] = c,
        o[9] = l,
        o[13] = 0,
        o[2] = 0,
        o[6] = 0,
        o[10] = u,
        o[14] = p,
        o[3] = 0,
        o[7] = 0,
        o[11] = -1,
        o[15] = 0,
        this
    },
    makePerspective: function(e, t, n, r) {
        var i = n * Math.tan(THREE.Math.DEG2RAD * e * .5)
          , a = -i
          , o = a * t
          , s = i * t;
        return this.makeFrustum(o, s, a, i, n, r)
    },
    makeOrthographic: function(e, t, n, r, i, a) {
        var o = this.elements
          , s = 1 / (t - e)
          , c = 1 / (n - r)
          , h = 1 / (a - i)
          , l = (t + e) * s
          , u = (n + r) * c
          , p = (a + i) * h;
        return o[0] = 2 * s,
        o[4] = 0,
        o[8] = 0,
        o[12] = -l,
        o[1] = 0,
        o[5] = 2 * c,
        o[9] = 0,
        o[13] = -u,
        o[2] = 0,
        o[6] = 0,
        o[10] = -2 * h,
        o[14] = -p,
        o[3] = 0,
        o[7] = 0,
        o[11] = 0,
        o[15] = 1,
        this
    },
    equals: function(e) {
        for (var t = this.elements, n = e.elements, r = 0; 16 > r; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    },
    fromArray: function(e) {
        return this.elements.set(e),
        this
    },
    toArray: function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = 0);
        var n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
},
THREE.Ray = function(e, t) {
    this.origin = void 0 !== e ? e : new THREE.Vector3,
    this.direction = void 0 !== t ? t : new THREE.Vector3
}
,
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    },
    at: function(e, t) {
        var n = t || new THREE.Vector3;
        return n.copy(this.direction).multiplyScalar(e).add(this.origin)
    },
    lookAt: function(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    },
    recast: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return this.origin.copy(this.at(t, e)),
            this
        }
    }(),
    closestPointToPoint: function(e, t) {
        var n = t || new THREE.Vector3;
        n.subVectors(e, this.origin);
        var r = n.dot(this.direction);
        return 0 > r ? n.copy(this.origin) : n.copy(this.direction).multiplyScalar(r).add(this.origin)
    },
    distanceToPoint: function(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    },
    distanceSqToPoint: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var n = e.subVectors(t, this.origin).dot(this.direction);
            return 0 > n ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(n).add(this.origin),
            e.distanceToSquared(t))
        }
    }(),
    distanceSqToSegment: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3
          , n = new THREE.Vector3;
        return function(r, i, a, o) {
            e.copy(r).add(i).multiplyScalar(.5),
            t.copy(i).sub(r).normalize(),
            n.copy(this.origin).sub(e);
            var s, c, h, l, u = .5 * r.distanceTo(i), p = -this.direction.dot(t), d = n.dot(this.direction), E = -n.dot(t), f = n.lengthSq(), m = Math.abs(1 - p * p);
            if (m > 0)
                if (s = p * E - d,
                c = p * d - E,
                l = u * m,
                s >= 0)
                    if (c >= -l)
                        if (l >= c) {
                            var g = 1 / m;
                            s *= g,
                            c *= g,
                            h = s * (s + p * c + 2 * d) + c * (p * s + c + 2 * E) + f
                        } else
                            c = u,
                            s = Math.max(0, -(p * c + d)),
                            h = -s * s + c * (c + 2 * E) + f;
                    else
                        c = -u,
                        s = Math.max(0, -(p * c + d)),
                        h = -s * s + c * (c + 2 * E) + f;
                else
                    -l >= c ? (s = Math.max(0, -(-p * u + d)),
                    c = s > 0 ? -u : Math.min(Math.max(-u, -E), u),
                    h = -s * s + c * (c + 2 * E) + f) : l >= c ? (s = 0,
                    c = Math.min(Math.max(-u, -E), u),
                    h = c * (c + 2 * E) + f) : (s = Math.max(0, -(p * u + d)),
                    c = s > 0 ? u : Math.min(Math.max(-u, -E), u),
                    h = -s * s + c * (c + 2 * E) + f);
            else
                c = p > 0 ? -u : u,
                s = Math.max(0, -(p * c + d)),
                h = -s * s + c * (c + 2 * E) + f;
            return a && a.copy(this.direction).multiplyScalar(s).add(this.origin),
            o && o.copy(t).multiplyScalar(c).add(e),
            h
        }
    }(),
    intersectSphere: function() {
        var e = new THREE.Vector3;
        return function(t, n) {
            e.subVectors(t.center, this.origin);
            var r = e.dot(this.direction)
              , i = e.dot(e) - r * r
              , a = t.radius * t.radius;
            if (i > a)
                return null ;
            var o = Math.sqrt(a - i)
              , s = r - o
              , c = r + o;
            return 0 > s && 0 > c ? null  : 0 > s ? this.at(c, n) : this.at(s, n)
        }
    }(),
    intersectsSphere: function(e) {
        return this.distanceToPoint(e.center) <= e.radius
    },
    distanceToPlane: function(e) {
        var t = e.normal.dot(this.direction);
        if (0 === t)
            return 0 === e.distanceToPoint(this.origin) ? 0 : null ;
        var n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null 
    },
    intersectPlane: function(e, t) {
        var n = this.distanceToPlane(e);
        return null  === n ? null  : this.at(n, t)
    },
    intersectsPlane: function(e) {
        var t = e.distanceToPoint(this.origin);
        if (0 === t)
            return !0;
        var n = e.normal.dot(this.direction);
        return 0 > n * t ? !0 : !1
    },
    intersectBox: function(e, t) {
        var n, r, i, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
        return c >= 0 ? (n = (e.min.x - u.x) * c,
        r = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c,
        r = (e.min.x - u.x) * c),
        h >= 0 ? (i = (e.min.y - u.y) * h,
        a = (e.max.y - u.y) * h) : (i = (e.max.y - u.y) * h,
        a = (e.min.y - u.y) * h),
        n > a || i > r ? null  : ((i > n || n !== n) && (n = i),
        (r > a || r !== r) && (r = a),
        l >= 0 ? (o = (e.min.z - u.z) * l,
        s = (e.max.z - u.z) * l) : (o = (e.max.z - u.z) * l,
        s = (e.min.z - u.z) * l),
        n > s || o > r ? null  : ((o > n || n !== n) && (n = o),
        (r > s || r !== r) && (r = s),
        0 > r ? null  : this.at(n >= 0 ? n : r, t)))
    },
    intersectsBox: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return null  !== this.intersectBox(t, e)
        }
    }(),
    intersectTriangle: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3
          , n = new THREE.Vector3
          , r = new THREE.Vector3;
        return function(i, a, o, s, c) {
            t.subVectors(a, i),
            n.subVectors(o, i),
            r.crossVectors(t, n);
            var h, l = this.direction.dot(r);
            if (l > 0) {
                if (s)
                    return null ;
                h = 1
            } else {
                if (!(0 > l))
                    return null ;
                h = -1,
                l = -l
            }
            e.subVectors(this.origin, i);
            var u = h * this.direction.dot(n.crossVectors(e, n));
            if (0 > u)
                return null ;
            var p = h * this.direction.dot(t.cross(e));
            if (0 > p)
                return null ;
            if (u + p > l)
                return null ;
            var d = -h * e.dot(r);
            return 0 > d ? null  : this.at(d / l, c)
        }
    }(),
    applyMatrix4: function(e) {
        return this.direction.add(this.origin).applyMatrix4(e),
        this.origin.applyMatrix4(e),
        this.direction.sub(this.origin),
        this.direction.normalize(),
        this
    },
    equals: function(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
},
THREE.Sphere = function(e, t) {
    this.center = void 0 !== e ? e : new THREE.Vector3,
    this.radius = void 0 !== t ? t : 0
}
,
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    },
    setFromPoints: function() {
        var e = new THREE.Box3;
        return function(t, n) {
            var r = this.center;
            void 0 !== n ? r.copy(n) : e.setFromPoints(t).center(r);
            for (var i = 0, a = 0, o = t.length; o > a; a++)
                i = Math.max(i, r.distanceToSquared(t[a]));
            return this.radius = Math.sqrt(i),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    },
    empty: function() {
        return this.radius <= 0
    },
    containsPoint: function(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(e) {
        return e.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    },
    intersectsBox: function(e) {
        return e.intersectsSphere(this)
    },
    intersectsPlane: function(e) {
        return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
    },
    clampPoint: function(e, t) {
        var n = this.center.distanceToSquared(e)
          , r = t || new THREE.Vector3;
        return r.copy(e),
        n > this.radius * this.radius && (r.sub(this.center).normalize(),
        r.multiplyScalar(this.radius).add(this.center)),
        r
    },
    getBoundingBox: function(e) {
        var t = e || new THREE.Box3;
        return t.set(this.center, this.center),
        t.expandByScalar(this.radius),
        t
    },
    applyMatrix4: function(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    },
    translate: function(e) {
        return this.center.add(e),
        this
    },
    equals: function(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
},
THREE.Frustum = function(e, t, n, r, i, a) {
    this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== a ? a : new THREE.Plane]
}
,
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(e, t, n, r, i, a) {
        var o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(i),
        o[5].copy(a),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        for (var t = this.planes, n = 0; 6 > n; n++)
            t[n].copy(e.planes[n]);
        return this
    },
    setFromMatrix: function(e) {
        var t = this.planes
          , n = e.elements
          , r = n[0]
          , i = n[1]
          , a = n[2]
          , o = n[3]
          , s = n[4]
          , c = n[5]
          , h = n[6]
          , l = n[7]
          , u = n[8]
          , p = n[9]
          , d = n[10]
          , E = n[11]
          , f = n[12]
          , m = n[13]
          , g = n[14]
          , v = n[15];
        return t[0].setComponents(o - r, l - s, E - u, v - f).normalize(),
        t[1].setComponents(o + r, l + s, E + u, v + f).normalize(),
        t[2].setComponents(o + i, l + c, E + p, v + m).normalize(),
        t[3].setComponents(o - i, l - c, E - p, v - m).normalize(),
        t[4].setComponents(o - a, l - h, E - d, v - g).normalize(),
        t[5].setComponents(o + a, l + h, E + d, v + g).normalize(),
        this
    },
    intersectsObject: function() {
        var e = new THREE.Sphere;
        return function(t) {
            var n = t.geometry;
            return null  === n.boundingSphere && n.computeBoundingSphere(),
            e.copy(n.boundingSphere),
            e.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(e)
        }
    }(),
    intersectsSphere: function(e) {
        for (var t = this.planes, n = e.center, r = -e.radius, i = 0; 6 > i; i++) {
            var a = t[i].distanceToPoint(n);
            if (r > a)
                return !1
        }
        return !0
    },
    intersectsBox: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(n) {
            for (var r = this.planes, i = 0; 6 > i; i++) {
                var a = r[i];
                e.x = a.normal.x > 0 ? n.min.x : n.max.x,
                t.x = a.normal.x > 0 ? n.max.x : n.min.x,
                e.y = a.normal.y > 0 ? n.min.y : n.max.y,
                t.y = a.normal.y > 0 ? n.max.y : n.min.y,
                e.z = a.normal.z > 0 ? n.min.z : n.max.z,
                t.z = a.normal.z > 0 ? n.max.z : n.min.z;
                var o = a.distanceToPoint(e)
                  , s = a.distanceToPoint(t);
                if (0 > o && 0 > s)
                    return !1
            }
            return !0
        }
    }(),
    containsPoint: function(e) {
        for (var t = this.planes, n = 0; 6 > n; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
},
THREE.Plane = function(e, t) {
    this.normal = void 0 !== e ? e : new THREE.Vector3(1,0,0),
    this.constant = void 0 !== t ? t : 0
}
,
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    },
    setComponents: function(e, t, n, r) {
        return this.normal.set(e, t, n),
        this.constant = r,
        this
    },
    setFromNormalAndCoplanarPoint: function(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    },
    setFromCoplanarPoints: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(n, r, i) {
            var a = e.subVectors(i, r).cross(t.subVectors(n, r)).normalize();
            return this.setFromNormalAndCoplanarPoint(a, n),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    },
    normalize: function() {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    },
    negate: function() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    },
    distanceToPoint: function(e) {
        return this.normal.dot(e) + this.constant
    },
    distanceToSphere: function(e) {
        return this.distanceToPoint(e.center) - e.radius
    },
    projectPoint: function(e, t) {
        return this.orthoPoint(e, t).sub(e).negate()
    },
    orthoPoint: function(e, t) {
        var n = this.distanceToPoint(e)
          , r = t || new THREE.Vector3;
        return r.copy(this.normal).multiplyScalar(n)
    },
    intersectLine: function() {
        var e = new THREE.Vector3;
        return function(t, n) {
            var r = n || new THREE.Vector3
              , i = t.delta(e)
              , a = this.normal.dot(i);
            if (0 !== a) {
                var o = -(t.start.dot(this.normal) + this.constant) / a;
                if (!(0 > o || o > 1))
                    return r.copy(i).multiplyScalar(o).add(t.start)
            } else if (0 === this.distanceToPoint(t.start))
                return r.copy(t.start)
        }
    }(),
    intersectsLine: function(e) {
        var t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return 0 > t && n > 0 || 0 > n && t > 0
    },
    intersectsBox: function(e) {
        return e.intersectsPlane(this)
    },
    intersectsSphere: function(e) {
        return e.intersectsPlane(this)
    },
    coplanarPoint: function(e) {
        var t = e || new THREE.Vector3;
        return t.copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
        var e = new THREE.Vector3
          , t = new THREE.Matrix3;
        return function(n, r) {
            var i = this.coplanarPoint(e).applyMatrix4(n)
              , a = r || t.getNormalMatrix(n)
              , o = this.normal.applyMatrix3(a).normalize();
            return this.constant = -i.dot(o),
            this
        }
    }(),
    translate: function(e) {
        return this.constant = this.constant - e.dot(this.normal),
        this
    },
    equals: function(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
},
THREE.Spherical = function(e, t, n) {
    return this.radius = void 0 !== e ? e : 1,
    this.phi = void 0 !== t ? t : 0,
    this.theta = void 0 !== n ? n : 0,
    this
}
,
THREE.Spherical.prototype = {
    constructor: THREE.Spherical,
    set: function(e, t, n) {
        return this.radius = e,
        this.phi = t,
        this.theta = n,
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.radius.copy(e.radius),
        this.phi.copy(e.phi),
        this.theta.copy(e.theta),
        this
    },
    makeSafe: function() {
        var e = 1e-6;
        return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)),
        this
    },
    setFromVector3: function(e) {
        return this.radius = e.length(),
        0 === this.radius ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(e.x, e.z),
        this.phi = Math.acos(THREE.Math.clamp(e.y / this.radius, -1, 1))),
        this
    }
},
THREE.Math = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function() {
        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = new Array(36), r = 0;
        return function() {
            for (var i = 0; 36 > i; i++)
                8 === i || 13 === i || 18 === i || 23 === i ? n[i] = "-" : 14 === i ? n[i] = "4" : (2 >= r && (r = 33554432 + 16777216 * Math.random() | 0),
                e = 15 & r,
                r >>= 4,
                n[i] = t[19 === i ? 3 & e | 8 : e]);
            return n.join("")
        }
    }(),
    clamp: function(e, t, n) {
        return Math.max(t, Math.min(n, e))
    },
    euclideanModulo: function(e, t) {
        return (e % t + t) % t
    },
    mapLinear: function(e, t, n, r, i) {
        return r + (e - t) * (i - r) / (n - t)
    },
    smoothstep: function(e, t, n) {
        return t >= e ? 0 : e >= n ? 1 : (e = (e - t) / (n - t),
        e * e * (3 - 2 * e))
    },
    smootherstep: function(e, t, n) {
        return t >= e ? 0 : e >= n ? 1 : (e = (e - t) / (n - t),
        e * e * e * (e * (6 * e - 15) + 10))
    },
    random16: function() {
        return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
        Math.random()
    },
    randInt: function(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
        return e * (.5 - Math.random())
    },
    degToRad: function(e) {
        return e * THREE.Math.DEG2RAD
    },
    radToDeg: function(e) {
        return e * THREE.Math.RAD2DEG
    },
    isPowerOfTwo: function(e) {
        return 0 === (e & e - 1) && 0 !== e
    },
    nearestPowerOfTwo: function(e) {
        return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    },
    nextPowerOfTwo: function(e) {
        return e--,
        e |= e >> 1,
        e |= e >> 2,
        e |= e >> 4,
        e |= e >> 8,
        e |= e >> 16,
        e++,
        e
    }
},
THREE.Spline = function(e) {
    function t(e, t, n, r, i, a, o) {
        var s = .5 * (n - e)
          , c = .5 * (r - t);
        return (2 * (t - n) + s + c) * o + (-3 * (t - n) - 2 * s - c) * a + s * i + t
    }
    this.points = e;
    var n, r, i, a, o, s, c, h, l, u = [], p = {
        x: 0,
        y: 0,
        z: 0
    };
    this.initFromArray = function(e) {
        this.points = [];
        for (var t = 0; t < e.length; t++)
            this.points[t] = {
                x: e[t][0],
                y: e[t][1],
                z: e[t][2]
            }
    }
    ,
    this.getPoint = function(e) {
        return n = (this.points.length - 1) * e,
        r = Math.floor(n),
        i = n - r,
        u[0] = 0 === r ? r : r - 1,
        u[1] = r,
        u[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1,
        u[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2,
        s = this.points[u[0]],
        c = this.points[u[1]],
        h = this.points[u[2]],
        l = this.points[u[3]],
        a = i * i,
        o = i * a,
        p.x = t(s.x, c.x, h.x, l.x, i, a, o),
        p.y = t(s.y, c.y, h.y, l.y, i, a, o),
        p.z = t(s.z, c.z, h.z, l.z, i, a, o),
        p
    }
    ,
    this.getControlPointsArray = function() {
        var e, t, n = this.points.length, r = [];
        for (e = 0; n > e; e++)
            t = this.points[e],
            r[e] = [t.x, t.y, t.z];
        return r
    }
    ,
    this.getLength = function(e) {
        var t, n, r, i, a = 0, o = 0, s = 0, c = new THREE.Vector3, h = new THREE.Vector3, l = [], u = 0;
        for (l[0] = 0,
        e || (e = 100),
        r = this.points.length * e,
        c.copy(this.points[0]),
        t = 1; r > t; t++)
            n = t / r,
            i = this.getPoint(n),
            h.copy(i),
            u += h.distanceTo(c),
            c.copy(i),
            a = (this.points.length - 1) * n,
            o = Math.floor(a),
            o !== s && (l[o] = u,
            s = o);
        return l[l.length] = u,
        {
            chunks: l,
            total: u
        }
    }
    ,
    this.reparametrizeByArcLength = function(e) {
        var t, n, r, i, a, o, s, c, h = [], l = new THREE.Vector3, u = this.getLength();
        for (h.push(l.copy(this.points[0]).clone()),
        t = 1; t < this.points.length; t++) {
            for (o = u.chunks[t] - u.chunks[t - 1],
            s = Math.ceil(e * o / u.total),
            i = (t - 1) / (this.points.length - 1),
            a = t / (this.points.length - 1),
            n = 1; s - 1 > n; n++)
                r = i + n * (1 / s) * (a - i),
                c = this.getPoint(r),
                h.push(l.copy(c).clone());
            h.push(l.copy(this.points[t]).clone())
        }
        this.points = h
    }
}
,
THREE.Triangle = function(e, t, n) {
    this.a = void 0 !== e ? e : new THREE.Vector3,
    this.b = void 0 !== t ? t : new THREE.Vector3,
    this.c = void 0 !== n ? n : new THREE.Vector3
}
,
THREE.Triangle.normal = function() {
    var e = new THREE.Vector3;
    return function(t, n, r, i) {
        var a = i || new THREE.Vector3;
        a.subVectors(r, n),
        e.subVectors(t, n),
        a.cross(e);
        var o = a.lengthSq();
        return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
    }
}(),
THREE.Triangle.barycoordFromPoint = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , n = new THREE.Vector3;
    return function(r, i, a, o, s) {
        e.subVectors(o, i),
        t.subVectors(a, i),
        n.subVectors(r, i);
        var c = e.dot(e)
          , h = e.dot(t)
          , l = e.dot(n)
          , u = t.dot(t)
          , p = t.dot(n)
          , d = c * u - h * h
          , E = s || new THREE.Vector3;
        if (0 === d)
            return E.set(-2, -1, -1);
        var f = 1 / d
          , m = (u * l - h * p) * f
          , g = (c * p - h * l) * f;
        return E.set(1 - m - g, g, m)
    }
}(),
THREE.Triangle.containsPoint = function() {
    var e = new THREE.Vector3;
    return function(t, n, r, i) {
        var a = THREE.Triangle.barycoordFromPoint(t, n, r, i, e);
        return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
    }
}(),
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    },
    setFromPointsAndIndices: function(e, t, n, r) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[r]),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    },
    area: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function() {
            return e.subVectors(this.c, this.b),
            t.subVectors(this.a, this.b),
            .5 * e.cross(t).length()
        }
    }(),
    midpoint: function(e) {
        var t = e || new THREE.Vector3;
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(e) {
        return THREE.Triangle.normal(this.a, this.b, this.c, e)
    },
    plane: function(e) {
        var t = e || new THREE.Plane;
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(e, t) {
        return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    },
    containsPoint: function(e) {
        return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
    },
    closestPointToPoint: function() {
        var e, t, n, r;
        return function(i, a) {
            void 0 === e && (e = new THREE.Plane,
            t = [new THREE.Line3, new THREE.Line3, new THREE.Line3],
            n = new THREE.Vector3,
            r = new THREE.Vector3);
            var o = a || new THREE.Vector3
              , s = 1 / 0;
            if (e.setFromCoplanarPoints(this.a, this.b, this.c),
            e.projectPoint(i, n),
            this.containsPoint(n) === !0)
                o.copy(n);
            else {
                t[0].set(this.a, this.b),
                t[1].set(this.b, this.c),
                t[2].set(this.c, this.a);
                for (var c = 0; c < t.length; c++) {
                    t[c].closestPointToPoint(n, !0, r);
                    var h = n.distanceToSquared(r);
                    s > h && (s = h,
                    o.copy(r))
                }
            }
            return o
        }
    }(),
    equals: function(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
},
THREE.Interpolant = function(e, t, n, r) {
    this.parameterPositions = e,
    this._cachedIndex = 0,
    this.resultBuffer = void 0 !== r ? r : new t.constructor(n),
    this.sampleValues = t,
    this.valueSize = n
}
,
THREE.Interpolant.prototype = {
    constructor: THREE.Interpolant,
    evaluate: function(e) {
        var t = this.parameterPositions
          , n = this._cachedIndex
          , r = t[n]
          , i = t[n - 1];
        e: {
            t: {
                var a;
                n: {
                    r: if (!(r > e)) {
                        for (var o = n + 2; ; ) {
                            if (void 0 === r) {
                                if (i > e)
                                    break r;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.afterEnd_(n - 1, e, i)
                            }
                            if (n === o)
                                break;
                            if (i = r,
                            r = t[++n],
                            r > e)
                                break t
                        }
                        a = t.length;
                        break n
                    }
                    {
                        if (e >= i)
                            break e;
                        var s = t[1];
                        s > e && (n = 2,
                        i = s);
                        for (var o = n - 2; ; ) {
                            if (void 0 === i)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, e, r);
                            if (n === o)
                                break;
                            if (r = i,
                            i = t[--n - 1],
                            e >= i)
                                break t
                        }
                        a = n,
                        n = 0
                    }
                }
                for (; a > n; ) {
                    var c = n + a >>> 1;
                    e < t[c] ? a = c : n = c + 1
                }
                if (r = t[n],
                i = t[n - 1],
                void 0 === i)
                    return this._cachedIndex = 0,
                    this.beforeStart_(0, e, r);
                if (void 0 === r)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.afterEnd_(n - 1, i, e)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, i, r)
        }
        return this.interpolate_(n, i, e, r)
    },
    settings: null ,
    DefaultSettings_: {},
    getSettings_: function() {
        return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(e) {
        for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a)
            t[a] = n[i + a];
        return t
    },
    interpolate_: function(e, t, n, r) {
        throw new Error("call to abstract method")
    },
    intervalChanged_: function(e, t, n) {}
},
Object.assign(THREE.Interpolant.prototype, {
    beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
    afterEnd_: THREE.Interpolant.prototype.copySampleValue_
}),
THREE.CubicInterpolant = function(e, t, n, r) {
    THREE.Interpolant.call(this, e, t, n, r),
    this._weightPrev = -0,
    this._offsetPrev = -0,
    this._weightNext = -0,
    this._offsetNext = -0
}
,
THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.CubicInterpolant,
    DefaultSettings_: {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    },
    intervalChanged_: function(e, t, n) {
        var r = this.parameterPositions
          , i = e - 2
          , a = e + 1
          , o = r[i]
          , s = r[a];
        if (void 0 === o)
            switch (this.getSettings_().endingStart) {
            case THREE.ZeroSlopeEnding:
                i = e,
                o = 2 * t - n;
                break;
            case THREE.WrapAroundEnding:
                i = r.length - 2,
                o = t + r[i] - r[i + 1];
                break;
            default:
                i = e,
                o = n
            }
        if (void 0 === s)
            switch (this.getSettings_().endingEnd) {
            case THREE.ZeroSlopeEnding:
                a = e,
                s = 2 * n - t;
                break;
            case THREE.WrapAroundEnding:
                a = 1,
                s = n + r[1] - r[0];
                break;
            default:
                a = e - 1,
                s = t
            }
        var c = .5 * (n - t)
          , h = this.valueSize;
        this._weightPrev = c / (t - o),
        this._weightNext = c / (s - n),
        this._offsetPrev = i * h,
        this._offsetNext = a * h
    },
    interpolate_: function(e, t, n, r) {
        for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (n - t) / (r - t), E = d * d, f = E * d, m = -u * f + 2 * u * E - u * d, g = (1 + u) * f + (-1.5 - 2 * u) * E + (-.5 + u) * d + 1, v = (-1 - p) * f + (1.5 + p) * E + .5 * d, T = p * f - p * E, y = 0; y !== o; ++y)
            i[y] = m * a[h + y] + g * a[c + y] + v * a[s + y] + T * a[l + y];
        return i
    }
}),
THREE.DiscreteInterpolant = function(e, t, n, r) {
    THREE.Interpolant.call(this, e, t, n, r)
}
,
THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.DiscreteInterpolant,
    interpolate_: function(e, t, n, r) {
        return this.copySampleValue_(e - 1)
    }
}),
THREE.LinearInterpolant = function(e, t, n, r) {
    THREE.Interpolant.call(this, e, t, n, r)
}
,
THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.LinearInterpolant,
    interpolate_: function(e, t, n, r) {
        for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = (n - t) / (r - t), l = 1 - h, u = 0; u !== o; ++u)
            i[u] = a[c + u] * l + a[s + u] * h;
        return i
    }
}),
THREE.QuaternionLinearInterpolant = function(e, t, n, r) {
    THREE.Interpolant.call(this, e, t, n, r)
}
,
THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.QuaternionLinearInterpolant,
    interpolate_: function(e, t, n, r) {
        for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = (n - t) / (r - t), h = s + o; s !== h; s += 4)
            THREE.Quaternion.slerpFlat(i, 0, a, s - o, a, s, c);
        return i
    }
}),
THREE.Clock = function(e) {
    this.autoStart = void 0 !== e ? e : !0,
    this.startTime = 0,
    this.oldTime = 0,
    this.elapsedTime = 0,
    this.running = !1
}
,
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.startTime = (performance || Date).now(),
        this.oldTime = this.startTime,
        this.running = !0
    },
    stop: function() {
        this.getElapsedTime(),
        this.running = !1
    },
    getElapsedTime: function() {
        return this.getDelta(),
        this.elapsedTime
    },
    getDelta: function() {
        var e = 0;
        if (this.autoStart && !this.running && this.start(),
        this.running) {
            var t = (performance || Date).now();
            e = (t - this.oldTime) / 1e3,
            this.oldTime = t,
            this.elapsedTime += e
        }
        return e
    }
},
THREE.EventDispatcher = function() {}
,
THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function(e) {
        e.addEventListener = THREE.EventDispatcher.prototype.addEventListener,
        e.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener,
        e.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener,
        e.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    },
    addEventListener: function(e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var n = this._listeners;
        void 0 === n[e] && (n[e] = []),
        -1 === n[e].indexOf(t) && n[e].push(t)
    },
    hasEventListener: function(e, t) {
        if (void 0 === this._listeners)
            return !1;
        var n = this._listeners;
        return void 0 !== n[e] && -1 !== n[e].indexOf(t) ? !0 : !1
    },
    removeEventListener: function(e, t) {
        if (void 0 !== this._listeners) {
            var n = this._listeners
              , r = n[e];
            if (void 0 !== r) {
                var i = r.indexOf(t);
                -1 !== i && r.splice(i, 1)
            }
        }
    },
    dispatchEvent: function(e) {
        if (void 0 !== this._listeners) {
            var t = this._listeners
              , n = t[e.type];
            if (void 0 !== n) {
                e.target = this;
                for (var r = [], i = n.length, a = 0; i > a; a++)
                    r[a] = n[a];
                for (var a = 0; i > a; a++)
                    r[a].call(this, e)
            }
        }
    }
},
THREE.Layers = function() {
    this.mask = 1
}
,
THREE.Layers.prototype = {
    constructor: THREE.Layers,
    set: function(e) {
        this.mask = 1 << e
    },
    enable: function(e) {
        this.mask |= 1 << e
    },
    toggle: function(e) {
        this.mask ^= 1 << e
    },
    disable: function(e) {
        this.mask &= ~(1 << e)
    },
    test: function(e) {
        return 0 !== (this.mask & e.mask)
    }
},
function(e) {
    function t(e, t) {
        return e.distance - t.distance
    }
    function n(e, t, r, i) {
        if (e.visible !== !1 && (e.raycast(t, r),
        i === !0))
            for (var a = e.children, o = 0, s = a.length; s > o; o++)
                n(a[o], t, r, !0)
    }
    e.Raycaster = function(t, n, r, i) {
        this.ray = new e.Ray(t,n),
        this.near = r || 0,
        this.far = i || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    ,
    e.Raycaster.prototype = {
        constructor: e.Raycaster,
        linePrecision: 1,
        set: function(e, t) {
            this.ray.set(e, t)
        },
        setFromCamera: function(t, n) {
            n instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(n.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(n).sub(this.ray.origin).normalize()) : n instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(n),
            this.ray.direction.set(0, 0, -1).transformDirection(n.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(e, r) {
            var i = [];
            return n(e, this, i, r),
            i.sort(t),
            i
        },
        intersectObjects: function(e, r) {
            var i = [];
            if (Array.isArray(e) === !1)
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                i;
            for (var a = 0, o = e.length; o > a; a++)
                n(e[a], this, i, r);
            return i.sort(t),
            i
        }
    }
}(THREE),
THREE.Object3D = function() {
    function e() {
        i.setFromEuler(r, !1)
    }
    function t() {
        r.setFromQuaternion(i, void 0, !1)
    }
    Object.defineProperty(this, "id", {
        value: THREE.Object3DIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Object3D",
    this.parent = null ,
    this.children = [],
    this.up = THREE.Object3D.DefaultUp.clone();
    var n = new THREE.Vector3
      , r = new THREE.Euler
      , i = new THREE.Quaternion
      , a = new THREE.Vector3(1,1,1);
    r.onChange(e),
    i.onChange(t),
    Object.defineProperties(this, {
        position: {
            enumerable: !0,
            value: n
        },
        rotation: {
            enumerable: !0,
            value: r
        },
        quaternion: {
            enumerable: !0,
            value: i
        },
        scale: {
            enumerable: !0,
            value: a
        },
        modelViewMatrix: {
            value: new THREE.Matrix4
        },
        normalMatrix: {
            value: new THREE.Matrix3
        }
    }),
    this.rotationAutoUpdate = !0,
    this.matrix = new THREE.Matrix4,
    this.matrixWorld = new THREE.Matrix4,
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate,
    this.matrixWorldNeedsUpdate = !1,
    this.layers = new THREE.Layers,
    this.visible = !0,
    this.castShadow = !1,
    this.receiveShadow = !1,
    this.frustumCulled = !0,
    this.renderOrder = 0,
    this.userData = {}
}
,
THREE.Object3D.DefaultUp = new THREE.Vector3(0,1,0),
THREE.Object3D.DefaultMatrixAutoUpdate = !0,
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    applyMatrix: function(e) {
        this.matrix.multiplyMatrices(e, this.matrix),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    },
    setRotationFromEuler: function(e) {
        this.quaternion.setFromEuler(e, !0)
    },
    setRotationFromMatrix: function(e) {
        this.quaternion.setFromRotationMatrix(e)
    },
    setRotationFromQuaternion: function(e) {
        this.quaternion.copy(e)
    },
    rotateOnAxis: function() {
        var e = new THREE.Quaternion;
        return function(t, n) {
            return e.setFromAxisAngle(t, n),
            this.quaternion.multiply(e),
            this
        }
    }(),
    rotateX: function() {
        var e = new THREE.Vector3(1,0,0);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateY: function() {
        var e = new THREE.Vector3(0,1,0);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateZ: function() {
        var e = new THREE.Vector3(0,0,1);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    translateOnAxis: function() {
        var e = new THREE.Vector3;
        return function(t, n) {
            return e.copy(t).applyQuaternion(this.quaternion),
            this.position.add(e.multiplyScalar(n)),
            this
        }
    }(),
    translateX: function() {
        var e = new THREE.Vector3(1,0,0);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateY: function() {
        var e = new THREE.Vector3(0,1,0);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateZ: function() {
        var e = new THREE.Vector3(0,0,1);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    localToWorld: function(e) {
        return e.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
        var e = new THREE.Matrix4;
        return function(t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function() {
        var e = new THREE.Matrix4;
        return function(t) {
            e.lookAt(t, this.position, this.up),
            this.quaternion.setFromRotationMatrix(e)
        }
    }(),
    add: function(e) {
        if (arguments.length > 1) {
            for (var t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e instanceof THREE.Object3D ? (null  !== e.parent && e.parent.remove(e),
        e.parent = this,
        e.dispatchEvent({
            type: "added"
        }),
        this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    },
    remove: function(e) {
        if (arguments.length > 1)
            for (var t = 0; t < arguments.length; t++)
                this.remove(arguments[t]);
        var n = this.children.indexOf(e);
        -1 !== n && (e.parent = null ,
        e.dispatchEvent({
            type: "removed"
        }),
        this.children.splice(n, 1))
    },
    getObjectById: function(e) {
        return this.getObjectByProperty("id", e)
    },
    getObjectByName: function(e) {
        return this.getObjectByProperty("name", e)
    },
    getObjectByProperty: function(e, t) {
        if (this[e] === t)
            return this;
        for (var n = 0, r = this.children.length; r > n; n++) {
            var i = this.children[n]
              , a = i.getObjectByProperty(e, t);
            if (void 0 !== a)
                return a
        }
    },
    getWorldPosition: function(e) {
        var t = e || new THREE.Vector3;
        return this.updateMatrixWorld(!0),
        t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(n) {
            var r = n || new THREE.Quaternion;
            return this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, r, t),
            r
        }
    }(),
    getWorldRotation: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            var n = t || new THREE.Euler;
            return this.getWorldQuaternion(e),
            n.setFromQuaternion(e, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function() {
        var e = new THREE.Vector3
          , t = new THREE.Quaternion;
        return function(n) {
            var r = n || new THREE.Vector3;
            return this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, t, r),
            r
        }
    }(),
    getWorldDirection: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            var n = t || new THREE.Vector3;
            return this.getWorldQuaternion(e),
            n.set(0, 0, 1).applyQuaternion(e)
        }
    }(),
    raycast: function() {},
    traverse: function(e) {
        e(this);
        for (var t = this.children, n = 0, r = t.length; r > n; n++)
            t[n].traverse(e)
    },
    traverseVisible: function(e) {
        if (this.visible !== !1) {
            e(this);
            for (var t = this.children, n = 0, r = t.length; r > n; n++)
                t[n].traverseVisible(e)
        }
    },
    traverseAncestors: function(e) {
        var t = this.parent;
        null  !== t && (e(t),
        t.traverseAncestors(e))
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(e) {
        this.matrixAutoUpdate === !0 && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate === !0 || e === !0) && (null  === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        for (var t = 0, n = this.children.length; n > t; t++)
            this.children[t].updateMatrixWorld(e)
    },
    toJSON: function(e) {
        function t(e) {
            var t = [];
            for (var n in e) {
                var r = e[n];
                delete r.metadata,
                t.push(r)
            }
            return t
        }
        var n = void 0 === e || "" === e
          , r = {};
        n && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {}
        },
        r.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var i = {};
        if (i.uuid = this.uuid,
        i.type = this.type,
        "" !== this.name && (i.name = this.name),
        "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
        this.castShadow === !0 && (i.castShadow = !0),
        this.receiveShadow === !0 && (i.receiveShadow = !0),
        this.visible === !1 && (i.visible = !1),
        i.matrix = this.matrix.toArray(),
        void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)),
        i.geometry = this.geometry.uuid),
        void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)),
        i.material = this.material.uuid),
        this.children.length > 0) {
            i.children = [];
            for (var a = 0; a < this.children.length; a++)
                i.children.push(this.children[a].toJSON(e).object)
        }
        if (n) {
            var o = t(e.geometries)
              , s = t(e.materials)
              , c = t(e.textures)
              , h = t(e.images);
            o.length > 0 && (r.geometries = o),
            s.length > 0 && (r.materials = s),
            c.length > 0 && (r.textures = c),
            h.length > 0 && (r.images = h)
        }
        return r.object = i,
        r
    },
    clone: function(e) {
        return (new this.constructor).copy(this, e)
    },
    copy: function(e, t) {
        if (void 0 === t && (t = !0),
        this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.rotationAutoUpdate = e.rotationAutoUpdate,
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (var n = 0; n < e.children.length; n++) {
                var r = e.children[n];
                this.add(r.clone())
            }
        return this
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),
THREE.Object3DIdCount = 0,
THREE.Face3 = function(e, t, n, r, i, a) {
    this.a = e,
    this.b = t,
    this.c = n,
    this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3,
    this.vertexNormals = Array.isArray(r) ? r : [],
    this.color = i instanceof THREE.Color ? i : new THREE.Color,
    this.vertexColors = Array.isArray(i) ? i : [],
    this.materialIndex = void 0 !== a ? a : 0
}
,
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.a = e.a,
        this.b = e.b,
        this.c = e.c,
        this.normal.copy(e.normal),
        this.color.copy(e.color),
        this.materialIndex = e.materialIndex;
        for (var t = 0, n = e.vertexNormals.length; n > t; t++)
            this.vertexNormals[t] = e.vertexNormals[t].clone();
        for (var t = 0, n = e.vertexColors.length; n > t; t++)
            this.vertexColors[t] = e.vertexColors[t].clone();
        return this
    }
},
THREE.BufferAttribute = function(e, t, n) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = e,
    this.itemSize = t,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0,
    this.normalized = n === !0
}
,
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get count() {
        return this.array.length / this.itemSize
    },
    set needsUpdate(e) {
        e === !0 && this.version++
    },
    setDynamic: function(e) {
        return this.dynamic = e,
        this
    },
    copy: function(e) {
        return this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.dynamic = e.dynamic,
        this
    },
    copyAt: function(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (var r = 0, i = this.itemSize; i > r; r++)
            this.array[e + r] = t.array[n + r];
        return this
    },
    copyArray: function(e) {
        return this.array.set(e),
        this
    },
    copyColorsArray: function(e) {
        for (var t = this.array, n = 0, r = 0, i = e.length; i > r; r++) {
            var a = e[r];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r),
            a = new THREE.Color),
            t[n++] = a.r,
            t[n++] = a.g,
            t[n++] = a.b
        }
        return this
    },
    copyIndicesArray: function(e) {
        for (var t = this.array, n = 0, r = 0, i = e.length; i > r; r++) {
            var a = e[r];
            t[n++] = a.a,
            t[n++] = a.b,
            t[n++] = a.c
        }
        return this
    },
    copyVector2sArray: function(e) {
        for (var t = this.array, n = 0, r = 0, i = e.length; i > r; r++) {
            var a = e[r];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r),
            a = new THREE.Vector2),
            t[n++] = a.x,
            t[n++] = a.y
        }
        return this
    },
    copyVector3sArray: function(e) {
        for (var t = this.array, n = 0, r = 0, i = e.length; i > r; r++) {
            var a = e[r];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r),
            a = new THREE.Vector3),
            t[n++] = a.x,
            t[n++] = a.y,
            t[n++] = a.z
        }
        return this
    },
    copyVector4sArray: function(e) {
        for (var t = this.array, n = 0, r = 0, i = e.length; i > r; r++) {
            var a = e[r];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r),
            a = new THREE.Vector4),
            t[n++] = a.x,
            t[n++] = a.y,
            t[n++] = a.z,
            t[n++] = a.w
        }
        return this
    },
    set: function(e, t) {
        return void 0 === t && (t = 0),
        this.array.set(e, t),
        this
    },
    getX: function(e) {
        return this.array[e * this.itemSize]
    },
    setX: function(e, t) {
        return this.array[e * this.itemSize] = t,
        this
    },
    getY: function(e) {
        return this.array[e * this.itemSize + 1]
    },
    setY: function(e, t) {
        return this.array[e * this.itemSize + 1] = t,
        this
    },
    getZ: function(e) {
        return this.array[e * this.itemSize + 2]
    },
    setZ: function(e, t) {
        return this.array[e * this.itemSize + 2] = t,
        this
    },
    getW: function(e) {
        return this.array[e * this.itemSize + 3]
    },
    setW: function(e, t) {
        return this.array[e * this.itemSize + 3] = t,
        this
    },
    setXY: function(e, t, n) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    },
    setXYZ: function(e, t, n, r) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this
    },
    setXYZW: function(e, t, n, r, i) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this.array[e + 3] = i,
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.Int8Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int8Array(e),t)
}
,
THREE.Uint8Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint8Array(e),t)
}
,
THREE.Uint8ClampedAttribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(e),t)
}
,
THREE.Int16Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int16Array(e),t)
}
,
THREE.Uint16Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint16Array(e),t)
}
,
THREE.Int32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int32Array(e),t)
}
,
THREE.Uint32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint32Array(e),t)
}
,
THREE.Float32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Float32Array(e),t)
}
,
THREE.Float64Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Float64Array(e),t)
}
,
THREE.DynamicBufferAttribute = function(e, t) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
    new THREE.BufferAttribute(e,t).setDynamic(!0)
}
,
THREE.InstancedBufferAttribute = function(e, t, n) {
    THREE.BufferAttribute.call(this, e, t),
    this.meshPerAttribute = n || 1
}
,
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype),
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute,
THREE.InstancedBufferAttribute.prototype.copy = function(e) {
    return THREE.BufferAttribute.prototype.copy.call(this, e),
    this.meshPerAttribute = e.meshPerAttribute,
    this
}
,
THREE.InterleavedBuffer = function(e, t) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = e,
    this.stride = t,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0
}
,
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer,
    get length() {
        return this.array.length
    },
    get count() {
        return this.array.length / this.stride
    },
    set needsUpdate(e) {
        e === !0 && this.version++
    },
    setDynamic: function(e) {
        return this.dynamic = e,
        this
    },
    copy: function(e) {
        return this.array = new e.array.constructor(e.array),
        this.stride = e.stride,
        this.dynamic = e.dynamic,
        this
    },
    copyAt: function(e, t, n) {
        e *= this.stride,
        n *= t.stride;
        for (var r = 0, i = this.stride; i > r; r++)
            this.array[e + r] = t.array[n + r];
        return this
    },
    set: function(e, t) {
        return void 0 === t && (t = 0),
        this.array.set(e, t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.InstancedInterleavedBuffer = function(e, t, n) {
    THREE.InterleavedBuffer.call(this, e, t),
    this.meshPerAttribute = n || 1
}
,
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype),
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer,
THREE.InstancedInterleavedBuffer.prototype.copy = function(e) {
    return THREE.InterleavedBuffer.prototype.copy.call(this, e),
    this.meshPerAttribute = e.meshPerAttribute,
    this
}
,
THREE.InterleavedBufferAttribute = function(e, t, n) {
    this.uuid = THREE.Math.generateUUID(),
    this.data = e,
    this.itemSize = t,
    this.offset = n
}
,
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute,
    get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
        this.array.length
    },
    get count() {
        return this.data.count
    },
    setX: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t,
        this
    },
    setY: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    },
    setZ: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    },
    setW: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    },
    getX: function(e) {
        return this.data.array[e * this.data.stride + this.offset]
    },
    getY: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    },
    getZ: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    },
    getW: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    },
    setXY: function(e, t, n) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this
    },
    setXYZ: function(e, t, n, r) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = r,
        this
    },
    setXYZW: function(e, t, n, r, i) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = r,
        this.data.array[e + 3] = i,
        this
    }
},
THREE.Geometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Geometry",
    this.vertices = [],
    this.colors = [],
    this.faces = [],
    this.faceVertexUvs = [[]],
    this.morphTargets = [],
    this.morphNormals = [],
    this.skinWeights = [],
    this.skinIndices = [],
    this.lineDistances = [],
    this.boundingBox = null ,
    this.boundingSphere = null ,
    this.verticesNeedUpdate = !1,
    this.elementsNeedUpdate = !1,
    this.uvsNeedUpdate = !1,
    this.normalsNeedUpdate = !1,
    this.colorsNeedUpdate = !1,
    this.lineDistancesNeedUpdate = !1,
    this.groupsNeedUpdate = !1
}
,
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(e) {
        for (var t = (new THREE.Matrix3).getNormalMatrix(e), n = 0, r = this.vertices.length; r > n; n++) {
            var i = this.vertices[n];
            i.applyMatrix4(e)
        }
        for (var n = 0, r = this.faces.length; r > n; n++) {
            var a = this.faces[n];
            a.normal.applyMatrix3(t).normalize();
            for (var o = 0, s = a.vertexNormals.length; s > o; o++)
                a.vertexNormals[o].applyMatrix3(t).normalize()
        }
        return null  !== this.boundingBox && this.computeBoundingBox(),
        null  !== this.boundingSphere && this.computeBoundingSphere(),
        this.verticesNeedUpdate = !0,
        this.normalsNeedUpdate = !0,
        this
    },
    rotateX: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationX(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateY: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationY(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateZ: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationZ(t),
            this.applyMatrix(e),
            this
        }
    }(),
    translate: function() {
        var e;
        return function(t, n, r) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeTranslation(t, n, r),
            this.applyMatrix(e),
            this
        }
    }(),
    scale: function() {
        var e;
        return function(t, n, r) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeScale(t, n, r),
            this.applyMatrix(e),
            this
        }
    }(),
    lookAt: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Object3D),
            e.lookAt(t),
            e.updateMatrix(),
            this.applyMatrix(e.matrix)
        }
    }(),
    fromBufferGeometry: function(e) {
        function t(e, t, r, i) {
            var a = void 0 !== o ? [l[e].clone(), l[t].clone(), l[r].clone()] : []
              , d = void 0 !== s ? [n.colors[e].clone(), n.colors[t].clone(), n.colors[r].clone()] : []
              , E = new THREE.Face3(e,t,r,a,d,i);
            n.faces.push(E),
            void 0 !== c && n.faceVertexUvs[0].push([u[e].clone(), u[t].clone(), u[r].clone()]),
            void 0 !== h && n.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[r].clone()])
        }
        var n = this
          , r = null  !== e.index ? e.index.array : void 0
          , i = e.attributes
          , a = i.position.array
          , o = void 0 !== i.normal ? i.normal.array : void 0
          , s = void 0 !== i.color ? i.color.array : void 0
          , c = void 0 !== i.uv ? i.uv.array : void 0
          , h = void 0 !== i.uv2 ? i.uv2.array : void 0;
        void 0 !== h && (this.faceVertexUvs[1] = []);
        for (var l = [], u = [], p = [], d = 0, E = 0; d < a.length; d += 3,
        E += 2)
            n.vertices.push(new THREE.Vector3(a[d],a[d + 1],a[d + 2])),
            void 0 !== o && l.push(new THREE.Vector3(o[d],o[d + 1],o[d + 2])),
            void 0 !== s && n.colors.push(new THREE.Color(s[d],s[d + 1],s[d + 2])),
            void 0 !== c && u.push(new THREE.Vector2(c[E],c[E + 1])),
            void 0 !== h && p.push(new THREE.Vector2(h[E],h[E + 1]));
        if (void 0 !== r) {
            var f = e.groups;
            if (f.length > 0)
                for (var d = 0; d < f.length; d++)
                    for (var m = f[d], g = m.start, v = m.count, E = g, T = g + v; T > E; E += 3)
                        t(r[E], r[E + 1], r[E + 2], m.materialIndex);
            else
                for (var d = 0; d < r.length; d += 3)
                    t(r[d], r[d + 1], r[d + 2])
        } else
            for (var d = 0; d < a.length / 3; d += 3)
                t(d, d + 1, d + 2);
        return this.computeFaceNormals(),
        null  !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        null  !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
        this
    },
    center: function() {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z),
        e
    },
    normalize: function() {
        this.computeBoundingSphere();
        var e = this.boundingSphere.center
          , t = this.boundingSphere.radius
          , n = 0 === t ? 1 : 1 / t
          , r = new THREE.Matrix4;
        return r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1),
        this.applyMatrix(r),
        this
    },
    computeFaceNormals: function() {
        for (var e = new THREE.Vector3, t = new THREE.Vector3, n = 0, r = this.faces.length; r > n; n++) {
            var i = this.faces[n]
              , a = this.vertices[i.a]
              , o = this.vertices[i.b]
              , s = this.vertices[i.c];
            e.subVectors(s, o),
            t.subVectors(a, o),
            e.cross(t),
            e.normalize(),
            i.normal.copy(e)
        }
    },
    computeVertexNormals: function(e) {
        void 0 === e && (e = !0);
        var t, n, r, i, a, o;
        for (o = new Array(this.vertices.length),
        t = 0,
        n = this.vertices.length; n > t; t++)
            o[t] = new THREE.Vector3;
        if (e) {
            var s, c, h, l = new THREE.Vector3, u = new THREE.Vector3;
            for (r = 0,
            i = this.faces.length; i > r; r++)
                a = this.faces[r],
                s = this.vertices[a.a],
                c = this.vertices[a.b],
                h = this.vertices[a.c],
                l.subVectors(h, c),
                u.subVectors(s, c),
                l.cross(u),
                o[a.a].add(l),
                o[a.b].add(l),
                o[a.c].add(l)
        } else
            for (r = 0,
            i = this.faces.length; i > r; r++)
                a = this.faces[r],
                o[a.a].add(a.normal),
                o[a.b].add(a.normal),
                o[a.c].add(a.normal);
        for (t = 0,
        n = this.vertices.length; n > t; t++)
            o[t].normalize();
        for (r = 0,
        i = this.faces.length; i > r; r++) {
            a = this.faces[r];
            var p = a.vertexNormals;
            3 === p.length ? (p[0].copy(o[a.a]),
            p[1].copy(o[a.b]),
            p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(),
            p[1] = o[a.b].clone(),
            p[2] = o[a.c].clone())
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
        var e, t, n, r, i;
        for (n = 0,
        r = this.faces.length; r > n; n++)
            for (i = this.faces[n],
            i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(),
            i.__originalVertexNormals || (i.__originalVertexNormals = []),
            e = 0,
            t = i.vertexNormals.length; t > e; e++)
                i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
        var a = new THREE.Geometry;
        for (a.faces = this.faces,
        e = 0,
        t = this.morphTargets.length; t > e; e++) {
            if (!this.morphNormals[e]) {
                this.morphNormals[e] = {},
                this.morphNormals[e].faceNormals = [],
                this.morphNormals[e].vertexNormals = [];
                var o, s, c = this.morphNormals[e].faceNormals, h = this.morphNormals[e].vertexNormals;
                for (n = 0,
                r = this.faces.length; r > n; n++)
                    o = new THREE.Vector3,
                    s = {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    },
                    c.push(o),
                    h.push(s)
            }
            var l = this.morphNormals[e];
            a.vertices = this.morphTargets[e].vertices,
            a.computeFaceNormals(),
            a.computeVertexNormals();
            var o, s;
            for (n = 0,
            r = this.faces.length; r > n; n++)
                i = this.faces[n],
                o = l.faceNormals[n],
                s = l.vertexNormals[n],
                o.copy(i.normal),
                s.a.copy(i.vertexNormals[0]),
                s.b.copy(i.vertexNormals[1]),
                s.c.copy(i.vertexNormals[2])
        }
        for (n = 0,
        r = this.faces.length; r > n; n++)
            i = this.faces[n],
            i.normal = i.__originalFaceNormal,
            i.vertexNormals = i.__originalVertexNormals
    },
    computeTangents: function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
        for (var e = 0, t = this.vertices, n = 0, r = t.length; r > n; n++)
            n > 0 && (e += t[n].distanceTo(t[n - 1])),
            this.lineDistances[n] = e
    },
    computeBoundingBox: function() {
        null  === this.boundingBox && (this.boundingBox = new THREE.Box3),
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null  === this.boundingSphere && (this.boundingSphere = new THREE.Sphere),
        this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(e, t, n) {
        if (e instanceof THREE.Geometry == !1)
            return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
        var r, i = this.vertices.length, a = this.vertices, o = e.vertices, s = this.faces, c = e.faces, h = this.faceVertexUvs[0], l = e.faceVertexUvs[0];
        void 0 === n && (n = 0),
        void 0 !== t && (r = (new THREE.Matrix3).getNormalMatrix(t));
        for (var u = 0, p = o.length; p > u; u++) {
            var d = o[u]
              , E = d.clone();
            void 0 !== t && E.applyMatrix4(t),
            a.push(E)
        }
        for (u = 0,
        p = c.length; p > u; u++) {
            var f, m, g, v = c[u], T = v.vertexNormals, y = v.vertexColors;
            f = new THREE.Face3(v.a + i,v.b + i,v.c + i),
            f.normal.copy(v.normal),
            void 0 !== r && f.normal.applyMatrix3(r).normalize();
            for (var R = 0, H = T.length; H > R; R++)
                m = T[R].clone(),
                void 0 !== r && m.applyMatrix3(r).normalize(),
                f.vertexNormals.push(m);
            f.color.copy(v.color);
            for (var R = 0, H = y.length; H > R; R++)
                g = y[R],
                f.vertexColors.push(g.clone());
            f.materialIndex = v.materialIndex + n,
            s.push(f)
        }
        for (u = 0,
        p = l.length; p > u; u++) {
            var x = l[u]
              , b = [];
            if (void 0 !== x) {
                for (var R = 0, H = x.length; H > R; R++)
                    b.push(x[R].clone());
                h.push(b)
            }
        }
    },
    mergeMesh: function(e) {
        return e instanceof THREE.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(),
        void this.merge(e.geometry, e.matrix))
    },
    mergeVertices: function() {
        var e, t, n, r, i, a, o, s, c = {}, h = [], l = [], u = 4, p = Math.pow(10, u);
        for (n = 0,
        r = this.vertices.length; r > n; n++)
            e = this.vertices[n],
            t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p),
            void 0 === c[t] ? (c[t] = n,
            h.push(this.vertices[n]),
            l[n] = h.length - 1) : l[n] = l[c[t]];
        var d = [];
        for (n = 0,
        r = this.faces.length; r > n; n++) {
            i = this.faces[n],
            i.a = l[i.a],
            i.b = l[i.b],
            i.c = l[i.c],
            a = [i.a, i.b, i.c];
            for (var E = -1, f = 0; 3 > f; f++)
                if (a[f] === a[(f + 1) % 3]) {
                    E = f,
                    d.push(n);
                    break
                }
        }
        for (n = d.length - 1; n >= 0; n--) {
            var m = d[n];
            for (this.faces.splice(m, 1),
            o = 0,
            s = this.faceVertexUvs.length; s > o; o++)
                this.faceVertexUvs[o].splice(m, 1)
        }
        var g = this.vertices.length - h.length;
        return this.vertices = h,
        g
    },
    sortFacesByMaterialIndex: function() {
        function e(e, t) {
            return e.materialIndex - t.materialIndex
        }
        for (var t = this.faces, n = t.length, r = 0; n > r; r++)
            t[r]._id = r;
        t.sort(e);
        var i, a, o = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
        o && o.length === n && (i = []),
        s && s.length === n && (a = []);
        for (var r = 0; n > r; r++) {
            var c = t[r]._id;
            i && i.push(o[c]),
            a && a.push(s[c])
        }
        i && (this.faceVertexUvs[0] = i),
        a && (this.faceVertexUvs[1] = a)
    },
    toJSON: function() {
        function e(e, t, n) {
            return n ? e | 1 << t : e & ~(1 << t)
        }
        function t(e) {
            var t = e.x.toString() + e.y.toString() + e.z.toString();
            return void 0 !== p[t] ? p[t] : (p[t] = u.length / 3,
            u.push(e.x, e.y, e.z),
            p[t])
        }
        function n(e) {
            var t = e.r.toString() + e.g.toString() + e.b.toString();
            return void 0 !== E[t] ? E[t] : (E[t] = d.length,
            d.push(e.getHex()),
            E[t])
        }
        function r(e) {
            var t = e.x.toString() + e.y.toString();
            return void 0 !== m[t] ? m[t] : (m[t] = f.length / 2,
            f.push(e.x, e.y),
            m[t])
        }
        var i = {
            metadata: {
                version: 4.4,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        if (i.uuid = this.uuid,
        i.type = this.type,
        "" !== this.name && (i.name = this.name),
        void 0 !== this.parameters) {
            var a = this.parameters;
            for (var o in a)
                void 0 !== a[o] && (i[o] = a[o]);
            return i
        }
        for (var s = [], c = 0; c < this.vertices.length; c++) {
            var h = this.vertices[c];
            s.push(h.x, h.y, h.z)
        }
        for (var l = [], u = [], p = {}, d = [], E = {}, f = [], m = {}, c = 0; c < this.faces.length; c++) {
            var g = this.faces[c]
              , v = !0
              , T = !1
              , y = void 0 !== this.faceVertexUvs[0][c]
              , R = g.normal.length() > 0
              , H = g.vertexNormals.length > 0
              , x = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b
              , b = g.vertexColors.length > 0
              , _ = 0;
            if (_ = e(_, 0, 0),
            _ = e(_, 1, v),
            _ = e(_, 2, T),
            _ = e(_, 3, y),
            _ = e(_, 4, R),
            _ = e(_, 5, H),
            _ = e(_, 6, x),
            _ = e(_, 7, b),
            l.push(_),
            l.push(g.a, g.b, g.c),
            l.push(g.materialIndex),
            y) {
                var M = this.faceVertexUvs[0][c];
                l.push(r(M[0]), r(M[1]), r(M[2]))
            }
            if (R && l.push(t(g.normal)),
            H) {
                var w = g.vertexNormals;
                l.push(t(w[0]), t(w[1]), t(w[2]))
            }
            if (x && l.push(n(g.color)),
            b) {
                var S = g.vertexColors;
                l.push(n(S[0]), n(S[1]), n(S[2]))
            }
        }
        return i.data = {},
        i.data.vertices = s,
        i.data.normals = u,
        d.length > 0 && (i.data.colors = d),
        f.length > 0 && (i.data.uvs = [f]),
        i.data.faces = l,
        i
    },
    clone: function() {
        return (new THREE.Geometry).copy(this)
    },
    copy: function(e) {
        this.vertices = [],
        this.faces = [],
        this.faceVertexUvs = [[]];
        for (var t = e.vertices, n = 0, r = t.length; r > n; n++)
            this.vertices.push(t[n].clone());
        for (var i = e.faces, n = 0, r = i.length; r > n; n++)
            this.faces.push(i[n].clone());
        for (var n = 0, r = e.faceVertexUvs.length; r > n; n++) {
            var a = e.faceVertexUvs[n];
            void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []);
            for (var o = 0, s = a.length; s > o; o++) {
                for (var c = a[o], h = [], l = 0, u = c.length; u > l; l++) {
                    var p = c[l];
                    h.push(p.clone())
                }
                this.faceVertexUvs[n].push(h)
            }
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),
THREE.GeometryIdCount = 0,
THREE.DirectGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "DirectGeometry",
    this.indices = [],
    this.vertices = [],
    this.normals = [],
    this.colors = [],
    this.uvs = [],
    this.uvs2 = [],
    this.groups = [],
    this.morphTargets = {},
    this.skinWeights = [],
    this.skinIndices = [],
    this.boundingBox = null ,
    this.boundingSphere = null ,
    this.verticesNeedUpdate = !1,
    this.normalsNeedUpdate = !1,
    this.colorsNeedUpdate = !1,
    this.uvsNeedUpdate = !1,
    this.groupsNeedUpdate = !1
}
,
THREE.DirectGeometry.prototype = {
    constructor: THREE.DirectGeometry,
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function() {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function() {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function(e) {
        for (var t, n, r = [], i = e.faces, a = 0; a < i.length; a++) {
            var o = i[a];
            o.materialIndex !== n && (n = o.materialIndex,
            void 0 !== t && (t.count = 3 * a - t.start,
            r.push(t)),
            t = {
                start: 3 * a,
                materialIndex: n
            })
        }
        void 0 !== t && (t.count = 3 * a - t.start,
        r.push(t)),
        this.groups = r
    },
    fromGeometry: function(e) {
        var t, n = e.faces, r = e.vertices, i = e.faceVertexUvs, a = i[0] && i[0].length > 0, o = i[1] && i[1].length > 0, s = e.morphTargets, c = s.length;
        if (c > 0) {
            t = [];
            for (var h = 0; c > h; h++)
                t[h] = [];
            this.morphTargets.position = t
        }
        var l, u = e.morphNormals, p = u.length;
        if (p > 0) {
            l = [];
            for (var h = 0; p > h; h++)
                l[h] = [];
            this.morphTargets.normal = l
        }
        for (var d = e.skinIndices, E = e.skinWeights, f = d.length === r.length, m = E.length === r.length, h = 0; h < n.length; h++) {
            var g = n[h];
            this.vertices.push(r[g.a], r[g.b], r[g.c]);
            var v = g.vertexNormals;
            if (3 === v.length)
                this.normals.push(v[0], v[1], v[2]);
            else {
                var T = g.normal;
                this.normals.push(T, T, T)
            }
            var y = g.vertexColors;
            if (3 === y.length)
                this.colors.push(y[0], y[1], y[2]);
            else {
                var R = g.color;
                this.colors.push(R, R, R)
            }
            if (a === !0) {
                var H = i[0][h];
                void 0 !== H ? this.uvs.push(H[0], H[1], H[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h),
                this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))
            }
            if (o === !0) {
                var H = i[1][h];
                void 0 !== H ? this.uvs2.push(H[0], H[1], H[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h),
                this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))
            }
            for (var x = 0; c > x; x++) {
                var b = s[x].vertices;
                t[x].push(b[g.a], b[g.b], b[g.c])
            }
            for (var x = 0; p > x; x++) {
                var _ = u[x].vertexNormals[h];
                l[x].push(_.a, _.b, _.c)
            }
            f && this.skinIndices.push(d[g.a], d[g.b], d[g.c]),
            m && this.skinWeights.push(E[g.a], E[g.b], E[g.c])
        }
        return this.computeGroups(e),
        this.verticesNeedUpdate = e.verticesNeedUpdate,
        this.normalsNeedUpdate = e.normalsNeedUpdate,
        this.colorsNeedUpdate = e.colorsNeedUpdate,
        this.uvsNeedUpdate = e.uvsNeedUpdate,
        this.groupsNeedUpdate = e.groupsNeedUpdate,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype),
THREE.BufferGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "BufferGeometry",
    this.index = null ,
    this.attributes = {},
    this.morphAttributes = {},
    this.groups = [],
    this.boundingBox = null ,
    this.boundingSphere = null ,
    this.drawRange = {
        start: 0,
        count: 1 / 0
    }
}
,
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    getIndex: function() {
        return this.index
    },
    setIndex: function(e) {
        this.index = e
    },
    addAttribute: function(e, t) {
        return t instanceof THREE.BufferAttribute == !1 && t instanceof THREE.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
        void this.addAttribute(e, new THREE.BufferAttribute(arguments[1],arguments[2]))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
        void this.setIndex(t)) : (this.attributes[e] = t,
        this)
    },
    getAttribute: function(e) {
        return this.attributes[e]
    },
    removeAttribute: function(e) {
        return delete this.attributes[e],
        this
    },
    addGroup: function(e, t, n) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: void 0 !== n ? n : 0
        })
    },
    clearGroups: function() {
        this.groups = []
    },
    setDrawRange: function(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    },
    applyMatrix: function(e) {
        var t = this.attributes.position;
        void 0 !== t && (e.applyToVector3Array(t.array),
        t.needsUpdate = !0);
        var n = this.attributes.normal;
        if (void 0 !== n) {
            var r = (new THREE.Matrix3).getNormalMatrix(e);
            r.applyToVector3Array(n.array),
            n.needsUpdate = !0
        }
        return null  !== this.boundingBox && this.computeBoundingBox(),
        null  !== this.boundingSphere && this.computeBoundingSphere(),
        this
    },
    rotateX: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationX(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateY: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationY(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateZ: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationZ(t),
            this.applyMatrix(e),
            this
        }
    }(),
    translate: function() {
        var e;
        return function(t, n, r) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeTranslation(t, n, r),
            this.applyMatrix(e),
            this
        }
    }(),
    scale: function() {
        var e;
        return function(t, n, r) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeScale(t, n, r),
            this.applyMatrix(e),
            this
        }
    }(),
    lookAt: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Object3D),
            e.lookAt(t),
            e.updateMatrix(),
            this.applyMatrix(e.matrix)
        }
    }(),
    center: function() {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z),
        e
    },
    setFromObject: function(e) {
        var t = e.geometry;
        if (e instanceof THREE.Points || e instanceof THREE.Line) {
            var n = new THREE.Float32Attribute(3 * t.vertices.length,3)
              , r = new THREE.Float32Attribute(3 * t.colors.length,3);
            if (this.addAttribute("position", n.copyVector3sArray(t.vertices)),
            this.addAttribute("color", r.copyColorsArray(t.colors)),
            t.lineDistances && t.lineDistances.length === t.vertices.length) {
                var i = new THREE.Float32Attribute(t.lineDistances.length,1);
                this.addAttribute("lineDistance", i.copyArray(t.lineDistances))
            }
            null  !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null  !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
        } else
            e instanceof THREE.Mesh && t instanceof THREE.Geometry && this.fromGeometry(t);
        return this
    },
    updateFromObject: function(e) {
        var t = e.geometry;
        if (e instanceof THREE.Mesh) {
            var n = t.__directGeometry;
            if (void 0 === n)
                return this.fromGeometry(t);
            n.verticesNeedUpdate = t.verticesNeedUpdate,
            n.normalsNeedUpdate = t.normalsNeedUpdate,
            n.colorsNeedUpdate = t.colorsNeedUpdate,
            n.uvsNeedUpdate = t.uvsNeedUpdate,
            n.groupsNeedUpdate = t.groupsNeedUpdate,
            t.verticesNeedUpdate = !1,
            t.normalsNeedUpdate = !1,
            t.colorsNeedUpdate = !1,
            t.uvsNeedUpdate = !1,
            t.groupsNeedUpdate = !1,
            t = n
        }
        if (t.verticesNeedUpdate === !0) {
            var r = this.attributes.position;
            void 0 !== r && (r.copyVector3sArray(t.vertices),
            r.needsUpdate = !0),
            t.verticesNeedUpdate = !1
        }
        if (t.normalsNeedUpdate === !0) {
            var r = this.attributes.normal;
            void 0 !== r && (r.copyVector3sArray(t.normals),
            r.needsUpdate = !0),
            t.normalsNeedUpdate = !1
        }
        if (t.colorsNeedUpdate === !0) {
            var r = this.attributes.color;
            void 0 !== r && (r.copyColorsArray(t.colors),
            r.needsUpdate = !0),
            t.colorsNeedUpdate = !1
        }
        if (t.uvsNeedUpdate) {
            var r = this.attributes.uv;
            void 0 !== r && (r.copyVector2sArray(t.uvs),
            r.needsUpdate = !0),
            t.uvsNeedUpdate = !1
        }
        if (t.lineDistancesNeedUpdate) {
            var r = this.attributes.lineDistance;
            void 0 !== r && (r.copyArray(t.lineDistances),
            r.needsUpdate = !0),
            t.lineDistancesNeedUpdate = !1
        }
        return t.groupsNeedUpdate && (t.computeGroups(e.geometry),
        this.groups = t.groups,
        t.groupsNeedUpdate = !1),
        this
    },
    fromGeometry: function(e) {
        return e.__directGeometry = (new THREE.DirectGeometry).fromGeometry(e),
        this.fromDirectGeometry(e.__directGeometry)
    },
    fromDirectGeometry: function(e) {
        var t = new Float32Array(3 * e.vertices.length);
        if (this.addAttribute("position", new THREE.BufferAttribute(t,3).copyVector3sArray(e.vertices)),
        e.normals.length > 0) {
            var n = new Float32Array(3 * e.normals.length);
            this.addAttribute("normal", new THREE.BufferAttribute(n,3).copyVector3sArray(e.normals))
        }
        if (e.colors.length > 0) {
            var r = new Float32Array(3 * e.colors.length);
            this.addAttribute("color", new THREE.BufferAttribute(r,3).copyColorsArray(e.colors))
        }
        if (e.uvs.length > 0) {
            var i = new Float32Array(2 * e.uvs.length);
            this.addAttribute("uv", new THREE.BufferAttribute(i,2).copyVector2sArray(e.uvs))
        }
        if (e.uvs2.length > 0) {
            var a = new Float32Array(2 * e.uvs2.length);
            this.addAttribute("uv2", new THREE.BufferAttribute(a,2).copyVector2sArray(e.uvs2))
        }
        if (e.indices.length > 0) {
            var o = e.vertices.length > 65535 ? Uint32Array : Uint16Array
              , s = new o(3 * e.indices.length);
            this.setIndex(new THREE.BufferAttribute(s,1).copyIndicesArray(e.indices))
        }
        this.groups = e.groups;
        for (var c in e.morphTargets) {
            for (var h = [], l = e.morphTargets[c], u = 0, p = l.length; p > u; u++) {
                var d = l[u]
                  , E = new THREE.Float32Attribute(3 * d.length,3);
                h.push(E.copyVector3sArray(d))
            }
            this.morphAttributes[c] = h
        }
        if (e.skinIndices.length > 0) {
            var f = new THREE.Float32Attribute(4 * e.skinIndices.length,4);
            this.addAttribute("skinIndex", f.copyVector4sArray(e.skinIndices))
        }
        if (e.skinWeights.length > 0) {
            var m = new THREE.Float32Attribute(4 * e.skinWeights.length,4);
            this.addAttribute("skinWeight", m.copyVector4sArray(e.skinWeights))
        }
        return null  !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
        null  !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        this
    },
    computeBoundingBox: function() {
        null  === this.boundingBox && (this.boundingBox = new THREE.Box3);
        var e = this.attributes.position.array;
        void 0 !== e ? this.boundingBox.setFromArray(e) : this.boundingBox.makeEmpty(),
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    },
    computeBoundingSphere: function() {
        var e = new THREE.Box3
          , t = new THREE.Vector3;
        return function() {
            null  === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var n = this.attributes.position.array;
            if (n) {
                var r = this.boundingSphere.center;
                e.setFromArray(n),
                e.center(r);
                for (var i = 0, a = 0, o = n.length; o > a; a += 3)
                    t.fromArray(n, a),
                    i = Math.max(i, r.distanceToSquared(t));
                this.boundingSphere.radius = Math.sqrt(i),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var e = this.index
          , t = this.attributes
          , n = this.groups;
        if (t.position) {
            var r = t.position.array;
            if (void 0 === t.normal)
                this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(r.length),3));
            else
                for (var i = t.normal.array, a = 0, o = i.length; o > a; a++)
                    i[a] = 0;
            var s, c, h, l = t.normal.array, u = new THREE.Vector3, p = new THREE.Vector3, d = new THREE.Vector3, E = new THREE.Vector3, f = new THREE.Vector3;
            if (e) {
                var m = e.array;
                0 === n.length && this.addGroup(0, m.length);
                for (var g = 0, v = n.length; v > g; ++g)
                    for (var T = n[g], y = T.start, R = T.count, a = y, o = y + R; o > a; a += 3)
                        s = 3 * m[a + 0],
                        c = 3 * m[a + 1],
                        h = 3 * m[a + 2],
                        u.fromArray(r, s),
                        p.fromArray(r, c),
                        d.fromArray(r, h),
                        E.subVectors(d, p),
                        f.subVectors(u, p),
                        E.cross(f),
                        l[s] += E.x,
                        l[s + 1] += E.y,
                        l[s + 2] += E.z,
                        l[c] += E.x,
                        l[c + 1] += E.y,
                        l[c + 2] += E.z,
                        l[h] += E.x,
                        l[h + 1] += E.y,
                        l[h + 2] += E.z
            } else
                for (var a = 0, o = r.length; o > a; a += 9)
                    u.fromArray(r, a),
                    p.fromArray(r, a + 3),
                    d.fromArray(r, a + 6),
                    E.subVectors(d, p),
                    f.subVectors(u, p),
                    E.cross(f),
                    l[a] = E.x,
                    l[a + 1] = E.y,
                    l[a + 2] = E.z,
                    l[a + 3] = E.x,
                    l[a + 4] = E.y,
                    l[a + 5] = E.z,
                    l[a + 6] = E.x,
                    l[a + 7] = E.y,
                    l[a + 8] = E.z;
            this.normalizeNormals(),
            t.normal.needsUpdate = !0
        }
    },
    merge: function(e, t) {
        if (e instanceof THREE.BufferGeometry == !1)
            return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
        void 0 === t && (t = 0);
        var n = this.attributes;
        for (var r in n)
            if (void 0 !== e.attributes[r])
                for (var i = n[r], a = i.array, o = e.attributes[r], s = o.array, c = o.itemSize, h = 0, l = c * t; h < s.length; h++,
                l++)
                    a[l] = s[h];
        return this
    },
    normalizeNormals: function() {
        for (var e, t, n, r, i = this.attributes.normal.array, a = 0, o = i.length; o > a; a += 3)
            e = i[a],
            t = i[a + 1],
            n = i[a + 2],
            r = 1 / Math.sqrt(e * e + t * t + n * n),
            i[a] *= r,
            i[a + 1] *= r,
            i[a + 2] *= r
    },
    toNonIndexed: function() {
        if (null  === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
            this;
        var e = new THREE.BufferGeometry
          , t = this.index.array
          , n = this.attributes;
        for (var r in n) {
            for (var i = n[r], a = i.array, o = i.itemSize, s = new a.constructor(t.length * o), c = 0, h = 0, l = 0, u = t.length; u > l; l++) {
                c = t[l] * o;
                for (var p = 0; o > p; p++)
                    s[h++] = a[c++]
            }
            e.addAttribute(r, new THREE.BufferAttribute(s,o))
        }
        return e
    },
    toJSON: function() {
        var e = {
            metadata: {
                version: 4.4,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        "" !== this.name && (e.name = this.name),
        void 0 !== this.parameters) {
            var t = this.parameters;
            for (var n in t)
                void 0 !== t[n] && (e[n] = t[n]);
            return e
        }
        e.data = {
            attributes: {}
        };
        var r = this.index;
        if (null  !== r) {
            var i = Array.prototype.slice.call(r.array);
            e.data.index = {
                type: r.array.constructor.name,
                array: i
            }
        }
        var a = this.attributes;
        for (var n in a) {
            var o = a[n]
              , i = Array.prototype.slice.call(o.array);
            e.data.attributes[n] = {
                itemSize: o.itemSize,
                type: o.array.constructor.name,
                array: i,
                normalized: o.normalized
            }
        }
        var s = this.groups;
        s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
        var c = this.boundingSphere;
        return null  !== c && (e.data.boundingSphere = {
            center: c.center.toArray(),
            radius: c.radius
        }),
        e
    },
    clone: function() {
        return (new THREE.BufferGeometry).copy(this)
    },
    copy: function(e) {
        var t = e.index;
        null  !== t && this.setIndex(t.clone());
        var n = e.attributes;
        for (var r in n) {
            var i = n[r];
            this.addAttribute(r, i.clone())
        }
        for (var a = e.groups, o = 0, s = a.length; s > o; o++) {
            var c = a[o];
            this.addGroup(c.start, c.count, c.materialIndex)
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),
THREE.BufferGeometry.MaxIndex = 65535,
THREE.InstancedBufferGeometry = function() {
    THREE.BufferGeometry.call(this),
    this.type = "InstancedBufferGeometry",
    this.maxInstancedCount = void 0
}
,
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry,
THREE.InstancedBufferGeometry.prototype.addGroup = function(e, t, n) {
    this.groups.push({
        start: e,
        count: t,
        instances: n
    })
}
,
THREE.InstancedBufferGeometry.prototype.copy = function(e) {
    var t = e.index;
    null  !== t && this.setIndex(t.clone());
    var n = e.attributes;
    for (var r in n) {
        var i = n[r];
        this.addAttribute(r, i.clone())
    }
    for (var a = e.groups, o = 0, s = a.length; s > o; o++) {
        var c = a[o];
        this.addGroup(c.start, c.count, c.instances)
    }
    return this
}
,
THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype),
THREE.Uniform = function(e) {
    "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
    e = arguments[1]),
    this.value = e,
    this.dynamic = !1
}
,
THREE.Uniform.prototype = {
    constructor: THREE.Uniform,
    onUpdate: function(e) {
        return this.dynamic = !0,
        this.onUpdateCallback = e,
        this
    }
},
THREE.AnimationClip = function(e, t, n) {
    this.name = e || THREE.Math.generateUUID(),
    this.tracks = n,
    this.duration = void 0 !== t ? t : -1,
    this.duration < 0 && this.resetDuration(),
    this.trim(),
    this.optimize()
}
,
THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip,
    resetDuration: function() {
        for (var e = this.tracks, t = 0, n = 0, r = e.length; n !== r; ++n) {
            var i = this.tracks[n];
            t = Math.max(t, i.times[i.times.length - 1])
        }
        this.duration = t
    },
    trim: function() {
        for (var e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    },
    optimize: function() {
        for (var e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
},
Object.assign(THREE.AnimationClip, {
    parse: function(e) {
        for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i)
            t.push(THREE.KeyframeTrack.parse(n[i]).scale(r));
        return new THREE.AnimationClip(e.name,e.duration,t)
    },
    toJSON: function(e) {
        for (var t = [], n = e.tracks, r = {
            name: e.name,
            duration: e.duration,
            tracks: t
        }, i = 0, a = n.length; i !== a; ++i)
            t.push(THREE.KeyframeTrack.toJSON(n[i]));
        return r
    },
    CreateFromMorphTargetSequence: function(e, t, n, r) {
        for (var i = t.length, a = [], o = 0; i > o; o++) {
            var s = []
              , c = [];
            s.push((o + i - 1) % i, o, (o + 1) % i),
            c.push(0, 1, 0);
            var h = THREE.AnimationUtils.getKeyframeOrder(s);
            s = THREE.AnimationUtils.sortedArray(s, 1, h),
            c = THREE.AnimationUtils.sortedArray(c, 1, h),
            r || 0 !== s[0] || (s.push(i),
            c.push(c[0])),
            a.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + t[o].name + "]",s,c).scale(1 / n))
        }
        return new THREE.AnimationClip(e,-1,a)
    },
    findByName: function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n].name === t)
                return e[n];
        return null 
    },
    CreateClipsFromMorphTargetSequences: function(e, t, n) {
        for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; o > a; a++) {
            var s = e[a]
              , c = s.name.match(i);
            if (c && c.length > 1) {
                var h = c[1]
                  , l = r[h];
                l || (r[h] = l = []),
                l.push(s)
            }
        }
        var u = [];
        for (var h in r)
            u.push(THREE.AnimationClip.CreateFromMorphTargetSequence(h, r[h], t, n));
        return u
    },
    parseAnimation: function(e, t, n) {
        if (!e)
            return console.error("  no animation in JSONLoader data"),
            null ;
        for (var r = function(e, t, n, r, i) {
            if (0 !== n.length) {
                var a = []
                  , o = [];
                THREE.AnimationUtils.flattenJSON(n, a, o, r),
                0 !== a.length && i.push(new e(t,a,o))
            }
        }
        , i = [], a = e.name || "default", o = e.length || -1, s = e.fps || 30, c = e.hierarchy || [], h = 0; h < c.length; h++) {
            var l = c[h].keys;
            if (l && 0 != l.length)
                if (l[0].morphTargets) {
                    for (var u = {}, p = 0; p < l.length; p++)
                        if (l[p].morphTargets)
                            for (var d = 0; d < l[p].morphTargets.length; d++)
                                u[l[p].morphTargets[d]] = -1;
                    for (var E in u) {
                        for (var f = [], m = [], d = 0; d !== l[p].morphTargets.length; ++d) {
                            var g = l[p];
                            f.push(g.time),
                            m.push(g.morphTarget === E ? 1 : 0)
                        }
                        i.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + E + "]",f,m))
                    }
                    o = u.length * (s || 1)
                } else {
                    var v = ".bones[" + t[h].name + "]";
                    r(THREE.VectorKeyframeTrack, v + ".position", l, "pos", i),
                    r(THREE.QuaternionKeyframeTrack, v + ".quaternion", l, "rot", i),
                    r(THREE.VectorKeyframeTrack, v + ".scale", l, "scl", i)
                }
        }
        if (0 === i.length)
            return null ;
        var T = new THREE.AnimationClip(a,o,i);
        return T
    }
}),
THREE.AnimationMixer = function(e) {
    this._root = e,
    this._initMemoryManager(),
    this._accuIndex = 0,
    this.time = 0,
    this.timeScale = 1
}
,
THREE.AnimationMixer.prototype = {
    constructor: THREE.AnimationMixer,
    clipAction: function(e, t) {
        var n, r = t || this._root, i = r.uuid, a = "string" == typeof e ? e : e.name, o = e !== a ? e : null , s = this._actionsByClip[a];
        if (void 0 !== s) {
            var c = s.actionByRoot[i];
            if (void 0 !== c)
                return c;
            if (n = s.knownActions[0],
            o = n._clip,
            e !== a && e !== o)
                throw new Error("Different clips with the same name detected!")
        }
        if (null  === o)
            return null ;
        var h = new THREE.AnimationMixer._Action(this,o,t);
        return this._bindAction(h, n),
        this._addInactiveAction(h, a, i),
        h
    },
    existingAction: function(e, t) {
        var n = t || this._root
          , r = n.uuid
          , i = "string" == typeof e ? e : e.name
          , a = this._actionsByClip[i];
        return void 0 !== a ? a.actionByRoot[r] || null  : null 
    },
    stopAllAction: function() {
        var e = this._actions
          , t = this._nActiveActions
          , n = this._bindings
          , r = this._nActiveBindings;
        this._nActiveActions = 0,
        this._nActiveBindings = 0;
        for (var i = 0; i !== t; ++i)
            e[i].reset();
        for (var i = 0; i !== r; ++i)
            n[i].useCount = 0;
        return this
    },
    update: function(e) {
        e *= this.timeScale;
        for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
            var s = t[o];
            s.enabled && s._update(r, e, i, a)
        }
        for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o)
            c[o].apply(a);
        return this
    },
    getRoot: function() {
        return this._root
    },
    uncacheClip: function(e) {
        var t = this._actions
          , n = e.name
          , r = this._actionsByClip
          , i = r[n];
        if (void 0 !== i) {
            for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
                var c = a[o];
                this._deactivateAction(c);
                var h = c._cacheIndex
                  , l = t[t.length - 1];
                c._cacheIndex = null ,
                c._byClipCacheIndex = null ,
                l._cacheIndex = h,
                t[h] = l,
                t.pop(),
                this._removeInactiveBindingsForAction(c)
            }
            delete r[n]
        }
    },
    uncacheRoot: function(e) {
        var t = e.uuid
          , n = this._actionsByClip;
        for (var r in n) {
            var i = n[r].actionByRoot
              , a = i[t];
            void 0 !== a && (this._deactivateAction(a),
            this._removeInactiveAction(a));
        }
        var o = this._bindingsByRootAndName
          , s = o[t];
        if (void 0 !== s)
            for (var c in s) {
                var h = s[c];
                h.restoreOriginalState(),
                this._removeInactiveBinding(h)
            }
    },
    uncacheAction: function(e, t) {
        var n = this.existingAction(e, t);
        null  !== n && (this._deactivateAction(n),
        this._removeInactiveAction(n))
    }
},
THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype),
THREE.AnimationMixer._Action = function(e, t, n) {
    this._mixer = e,
    this._clip = t,
    this._localRoot = n || null ;
    for (var r = t.tracks, i = r.length, a = new Array(i), o = {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    }, s = 0; s !== i; ++s) {
        var c = r[s].createInterpolant(null );
        a[s] = c,
        c.settings = o
    }
    this._interpolantSettings = o,
    this._interpolants = a,
    this._propertyBindings = new Array(i),
    this._cacheIndex = null ,
    this._byClipCacheIndex = null ,
    this._timeScaleInterpolant = null ,
    this._weightInterpolant = null ,
    this.loop = THREE.LoopRepeat,
    this._loopCount = -1,
    this._startTime = null ,
    this.time = 0,
    this.timeScale = 1,
    this._effectiveTimeScale = 1,
    this.weight = 1,
    this._effectiveWeight = 1,
    this.repetitions = 1 / 0,
    this.paused = !1,
    this.enabled = !0,
    this.clampWhenFinished = !1,
    this.zeroSlopeAtStart = !0,
    this.zeroSlopeAtEnd = !0
}
,
THREE.AnimationMixer._Action.prototype = {
    constructor: THREE.AnimationMixer._Action,
    play: function() {
        return this._mixer._activateAction(this),
        this
    },
    stop: function() {
        return this._mixer._deactivateAction(this),
        this.reset()
    },
    reset: function() {
        return this.paused = !1,
        this.enabled = !0,
        this.time = 0,
        this._loopCount = -1,
        this._startTime = null ,
        this.stopFading().stopWarping()
    },
    isRunning: function() {
        this._startTime;
        return this.enabled && !this.paused && 0 !== this.timeScale && null  === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
        return this._mixer._isActiveAction(this)
    },
    startAt: function(e) {
        return this._startTime = e,
        this
    },
    setLoop: function(e, t) {
        return this.loop = e,
        this.repetitions = t,
        this
    },
    setEffectiveWeight: function(e) {
        return this.weight = e,
        this._effectiveWeight = this.enabled ? e : 0,
        this.stopFading()
    },
    getEffectiveWeight: function() {
        return this._effectiveWeight
    },
    fadeIn: function(e) {
        return this._scheduleFading(e, 0, 1)
    },
    fadeOut: function(e) {
        return this._scheduleFading(e, 1, 0)
    },
    crossFadeFrom: function(e, t, n) {
        this._mixer;
        if (e.fadeOut(t),
        this.fadeIn(t),
        n) {
            var r = this._clip.duration
              , i = e._clip.duration
              , a = i / r
              , o = r / i;
            e.warp(1, a, t),
            this.warp(o, 1, t)
        }
        return this
    },
    crossFadeTo: function(e, t, n) {
        return e.crossFadeFrom(this, t, n)
    },
    stopFading: function() {
        var e = this._weightInterpolant;
        return null  !== e && (this._weightInterpolant = null ,
        this._mixer._takeBackControlInterpolant(e)),
        this
    },
    setEffectiveTimeScale: function(e) {
        return this.timeScale = e,
        this._effectiveTimeScale = this.paused ? 0 : e,
        this.stopWarping()
    },
    getEffectiveTimeScale: function() {
        return this._effectiveTimeScale
    },
    setDuration: function(e) {
        return this.timeScale = this._clip.duration / e,
        this.stopWarping()
    },
    syncWith: function(e) {
        return this.time = e.time,
        this.timeScale = e.timeScale,
        this.stopWarping()
    },
    halt: function(e) {
        return this.warp(this._currentTimeScale, 0, e)
    },
    warp: function(e, t, n) {
        var r = this._mixer
          , i = r.time
          , a = this._timeScaleInterpolant
          , o = this.timeScale;
        null  === a && (a = r._lendControlInterpolant(),
        this._timeScaleInterpolant = a);
        var s = a.parameterPositions
          , c = a.sampleValues;
        return s[0] = i,
        s[1] = i + n,
        c[0] = e / o,
        c[1] = t / o,
        this
    },
    stopWarping: function() {
        var e = this._timeScaleInterpolant;
        return null  !== e && (this._timeScaleInterpolant = null ,
        this._mixer._takeBackControlInterpolant(e)),
        this
    },
    getMixer: function() {
        return this._mixer
    },
    getClip: function() {
        return this._clip
    },
    getRoot: function() {
        return this._localRoot || this._mixer._root
    },
    _update: function(e, t, n, r) {
        var i = this._startTime;
        if (null  !== i) {
            var a = (e - i) * n;
            if (0 > a || 0 === n)
                return;
            this._startTime = null ,
            t = n * a
        }
        t *= this._updateTimeScale(e);
        var o = this._updateTime(t)
          , s = this._updateWeight(e);
        if (s > 0)
            for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l)
                c[l].evaluate(o),
                h[l].accumulate(r, s)
    },
    _updateWeight: function(e) {
        var t = 0;
        if (this.enabled) {
            t = this.weight;
            var n = this._weightInterpolant;
            if (null  !== n) {
                var r = n.evaluate(e)[0];
                t *= r,
                e > n.parameterPositions[1] && (this.stopFading(),
                0 === r && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = t,
        t
    },
    _updateTimeScale: function(e) {
        var t = 0;
        if (!this.paused) {
            t = this.timeScale;
            var n = this._timeScaleInterpolant;
            if (null  !== n) {
                var r = n.evaluate(e)[0];
                t *= r,
                e > n.parameterPositions[1] && (this.stopWarping(),
                0 === t ? this.pause = !0 : this.timeScale = t)
            }
        }
        return this._effectiveTimeScale = t,
        t
    },
    _updateTime: function(e) {
        var t = this.time + e;
        if (0 === e)
            return t;
        var n = this._clip.duration
          , r = this.loop
          , i = this._loopCount
          , a = !1;
        switch (r) {
        case THREE.LoopOnce:
            if (-1 === i && (this.loopCount = 0,
            this._setEndings(!0, !0, !1)),
            t >= n)
                t = n;
            else {
                if (!(0 > t))
                    break;
                t = 0
            }
            this.clampWhenFinished ? this.pause = !0 : this.enabled = !1,
            this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: 0 > e ? -1 : 1
            });
            break;
        case THREE.LoopPingPong:
            a = !0;
        case THREE.LoopRepeat:
            if (-1 === i && (e > 0 ? (i = 0,
            this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
            t >= n || 0 > t) {
                var o = Math.floor(t / n);
                t -= n * o,
                i += Math.abs(o);
                var s = this.repetitions - i;
                if (0 > s) {
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    t = e > 0 ? n : 0,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: e > 0 ? 1 : -1
                    });
                    break
                }
                if (0 === s) {
                    var c = 0 > e;
                    this._setEndings(c, !c, a)
                } else
                    this._setEndings(!1, !1, a);
                this._loopCount = i,
                this._mixer.dispatchEvent({
                    type: "loop",
                    action: this,
                    loopDelta: o
                })
            }
            if (r === THREE.LoopPingPong && 1 === (1 & i))
                return this.time = t,
                n - t
        }
        return this.time = t,
        t
    },
    _setEndings: function(e, t, n) {
        var r = this._interpolantSettings;
        n ? (r.endingStart = THREE.ZeroSlopeEnding,
        r.endingEnd = THREE.ZeroSlopeEnding) : (e ? r.endingStart = this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : r.endingStart = THREE.WrapAroundEnding,
        t ? r.endingEnd = this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : r.endingEnd = THREE.WrapAroundEnding)
    },
    _scheduleFading: function(e, t, n) {
        var r = this._mixer
          , i = r.time
          , a = this._weightInterpolant;
        null  === a && (a = r._lendControlInterpolant(),
        this._weightInterpolant = a);
        var o = a.parameterPositions
          , s = a.sampleValues;
        return o[0] = i,
        s[0] = t,
        o[1] = i + e,
        s[1] = n,
        this
    }
},
Object.assign(THREE.AnimationMixer.prototype, {
    _bindAction: function(e, t) {
        var n = e._localRoot || this._root
          , r = e._clip.tracks
          , i = r.length
          , a = e._propertyBindings
          , o = e._interpolants
          , s = n.uuid
          , c = this._bindingsByRootAndName
          , h = c[s];
        void 0 === h && (h = {},
        c[s] = h);
        for (var l = 0; l !== i; ++l) {
            var u = r[l]
              , p = u.name
              , d = h[p];
            if (void 0 !== d)
                a[l] = d;
            else {
                if (d = a[l],
                void 0 !== d) {
                    null  === d._cacheIndex && (++d.referenceCount,
                    this._addInactiveBinding(d, s, p));
                    continue
                }
                var E = t && t._propertyBindings[l].binding.parsedPath;
                d = new THREE.PropertyMixer(THREE.PropertyBinding.create(n, p, E),u.ValueTypeName,u.getValueSize()),
                ++d.referenceCount,
                this._addInactiveBinding(d, s, p),
                a[l] = d
            }
            o[l].resultBuffer = d.buffer
        }
    },
    _activateAction: function(e) {
        if (!this._isActiveAction(e)) {
            if (null  === e._cacheIndex) {
                var t = (e._localRoot || this._root).uuid
                  , n = e._clip.name
                  , r = this._actionsByClip[n];
                this._bindAction(e, r && r.knownActions[0]),
                this._addInactiveAction(e, n, t)
            }
            for (var i = e._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
                var s = i[a];
                0 === s.useCount++ && (this._lendBinding(s),
                s.saveOriginalState())
            }
            this._lendAction(e)
        }
    },
    _deactivateAction: function(e) {
        if (this._isActiveAction(e)) {
            for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
                var i = t[n];
                0 === --i.useCount && (i.restoreOriginalState(),
                this._takeBackBinding(i))
            }
            this._takeBackAction(e)
        }
    },
    _initMemoryManager: function() {
        this._actions = [],
        this._nActiveActions = 0,
        this._actionsByClip = {},
        this._bindings = [],
        this._nActiveBindings = 0,
        this._bindingsByRootAndName = {},
        this._controlInterpolants = [],
        this._nActiveControlInterpolants = 0;
        var e = this;
        this.stats = {
            actions: {
                get total() {
                    return e._actions.length
                },
                get inUse() {
                    return e._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return e._bindings.length
                },
                get inUse() {
                    return e._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return e._controlInterpolants.length
                },
                get inUse() {
                    return e._nActiveControlInterpolants
                }
            }
        }
    },
    _isActiveAction: function(e) {
        var t = e._cacheIndex;
        return null  !== t && t < this._nActiveActions
    },
    _addInactiveAction: function(e, t, n) {
        var r = this._actions
          , i = this._actionsByClip
          , a = i[t];
        if (void 0 === a)
            a = {
                knownActions: [e],
                actionByRoot: {}
            },
            e._byClipCacheIndex = 0,
            i[t] = a;
        else {
            var o = a.knownActions;
            e._byClipCacheIndex = o.length,
            o.push(e)
        }
        e._cacheIndex = r.length,
        r.push(e),
        a.actionByRoot[n] = e
    },
    _removeInactiveAction: function(e) {
        var t = this._actions
          , n = t[t.length - 1]
          , r = e._cacheIndex;
        n._cacheIndex = r,
        t[r] = n,
        t.pop(),
        e._cacheIndex = null ;
        var i = e._clip.name
          , a = this._actionsByClip
          , o = a[i]
          , s = o.knownActions
          , c = s[s.length - 1]
          , h = e._byClipCacheIndex;
        c._byClipCacheIndex = h,
        s[h] = c,
        s.pop(),
        e._byClipCacheIndex = null ;
        var l = o.actionByRoot
          , u = (t._localRoot || this._root).uuid;
        delete l[u],
        0 === s.length && delete a[i],
        this._removeInactiveBindingsForAction(e)
    },
    _removeInactiveBindingsForAction: function(e) {
        for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
            var i = t[n];
            0 === --i.referenceCount && this._removeInactiveBinding(i)
        }
    },
    _lendAction: function(e) {
        var t = this._actions
          , n = e._cacheIndex
          , r = this._nActiveActions++
          , i = t[r];
        e._cacheIndex = r,
        t[r] = e,
        i._cacheIndex = n,
        t[n] = i
    },
    _takeBackAction: function(e) {
        var t = this._actions
          , n = e._cacheIndex
          , r = --this._nActiveActions
          , i = t[r];
        e._cacheIndex = r,
        t[r] = e,
        i._cacheIndex = n,
        t[n] = i
    },
    _addInactiveBinding: function(e, t, n) {
        var r = this._bindingsByRootAndName
          , i = r[t]
          , a = this._bindings;
        void 0 === i && (i = {},
        r[t] = i),
        i[n] = e,
        e._cacheIndex = a.length,
        a.push(e)
    },
    _removeInactiveBinding: function(e) {
        var t = this._bindings
          , n = e.binding
          , r = n.rootNode.uuid
          , i = n.path
          , a = this._bindingsByRootAndName
          , o = a[r]
          , s = t[t.length - 1]
          , c = e._cacheIndex;
        s._cacheIndex = c,
        t[c] = s,
        t.pop(),
        delete o[i];
        e: {
            for (var h in o)
                break e;
            delete a[r]
        }
    },
    _lendBinding: function(e) {
        var t = this._bindings
          , n = e._cacheIndex
          , r = this._nActiveBindings++
          , i = t[r];
        e._cacheIndex = r,
        t[r] = e,
        i._cacheIndex = n,
        t[n] = i
    },
    _takeBackBinding: function(e) {
        var t = this._bindings
          , n = e._cacheIndex
          , r = --this._nActiveBindings
          , i = t[r];
        e._cacheIndex = r,
        t[r] = e,
        i._cacheIndex = n,
        t[n] = i
    },
    _lendControlInterpolant: function() {
        var e = this._controlInterpolants
          , t = this._nActiveControlInterpolants++
          , n = e[t];
        return void 0 === n && (n = new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
        n.__cacheIndex = t,
        e[t] = n),
        n
    },
    _takeBackControlInterpolant: function(e) {
        var t = this._controlInterpolants
          , n = e.__cacheIndex
          , r = --this._nActiveControlInterpolants
          , i = t[r];
        e.__cacheIndex = r,
        t[r] = e,
        i.__cacheIndex = n,
        t[n] = i
    },
    _controlInterpolantsResultBuffer: new Float32Array(1)
}),
THREE.AnimationObjectGroup = function(e) {
    this.uuid = THREE.Math.generateUUID(),
    this._objects = Array.prototype.slice.call(arguments),
    this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for (var n = 0, r = arguments.length; n !== r; ++n)
        t[arguments[n].uuid] = n;
    this._paths = [],
    this._parsedPaths = [],
    this._bindings = [],
    this._bindingsIndicesByPath = {};
    var i = this;
    this.stats = {
        objects: {
            get total() {
                return i._objects.length
            },
            get inUse() {
                return this.total - i.nCachedObjects_
            }
        },
        get bindingsPerObject() {
            return i._bindings.length
        }
    }
}
,
THREE.AnimationObjectGroup.prototype = {
    constructor: THREE.AnimationObjectGroup,
    add: function(e) {
        for (var t = this._objects, n = t.length, r = this.nCachedObjects_, i = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
            var u = arguments[h]
              , p = u.uuid
              , d = i[p];
            if (void 0 === d) {
                d = n++,
                i[p] = d,
                t.push(u);
                for (var E = 0, f = c; E !== f; ++E)
                    s[E].push(new THREE.PropertyBinding(u,a[E],o[E]))
            } else if (r > d) {
                var m = t[d]
                  , g = --r
                  , v = t[g];
                i[v.uuid] = d,
                t[d] = v,
                i[p] = g,
                t[g] = u;
                for (var E = 0, f = c; E !== f; ++E) {
                    var T = s[E]
                      , y = T[g]
                      , R = T[d];
                    T[d] = y,
                    void 0 === R && (R = new THREE.PropertyBinding(u,a[E],o[E])),
                    T[g] = R
                }
            } else
                t[d] !== m && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
        }
        this.nCachedObjects_ = r
    },
    remove: function(e) {
        for (var t = this._objects, n = (t.length,
        this.nCachedObjects_), r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
            var c = arguments[o]
              , h = c.uuid
              , l = r[h];
            if (void 0 !== l && l >= n) {
                var u = n++
                  , p = t[u];
                r[p.uuid] = l,
                t[l] = p,
                r[h] = u,
                t[u] = c;
                for (var d = 0, E = a; d !== E; ++d) {
                    var f = i[d]
                      , m = f[u]
                      , g = f[l];
                    f[l] = m,
                    f[u] = g
                }
            }
        }
        this.nCachedObjects_ = n
    },
    uncache: function(e) {
        for (var t = this._objects, n = t.length, r = this.nCachedObjects_, i = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
            var h = arguments[s]
              , l = h.uuid
              , u = i[l];
            if (void 0 !== u)
                if (delete i[l],
                r > u) {
                    var p = --r
                      , d = t[p]
                      , E = --n
                      , f = t[E];
                    i[d.uuid] = u,
                    t[u] = d,
                    i[f.uuid] = p,
                    t[p] = f,
                    t.pop();
                    for (var m = 0, g = o; m !== g; ++m) {
                        var v = a[m]
                          , T = v[p]
                          , y = v[E];
                        v[u] = T,
                        v[p] = y,
                        v.pop()
                    }
                } else {
                    var E = --n
                      , f = t[E];
                    i[f.uuid] = u,
                    t[u] = f,
                    t.pop();
                    for (var m = 0, g = o; m !== g; ++m) {
                        var v = a[m];
                        v[u] = v[E],
                        v.pop()
                    }
                }
        }
        this.nCachedObjects_ = r
    },
    subscribe_: function(e, t) {
        var n = this._bindingsIndicesByPath
          , r = n[e]
          , i = this._bindings;
        if (void 0 !== r)
            return i[r];
        var a = this._paths
          , o = this._parsedPaths
          , s = this._objects
          , c = s.length
          , h = this.nCachedObjects_
          , l = new Array(c);
        r = i.length,
        n[e] = r,
        a.push(e),
        o.push(t),
        i.push(l);
        for (var u = h, p = s.length; u !== p; ++u) {
            var d = s[u];
            l[u] = new THREE.PropertyBinding(d,e,t)
        }
        return l
    },
    unsubscribe_: function(e) {
        var t = this._bindingsIndicesByPath
          , n = t[e];
        if (void 0 !== n) {
            var r = this._paths
              , i = this._parsedPaths
              , a = this._bindings
              , o = a.length - 1
              , s = a[o]
              , c = e[o];
            t[c] = n,
            a[n] = s,
            a.pop(),
            i[n] = i[o],
            i.pop(),
            r[n] = r[o],
            r.pop()
        }
    }
},
THREE.AnimationUtils = {
    arraySlice: function(e, t, n) {
        return THREE.AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(t, n)) : e.slice(t, n)
    },
    convertArray: function(e, t, n) {
        return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
    },
    isTypedArray: function(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView)
    },
    getKeyframeOrder: function(e) {
        function t(t, n) {
            return e[t] - e[n]
        }
        for (var n = e.length, r = new Array(n), i = 0; i !== n; ++i)
            r[i] = i;
        return r.sort(t),
        r
    },
    sortedArray: function(e, t, n) {
        for (var r = e.length, i = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
            for (var s = n[a] * t, c = 0; c !== t; ++c)
                i[o++] = e[s + c];
        return i
    },
    flattenJSON: function(e, t, n, r) {
        for (var i = 1, a = e[0]; void 0 !== a && void 0 === a[r]; )
            a = e[i++];
        if (void 0 !== a) {
            var o = a[r];
            if (void 0 !== o)
                if (Array.isArray(o)) {
                    do
                        o = a[r],
                        void 0 !== o && (t.push(a.time),
                        n.push.apply(n, o)),
                        a = e[i++];
                    while (void 0 !== a)
                } else if (void 0 !== o.toArray) {
                    do
                        o = a[r],
                        void 0 !== o && (t.push(a.time),
                        o.toArray(n, n.length)),
                        a = e[i++];
                    while (void 0 !== a)
                } else
                    do
                        o = a[r],
                        void 0 !== o && (t.push(a.time),
                        n.push(o)),
                        a = e[i++];
                    while (void 0 !== a)
        }
    }
},
THREE.KeyframeTrack = function(e, t, n, r) {
    if (void 0 === e)
        throw new Error("track name is undefined");
    if (void 0 === t || 0 === t.length)
        throw new Error("no keyframes in track named " + e);
    this.name = e,
    this.times = THREE.AnimationUtils.convertArray(t, this.TimeBufferType),
    this.values = THREE.AnimationUtils.convertArray(n, this.ValueBufferType),
    this.setInterpolation(r || this.DefaultInterpolation),
    this.validate(),
    this.optimize()
}
,
THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodDiscrete: function(e) {
        return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    InterpolantFactoryMethodLinear: function(e) {
        return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    InterpolantFactoryMethodSmooth: function(e) {
        return new THREE.CubicInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    setInterpolation: function(e) {
        var t = void 0;
        switch (e) {
        case THREE.InterpolateDiscrete:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case THREE.InterpolateLinear:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case THREE.InterpolateSmooth:
            t = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === t) {
            var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (e === this.DefaultInterpolation)
                    throw new Error(n);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return void console.warn(n)
        }
        this.createInterpolant = t
    },
    getInterpolation: function() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return THREE.InterpolateDiscrete;
        case this.InterpolantFactoryMethodLinear:
            return THREE.InterpolateLinear;
        case this.InterpolantFactoryMethodSmooth:
            return THREE.InterpolateSmooth
        }
    },
    getValueSize: function() {
        return this.values.length / this.times.length
    },
    shift: function(e) {
        if (0 !== e)
            for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
                t[n] += e;
        return this
    },
    scale: function(e) {
        if (1 !== e)
            for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
                t[n] *= e;
        return this
    },
    trim: function(e, t) {
        for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e; )
            ++i;
        for (; -1 !== a && n[a] > t; )
            --a;
        if (++a,
        0 !== i || a !== r) {
            i >= a && (a = Math.max(a, 1),
            i = a - 1);
            var o = this.getValueSize();
            this.times = THREE.AnimationUtils.arraySlice(n, i, a),
            this.values = THREE.AnimationUtils.arraySlice(this.values, i * o, a * o)
        }
        return this
    },
    validate: function() {
        var e = !0
          , t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("invalid value size in track", this),
        e = !1);
        var n = this.times
          , r = this.values
          , i = n.length;
        0 === i && (console.error("track is empty", this),
        e = !1);
        for (var a = null , o = 0; o !== i; o++) {
            var s = n[o];
            if ("number" == typeof s && isNaN(s)) {
                console.error("time is not a valid number", this, o, s),
                e = !1;
                break
            }
            if (null  !== a && a > s) {
                console.error("out of order keys", this, o, s, a),
                e = !1;
                break
            }
            a = s
        }
        if (void 0 !== r && THREE.AnimationUtils.isTypedArray(r))
            for (var o = 0, c = r.length; o !== c; ++o) {
                var h = r[o];
                if (isNaN(h)) {
                    console.error("value is not a valid number", this, o, h),
                    e = !1;
                    break
                }
            }
        return e
    },
    optimize: function() {
        for (var e = this.times, t = this.values, n = this.getValueSize(), r = 1, i = 1, a = e.length - 1; a >= i; ++i) {
            var o = !1
              , s = e[i]
              , c = e[i + 1];
            if (s !== c && (1 !== i || s !== s[0]))
                for (var h = i * n, l = h - n, u = h + n, p = 0; p !== n; ++p) {
                    var d = t[h + p];
                    if (d !== t[l + p] || d !== t[u + p]) {
                        o = !0;
                        break
                    }
                }
            if (o) {
                if (i !== r) {
                    e[r] = e[i];
                    for (var E = i * n, f = r * n, p = 0; p !== n; ++p)
                        t[f + p] = t[E + p]
                }
                ++r
            }
        }
        return r !== e.length && (this.times = THREE.AnimationUtils.arraySlice(e, 0, r),
        this.values = THREE.AnimationUtils.arraySlice(t, 0, r * n)),
        this
    }
},
Object.assign(THREE.KeyframeTrack, {
    parse: function(e) {
        if (void 0 === e.type)
            throw new Error("track type undefined, can not parse");
        var t = THREE.KeyframeTrack._getTrackTypeForValueTypeName(e.type);
        if (void 0 === e.times) {
            console.warn("legacy JSON format detected, converting");
            var n = []
              , r = [];
            THREE.AnimationUtils.flattenJSON(e.keys, n, r, "value"),
            e.times = n,
            e.values = r
        }
        return void 0 !== t.parse ? t.parse(e) : new t(e.name,e.times,e.values,e.interpolation)
    },
    toJSON: function(e) {
        var t, n = e.constructor;
        if (void 0 !== n.toJSON)
            t = n.toJSON(e);
        else {
            t = {
                name: e.name,
                times: THREE.AnimationUtils.convertArray(e.times, Array),
                values: THREE.AnimationUtils.convertArray(e.values, Array)
            };
            var r = e.getInterpolation();
            r !== e.DefaultInterpolation && (t.interpolation = r)
        }
        return t.type = e.ValueTypeName,
        t
    },
    _getTrackTypeForValueTypeName: function(e) {
        switch (e.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return THREE.NumberKeyframeTrack;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return THREE.VectorKeyframeTrack;
        case "color":
            return THREE.ColorKeyframeTrack;
        case "quaternion":
            return THREE.QuaternionKeyframeTrack;
        case "bool":
        case "boolean":
            return THREE.BooleanKeyframeTrack;
        case "string":
            return THREE.StringKeyframeTrack
        }
        throw new Error("Unsupported typeName: " + e)
    }
}),
THREE.PropertyBinding = function(e, t, n) {
    this.path = t,
    this.parsedPath = n || THREE.PropertyBinding.parseTrackName(t),
    this.node = THREE.PropertyBinding.findNode(e, this.parsedPath.nodeName) || e,
    this.rootNode = e
}
,
THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding,
    getValue: function(e, t) {
        this.bind(),
        this.getValue(e, t)
    },
    setValue: function(e, t) {
        this.bind(),
        this.setValue(e, t)
    },
    bind: function() {
        var e = this.node
          , t = this.parsedPath
          , n = t.objectName
          , r = t.propertyName
          , i = t.propertyIndex;
        if (e || (e = THREE.PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode,
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !e)
            return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
        if (n) {
            var a = t.objectIndex;
            switch (n) {
            case "materials":
                if (!e.material)
                    return void console.error("  can not bind to material as node does not have a material", this);
                if (!e.material.materials)
                    return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton)
                    return void console.error("  can not bind to bones as node does not have a skeleton", this);
                e = e.skeleton.bones;
                for (var o = 0; o < e.length; o++)
                    if (e[o].name === a) {
                        a = o;
                        break
                    }
                break;
            default:
                if (void 0 === e[n])
                    return void console.error("  can not bind to objectName of node, undefined", this);
                e = e[n]
            }
            if (void 0 !== a) {
                if (void 0 === e[a])
                    return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                e = e[a]
            }
        }
        var s = e[r];
        if (!s) {
            var c = t.nodeName;
            return void console.error("  trying to update property for track: " + c + "." + r + " but it wasn't found.", e)
        }
        var h = this.Versioning.None;
        void 0 !== e.needsUpdate ? (h = this.Versioning.NeedsUpdate,
        this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate,
        this.targetObject = e);
        var l = this.BindingType.Direct;
        if (void 0 !== i) {
            if ("morphTargetInfluences" === r) {
                if (!e.geometry)
                    return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                if (!e.geometry.morphTargets)
                    return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
                    if (e.geometry.morphTargets[o].name === i) {
                        i = o;
                        break
                    }
            }
            l = this.BindingType.ArrayElement,
            this.resolvedProperty = s,
            this.propertyIndex = i
        } else
            void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray,
            this.resolvedProperty = s) : void 0 !== s.length ? (l = this.BindingType.EntireArray,
            this.resolvedProperty = s) : this.propertyName = r;
        this.getValue = this.GetterByBindingType[l],
        this.setValue = this.SetterByBindingTypeAndVersioning[l][h]
    },
    unbind: function() {
        this.node = null ,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
},
Object.assign(THREE.PropertyBinding.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    _getValue_unbound: THREE.PropertyBinding.prototype.getValue,
    _setValue_unbound: THREE.PropertyBinding.prototype.setValue,
    BindingType: {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    },
    Versioning: {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(e, t) {
        e[t] = this.node[this.propertyName]
    }
    , function(e, t) {
        for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
            e[t++] = n[r]
    }
    , function(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    , function(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    ],
    SetterByBindingTypeAndVersioning: [[function(e, t) {
        this.node[this.propertyName] = e[t]
    }
    , function(e, t) {
        this.node[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        this.node[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(e, t) {
        for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
            n[r] = e[t++]
    }
    , function(e, t) {
        for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
            n[r] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
            n[r] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    , function(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    , function(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ]]
}),
THREE.PropertyBinding.Composite = function(e, t, n) {
    var r = n || THREE.PropertyBinding.parseTrackName(t);
    this._targetGroup = e,
    this._bindings = e.subscribe_(t, r)
}
,
THREE.PropertyBinding.Composite.prototype = {
    constructor: THREE.PropertyBinding.Composite,
    getValue: function(e, t) {
        this.bind();
        var n = this._targetGroup.nCachedObjects_
          , r = this._bindings[n];
        void 0 !== r && r.getValue(e, t)
    },
    setValue: function(e, t) {
        for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
            n[r].setValue(e, t)
    },
    bind: function() {
        for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    },
    unbind: function() {
        for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
},
THREE.PropertyBinding.create = function(e, t, n) {
    return e instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(e,t,n) : new THREE.PropertyBinding(e,t,n)
}
,
THREE.PropertyBinding.parseTrackName = function(e) {
    var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/
      , n = t.exec(e);
    if (!n)
        throw new Error("cannot parse trackName at all: " + e);
    n.index === t.lastIndex && t.lastIndex++;
    var r = {
        nodeName: n[3],
        objectName: n[5],
        objectIndex: n[7],
        propertyName: n[9],
        propertyIndex: n[11]
    };
    if (null  === r.propertyName || 0 === r.propertyName.length)
        throw new Error("can not parse propertyName from trackName: " + e);
    return r
}
,
THREE.PropertyBinding.findNode = function(e, t) {
    if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
        return e;
    if (e.skeleton) {
        var n = function(e) {
            for (var n = 0; n < e.bones.length; n++) {
                var r = e.bones[n];
                if (r.name === t)
                    return r
            }
            return null 
        }
          , r = n(e.skeleton);
        if (r)
            return r
    }
    if (e.children) {
        var i = function(e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.name === t || r.uuid === t)
                    return r;
                var a = i(r.children);
                if (a)
                    return a
            }
            return null 
        }
          , a = i(e.children);
        if (a)
            return a
    }
    return null 
}
,
THREE.PropertyMixer = function(e, t, n) {
    this.binding = e,
    this.valueSize = n;
    var r, i = Float64Array;
    switch (t) {
    case "quaternion":
        r = this._slerp;
        break;
    case "string":
    case "bool":
        i = Array,
        r = this._select;
        break;
    default:
        r = this._lerp
    }
    this.buffer = new i(4 * n),
    this._mixBufferRegion = r,
    this.cumulativeWeight = 0,
    this.useCount = 0,
    this.referenceCount = 0
}
,
THREE.PropertyMixer.prototype = {
    constructor: THREE.PropertyMixer,
    accumulate: function(e, t) {
        var n = this.buffer
          , r = this.valueSize
          , i = e * r + r
          , a = this.cumulativeWeight;
        if (0 === a) {
            for (var o = 0; o !== r; ++o)
                n[i + o] = n[o];
            a = t
        } else {
            a += t;
            var s = t / a;
            this._mixBufferRegion(n, i, 0, s, r)
        }
        this.cumulativeWeight = a
    },
    apply: function(e) {
        var t = this.valueSize
          , n = this.buffer
          , r = e * t + t
          , i = this.cumulativeWeight
          , a = this.binding;
        if (this.cumulativeWeight = 0,
        1 > i) {
            var o = 3 * t;
            this._mixBufferRegion(n, r, o, 1 - i, t)
        }
        for (var s = t, c = t + t; s !== c; ++s)
            if (n[s] !== n[s + t]) {
                a.setValue(n, r);
                break
            }
    },
    saveOriginalState: function() {
        var e = this.binding
          , t = this.buffer
          , n = this.valueSize
          , r = 3 * n;
        e.getValue(t, r);
        for (var i = n, a = r; i !== a; ++i)
            t[i] = t[r + i % n];
        this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
        var e = 3 * this.valueSize;
        this.binding.setValue(this.buffer, e)
    },
    _select: function(e, t, n, r, i) {
        if (r >= .5)
            for (var a = 0; a !== i; ++a)
                e[t + a] = e[n + a]
    },
    _slerp: function(e, t, n, r, i) {
        THREE.Quaternion.slerpFlat(e, t, e, t, e, n, r)
    },
    _lerp: function(e, t, n, r, i) {
        for (var a = 1 - r, o = 0; o !== i; ++o) {
            var s = t + o;
            e[s] = e[s] * a + e[n + o] * r
        }
    }
},
THREE.BooleanKeyframeTrack = function(e, t, n) {
    THREE.KeyframeTrack.call(this, e, t, n)
}
,
THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.BooleanKeyframeTrack,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.InterpolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.ColorKeyframeTrack = function(e, t, n, r) {
    THREE.KeyframeTrack.call(this, e, t, n, r)
}
,
THREE.ColorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.ColorKeyframeTrack,
    ValueTypeName: "color"
}),
THREE.NumberKeyframeTrack = function(e, t, n, r) {
    THREE.KeyframeTrack.call(this, e, t, n, r)
}
,
THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.NumberKeyframeTrack,
    ValueTypeName: "number"
}),
THREE.QuaternionKeyframeTrack = function(e, t, n, r) {
    THREE.KeyframeTrack.call(this, e, t, n, r)
}
,
THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.QuaternionKeyframeTrack,
    ValueTypeName: "quaternion",
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodLinear: function(e) {
        return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.StringKeyframeTrack = function(e, t, n, r) {
    THREE.KeyframeTrack.call(this, e, t, n, r)
}
,
THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.StringKeyframeTrack,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.InterpolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.VectorKeyframeTrack = function(e, t, n, r) {
    THREE.KeyframeTrack.call(this, e, t, n, r)
}
,
THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.VectorKeyframeTrack,
    ValueTypeName: "vector"
}),
THREE.Audio = function(e) {
    THREE.Object3D.call(this),
    this.type = "Audio",
    this.context = e.context,
    this.source = this.context.createBufferSource(),
    this.source.onended = this.onEnded.bind(this),
    this.gain = this.context.createGain(),
    this.gain.connect(e.getInput()),
    this.autoplay = !1,
    this.startTime = 0,
    this.playbackRate = 1,
    this.isPlaying = !1,
    this.hasPlaybackControl = !0,
    this.sourceType = "empty",
    this.filter = null 
}
,
THREE.Audio.prototype = Object.create(THREE.Object3D.prototype),
THREE.Audio.prototype.constructor = THREE.Audio,
THREE.Audio.prototype.getOutput = function() {
    return this.gain
}
,
THREE.Audio.prototype.setNodeSource = function(e) {
    return this.hasPlaybackControl = !1,
    this.sourceType = "audioNode",
    this.source = e,
    this.connect(),
    this
}
,
THREE.Audio.prototype.setBuffer = function(e) {
    var t = this;
    return t.source.buffer = e,
    t.sourceType = "buffer",
    t.autoplay && t.play(),
    this
}
,
THREE.Audio.prototype.play = function() {
    if (this.isPlaying === !0)
        return void console.warn("THREE.Audio: Audio is already playing.");
    if (this.hasPlaybackControl === !1)
        return void console.warn("THREE.Audio: this Audio has no playback control.");
    var e = this.context.createBufferSource();
    e.buffer = this.source.buffer,
    e.loop = this.source.loop,
    e.onended = this.source.onended,
    e.start(0, this.startTime),
    e.playbackRate.value = this.playbackRate,
    this.isPlaying = !0,
    this.source = e,
    this.connect()
}
,
THREE.Audio.prototype.pause = function() {
    return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
    void (this.startTime = this.context.currentTime))
}
,
THREE.Audio.prototype.stop = function() {
    return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
    void (this.startTime = 0))
}
,
THREE.Audio.prototype.connect = function() {
    null  !== this.filter ? (this.source.connect(this.filter),
    this.filter.connect(this.getOutput())) : this.source.connect(this.getOutput())
}
,
THREE.Audio.prototype.disconnect = function() {
    null  !== this.filter ? (this.source.disconnect(this.filter),
    this.filter.disconnect(this.getOutput())) : this.source.disconnect(this.getOutput())
}
,
THREE.Audio.prototype.getFilter = function() {
    return this.filter
}
,
THREE.Audio.prototype.setFilter = function(e) {
    void 0 === e && (e = null ),
    this.isPlaying === !0 ? (this.disconnect(),
    this.filter = e,
    this.connect()) : this.filter = e
}
,
THREE.Audio.prototype.setPlaybackRate = function(e) {
    return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = e,
    void (this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate)))
}
,
THREE.Audio.prototype.getPlaybackRate = function() {
    return this.playbackRate
}
,
THREE.Audio.prototype.onEnded = function() {
    this.isPlaying = !1
}
,
THREE.Audio.prototype.setLoop = function(e) {
    return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : void (this.source.loop = e)
}
,
THREE.Audio.prototype.getLoop = function() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."),
    !1) : this.source.loop
}
,
THREE.Audio.prototype.setVolume = function(e) {
    this.gain.gain.value = e
}
,
THREE.Audio.prototype.getVolume = function() {
    return this.gain.gain.value
}
,
THREE.AudioAnalyser = function(e, t) {
    this.analyser = e.context.createAnalyser(),
    this.analyser.fftSize = void 0 !== t ? t : 2048,
    this.data = new Uint8Array(this.analyser.frequencyBinCount),
    e.getOutput().connect(this.analyser)
}
,
THREE.AudioAnalyser.prototype = {
    constructor: THREE.AudioAnalyser,
    getData: function() {
        return this.analyser.getByteFrequencyData(this.data),
        this.data
    }
},
Object.defineProperty(THREE, "AudioContext", {
    get: function() {
        var e;
        return function() {
            return void 0 === e && (e = new (window.AudioContext || window.webkitAudioContext)),
            e
        }
    }()
}),
THREE.PositionalAudio = function(e) {
    THREE.Audio.call(this, e),
    this.panner = this.context.createPanner(),
    this.panner.connect(this.gain)
}
,
THREE.PositionalAudio.prototype = Object.create(THREE.Audio.prototype),
THREE.PositionalAudio.prototype.constructor = THREE.PositionalAudio,
THREE.PositionalAudio.prototype.getOutput = function() {
    return this.panner
}
,
THREE.PositionalAudio.prototype.setRefDistance = function(e) {
    this.panner.refDistance = e
}
,
THREE.PositionalAudio.prototype.getRefDistance = function() {
    return this.panner.refDistance
}
,
THREE.PositionalAudio.prototype.setRolloffFactor = function(e) {
    this.panner.rolloffFactor = e
}
,
THREE.PositionalAudio.prototype.getRolloffFactor = function() {
    return this.panner.rolloffFactor
}
,
THREE.PositionalAudio.prototype.setDistanceModel = function(e) {
    this.panner.distanceModel = e
}
,
THREE.PositionalAudio.prototype.getDistanceModel = function() {
    return this.panner.distanceModel
}
,
THREE.PositionalAudio.prototype.setMaxDistance = function(e) {
    this.panner.maxDistance = e
}
,
THREE.PositionalAudio.prototype.getMaxDistance = function() {
    return this.panner.maxDistance
}
,
THREE.PositionalAudio.prototype.updateMatrixWorld = function() {
    var e = new THREE.Vector3;
    return function(t) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, t),
        e.setFromMatrixPosition(this.matrixWorld),
        this.panner.setPosition(e.x, e.y, e.z)
    }
}(),
THREE.AudioListener = function() {
    THREE.Object3D.call(this),
    this.type = "AudioListener",
    this.context = THREE.AudioContext,
    this.gain = this.context.createGain(),
    this.gain.connect(this.context.destination),
    this.filter = null 
}
,
THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype),
THREE.AudioListener.prototype.constructor = THREE.AudioListener,
THREE.AudioListener.prototype.getInput = function() {
    return this.gain
}
,
THREE.AudioListener.prototype.removeFilter = function() {
    null  !== this.filter && (this.gain.disconnect(this.filter),
    this.filter.disconnect(this.context.destination),
    this.gain.connect(this.context.destination),
    this.filter = null )
}
,
THREE.AudioListener.prototype.setFilter = function(e) {
    null  !== this.filter ? (this.gain.disconnect(this.filter),
    this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
    this.filter = e,
    this.gain.connect(this.filter),
    this.filter.connect(this.context.destination)
}
,
THREE.AudioListener.prototype.getFilter = function() {
    return this.filter
}
,
THREE.AudioListener.prototype.setMasterVolume = function(e) {
    this.gain.gain.value = e
}
,
THREE.AudioListener.prototype.getMasterVolume = function() {
    return this.gain.gain.value
}
,
THREE.AudioListener.prototype.updateMatrixWorld = function() {
    var e = new THREE.Vector3
      , t = new THREE.Quaternion
      , n = new THREE.Vector3
      , r = new THREE.Vector3;
    return function(i) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, i);
        var a = this.context.listener
          , o = this.up;
        this.matrixWorld.decompose(e, t, n),
        r.set(0, 0, -1).applyQuaternion(t),
        a.setPosition(e.x, e.y, e.z),
        a.setOrientation(r.x, r.y, r.z, o.x, o.y, o.z)
    }
}(),
THREE.Camera = function() {
    THREE.Object3D.call(this),
    this.type = "Camera",
    this.matrixWorldInverse = new THREE.Matrix4,
    this.projectionMatrix = new THREE.Matrix4
}
,
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),
THREE.Camera.prototype.constructor = THREE.Camera,
THREE.Camera.prototype.getWorldDirection = function() {
    var e = new THREE.Quaternion;
    return function(t) {
        var n = t || new THREE.Vector3;
        return this.getWorldQuaternion(e),
        n.set(0, 0, -1).applyQuaternion(e)
    }
}(),
THREE.Camera.prototype.lookAt = function() {
    var e = new THREE.Matrix4;
    return function(t) {
        e.lookAt(this.position, t, this.up),
        this.quaternion.setFromRotationMatrix(e)
    }
}(),
THREE.Camera.prototype.clone = function() {
    return (new this.constructor).copy(this)
}
,
THREE.Camera.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.matrixWorldInverse.copy(e.matrixWorldInverse),
    this.projectionMatrix.copy(e.projectionMatrix),
    this
}
,
THREE.CubeCamera = function(e, t, n) {
    THREE.Object3D.call(this),
    this.type = "CubeCamera";
    var r = 90
      , i = 1
      , a = new THREE.PerspectiveCamera(r,i,e,t);
    a.up.set(0, -1, 0),
    a.lookAt(new THREE.Vector3(1,0,0)),
    this.add(a);
    var o = new THREE.PerspectiveCamera(r,i,e,t);
    o.up.set(0, -1, 0),
    o.lookAt(new THREE.Vector3(-1,0,0)),
    this.add(o);
    var s = new THREE.PerspectiveCamera(r,i,e,t);
    s.up.set(0, 0, 1),
    s.lookAt(new THREE.Vector3(0,1,0)),
    this.add(s);
    var c = new THREE.PerspectiveCamera(r,i,e,t);
    c.up.set(0, 0, -1),
    c.lookAt(new THREE.Vector3(0,-1,0)),
    this.add(c);
    var h = new THREE.PerspectiveCamera(r,i,e,t);
    h.up.set(0, -1, 0),
    h.lookAt(new THREE.Vector3(0,0,1)),
    this.add(h);
    var l = new THREE.PerspectiveCamera(r,i,e,t);
    l.up.set(0, -1, 0),
    l.lookAt(new THREE.Vector3(0,0,-1)),
    this.add(l);
    var u = {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    };
    this.renderTarget = new THREE.WebGLRenderTargetCube(n,n,u),
    this.updateCubeMap = function(e, t) {
        null  === this.parent && this.updateMatrixWorld();
        var n = this.renderTarget
          , r = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        n.activeCubeFace = 0,
        e.render(t, a, n),
        n.activeCubeFace = 1,
        e.render(t, o, n),
        n.activeCubeFace = 2,
        e.render(t, s, n),
        n.activeCubeFace = 3,
        e.render(t, c, n),
        n.activeCubeFace = 4,
        e.render(t, h, n),
        n.texture.generateMipmaps = r,
        n.activeCubeFace = 5,
        e.render(t, l, n),
        e.setRenderTarget(null )
    }
}
,
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera,
THREE.OrthographicCamera = function(e, t, n, r, i, a) {
    THREE.Camera.call(this),
    this.type = "OrthographicCamera",
    this.zoom = 1,
    this.left = e,
    this.right = t,
    this.top = n,
    this.bottom = r,
    this.near = void 0 !== i ? i : .1,
    this.far = void 0 !== a ? a : 2e3,
    this.updateProjectionMatrix()
}
,
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera,
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    var e = (this.right - this.left) / (2 * this.zoom)
      , t = (this.top - this.bottom) / (2 * this.zoom)
      , n = (this.right + this.left) / 2
      , r = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(n - e, n + e, r + t, r - t, this.near, this.far)
}
,
THREE.OrthographicCamera.prototype.copy = function(e) {
    return THREE.Camera.prototype.copy.call(this, e),
    this.left = e.left,
    this.right = e.right,
    this.top = e.top,
    this.bottom = e.bottom,
    this.near = e.near,
    this.far = e.far,
    this.zoom = e.zoom,
    this
}
,
THREE.OrthographicCamera.prototype.toJSON = function(e) {
    var t = THREE.Object3D.prototype.toJSON.call(this, e);
    return t.object.zoom = this.zoom,
    t.object.left = this.left,
    t.object.right = this.right,
    t.object.top = this.top,
    t.object.bottom = this.bottom,
    t.object.near = this.near,
    t.object.far = this.far,
    t
}
,
THREE.PerspectiveCamera = function(e, t, n, r) {
    THREE.Camera.call(this),
    this.type = "PerspectiveCamera",
    this.fov = void 0 !== e ? e : 50,
    this.zoom = 1,
    this.near = void 0 !== n ? n : .1,
    this.far = void 0 !== r ? r : 2e3,
    this.focus = 10,
    this.aspect = void 0 !== t ? t : 1,
    this.view = null ,
    this.filmGauge = 35,
    this.filmOffset = 0,
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera,
THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
    void 0 !== t && (this.filmGauge = t),
    this.setFocalLength(e)
}
,
THREE.PerspectiveCamera.prototype.setFocalLength = function(e) {
    var t = .5 * this.getFilmHeight() / e;
    this.fov = 2 * THREE.Math.RAD2DEG * Math.atan(t),
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype.getFocalLength = function() {
    var e = Math.tan(.5 * THREE.Math.DEG2RAD * this.fov);
    return .5 * this.getFilmHeight() / e
}
,
THREE.PerspectiveCamera.prototype.getEffectiveFOV = function() {
    return 2 * THREE.Math.RAD2DEG * Math.atan(Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom)
}
,
THREE.PerspectiveCamera.prototype.getFilmWidth = function() {
    return this.filmGauge * Math.min(this.aspect, 1)
}
,
THREE.PerspectiveCamera.prototype.getFilmHeight = function() {
    return this.filmGauge / Math.max(this.aspect, 1)
}
,
THREE.PerspectiveCamera.prototype.setViewOffset = function(e, t, n, r, i, a) {
    this.aspect = e / t,
    this.view = {
        fullWidth: e,
        fullHeight: t,
        offsetX: n,
        offsetY: r,
        width: i,
        height: a
    },
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    var e = this.near
      , t = e * Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom
      , n = 2 * t
      , r = this.aspect * n
      , i = -.5 * r
      , a = this.view;
    if (null  !== a) {
        var o = a.fullWidth
          , s = a.fullHeight;
        i += a.offsetX * r / o,
        t -= a.offsetY * n / s,
        r *= a.width / o,
        n *= a.height / s
    }
    var c = this.filmOffset;
    0 !== c && (i += e * c / this.getFilmWidth()),
    this.projectionMatrix.makeFrustum(i, i + r, t - n, t, e, this.far)
}
,
THREE.PerspectiveCamera.prototype.copy = function(e) {
    return THREE.Camera.prototype.copy.call(this, e),
    this.fov = e.fov,
    this.zoom = e.zoom,
    this.near = e.near,
    this.far = e.far,
    this.focus = e.focus,
    this.aspect = e.aspect,
    this.view = null  === e.view ? null  : Object.assign({}, e.view),
    this.filmGauge = e.filmGauge,
    this.filmOffset = e.filmOffset,
    this
}
,
THREE.PerspectiveCamera.prototype.toJSON = function(e) {
    var t = THREE.Object3D.prototype.toJSON.call(this, e);
    return t.object.fov = this.fov,
    t.object.zoom = this.zoom,
    t.object.near = this.near,
    t.object.far = this.far,
    t.object.focus = this.focus,
    t.object.aspect = this.aspect,
    null  !== this.view && (t.object.view = Object.assign({}, this.view)),
    t.object.filmGauge = this.filmGauge,
    t.object.filmOffset = this.filmOffset,
    t
}
,
THREE.StereoCamera = function() {
    this.type = "StereoCamera",
    this.aspect = 1,
    this.cameraL = new THREE.PerspectiveCamera,
    this.cameraL.layers.enable(1),
    this.cameraL.matrixAutoUpdate = !1,
    this.cameraR = new THREE.PerspectiveCamera,
    this.cameraR.layers.enable(2),
    this.cameraR.matrixAutoUpdate = !1
}
,
THREE.StereoCamera.prototype = {
    constructor: THREE.StereoCamera,
    update: function() {
        var e, t, n, r, i, a = new THREE.Matrix4, o = new THREE.Matrix4;
        return function(s) {
            var c = e !== s.focus || t !== s.fov || n !== s.aspect * this.aspect || r !== s.near || i !== s.far;
            if (c) {
                e = s.focus,
                t = s.fov,
                n = s.aspect * this.aspect,
                r = s.near,
                i = s.far;
                var h, l, u = s.projectionMatrix.clone(), p = .032, d = p * r / e, E = r * Math.tan(THREE.Math.DEG2RAD * t * .5);
                o.elements[12] = -p,
                a.elements[12] = p,
                h = -E * n + d,
                l = E * n + d,
                u.elements[0] = 2 * r / (l - h),
                u.elements[8] = (l + h) / (l - h),
                this.cameraL.projectionMatrix.copy(u),
                h = -E * n - d,
                l = E * n - d,
                u.elements[0] = 2 * r / (l - h),
                u.elements[8] = (l + h) / (l - h),
                this.cameraR.projectionMatrix.copy(u)
            }
            this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(o),
            this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(a)
        }
    }()
},
THREE.Light = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Light",
    this.color = new THREE.Color(e),
    this.intensity = void 0 !== t ? t : 1,
    this.receiveShadow = void 0
}
,
THREE.Light.prototype = Object.create(THREE.Object3D.prototype),
THREE.Light.prototype.constructor = THREE.Light,
THREE.Light.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.intensity = e.intensity,
    this
}
,
THREE.Light.prototype.toJSON = function(e) {
    var t = THREE.Object3D.prototype.toJSON.call(this, e);
    return t.object.color = this.color.getHex(),
    t.object.intensity = this.intensity,
    void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()),
    void 0 !== this.distance && (t.object.distance = this.distance),
    void 0 !== this.angle && (t.object.angle = this.angle),
    void 0 !== this.decay && (t.object.decay = this.decay),
    void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
    t
}
,
THREE.LightShadow = function(e) {
    this.camera = e,
    this.bias = 0,
    this.radius = 1,
    this.mapSize = new THREE.Vector2(512,512),
    this.map = null ,
    this.matrix = new THREE.Matrix4
}
,
THREE.LightShadow.prototype = {
    constructor: THREE.LightShadow,
    copy: function(e) {
        return this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.AmbientLight = function(e, t) {
    THREE.Light.call(this, e, t),
    this.type = "AmbientLight",
    this.castShadow = void 0
}
,
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight,
THREE.DirectionalLight = function(e, t) {
    THREE.Light.call(this, e, t),
    this.type = "DirectionalLight",
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.shadow = new THREE.DirectionalLightShadow
}
,
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight,
THREE.DirectionalLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.target = e.target.clone(),
    this.shadow = e.shadow.clone(),
    this
}
,
THREE.DirectionalLightShadow = function(e) {
    THREE.LightShadow.call(this, new THREE.OrthographicCamera(-5,5,5,-5,.5,500))
}
,
THREE.DirectionalLightShadow.prototype = Object.create(THREE.LightShadow.prototype),
THREE.DirectionalLightShadow.prototype.constructor = THREE.DirectionalLightShadow,
THREE.HemisphereLight = function(e, t, n) {
    THREE.Light.call(this, e, n),
    this.type = "HemisphereLight",
    this.castShadow = void 0,
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.groundColor = new THREE.Color(t)
}
,
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),
THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight,
THREE.HemisphereLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.groundColor.copy(e.groundColor),
    this
}
,
THREE.PointLight = function(e, t, n, r) {
    THREE.Light.call(this, e, t),
    this.type = "PointLight",
    this.distance = void 0 !== n ? n : 0,
    this.decay = void 0 !== r ? r : 1,
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500))
}
,
THREE.PointLight.prototype = Object.create(THREE.Light.prototype),
THREE.PointLight.prototype.constructor = THREE.PointLight,
Object.defineProperty(THREE.PointLight.prototype, "power", {
    get: function() {
        return 4 * this.intensity * Math.PI
    },
    set: function(e) {
        this.intensity = e / (4 * Math.PI)
    }
}),
THREE.PointLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.distance = e.distance,
    this.decay = e.decay,
    this.shadow = e.shadow.clone(),
    this
}
,
THREE.SpotLight = function(e, t, n, r, i, a) {
    THREE.Light.call(this, e, t),
    this.type = "SpotLight",
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.distance = void 0 !== n ? n : 0,
    this.angle = void 0 !== r ? r : Math.PI / 3,
    this.penumbra = void 0 !== i ? i : 0,
    this.decay = void 0 !== a ? a : 1,
    this.shadow = new THREE.SpotLightShadow
}
,
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),
THREE.SpotLight.prototype.constructor = THREE.SpotLight,
Object.defineProperty(THREE.SpotLight.prototype, "power", {
    get: function() {
        return this.intensity * Math.PI
    },
    set: function(e) {
        this.intensity = e / Math.PI
    }
}),
THREE.SpotLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.distance = e.distance,
    this.angle = e.angle,
    this.penumbra = e.penumbra,
    this.decay = e.decay,
    this.target = e.target.clone(),
    this.shadow = e.shadow.clone(),
    this
}
,
THREE.SpotLightShadow = function() {
    THREE.LightShadow.call(this, new THREE.PerspectiveCamera(50,1,.5,500))
}
,
THREE.SpotLightShadow.prototype = Object.create(THREE.LightShadow.prototype),
THREE.SpotLightShadow.prototype.constructor = THREE.SpotLightShadow,
THREE.SpotLightShadow.prototype.update = function(e) {
    var t = 2 * THREE.Math.RAD2DEG * e.angle
      , n = this.mapSize.width / this.mapSize.height
      , r = e.distance || 500
      , i = this.camera;
    (t !== i.fov || n !== i.aspect || r !== i.far) && (i.fov = t,
    i.aspect = n,
    i.far = r,
    i.updateProjectionMatrix())
}
,
THREE.AudioLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.AudioLoader.prototype = {
    constructor: THREE.AudioLoader,
    load: function(e, t, n, r) {
        var i = new THREE.XHRLoader(this.manager);
        i.setResponseType("arraybuffer"),
        i.load(e, function(e) {
            var n = THREE.AudioContext;
            n.decodeAudioData(e, function(e) {
                t(e)
            })
        }, n, r)
    }
},
THREE.Cache = {
    enabled: !1,
    files: {},
    add: function(e, t) {
        this.enabled !== !1 && (this.files[e] = t)
    },
    get: function(e) {
        return this.enabled !== !1 ? this.files[e] : void 0
    },
    remove: function(e) {
        delete this.files[e]
    },
    clear: function() {
        this.files = {}
    }
},
THREE.Loader = function() {
    this.onLoadStart = function() {}
    ,
    this.onLoadProgress = function() {}
    ,
    this.onLoadComplete = function() {}
}
,
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    extractUrlBase: function(e) {
        var t = e.split("/");
        return 1 === t.length ? "./" : (t.pop(),
        t.join("/") + "/")
    },
    initMaterials: function(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i)
            r[i] = this.createMaterial(e[i], t, n);
        return r
    },
    createMaterial: function() {
        var e, t, n;
        return function(r, i, a) {
            function o(e, n, r, o, c) {
                var h, l = i + e, u = THREE.Loader.Handlers.get(l);
                null  !== u ? h = u.load(l) : (t.setCrossOrigin(a),
                h = t.load(l)),
                void 0 !== n && (h.repeat.fromArray(n),
                1 !== n[0] && (h.wrapS = THREE.RepeatWrapping),
                1 !== n[1] && (h.wrapT = THREE.RepeatWrapping)),
                void 0 !== r && h.offset.fromArray(r),
                void 0 !== o && ("repeat" === o[0] && (h.wrapS = THREE.RepeatWrapping),
                "mirror" === o[0] && (h.wrapS = THREE.MirroredRepeatWrapping),
                "repeat" === o[1] && (h.wrapT = THREE.RepeatWrapping),
                "mirror" === o[1] && (h.wrapT = THREE.MirroredRepeatWrapping)),
                void 0 !== c && (h.anisotropy = c);
                var p = THREE.Math.generateUUID();
                return s[p] = h,
                p
            }
            void 0 === e && (e = new THREE.Color),
            void 0 === t && (t = new THREE.TextureLoader),
            void 0 === n && (n = new THREE.MaterialLoader);
            var s = {}
              , c = {
                uuid: THREE.Math.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (var h in r) {
                var l = r[h];
                switch (h) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    c.name = l;
                    break;
                case "blending":
                    c.blending = THREE[l];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", h, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    c.color = e.fromArray(l).getHex();
                    break;
                case "colorSpecular":
                    c.specular = e.fromArray(l).getHex();
                    break;
                case "colorEmissive":
                    c.emissive = e.fromArray(l).getHex();
                    break;
                case "specularCoef":
                    c.shininess = l;
                    break;
                case "shading":
                    "basic" === l.toLowerCase() && (c.type = "MeshBasicMaterial"),
                    "phong" === l.toLowerCase() && (c.type = "MeshPhongMaterial");
                    break;
                case "mapDiffuse":
                    c.map = o(l, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapLight":
                    c.lightMap = o(l, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    c.aoMap = o(l, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    c.bumpMap = o(l, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    c.bumpScale = l;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    c.normalMap = o(l, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    c.normalScale = [l, l];
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    c.specularMap = o(l, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapAlpha":
                    c.alphaMap = o(l, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    c.side = THREE.BackSide;
                    break;
                case "doubleSided":
                    c.side = THREE.DoubleSide;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                    c.opacity = l;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    c[h] = l;
                    break;
                case "vertexColors":
                    l === !0 && (c.vertexColors = THREE.VertexColors),
                    "face" === l && (c.vertexColors = THREE.FaceColors);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", h, l)
                }
            }
            return "MeshBasicMaterial" === c.type && delete c.emissive,
            "MeshPhongMaterial" !== c.type && delete c.specular,
            c.opacity < 1 && (c.transparent = !0),
            n.setTextures(s),
            n.parse(c)
        }
    }()
},
THREE.Loader.Handlers = {
    handlers: [],
    add: function(e, t) {
        this.handlers.push(e, t)
    },
    get: function(e) {
        for (var t = this.handlers, n = 0, r = t.length; r > n; n += 2) {
            var i = t[n]
              , a = t[n + 1];
            if (i.test(e))
                return a
        }
        return null 
    }
},
THREE.XHRLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function(e, t, n, r) {
        void 0 !== this.path && (e = this.path + e);
        var i = this
          , a = THREE.Cache.get(e);
        if (void 0 !== a)
            return t && setTimeout(function() {
                t(a)
            }, 0),
            a;
        var o = new XMLHttpRequest;
        return o.overrideMimeType("text/plain"),
        o.open("GET", e, !0),
        o.addEventListener("load", function(n) {
            var a = n.target.response;
            THREE.Cache.add(e, a),
            200 === this.status ? (t && t(a),
            i.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."),
            t && t(a),
            i.manager.itemEnd(e)) : (r && r(n),
            i.manager.itemError(e))
        }, !1),
        void 0 !== n && o.addEventListener("progress", function(e) {
            n(e)
        }, !1),
        o.addEventListener("error", function(t) {
            r && r(t),
            i.manager.itemError(e)
        }, !1),
        void 0 !== this.responseType && (o.responseType = this.responseType),
        void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials),
        o.send(null ),
        i.manager.itemStart(e),
        o
    },
    setPath: function(e) {
        this.path = e
    },
    setResponseType: function(e) {
        this.responseType = e
    },
    setWithCredentials: function(e) {
        this.withCredentials = e
    }
},
THREE.FontLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.FontLoader.prototype = {
    constructor: THREE.FontLoader,
    load: function(e, t, n, r) {
        var i = new THREE.XHRLoader(this.manager);
        i.load(e, function(e) {
            t(new THREE.Font(JSON.parse(e.substring(65, e.length - 2))))
        }, n, r)
    }
},
THREE.ImageLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(e, t, n, r) {
        void 0 !== this.path && (e = this.path + e);
        var i = this
          , a = THREE.Cache.get(e);
        if (void 0 !== a)
            return i.manager.itemStart(e),
            t ? setTimeout(function() {
                t(a),
                i.manager.itemEnd(e)
            }, 0) : i.manager.itemEnd(e),
            a;
        var o = document.createElement("img");
        return o.addEventListener("load", function(n) {
            THREE.Cache.add(e, this),
            t && t(this),
            i.manager.itemEnd(e)
        }, !1),
        void 0 !== n && o.addEventListener("progress", function(e) {
            n(e)
        }, !1),
        o.addEventListener("error", function(t) {
            r && r(t),
            i.manager.itemError(e)
        }, !1),
        void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin),
        i.manager.itemStart(e),
        o.src = e,
        o
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setPath: function(e) {
        this.path = e
    }
},
THREE.JSONLoader = function(e) {
    "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
    e = void 0),
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.withCredentials = !1
}
,
THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader,
    get statusDomElement() {
        return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")),
        console.warn("THREE.JSONLoader: .statusDomElement has been removed."),
        this._statusDomElement
    },
    load: function(e, t, n, r) {
        var i = this
          , a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(e)
          , o = new THREE.XHRLoader(this.manager);
        o.setWithCredentials(this.withCredentials),
        o.load(e, function(n) {
            var r = JSON.parse(n)
              , o = r.metadata;
            if (void 0 !== o) {
                var s = o.type;
                if (void 0 !== s) {
                    if ("object" === s.toLowerCase())
                        return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                    if ("scene" === s.toLowerCase())
                        return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                }
            }
            var c = i.parse(r, a);
            t(c.geometry, c.materials)
        }, n, r)
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    parse: function(e, t) {
        function n(t) {
            function n(e, t) {
                return e & 1 << t
            }
            var r, i, a, s, c, h, l, u, p, d, E, f, m, g, v, T, y, R, H, x, b, _, M, w, S, L, A, C = e.faces, P = e.vertices, D = e.normals, B = e.colors, I = 0;
            if (void 0 !== e.uvs) {
                for (r = 0; r < e.uvs.length; r++)
                    e.uvs[r].length && I++;
                for (r = 0; I > r; r++)
                    o.faceVertexUvs[r] = []
            }
            for (s = 0,
            c = P.length; c > s; )
                R = new THREE.Vector3,
                R.x = P[s++] * t,
                R.y = P[s++] * t,
                R.z = P[s++] * t,
                o.vertices.push(R);
            for (s = 0,
            c = C.length; c > s; )
                if (d = C[s++],
                E = n(d, 0),
                f = n(d, 1),
                m = n(d, 3),
                g = n(d, 4),
                v = n(d, 5),
                T = n(d, 6),
                y = n(d, 7),
                E) {
                    if (x = new THREE.Face3,
                    x.a = C[s],
                    x.b = C[s + 1],
                    x.c = C[s + 3],
                    b = new THREE.Face3,
                    b.a = C[s + 1],
                    b.b = C[s + 2],
                    b.c = C[s + 3],
                    s += 4,
                    f && (p = C[s++],
                    x.materialIndex = p,
                    b.materialIndex = p),
                    a = o.faces.length,
                    m)
                        for (r = 0; I > r; r++)
                            for (w = e.uvs[r],
                            o.faceVertexUvs[r][a] = [],
                            o.faceVertexUvs[r][a + 1] = [],
                            i = 0; 4 > i; i++)
                                u = C[s++],
                                L = w[2 * u],
                                A = w[2 * u + 1],
                                S = new THREE.Vector2(L,A),
                                2 !== i && o.faceVertexUvs[r][a].push(S),
                                0 !== i && o.faceVertexUvs[r][a + 1].push(S);
                    if (g && (l = 3 * C[s++],
                    x.normal.set(D[l++], D[l++], D[l]),
                    b.normal.copy(x.normal)),
                    v)
                        for (r = 0; 4 > r; r++)
                            l = 3 * C[s++],
                            M = new THREE.Vector3(D[l++],D[l++],D[l]),
                            2 !== r && x.vertexNormals.push(M),
                            0 !== r && b.vertexNormals.push(M);
                    if (T && (h = C[s++],
                    _ = B[h],
                    x.color.setHex(_),
                    b.color.setHex(_)),
                    y)
                        for (r = 0; 4 > r; r++)
                            h = C[s++],
                            _ = B[h],
                            2 !== r && x.vertexColors.push(new THREE.Color(_)),
                            0 !== r && b.vertexColors.push(new THREE.Color(_));
                    o.faces.push(x),
                    o.faces.push(b)
                } else {
                    if (H = new THREE.Face3,
                    H.a = C[s++],
                    H.b = C[s++],
                    H.c = C[s++],
                    f && (p = C[s++],
                    H.materialIndex = p),
                    a = o.faces.length,
                    m)
                        for (r = 0; I > r; r++)
                            for (w = e.uvs[r],
                            o.faceVertexUvs[r][a] = [],
                            i = 0; 3 > i; i++)
                                u = C[s++],
                                L = w[2 * u],
                                A = w[2 * u + 1],
                                S = new THREE.Vector2(L,A),
                                o.faceVertexUvs[r][a].push(S);
                    if (g && (l = 3 * C[s++],
                    H.normal.set(D[l++], D[l++], D[l])),
                    v)
                        for (r = 0; 3 > r; r++)
                            l = 3 * C[s++],
                            M = new THREE.Vector3(D[l++],D[l++],D[l]),
                            H.vertexNormals.push(M);
                    if (T && (h = C[s++],
                    H.color.setHex(B[h])),
                    y)
                        for (r = 0; 3 > r; r++)
                            h = C[s++],
                            H.vertexColors.push(new THREE.Color(B[h]));
                    o.faces.push(H)
                }
        }
        function r() {
            var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
            if (e.skinWeights)
                for (var n = 0, r = e.skinWeights.length; r > n; n += t) {
                    var i = e.skinWeights[n]
                      , a = t > 1 ? e.skinWeights[n + 1] : 0
                      , s = t > 2 ? e.skinWeights[n + 2] : 0
                      , c = t > 3 ? e.skinWeights[n + 3] : 0;
                    o.skinWeights.push(new THREE.Vector4(i,a,s,c))
                }
            if (e.skinIndices)
                for (var n = 0, r = e.skinIndices.length; r > n; n += t) {
                    var h = e.skinIndices[n]
                      , l = t > 1 ? e.skinIndices[n + 1] : 0
                      , u = t > 2 ? e.skinIndices[n + 2] : 0
                      , p = t > 3 ? e.skinIndices[n + 3] : 0;
                    o.skinIndices.push(new THREE.Vector4(h,l,u,p))
                }
            o.bones = e.bones,
            o.bones && o.bones.length > 0 && (o.skinWeights.length !== o.skinIndices.length || o.skinIndices.length !== o.vertices.length) && console.warn("When skinning, number of vertices (" + o.vertices.length + "), skinIndices (" + o.skinIndices.length + "), and skinWeights (" + o.skinWeights.length + ") should match.")
        }
        function i(t) {
            if (void 0 !== e.morphTargets)
                for (var n = 0, r = e.morphTargets.length; r > n; n++) {
                    o.morphTargets[n] = {},
                    o.morphTargets[n].name = e.morphTargets[n].name,
                    o.morphTargets[n].vertices = [];
                    for (var i = o.morphTargets[n].vertices, a = e.morphTargets[n].vertices, s = 0, c = a.length; c > s; s += 3) {
                        var h = new THREE.Vector3;
                        h.x = a[s] * t,
                        h.y = a[s + 1] * t,
                        h.z = a[s + 2] * t,
                        i.push(h)
                    }
                }
            if (void 0 !== e.morphColors && e.morphColors.length > 0) {
                console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                for (var l = o.faces, u = e.morphColors[0].colors, n = 0, r = l.length; r > n; n++)
                    l[n].color.fromArray(u, 3 * n)
            }
        }
        function a() {
            var t = []
              , n = [];
            void 0 !== e.animation && n.push(e.animation),
            void 0 !== e.animations && (e.animations.length ? n = n.concat(e.animations) : n.push(e.animations));
            for (var r = 0; r < n.length; r++) {
                var i = THREE.AnimationClip.parseAnimation(n[r], o.bones);
                i && t.push(i)
            }
            if (o.morphTargets) {
                var a = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(o.morphTargets, 10);
                t = t.concat(a)
            }
            t.length > 0 && (o.animations = t)
        }
        var o = new THREE.Geometry
          , s = void 0 !== e.scale ? 1 / e.scale : 1;
        if (n(s),
        r(),
        i(s),
        a(),
        o.computeFaceNormals(),
        o.computeBoundingSphere(),
        void 0 === e.materials || 0 === e.materials.length)
            return {
                geometry: o
            };
        var c = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
        return {
            geometry: o,
            materials: c
        }
    }
},
THREE.LoadingManager = function(e, t, n) {
    var r = this
      , i = !1
      , a = 0
      , o = 0;
    this.onStart = void 0,
    this.onLoad = e,
    this.onProgress = t,
    this.onError = n,
    this.itemStart = function(e) {
        o++,
        i === !1 && void 0 !== r.onStart && r.onStart(e, a, o),
        i = !0
    }
    ,
    this.itemEnd = function(e) {
        a++,
        void 0 !== r.onProgress && r.onProgress(e, a, o),
        a === o && (i = !1,
        void 0 !== r.onLoad && r.onLoad())
    }
    ,
    this.itemError = function(e) {
        void 0 !== r.onError && r.onError(e)
    }
}
,
THREE.DefaultLoadingManager = new THREE.LoadingManager,
THREE.BufferGeometryLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function(e, t, n, r) {
        var i = this
          , a = new THREE.XHRLoader(i.manager);
        a.load(e, function(e) {
            t(i.parse(JSON.parse(e)))
        }, n, r)
    },
    parse: function(e) {
        var t = new THREE.BufferGeometry
          , n = e.data.index
          , r = {
            Int8Array: Int8Array,
            Uint8Array: Uint8Array,
            Uint8ClampedArray: Uint8ClampedArray,
            Int16Array: Int16Array,
            Uint16Array: Uint16Array,
            Int32Array: Int32Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array
        };
        if (void 0 !== n) {
            var i = new r[n.type](n.array);
            t.setIndex(new THREE.BufferAttribute(i,1))
        }
        var a = e.data.attributes;
        for (var o in a) {
            var s = a[o]
              , i = new r[s.type](s.array);
            t.addAttribute(o, new THREE.BufferAttribute(i,s.itemSize,s.normalized))
        }
        var c = e.data.groups || e.data.drawcalls || e.data.offsets;
        if (void 0 !== c)
            for (var h = 0, l = c.length; h !== l; ++h) {
                var u = c[h];
                t.addGroup(u.start, u.count, u.materialIndex)
            }
        var p = e.data.boundingSphere;
        if (void 0 !== p) {
            var d = new THREE.Vector3;
            void 0 !== p.center && d.fromArray(p.center),
            t.boundingSphere = new THREE.Sphere(d,p.radius)
        }
        return t
    }
},
THREE.MaterialLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.textures = {}
}
,
THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function(e, t, n, r) {
        var i = this
          , a = new THREE.XHRLoader(i.manager);
        a.load(e, function(e) {
            t(i.parse(JSON.parse(e)))
        }, n, r)
    },
    setTextures: function(e) {
        this.textures = e
    },
    getTexture: function(e) {
        var t = this.textures;
        return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e),
        t[e]
    },
    parse: function(e) {
        var t = new THREE[e.type];
        if (void 0 !== e.uuid && (t.uuid = e.uuid),
        void 0 !== e.name && (t.name = e.name),
        void 0 !== e.color && t.color.setHex(e.color),
        void 0 !== e.roughness && (t.roughness = e.roughness),
        void 0 !== e.metalness && (t.metalness = e.metalness),
        void 0 !== e.emissive && t.emissive.setHex(e.emissive),
        void 0 !== e.specular && t.specular.setHex(e.specular),
        void 0 !== e.shininess && (t.shininess = e.shininess),
        void 0 !== e.uniforms && (t.uniforms = e.uniforms),
        void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader),
        void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader),
        void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors),
        void 0 !== e.shading && (t.shading = e.shading),
        void 0 !== e.blending && (t.blending = e.blending),
        void 0 !== e.side && (t.side = e.side),
        void 0 !== e.opacity && (t.opacity = e.opacity),
        void 0 !== e.transparent && (t.transparent = e.transparent),
        void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest),
        void 0 !== e.depthTest && (t.depthTest = e.depthTest),
        void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite),
        void 0 !== e.colorWrite && (t.colorWrite = e.colorWrite),
        void 0 !== e.wireframe && (t.wireframe = e.wireframe),
        void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth),
        void 0 !== e.size && (t.size = e.size),
        void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation),
        void 0 !== e.map && (t.map = this.getTexture(e.map)),
        void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap),
        t.transparent = !0),
        void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)),
        void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale),
        void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)),
        void 0 !== e.normalScale) {
            var n = e.normalScale;
            Array.isArray(n) === !1 && (n = [n, n]),
            t.normalScale = (new THREE.Vector2).fromArray(n)
        }
        if (void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)),
        void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale),
        void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias),
        void 0 !== e.roughnessMap && (t.roughnessMap = this.getTexture(e.roughnessMap)),
        void 0 !== e.metalnessMap && (t.metalnessMap = this.getTexture(e.metalnessMap)),
        void 0 !== e.emissiveMap && (t.emissiveMap = this.getTexture(e.emissiveMap)),
        void 0 !== e.emissiveIntensity && (t.emissiveIntensity = e.emissiveIntensity),
        void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)),
        void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap),
        t.combine = THREE.MultiplyOperation),
        e.reflectivity && (t.reflectivity = e.reflectivity),
        void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)),
        void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity),
        void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)),
        void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity),
        void 0 !== e.materials)
            for (var r = 0, i = e.materials.length; i > r; r++)
                t.materials.push(this.parse(e.materials[r]));
        return t
    }
},
THREE.ObjectLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.texturePath = ""
}
,
THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function(e, t, n, r) {
        "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
        var i = this
          , a = new THREE.XHRLoader(i.manager);
        a.load(e, function(e) {
            i.parse(JSON.parse(e), t)
        }, n, r)
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    parse: function(e, t) {
        var n = this.parseGeometries(e.geometries)
          , r = this.parseImages(e.images, function() {
            void 0 !== t && t(o)
        })
          , i = this.parseTextures(e.textures, r)
          , a = this.parseMaterials(e.materials, i)
          , o = this.parseObject(e.object, n, a);
        return e.animations && (o.animations = this.parseAnimations(e.animations)),
        (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(o),
        o
    },
    parseGeometries: function(e) {
        var t = {};
        if (void 0 !== e)
            for (var n = new THREE.JSONLoader, r = new THREE.BufferGeometryLoader, i = 0, a = e.length; a > i; i++) {
                var o, s = e[i];
                switch (s.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    o = new THREE[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                    o = new THREE[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    o = new THREE[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    o = new THREE[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    o = new THREE[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                    break;
                case "DodecahedronGeometry":
                    o = new THREE.DodecahedronGeometry(s.radius,s.detail);
                    break;
                case "IcosahedronGeometry":
                    o = new THREE.IcosahedronGeometry(s.radius,s.detail);
                    break;
                case "OctahedronGeometry":
                    o = new THREE.OctahedronGeometry(s.radius,s.detail);
                    break;
                case "TetrahedronGeometry":
                    o = new THREE.TetrahedronGeometry(s.radius,s.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    o = new THREE[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    o = new THREE[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    o = new THREE[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                    break;
                case "LatheGeometry":
                case "LatheBufferGeometry":
                    o = new THREE[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                    break;
                case "BufferGeometry":
                    o = r.parse(s);
                    break;
                case "Geometry":
                    o = n.parse(s.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                    continue
                }
                o.uuid = s.uuid,
                void 0 !== s.name && (o.name = s.name),
                t[s.uuid] = o
            }
        return t
    },
    parseMaterials: function(e, t) {
        var n = {};
        if (void 0 !== e) {
            var r = new THREE.MaterialLoader;
            r.setTextures(t);
            for (var i = 0, a = e.length; a > i; i++) {
                var o = r.parse(e[i]);
                n[o.uuid] = o
            }
        }
        return n
    },
    parseAnimations: function(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = THREE.AnimationClip.parse(e[n]);
            t.push(r)
        }
        return t
    },
    parseImages: function(e, t) {
        function n(e) {
            return r.manager.itemStart(e),
            o.load(e, function() {
                r.manager.itemEnd(e)
            })
        }
        var r = this
          , i = {};
        if (void 0 !== e && e.length > 0) {
            var a = new THREE.LoadingManager(t)
              , o = new THREE.ImageLoader(a);
            o.setCrossOrigin(this.crossOrigin);
            for (var s = 0, c = e.length; c > s; s++) {
                var h = e[s]
                  , l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : r.texturePath + h.url;
                i[h.uuid] = n(l)
            }
        }
        return i
    },
    parseTextures: function(e, t) {
        function n(e) {
            return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e),
            THREE[e])
        }
        var r = {};
        if (void 0 !== e)
            for (var i = 0, a = e.length; a > i; i++) {
                var o = e[i];
                void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid),
                void 0 === t[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
                var s = new THREE.Texture(t[o.image]);
                s.needsUpdate = !0,
                s.uuid = o.uuid,
                void 0 !== o.name && (s.name = o.name),
                void 0 !== o.mapping && (s.mapping = n(o.mapping)),
                void 0 !== o.offset && (s.offset = new THREE.Vector2(o.offset[0],o.offset[1])),
                void 0 !== o.repeat && (s.repeat = new THREE.Vector2(o.repeat[0],o.repeat[1])),
                void 0 !== o.minFilter && (s.minFilter = n(o.minFilter)),
                void 0 !== o.magFilter && (s.magFilter = n(o.magFilter)),
                void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy),
                Array.isArray(o.wrap) && (s.wrapS = n(o.wrap[0]),
                s.wrapT = n(o.wrap[1])),
                r[o.uuid] = s
            }
        return r
    },
    parseObject: function() {
        var e = new THREE.Matrix4;
        return function(t, n, r) {
            function i(e) {
                return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e),
                n[e]
            }
            function a(e) {
                return void 0 !== e ? (void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined material", e),
                r[e]) : void 0
            }
            var o;
            switch (t.type) {
            case "Scene":
                o = new THREE.Scene;
                break;
            case "PerspectiveCamera":
                o = new THREE.PerspectiveCamera(t.fov,t.aspect,t.near,t.far),
                void 0 !== t.focus && (o.focus = t.focus),
                void 0 !== t.zoom && (o.zoom = t.zoom),
                void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset),
                void 0 !== t.view && (o.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                o = new THREE.OrthographicCamera(t.left,t.right,t.top,t.bottom,t.near,t.far);
                break;
            case "AmbientLight":
                o = new THREE.AmbientLight(t.color,t.intensity);
                break;
            case "DirectionalLight":
                o = new THREE.DirectionalLight(t.color,t.intensity);
                break;
            case "PointLight":
                o = new THREE.PointLight(t.color,t.intensity,t.distance,t.decay);
                break;
            case "SpotLight":
                o = new THREE.SpotLight(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                break;
            case "HemisphereLight":
                o = new THREE.HemisphereLight(t.color,t.groundColor,t.intensity);
                break;
            case "Mesh":
                var s = i(t.geometry)
                  , c = a(t.material);
                o = s.bones && s.bones.length > 0 ? new THREE.SkinnedMesh(s,c) : new THREE.Mesh(s,c);
                break;
            case "LOD":
                o = new THREE.LOD;
                break;
            case "Line":
                o = new THREE.Line(i(t.geometry),a(t.material),t.mode);
                break;
            case "PointCloud":
            case "Points":
                o = new THREE.Points(i(t.geometry),a(t.material));
                break;
            case "Sprite":
                o = new THREE.Sprite(a(t.material));
                break;
            case "Group":
                o = new THREE.Group;
                break;
            default:
                o = new THREE.Object3D
            }
            if (o.uuid = t.uuid,
            void 0 !== t.name && (o.name = t.name),
            void 0 !== t.matrix ? (e.fromArray(t.matrix),
            e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position),
            void 0 !== t.rotation && o.rotation.fromArray(t.rotation),
            void 0 !== t.scale && o.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (o.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow),
            void 0 !== t.visible && (o.visible = t.visible),
            void 0 !== t.userData && (o.userData = t.userData),
            void 0 !== t.children)
                for (var h in t.children)
                    o.add(this.parseObject(t.children[h], n, r));
            if ("LOD" === t.type)
                for (var l = t.levels, u = 0; u < l.length; u++) {
                    var p = l[u]
                      , h = o.getObjectByProperty("uuid", p.object);
                    void 0 !== h && o.addLevel(h, p.distance)
                }
            return o
        }
    }()
},
THREE.TextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(e, t, n, r) {
        var i = new THREE.Texture
          , a = new THREE.ImageLoader(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, function(e) {
            i.image = e,
            i.needsUpdate = !0,
            void 0 !== t && t(i)
        }, n, r),
        i
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setPath: function(e) {
        this.path = e
    }
},
THREE.CubeTextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.CubeTextureLoader.prototype = {
    constructor: THREE.CubeTextureLoader,
    load: function(e, t, n, r) {
        function i(n) {
            o.load(e[n], function(e) {
                a.images[n] = e,
                s++,
                6 === s && (a.needsUpdate = !0,
                t && t(a))
            }, void 0, r)
        }
        var a = new THREE.CubeTexture
          , o = new THREE.ImageLoader(this.manager);
        o.setCrossOrigin(this.crossOrigin),
        o.setPath(this.path);
        for (var s = 0, c = 0; c < e.length; ++c)
            i(c);
        return a
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setPath: function(e) {
        this.path = e
    }
},
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this._parser = null 
}
,
THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader,
    load: function(e, t, n, r) {
        var i = this
          , a = new THREE.DataTexture
          , o = new THREE.XHRLoader(this.manager);
        return o.setResponseType("arraybuffer"),
        o.load(e, function(e) {
            var n = i._parser(e);
            n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width,
            a.image.height = n.height,
            a.image.data = n.data),
            a.wrapS = void 0 !== n.wrapS ? n.wrapS : THREE.ClampToEdgeWrapping,
            a.wrapT = void 0 !== n.wrapT ? n.wrapT : THREE.ClampToEdgeWrapping,
            a.magFilter = void 0 !== n.magFilter ? n.magFilter : THREE.LinearFilter,
            a.minFilter = void 0 !== n.minFilter ? n.minFilter : THREE.LinearMipMapLinearFilter,
            a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1,
            void 0 !== n.format && (a.format = n.format),
            void 0 !== n.type && (a.type = n.type),
            void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps),
            1 === n.mipmapCount && (a.minFilter = THREE.LinearFilter),
            a.needsUpdate = !0,
            t && t(a, n))
        }, n, r),
        a
    }
},
THREE.CompressedTextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this._parser = null 
}
,
THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader,
    load: function(e, t, n, r) {
        function i(i) {
            c.load(e[i], function(e) {
                var n = a._parser(e, !0);
                o[i] = {
                    width: n.width,
                    height: n.height,
                    format: n.format,
                    mipmaps: n.mipmaps
                },
                h += 1,
                6 === h && (1 === n.mipmapCount && (s.minFilter = THREE.LinearFilter),
                s.format = n.format,
                s.needsUpdate = !0,
                t && t(s))
            }, n, r)
        }
        var a = this
          , o = []
          , s = new THREE.CompressedTexture;
        s.image = o;
        var c = new THREE.XHRLoader(this.manager);
        if (c.setPath(this.path),
        c.setResponseType("arraybuffer"),
        Array.isArray(e))
            for (var h = 0, l = 0, u = e.length; u > l; ++l)
                i(l);
        else
            c.load(e, function(e) {
                var n = a._parser(e, !0);
                if (n.isCubemap)
                    for (var r = n.mipmaps.length / n.mipmapCount, i = 0; r > i; i++) {
                        o[i] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < n.mipmapCount; c++)
                            o[i].mipmaps.push(n.mipmaps[i * n.mipmapCount + c]),
                            o[i].format = n.format,
                            o[i].width = n.width,
                            o[i].height = n.height
                    }
                else
                    s.image.width = n.width,
                    s.image.height = n.height,
                    s.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (s.minFilter = THREE.LinearFilter),
                s.format = n.format,
                s.needsUpdate = !0,
                t && t(s)
            }, n, r);
        return s
    },
    setPath: function(e) {
        this.path = e
    }
},
THREE.Material = function() {
    Object.defineProperty(this, "id", {
        value: THREE.MaterialIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Material",
    this.side = THREE.FrontSide,
    this.opacity = 1,
    this.transparent = !1,
    this.blending = THREE.NormalBlending,
    this.blendSrc = THREE.SrcAlphaFactor,
    this.blendDst = THREE.OneMinusSrcAlphaFactor,
    this.blendEquation = THREE.AddEquation,
    this.blendSrcAlpha = null ,
    this.blendDstAlpha = null ,
    this.blendEquationAlpha = null ,
    this.depthFunc = THREE.LessEqualDepth,
    this.depthTest = !0,
    this.depthWrite = !0,
    this.clippingPlanes = null ,
    this.clipShadows = !1,
    this.colorWrite = !0,
    this.precision = null ,
    this.polygonOffset = !1,
    this.polygonOffsetFactor = 0,
    this.polygonOffsetUnits = 0,
    this.alphaTest = 0,
    this.premultipliedAlpha = !1,
    this.overdraw = 0,
    this.visible = !0,
    this.shaderOverride = null ,
    this._needsUpdate = !0
}
,
THREE.Material.prototype = {
    constructor: THREE.Material,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(e) {
        e === !0 && this.update(),
        this._needsUpdate = e
    },
    setValues: function(e) {
        if (void 0 !== e)
            for (var t in e) {
                var n = e[t];
                if (void 0 !== n) {
                    var r = this[t];
                    void 0 !== r ? r instanceof THREE.Color ? r.set(n) : r instanceof THREE.Vector3 && n instanceof THREE.Vector3 ? r.copy(n) : "overdraw" === t ? this[t] = Number(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                } else
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.")
            }
    },
    toJSON: function(e) {
        function t(e) {
            var t = [];
            for (var n in e) {
                var r = e[n];
                delete r.metadata,
                t.push(r)
            }
            return t
        }
        var n = void 0 === e;
        n && (e = {
            textures: {},
            images: {}
        });
        var r = {
            metadata: {
                version: 4.4,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        if (r.uuid = this.uuid,
        r.type = this.type,
        "" !== this.name && (r.name = this.name),
        this.color instanceof THREE.Color && (r.color = this.color.getHex()),
        .5 !== this.roughness && (r.roughness = this.roughness),
        .5 !== this.metalness && (r.metalness = this.metalness),
        this.emissive instanceof THREE.Color && (r.emissive = this.emissive.getHex()),
        this.specular instanceof THREE.Color && (r.specular = this.specular.getHex()),
        void 0 !== this.shininess && (r.shininess = this.shininess),
        this.map instanceof THREE.Texture && (r.map = this.map.toJSON(e).uuid),
        this.alphaMap instanceof THREE.Texture && (r.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap instanceof THREE.Texture && (r.lightMap = this.lightMap.toJSON(e).uuid),
        this.bumpMap instanceof THREE.Texture && (r.bumpMap = this.bumpMap.toJSON(e).uuid,
        r.bumpScale = this.bumpScale),
        this.normalMap instanceof THREE.Texture && (r.normalMap = this.normalMap.toJSON(e).uuid,
        r.normalScale = this.normalScale.toArray()),
        this.displacementMap instanceof THREE.Texture && (r.displacementMap = this.displacementMap.toJSON(e).uuid,
        r.displacementScale = this.displacementScale,
        r.displacementBias = this.displacementBias),
        this.roughnessMap instanceof THREE.Texture && (r.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap instanceof THREE.Texture && (r.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap instanceof THREE.Texture && (r.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap instanceof THREE.Texture && (r.specularMap = this.specularMap.toJSON(e).uuid),
        this.envMap instanceof THREE.Texture && (r.envMap = this.envMap.toJSON(e).uuid,
        r.reflectivity = this.reflectivity),
        void 0 !== this.size && (r.size = this.size),
        void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation),
        void 0 !== this.vertexColors && this.vertexColors !== THREE.NoColors && (r.vertexColors = this.vertexColors),
        void 0 !== this.shading && this.shading !== THREE.SmoothShading && (r.shading = this.shading),
        void 0 !== this.blending && this.blending !== THREE.NormalBlending && (r.blending = this.blending),
        void 0 !== this.side && this.side !== THREE.FrontSide && (r.side = this.side),
        this.opacity < 1 && (r.opacity = this.opacity),
        this.transparent === !0 && (r.transparent = this.transparent),
        this.alphaTest > 0 && (r.alphaTest = this.alphaTest),
        this.premultipliedAlpha === !0 && (r.premultipliedAlpha = this.premultipliedAlpha),
        this.wireframe === !0 && (r.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth),
        n) {
            var i = t(e.textures)
              , a = t(e.images);
            i.length > 0 && (r.textures = i),
            a.length > 0 && (r.images = a)
        }
        return r
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.name = e.name,
        this.side = e.side,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blending = e.blending,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.alphaTest = e.alphaTest,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.overdraw = e.overdraw,
        this.visible = e.visible,
        this.clipShadows = e.clipShadows;
        var t = e.clippingPlanes
          , n = null ;
        if (null  !== t) {
            var r = t.length;
            n = new Array(r);
            for (var i = 0; i !== r; ++i)
                n[i] = t[i].clone()
        }
        return this.clippingPlanes = n,
        this.shaderOverride = e.shaderOverride,
        this
    },
    update: function() {
        this.dispatchEvent({
            type: "update"
        })
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),
THREE.MaterialIdCount = 0,
THREE.LineBasicMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "LineBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.linewidth = 1,
    this.linecap = "round",
    this.linejoin = "round",
    this.blending = THREE.NormalBlending,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(e)
}
,
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial,
THREE.LineBasicMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.linewidth = e.linewidth,
    this.linecap = e.linecap,
    this.linejoin = e.linejoin,
    this.vertexColors = e.vertexColors,
    this.fog = e.fog,
    this
}
,
THREE.LineDashedMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "LineDashedMaterial",
    this.color = new THREE.Color(16777215),
    this.linewidth = 1,
    this.scale = 1,
    this.dashSize = 3,
    this.gapSize = 1,
    this.blending = THREE.NormalBlending,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(e)
}
,
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial,
THREE.LineDashedMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.linewidth = e.linewidth,
    this.scale = e.scale,
    this.dashSize = e.dashSize,
    this.gapSize = e.gapSize,
    this.vertexColors = e.vertexColors,
    this.fog = e.fog,
    this
}
,
THREE.MeshBasicMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null ,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.specularMap = null ,
    this.alphaMap = null ,
    this.envMap = null ,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.vertexColors = THREE.NoColors,
    this.skinning = !1,
    this.morphTargets = !1,
    this.setValues(e)
}
,
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial,
THREE.MeshBasicMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this
}
,
THREE.MeshDepthMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshDepthMaterial",
    this.depthPacking = THREE.BasicDepthPacking,
    this.skinning = !1,
    this.morphTargets = !1,
    this.map = null ,
    this.alphaMap = null ,
    this.displacementMap = null ,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.setValues(e)
}
,
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial,
THREE.MeshDepthMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.depthPacking = e.depthPacking,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.map = e.map,
    this.alphaMap = e.alphaMap,
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this
}
,
THREE.MeshLambertMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshLambertMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null ,
    this.lightMap = null ,
    this.lightMapIntensity = 1,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.emissiveMap = null ,
    this.specularMap = null ,
    this.alphaMap = null ,
    this.envMap = null ,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.vertexColors = THREE.NoColors,
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.setValues(e)
}
,
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial,
THREE.MeshLambertMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissive.copy(e.emissive),
    this.emissiveMap = e.emissiveMap,
    this.emissiveIntensity = e.emissiveIntensity,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
}
,
THREE.MeshNormalMaterial = function(e) {
    THREE.Material.call(this, e),
    this.type = "MeshNormalMaterial",
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.morphTargets = !1,
    this.setValues(e)
}
,
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial,
THREE.MeshNormalMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this
}
,
THREE.MeshPhongMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshPhongMaterial",
    this.color = new THREE.Color(16777215),
    this.specular = new THREE.Color(1118481),
    this.shininess = 30,
    this.map = null ,
    this.lightMap = null ,
    this.lightMapIntensity = 1,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.emissiveMap = null ,
    this.bumpMap = null ,
    this.bumpScale = 1,
    this.normalMap = null ,
    this.normalScale = new THREE.Vector2(1,1),
    this.displacementMap = null ,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.specularMap = null ,
    this.alphaMap = null ,
    this.envMap = null ,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.vertexColors = THREE.NoColors,
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.setValues(e)
}
,
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial,
THREE.MeshPhongMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.specular.copy(e.specular),
    this.shininess = e.shininess,
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissive.copy(e.emissive),
    this.emissiveMap = e.emissiveMap,
    this.emissiveIntensity = e.emissiveIntensity,
    this.bumpMap = e.bumpMap,
    this.bumpScale = e.bumpScale,
    this.normalMap = e.normalMap,
    this.normalScale.copy(e.normalScale),
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
}
,
THREE.MeshStandardMaterial = function(e) {
    THREE.Material.call(this),
    this.defines = {
        STANDARD: ""
    },
    this.type = "MeshStandardMaterial",
    this.color = new THREE.Color(16777215),
    this.roughness = .5,
    this.metalness = .5,
    this.map = null ,
    this.lightMap = null ,
    this.lightMapIntensity = 1,
    this.aoMap = null ,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.emissiveMap = null ,
    this.bumpMap = null ,
    this.bumpScale = 1,
    this.normalMap = null ,
    this.normalScale = new THREE.Vector2(1,1),
    this.displacementMap = null ,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.roughnessMap = null ,
    this.metalnessMap = null ,
    this.alphaMap = null ,
    this.envMap = null ,
    this.envMapIntensity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.blending = THREE.NormalBlending,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.vertexColors = THREE.NoColors,
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.setValues(e)
}
,
THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial,
THREE.MeshStandardMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.defines = {
        STANDARD: ""
    },
    this.color.copy(e.color),
    this.roughness = e.roughness,
    this.metalness = e.metalness,
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissive.copy(e.emissive),
    this.emissiveMap = e.emissiveMap,
    this.emissiveIntensity = e.emissiveIntensity,
    this.bumpMap = e.bumpMap,
    this.bumpScale = e.bumpScale,
    this.normalMap = e.normalMap,
    this.normalScale.copy(e.normalScale),
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.roughnessMap = e.roughnessMap,
    this.metalnessMap = e.metalnessMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.envMapIntensity = e.envMapIntensity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
}
,
THREE.MeshPhysicalMaterial = function(e) {
    THREE.MeshStandardMaterial.call(this),
    this.defines = {
        PHYSICAL: ""
    },
    this.type = "MeshPhysicalMaterial",
    this.reflectivity = .5,
    this.setValues(e)
}
,
THREE.MeshPhysicalMaterial.prototype = Object.create(THREE.MeshStandardMaterial.prototype),
THREE.MeshPhysicalMaterial.prototype.constructor = THREE.MeshPhysicalMaterial,
THREE.MeshPhysicalMaterial.prototype.copy = function(e) {
    return THREE.MeshStandardMaterial.prototype.copy.call(this, e),
    this.defines = {
        PHYSICAL: ""
    },
    this.reflectivity = e.reflectivity,
    this
}
,
THREE.MultiMaterial = function(e) {
    this.uuid = THREE.Math.generateUUID(),
    this.type = "MultiMaterial",
    this.materials = e instanceof Array ? e : [],
    this.visible = !0
}
,
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial,
    toJSON: function(e) {
        for (var t = {
            metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, n = this.materials, r = 0, i = n.length; i > r; r++) {
            var a = n[r].toJSON(e);
            delete a.metadata,
            t.materials.push(a)
        }
        return t.visible = this.visible,
        t
    },
    clone: function() {
        for (var e = new this.constructor, t = 0; t < this.materials.length; t++)
            e.materials.push(this.materials[t].clone());
        return e.visible = this.visible,
        e
    }
},
THREE.PointsMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "PointsMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null ,
    this.size = 1,
    this.sizeAttenuation = !0,
    this.blending = THREE.NormalBlending,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(e)
}
,
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial,
THREE.PointsMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.size = e.size,
    this.sizeAttenuation = e.sizeAttenuation,
    this.vertexColors = e.vertexColors,
    this.fog = e.fog,
    this
}
,
THREE.ShaderMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "ShaderMaterial",
    this.defines = {},
    this.uniforms = {},
    this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
    this.shading = THREE.SmoothShading,
    this.linewidth = 1,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.fog = !1,
    this.lights = !1,
    this.clipping = !1,
    this.vertexColors = THREE.NoColors,
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
    },
    this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    },
    this.index0AttributeName = void 0,
    void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
    this.setValues(e))
}
,
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial,
THREE.ShaderMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.fragmentShader = e.fragmentShader,
    this.vertexShader = e.vertexShader,
    this.uniforms = THREE.UniformsUtils.clone(e.uniforms),
    this.defines = e.defines,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.fog = e.fog,
    this.lights = e.lights,
    this.clipping = e.clipping,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this.extensions = e.extensions,
    this
}
,
THREE.ShaderMaterial.prototype.toJSON = function(e) {
    var t = THREE.Material.prototype.toJSON.call(this, e);
    return t.uniforms = this.uniforms,
    t.vertexShader = this.vertexShader,
    t.fragmentShader = this.fragmentShader,
    t
}
,
THREE.RawShaderMaterial = function(e) {
    THREE.ShaderMaterial.call(this, e),
    this.type = "RawShaderMaterial"
}
,
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial,
THREE.SpriteMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "SpriteMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null ,
    this.rotation = 0,
    this.fog = !1,
    this.setValues(e)
}
,
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial,
THREE.SpriteMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.rotation = e.rotation,
    this.fog = e.fog,
    this
}
,
THREE.Texture = function(e, t, n, r, i, a, o, s, c, h) {
    Object.defineProperty(this, "id", {
        value: THREE.TextureIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.sourceFile = "",
    this.image = void 0 !== e ? e : THREE.Texture.DEFAULT_IMAGE,
    this.mipmaps = [],
    this.mapping = void 0 !== t ? t : THREE.Texture.DEFAULT_MAPPING,
    this.wrapS = void 0 !== n ? n : THREE.ClampToEdgeWrapping,
    this.wrapT = void 0 !== r ? r : THREE.ClampToEdgeWrapping,
    this.magFilter = void 0 !== i ? i : THREE.LinearFilter,
    this.minFilter = void 0 !== a ? a : THREE.LinearMipMapLinearFilter,
    this.anisotropy = void 0 !== c ? c : 1,
    this.format = void 0 !== o ? o : THREE.RGBAFormat,
    this.type = void 0 !== s ? s : THREE.UnsignedByteType,
    this.offset = new THREE.Vector2(0,0),
    this.repeat = new THREE.Vector2(1,1),
    this.generateMipmaps = !0,
    this.premultiplyAlpha = !1,
    this.flipY = !0,
    this.unpackAlignment = 4,
    this.encoding = void 0 !== h ? h : THREE.LinearEncoding,
    this.version = 0,
    this.onUpdate = null 
}
,
THREE.Texture.DEFAULT_IMAGE = void 0,
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping,
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate(e) {
        e === !0 && this.version++
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.image = e.image,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.encoding = e.encoding,
        this
    },
    toJSON: function(e) {
        function t(e) {
            var t;
            return void 0 !== e.toDataURL ? t = e : (t = document.createElement("canvas"),
            t.width = e.width,
            t.height = e.height,
            t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)),
            t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
        }
        if (void 0 !== e.textures[this.uuid])
            return e.textures[this.uuid];
        var n = {
            metadata: {
                version: 4.4,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var r = this.image;
            void 0 === r.uuid && (r.uuid = THREE.Math.generateUUID()),
            void 0 === e.images[r.uuid] && (e.images[r.uuid] = {
                uuid: r.uuid,
                url: t(r)
            }),
            n.image = r.uuid
        }
        return e.textures[this.uuid] = n,
        n
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    transformUv: function(e) {
        if (this.mapping === THREE.UVMapping) {
            if (e.multiply(this.repeat),
            e.add(this.offset),
            e.x < 0 || e.x > 1)
                switch (this.wrapS) {
                case THREE.RepeatWrapping:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                }
            if (e.y < 0 || e.y > 1)
                switch (this.wrapT) {
                case THREE.RepeatWrapping:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                }
            this.flipY && (e.y = 1 - e.y)
        }
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),
THREE.TextureIdCount = 0,
THREE.DepthTexture = function(e, t, n, r, i, a, o, s, c) {
    THREE.Texture.call(this, null , r, i, a, o, s, THREE.DepthFormat, n, c),
    this.image = {
        width: e,
        height: t
    },
    this.type = void 0 !== n ? n : THREE.UnsignedShortType,
    this.magFilter = void 0 !== o ? o : THREE.NearestFilter,
    this.minFilter = void 0 !== s ? s : THREE.NearestFilter,
    this.flipY = !1,
    this.generateMipmaps = !1
}
,
THREE.DepthTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.DepthTexture.prototype.constructor = THREE.DepthTexture,
THREE.CanvasTexture = function(e, t, n, r, i, a, o, s, c) {
    THREE.Texture.call(this, e, t, n, r, i, a, o, s, c),
    this.needsUpdate = !0
}
,
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture,
THREE.CubeTexture = function(e, t, n, r, i, a, o, s, c, h) {
    e = void 0 !== e ? e : [],
    t = void 0 !== t ? t : THREE.CubeReflectionMapping,
    THREE.Texture.call(this, e, t, n, r, i, a, o, s, c, h),
    this.flipY = !1
}
,
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture,
Object.defineProperty(THREE.CubeTexture.prototype, "images", {
    get: function() {
        return this.image
    },
    set: function(e) {
        this.image = e
    }
}),
THREE.CompressedTexture = function(e, t, n, r, i, a, o, s, c, h, l, u) {
    THREE.Texture.call(this, null , a, o, s, c, h, r, i, l, u),
    this.image = {
        width: t,
        height: n
    },
    this.mipmaps = e,
    this.flipY = !1,
    this.generateMipmaps = !1
}
,
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture,
THREE.DataTexture = function(e, t, n, r, i, a, o, s, c, h, l, u) {
    THREE.Texture.call(this, null , a, o, s, c, h, r, i, l, u),
    this.image = {
        data: e,
        width: t,
        height: n
    },
    this.magFilter = void 0 !== c ? c : THREE.NearestFilter,
    this.minFilter = void 0 !== h ? h : THREE.NearestFilter,
    this.flipY = !1,
    this.generateMipmaps = !1
}
,
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.DataTexture.prototype.constructor = THREE.DataTexture,
THREE.VideoTexture = function(e, t, n, r, i, a, o, s, c) {
    function h() {
        requestAnimationFrame(h),
        e.readyState >= e.HAVE_CURRENT_DATA && (l.needsUpdate = !0)
    }
    THREE.Texture.call(this, e, t, n, r, i, a, o, s, c),
    this.generateMipmaps = !1;
    var l = this;
    h()
}
,
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture,
THREE.Group = function() {
    THREE.Object3D.call(this),
    this.type = "Group"
}
,
THREE.Group.prototype = Object.create(THREE.Object3D.prototype),
THREE.Group.prototype.constructor = THREE.Group,
THREE.Points = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Points",
    this.geometry = void 0 !== e ? e : new THREE.Geometry,
    this.material = void 0 !== t ? t : new THREE.PointsMaterial({
        color: 16777215 * Math.random()
    })
}
,
THREE.Points.prototype = Object.create(THREE.Object3D.prototype),
THREE.Points.prototype.constructor = THREE.Points,
THREE.Points.prototype.raycast = function() {
    var e = new THREE.Matrix4
      , t = new THREE.Ray
      , n = new THREE.Sphere;
    return function(r, i) {
        function a(e, n) {
            var a = t.distanceSqToPoint(e);
            if (u > a) {
                var s = t.closestPointToPoint(e);
                s.applyMatrix4(c);
                var h = r.ray.origin.distanceTo(s);
                if (h < r.near || h > r.far)
                    return;
                i.push({
                    distance: h,
                    distanceToRay: Math.sqrt(a),
                    point: s.clone(),
                    index: n,
                    face: null ,
                    object: o
                })
            }
        }
        var o = this
          , s = this.geometry
          , c = this.matrixWorld
          , h = r.params.Points.threshold;
        if (null  === s.boundingSphere && s.computeBoundingSphere(),
        n.copy(s.boundingSphere),
        n.applyMatrix4(c),
        r.ray.intersectsSphere(n) !== !1) {
            e.getInverse(c),
            t.copy(r.ray).applyMatrix4(e);
            var l = h / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , u = l * l
              , p = new THREE.Vector3;
            if (s instanceof THREE.BufferGeometry) {
                var d = s.index
                  , E = s.attributes
                  , f = E.position.array;
                if (null  !== d)
                    for (var m = d.array, g = 0, v = m.length; v > g; g++) {
                        var T = m[g];
                        p.fromArray(f, 3 * T),
                        a(p, T)
                    }
                else
                    for (var g = 0, y = f.length / 3; y > g; g++)
                        p.fromArray(f, 3 * g),
                        a(p, g)
            } else
                for (var R = s.vertices, g = 0, y = R.length; y > g; g++)
                    a(R[g], g)
        }
    }
}(),
THREE.Points.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material).copy(this)
}
,
THREE.Line = function(e, t, n) {
    return 1 === n ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
    new THREE.LineSegments(e,t)) : (THREE.Object3D.call(this),
    this.type = "Line",
    this.geometry = void 0 !== e ? e : new THREE.Geometry,
    void (this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    })))
}
,
THREE.Line.prototype = Object.create(THREE.Object3D.prototype),
THREE.Line.prototype.constructor = THREE.Line,
THREE.Line.prototype.raycast = function() {
    var e = new THREE.Matrix4
      , t = new THREE.Ray
      , n = new THREE.Sphere;
    return function(r, i) {
        var a = r.linePrecision
          , o = a * a
          , s = this.geometry
          , c = this.matrixWorld;
        if (null  === s.boundingSphere && s.computeBoundingSphere(),
        n.copy(s.boundingSphere),
        n.applyMatrix4(c),
        r.ray.intersectsSphere(n) !== !1) {
            e.getInverse(c),
            t.copy(r.ray).applyMatrix4(e);
            var h = new THREE.Vector3
              , l = new THREE.Vector3
              , u = new THREE.Vector3
              , p = new THREE.Vector3
              , d = this instanceof THREE.LineSegments ? 2 : 1;
            if (s instanceof THREE.BufferGeometry) {
                var E = s.index
                  , f = s.attributes
                  , m = f.position.array;
                if (null  !== E)
                    for (var g = E.array, v = 0, T = g.length - 1; T > v; v += d) {
                        var y = g[v]
                          , R = g[v + 1];
                        h.fromArray(m, 3 * y),
                        l.fromArray(m, 3 * R);
                        var H = t.distanceSqToSegment(h, l, p, u);
                        if (!(H > o)) {
                            p.applyMatrix4(this.matrixWorld);
                            var x = r.ray.origin.distanceTo(p);
                            x < r.near || x > r.far || i.push({
                                distance: x,
                                point: u.clone().applyMatrix4(this.matrixWorld),
                                index: v,
                                face: null ,
                                faceIndex: null ,
                                object: this
                            })
                        }
                    }
                else
                    for (var v = 0, T = m.length / 3 - 1; T > v; v += d) {
                        h.fromArray(m, 3 * v),
                        l.fromArray(m, 3 * v + 3);
                        var H = t.distanceSqToSegment(h, l, p, u);
                        if (!(H > o)) {
                            p.applyMatrix4(this.matrixWorld);
                            var x = r.ray.origin.distanceTo(p);
                            x < r.near || x > r.far || i.push({
                                distance: x,
                                point: u.clone().applyMatrix4(this.matrixWorld),
                                index: v,
                                face: null ,
                                faceIndex: null ,
                                object: this
                            })
                        }
                    }
            } else if (s instanceof THREE.Geometry)
                for (var b = s.vertices, _ = b.length, v = 0; _ - 1 > v; v += d) {
                    var H = t.distanceSqToSegment(b[v], b[v + 1], p, u);
                    if (!(H > o)) {
                        p.applyMatrix4(this.matrixWorld);
                        var x = r.ray.origin.distanceTo(p);
                        x < r.near || x > r.far || i.push({
                            distance: x,
                            point: u.clone().applyMatrix4(this.matrixWorld),
                            index: v,
                            face: null ,
                            faceIndex: null ,
                            object: this
                        })
                    }
                }
        }
    }
}(),
THREE.Line.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material).copy(this)
}
,
THREE.LineStrip = 0,
THREE.LinePieces = 1,
THREE.LineSegments = function(e, t) {
    THREE.Line.call(this, e, t),
    this.type = "LineSegments"
}
,
THREE.LineSegments.prototype = Object.create(THREE.Line.prototype),
THREE.LineSegments.prototype.constructor = THREE.LineSegments,
THREE.Mesh = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Mesh",
    this.geometry = void 0 !== e ? e : new THREE.Geometry,
    this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    }),
    this.drawMode = THREE.TrianglesDrawMode,
    this.updateMorphTargets()
}
,
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),
THREE.Mesh.prototype.constructor = THREE.Mesh,
THREE.Mesh.prototype.setDrawMode = function(e) {
    this.drawMode = e
}
,
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
        this.morphTargetBase = -1,
        this.morphTargetInfluences = [],
        this.morphTargetDictionary = {};
        for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++)
            this.morphTargetInfluences.push(0),
            this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
    }
}
,
THREE.Mesh.prototype.getMorphTargetIndexByName = function(e) {
    return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."),
    0)
}
,
THREE.Mesh.prototype.raycast = function() {
    function e(e, t, n, r, i, a, o) {
        return THREE.Triangle.barycoordFromPoint(e, t, n, r, f),
        i.multiplyScalar(f.x),
        a.multiplyScalar(f.y),
        o.multiplyScalar(f.z),
        i.add(a).add(o),
        i.clone()
    }
    function t(e, t, n, r, i, a, o) {
        var s, c = e.material;
        if (s = c.side === THREE.BackSide ? n.intersectTriangle(a, i, r, !0, o) : n.intersectTriangle(r, i, a, c.side !== THREE.DoubleSide, o),
        null  === s)
            return null ;
        g.copy(o),
        g.applyMatrix4(e.matrixWorld);
        var h = t.ray.origin.distanceTo(g);
        return h < t.near || h > t.far ? null  : {
            distance: h,
            point: g.clone(),
            object: e
        }
    }
    function n(n, r, i, a, h, l, u, f) {
        o.fromArray(a, 3 * l),
        s.fromArray(a, 3 * u),
        c.fromArray(a, 3 * f);
        var g = t(n, r, i, o, s, c, m);
        return g && (h && (p.fromArray(h, 2 * l),
        d.fromArray(h, 2 * u),
        E.fromArray(h, 2 * f),
        g.uv = e(m, o, s, c, p, d, E)),
        g.face = new THREE.Face3(l,u,f,THREE.Triangle.normal(o, s, c)),
        g.faceIndex = l),
        g
    }
    var r = new THREE.Matrix4
      , i = new THREE.Ray
      , a = new THREE.Sphere
      , o = new THREE.Vector3
      , s = new THREE.Vector3
      , c = new THREE.Vector3
      , h = new THREE.Vector3
      , l = new THREE.Vector3
      , u = new THREE.Vector3
      , p = new THREE.Vector2
      , d = new THREE.Vector2
      , E = new THREE.Vector2
      , f = new THREE.Vector3
      , m = new THREE.Vector3
      , g = new THREE.Vector3;
    return function(f, g) {
        var v = this.geometry
          , T = this.material
          , y = this.matrixWorld;
        if (void 0 !== T && (null  === v.boundingSphere && v.computeBoundingSphere(),
        a.copy(v.boundingSphere),
        a.applyMatrix4(y),
        f.ray.intersectsSphere(a) !== !1 && (r.getInverse(y),
        i.copy(f.ray).applyMatrix4(r),
        null  === v.boundingBox || i.intersectsBox(v.boundingBox) !== !1))) {
            var R, H;
            if (v instanceof THREE.BufferGeometry) {
                var x, b, _, M = v.index, w = v.attributes, S = w.position.array;
                if (void 0 !== w.uv && (R = w.uv.array),
                null  !== M)
                    for (var L = M.array, A = 0, C = L.length; C > A; A += 3)
                        x = L[A],
                        b = L[A + 1],
                        _ = L[A + 2],
                        H = n(this, f, i, S, R, x, b, _),
                        H && (H.faceIndex = Math.floor(A / 3),
                        g.push(H));
                else
                    for (var A = 0, C = S.length; C > A; A += 9)
                        x = A / 3,
                        b = x + 1,
                        _ = x + 2,
                        H = n(this, f, i, S, R, x, b, _),
                        H && (H.index = x,
                        g.push(H))
            } else if (v instanceof THREE.Geometry) {
                var P, D, B, I = T instanceof THREE.MultiMaterial, U = I === !0 ? T.materials : null , F = v.vertices, N = v.faces, O = v.faceVertexUvs[0];
                O.length > 0 && (R = O);
                for (var G = 0, V = N.length; V > G; G++) {
                    var z = N[G]
                      , k = I === !0 ? U[z.materialIndex] : T;
                    if (void 0 !== k) {
                        if (P = F[z.a],
                        D = F[z.b],
                        B = F[z.c],
                        k.morphTargets === !0) {
                            var j = v.morphTargets
                              , W = this.morphTargetInfluences;
                            o.set(0, 0, 0),
                            s.set(0, 0, 0),
                            c.set(0, 0, 0);
                            for (var X = 0, q = j.length; q > X; X++) {
                                var Y = W[X];
                                if (0 !== Y) {
                                    var Z = j[X].vertices;
                                    o.addScaledVector(h.subVectors(Z[z.a], P), Y),
                                    s.addScaledVector(l.subVectors(Z[z.b], D), Y),
                                    c.addScaledVector(u.subVectors(Z[z.c], B), Y)
                                }
                            }
                            o.add(P),
                            s.add(D),
                            c.add(B),
                            P = o,
                            D = s,
                            B = c
                        }
                        if (H = t(this, f, i, P, D, B, m)) {
                            if (R) {
                                var K = R[G];
                                p.copy(K[0]),
                                d.copy(K[1]),
                                E.copy(K[2]),
                                H.uv = e(m, P, D, B, p, d, E)
                            }
                            H.face = z,
                            H.faceIndex = G,
                            g.push(H)
                        }
                    }
                }
            }
        }
    }
}(),
THREE.Mesh.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material).copy(this)
}
,
THREE.Bone = function(e) {
    THREE.Object3D.call(this),
    this.type = "Bone",
    this.skin = e
}
,
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),
THREE.Bone.prototype.constructor = THREE.Bone,
THREE.Bone.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.skin = e.skin,
    this
}
,
THREE.Skeleton = function(e, t, n) {
    if (this.useVertexTexture = void 0 !== n ? n : !0,
    this.identityMatrix = new THREE.Matrix4,
    e = e || [],
    this.bones = e.slice(0),
    this.useVertexTexture) {
        var r = Math.sqrt(4 * this.bones.length);
        r = THREE.Math.nextPowerOfTwo(Math.ceil(r)),
        r = Math.max(r, 4),
        this.boneTextureWidth = r,
        this.boneTextureHeight = r,
        this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
        this.boneTexture = new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)
    } else
        this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === t)
        this.calculateInverses();
    else if (this.bones.length === t.length)
        this.boneInverses = t.slice(0);
    else {
        console.warn("THREE.Skeleton bonInverses is the wrong length."),
        this.boneInverses = [];
        for (var i = 0, a = this.bones.length; a > i; i++)
            this.boneInverses.push(new THREE.Matrix4)
    }
}
,
THREE.Skeleton.prototype.calculateInverses = function() {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; t > e; e++) {
        var n = new THREE.Matrix4;
        this.bones[e] && n.getInverse(this.bones[e].matrixWorld),
        this.boneInverses.push(n)
    }
}
,
THREE.Skeleton.prototype.pose = function() {
    for (var e, t = 0, n = this.bones.length; n > t; t++)
        e = this.bones[t],
        e && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (var t = 0, n = this.bones.length; n > t; t++)
        e = this.bones[t],
        e && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld),
        e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
        e.matrix.decompose(e.position, e.quaternion, e.scale))
}
,
THREE.Skeleton.prototype.update = function() {
    var e = new THREE.Matrix4;
    return function() {
        for (var t = 0, n = this.bones.length; n > t; t++) {
            var r = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
            e.multiplyMatrices(r, this.boneInverses[t]),
            e.toArray(this.boneMatrices, 16 * t)
        }
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}(),
THREE.Skeleton.prototype.clone = function() {
    return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)
}
,
THREE.SkinnedMesh = function(e, t, n) {
    THREE.Mesh.call(this, e, t),
    this.type = "SkinnedMesh",
    this.bindMode = "attached",
    this.bindMatrix = new THREE.Matrix4,
    this.bindMatrixInverse = new THREE.Matrix4;
    var r = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (var i, a, o = 0, s = this.geometry.bones.length; s > o; ++o)
            a = this.geometry.bones[o],
            i = new THREE.Bone(this),
            r.push(i),
            i.name = a.name,
            i.position.fromArray(a.pos),
            i.quaternion.fromArray(a.rotq),
            void 0 !== a.scl && i.scale.fromArray(a.scl);
        for (var o = 0, s = this.geometry.bones.length; s > o; ++o)
            a = this.geometry.bones[o],
            -1 !== a.parent && null  !== a.parent && void 0 !== r[a.parent] ? r[a.parent].add(r[o]) : this.add(r[o])
    }
    this.normalizeSkinWeights(),
    this.updateMatrixWorld(!0),
    this.bind(new THREE.Skeleton(r,void 0,n), this.matrixWorld)
}
,
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh,
THREE.SkinnedMesh.prototype.bind = function(e, t) {
    this.skeleton = e,
    void 0 === t && (this.updateMatrixWorld(!0),
    this.skeleton.calculateInverses(),
    t = this.matrixWorld),
    this.bindMatrix.copy(t),
    this.bindMatrixInverse.getInverse(t)
}
,
THREE.SkinnedMesh.prototype.pose = function() {
    this.skeleton.pose()
}
,
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
    if (this.geometry instanceof THREE.Geometry)
        for (var e = 0; e < this.geometry.skinWeights.length; e++) {
            var t = this.geometry.skinWeights[e]
              , n = 1 / t.lengthManhattan();
            n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0)
        }
    else if (this.geometry instanceof THREE.BufferGeometry)
        for (var r = new THREE.Vector4, i = this.geometry.attributes.skinWeight, e = 0; e < i.count; e++) {
            r.x = i.getX(e),
            r.y = i.getY(e),
            r.z = i.getZ(e),
            r.w = i.getW(e);
            var n = 1 / r.lengthManhattan();
            n !== 1 / 0 ? r.multiplyScalar(n) : r.set(1, 0, 0, 0),
            i.setXYZW(e, r.x, r.y, r.z, r.w)
        }
}
,
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(e) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0),
    "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
}
,
THREE.SkinnedMesh.prototype.clone = function() {
    return new this.constructor(this.geometry,this.material,this.useVertexTexture).copy(this)
}
,
THREE.LOD = function() {
    THREE.Object3D.call(this),
    this.type = "LOD",
    Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        }
    })
}
,
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype),
THREE.LOD.prototype.constructor = THREE.LOD,
THREE.LOD.prototype.addLevel = function(e, t) {
    void 0 === t && (t = 0),
    t = Math.abs(t);
    for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++)
        ;
    n.splice(r, 0, {
        distance: t,
        object: e
    }),
    this.add(e)
}
,
THREE.LOD.prototype.getObjectForDistance = function(e) {
    for (var t = this.levels, n = 1, r = t.length; r > n && !(e < t[n].distance); n++)
        ;
    return t[n - 1].object
}
,
THREE.LOD.prototype.raycast = function() {
    var e = new THREE.Vector3;
    return function(t, n) {
        e.setFromMatrixPosition(this.matrixWorld);
        var r = t.ray.origin.distanceTo(e);
        this.getObjectForDistance(r).raycast(t, n)
    }
}(),
THREE.LOD.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3;
    return function(n) {
        var r = this.levels;
        if (r.length > 1) {
            e.setFromMatrixPosition(n.matrixWorld),
            t.setFromMatrixPosition(this.matrixWorld);
            var i = e.distanceTo(t);
            r[0].object.visible = !0;
            for (var a = 1, o = r.length; o > a && i >= r[a].distance; a++)
                r[a - 1].object.visible = !1,
                r[a].object.visible = !0;
            for (; o > a; a++)
                r[a].object.visible = !1
        }
    }
}(),
THREE.LOD.prototype.copy = function(e) {
    THREE.Object3D.prototype.copy.call(this, e, !1);
    for (var t = e.levels, n = 0, r = t.length; r > n; n++) {
        var i = t[n];
        this.addLevel(i.object.clone(), i.distance)
    }
    return this
}
,
THREE.LOD.prototype.toJSON = function(e) {
    var t = THREE.Object3D.prototype.toJSON.call(this, e);
    t.object.levels = [];
    for (var n = this.levels, r = 0, i = n.length; i > r; r++) {
        var a = n[r];
        t.object.levels.push({
            object: a.object.uuid,
            distance: a.distance
        })
    }
    return t
}
,
THREE.Sprite = function() {
    var e = new Uint16Array([0, 1, 2, 0, 2, 3])
      , t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0])
      , n = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      , r = new THREE.BufferGeometry;
    return r.setIndex(new THREE.BufferAttribute(e,1)),
    r.addAttribute("position", new THREE.BufferAttribute(t,3)),
    r.addAttribute("uv", new THREE.BufferAttribute(n,2)),
    function(e) {
        THREE.Object3D.call(this),
        this.type = "Sprite",
        this.geometry = r,
        this.material = void 0 !== e ? e : new THREE.SpriteMaterial
    }
}(),
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),
THREE.Sprite.prototype.constructor = THREE.Sprite,
THREE.Sprite.prototype.raycast = function() {
    var e = new THREE.Vector3;
    return function(t, n) {
        e.setFromMatrixPosition(this.matrixWorld);
        var r = t.ray.distanceSqToPoint(e)
          , i = this.scale.x * this.scale.y / 4;
        r > i || n.push({
            distance: Math.sqrt(r),
            point: this.position,
            face: null ,
            object: this
        })
    }
}(),
THREE.Sprite.prototype.clone = function() {
    return new this.constructor(this.material).copy(this)
}
,
THREE.Particle = THREE.Sprite,
THREE.LensFlare = function(e, t, n, r, i) {
    THREE.Object3D.call(this),
    this.lensFlares = [],
    this.positionScreen = new THREE.Vector3,
    this.customUpdateCallback = void 0,
    void 0 !== e && this.add(e, t, n, r, i)
}
,
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),
THREE.LensFlare.prototype.constructor = THREE.LensFlare,
THREE.LensFlare.prototype.add = function(e, t, n, r, i, a) {
    void 0 === t && (t = -1),
    void 0 === n && (n = 0),
    void 0 === a && (a = 1),
    void 0 === i && (i = new THREE.Color(16777215)),
    void 0 === r && (r = THREE.NormalBlending),
    n = Math.min(n, Math.max(0, n)),
    this.lensFlares.push({
        texture: e,
        size: t,
        distance: n,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 0,
        opacity: a,
        color: i,
        blending: r
    })
}
,
THREE.LensFlare.prototype.updateLensFlares = function() {
    var e, t, n = this.lensFlares.length, r = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
    for (e = 0; n > e; e++)
        t = this.lensFlares[e],
        t.x = this.positionScreen.x + r * t.distance,
        t.y = this.positionScreen.y + i * t.distance,
        t.wantedRotation = t.x * Math.PI * .25,
        t.rotation += .25 * (t.wantedRotation - t.rotation)
}
,
THREE.LensFlare.prototype.copy = function(e) {
    THREE.Object3D.prototype.copy.call(this, e),
    this.positionScreen.copy(e.positionScreen),
    this.customUpdateCallback = e.customUpdateCallback;
    for (var t = 0, n = e.lensFlares.length; n > t; t++)
        this.lensFlares.push(e.lensFlares[t]);
    return this
}
,
THREE.Scene = function() {
    THREE.Object3D.call(this),
    this.type = "Scene",
    this.fog = null ,
    this.overrideMaterial = null ,
    this.autoUpdate = !0
}
,
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),
THREE.Scene.prototype.constructor = THREE.Scene,
THREE.Scene.prototype.copy = function(e, t) {
    return THREE.Object3D.prototype.copy.call(this, e, t),
    null  !== e.fog && (this.fog = e.fog.clone()),
    null  !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
    this.autoUpdate = e.autoUpdate,
    this.matrixAutoUpdate = e.matrixAutoUpdate,
    this
}
,
THREE.Fog = function(e, t, n) {
    this.name = "",
    this.color = new THREE.Color(e),
    this.near = void 0 !== t ? t : 1,
    this.far = void 0 !== n ? n : 1e3
}
,
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(),this.near,this.far)
}
,
THREE.FogExp2 = function(e, t) {
    this.name = "",
    this.color = new THREE.Color(e),
    this.density = void 0 !== t ? t : 25e-5
}
,
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(),this.density)
}
,
THREE.ShaderChunk = {},
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n",
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif",
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",
THREE.ShaderChunk.bsdfs = 'bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\n	return any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n\n}\n\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n		if( decayExponent > 0.0 ) {\n\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n			// based upon Frostbite 3 Moving to Physically-based Rendering\n			// page 32, equation 26: E[window1]\n			// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\n			// this is intended to be used on spot and point lights who are represented as luminous intensity\n			// but who must be converted to luminous irradiance for surface lighting calculation\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n\n#else\n\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n#endif\n\n		}\n\n		return 1.0;\n}\n\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\n	return RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\n\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\n	// Original approximation by Christophe Schlick \'94\n	//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n	// Optimized variant (presented by Epic at SIGGRAPH \'13)\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n\n} // validated\n\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n	// geometry term = G(l)⋅G(v) / 4(n⋅l)(n⋅v)\n\n	float a2 = pow2( alpha );\n\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\n	return 1.0 / ( gl * gv );\n\n} // validated\n\n// from page 12, listing 2 of http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n	float a2 = pow2( alpha );\n\n	// dotNL and dotNV are explicitly swapped. This is not a mistake.\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n	return 0.5 / max( gv + gl, EPSILON );\n}\n\n\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n	float a2 = pow2( alpha );\n\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n	return RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n\n// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\n	float alpha = pow2( roughness ); // UE4\'s roughness\n\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n	float D = D_GGX( alpha, dotNH );\n\n	return F * ( G * D );\n\n} // validated\n\n\n// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n	vec4 r = roughness * c0 + c1;\n\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\n	return specularColor * AB.x + AB.y;\n\n} // validated\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * ( G * D );\n\n} // validated\n\n// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\n\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n',
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n",
THREE.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\n	for ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\n	}\n\n#endif\n",
THREE.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n",
THREE.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n",
THREE.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n\n",
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif",
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n",
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif",
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = color.xyz;\n\n#endif",
THREE.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\n\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\n\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\n\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	float distance = dot( planeNormal, point - pointOnPlane );\n\n	return - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n",
THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n\nconst float cubeUV_textureSize = 1024.0;\n\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\nfloat cubeUV_maxLods1 = log2(cubeUV_textureSize*0.25) - 1.0;\nfloat cubeUV_rangeClamp = exp2((6.0 - 1.0) * 2.0);\n\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	// Clamp the value to the max mip level counts. hard coded to 6 mips\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n\nfloat cubeUV_maxLods2 = log2(cubeUV_textureSize*0.25) - 2.0;\nconst float cubeUV_rcpTextureSize = 1.0 / cubeUV_textureSize;\n\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	// float powScale = exp2(roughnessLevel + mipLevel);\n	float powScale = exp2_packed.x * exp2_packed.y;\n	// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n\n	float rcpPowScale = 1.0 / powScale;\n\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n\nfloat cubeUV_maxLods3 = log2(cubeUV_textureSize*0.25) - 3.0;\n\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n\n	// round to nearest mipmap if we are not interpolating.\n	level0 += min( floor( s + 0.5 ), 5.0 );\n\n	// Tri linear interpolation.\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\n	vec4 result = mix(color10, color20, t);\n\n	return vec4(result.rgb, 1.0);\n}\n\n#endif\n",
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n",
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n",
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\n	totalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n",
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n",
THREE.ShaderChunk.encodings_pars_fragment = "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n	#endif\n\n	envColor = envMapTexelToLinear( envColor );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n\n#ifdef USE_ENVMAP\n\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n\n#endif\n",
THREE.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n\n	#else\n\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vWorldPosition = worldPosition.xyz;\n\n	#else\n\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vReflect = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n",
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif",
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\n\n#endif\n",
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif",
THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\n#if NUM_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n		#endif\n\n	}\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n		#endif\n	}\n\n#endif\n\n#if NUM_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n		#endif\n\n	}\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\n		#endif\n\n	}\n\n#endif\n",
THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n	vec3 irradiance = ambientLightColor;\n\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n		irradiance *= PI;\n\n	#endif\n\n	return irradiance;\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n\n	}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n	// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n\n		float lightDistance = length( lVector );\n\n		if ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\n			directLight.color = pointLight.color;\n			directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\n			directLight.visible = true;\n\n		} else {\n\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n\n		}\n\n	}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n	// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n\n		if ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\n			directLight.visible = true;\n\n		} else {\n\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n\n		}\n\n	}\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n			irradiance *= PI;\n\n		#endif\n\n		return irradiance;\n\n	}\n\n#endif\n\n\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\n	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {\n\n		#ifdef DOUBLE_SIDED\n\n			float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n		#else\n\n			float flipNormal = 1.0;\n\n		#endif\n\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n		#ifdef ENVMAP_TYPE_CUBE\n\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\n			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\n			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\n\n			#ifdef TEXTURE_LOD_EXT\n\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\n			#else\n\n				// force the bias high to get the last LOD level as it is the most blurred.\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\n			#endif\n\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\n		#else\n\n			vec4 envMapColor = vec4( 0.0 );\n\n		#endif\n\n		return PI * envMapColor.rgb * envMapIntensity;\n\n	}\n\n	// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\n		//float envMapWidth = pow( 2.0, maxMIPLevelScalar );\n		//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\n		// clamp to allowable LOD ranges.\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\n	}\n\n	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\n		#else\n\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\n		#endif\n\n		#ifdef DOUBLE_SIDED\n\n			float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n		#else\n\n			float flipNormal = 1.0;\n\n		#endif\n\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\n		#ifdef ENVMAP_TYPE_CUBE\n\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\n			#ifdef TEXTURE_LOD_EXT\n\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\n			#else\n\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\n			#endif\n\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\n			#ifdef TEXTURE_LOD_EXT\n\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\n			#else\n\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\n			#endif\n\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n		#elif defined( ENVMAP_TYPE_SPHERE )\n\n			vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\n			#ifdef TEXTURE_LOD_EXT\n\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n			#else\n\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n			#endif\n\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n		#endif\n\n		return envMapColor.rgb * envMapIntensity;\n\n	}\n\n#endif\n",
THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
THREE.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n\n\nstruct BlinnPhongMaterial {\n\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n	vec3 irradiance = dotNL * directLight.color;\n\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n		irradiance *= PI; // punctual light\n\n	#endif\n\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )	(0)\n",
THREE.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.16 * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#endif\n",
THREE.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n\n	#ifndef STANDARD\n		// future\n	#endif\n\n};\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n	vec3 irradiance = dotNL * directLight.color;\n\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n		irradiance *= PI; // punctual light\n\n	#endif\n\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n	reflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\n}\n\n#define RE_Direct				RE_Direct_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n\n// ref: http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n",
THREE.ShaderChunk.lights_template = "//\n// This is a template that can be used to light a material, it uses pluggable RenderEquations (RE)\n//   for specific lighting scenarios.\n//\n// Instructions for use:\n//  - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n//  - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n//  - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n//\n// TODO:\n//  - Add area light support.\n//  - Add sphere light support.\n//  - Add diffuse light probe (irradiance cubemap) support.\n//\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n	PointLight pointLight;\n\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n		pointLight = pointLights[ i ];\n\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n\n		RE_Direct( directLight, geometry, material, reflectedLight );\n\n	}\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n	SpotLight spotLight;\n\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n		spotLight = spotLights[ i ];\n\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n\n		RE_Direct( directLight, geometry, material, reflectedLight );\n\n	}\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n	DirectionalLight directionalLight;\n\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n		directionalLight = directionalLights[ i ];\n\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n\n		RE_Direct( directLight, geometry, material, reflectedLight );\n\n	}\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n	#ifdef USE_LIGHTMAP\n\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n\n		#endif\n\n		irradiance += lightMapIrradiance;\n\n	#endif\n\n	#if ( NUM_HEMI_LIGHTS > 0 )\n\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n		}\n\n	#endif\n\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n		// TODO, replace 8 with the real maxMIPLevel\n	 	irradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, 8 );\n\n	#endif\n\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n	// TODO, replace 8 with the real maxMIPLevel\n	vec3 radiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), 8 );\n\n	RE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n\n#endif\n",
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif",
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n	#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n\n#endif\n",
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif\n",
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n\n#endif\n",
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n",
THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n\n#endif\n",
THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\n	uniform sampler2D metalnessMap;\n\n#endif",
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n",
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif",
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\n	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...\n\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n",
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n",
THREE.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\n\n\nvec4 packDepthToRGBA( const in float value ) {\n	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = mod( value * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n	res -= res.xxyz * bit_mask;\n	return res;\n}\nfloat unpackRGBAToDepth( const in vec4 rgba ) {\n	const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n	return dot( rgba, bitSh );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthoDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat OrthoDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\n	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n	gl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n",
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n",
THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n\n#endif\n",
THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\n	uniform sampler2D roughnessMap;\n\n#endif",
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	#if NUM_DIR_LIGHTS > 0\n\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\n	#endif\n\n	#if NUM_SPOT_LIGHTS > 0\n\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\n	#endif\n\n	#if NUM_POINT_LIGHTS > 0\n\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\n	#endif\n\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n	}\n\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\n		const vec2 offset = vec2( 0.0, 1.0 );\n\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\n		vec2 f = fract( uv * size + 0.5 );\n\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n\n		return c;\n\n	}\n\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n\n		// if ( something && something ) breaks ATI OpenGL shader compiler\n		// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n		#if defined( SHADOWMAP_TYPE_PCF )\n\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n\n		#else // no percentage-closer filtering:\n\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n		#endif\n\n		}\n\n		return 1.0;\n\n	}\n\n	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n	// vector suitable for 2D texture mapping. This code uses the following layout for the\n	// 2D texture:\n	//\n	// xzXZ\n	//  y Y\n	//\n	// Y - Positive y direction\n	// y - Negative y direction\n	// X - Positive x direction\n	// x - Negative x direction\n	// Z - Positive z direction\n	// z - Negative z direction\n	//\n	// Source and test bed:\n	// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n		// Number of texels to avoid at the edge of each square\n\n		vec3 absV = abs( v );\n\n		// Intersect unit cube\n\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n\n		// Apply scale to avoid seams\n\n		// two texels less per square (one texel will do for NEAREST)\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n		// Unwrap\n\n		// space: -1 ... 1 range for each square\n		//\n		// #X##		dim    := ( 4 , 2 )\n		//  # #		center := ( 1 , 1 )\n\n		vec2 planar = v.xy;\n\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n\n		if ( absV.z >= almostOne ) {\n\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n\n		} else if ( absV.x >= almostOne ) {\n\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n\n		} else if ( absV.y >= almostOne ) {\n\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n\n		}\n\n		// Transform to UV space\n\n		// scale := 0.5 / dim\n		// translate := ( center + 0.5 ) / dim\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n	}\n\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n		// for point lights, the uniform @vShadowCoord is re-purposed to hold\n		// the distance from the light to the world-space position of the fragment.\n		vec3 lightToPosition = shadowCoord.xyz;\n\n		// bd3D = base direction 3D\n		vec3 bd3D = normalize( lightToPosition );\n		// dp = distance from light to fragment position\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n\n		#else // no percentage-closer filtering\n\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n		#endif\n\n	}\n\n#endif\n",
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	#if NUM_DIR_LIGHTS > 0\n\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\n	#endif\n\n	#if NUM_SPOT_LIGHTS > 0\n\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\n	#endif\n\n	#if NUM_POINT_LIGHTS > 0\n\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	#if NUM_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\n	}\n\n	#endif\n\n	#if NUM_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\n	}\n\n	#endif\n\n	#if NUM_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\n	}\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\n	float shadow = 1.0;\n\n	#ifdef USE_SHADOWMAP\n\n	#if NUM_DIR_LIGHTS > 0\n\n	DirectionalLight directionalLight;\n\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n	}\n\n	#endif\n\n	#if NUM_SPOT_LIGHTS > 0\n\n	SpotLight spotLight;\n\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n	}\n\n	#endif\n\n	#if NUM_POINT_LIGHTS > 0\n\n	PointLight pointLight;\n\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\n	}\n\n	#endif\n\n	#endif\n\n	return shadow;\n\n}\n",
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n",
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n",
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif",
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif",
THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n",
THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n  return toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n  // John Hable's filmic operator from Uncharted 2 video game\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n  // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n",
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	varying vec2 vUv2;\n\n#endif",
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n\n#endif",
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	vUv2 = uv2;\n\n#endif",
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n	varying vec2 vUv;\n\n#endif",
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n",
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n	#endif\n\n#endif\n",
THREE.UniformsUtils = {
    merge: function(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
            var r = this.clone(e[n]);
            for (var i in r)
                t[i] = r[i]
        }
        return t
    },
    clone: function(e) {
        var t = {};
        for (var n in e) {
            t[n] = {};
            for (var r in e[n]) {
                var i = e[n][r];
                i instanceof THREE.Color || i instanceof THREE.Vector2 || i instanceof THREE.Vector3 || i instanceof THREE.Vector4 || i instanceof THREE.Matrix3 || i instanceof THREE.Matrix4 || i instanceof THREE.Texture ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
            }
        }
        return t
    }
},
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "1f",
            value: 1
        },
        map: {
            type: "t",
            value: null 
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0,0,1,1)
        },
        specularMap: {
            type: "t",
            value: null 
        },
        alphaMap: {
            type: "t",
            value: null 
        },
        envMap: {
            type: "t",
            value: null 
        },
        flipEnvMap: {
            type: "1f",
            value: -1
        },
        reflectivity: {
            type: "1f",
            value: 1
        },
        refractionRatio: {
            type: "1f",
            value: .98
        }
    },
    aomap: {
        aoMap: {
            type: "t",
            value: null 
        },
        aoMapIntensity: {
            type: "1f",
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            type: "t",
            value: null 
        },
        lightMapIntensity: {
            type: "1f",
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            type: "t",
            value: null 
        }
    },
    bumpmap: {
        bumpMap: {
            type: "t",
            value: null 
        },
        bumpScale: {
            type: "1f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null 
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            type: "t",
            value: null 
        },
        displacementScale: {
            type: "1f",
            value: 1
        },
        displacementBias: {
            type: "1f",
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            type: "t",
            value: null 
        }
    },
    metalnessmap: {
        metalnessMap: {
            type: "t",
            value: null 
        }
    },
    fog: {
        fogDensity: {
            type: "1f",
            value: 25e-5
        },
        fogNear: {
            type: "1f",
            value: 1
        },
        fogFar: {
            type: "1f",
            value: 2e3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "3fv",
            value: []
        },
        directionalLights: {
            type: "sa",
            value: [],
            properties: {
                direction: {
                    type: "v3"
                },
                color: {
                    type: "c"
                },
                shadow: {
                    type: "1i"
                },
                shadowBias: {
                    type: "1f"
                },
                shadowRadius: {
                    type: "1f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        directionalShadowMap: {
            type: "tv",
            value: []
        },
        directionalShadowMatrix: {
            type: "m4v",
            value: []
        },
        spotLights: {
            type: "sa",
            value: [],
            properties: {
                color: {
                    type: "c"
                },
                position: {
                    type: "v3"
                },
                direction: {
                    type: "v3"
                },
                distance: {
                    type: "1f"
                },
                coneCos: {
                    type: "1f"
                },
                penumbraCos: {
                    type: "1f"
                },
                decay: {
                    type: "1f"
                },
                shadow: {
                    type: "1i"
                },
                shadowBias: {
                    type: "1f"
                },
                shadowRadius: {
                    type: "1f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        spotShadowMap: {
            type: "tv",
            value: []
        },
        spotShadowMatrix: {
            type: "m4v",
            value: []
        },
        pointLights: {
            type: "sa",
            value: [],
            properties: {
                color: {
                    type: "c"
                },
                position: {
                    type: "v3"
                },
                decay: {
                    type: "1f"
                },
                distance: {
                    type: "1f"
                },
                shadow: {
                    type: "1i"
                },
                shadowBias: {
                    type: "1f"
                },
                shadowRadius: {
                    type: "1f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        pointShadowMap: {
            type: "tv",
            value: []
        },
        pointShadowMatrix: {
            type: "m4v",
            value: []
        },
        hemisphereLights: {
            type: "sa",
            value: [],
            properties: {
                direction: {
                    type: "v3"
                },
                skyColor: {
                    type: "c"
                },
                groundColor: {
                    type: "c"
                }
            }
        }
    },
    points: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "1f",
            value: 1
        },
        size: {
            type: "1f",
            value: 1
        },
        scale: {
            type: "1f",
            value: 1
        },
        map: {
            type: "t",
            value: null 
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0,0,1,1)
        }
    }
},
THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\n	#include <logdepthbuf_fragment>\n\n}\n",
THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	vWorldPosition = transformDirection( position, modelMatrix );\n\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n}\n",
THREE.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n\n	uniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	vec4 diffuseColor = vec4( 1.0 );\n\n	#if DEPTH_PACKING == 3200\n\n		diffuseColor.a = opacity;\n\n	#endif\n\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n\n	#include <logdepthbuf_fragment>\n\n	#if DEPTH_PACKING == 3200\n\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\n	#elif DEPTH_PACKING == 3201\n\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\n	#endif\n\n}\n",
THREE.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n\n	#include <skinbase_vertex>\n\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n}\n",
THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n	#include <clipping_planes_fragment>\n\n	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n\n}\n",
THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n\n	vWorldPosition = worldPosition;\n\n}\n",
THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	// 	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n\n	#include <logdepthbuf_fragment>\n\n}\n",
THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	vWorldPosition = transformDirection( position, modelMatrix );\n\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n}\n",
THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n		discard;\n\n	}\n\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n\n	outgoingLight = diffuseColor.rgb; // simple shader\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n\n}\n",
THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <color_vertex>\n\n	vLineDistance = scale * lineDistance;\n\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n}\n",
THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n\n	ReflectedLight reflectedLight;\n	reflectedLight.directDiffuse = vec3( 0.0 );\n	reflectedLight.directSpecular = vec3( 0.0 );\n	reflectedLight.indirectDiffuse = diffuseColor.rgb;\n	reflectedLight.indirectSpecular = vec3( 0.0 );\n\n	#include <aomap_fragment>\n\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n	#include <envmap_fragment>\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n\n}\n",
THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n\n	#ifdef USE_ENVMAP\n\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n\n	#endif\n\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n\n}\n",
THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\n\n#ifdef DOUBLE_SIDED\n\n	varying vec3 vLightBack;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n\n	// accumulation\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\n	#include <lightmap_fragment>\n\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\n	#ifdef DOUBLE_SIDED\n\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n	#else\n\n		reflectedLight.directDiffuse = vLightFront;\n\n	#endif\n\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n	// modulation\n	#include <aomap_fragment>\n\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n	#include <envmap_fragment>\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n\n}\n",
THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\n\nvarying vec3 vLightFront;\n\n#ifdef DOUBLE_SIDED\n\n	varying vec3 vLightBack;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n\n}\n",
THREE.ShaderChunk.meshphong_frag = "#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n\n	// accumulation\n	#include <lights_phong_fragment>\n	#include <lights_template>\n\n	// modulation\n	#include <aomap_fragment>\n\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n	#include <envmap_fragment>\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n\n}\n",
THREE.ShaderChunk.meshphong_vert = "#define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n	vNormal = normalize( transformedNormal );\n\n#endif\n\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n	vViewPosition = - mvPosition.xyz;\n\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n\n}\n",
THREE.ShaderChunk.meshphysical_frag = "#define PHYSICAL\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\nuniform float envMapIntensity; // temporary\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n\n	// accumulation\n	#include <lights_physical_fragment>\n	#include <lights_template>\n\n	// modulation\n	#include <aomap_fragment>\n\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n\n}\n",
THREE.ShaderChunk.meshphysical_vert = "#define PHYSICAL\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n	vNormal = normalize( transformedNormal );\n\n#endif\n\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n	vViewPosition = - mvPosition.xyz;\n\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n\n}\n",
THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n	gl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\n	#include <logdepthbuf_fragment>\n\n}\n",
THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	vNormal = normalize( normalMatrix * normal );\n\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n}\n",
THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	#include <clipping_planes_fragment>\n\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n\n	outgoingLight = diffuseColor.rgb;\n\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n\n}\n",
THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n\n}\n",
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.meshbasic_vert,
        fragmentShader: THREE.ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshlambert_vert,
        fragmentShader: THREE.ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "1f",
                value: 30
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphong_vert,
        fragmentShader: THREE.ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            roughness: {
                type: "1f",
                value: .5
            },
            metalness: {
                type: "1f",
                value: 0
            },
            envMapIntensity: {
                type: "1f",
                value: 1
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphysical_vert,
        fragmentShader: THREE.ShaderChunk.meshphysical_frag
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.points_vert,
        fragmentShader: THREE.ShaderChunk.points_frag
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "1f",
                value: 1
            },
            dashSize: {
                type: "1f",
                value: 1
            },
            totalSize: {
                type: "1f",
                value: 2
            }
        }]),
        vertexShader: THREE.ShaderChunk.linedashed_vert,
        fragmentShader: THREE.ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.displacementmap]),
        vertexShader: THREE.ShaderChunk.depth_vert,
        fragmentShader: THREE.ShaderChunk.depth_frag
    },
    normal: {
        uniforms: {
            opacity: {
                type: "1f",
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.normal_vert,
        fragmentShader: THREE.ShaderChunk.normal_frag
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null 
            },
            tFlip: {
                type: "1f",
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.cube_vert,
        fragmentShader: THREE.ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                type: "t",
                value: null 
            },
            tFlip: {
                type: "1f",
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.equirect_vert,
        fragmentShader: THREE.ShaderChunk.equirect_frag
    },
    distanceRGBA: {
        uniforms: {
            lightPos: {
                type: "v3",
                value: new THREE.Vector3
            }
        },
        vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
        fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
    }
},
THREE.ShaderLib.physical = {
    uniforms: THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms, {}]),
    vertexShader: THREE.ShaderChunk.meshphysical_vert,
    fragmentShader: THREE.ShaderChunk.meshphysical_frag
},
THREE.WebGLRenderer = function(e) {
    function t() {
        return null  === xe ? Ue : 1
    }
    function n(e, t, n, r) {
        ue === !0 && (e *= r,
        t *= r,
        n *= r),
        ht.clearColor(e, t, n, r)
    }
    function r() {
        ht.init(),
        ht.scissor(Se.copy(Fe).multiplyScalar(Ue)),
        ht.viewport(Ae.copy(Oe).multiplyScalar(Ue)),
        n(Pe.r, Pe.g, Pe.b, De)
    }
    function i() {
        He = null ,
        we = null ,
        Me = "",
        _e = -1,
        ht.reset()
    }
    function a(e) {
        e.preventDefault(),
        i(),
        r(),
        lt.clear()
    }
    function o(e) {
        var t = e.target;
        t.removeEventListener("dispose", o),
        h(t),
        et.textures--
    }
    function s(e) {
        var t = e.target;
        t.removeEventListener("dispose", s),
        l(t),
        et.textures--
    }
    function c(e) {
        var t = e.target;
        t.removeEventListener("dispose", c),
        u(t)
    }
    function h(e) {
        var t = lt.get(e);
        if (e.image && t.__image__webglTextureCube)
            nt.deleteTexture(t.__image__webglTextureCube);
        else {
            if (void 0 === t.__webglInit)
                return;
            nt.deleteTexture(t.__webglTexture)
        }
        lt["delete"](e)
    }
    function l(e) {
        var t = lt.get(e)
          , n = lt.get(e.texture);
        if (e) {
            if (void 0 !== n.__webglTexture && nt.deleteTexture(n.__webglTexture),
            e.depthTexture && e.depthTexture.dispose(),
            e instanceof THREE.WebGLMultiRenderTarget && t.__webglAttachments)
                for (var r = 0; r < e.attachments.length; r++) {
                    var i = lt.get(e.attachments[r]);
                    nt.deleteTexture(i.__webglTexture)
                }
            if (e instanceof THREE.WebGLRenderTargetCube)
                for (var r = 0; 6 > r; r++)
                    nt.deleteFramebuffer(t.__webglFramebuffer[r]),
                    t.__webglDepthbuffer && nt.deleteRenderbuffer(t.__webglDepthbuffer[r]);
            else
                nt.deleteFramebuffer(t.__webglFramebuffer),
                t.__webglDepthbuffer && nt.deleteRenderbuffer(t.__webglDepthbuffer);
            lt["delete"](e.texture),
            lt["delete"](e)
        }
    }
    function u(e) {
        p(e),
        lt["delete"](e)
    }
    function p(e) {
        var t = lt.get(e).program;
        e.program = void 0,
        void 0 !== t && pt.releaseProgram(t)
    }
    function d(e, t, n, r) {
        var i;
        if (n instanceof THREE.InstancedBufferGeometry && (i = ot.get("ANGLE_instanced_arrays"),
        null  === i))
            return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        void 0 === r && (r = 0),
        ht.initAttributes();
        var a = n.attributes
          , o = t.getAttributes()
          , s = e.defaultAttributeValues;
        for (var c in o) {
            var h = o[c];
            if (h >= 0) {
                var l = a[c];
                if (void 0 !== l) {
                    var u = nt.FLOAT
                      , p = l.array
                      , d = l.normalized;
                    p instanceof Float32Array ? u = nt.FLOAT : p instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : p instanceof Uint16Array ? u = nt.UNSIGNED_SHORT : p instanceof Int16Array ? u = nt.SHORT : p instanceof Uint32Array ? u = nt.UNSIGNED_INT : p instanceof Int32Array ? u = nt.INT : p instanceof Int8Array ? u = nt.BYTE : p instanceof Uint8Array && (u = nt.UNSIGNED_BYTE);
                    var E = l.itemSize
                      , f = ut.getAttributeBuffer(l);
                    if (l instanceof THREE.InterleavedBufferAttribute) {
                        var m = l.data
                          , g = m.stride
                          , v = l.offset;
                        m instanceof THREE.InstancedInterleavedBuffer ? (ht.enableAttributeAndDivisor(h, m.meshPerAttribute, i),
                        void 0 === n.maxInstancedCount && (n.maxInstancedCount = m.meshPerAttribute * m.count)) : ht.enableAttribute(h),
                        nt.bindBuffer(nt.ARRAY_BUFFER, f),
                        nt.vertexAttribPointer(h, E, u, d, g * m.array.BYTES_PER_ELEMENT, (r * g + v) * m.array.BYTES_PER_ELEMENT)
                    } else
                        l instanceof THREE.InstancedBufferAttribute ? (ht.enableAttributeAndDivisor(h, l.meshPerAttribute, i),
                        void 0 === n.maxInstancedCount && (n.maxInstancedCount = l.meshPerAttribute * l.count)) : ht.enableAttribute(h),
                        nt.bindBuffer(nt.ARRAY_BUFFER, f),
                        nt.vertexAttribPointer(h, E, u, d, 0, r * E * l.array.BYTES_PER_ELEMENT)
                } else if (void 0 !== s) {
                    var T = s[c];
                    if (void 0 !== T)
                        switch (T.length) {
                        case 2:
                            nt.vertexAttrib2fv(h, T);
                            break;
                        case 3:
                            nt.vertexAttrib3fv(h, T);
                            break;
                        case 4:
                            nt.vertexAttrib4fv(h, T);
                            break;
                        default:
                            nt.vertexAttrib1fv(h, T)
                        }
                }
            }
        }
        ht.disableUnusedAttributes()
    }
    function E(e, t) {
        return Math.abs(t[0]) - Math.abs(e[0])
    }
    function f(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }
    function m(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }
    function g(e, t, n, r, i) {
        var a, o;
        n.transparent ? (a = me,
        o = ++ge) : (a = Ee,
        o = ++fe);
        var s = a[o];
        void 0 !== s ? (s.id = e.id,
        s.object = e,
        s.geometry = t,
        s.material = n,
        s.z = Je.z,
        s.group = i) : (s = {
            id: e.id,
            object: e,
            geometry: t,
            material: n,
            z: Je.z,
            group: i
        },
        a.push(s))
    }
    function v(e) {
        var t = e.geometry;
        null  === t.boundingSphere && t.computeBoundingSphere();
        var n = Ze.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
        if (!Ge.intersectsSphere(n))
            return !1;
        if (0 === je)
            return !0;
        var r = Re.clippingPlanes
          , i = n.center
          , a = -n.radius
          , o = 0;
        do
            if (r[o].distanceToPoint(i) < a)
                return !1;
        while (++o !== je);return !0
    }
    function T(e, t) {
        if (e.visible !== !1) {
            if (e.layers.test(t.layers))
                if (e instanceof THREE.Light)
                    de.push(e);
                else if (e instanceof THREE.Sprite)
                    (e.frustumCulled === !1 || v(e) === !0) && Te.push(e);
                else if (e instanceof THREE.LensFlare)
                    ye.push(e);
                else if (e instanceof THREE.ImmediateRenderObject)
                    Re.sortObjects === !0 && (Je.setFromMatrixPosition(e.matrixWorld),
                    Je.applyProjection(Qe)),
                    g(e, null , e.material, Je.z, null );
                else if ((e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && (e instanceof THREE.SkinnedMesh && e.skeleton.update(),
                e.frustumCulled === !1 || v(e) === !0)) {
                    var n = e.material;
                    if (n.visible === !0) {
                        Re.sortObjects === !0 && (Je.setFromMatrixPosition(e.matrixWorld),
                        Je.applyProjection(Qe));
                        var r = ut.update(e);
                        if (n instanceof THREE.MultiMaterial)
                            for (var i = r.groups, a = n.materials, o = 0, s = i.length; s > o; o++) {
                                var c = i[o]
                                  , h = a[c.materialIndex];
                                h.visible === !0 && g(e, r, h, Je.z, c)
                            }
                        else
                            g(e, r, n, Je.z, null )
                    }
                }
            for (var l = e.children, o = 0, s = l.length; s > o; o++)
                T(l[o], t)
        }
    }
    function y(e, t, n, r) {
        for (var i = 0, a = e.length; a > i; i++) {
            var o = e[i]
              , s = o.object
              , c = o.geometry
              , h = void 0 === r ? o.material : r
              , l = o.group;
            if (s.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, s.matrixWorld),
            s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
            s instanceof THREE.ImmediateRenderObject) {
                H(h);
                var u = b(t, n, h, s);
                Me = "",
                s.render(function(e) {
                    Re.renderBufferImmediate(e, u, h)
                })
            } else
                Re.renderBufferDirect(t, n, c, h, s, l)
        }
    }
    function R(e, t, n) {
        var r = lt.get(e)
          , i = pt.getParameters(e, $e, t, je, n)
          , a = pt.getProgramCode(e, i)
          , o = r.program
          , s = !0;
        if (void 0 === o)
            e.addEventListener("dispose", c);
        else if (o.code !== a)
            p(e);
        else {
            if (void 0 !== i.shaderID)
                return;
            s = !1
        }
        if (s) {
            if (i.shaderID) {
                var h = THREE.ShaderLib[i.shaderID]
                  , l = e.shaderOverride || {};
                r.__webglShader = {
                    name: l.type || e.type,
                    uniforms: l.uniforms || THREE.UniformsUtils.clone(h.uniforms),
                    vertexShader: l.vertexShader || h.vertexShader,
                    fragmentShader: l.fragmentShader || h.fragmentShader
                }
            } else {
                i.shaderID ? THREE.ShaderLib[i.shaderID] : null ;
                r.__webglShader = {
                    name: e.type,
                    uniforms: e.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                }
            }
            e.__webglShader = r.__webglShader,
            o = pt.acquireProgram(e, i, a),
            r.program = o,
            e.program = o
        }
        var u = o.getAttributes();
        if (e.morphTargets) {
            e.numSupportedMorphTargets = 0;
            for (var d = 0; d < Re.maxMorphTargets; d++)
                u["morphTarget" + d] >= 0 && e.numSupportedMorphTargets++
        }
        if (e.morphNormals) {
            e.numSupportedMorphNormals = 0;
            for (var d = 0; d < Re.maxMorphNormals; d++)
                u["morphNormal" + d] >= 0 && e.numSupportedMorphNormals++
        }
        var E = r.__webglShader.uniforms;
        (e instanceof THREE.ShaderMaterial || e instanceof THREE.RawShaderMaterial) && e.clipping !== !0 || (r.numClippingPlanes = je,
        E.clippingPlanes = We),
        (e instanceof THREE.MeshPhongMaterial || e instanceof THREE.MeshLambertMaterial || e instanceof THREE.MeshStandardMaterial || e.lights) && (r.lightsHash = $e.hash,
        E.ambientLightColor.value = $e.ambient,
        E.directionalLights.value = $e.directional,
        E.spotLights.value = $e.spot,
        E.pointLights.value = $e.point,
        E.hemisphereLights.value = $e.hemi,
        E.directionalShadowMap.value = $e.directionalShadowMap,
        E.directionalShadowMatrix.value = $e.directionalShadowMatrix,
        E.spotShadowMap.value = $e.spotShadowMap,
        E.spotShadowMatrix.value = $e.spotShadowMatrix,
        E.pointShadowMap.value = $e.pointShadowMap,
        E.pointShadowMatrix.value = $e.pointShadowMatrix);
        var f = r.program.getUniforms()
          , m = THREE.WebGLUniforms.seqWithValue(f.seq, E);
        r.uniformsList = m,
        r.dynamicUniforms = THREE.WebGLUniforms.splitDynamic(m, E)
    }
    function H(e) {
        x(e),
        e.transparent === !0 ? ht.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : ht.setBlending(THREE.NoBlending),
        ht.setDepthFunc(e.depthFunc),
        ht.setDepthTest(e.depthTest),
        ht.setDepthWrite(e.depthWrite),
        ht.setColorWrite(e.colorWrite),
        ht.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
    }
    function x(e) {
        e.side !== THREE.DoubleSide ? ht.enable(nt.CULL_FACE) : ht.disable(nt.CULL_FACE),
        ht.setFlipSided(e.side === THREE.BackSide)
    }
    function b(e, t, n, r) {
        Ce = 0;
        var i = lt.get(n);
        if (Ve) {
            if (ze || e !== we) {
                var a = e === we && n.id === _e;
                G(n.clippingPlanes, n.clipShadows, e, i, a)
            }
            void 0 !== i.numClippingPlanes && i.numClippingPlanes !== je && (n.needsUpdate = !0)
        }
        void 0 === i.program && (n.needsUpdate = !0),
        void 0 !== i.lightsHash && i.lightsHash !== $e.hash && (n.needsUpdate = !0),
        n.needsUpdate && (R(n, t, r),
        n.needsUpdate = !1);
        var o = !1
          , s = !1
          , c = !1
          , h = i.program
          , l = h.getUniforms()
          , u = i.__webglShader.uniforms;
        if (h.id !== He && (nt.useProgram(h.program),
        He = h.id,
        o = !0,
        s = !0,
        c = !0),
        n.id !== _e && (_e = n.id,
        s = !0),
        o || e !== we) {
            if (l.set(nt, e, "projectionMatrix"),
            ct.logarithmicDepthBuffer && l.setValue(nt, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
            e !== we && (we = e,
            s = !0,
            c = !0),
            n instanceof THREE.ShaderMaterial || n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshStandardMaterial || n.envMap) {
                var p = l.map.cameraPosition;
                void 0 !== p && p.setValue(nt, Je.setFromMatrixPosition(e.matrixWorld))
            }
            (n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshStandardMaterial || n instanceof THREE.ShaderMaterial || n.skinning) && l.setValue(nt, "viewMatrix", e.matrixWorldInverse),
            l.set(nt, Re, "toneMappingExposure"),
            l.set(nt, Re, "toneMappingWhitePoint")
        }
        if (n.skinning) {
            l.setOptional(nt, r, "bindMatrix"),
            l.setOptional(nt, r, "bindMatrixInverse");
            var d = r.skeleton;
            d && (ct.floatVertexTextures && d.useVertexTexture ? (l.set(nt, d, "boneTexture"),
            l.set(nt, d, "boneTextureWidth"),
            l.set(nt, d, "boneTextureHeight")) : l.setOptional(nt, d, "boneMatrices"))
        }
        s && ((n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshStandardMaterial || n.lights) && B(u, c),
        t && n.fog && L(u, t),
        (n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshStandardMaterial || n instanceof THREE.MeshDepthMaterial) && _(u, n),
        n instanceof THREE.LineBasicMaterial ? M(u, n) : n instanceof THREE.LineDashedMaterial ? (M(u, n),
        w(u, n)) : n instanceof THREE.PointsMaterial ? S(u, n) : n instanceof THREE.MeshLambertMaterial ? A(u, n) : n instanceof THREE.MeshPhongMaterial ? C(u, n) : n instanceof THREE.MeshPhysicalMaterial ? D(u, n) : n instanceof THREE.MeshStandardMaterial ? P(u, n) : n instanceof THREE.MeshDepthMaterial ? n.displacementMap && (u.displacementMap.value = n.displacementMap,
        u.displacementScale.value = n.displacementScale,
        u.displacementBias.value = n.displacementBias) : n instanceof THREE.MeshNormalMaterial && (u.opacity.value = n.opacity),
        THREE.WebGLUniforms.upload(nt, i.uniformsList, u, Re)),
        l.set(nt, r, "modelViewMatrix"),
        l.set(nt, r, "normalMatrix"),
        l.setValue(nt, "modelMatrix", r.matrixWorld);
        var E = i.dynamicUniforms;
        return null  !== E && (THREE.WebGLUniforms.evalDynamic(E, u, r, e),
        THREE.WebGLUniforms.upload(nt, E, u, Re)),
        h
    }
    function _(e, t) {
        e.opacity.value = t.opacity,
        e.diffuse.value = t.color,
        t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),
        e.map.value = t.map,
        e.specularMap.value = t.specularMap,
        e.alphaMap.value = t.alphaMap,
        t.aoMap && (e.aoMap.value = t.aoMap,
        e.aoMapIntensity.value = t.aoMapIntensity);
        var n;
        if (t.map ? n = t.map : t.specularMap ? n = t.specularMap : t.displacementMap ? n = t.displacementMap : t.normalMap ? n = t.normalMap : t.bumpMap ? n = t.bumpMap : t.roughnessMap ? n = t.roughnessMap : t.metalnessMap ? n = t.metalnessMap : t.alphaMap ? n = t.alphaMap : t.emissiveMap && (n = t.emissiveMap),
        void 0 !== n) {
            n instanceof THREE.WebGLRenderTarget && (n = n.texture);
            var r = n.offset
              , i = n.repeat;
            e.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
        }
        e.envMap.value = t.envMap,
        e.flipEnvMap.value = t.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1,
        e.reflectivity.value = t.reflectivity,
        e.refractionRatio.value = t.refractionRatio
    }
    function M(e, t) {
        e.diffuse.value = t.color,
        e.opacity.value = t.opacity
    }
    function w(e, t) {
        e.dashSize.value = t.dashSize,
        e.totalSize.value = t.dashSize + t.gapSize,
        e.scale.value = t.scale
    }
    function S(e, t) {
        if (e.diffuse.value = t.color,
        e.opacity.value = t.opacity,
        e.size.value = t.size * Ue,
        e.scale.value = .5 * ae.clientHeight,
        e.map.value = t.map,
        null  !== t.map) {
            var n = t.map.offset
              , r = t.map.repeat;
            e.offsetRepeat.value.set(n.x, n.y, r.x, r.y)
        }
    }
    function L(e, t) {
        e.fogColor.value = t.color,
        t instanceof THREE.Fog ? (e.fogNear.value = t.near,
        e.fogFar.value = t.far) : t instanceof THREE.FogExp2 && (e.fogDensity.value = t.density)
    }
    function A(e, t) {
        t.lightMap && (e.lightMap.value = t.lightMap,
        e.lightMapIntensity.value = t.lightMapIntensity),
        t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
    }
    function C(e, t) {
        e.specular.value = t.specular,
        e.shininess.value = Math.max(t.shininess, 1e-4),
        t.lightMap && (e.lightMap.value = t.lightMap,
        e.lightMapIntensity.value = t.lightMapIntensity),
        t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
        t.bumpMap && (e.bumpMap.value = t.bumpMap,
        e.bumpScale.value = t.bumpScale),
        t.normalMap && (e.normalMap.value = t.normalMap,
        e.normalScale.value.copy(t.normalScale)),
        t.displacementMap && (e.displacementMap.value = t.displacementMap,
        e.displacementScale.value = t.displacementScale,
        e.displacementBias.value = t.displacementBias)
    }
    function P(e, t) {
        e.roughness.value = t.roughness,
        e.metalness.value = t.metalness,
        t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
        t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
        t.lightMap && (e.lightMap.value = t.lightMap,
        e.lightMapIntensity.value = t.lightMapIntensity),
        t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
        t.bumpMap && (e.bumpMap.value = t.bumpMap,
        e.bumpScale.value = t.bumpScale),
        t.normalMap && (e.normalMap.value = t.normalMap,
        e.normalScale.value.copy(t.normalScale)),
        t.displacementMap && (e.displacementMap.value = t.displacementMap,
        e.displacementScale.value = t.displacementScale,
        e.displacementBias.value = t.displacementBias),
        t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
    }
    function D(e, t) {
        P(e, t)
    }
    function B(e, t) {
        e.ambientLightColor.needsUpdate = t,
        e.directionalLights.needsUpdate = t,
        e.pointLights.needsUpdate = t,
        e.spotLights.needsUpdate = t,
        e.hemisphereLights.needsUpdate = t
    }
    function I(e) {
        for (var t = 0, n = 0, r = e.length; r > n; n++) {
            var i = e[n];
            i.castShadow && ($e.shadows[t++] = i)
        }
        $e.shadows.length = t
    }
    function U(e, t) {
        var n, r, i, a, o, s, c = 0, h = 0, l = 0, u = t.matrixWorldInverse, p = 0, d = 0, E = 0, f = 0;
        for (n = 0,
        r = e.length; r > n; n++)
            if (i = e[n],
            a = i.color,
            o = i.intensity,
            s = i.distance,
            i instanceof THREE.AmbientLight)
                c += a.r * o,
                h += a.g * o,
                l += a.b * o;
            else if (i instanceof THREE.DirectionalLight) {
                var m = dt.get(i);
                m.color.copy(i.color).multiplyScalar(i.intensity),
                m.direction.setFromMatrixPosition(i.matrixWorld),
                Je.setFromMatrixPosition(i.target.matrixWorld),
                m.direction.sub(Je),
                m.direction.transformDirection(u),
                m.shadow = i.castShadow,
                i.castShadow && (m.shadowBias = i.shadow.bias,
                m.shadowRadius = i.shadow.radius,
                m.shadowMapSize = i.shadow.mapSize),
                $e.directionalShadowMap[p] = i.shadow.map,
                $e.directionalShadowMatrix[p] = i.shadow.matrix,
                $e.directional[p++] = m
            } else if (i instanceof THREE.SpotLight) {
                var m = dt.get(i);
                m.position.setFromMatrixPosition(i.matrixWorld),
                m.position.applyMatrix4(u),
                m.color.copy(a).multiplyScalar(o),
                m.distance = s,
                m.direction.setFromMatrixPosition(i.matrixWorld),
                Je.setFromMatrixPosition(i.target.matrixWorld),
                m.direction.sub(Je),
                m.direction.transformDirection(u),
                m.coneCos = Math.cos(i.angle),
                m.penumbraCos = Math.cos(i.angle * (1 - i.penumbra)),
                m.decay = 0 === i.distance ? 0 : i.decay,
                m.shadow = i.castShadow,
                i.castShadow && (m.shadowBias = i.shadow.bias,
                m.shadowRadius = i.shadow.radius,
                m.shadowMapSize = i.shadow.mapSize),
                $e.spotShadowMap[E] = i.shadow.map,
                $e.spotShadowMatrix[E] = i.shadow.matrix,
                $e.spot[E++] = m
            } else if (i instanceof THREE.PointLight) {
                var m = dt.get(i);
                m.position.setFromMatrixPosition(i.matrixWorld),
                m.position.applyMatrix4(u),
                m.color.copy(i.color).multiplyScalar(i.intensity),
                m.distance = i.distance,
                m.decay = 0 === i.distance ? 0 : i.decay,
                m.shadow = i.castShadow,
                i.castShadow && (m.shadowBias = i.shadow.bias,
                m.shadowRadius = i.shadow.radius,
                m.shadowMapSize = i.shadow.mapSize),
                $e.pointShadowMap[d] = i.shadow.map,
                void 0 === $e.pointShadowMatrix[d] && ($e.pointShadowMatrix[d] = new THREE.Matrix4),
                Je.setFromMatrixPosition(i.matrixWorld).negate(),
                $e.pointShadowMatrix[d].identity().setPosition(Je),
                $e.point[d++] = m
            } else if (i instanceof THREE.HemisphereLight) {
                var m = dt.get(i);
                m.direction.setFromMatrixPosition(i.matrixWorld),
                m.direction.transformDirection(u),
                m.direction.normalize(),
                m.skyColor.copy(i.color).multiplyScalar(o),
                m.groundColor.copy(i.groundColor).multiplyScalar(o),
                $e.hemi[f++] = m
            }
        $e.ambient[0] = c,
        $e.ambient[1] = h,
        $e.ambient[2] = l,
        $e.directional.length = p,
        $e.spot.length = E,
        $e.point.length = d,
        $e.hemi.length = f,
        $e.hash = p + "," + d + "," + E + "," + f + "," + $e.shadows.length
    }
    function F(e, t) {
        Ve = 0 !== Re.clippingPlanes.length || Re.localClippingEnabled || 0 !== qe || ze,
        ze = Re.localClippingEnabled,
        Xe = N(e, t, 0),
        qe = null  !== e ? e.length : 0
    }
    function N(e, t, n, r) {
        var i = null  !== e ? e.length : 0
          , a = null ;
        if (0 !== i) {
            if (a = We.value,
            r !== !0 || null  === a) {
                var o = n + 4 * i
                  , s = t.matrixWorldInverse
                  , c = Ye.getNormalMatrix(s);
                (null  === a || a.length < o) && (a = new Float32Array(o));
                for (var h = 0, l = n; h !== i; ++h,
                l += 4) {
                    var u = Ke.copy(e[h]).applyMatrix4(s, c);
                    u.normal.toArray(a, l),
                    a[l + 3] = u.constant
                }
            }
            We.value = a,
            We.needsUpdate = !0
        }
        return je = i,
        a
    }
    function O() {
        We.value !== Xe && (We.value = Xe,
        We.needsUpdate = qe > 0),
        je = qe
    }
    function G(e, t, n, r, i) {
        if (!ze || null  === e || 0 === e.length || ke && !t)
            ke ? N(null ) : O();
        else {
            var a = ke ? 0 : qe
              , o = 4 * a
              , s = r.clippingState || null ;
            We.value = s,
            s = N(e, n, o, i);
            for (var c = 0; c !== o; ++c)
                s[c] = Xe[c];
            r.clippingState = s,
            je += a
        }
    }
    function V() {
        var e = Ce;
        return e >= ct.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + ct.maxTextures),
        Ce += 1,
        e
    }
    function z(e, t, n) {
        var r;
        if (n ? (nt.texParameteri(e, nt.TEXTURE_WRAP_S, ie(t.wrapS)),
        nt.texParameteri(e, nt.TEXTURE_WRAP_T, ie(t.wrapT)),
        nt.texParameteri(e, nt.TEXTURE_MAG_FILTER, ie(t.magFilter)),
        nt.texParameteri(e, nt.TEXTURE_MIN_FILTER, ie(t.minFilter))) : (nt.texParameteri(e, nt.TEXTURE_WRAP_S, nt.CLAMP_TO_EDGE),
        nt.texParameteri(e, nt.TEXTURE_WRAP_T, nt.CLAMP_TO_EDGE),
        (t.wrapS !== THREE.ClampToEdgeWrapping || t.wrapT !== THREE.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", t),
        nt.texParameteri(e, nt.TEXTURE_MAG_FILTER, re(t.magFilter)),
        nt.texParameteri(e, nt.TEXTURE_MIN_FILTER, re(t.minFilter)),
        t.minFilter !== THREE.NearestFilter && t.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", t)),
        r = ot.get("EXT_texture_filter_anisotropic")) {
            if (t.type === THREE.FloatType && null  === ot.get("OES_texture_float_linear"))
                return;
            if (t.type === THREE.HalfFloatType && null  === ot.get("OES_texture_half_float_linear"))
                return;
            (t.anisotropy > 1 || lt.get(t).__currentAnisotropy) && (nt.texParameterf(e, r.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Re.getMaxAnisotropy())),
            lt.get(t).__currentAnisotropy = t.anisotropy)
        }
    }
    function k(e, t, n) {
        void 0 === e.__webglInit && (e.__webglInit = !0,
        t.addEventListener("dispose", o),
        e.__webglTexture = nt.createTexture(),
        et.textures++),
        ht.activeTexture(nt.TEXTURE0 + n),
        ht.bindTexture(nt.TEXTURE_2D, e.__webglTexture),
        nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL, t.flipY),
        nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
        nt.pixelStorei(nt.UNPACK_ALIGNMENT, t.unpackAlignment);
        var r = W(t.image, ct.maxTextureSize);
        q(t) && X(r) === !1 && (r = Y(r));
        var i = X(r)
          , a = ie(t.format)
          , s = ie(t.type);
        z(nt.TEXTURE_2D, t, i);
        var c, h = t.mipmaps;
        if (t instanceof THREE.DepthTexture) {
            var l = nt.DEPTH_COMPONENT;
            if (t.type === THREE.FloatType) {
                if (!at)
                    throw new Error("Float Depth Texture only supported in WebGL2.0");
                l = nt.DEPTH_COMPONENT32F
            } else
                at && (l = nt.DEPTH_COMPONENT16);
            ht.texImage2D(nt.TEXTURE_2D, 0, l, r.width, r.height, 0, a, s, null )
        } else if (t instanceof THREE.DataTexture)
            if (h.length > 0 && i) {
                for (var u = 0, p = h.length; p > u; u++)
                    c = h[u],
                    ht.texImage2D(nt.TEXTURE_2D, u, a, c.width, c.height, 0, a, s, c.data);
                t.generateMipmaps = !1
            } else
                ht.texImage2D(nt.TEXTURE_2D, 0, a, r.width, r.height, 0, a, s, r.data);
        else if (t instanceof THREE.CompressedTexture)
            for (var u = 0, p = h.length; p > u; u++)
                c = h[u],
                t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat ? ht.getCompressedTextureFormats().indexOf(a) > -1 ? ht.compressedTexImage2D(nt.TEXTURE_2D, u, a, c.width, c.height, 0, c.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ht.texImage2D(nt.TEXTURE_2D, u, a, c.width, c.height, 0, a, s, c.data);
        else if (h.length > 0 && i) {
            for (var u = 0, p = h.length; p > u; u++)
                c = h[u],
                ht.texImage2D(nt.TEXTURE_2D, u, a, a, s, c);
            t.generateMipmaps = !1
        } else
            ht.texImage2D(nt.TEXTURE_2D, 0, a, a, s, r);
        t.generateMipmaps && i && nt.generateMipmap(nt.TEXTURE_2D),
        e.__version = t.version,
        t.onUpdate && t.onUpdate(t)
    }
    function j(e, t) {
        e instanceof THREE.WebGLRenderTarget && (e = e.texture);
        var n = lt.get(e);
        if (e.version > 0 && n.__version !== e.version) {
            var r = e.image;
            return void 0 === r ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e) : r.complete === !1 ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e) : void k(n, e, t)
        }
        ht.activeTexture(nt.TEXTURE0 + t),
        ht.bindTexture(nt.TEXTURE_2D, n.__webglTexture)
    }
    function W(e, t) {
        if (e.width > t || e.height > t) {
            var n = t / Math.max(e.width, e.height)
              , r = document.createElement("canvas");
            r.width = Math.floor(e.width * n),
            r.height = Math.floor(e.height * n);
            var i = r.getContext("2d");
            return i.drawImage(e, 0, 0, e.width, e.height, 0, 0, r.width, r.height),
            console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + r.width + "x" + r.height, e),
            r
        }
        return e
    }
    function X(e) {
        return THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height)
    }
    function q(e) {
        return e.wrapS !== THREE.ClampToEdgeWrapping || e.wrapT !== THREE.ClampToEdgeWrapping ? !0 : e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter ? !0 : !1
    }
    function Y(e) {
        if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
            var t = document.createElement("canvas");
            t.width = THREE.Math.nearestPowerOfTwo(e.width),
            t.height = THREE.Math.nearestPowerOfTwo(e.height);
            var n = t.getContext("2d");
            return n.drawImage(e, 0, 0, t.width, t.height),
            console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e),
            t
        }
        return e
    }
    function Z(e, t) {
        var n = lt.get(e);
        if (6 === e.image.length)
            if (e.version > 0 && n.__version !== e.version) {
                n.__image__webglTextureCube || (e.addEventListener("dispose", o),
                n.__image__webglTextureCube = nt.createTexture(),
                et.textures++),
                ht.activeTexture(nt.TEXTURE0 + t),
                ht.bindTexture(nt.TEXTURE_CUBE_MAP, n.__image__webglTextureCube),
                nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL, e.flipY);
                for (var r = e instanceof THREE.CompressedTexture, i = e.image[0] instanceof THREE.DataTexture, a = [], s = 0; 6 > s; s++)
                    !Re.autoScaleCubemaps || r || i ? a[s] = i ? e.image[s].image : e.image[s] : a[s] = W(e.image[s], ct.maxCubemapSize);
                var c = a[0]
                  , h = X(c)
                  , l = ie(e.format)
                  , u = ie(e.type);
                z(nt.TEXTURE_CUBE_MAP, e, h);
                for (var s = 0; 6 > s; s++)
                    if (r)
                        for (var p, d = a[s].mipmaps, E = 0, f = d.length; f > E; E++)
                            p = d[E],
                            e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? ht.getCompressedTextureFormats().indexOf(l) > -1 ? ht.compressedTexImage2D(nt.TEXTURE_CUBE_MAP_POSITIVE_X + s, E, l, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : ht.texImage2D(nt.TEXTURE_CUBE_MAP_POSITIVE_X + s, E, l, p.width, p.height, 0, l, u, p.data);
                    else
                        i ? ht.texImage2D(nt.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, l, a[s].width, a[s].height, 0, l, u, a[s].data) : ht.texImage2D(nt.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, l, l, u, a[s]);
                e.generateMipmaps && h && nt.generateMipmap(nt.TEXTURE_CUBE_MAP),
                n.__version = e.version,
                e.onUpdate && e.onUpdate(e)
            } else
                ht.activeTexture(nt.TEXTURE0 + t),
                ht.bindTexture(nt.TEXTURE_CUBE_MAP, n.__image__webglTextureCube)
    }
    function K(e, t) {
        ht.activeTexture(nt.TEXTURE0 + t),
        ht.bindTexture(nt.TEXTURE_CUBE_MAP, lt.get(e).__webglTexture)
    }
    function Q(e, t, n, r, i, a) {
        var o = ie(r.format)
          , s = ie(r.type);
        ht.texImage2D(a, 0, o, t, n, 0, o, s, null ),
        nt.bindFramebuffer(nt.FRAMEBUFFER, e),
        nt.framebufferTexture2D(nt.FRAMEBUFFER, i, a, lt.get(r).__webglTexture, 0),
        nt.bindFramebuffer(nt.FRAMEBUFFER, null )
    }
    function J(e, t) {
        nt.bindRenderbuffer(nt.RENDERBUFFER, e),
        t.depthBuffer && !t.stencilBuffer ? (nt.renderbufferStorage(nt.RENDERBUFFER, nt.DEPTH_COMPONENT16, t.width, t.height),
        nt.framebufferRenderbuffer(nt.FRAMEBUFFER, nt.DEPTH_ATTACHMENT, nt.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (nt.renderbufferStorage(nt.RENDERBUFFER, nt.DEPTH_STENCIL, t.width, t.height),
        nt.framebufferRenderbuffer(nt.FRAMEBUFFER, nt.DEPTH_STENCIL_ATTACHMENT, nt.RENDERBUFFER, e)) : nt.renderbufferStorage(nt.RENDERBUFFER, nt.RGBA4, t.width, t.height),
        nt.bindRenderbuffer(nt.RENDERBUFFER, null )
    }
    function $(e, t) {
        var n = t instanceof THREE.WebGLRenderTargetCube;
        if (n)
            throw new Error("Depth Texture with cube render targets is not supported!");
        if (nt.bindFramebuffer(nt.FRAMEBUFFER, e),
        !(t.depthTexture instanceof THREE.DepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        lt.get(t.depthTexture).__webglTexture && t.depthTexture.image.width === t.width && t.depthTexture.image.height === t.height || (t.depthTexture.image.width = t.width,
        t.depthTexture.image.height = t.height,
        t.depthTexture.needsUpdate = !0),
        Re.setTexture2D(t.depthTexture, 0);
        var r = lt.get(t.depthTexture).__webglTexture;
        nt.framebufferTexture2D(nt.FRAMEBUFFER, nt.DEPTH_ATTACHMENT, nt.TEXTURE_2D, r, 0)
    }
    function ee(e) {
        var t = lt.get(e)
          , n = e instanceof THREE.WebGLRenderTargetCube;
        if (e.depthTexture) {
            if (n)
                throw new Error("target.depthTexture not supported in Cube render targets");
            $(t.__webglFramebuffer, e)
        } else if (n) {
            t.__webglDepthbuffer = [];
            for (var r = 0; 6 > r; r++)
                nt.bindFramebuffer(nt.FRAMEBUFFER, t.__webglFramebuffer[r]),
                t.__webglDepthbuffer[r] = nt.createRenderbuffer(),
                J(t.__webglDepthbuffer[r], e)
        } else
            nt.bindFramebuffer(nt.FRAMEBUFFER, t.__webglFramebuffer),
            t.__webglDepthbuffer = nt.createRenderbuffer(),
            J(t.__webglDepthbuffer, e);
        nt.bindFramebuffer(nt.FRAMEBUFFER, null )
    }
    function te(e) {
        var t = lt.get(e)
          , n = lt.get(e.texture);
        if (e.addEventListener("dispose", s),
        e instanceof THREE.WebGLMultiRenderTarget) {
            t.__webglAttachmentTextures = [],
            t.__webglAttachments = [];
            for (var r = 0; r < e.attachments.length; r++) {
                var i = lt.get(e.attachments[r]);
                i.__webglTexture = nt.createTexture(),
                t.__webglAttachments[r] = nt.COLOR_ATTACHMENT0 + r,
                et.textures++
            }
        } else
            n.__webglTexture = nt.createTexture(),
            et.textures++;
        var a = e instanceof THREE.WebGLRenderTargetCube
          , o = THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height);
        if (a) {
            t.__webglFramebuffer = [];
            for (var r = 0; 6 > r; r++)
                t.__webglFramebuffer[r] = nt.createFramebuffer()
        } else
            t.__webglFramebuffer = nt.createFramebuffer();
        if (a) {
            ht.bindTexture(nt.TEXTURE_CUBE_MAP, n.__webglTexture),
            z(nt.TEXTURE_CUBE_MAP, e.texture, o);
            for (var r = 0; 6 > r; r++)
                Q(t.__webglFramebuffer[r], e.width, e.height, e.texture, nt.COLOR_ATTACHMENT0, nt.TEXTURE_CUBE_MAP_POSITIVE_X + r);
            e.texture.generateMipmaps && o && nt.generateMipmap(nt.TEXTURE_CUBE_MAP),
            ht.bindTexture(nt.TEXTURE_CUBE_MAP, null )
        } else {
            if (e instanceof THREE.WebGLMultiRenderTarget)
                for (var r = 0; r < e.attachments.length; r++) {
                    var c = e.attachments[r]
                      , i = lt.get(c);
                    ht.bindTexture(nt.TEXTURE_2D, i.__webglTexture),
                    z(nt.TEXTURE_2D, c, o),
                    Q(t.__webglFramebuffer, e.width, e.height, c, nt.COLOR_ATTACHMENT0 + r, nt.TEXTURE_2D),
                    c.generateMipmaps && o && nt.generateMipmap(nt.TEXTURE_2D)
                }
            else
                ht.bindTexture(nt.TEXTURE_2D, n.__webglTexture),
                z(nt.TEXTURE_2D, e.texture, o),
                Q(t.__webglFramebuffer, e.width, e.height, e.texture, nt.COLOR_ATTACHMENT0, nt.TEXTURE_2D),
                e.texture.generateMipmaps && o && nt.generateMipmap(nt.TEXTURE_2D);
            ht.bindTexture(nt.TEXTURE_2D, null )
        }
        e.depthBuffer && ee(e)
    }
    function ne(e) {
        var t = e instanceof THREE.WebGLRenderTargetCube ? nt.TEXTURE_CUBE_MAP : nt.TEXTURE_2D;
        if (e instanceof THREE.WebGLMultiRenderTarget)
            for (var n = 0; n < e.attachments.length; n++) {
                var r = lt.get(e.attachments[n]).__webglTexture;
                ht.bindTexture(t, r),
                nt.generateMipmap(t)
            }
        else {
            var r = lt.get(e.texture).__webglTexture;
            ht.bindTexture(t, r),
            nt.generateMipmap(t)
        }
        ht.bindTexture(t, null )
    }
    function re(e) {
        return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? nt.NEAREST : nt.LINEAR
    }
    function ie(e) {
        var t;
        if (e === THREE.RepeatWrapping)
            return nt.REPEAT;
        if (e === THREE.ClampToEdgeWrapping)
            return nt.CLAMP_TO_EDGE;
        if (e === THREE.MirroredRepeatWrapping)
            return nt.MIRRORED_REPEAT;
        if (e === THREE.NearestFilter)
            return nt.NEAREST;
        if (e === THREE.NearestMipMapNearestFilter)
            return nt.NEAREST_MIPMAP_NEAREST;
        if (e === THREE.NearestMipMapLinearFilter)
            return nt.NEAREST_MIPMAP_LINEAR;
        if (e === THREE.LinearFilter)
            return nt.LINEAR;
        if (e === THREE.LinearMipMapNearestFilter)
            return nt.LINEAR_MIPMAP_NEAREST;
        if (e === THREE.LinearMipMapLinearFilter)
            return nt.LINEAR_MIPMAP_LINEAR;
        if (e === THREE.UnsignedByteType)
            return nt.UNSIGNED_BYTE;
        if (e === THREE.UnsignedShort4444Type)
            return nt.UNSIGNED_SHORT_4_4_4_4;
        if (e === THREE.UnsignedShort5551Type)
            return nt.UNSIGNED_SHORT_5_5_5_1;
        if (e === THREE.UnsignedShort565Type)
            return nt.UNSIGNED_SHORT_5_6_5;
        if (e === THREE.ByteType)
            return nt.BYTE;
        if (e === THREE.ShortType)
            return nt.SHORT;
        if (e === THREE.UnsignedShortType)
            return nt.UNSIGNED_SHORT;
        if (e === THREE.IntType)
            return nt.INT;
        if (e === THREE.UnsignedIntType)
            return nt.UNSIGNED_INT;
        if (e === THREE.FloatType)
            return nt.FLOAT;
        if (t = ot.get("OES_texture_half_float"),
        null  !== t && e === THREE.HalfFloatType)
            return t.HALF_FLOAT_OES;
        if (e === THREE.AlphaFormat)
            return nt.ALPHA;
        if (e === THREE.RGBFormat)
            return nt.RGB;
        if (e === THREE.RGBAFormat)
            return nt.RGBA;
        if (e === THREE.LuminanceFormat)
            return nt.LUMINANCE;
        if (e === THREE.LuminanceAlphaFormat)
            return nt.LUMINANCE_ALPHA;
        if (e === THREE.DepthFormat)
            return nt.DEPTH_COMPONENT;
        if (e === THREE.AddEquation)
            return nt.FUNC_ADD;
        if (e === THREE.SubtractEquation)
            return nt.FUNC_SUBTRACT;
        if (e === THREE.ReverseSubtractEquation)
            return nt.FUNC_REVERSE_SUBTRACT;
        if (e === THREE.ZeroFactor)
            return nt.ZERO;
        if (e === THREE.OneFactor)
            return nt.ONE;
        if (e === THREE.SrcColorFactor)
            return nt.SRC_COLOR;
        if (e === THREE.OneMinusSrcColorFactor)
            return nt.ONE_MINUS_SRC_COLOR;
        if (e === THREE.SrcAlphaFactor)
            return nt.SRC_ALPHA;
        if (e === THREE.OneMinusSrcAlphaFactor)
            return nt.ONE_MINUS_SRC_ALPHA;
        if (e === THREE.DstAlphaFactor)
            return nt.DST_ALPHA;
        if (e === THREE.OneMinusDstAlphaFactor)
            return nt.ONE_MINUS_DST_ALPHA;
        if (e === THREE.DstColorFactor)
            return nt.DST_COLOR;
        if (e === THREE.OneMinusDstColorFactor)
            return nt.ONE_MINUS_DST_COLOR;
        if (e === THREE.SrcAlphaSaturateFactor)
            return nt.SRC_ALPHA_SATURATE;
        if (t = ot.get("WEBGL_compressed_texture_s3tc"),
        null  !== t) {
            if (e === THREE.RGB_S3TC_DXT1_Format)
                return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT1_Format)
                return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT3_Format)
                return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === THREE.RGBA_S3TC_DXT5_Format)
                return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (t = ot.get("WEBGL_compressed_texture_pvrtc"),
        null  !== t) {
            if (e === THREE.RGB_PVRTC_4BPPV1_Format)
                return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGB_PVRTC_2BPPV1_Format)
                return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_4BPPV1_Format)
                return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_2BPPV1_Format)
                return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (t = ot.get("WEBGL_compressed_texture_etc1"),
        null  !== t && e === THREE.RGB_ETC1_Format)
            return t.COMPRESSED_RGB_ETC1_WEBGL;
        if (t = ot.get("EXT_blend_minmax"),
        null  !== t) {
            if (e === THREE.MinEquation)
                return t.MIN_EXT;
            if (e === THREE.MaxEquation)
                return t.MAX_EXT
        }
        return 0
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION),
    e = e || {};
    var ae = void 0 !== e.canvas ? e.canvas : document.createElement("canvas")
      , oe = void 0 !== e.context ? e.context : null 
      , se = void 0 !== e.alpha ? e.alpha : !1
      , ce = void 0 !== e.depth ? e.depth : !0
      , he = void 0 !== e.stencil ? e.stencil : !0
      , le = void 0 !== e.antialias ? e.antialias : !1
      , ue = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0
      , pe = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1
      , de = []
      , Ee = []
      , fe = -1
      , me = []
      , ge = -1
      , ve = new Float32Array(8)
      , Te = []
      , ye = [];
    this.domElement = ae,
    this.context = null ,
    this.autoClear = !0,
    this.autoClearColor = !0,
    this.autoClearDepth = !0,
    this.autoClearStencil = !0,
    this.sortObjects = !0,
    this.clippingPlanes = [],
    this.localClippingEnabled = !1,
    this.gammaFactor = 2,
    this.gammaInput = !1,
    this.gammaOutput = !1,
    this.physicallyCorrectLights = !1,
    this.toneMapping = THREE.LinearToneMapping,
    this.toneMappingExposure = 1,
    this.toneMappingWhitePoint = 1,
    this.maxMorphTargets = 8,
    this.maxMorphNormals = 4,
    this.autoScaleCubemaps = !0;
    var Re = this
      , He = null 
      , xe = null 
      , be = null 
      , _e = -1
      , Me = ""
      , we = null 
      , Se = new THREE.Vector4
      , Le = null 
      , Ae = new THREE.Vector4
      , Ce = 0
      , Pe = new THREE.Color(0)
      , De = 0
      , Be = ae.width
      , Ie = ae.height
      , Ue = 1
      , Fe = new THREE.Vector4(0,0,Be,Ie)
      , Ne = !1
      , Oe = new THREE.Vector4(0,0,Be,Ie)
      , Ge = new THREE.Frustum
      , Ve = !1
      , ze = !1
      , ke = !1
      , je = 0
      , We = {
        type: "4fv",
        value: null ,
        needsUpdate: !1
    }
      , Xe = null 
      , qe = 0
      , Ye = new THREE.Matrix3
      , Ze = new THREE.Sphere
      , Ke = new THREE.Plane
      , Qe = new THREE.Matrix4
      , Je = new THREE.Vector3
      , $e = {
        hash: "",
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        shadows: []
    }
      , et = {
        geometries: 0,
        textures: 0
    }
      , tt = {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
    };
    this.info = {
        render: tt,
        memory: et,
        programs: null 
    };
    var nt;
    try {
        var rt = {
            alpha: se,
            depth: ce,
            stencil: he,
            antialias: le,
            premultipliedAlpha: ue,
            preserveDrawingBuffer: pe
        };
        if (nt = oe || ae.getContext("webgl", rt) || ae.getContext("experimental-webgl", rt),
        null  === nt)
            throw null  !== ae.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
        void 0 === nt.getShaderPrecisionFormat && (nt.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        ),
        ae.addEventListener("webglcontextlost", a, !1)
    } catch (it) {
        console.error("THREE.WebGLRenderer: " + it)
    }
    var at = "undefined" != typeof WebGL2RenderingContext && nt instanceof WebGL2RenderingContext
      , ot = new THREE.WebGLExtensions(nt);
    ot.get("WEBGL_depth_texture"),
    ot.get("OES_texture_float"),
    ot.get("OES_texture_float_linear"),
    ot.get("OES_texture_half_float"),
    ot.get("OES_texture_half_float_linear"),
    ot.get("OES_standard_derivatives"),
    ot.get("ANGLE_instanced_arrays");
    var st = ot.get("WEBGL_draw_buffers");
    ot.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var ct = new THREE.WebGLCapabilities(nt,ot,e)
      , ht = new THREE.WebGLState(nt,ot,ie)
      , lt = new THREE.WebGLProperties
      , ut = new THREE.WebGLObjects(nt,lt,this.info)
      , pt = new THREE.WebGLPrograms(this,ct)
      , dt = new THREE.WebGLLights;
    this.info.programs = pt.programs;
    var Et = new THREE.WebGLBufferRenderer(nt,ot,tt)
      , ft = new THREE.WebGLIndexedBufferRenderer(nt,ot,tt)
      , mt = [nt.COLOR_ATTACHMENT0]
      , gt = [nt.BACK];
    r(),
    this.context = nt,
    this.capabilities = ct,
    this.extensions = ot,
    this.properties = lt,
    this.state = ht;
    var vt = new THREE.WebGLShadowMap(this,$e,ut);
    this.shadowMap = vt;
    var Tt = new THREE.SpritePlugin(this,Te)
      , yt = new THREE.LensFlarePlugin(this,ye);
    this.getContext = function() {
        return nt
    }
    ,
    this.getContextAttributes = function() {
        return nt.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
        ot.get("WEBGL_lose_context").loseContext()
    }
    ,
    this.getMaxAnisotropy = function() {
        var e;
        return function() {
            if (void 0 !== e)
                return e;
            var t = ot.get("EXT_texture_filter_anisotropic");
            return e = null  !== t ? nt.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
    }(),
    this.getPrecision = function() {
        return ct.precision
    }
    ,
    this.getPixelRatio = function() {
        return Ue
    }
    ,
    this.setPixelRatio = function(e) {
        void 0 !== e && (Ue = e,
        this.setSize(Oe.z, Oe.w, !1))
    }
    ,
    this.getSize = function() {
        return {
            width: Be,
            height: Ie
        }
    }
    ,
    this.setSize = function(e, t, n) {
        Be = e,
        Ie = t,
        ae.width = e * Ue,
        ae.height = t * Ue,
        n !== !1 && (ae.style.width = e + "px",
        ae.style.height = t + "px"),
        this.setViewport(0, 0, e, t)
    }
    ,
    this.setViewport = function(e, t, n, r) {
        ht.viewport(Oe.set(e, t, n, r))
    }
    ,
    this.setScissor = function(e, t, n, r) {
        ht.scissor(Fe.set(e, t, n, r))
    }
    ,
    this.setScissorTest = function(e) {
        ht.setScissorTest(Ne = e)
    }
    ,
    this.getClearColor = function() {
        return Pe
    }
    ,
    this.setClearColor = function(e, t) {
        Pe.set(e),
        De = void 0 !== t ? t : 1,
        n(Pe.r, Pe.g, Pe.b, De)
    }
    ,
    this.getClearAlpha = function() {
        return De
    }
    ,
    this.setClearAlpha = function(e) {
        De = e,
        n(Pe.r, Pe.g, Pe.b, De)
    }
    ,
    this.clear = function(e, t, n) {
        var r = 0;
        (void 0 === e || e) && (r |= nt.COLOR_BUFFER_BIT),
        (void 0 === t || t) && (r |= nt.DEPTH_BUFFER_BIT),
        (void 0 === n || n) && (r |= nt.STENCIL_BUFFER_BIT),
        nt.clear(r)
    }
    ,
    this.clearColor = function() {
        this.clear(!0, !1, !1)
    }
    ,
    this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }
    ,
    this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }
    ,
    this.clearTarget = function(e, t, n, r) {
        this.setRenderTarget(e),
        this.clear(t, n, r)
    }
    ,
    this.resetGLState = i,
    this.dispose = function() {
        ae.removeEventListener("webglcontextlost", a, !1)
    }
    ,
    this.renderBufferImmediate = function(e, t, n) {
        ht.initAttributes();
        var r = lt.get(e);
        e.hasPositions && !r.position && (r.position = nt.createBuffer()),
        e.hasNormals && !r.normal && (r.normal = nt.createBuffer()),
        e.hasUvs && !r.uv && (r.uv = nt.createBuffer()),
        e.hasColors && !r.color && (r.color = nt.createBuffer());
        var i = t.getAttributes();
        if (e.hasPositions && (nt.bindBuffer(nt.ARRAY_BUFFER, r.position),
        nt.bufferData(nt.ARRAY_BUFFER, e.positionArray, nt.DYNAMIC_DRAW),
        ht.enableAttribute(i.position),
        nt.vertexAttribPointer(i.position, 3, nt.FLOAT, !1, 0, 0)),
        e.hasNormals) {
            if (nt.bindBuffer(nt.ARRAY_BUFFER, r.normal),
            "MeshPhongMaterial" !== n.type && "MeshStandardMaterial" !== n.type && "MeshPhysicalMaterial" !== n.type && n.shading === THREE.FlatShading)
                for (var a = 0, o = 3 * e.count; o > a; a += 9) {
                    var s = e.normalArray
                      , c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3
                      , h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3
                      , l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                    s[a + 0] = c,
                    s[a + 1] = h,
                    s[a + 2] = l,
                    s[a + 3] = c,
                    s[a + 4] = h,
                    s[a + 5] = l,
                    s[a + 6] = c,
                    s[a + 7] = h,
                    s[a + 8] = l
                }
            nt.bufferData(nt.ARRAY_BUFFER, e.normalArray, nt.DYNAMIC_DRAW),
            ht.enableAttribute(i.normal),
            nt.vertexAttribPointer(i.normal, 3, nt.FLOAT, !1, 0, 0)
        }
        e.hasUvs && n.map && (nt.bindBuffer(nt.ARRAY_BUFFER, r.uv),
        nt.bufferData(nt.ARRAY_BUFFER, e.uvArray, nt.DYNAMIC_DRAW),
        ht.enableAttribute(i.uv),
        nt.vertexAttribPointer(i.uv, 2, nt.FLOAT, !1, 0, 0)),
        e.hasColors && n.vertexColors !== THREE.NoColors && (nt.bindBuffer(nt.ARRAY_BUFFER, r.color),
        nt.bufferData(nt.ARRAY_BUFFER, e.colorArray, nt.DYNAMIC_DRAW),
        ht.enableAttribute(i.color),
        nt.vertexAttribPointer(i.color, 3, nt.FLOAT, !1, 0, 0)),
        ht.disableUnusedAttributes(),
        nt.drawArrays(nt.TRIANGLES, 0, e.count),
        e.count = 0
    }
    ,
    this.renderBufferDirect = function(e, n, r, i, a, o) {
        H(i);
        var s = b(e, n, i, a)
          , c = !1
          , h = r.id + "_" + s.id + "_" + i.wireframe;
        h !== Me && (Me = h,
        c = !0);
        var l = a.morphTargetInfluences;
        if (void 0 !== l) {
            for (var u = [], p = 0, f = l.length; f > p; p++) {
                var m = l[p];
                u.push([m, p])
            }
            u.sort(E),
            u.length > 8 && (u.length = 8);
            for (var g = r.morphAttributes, p = 0, f = u.length; f > p; p++) {
                var m = u[p];
                if (ve[p] = m[0],
                0 !== m[0]) {
                    var v = m[1];
                    i.morphTargets === !0 && g.position && r.addAttribute("morphTarget" + p, g.position[v]),
                    i.morphNormals === !0 && g.normal && r.addAttribute("morphNormal" + p, g.normal[v])
                } else
                    i.morphTargets === !0 && r.removeAttribute("morphTarget" + p),
                    i.morphNormals === !0 && r.removeAttribute("morphNormal" + p)
            }
            s.getUniforms().setValue(nt, "morphTargetInfluences", ve),
            c = !0
        }
        var v = r.index
          , T = r.attributes.position;
        i.wireframe === !0 && (v = ut.getWireframeAttribute(r));
        var y;
        null  !== v ? (y = ft,
        y.setIndex(v)) : y = Et,
        c && (d(i, s, r),
        null  !== v && nt.bindBuffer(nt.ELEMENT_ARRAY_BUFFER, ut.getAttributeBuffer(v)));
        var R = 0
          , x = 1 / 0;
        null  !== v ? x = v.count : void 0 !== T && (x = T.count);
        var _ = r.drawRange.start
          , M = r.drawRange.count
          , w = null  !== o ? o.start : 0
          , S = null  !== o ? o.count : 1 / 0
          , L = Math.max(R, _, w)
          , A = Math.min(R + x, _ + M, w + S) - 1
          , C = Math.max(0, A - L + 1);
        if (a instanceof THREE.Mesh)
            if (i.wireframe === !0)
                ht.setLineWidth(i.wireframeLinewidth * t()),
                y.setMode(nt.LINES);
            else
                switch (a.drawMode) {
                case THREE.TrianglesDrawMode:
                    y.setMode(nt.TRIANGLES);
                    break;
                case THREE.TriangleStripDrawMode:
                    y.setMode(nt.TRIANGLE_STRIP);
                    break;
                case THREE.TriangleFanDrawMode:
                    y.setMode(nt.TRIANGLE_FAN)
                }
        else if (a instanceof THREE.Line) {
            var P = i.linewidth;
            void 0 === P && (P = 1),
            ht.setLineWidth(P * t()),
            a instanceof THREE.LineSegments ? y.setMode(nt.LINES) : y.setMode(nt.LINE_STRIP)
        } else
            a instanceof THREE.Points && y.setMode(nt.POINTS);
        r instanceof THREE.InstancedBufferGeometry ? r.maxInstancedCount > 0 && y.renderInstances(r, L, C) : y.render(L, C)
    }
    ,
    this.render = function(e, t, n, r) {
        if (t instanceof THREE.Camera == !1)
            return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        var i = e.fog;
        if (Me = "",
        _e = -1,
        we = null ,
        e.autoUpdate === !0 && e.updateMatrixWorld(),
        null  === t.parent && t.updateMatrixWorld(),
        t.matrixWorldInverse.getInverse(t.matrixWorld),
        Qe.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        Ge.setFromMatrix(Qe),
        de.length = 0,
        fe = -1,
        ge = -1,
        Te.length = 0,
        ye.length = 0,
        F(this.clippingPlanes, t),
        T(e, t),
        Ee.length = fe + 1,
        me.length = ge + 1,
        Re.sortObjects === !0 && (Ee.sort(f),
        me.sort(m)),
        Ve && (ke = !0,
        N(null )),
        I(de),
        vt.render(e, t),
        U(de, t),
        Ve && (ke = !1,
        O()),
        tt.calls = 0,
        tt.vertices = 0,
        tt.faces = 0,
        tt.points = 0,
        void 0 === n && (n = null ),
        this.setRenderTarget(n),
        (this.autoClear || r) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
        e.overrideMaterial) {
            var a = e.overrideMaterial;
            y(Ee, t, i, a),
            y(me, t, i, a)
        } else
            ht.setBlending(THREE.NoBlending),
            y(Ee, t, i),
            y(me, t, i);
        if (Tt.render(e, t),
        yt.render(e, t, Ae),
        n) {
            var o = n.texture;
            o.generateMipmaps && X(n) && o.minFilter !== THREE.NearestFilter && o.minFilter !== THREE.LinearFilter && ne(n)
        }
        ht.setDepthTest(!0),
        ht.setDepthWrite(!0),
        ht.setColorWrite(!0)
    }
    ,
    this.setFaceCulling = function(e, t) {
        e === THREE.CullFaceNone ? ht.disable(nt.CULL_FACE) : (t === THREE.FrontFaceDirectionCW ? nt.frontFace(nt.CW) : nt.frontFace(nt.CCW),
        e === THREE.CullFaceBack ? nt.cullFace(nt.BACK) : e === THREE.CullFaceFront ? nt.cullFace(nt.FRONT) : nt.cullFace(nt.FRONT_AND_BACK),
        ht.enable(nt.CULL_FACE))
    }
    ;
    var Rt = !1;
    this.setTexture = function(e, t) {
        Rt || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
        Rt = !0),
        j(e, t)
    }
    ,
    this.allocTextureUnit = V,
    this.setTexture2D = j,
    this.setTextureCube = function(e, t) {
        e instanceof THREE.CubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Z(e, t) : K(e.texture, t)
    }
    ,
    this.getCurrentRenderTarget = function() {
        return xe
    }
    ,
    this.setRenderTarget = function(e) {
        xe = e,
        e && void 0 === lt.get(e).__webglFramebuffer && te(e);
        var t, n, r = e instanceof THREE.WebGLRenderTargetCube;
        if (e ? (n = lt.get(e),
        t = r ? n.__webglFramebuffer[e.activeCubeFace] : n.__webglFramebuffer,
        Se.copy(e.scissor),
        Le = e.scissorTest,
        Ae.copy(e.viewport)) : (t = null ,
        Se.copy(Fe).multiplyScalar(Ue),
        Le = Ne,
        Ae.copy(Oe).multiplyScalar(Ue)),
        be !== t && (nt.bindFramebuffer(nt.FRAMEBUFFER, t),
        be = t,
        st && (n && n.__webglAttachments ? st.drawBuffersWEBGL(n.__webglAttachments) : e ? st.drawBuffersWEBGL(mt) : st.drawBuffersWEBGL(gt))),
        ht.scissor(Se),
        ht.setScissorTest(Le),
        ht.viewport(Ae),
        r) {
            var i = lt.get(e.texture);
            nt.framebufferTexture2D(nt.FRAMEBUFFER, nt.COLOR_ATTACHMENT0, nt.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, i.__webglTexture, e.activeMipMapLevel)
        }
    }
    ,
    this.readRenderTargetPixels = function(e, t, n, r, i, a) {
        if (e instanceof THREE.WebGLRenderTarget == !1)
            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        var o = lt.get(e).__webglFramebuffer;
        if (o) {
            var s = !1;
            o !== be && (nt.bindFramebuffer(nt.FRAMEBUFFER, o),
            s = !0);
            try {
                var c = e.texture;
                if (c.format !== THREE.RGBAFormat && ie(c.format) !== nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                if (!(c.type === THREE.UnsignedByteType || ie(c.type) === nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE) || c.type === THREE.FloatType && ot.get("WEBGL_color_buffer_float") || c.type === THREE.HalfFloatType && ot.get("EXT_color_buffer_half_float")))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                nt.checkFramebufferStatus(nt.FRAMEBUFFER) === nt.FRAMEBUFFER_COMPLETE ? t > 0 && t <= e.width - r && n > 0 && n <= e.height - i && nt.readPixels(t, n, r, i, ie(c.format), ie(c.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
            } finally {
                s && nt.bindFramebuffer(nt.FRAMEBUFFER, be)
            }
        }
    }
}
,
THREE.WebGLRenderTarget = function(e, t, n) {
    this.uuid = THREE.Math.generateUUID(),
    this.width = e,
    this.height = t,
    this.scissor = new THREE.Vector4(0,0,e,t),
    this.scissorTest = !1,
    this.viewport = new THREE.Vector4(0,0,e,t),
    n = n || {},
    void 0 === n.minFilter && (n.minFilter = THREE.LinearFilter),
    this.texture = new THREE.Texture(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
    this.depthBuffer = void 0 !== n.depthBuffer ? n.depthBuffer : !0,
    this.stencilBuffer = void 0 !== n.stencilBuffer ? n.stencilBuffer : !0,
    this.depthTexture = null 
}
,
THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    setSize: function(e, t) {
        (this.width !== e || this.height !== t) && (this.width = e,
        this.height = t,
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.width = e.width,
        this.height = e.height,
        this.viewport.copy(e.viewport),
        this.texture = e.texture.clone(),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.depthTexture = e.depthTexture,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube = function(e, t, n) {
    THREE.WebGLRenderTarget.call(this, e, t, n),
    this.activeCubeFace = 0,
    this.activeMipMapLevel = 0
}
,
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,
THREE.WebGLMultiRenderTarget = function(e, t, n) {
    THREE.WebGLRenderTarget.call(this, e, t, n),
    this.attachments = [this.texture]
}
,
THREE.WebGLMultiRenderTarget.prototype = Object.create(THREE.WebGLRenderTarget.prototype),
THREE.WebGLMultiRenderTarget.prototype.constructor = THREE.WebGLMultiRenderTarget,
THREE.WebGLMultiRenderTarget.copy = function(e) {
    return THREE.WebGLRenderTarget.prototype.copy.call(this, e),
    this.attachments = e.attachments.map(function(e) {
        return e.clone()
    }),
    this
}
,
THREE.WebGLBufferRenderer = function(e, t, n) {
    function r(e) {
        o = e
    }
    function i(t, r) {
        e.drawArrays(o, t, r),
        n.calls++,
        n.vertices += r,
        o === e.TRIANGLES && (n.faces += r / 3)
    }
    function a(r) {
        var i = t.get("ANGLE_instanced_arrays");
        if (null  === i)
            return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        var a = r.attributes.position
          , s = 0;
        a instanceof THREE.InterleavedBufferAttribute ? (s = a.data.count,
        i.drawArraysInstancedANGLE(o, 0, s, r.maxInstancedCount)) : (s = a.count,
        i.drawArraysInstancedANGLE(o, 0, s, r.maxInstancedCount)),
        n.calls++,
        n.vertices += s * r.maxInstancedCount,
        o === e.TRIANGLES && (n.faces += r.maxInstancedCount * s / 3)
    }
    var o;
    this.setMode = r,
    this.render = i,
    this.renderInstances = a
}
,
THREE.WebGLIndexedBufferRenderer = function(e, t, n) {
    function r(e) {
        s = e
    }
    function i(n) {
        n.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (c = e.UNSIGNED_INT,
        h = 4) : (c = e.UNSIGNED_SHORT,
        h = 2)
    }
    function a(t, r) {
        e.drawElements(s, r, c, t * h),
        n.calls++,
        n.vertices += r,
        s === e.TRIANGLES && (n.faces += r / 3)
    }
    function o(r, i, a) {
        var o = t.get("ANGLE_instanced_arrays");
        return null  === o ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (o.drawElementsInstancedANGLE(s, a, c, i * h, r.maxInstancedCount),
        n.calls++,
        n.vertices += a * r.maxInstancedCount,
        void (s === e.TRIANGLES && (n.faces += r.maxInstancedCount * a / 3)))
    }
    var s, c, h;
    this.setMode = r,
    this.setIndex = i,
    this.render = a,
    this.renderInstances = o
}
,
THREE.WebGLExtensions = function(e) {
    var t = {};
    this.get = function(n) {
        if (void 0 !== t[n])
            return t[n];
        var r;
        switch (n) {
        case "WEBGL_depth_texture":
            r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
        case "EXT_texture_filter_anisotropic":
            r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        case "WEBGL_compressed_texture_etc1":
            r = e.getExtension("WEBGL_compressed_texture_etc1");
            break;
        default:
            r = e.getExtension(n)
        }
        return null  === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
        t[n] = r,
        r
    }
}
,
THREE.WebGLCapabilities = function(e, t, n) {
    function r(t) {
        if ("highp" === t) {
            if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0)
                return "highp";
            t = "mediump"
        }
        return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    this.getMaxPrecision = r,
    this.precision = void 0 !== n.precision ? n.precision : "highp",
    this.logarithmicDepthBuffer = void 0 !== n.logarithmicDepthBuffer ? n.logarithmicDepthBuffer : !1,
    this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE),
    this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
    this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS),
    this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    this.vertexTextures = this.maxVertexTextures > 0,
    this.floatFragmentTextures = !!t.get("OES_texture_float"),
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
    var i = r(this.precision);
    i !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", i, "instead."),
    this.precision = i),
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
}
,
THREE.WebGLGeometries = function(e, t, n) {
    function r(e) {
        var t = e.geometry;
        if (void 0 !== h[t.id])
            return h[t.id];
        t.addEventListener("dispose", i);
        var r;
        return t instanceof THREE.BufferGeometry ? r = t : t instanceof THREE.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new THREE.BufferGeometry).setFromObject(e)),
        r = t._bufferGeometry),
        h[t.id] = r,
        n.memory.geometries++,
        r
    }
    function i(e) {
        var r = e.target
          , a = h[r.id];
        null  !== a.index && o(a.index),
        s(a.attributes),
        r.removeEventListener("dispose", i),
        delete h[r.id];
        var c = t.get(r);
        c.wireframe && o(c.wireframe),
        t["delete"](r);
        var l = t.get(a);
        l.wireframe && o(l.wireframe),
        t["delete"](a),
        n.memory.geometries--
    }
    function a(e) {
        return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
    }
    function o(t) {
        var n = a(t);
        void 0 !== n && (e.deleteBuffer(n),
        c(t))
    }
    function s(e) {
        for (var t in e)
            o(e[t])
    }
    function c(e) {
        e instanceof THREE.InterleavedBufferAttribute ? t["delete"](e.data) : t["delete"](e)
    }
    var h = {};
    this.get = r
}
,
THREE.WebGLLights = function() {
    var e = {};
    this.get = function(t) {
        if (void 0 !== e[t.id])
            return e[t.id];
        var n;
        switch (t.type) {
        case "DirectionalLight":
            n = {
                direction: new THREE.Vector3,
                color: new THREE.Color,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "SpotLight":
            n = {
                position: new THREE.Vector3,
                direction: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                coneCos: 0,
                penumbraCos: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "PointLight":
            n = {
                position: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "HemisphereLight":
            n = {
                direction: new THREE.Vector3,
                skyColor: new THREE.Color,
                groundColor: new THREE.Color
            }
        }
        return e[t.id] = n,
        n
    }
}
,
THREE.WebGLObjects = function(e, t, n) {
    function r(t) {
        var n = l.get(t);
        t.geometry instanceof THREE.Geometry && n.updateFromObject(t);
        var r = n.index
          , a = n.attributes;
        null  !== r && i(r, e.ELEMENT_ARRAY_BUFFER);
        for (var o in a)
            i(a[o], e.ARRAY_BUFFER);
        var s = n.morphAttributes;
        for (var o in s)
            for (var c = s[o], h = 0, u = c.length; u > h; h++)
                i(c[h], e.ARRAY_BUFFER);
        return n
    }
    function i(e, n) {
        var r = e instanceof THREE.InterleavedBufferAttribute ? e.data : e
          , i = t.get(r);
        void 0 === i.__webglBuffer ? a(i, r, n) : i.version !== r.version && o(i, r, n)
    }
    function a(t, n, r) {
        t.__webglBuffer = e.createBuffer(),
        e.bindBuffer(r, t.__webglBuffer);
        var i = n.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
        e.bufferData(r, n.array, i),
        t.version = n.version
    }
    function o(t, n, r) {
        e.bindBuffer(r, t.__webglBuffer),
        n.dynamic === !1 || -1 === n.updateRange.count ? e.bufferSubData(r, 0, n.array) : 0 === n.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(r, n.updateRange.offset * n.array.BYTES_PER_ELEMENT, n.array.subarray(n.updateRange.offset, n.updateRange.offset + n.updateRange.count)),
        n.updateRange.count = 0),
        t.version = n.version
    }
    function s(e) {
        return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
    }
    function c(n) {
        var r = t.get(n);
        if (void 0 !== r.wireframe)
            return r.wireframe;
        var a = []
          , o = n.index
          , s = n.attributes
          , c = s.position;
        if (null  !== o)
            for (var l = {}, u = o.array, p = 0, d = u.length; d > p; p += 3) {
                var E = u[p + 0]
                  , f = u[p + 1]
                  , m = u[p + 2];
                h(l, E, f) && a.push(E, f),
                h(l, f, m) && a.push(f, m),
                h(l, m, E) && a.push(m, E)
            }
        else
            for (var u = s.position.array, p = 0, d = u.length / 3 - 1; d > p; p += 3) {
                var E = p + 0
                  , f = p + 1
                  , m = p + 2;
                a.push(E, f, f, m, m, E)
            }
        var g = c.count > 65535 ? Uint32Array : Uint16Array
          , v = new THREE.BufferAttribute(new g(a),1);
        return i(v, e.ELEMENT_ARRAY_BUFFER),
        r.wireframe = v,
        v
    }
    function h(e, t, n) {
        if (t > n) {
            var r = t;
            t = n,
            n = r
        }
        var i = e[t];
        return void 0 === i ? (e[t] = [n],
        !0) : -1 === i.indexOf(n) ? (i.push(n),
        !0) : !1
    }
    var l = new THREE.WebGLGeometries(e,t,n);
    this.getAttributeBuffer = s,
    this.getWireframeAttribute = c,
    this.update = r
}
,
THREE.WebGLProgram = function() {
    function e(e) {
        switch (e) {
        case THREE.LinearEncoding:
            return ["Linear", "( value )"];
        case THREE.sRGBEncoding:
            return ["sRGB", "( value )"];
        case THREE.RGBEEncoding:
            return ["RGBE", "( value )"];
        case THREE.RGBM7Encoding:
            return ["RGBM", "( value, 7.0 )"];
        case THREE.RGBM16Encoding:
            return ["RGBM", "( value, 16.0 )"];
        case THREE.RGBDEncoding:
            return ["RGBD", "( value, 256.0 )"];
        case THREE.GammaEncoding:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + e)
        }
    }
    function t(t, n) {
        var r = e(n);
        return "vec4 " + t + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
    }
    function n(t, n) {
        var r = e(n);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
    }
    function r(e, t) {
        var n;
        switch (t) {
        case THREE.LinearToneMapping:
            n = "Linear";
            break;
        case THREE.ReinhardToneMapping:
            n = "Reinhard";
            break;
        case THREE.Uncharted2ToneMapping:
            n = "Uncharted2";
            break;
        case THREE.CineonToneMapping:
            n = "OptimizedCineon";
            break;
        default:
            throw new Error("unsupported toneMapping: " + t)
        }
        return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }
    function i(e, t, n) {
        e = e || {};
        var r = [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
        return r.filter(s).join("\n")
    }
    function a(e) {
        var t = [];
        for (var n in e) {
            var r = e[n];
            r !== !1 && t.push("#define " + n + " " + r)
        }
        return t.join("\n")
    }
    function o(e, t, n) {
        for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), a = 0; i > a; a++) {
            var o = e.getActiveAttrib(t, a)
              , s = o.name;
            r[s] = e.getAttribLocation(t, s)
        }
        return r
    }
    function s(e) {
        return "" !== e
    }
    function c(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }
    function h(e) {
        function t(e, t) {
            var n = THREE.ShaderChunk[t];
            if (void 0 === n)
                throw new Error("Can not resolve #include <" + t + ">");
            return h(n)
        }
        var n = /#include +<([\w\d.]+)>/g;
        return e.replace(n, t)
    }
    function l(e) {
        function t(e, t, n, r) {
            for (var i = "", a = parseInt(t); a < parseInt(n); a++)
                i += r.replace(/\[ i \]/g, "[ " + a + " ]");
            return i
        }
        var n = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
        return e.replace(n, t)
    }
    var u = 0;
    return function(e, p, d, E) {
        var f = e.context
          , m = d.extensions
          , g = d.defines
          , v = d.__webglShader.vertexShader
          , T = d.__webglShader.fragmentShader
          , y = "SHADOWMAP_TYPE_BASIC";
        E.shadowMapType === THREE.PCFShadowMap ? y = "SHADOWMAP_TYPE_PCF" : E.shadowMapType === THREE.PCFSoftShadowMap && (y = "SHADOWMAP_TYPE_PCF_SOFT");
        var R = "ENVMAP_TYPE_CUBE"
          , H = "ENVMAP_MODE_REFLECTION"
          , x = "ENVMAP_BLENDING_MULTIPLY";
        if (E.envMap) {
            switch (d.envMap.mapping) {
            case THREE.CubeReflectionMapping:
            case THREE.CubeRefractionMapping:
                R = "ENVMAP_TYPE_CUBE";
                break;
            case THREE.CubeUVReflectionMapping:
            case THREE.CubeUVRefractionMapping:
                R = "ENVMAP_TYPE_CUBE_UV";
                break;
            case THREE.EquirectangularReflectionMapping:
            case THREE.EquirectangularRefractionMapping:
                R = "ENVMAP_TYPE_EQUIREC";
                break;
            case THREE.SphericalReflectionMapping:
                R = "ENVMAP_TYPE_SPHERE"
            }
            switch (d.envMap.mapping) {
            case THREE.CubeRefractionMapping:
            case THREE.EquirectangularRefractionMapping:
                H = "ENVMAP_MODE_REFRACTION"
            }
            switch (d.combine) {
            case THREE.MultiplyOperation:
                x = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case THREE.MixOperation:
                x = "ENVMAP_BLENDING_MIX";
                break;
            case THREE.AddOperation:
                x = "ENVMAP_BLENDING_ADD"
            }
        }
        var b, _, M = e.gammaFactor > 0 ? e.gammaFactor : 1, w = i(m, E, e.extensions), S = a(g), L = f.createProgram();
        d instanceof THREE.RawShaderMaterial ? (b = "",
        _ = "") : (b = ["precision " + E.precision + " float;", "precision " + E.precision + " int;", "#define SHADER_NAME " + d.__webglShader.name, S, E.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + M, "#define MAX_BONES " + E.maxBones, E.map ? "#define USE_MAP" : "", E.envMap ? "#define USE_ENVMAP" : "", E.envMap ? "#define " + H : "", E.lightMap ? "#define USE_LIGHTMAP" : "", E.aoMap ? "#define USE_AOMAP" : "", E.emissiveMap ? "#define USE_EMISSIVEMAP" : "", E.bumpMap ? "#define USE_BUMPMAP" : "", E.normalMap ? "#define USE_NORMALMAP" : "", E.displacementMap && E.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", E.specularMap ? "#define USE_SPECULARMAP" : "", E.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", E.metalnessMap ? "#define USE_METALNESSMAP" : "", E.alphaMap ? "#define USE_ALPHAMAP" : "", E.vertexColors ? "#define USE_COLOR" : "", E.flatShading ? "#define FLAT_SHADED" : "", E.skinning ? "#define USE_SKINNING" : "", E.useVertexTexture ? "#define BONE_TEXTURE" : "", E.morphTargets ? "#define USE_MORPHTARGETS" : "", E.morphNormals && E.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", E.doubleSided ? "#define DOUBLE_SIDED" : "", E.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + E.numClippingPlanes, E.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", E.shadowMapEnabled ? "#define " + y : "", E.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", E.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", E.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(s).join("\n"),
        _ = [w, "precision " + E.precision + " float;", "precision " + E.precision + " int;", "#define SHADER_NAME " + d.__webglShader.name, S, E.alphaTest ? "#define ALPHATEST " + E.alphaTest : "", "#define GAMMA_FACTOR " + M, E.useFog && E.fog ? "#define USE_FOG" : "", E.useFog && E.fogExp ? "#define FOG_EXP2" : "", E.map ? "#define USE_MAP" : "", E.envMap ? "#define USE_ENVMAP" : "", E.envMap ? "#define " + R : "", E.envMap ? "#define " + H : "", E.envMap ? "#define " + x : "", E.lightMap ? "#define USE_LIGHTMAP" : "", E.aoMap ? "#define USE_AOMAP" : "", E.emissiveMap ? "#define USE_EMISSIVEMAP" : "", E.bumpMap ? "#define USE_BUMPMAP" : "", E.normalMap ? "#define USE_NORMALMAP" : "", E.specularMap ? "#define USE_SPECULARMAP" : "", E.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", E.metalnessMap ? "#define USE_METALNESSMAP" : "", E.alphaMap ? "#define USE_ALPHAMAP" : "", E.vertexColors ? "#define USE_COLOR" : "", E.flatShading ? "#define FLAT_SHADED" : "", E.doubleSided ? "#define DOUBLE_SIDED" : "", E.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + E.numClippingPlanes, E.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", E.shadowMapEnabled ? "#define " + y : "", E.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", E.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", E.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", E.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", E.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", E.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", E.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", E.toneMapping !== THREE.NoToneMapping ? r("toneMapping", E.toneMapping) : "", E.outputEncoding || E.mapEncoding || E.envMapEncoding || E.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", E.mapEncoding ? t("mapTexelToLinear", E.mapEncoding) : "", E.envMapEncoding ? t("envMapTexelToLinear", E.envMapEncoding) : "", E.emissiveMapEncoding ? t("emissiveMapTexelToLinear", E.emissiveMapEncoding) : "", E.outputEncoding ? n("linearToOutputTexel", E.outputEncoding) : "", E.depthPacking ? "#define DEPTH_PACKING " + d.depthPacking : "", "\n"].filter(s).join("\n")),
        v = h(v, E),
        v = c(v, E),
        T = h(T, E),
        T = c(T, E),
        d instanceof THREE.ShaderMaterial == !1 && (v = l(v),
        T = l(T),
        m && m.drawBuffers && (T = T.replace(/\bgl_FragColor\b/g, "gl_FragData[0]")));
        var A = b + v
          , C = _ + T
          , P = THREE.WebGLShader(f, f.VERTEX_SHADER, A)
          , D = THREE.WebGLShader(f, f.FRAGMENT_SHADER, C);
        f.attachShader(L, P),
        f.attachShader(L, D),
        void 0 !== d.index0AttributeName ? f.bindAttribLocation(L, 0, d.index0AttributeName) : E.morphTargets === !0 && f.bindAttribLocation(L, 0, "position"),
        f.linkProgram(L);
        var B = f.getProgramInfoLog(L)
          , I = f.getShaderInfoLog(P)
          , U = f.getShaderInfoLog(D)
          , F = !0
          , N = !0;
        f.getProgramParameter(L, f.LINK_STATUS) === !1 ? (F = !1,
        console.error("THREE.WebGLProgram: shader error: ", f.getError(), "gl.VALIDATE_STATUS", f.getProgramParameter(L, f.VALIDATE_STATUS), "gl.getProgramInfoLog", B, I, U)) : "" !== B ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", B) : ("" === I || "" === U) && (N = !1),
        N && (this.diagnostics = {
            runnable: F,
            material: d,
            programLog: B,
            vertexShader: {
                log: I,
                prefix: b
            },
            fragmentShader: {
                log: U,
                prefix: _
            }
        }),
        f.deleteShader(P),
        f.deleteShader(D);
        var O;
        this.getUniforms = function() {
            return void 0 === O && (O = new THREE.WebGLUniforms(f,L,e)),
            O
        }
        ;
        var G;
        return this.getAttributes = function() {
            return void 0 === G && (G = o(f, L)),
            G
        }
        ,
        this.destroy = function() {
            f.deleteProgram(L),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.id = u++,
        this.code = p,
        this.usedTimes = 1,
        this.program = L,
        this.vertexShader = P,
        this.fragmentShader = D,
        this
    }
}(),
THREE.WebGLPrograms = function(e, t) {
    function n(e) {
        if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture)
            return 1024;
        var n = t.maxVertexUniforms
          , r = Math.floor((n - 20) / 4)
          , i = r;
        return void 0 !== e && e instanceof THREE.SkinnedMesh && (i = Math.min(e.skeleton.bones.length, i),
        i < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")),
        i
    }
    function r(e, t) {
        var n;
        return e ? e instanceof THREE.Texture ? n = e.encoding : e instanceof THREE.WebGLRenderTarget && (n = e.texture.encoding) : n = THREE.LinearEncoding,
        n === THREE.LinearEncoding && t && (n = THREE.GammaEncoding),
        n
    }
    var i = []
      , a = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points"
    }
      , o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
    this.getParameters = function(i, o, s, c, h) {
        var l = a[i.type]
          , u = n(h)
          , p = e.getPrecision();
        null  !== i.precision && (p = t.getMaxPrecision(i.precision),
        p !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", p, "instead."));
        var d = {
            shaderID: l,
            precision: p,
            supportsVertexTextures: t.vertexTextures,
            outputEncoding: r(e.getCurrentRenderTarget(), e.gammaOutput),
            map: !!i.map,
            mapEncoding: r(i.map, e.gammaInput),
            envMap: !!i.envMap,
            envMapMode: i.envMap && i.envMap.mapping,
            envMapEncoding: r(i.envMap, e.gammaInput),
            envMapCubeUV: !!i.envMap && (i.envMap.mapping === THREE.CubeUVReflectionMapping || i.envMap.mapping === THREE.CubeUVRefractionMapping),
            lightMap: !!i.lightMap,
            aoMap: !!i.aoMap,
            emissiveMap: !!i.emissiveMap,
            emissiveMapEncoding: r(i.emissiveMap, e.gammaInput),
            bumpMap: !!i.bumpMap,
            normalMap: !!i.normalMap,
            displacementMap: !!i.displacementMap,
            roughnessMap: !!i.roughnessMap,
            metalnessMap: !!i.metalnessMap,
            specularMap: !!i.specularMap,
            alphaMap: !!i.alphaMap,
            combine: i.combine,
            vertexColors: i.vertexColors,
            fog: s,
            useFog: i.fog,
            fogExp: s instanceof THREE.FogExp2,
            flatShading: i.shading === THREE.FlatShading,
            sizeAttenuation: i.sizeAttenuation,
            logarithmicDepthBuffer: t.logarithmicDepthBuffer,
            skinning: i.skinning,
            maxBones: u,
            useVertexTexture: t.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
            morphTargets: i.morphTargets,
            morphNormals: i.morphNormals,
            maxMorphTargets: e.maxMorphTargets,
            maxMorphNormals: e.maxMorphNormals,
            numDirLights: o.directional.length,
            numPointLights: o.point.length,
            numSpotLights: o.spot.length,
            numHemiLights: o.hemi.length,
            numClippingPlanes: c,
            shadowMapEnabled: e.shadowMap.enabled && h.receiveShadow && o.shadows.length > 0,
            shadowMapType: e.shadowMap.type,
            toneMapping: e.toneMapping,
            physicallyCorrectLights: e.physicallyCorrectLights,
            premultipliedAlpha: i.premultipliedAlpha,
            alphaTest: i.alphaTest,
            doubleSided: i.side === THREE.DoubleSide,
            flipSided: i.side === THREE.BackSide,
            depthPacking: void 0 !== i.depthPacking ? i.depthPacking : !1
        };
        return d
    }
    ,
    this.getProgramCode = function(e, t) {
        var n = [];
        if (t.shaderID ? n.push(t.shaderID) : (n.push(e.fragmentShader),
        n.push(e.vertexShader)),
        void 0 !== e.defines)
            for (var r in e.defines)
                n.push(r),
                n.push(e.defines[r]);
        for (var i = 0; i < o.length; i++)
            n.push(t[o[i]]);
        return n.join()
    }
    ,
    this.acquireProgram = function(t, n, r) {
        for (var a, o = 0, s = i.length; s > o; o++) {
            var c = i[o];
            if (c.code === r) {
                a = c,
                ++a.usedTimes;
                break
            }
        }
        return void 0 === a && (a = new THREE.WebGLProgram(e,r,t,n),
        i.push(a)),
        a
    }
    ,
    this.releaseProgram = function(e) {
        if (0 === --e.usedTimes) {
            var t = i.indexOf(e);
            i[t] = i[i.length - 1],
            i.pop(),
            e.destroy()
        }
    }
    ,
    this.programs = i
}
,
THREE.WebGLProperties = function() {
    var e = {};
    this.get = function(t) {
        var n = t.uuid
          , r = e[n];
        return void 0 === r && (r = {},
        e[n] = r),
        r
    }
    ,
    this["delete"] = function(t) {
        delete e[t.uuid]
    }
    ,
    this.clear = function() {
        e = {}
    }
}
,
THREE.WebGLShader = function() {
    function e(e) {
        for (var t = e.split("\n"), n = 0; n < t.length; n++)
            t[n] = n + 1 + ": " + t[n];
        return t.join("\n")
    }
    return function(t, n, r) {
        var i = t.createShader(n);
        return t.shaderSource(i, r),
        t.compileShader(i),
        t.getShaderParameter(i, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", n === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(i), e(r)),
        i
    }
}(),
THREE.WebGLShadowMap = function(e, t, n) {
    function r(t, n, r, i) {
        var a = t.geometry
          , o = null 
          , s = g
          , c = t.customDepthMaterial;
        if (r && (s = v,
        c = t.customDistanceMaterial),
        c)
            o = c;
        else {
            var h = void 0 !== a.morphTargets && a.morphTargets.length > 0 && n.morphTargets
              , l = t instanceof THREE.SkinnedMesh && n.skinning
              , u = 0;
            h && (u |= E),
            l && (u |= f),
            o = s[u]
        }
        if (e.localClippingEnabled && n.clipShadows === !0 && 0 !== n.clippingPlanes.length) {
            var p = o.uuid
              , d = n.uuid
              , m = T[p];
            void 0 === m && (m = {},
            T[p] = m);
            var y = m[d];
            void 0 === y && (y = o.clone(),
            m[d] = y),
            o = y
        }
        return o.visible = n.visible,
        o.wireframe = n.wireframe,
        o.side = n.side,
        o.clipShadows = n.clipShadows,
        o.clippingPlanes = n.clippingPlanes,
        o.wireframeLinewidth = n.wireframeLinewidth,
        o.linewidth = n.linewidth,
        r && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(i),
        o
    }
    function i(e, t, n) {
        if (e.visible !== !1) {
            if (e.layers.test(t.layers) && (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && e.castShadow && (e.frustumCulled === !1 || s.intersectsObject(e) === !0)) {
                var r = e.material;
                r.visible === !0 && (e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
                d.push(e))
            }
            for (var a = e.children, o = 0, c = a.length; c > o; o++)
                i(a[o], t, n)
        }
    }
    var a = e.context
      , o = e.state
      , s = new THREE.Frustum
      , c = new THREE.Matrix4
      , h = t.shadows
      , l = new THREE.Vector2
      , u = new THREE.Vector3
      , p = new THREE.Vector3
      , d = []
      , E = 1
      , f = 2
      , m = (E | f) + 1
      , g = new Array(m)
      , v = new Array(m)
      , T = {}
      , y = [new THREE.Vector3(1,0,0), new THREE.Vector3(-1,0,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1), new THREE.Vector3(0,1,0), new THREE.Vector3(0,-1,0)]
      , R = [new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1)]
      , H = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4]
      , x = new THREE.MeshDepthMaterial;
    x.depthPacking = THREE.RGBADepthPacking,
    x.clipping = !0;
    for (var b = THREE.ShaderLib.distanceRGBA, _ = THREE.UniformsUtils.clone(b.uniforms), M = 0; M !== m; ++M) {
        var w = 0 !== (M & E)
          , S = 0 !== (M & f)
          , L = x.clone();
        L.morphTargets = w,
        L.skinning = S,
        g[M] = L;
        var A = new THREE.ShaderMaterial({
            defines: {
                USE_SHADOWMAP: ""
            },
            uniforms: _,
            vertexShader: b.vertexShader,
            fragmentShader: b.fragmentShader,
            morphTargets: w,
            skinning: S,
            clipping: !0
        });
        v[M] = A
    }
    var C = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = THREE.PCFShadowMap,
    this.cullFace = THREE.CullFaceFront,
    this.render = function(t, E) {
        if (C.enabled !== !1 && (C.autoUpdate !== !1 || C.needsUpdate !== !1) && 0 !== h.length) {
            o.clearColor(1, 1, 1, 1),
            o.disable(a.BLEND),
            o.enable(a.CULL_FACE),
            a.frontFace(a.CCW),
            a.cullFace(C.cullFace === THREE.CullFaceFront ? a.FRONT : a.BACK),
            o.setDepthTest(!0),
            o.setScissorTest(!1);
            for (var f, m, g = 0, v = h.length; v > g; g++) {
                var T = h[g]
                  , x = T.shadow
                  , b = x.camera;
                if (l.copy(x.mapSize),
                T instanceof THREE.PointLight) {
                    f = 6,
                    m = !0;
                    var _ = l.x
                      , M = l.y;
                    H[0].set(2 * _, M, _, M),
                    H[1].set(0, M, _, M),
                    H[2].set(3 * _, M, _, M),
                    H[3].set(_, M, _, M),
                    H[4].set(3 * _, 0, _, M),
                    H[5].set(_, 0, _, M),
                    l.x *= 4,
                    l.y *= 2
                } else
                    f = 1,
                    m = !1;
                if (null  === x.map) {
                    var w = {
                        minFilter: THREE.NearestFilter,
                        magFilter: THREE.NearestFilter,
                        format: THREE.RGBAFormat
                    };
                    x.map = new THREE.WebGLRenderTarget(l.x,l.y,w),
                    b.updateProjectionMatrix()
                }
                x instanceof THREE.SpotLightShadow && x.update(T);
                var S = x.map
                  , L = x.matrix;
                p.setFromMatrixPosition(T.matrixWorld),
                b.position.copy(p),
                e.setRenderTarget(S),
                e.clear();
                for (var A = 0; f > A; A++) {
                    if (m) {
                        u.copy(b.position),
                        u.add(y[A]),
                        b.up.copy(R[A]),
                        b.lookAt(u);
                        var P = H[A];
                        o.viewport(P)
                    } else
                        u.setFromMatrixPosition(T.target.matrixWorld),
                        b.lookAt(u);
                    b.updateMatrixWorld(),
                    b.matrixWorldInverse.getInverse(b.matrixWorld),
                    L.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                    L.multiply(b.projectionMatrix),
                    L.multiply(b.matrixWorldInverse),
                    c.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse),
                    s.setFromMatrix(c),
                    d.length = 0,
                    i(t, E, b);
                    for (var D = 0, B = d.length; B > D; D++) {
                        var I = d[D]
                          , U = n.update(I)
                          , F = I.material;
                        if (F instanceof THREE.MultiMaterial)
                            for (var N = U.groups, O = F.materials, G = 0, V = N.length; V > G; G++) {
                                var z = N[G]
                                  , k = O[z.materialIndex];
                                if (k.visible === !0) {
                                    var j = r(I, k, m, p);
                                    e.renderBufferDirect(b, null , U, j, I, z)
                                }
                            }
                        else {
                            var j = r(I, F, m, p);
                            e.renderBufferDirect(b, null , U, j, I, null )
                        }
                    }
                }
            }
            var W = e.getClearColor()
              , X = e.getClearAlpha();
            e.setClearColor(W, X),
            o.enable(a.BLEND),
            C.cullFace === THREE.CullFaceFront && a.cullFace(a.BACK),
            C.needsUpdate = !1
        }
    }
}
,
THREE.WebGLState = function(e, t, n) {
    var r = this
      , i = new THREE.Vector4
      , a = e.getParameter(e.MAX_VERTEX_ATTRIBS)
      , o = new Uint8Array(a)
      , s = new Uint8Array(a)
      , c = new Uint8Array(a)
      , h = {}
      , l = null 
      , u = null 
      , p = null 
      , d = null 
      , E = null 
      , f = null 
      , m = null 
      , g = null 
      , v = !1
      , T = null 
      , y = null 
      , R = null 
      , H = null 
      , x = null 
      , b = null 
      , _ = null 
      , M = null 
      , w = null 
      , S = null 
      , L = null 
      , A = null 
      , C = null 
      , P = null 
      , D = null 
      , B = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
      , I = void 0
      , U = {}
      , F = new THREE.Vector4
      , N = null 
      , O = null 
      , G = new THREE.Vector4
      , V = new THREE.Vector4;
    this.init = function() {
        this.clearColor(0, 0, 0, 1),
        this.clearDepth(1),
        this.clearStencil(0),
        this.enable(e.DEPTH_TEST),
        e.depthFunc(e.LEQUAL),
        e.frontFace(e.CCW),
        e.cullFace(e.BACK),
        this.enable(e.CULL_FACE),
        this.enable(e.BLEND),
        e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
    }
    ,
    this.initAttributes = function() {
        for (var e = 0, t = o.length; t > e; e++)
            o[e] = 0
    }
    ,
    this.enableAttribute = function(n) {
        if (o[n] = 1,
        0 === s[n] && (e.enableVertexAttribArray(n),
        s[n] = 1),
        0 !== c[n]) {
            var r = t.get("ANGLE_instanced_arrays");
            r.vertexAttribDivisorANGLE(n, 0),
            c[n] = 0
        }
    }
    ,
    this.enableAttributeAndDivisor = function(t, n, r) {
        o[t] = 1,
        0 === s[t] && (e.enableVertexAttribArray(t),
        s[t] = 1),
        c[t] !== n && (r.vertexAttribDivisorANGLE(t, n),
        c[t] = n)
    }
    ,
    this.disableUnusedAttributes = function() {
        for (var t = 0, n = s.length; n > t; t++)
            s[t] !== o[t] && (e.disableVertexAttribArray(t),
            s[t] = 0)
    }
    ,
    this.enable = function(t) {
        h[t] !== !0 && (e.enable(t),
        h[t] = !0)
    }
    ,
    this.disable = function(t) {
        h[t] !== !1 && (e.disable(t),
        h[t] = !1)
    }
    ,
    this.getCompressedTextureFormats = function() {
        if (null  === l && (l = [],
        t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
            for (var n = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), r = 0; r < n.length; r++)
                l.push(n[r]);
        return l
    }
    ,
    this.setBlending = function(t, r, i, a, o, s, c, h) {
        t === THREE.NoBlending ? this.disable(e.BLEND) : this.enable(e.BLEND),
        (t !== u || h !== v) && (t === THREE.AdditiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === THREE.SubtractiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === THREE.MultiplyBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ZERO, e.ZERO, e.SRC_COLOR, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ZERO, e.SRC_COLOR)) : h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)),
        u = t,
        v = h),
        t === THREE.CustomBlending ? (o = o || r,
        s = s || i,
        c = c || a,
        (r !== p || o !== f) && (e.blendEquationSeparate(n(r), n(o)),
        p = r,
        f = o),
        (i !== d || a !== E || s !== m || c !== g) && (e.blendFuncSeparate(n(i), n(a), n(s), n(c)),
        d = i,
        E = a,
        m = s,
        g = c)) : (p = null ,
        d = null ,
        E = null ,
        f = null ,
        m = null ,
        g = null )
    }
    ,
    this.setDepthFunc = function(t) {
        if (T !== t) {
            if (t)
                switch (t) {
                case THREE.NeverDepth:
                    e.depthFunc(e.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    e.depthFunc(e.ALWAYS);
                    break;
                case THREE.LessDepth:
                    e.depthFunc(e.LESS);
                    break;
                case THREE.LessEqualDepth:
                    e.depthFunc(e.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    e.depthFunc(e.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    e.depthFunc(e.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    e.depthFunc(e.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    e.depthFunc(e.NOTEQUAL);
                    break;
                default:
                    e.depthFunc(e.LEQUAL)
                }
            else
                e.depthFunc(e.LEQUAL);
            T = t
        }
    }
    ,
    this.setDepthTest = function(t) {
        t ? this.enable(e.DEPTH_TEST) : this.disable(e.DEPTH_TEST)
    }
    ,
    this.setDepthWrite = function(t) {
        y !== t && (e.depthMask(t),
        y = t)
    }
    ,
    this.setColorWrite = function(t) {
        R !== t && (e.colorMask(t, t, t, t),
        R = t)
    }
    ,
    this.setStencilFunc = function(t, n, r) {
        (x !== t || b !== n || _ !== r) && (e.stencilFunc(t, n, r),
        x = t,
        b = n,
        _ = r)
    }
    ,
    this.setStencilOp = function(t, n, r) {
        (M !== t || w !== n || S !== r) && (e.stencilOp(t, n, r),
        M = t,
        w = n,
        S = r)
    }
    ,
    this.setStencilTest = function(t) {
        t ? this.enable(e.STENCIL_TEST) : this.disable(e.STENCIL_TEST)
    }
    ,
    this.setStencilWrite = function(t) {
        H !== t && (e.stencilMask(t),
        H = t)
    }
    ,
    this.setFlipSided = function(t) {
        L !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW),
        L = t)
    }
    ,
    this.setLineWidth = function(t) {
        t !== A && (e.lineWidth(t),
        A = t)
    }
    ,
    this.setPolygonOffset = function(t, n, r) {
        t ? this.enable(e.POLYGON_OFFSET_FILL) : this.disable(e.POLYGON_OFFSET_FILL),
        !t || C === n && P === r || (e.polygonOffset(n, r),
        C = n,
        P = r)
    }
    ,
    this.getScissorTest = function() {
        return D
    }
    ,
    this.setScissorTest = function(t) {
        D = t,
        t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
    }
    ,
    this.activeTexture = function(t) {
        void 0 === t && (t = e.TEXTURE0 + B - 1),
        I !== t && (e.activeTexture(t),
        I = t)
    }
    ,
    this.bindTexture = function(t, n) {
        void 0 === I && r.activeTexture();
        var i = U[I];
        void 0 === i && (i = {
            type: void 0,
            texture: void 0
        },
        U[I] = i),
        (i.type !== t || i.texture !== n) && (e.bindTexture(t, n),
        i.type = t,
        i.texture = n)
    }
    ,
    this.compressedTexImage2D = function() {
        try {
            e.compressedTexImage2D.apply(e, arguments)
        } catch (t) {
            console.error(t)
        }
    }
    ,
    this.texImage2D = function() {
        try {
            e.texImage2D.apply(e, arguments)
        } catch (t) {
            console.error(t)
        }
    }
    ,
    this.clearColor = function(t, n, r, a) {
        i.set(t, n, r, a),
        F.equals(i) === !1 && (e.clearColor(t, n, r, a),
        F.copy(i))
    }
    ,
    this.clearDepth = function(t) {
        N !== t && (e.clearDepth(t),
        N = t)
    }
    ,
    this.clearStencil = function(t) {
        O !== t && (e.clearStencil(t),
        O = t)
    }
    ,
    this.scissor = function(t) {
        G.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w),
        G.copy(t))
    }
    ,
    this.viewport = function(t) {
        V.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w),
        V.copy(t))
    }
    ,
    this.reset = function() {
        for (var t = 0; t < s.length; t++)
            1 === s[t] && (e.disableVertexAttribArray(t),
            s[t] = 0);
        h = {},
        l = null ,
        I = void 0,
        U = {},
        u = null ,
        R = null ,
        y = null ,
        H = null ,
        L = null 
    }
}
,
THREE.WebGLUniforms = function() {
    var e = function() {
        this.seq = [],
        this.map = {}
    }
      , t = []
      , n = []
      , r = function(e, n, r) {
        var i = e[0];
        if (0 >= i || i > 0)
            return e;
        var a = n * r
          , o = t[a];
        if (void 0 === o && (o = new Float32Array(a),
        t[a] = o),
        0 !== n) {
            i.toArray(o, 0);
            for (var s = 1, c = 0; s !== n; ++s)
                c += r,
                e[s].toArray(o, c)
        }
        return o
    }
      , i = function(e, t) {
        var r = n[t];
        void 0 === r && (r = new Int32Array(t),
        n[t] = r);
        for (var i = 0; i !== t; ++i)
            r[i] = e.allocTextureUnit();
        return r
    }
      , a = function(e, t) {
        e.uniform1f(this.addr, t)
    }
      , o = function(e, t) {
        e.uniform1i(this.addr, t)
    }
      , s = function(e, t) {
        void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
    }
      , c = function(e, t) {
        void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
    }
      , h = function(e, t) {
        void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
    }
      , l = function(e, t) {
        e.uniformMatrix2fv(this.addr, !1, t.elements || t)
    }
      , u = function(e, t) {
        e.uniformMatrix3fv(this.addr, !1, t.elements || t)
    }
      , p = function(e, t) {
        e.uniformMatrix4fv(this.addr, !1, t.elements || t)
    }
      , d = function(e, t, n) {
        var r = n.allocTextureUnit();
        e.uniform1i(this.addr, r),
        t && n.setTexture2D(t, r)
    }
      , E = function(e, t, n) {
        var r = n.allocTextureUnit();
        e.uniform1i(this.addr, r),
        t && n.setTextureCube(t, r)
    }
      , f = function(e, t) {
        e.uniform2iv(this.addr, t)
    }
      , m = function(e, t) {
        e.uniform3iv(this.addr, t)
    }
      , g = function(e, t) {
        e.uniform4iv(this.addr, t)
    }
      , v = function(e) {
        switch (e) {
        case 5126:
            return a;
        case 35664:
            return s;
        case 35665:
            return c;
        case 35666:
            return h;
        case 35674:
            return l;
        case 35675:
            return u;
        case 35676:
            return p;
        case 35678:
            return d;
        case 35680:
            return E;
        case 5124:
        case 35670:
            return o;
        case 35667:
        case 35671:
            return f;
        case 35668:
        case 35672:
            return m;
        case 35669:
        case 35673:
            return g
        }
    }
      , T = function(e, t) {
        e.uniform1fv(this.addr, t)
    }
      , y = function(e, t) {
        e.uniform1iv(this.addr, t)
    }
      , R = function(e, t) {
        e.uniform2fv(this.addr, r(t, this.size, 2))
    }
      , H = function(e, t) {
        e.uniform3fv(this.addr, r(t, this.size, 3))
    }
      , x = function(e, t) {
        e.uniform4fv(this.addr, r(t, this.size, 4))
    }
      , b = function(e, t) {
        e.uniformMatrix2fv(this.addr, !1, r(t, this.size, 4))
    }
      , _ = function(e, t) {
        e.uniformMatrix3fv(this.addr, !1, r(t, this.size, 9))
    }
      , M = function(e, t) {
        e.uniformMatrix4fv(this.addr, !1, r(t, this.size, 16))
    }
      , w = function(e, t, n) {
        var r = t.length
          , a = i(n, r);
        e.uniform1iv(this.addr, a);
        for (var o = 0; o !== r; ++o) {
            var s = t[o];
            s && n.setTexture2D(s, a[o])
        }
    }
      , S = function(e, t, n) {
        var r = t.length
          , a = i(n, r);
        e.uniform1iv(this.addr, a);
        for (var o = 0; o !== r; ++o) {
            var s = t[o];
            s && n.setTextureCube(s, a[o])
        }
    }
      , L = function(e) {
        switch (e) {
        case 5126:
            return T;
        case 35664:
            return R;
        case 35665:
            return H;
        case 35666:
            return x;
        case 35674:
            return b;
        case 35675:
            return _;
        case 35676:
            return M;
        case 35678:
            return w;
        case 35680:
            return S;
        case 5124:
        case 35670:
            return y;
        case 35667:
        case 35671:
            return f;
        case 35668:
        case 35672:
            return m;
        case 35669:
        case 35673:
            return g
        }
    }
      , A = function(e, t, n) {
        this.id = e,
        this.addr = n,
        this.setValue = v(t.type)
    }
      , C = function(e, t, n) {
        this.id = e,
        this.addr = n,
        this.size = t.size,
        this.setValue = L(t.type)
    }
      , P = function(t) {
        this.id = t,
        e.call(this)
    }
    ;
    P.prototype.setValue = function(e, t) {
        for (var n = this.seq, r = 0, i = n.length; r !== i; ++r) {
            var a = n[r];
            a.setValue(e, t[a.id])
        }
    }
    ;
    var D = /([\w\d_]+)(\])?(\[|\.)?/g
      , B = function(e, t) {
        e.seq.push(t),
        e.map[t.id] = t
    }
      , I = function(e, t, n) {
        var r = e.name
          , i = r.length;
        for (D.lastIndex = 0; ; ) {
            var a = D.exec(r)
              , o = D.lastIndex
              , s = a[1]
              , c = "]" === a[2]
              , h = a[3];
            if (c && (s = 0 | s),
            void 0 === h || "[" === h && o + 2 === i) {
                B(n, void 0 === h ? new A(s,e,t) : new C(s,e,t));
                break
            }
            var l = n.map
              , u = l[s];
            void 0 === u && (u = new P(s),
            B(n, u)),
            n = u
        }
    }
      , U = function(t, n, r) {
        e.call(this),
        this.renderer = r;
        for (var i = t.getProgramParameter(n, t.ACTIVE_UNIFORMS), a = 0; a !== i; ++a) {
            var o = t.getActiveUniform(n, a)
              , s = o.name
              , c = t.getUniformLocation(n, s);
            I(o, c, this)
        }
    }
    ;
    return U.prototype.setValue = function(e, t, n) {
        var r = this.map[t];
        void 0 !== r && r.setValue(e, n, this.renderer)
    }
    ,
    U.prototype.set = function(e, t, n) {
        var r = this.map[n];
        void 0 !== r && r.setValue(e, t[n], this.renderer)
    }
    ,
    U.prototype.setOptional = function(e, t, n) {
        var r = t[n];
        void 0 !== r && this.setValue(e, n, r)
    }
    ,
    U.upload = function(e, t, n, r) {
        for (var i = 0, a = t.length; i !== a; ++i) {
            var o = t[i]
              , s = n[o.id];
            s.needsUpdate !== !1 && o.setValue(e, s.value, r)
        }
    }
    ,
    U.seqWithValue = function(e, t) {
        for (var n = [], r = 0, i = e.length; r !== i; ++r) {
            var a = e[r];
            a.id in t && n.push(a)
        }
        return n
    }
    ,
    U.splitDynamic = function(e, t) {
        for (var n = null , r = e.length, i = 0, a = 0; a !== r; ++a) {
            var o = e[a]
              , s = t[o.id];
            s && s.dynamic === !0 ? (null  === n && (n = []),
            n.push(o)) : (a > i && (e[i] = o),
            ++i)
        }
        return r > i && (e.length = i),
        n
    }
    ,
    U.evalDynamic = function(e, t, n, r) {
        for (var i = 0, a = e.length; i !== a; ++i) {
            var o = t[e[i].id]
              , s = o.onUpdateCallback;
            void 0 !== s && s.call(o, n, r)
        }
    }
    ,
    U
}(),
THREE.LensFlarePlugin = function(e, t) {
    function n() {
        var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
          , t = new Uint16Array([0, 1, 2, 0, 2, 3]);
        i = p.createBuffer(),
        a = p.createBuffer(),
        p.bindBuffer(p.ARRAY_BUFFER, i),
        p.bufferData(p.ARRAY_BUFFER, e, p.STATIC_DRAW),
        p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a),
        p.bufferData(p.ELEMENT_ARRAY_BUFFER, t, p.STATIC_DRAW),
        l = p.createTexture(),
        u = p.createTexture(),
        d.bindTexture(p.TEXTURE_2D, l),
        p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null ),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST),
        d.bindTexture(p.TEXTURE_2D, u),
        p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null ),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST),
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST),
        o = {
            vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
        },
        s = r(o),
        c = {
            vertex: p.getAttribLocation(s, "position"),
            uv: p.getAttribLocation(s, "uv")
        },
        h = {
            renderType: p.getUniformLocation(s, "renderType"),
            map: p.getUniformLocation(s, "map"),
            occlusionMap: p.getUniformLocation(s, "occlusionMap"),
            opacity: p.getUniformLocation(s, "opacity"),
            color: p.getUniformLocation(s, "color"),
            scale: p.getUniformLocation(s, "scale"),
            rotation: p.getUniformLocation(s, "rotation"),
            screenPosition: p.getUniformLocation(s, "screenPosition")
        }
    }
    function r(t) {
        var n = p.createProgram()
          , r = p.createShader(p.FRAGMENT_SHADER)
          , i = p.createShader(p.VERTEX_SHADER)
          , a = "precision " + e.getPrecision() + " float;\n";
        return p.shaderSource(r, a + t.fragmentShader),
        p.shaderSource(i, a + t.vertexShader),
        p.compileShader(r),
        p.compileShader(i),
        p.attachShader(n, r),
        p.attachShader(n, i),
        p.linkProgram(n),
        n
    }
    var i, a, o, s, c, h, l, u, p = e.context, d = e.state;
    this.render = function(r, o, E) {
        if (0 !== t.length) {
            var f = new THREE.Vector3
              , m = E.w / E.z
              , g = .5 * E.z
              , v = .5 * E.w
              , T = 16 / E.w
              , y = new THREE.Vector2(T * m,T)
              , R = new THREE.Vector3(1,1,0)
              , H = new THREE.Vector2(1,1)
              , x = new THREE.Box2;
            x.min.set(0, 0),
            x.max.set(E.z - 16, E.w - 16),
            void 0 === s && n(),
            p.useProgram(s),
            d.initAttributes(),
            d.enableAttribute(c.vertex),
            d.enableAttribute(c.uv),
            d.disableUnusedAttributes(),
            p.uniform1i(h.occlusionMap, 0),
            p.uniform1i(h.map, 1),
            p.bindBuffer(p.ARRAY_BUFFER, i),
            p.vertexAttribPointer(c.vertex, 2, p.FLOAT, !1, 16, 0),
            p.vertexAttribPointer(c.uv, 2, p.FLOAT, !1, 16, 8),
            p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, a),
            d.disable(p.CULL_FACE),
            d.setDepthWrite(!1);
            for (var b = 0, _ = t.length; _ > b; b++) {
                T = 16 / E.w,
                y.set(T * m, T);
                var M = t[b];
                if (f.set(M.matrixWorld.elements[12], M.matrixWorld.elements[13], M.matrixWorld.elements[14]),
                f.applyMatrix4(o.matrixWorldInverse),
                f.applyProjection(o.projectionMatrix),
                R.copy(f),
                H.x = E.x + R.x * g + g - 8,
                H.y = E.y + R.y * v + v - 8,
                x.containsPoint(H) === !0) {
                    d.activeTexture(p.TEXTURE0),
                    d.bindTexture(p.TEXTURE_2D, null ),
                    d.activeTexture(p.TEXTURE1),
                    d.bindTexture(p.TEXTURE_2D, l),
                    p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, H.x, H.y, 16, 16, 0),
                    p.uniform1i(h.renderType, 0),
                    p.uniform2f(h.scale, y.x, y.y),
                    p.uniform3f(h.screenPosition, R.x, R.y, R.z),
                    d.disable(p.BLEND),
                    d.enable(p.DEPTH_TEST),
                    p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0),
                    d.activeTexture(p.TEXTURE0),
                    d.bindTexture(p.TEXTURE_2D, u),
                    p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, H.x, H.y, 16, 16, 0),
                    p.uniform1i(h.renderType, 1),
                    d.disable(p.DEPTH_TEST),
                    d.activeTexture(p.TEXTURE1),
                    d.bindTexture(p.TEXTURE_2D, l),
                    p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0),
                    M.positionScreen.copy(R),
                    M.customUpdateCallback ? M.customUpdateCallback(M) : M.updateLensFlares(),
                    p.uniform1i(h.renderType, 2),
                    d.enable(p.BLEND);
                    for (var w = 0, S = M.lensFlares.length; S > w; w++) {
                        var L = M.lensFlares[w];
                        L.opacity > .001 && L.scale > .001 && (R.x = L.x,
                        R.y = L.y,
                        R.z = L.z,
                        T = L.size * L.scale / E.w,
                        y.x = T * m,
                        y.y = T,
                        p.uniform3f(h.screenPosition, R.x, R.y, R.z),
                        p.uniform2f(h.scale, y.x, y.y),
                        p.uniform1f(h.rotation, L.rotation),
                        p.uniform1f(h.opacity, L.opacity),
                        p.uniform3f(h.color, L.color.r, L.color.g, L.color.b),
                        d.setBlending(L.blending, L.blendEquation, L.blendSrc, L.blendDst),
                        e.setTexture2D(L.texture, 1),
                        p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                    }
                }
            }
            d.enable(p.CULL_FACE),
            d.enable(p.DEPTH_TEST),
            d.setDepthWrite(!0),
            e.resetGLState()
        }
    }
}
,
THREE.SpritePlugin = function(e, t) {
    function n() {
        var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
          , t = new Uint16Array([0, 1, 2, 0, 2, 3]);
        a = u.createBuffer(),
        o = u.createBuffer(),
        u.bindBuffer(u.ARRAY_BUFFER, a),
        u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW),
        u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, o),
        u.bufferData(u.ELEMENT_ARRAY_BUFFER, t, u.STATIC_DRAW),
        s = r(),
        c = {
            position: u.getAttribLocation(s, "position"),
            uv: u.getAttribLocation(s, "uv")
        },
        h = {
            uvOffset: u.getUniformLocation(s, "uvOffset"),
            uvScale: u.getUniformLocation(s, "uvScale"),
            rotation: u.getUniformLocation(s, "rotation"),
            scale: u.getUniformLocation(s, "scale"),
            color: u.getUniformLocation(s, "color"),
            map: u.getUniformLocation(s, "map"),
            opacity: u.getUniformLocation(s, "opacity"),
            modelViewMatrix: u.getUniformLocation(s, "modelViewMatrix"),
            projectionMatrix: u.getUniformLocation(s, "projectionMatrix"),
            fogType: u.getUniformLocation(s, "fogType"),
            fogDensity: u.getUniformLocation(s, "fogDensity"),
            fogNear: u.getUniformLocation(s, "fogNear"),
            fogFar: u.getUniformLocation(s, "fogFar"),
            fogColor: u.getUniformLocation(s, "fogColor"),
            alphaTest: u.getUniformLocation(s, "alphaTest")
        };
        var n = document.createElement("canvas");
        n.width = 8,
        n.height = 8;
        var i = n.getContext("2d");
        i.fillStyle = "white",
        i.fillRect(0, 0, 8, 8),
        l = new THREE.Texture(n),
        l.needsUpdate = !0
    }
    function r() {
        var t = u.createProgram()
          , n = u.createShader(u.VERTEX_SHADER)
          , r = u.createShader(u.FRAGMENT_SHADER);
        return u.shaderSource(n, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
        u.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
        u.compileShader(n),
        u.compileShader(r),
        u.attachShader(t, n),
        u.attachShader(t, r),
        u.linkProgram(t),
        t
    }
    function i(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
    }
    var a, o, s, c, h, l, u = e.context, p = e.state, d = new THREE.Vector3, E = new THREE.Quaternion, f = new THREE.Vector3;
    this.render = function(r, m) {
        if (0 !== t.length) {
            void 0 === s && n(),
            u.useProgram(s),
            p.initAttributes(),
            p.enableAttribute(c.position),
            p.enableAttribute(c.uv),
            p.disableUnusedAttributes(),
            p.disable(u.CULL_FACE),
            p.enable(u.BLEND),
            u.bindBuffer(u.ARRAY_BUFFER, a),
            u.vertexAttribPointer(c.position, 2, u.FLOAT, !1, 16, 0),
            u.vertexAttribPointer(c.uv, 2, u.FLOAT, !1, 16, 8),
            u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, o),
            u.uniformMatrix4fv(h.projectionMatrix, !1, m.projectionMatrix.elements),
            p.activeTexture(u.TEXTURE0),
            u.uniform1i(h.map, 0);
            var g = 0
              , v = 0
              , T = r.fog;
            T ? (u.uniform3f(h.fogColor, T.color.r, T.color.g, T.color.b),
            T instanceof THREE.Fog ? (u.uniform1f(h.fogNear, T.near),
            u.uniform1f(h.fogFar, T.far),
            u.uniform1i(h.fogType, 1),
            g = 1,
            v = 1) : T instanceof THREE.FogExp2 && (u.uniform1f(h.fogDensity, T.density),
            u.uniform1i(h.fogType, 2),
            g = 2,
            v = 2)) : (u.uniform1i(h.fogType, 0),
            g = 0,
            v = 0);
            for (var y = 0, R = t.length; R > y; y++) {
                var H = t[y];
                H.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse, H.matrixWorld),
                H.z = -H.modelViewMatrix.elements[14]
            }
            t.sort(i);
            for (var x = [], y = 0, R = t.length; R > y; y++) {
                var H = t[y]
                  , b = H.material;
                u.uniform1f(h.alphaTest, b.alphaTest),
                u.uniformMatrix4fv(h.modelViewMatrix, !1, H.modelViewMatrix.elements),
                H.matrixWorld.decompose(d, E, f),
                x[0] = f.x,
                x[1] = f.y;
                var _ = 0;
                r.fog && b.fog && (_ = v),
                g !== _ && (u.uniform1i(h.fogType, _),
                g = _),
                null  !== b.map ? (u.uniform2f(h.uvOffset, b.map.offset.x, b.map.offset.y),
                u.uniform2f(h.uvScale, b.map.repeat.x, b.map.repeat.y)) : (u.uniform2f(h.uvOffset, 0, 0),
                u.uniform2f(h.uvScale, 1, 1)),
                u.uniform1f(h.opacity, b.opacity),
                u.uniform3f(h.color, b.color.r, b.color.g, b.color.b),
                u.uniform1f(h.rotation, b.rotation),
                u.uniform2fv(h.scale, x),
                p.setBlending(b.blending, b.blendEquation, b.blendSrc, b.blendDst),
                p.setDepthTest(b.depthTest),
                p.setDepthWrite(b.depthWrite),
                b.map ? e.setTexture2D(b.map, 0) : e.setTexture2D(l, 0),
                u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
            }
            p.enable(u.CULL_FACE),
            e.resetGLState()
        }
    }
}
,
Object.defineProperties(THREE.Box2.prototype, {
    empty: {
        value: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        }
    },
    isIntersectionBox: {
        value: function(e) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(e)
        }
    }
}),
Object.defineProperties(THREE.Box3.prototype, {
    empty: {
        value: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        }
    },
    isIntersectionBox: {
        value: function(e) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(e)
        }
    },
    isIntersectionSphere: {
        value: function(e) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(e)
        }
    }
}),
Object.defineProperties(THREE.Matrix3.prototype, {
    multiplyVector3: {
        value: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            e.applyMatrix3(this)
        }
    },
    multiplyVector3Array: {
        value: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(e)
        }
    }
}),
Object.defineProperties(THREE.Matrix4.prototype, {
    extractPosition: {
        value: function(e) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(e)
        }
    },
    setRotationFromQuaternion: {
        value: function(e) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(e)
        }
    },
    multiplyVector3: {
        value: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
            e.applyProjection(this)
        }
    },
    multiplyVector4: {
        value: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            e.applyMatrix4(this)
        }
    },
    multiplyVector3Array: {
        value: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(e)
        }
    },
    rotateAxis: {
        value: function(e) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            e.transformDirection(this)
        }
    },
    crossVector: {
        value: function(e) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            e.applyMatrix4(this)
        }
    },
    translate: {
        value: function(e) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }
    },
    rotateX: {
        value: function(e) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }
    },
    rotateY: {
        value: function(e) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }
    },
    rotateZ: {
        value: function(e) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }
    },
    rotateByAxis: {
        value: function(e, t) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }
}),
Object.defineProperties(THREE.Plane.prototype, {
    isIntersectionLine: {
        value: function(e) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
            this.intersectsLine(e)
        }
    }
}),
Object.defineProperties(THREE.Quaternion.prototype, {
    multiplyVector3: {
        value: function(e) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
            e.applyQuaternion(this)
        }
    }
}),
Object.defineProperties(THREE.Ray.prototype, {
    isIntersectionBox: {
        value: function(e) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(e)
        }
    },
    isIntersectionPlane: {
        value: function(e) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(e)
        }
    },
    isIntersectionSphere: {
        value: function(e) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(e)
        }
    }
}),
Object.defineProperties(THREE.Vector3.prototype, {
    setEulerFromRotationMatrix: {
        value: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }
    },
    setEulerFromQuaternion: {
        value: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }
    },
    getPositionFromMatrix: {
        value: function(e) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(e)
        }
    },
    getScaleFromMatrix: {
        value: function(e) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(e)
        }
    },
    getColumnFromMatrix: {
        value: function(e, t) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(e, t)
        }
    }
}),
THREE.Face4 = function(e, t, n, r, i, a, o) {
    return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
    new THREE.Face3(e,t,n,i,a,o)
}
,
THREE.Vertex = function(e, t, n) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
    new THREE.Vector3(e,t,n)
}
,
Object.defineProperties(THREE.Object3D.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
        },
        set: function(e) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order = e
        }
    },
    getChildByName: {
        value: function(e) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(e)
        }
    },
    renderDepth: {
        set: function(e) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }
    },
    translate: {
        value: function(e, t) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(t, e)
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function(e) {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
}),
Object.defineProperties(THREE, {
    PointCloud: {
        value: function(e, t) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
            new THREE.Points(e,t)
        }
    },
    ParticleSystem: {
        value: function(e, t) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
            new THREE.Points(e,t)
        }
    }
}),
Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function(e) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
            this.shadow.camera.fov = e
        }
    },
    shadowCameraLeft: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
            this.shadow.camera.left = e
        }
    },
    shadowCameraRight: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
            this.shadow.camera.right = e
        }
    },
    shadowCameraTop: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
            this.shadow.camera.top = e
        }
    },
    shadowCameraBottom: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
            this.shadow.camera.bottom = e
        }
    },
    shadowCameraNear: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
            this.shadow.camera.near = e
        }
    },
    shadowCameraFar: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
            this.shadow.camera.far = e
        }
    },
    shadowCameraVisible: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(e) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            this.shadow.bias = e
        }
    },
    shadowDarkness: {
        set: function(e) {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(e) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
            this.shadow.mapSize.width = e
        }
    },
    shadowMapHeight: {
        set: function(e) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
            this.shadow.mapSize.height = e
        }
    }
}),
Object.defineProperties(THREE.BufferAttribute.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
            this.array.length
        }
    }
}),
Object.defineProperties(THREE.BufferGeometry.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
            this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
            this.groups
        }
    },
    addIndex: {
        value: function(e) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(e)
        }
    },
    addDrawCall: {
        value: function(e, t, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(e, t)
        }
    },
    clearDrawCalls: {
        value: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        }
    },
    computeTangents: {
        value: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        }
    },
    computeOffsets: {
        value: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }
}),
Object.defineProperties(THREE.Material.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        },
        set: function(e) {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
            new THREE.Color
        }
    }
}),
Object.defineProperties(THREE, {
    PointCloudMaterial: {
        value: function(e) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
            new THREE.PointsMaterial(e)
        }
    },
    ParticleBasicMaterial: {
        value: function(e) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
            new THREE.PointsMaterial(e)
        }
    },
    ParticleSystemMaterial: {
        value: function(e) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
            new THREE.PointsMaterial(e)
        }
    }
}),
Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
    metal: {
        get: function() {
            return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
            !1
        },
        set: function(e) {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
    }
}),
Object.defineProperties(THREE.ShaderMaterial.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives
        },
        set: function(e) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives = e
        }
    }
}),
Object.defineProperties(THREE.WebGLRenderer.prototype, {
    supportsFloatTextures: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        }
    },
    supportsHalfFloatTextures: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        }
    },
    supportsStandardDerivatives: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        }
    },
    supportsCompressedTextureS3TC: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        }
    },
    supportsCompressedTexturePVRTC: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }
    },
    supportsBlendMinMax: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        }
    },
    supportsVertexTextures: {
        value: function() {
            return this.capabilities.vertexTextures
        }
    },
    supportsInstancedArrays: {
        value: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        }
    },
    enableScissorTest: {
        value: function(e) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(e)
        }
    },
    initMaterial: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }
    },
    addPrePlugin: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }
    },
    addPostPlugin: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }
    },
    updateShadowMap: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    },
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
            this.shadowMap.enabled = e
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
            this.shadowMap.type = e
        }
    },
    shadowMapCullFace: {
        get: function() {
            return this.shadowMap.cullFace
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
            this.shadowMap.cullFace = e
        }
    }
}),
Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS = e
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT = e
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter = e
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter = e
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy = e
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset = e
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat = e
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format = e
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type = e
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps = e
        }
    }
}),
Object.defineProperties(THREE.Audio.prototype, {
    load: {
        value: function(e) {
            console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
            var t = this
              , n = new THREE.AudioLoader;
            return n.load(e, function(e) {
                t.setBuffer(e)
            }),
            this
        }
    }
}),
THREE.GeometryUtils = {
    merge: function(e, t, n) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var r;
        t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(),
        r = t.matrix,
        t = t.geometry),
        e.merge(t, r, n)
    },
    center: function(e) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
        e.center()
    }
},
THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function(e, t, n, r) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var i = new THREE.TextureLoader;
        i.setCrossOrigin(this.crossOrigin);
        var a = i.load(e, n, void 0, r);
        return t && (a.mapping = t),
        a
    },
    loadTextureCube: function(e, t, n, r) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var i = new THREE.CubeTextureLoader;
        i.setCrossOrigin(this.crossOrigin);
        var a = i.load(e, n, void 0, r);
        return t && (a.mapping = t),
        a
    },
    loadCompressedTexture: function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    },
    loadCompressedTextureCube: function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
},
THREE.Projector = function() {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
    this.projectVector = function(e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."),
        e.project(t)
    }
    ,
    this.unprojectVector = function(e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
        e.unproject(t)
    }
    ,
    this.pickingRay = function(e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
}
,
THREE.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
    this.domElement = document.createElement("canvas"),
    this.clear = function() {}
    ,
    this.render = function() {}
    ,
    this.setClearColor = function() {}
    ,
    this.setSize = function() {}
}
,
THREE.MeshFaceMaterial = THREE.MultiMaterial,
Object.defineProperties(THREE.LOD.prototype, {
    objects: {
        get: function() {
            return console.warn("THREE.LOD: .objects has been renamed to .levels."),
            this.levels
        }
    }
}),
THREE.CurveUtils = {
    tangentQuadraticBezier: function(e, t, n, r) {
        return 2 * (1 - e) * (n - t) + 2 * e * (r - n)
    },
    tangentCubicBezier: function(e, t, n, r, i) {
        return -3 * t * (1 - e) * (1 - e) + 3 * n * (1 - e) * (1 - e) - 6 * e * n * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * i
    },
    tangentSpline: function(e, t, n, r, i) {
        var a = 6 * e * e - 6 * e
          , o = 3 * e * e - 4 * e + 1
          , s = -6 * e * e + 6 * e
          , c = 3 * e * e - 2 * e;
        return a + o + s + c
    },
    interpolate: function(e, t, n, r, i) {
        var a = .5 * (n - e)
          , o = .5 * (r - t)
          , s = i * i
          , c = i * s;
        return (2 * t - 2 * n + a + o) * c + (-3 * t + 3 * n - 2 * a - o) * s + a * i + t
    }
},
THREE.SceneUtils = {
    createMultiMaterialObject: function(e, t) {
        for (var n = new THREE.Group, r = 0, i = t.length; i > r; r++)
            n.add(new THREE.Mesh(e,t[r]));
        return n
    },
    detach: function(e, t, n) {
        e.applyMatrix(t.matrixWorld),
        t.remove(e),
        n.add(e)
    },
    attach: function(e, t, n) {
        var r = new THREE.Matrix4;
        r.getInverse(n.matrixWorld),
        e.applyMatrix(r),
        t.remove(e),
        n.add(e)
    }
},
THREE.ShapeUtils = {
    area: function(e) {
        for (var t = e.length, n = 0, r = t - 1, i = 0; t > i; r = i++)
            n += e[r].x * e[i].y - e[i].x * e[r].y;
        return .5 * n
    },
    triangulate: function() {
        function e(e, t, n, r, i, a) {
            var o, s, c, h, l, u, p, d, E;
            if (s = e[a[t]].x,
            c = e[a[t]].y,
            h = e[a[n]].x,
            l = e[a[n]].y,
            u = e[a[r]].x,
            p = e[a[r]].y,
            Number.EPSILON > (h - s) * (p - c) - (l - c) * (u - s))
                return !1;
            var f, m, g, v, T, y, R, H, x, b, _, M, w, S, L;
            for (f = u - h,
            m = p - l,
            g = s - u,
            v = c - p,
            T = h - s,
            y = l - c,
            o = 0; i > o; o++)
                if (d = e[a[o]].x,
                E = e[a[o]].y,
                !(d === s && E === c || d === h && E === l || d === u && E === p) && (R = d - s,
                H = E - c,
                x = d - h,
                b = E - l,
                _ = d - u,
                M = E - p,
                L = f * b - m * x,
                w = T * H - y * R,
                S = g * M - v * _,
                L >= -Number.EPSILON && S >= -Number.EPSILON && w >= -Number.EPSILON))
                    return !1;
            return !0
        }
        return function(t, n) {
            var r = t.length;
            if (3 > r)
                return null ;
            var i, a, o, s = [], c = [], h = [];
            if (THREE.ShapeUtils.area(t) > 0)
                for (a = 0; r > a; a++)
                    c[a] = a;
            else
                for (a = 0; r > a; a++)
                    c[a] = r - 1 - a;
            var l = r
              , u = 2 * l;
            for (a = l - 1; l > 2; ) {
                if (u-- <= 0)
                    return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
                    n ? h : s;
                if (i = a,
                i >= l && (i = 0),
                a = i + 1,
                a >= l && (a = 0),
                o = a + 1,
                o >= l && (o = 0),
                e(t, i, a, o, l, c)) {
                    var p, d, E, f, m;
                    for (p = c[i],
                    d = c[a],
                    E = c[o],
                    s.push([t[p], t[d], t[E]]),
                    h.push([c[i], c[a], c[o]]),
                    f = a,
                    m = a + 1; l > m; f++,
                    m++)
                        c[f] = c[m];
                    l--,
                    u = 2 * l
                }
            }
            return n ? h : s
        }
    }(),
    triangulateShape: function(e, t) {
        function n(e, t, n) {
            return e.x !== t.x ? e.x < t.x ? e.x <= n.x && n.x <= t.x : t.x <= n.x && n.x <= e.x : e.y < t.y ? e.y <= n.y && n.y <= t.y : t.y <= n.y && n.y <= e.y
        }
        function r(e, t, r, i, a) {
            var o = t.x - e.x
              , s = t.y - e.y
              , c = i.x - r.x
              , h = i.y - r.y
              , l = e.x - r.x
              , u = e.y - r.y
              , p = s * c - o * h
              , d = s * l - o * u;
            if (Math.abs(p) > Number.EPSILON) {
                var E;
                if (p > 0) {
                    if (0 > d || d > p)
                        return [];
                    if (E = h * l - c * u,
                    0 > E || E > p)
                        return []
                } else {
                    if (d > 0 || p > d)
                        return [];
                    if (E = h * l - c * u,
                    E > 0 || p > E)
                        return []
                }
                if (0 === E)
                    return !a || 0 !== d && d !== p ? [e] : [];
                if (E === p)
                    return !a || 0 !== d && d !== p ? [t] : [];
                if (0 === d)
                    return [r];
                if (d === p)
                    return [i];
                var f = E / p;
                return [{
                    x: e.x + f * o,
                    y: e.y + f * s
                }]
            }
            if (0 !== d || h * l !== c * u)
                return [];
            var m = 0 === o && 0 === s
              , g = 0 === c && 0 === h;
            if (m && g)
                return e.x !== r.x || e.y !== r.y ? [] : [e];
            if (m)
                return n(r, i, e) ? [e] : [];
            if (g)
                return n(e, t, r) ? [r] : [];
            var v, T, y, R, H, x, b, _;
            return 0 !== o ? (e.x < t.x ? (v = e,
            y = e.x,
            T = t,
            R = t.x) : (v = t,
            y = t.x,
            T = e,
            R = e.x),
            r.x < i.x ? (H = r,
            b = r.x,
            x = i,
            _ = i.x) : (H = i,
            b = i.x,
            x = r,
            _ = r.x)) : (e.y < t.y ? (v = e,
            y = e.y,
            T = t,
            R = t.y) : (v = t,
            y = t.y,
            T = e,
            R = e.y),
            r.y < i.y ? (H = r,
            b = r.y,
            x = i,
            _ = i.y) : (H = i,
            b = i.y,
            x = r,
            _ = r.y)),
            b >= y ? b > R ? [] : R === b ? a ? [] : [H] : _ >= R ? [H, T] : [H, x] : y > _ ? [] : y === _ ? a ? [] : [v] : _ >= R ? [v, T] : [v, x]
        }
        function i(e, t, n, r) {
            var i = t.x - e.x
              , a = t.y - e.y
              , o = n.x - e.x
              , s = n.y - e.y
              , c = r.x - e.x
              , h = r.y - e.y
              , l = i * s - a * o
              , u = i * h - a * c;
            if (Math.abs(l) > Number.EPSILON) {
                var p = c * s - h * o;
                return l > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
            }
            return u > 0
        }
        function a(e, t) {
            function n(e, t) {
                var n = v.length - 1
                  , r = e - 1;
                0 > r && (r = n);
                var a = e + 1;
                a > n && (a = 0);
                var o = i(v[e], v[r], v[a], s[t]);
                if (!o)
                    return !1;
                var c = s.length - 1
                  , h = t - 1;
                0 > h && (h = c);
                var l = t + 1;
                return l > c && (l = 0),
                o = i(s[t], s[h], s[l], v[e]),
                o ? !0 : !1
            }
            function a(e, t) {
                var n, i, a;
                for (n = 0; n < v.length; n++)
                    if (i = n + 1,
                    i %= v.length,
                    a = r(e, t, v[n], v[i], !0),
                    a.length > 0)
                        return !0;
                return !1
            }
            function o(e, n) {
                var i, a, o, s, c;
                for (i = 0; i < T.length; i++)
                    for (a = t[T[i]],
                    o = 0; o < a.length; o++)
                        if (s = o + 1,
                        s %= a.length,
                        c = r(e, n, a[o], a[s], !0),
                        c.length > 0)
                            return !0;
                return !1
            }
            for (var s, c, h, l, u, p, d, E, f, m, g, v = e.concat(), T = [], y = [], R = 0, H = t.length; H > R; R++)
                T.push(R);
            for (var x = 0, b = 2 * T.length; T.length > 0; ) {
                if (b--,
                0 > b) {
                    console.log("Infinite Loop! Holes left:" + T.length + ", Probably Hole outside Shape!");
                    break
                }
                for (h = x; h < v.length; h++) {
                    l = v[h],
                    c = -1;
                    for (var R = 0; R < T.length; R++)
                        if (p = T[R],
                        d = l.x + ":" + l.y + ":" + p,
                        void 0 === y[d]) {
                            s = t[p];
                            for (var _ = 0; _ < s.length; _++)
                                if (u = s[_],
                                n(h, _) && !a(l, u) && !o(l, u)) {
                                    c = _,
                                    T.splice(R, 1),
                                    E = v.slice(0, h + 1),
                                    f = v.slice(h),
                                    m = s.slice(c),
                                    g = s.slice(0, c + 1),
                                    v = E.concat(m).concat(g).concat(f),
                                    x = h;
                                    break
                                }
                            if (c >= 0)
                                break;
                            y[d] = !0
                        }
                    if (c >= 0)
                        break
                }
            }
            return v
        }
        for (var o, s, c, h, l, u, p = {}, d = e.concat(), E = 0, f = t.length; f > E; E++)
            Array.prototype.push.apply(d, t[E]);
        for (o = 0,
        s = d.length; s > o; o++)
            l = d[o].x + ":" + d[o].y,
            void 0 !== p[l] && console.warn("THREE.Shape: Duplicate point", l),
            p[l] = o;
        var m = a(e, t)
          , g = THREE.ShapeUtils.triangulate(m, !1);
        for (o = 0,
        s = g.length; s > o; o++)
            for (h = g[o],
            c = 0; 3 > c; c++)
                l = h[c].x + ":" + h[c].y,
                u = p[l],
                void 0 !== u && (h[c] = u);
        return g.concat()
    },
    isClockWise: function(e) {
        return THREE.ShapeUtils.area(e) < 0
    },
    b2: function() {
        function e(e, t) {
            var n = 1 - e;
            return n * n * t
        }
        function t(e, t) {
            return 2 * (1 - e) * e * t
        }
        function n(e, t) {
            return e * e * t
        }
        return function(r, i, a, o) {
            return e(r, i) + t(r, a) + n(r, o)
        }
    }(),
    b3: function() {
        function e(e, t) {
            var n = 1 - e;
            return n * n * n * t
        }
        function t(e, t) {
            var n = 1 - e;
            return 3 * n * n * e * t
        }
        function n(e, t) {
            var n = 1 - e;
            return 3 * n * e * e * t
        }
        function r(e, t) {
            return e * e * e * t
        }
        return function(i, a, o, s, c) {
            return e(i, a) + t(i, o) + n(i, s) + r(i, c)
        }
    }()
},
THREE.Curve = function() {}
,
THREE.Curve.prototype = {
    constructor: THREE.Curve,
    getPoint: function(e) {
        return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
        null 
    },
    getPointAt: function(e) {
        var t = this.getUtoTmapping(e);
        return this.getPoint(t)
    },
    getPoints: function(e) {
        e || (e = 5);
        var t, n = [];
        for (t = 0; e >= t; t++)
            n.push(this.getPoint(t / e));
        return n
    },
    getSpacedPoints: function(e) {
        e || (e = 5);
        var t, n = [];
        for (t = 0; e >= t; t++)
            n.push(this.getPointAt(t / e));
        return n
    },
    getLength: function() {
        var e = this.getLengths();
        return e[e.length - 1]
    },
    getLengths: function(e) {
        if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
        this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t, n, r = [], i = this.getPoint(0), a = 0;
        for (r.push(0),
        n = 1; e >= n; n++)
            t = this.getPoint(n / e),
            a += t.distanceTo(i),
            r.push(a),
            i = t;
        return this.cacheArcLengths = r,
        r
    },
    updateArcLengths: function() {
        this.needsUpdate = !0,
        this.getLengths()
    },
    getUtoTmapping: function(e, t) {
        var n, r = this.getLengths(), i = 0, a = r.length;
        n = t ? t : e * r[a - 1];
        for (var o, s = 0, c = a - 1; c >= s; )
            if (i = Math.floor(s + (c - s) / 2),
            o = r[i] - n,
            0 > o)
                s = i + 1;
            else {
                if (!(o > 0)) {
                    c = i;
                    break
                }
                c = i - 1
            }
        if (i = c,
        r[i] === n) {
            var h = i / (a - 1);
            return h
        }
        var l = r[i]
          , u = r[i + 1]
          , p = u - l
          , d = (n - l) / p
          , h = (i + d) / (a - 1);
        return h
    },
    getTangent: function(e) {
        var t = 1e-4
          , n = e - t
          , r = e + t;
        0 > n && (n = 0),
        r > 1 && (r = 1);
        var i = this.getPoint(n)
          , a = this.getPoint(r)
          , o = a.clone().sub(i);
        return o.normalize()
    },
    getTangentAt: function(e) {
        var t = this.getUtoTmapping(e);
        return this.getTangent(t)
    }
},
THREE.Curve.create = function(e, t) {
    return e.prototype = Object.create(THREE.Curve.prototype),
    e.prototype.constructor = e,
    e.prototype.getPoint = t,
    e
}
,
THREE.CurvePath = function() {
    this.curves = [],
    this.autoClose = !1
}
,
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),
THREE.CurvePath.prototype.constructor = THREE.CurvePath,
THREE.CurvePath.prototype.add = function(e) {
    this.curves.push(e)
}
,
THREE.CurvePath.prototype.closePath = function() {
    var e = this.curves[0].getPoint(0)
      , t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new THREE.LineCurve(t,e))
}
,
THREE.CurvePath.prototype.getPoint = function(e) {
    for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length; ) {
        if (n[r] >= t) {
            var i = n[r] - t
              , a = this.curves[r]
              , o = 1 - i / a.getLength();
            return a.getPointAt(o)
        }
        r++
    }
    return null 
}
,
THREE.CurvePath.prototype.getLength = function() {
    var e = this.getCurveLengths();
    return e[e.length - 1]
}
,
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
    for (var e = [], t = 0, n = 0, r = this.curves.length; r > n; n++)
        t += this.curves[n].getLength(),
        e.push(t);
    return this.cacheLengths = e,
    e
}
,
THREE.CurvePath.prototype.createPointsGeometry = function(e) {
    var t = this.getPoints(e);
    return this.createGeometry(t)
}
,
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
    var t = this.getSpacedPoints(e);
    return this.createGeometry(t)
}
,
THREE.CurvePath.prototype.createGeometry = function(e) {
    for (var t = new THREE.Geometry, n = 0, r = e.length; r > n; n++) {
        var i = e[n];
        t.vertices.push(new THREE.Vector3(i.x,i.y,i.z || 0))
    }
    return t
}
,
THREE.Font = function(e) {
    this.data = e
}
,
THREE.Font.prototype = {
    constructor: THREE.Font,
    generateShapes: function(e, t, n) {
        function r(e) {
            for (var n = String(e).split(""), r = t / a.resolution, o = 0, s = [], c = 0; c < n.length; c++) {
                var h = i(n[c], r, o);
                o += h.offset,
                s.push(h.path)
            }
            return s
        }
        function i(e, t, r) {
            var i = a.glyphs[e] || a.glyphs["?"];
            if (i) {
                var o, s, c, h, l, u, p, d, E, f, m, g = new THREE.Path, v = [], T = THREE.ShapeUtils.b2, y = THREE.ShapeUtils.b3;
                if (i.o)
                    for (var R = i._cachedOutline || (i._cachedOutline = i.o.split(" ")), H = 0, x = R.length; x > H; ) {
                        var b = R[H++];
                        switch (b) {
                        case "m":
                            o = R[H++] * t + r,
                            s = R[H++] * t,
                            g.moveTo(o, s);
                            break;
                        case "l":
                            o = R[H++] * t + r,
                            s = R[H++] * t,
                            g.lineTo(o, s);
                            break;
                        case "q":
                            if (c = R[H++] * t + r,
                            h = R[H++] * t,
                            p = R[H++] * t + r,
                            d = R[H++] * t,
                            g.quadraticCurveTo(p, d, c, h),
                            m = v[v.length - 1]) {
                                l = m.x,
                                u = m.y;
                                for (var _ = 1; n >= _; _++) {
                                    var M = _ / n;
                                    T(M, l, p, c),
                                    T(M, u, d, h)
                                }
                            }
                            break;
                        case "b":
                            if (c = R[H++] * t + r,
                            h = R[H++] * t,
                            p = R[H++] * t + r,
                            d = R[H++] * t,
                            E = R[H++] * t + r,
                            f = R[H++] * t,
                            g.bezierCurveTo(p, d, E, f, c, h),
                            m = v[v.length - 1]) {
                                l = m.x,
                                u = m.y;
                                for (var _ = 1; n >= _; _++) {
                                    var M = _ / n;
                                    y(M, l, p, E, c),
                                    y(M, u, d, f, h)
                                }
                            }
                        }
                    }
                return {
                    offset: i.ha * t,
                    path: g
                }
            }
        }
        void 0 === t && (t = 100),
        void 0 === n && (n = 4);
        for (var a = this.data, o = r(e), s = [], c = 0, h = o.length; h > c; c++)
            Array.prototype.push.apply(s, o[c].toShapes());
        return s
    }
},
THREE.Path = function(e) {
    THREE.CurvePath.call(this),
    this.actions = [],
    e && this.fromPoints(e)
}
,
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),
THREE.Path.prototype.constructor = THREE.Path,
THREE.Path.prototype.fromPoints = function(e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, n = e.length; n > t; t++)
        this.lineTo(e[t].x, e[t].y)
}
,
THREE.Path.prototype.moveTo = function(e, t) {
    this.actions.push({
        action: "moveTo",
        args: [e, t]
    })
}
,
THREE.Path.prototype.lineTo = function(e, t) {
    var n = this.actions[this.actions.length - 1].args
      , r = n[n.length - 2]
      , i = n[n.length - 1]
      , a = new THREE.LineCurve(new THREE.Vector2(r,i),new THREE.Vector2(e,t));
    this.curves.push(a),
    this.actions.push({
        action: "lineTo",
        args: [e, t]
    })
}
,
THREE.Path.prototype.quadraticCurveTo = function(e, t, n, r) {
    var i = this.actions[this.actions.length - 1].args
      , a = i[i.length - 2]
      , o = i[i.length - 1]
      , s = new THREE.QuadraticBezierCurve(new THREE.Vector2(a,o),new THREE.Vector2(e,t),new THREE.Vector2(n,r));
    this.curves.push(s),
    this.actions.push({
        action: "quadraticCurveTo",
        args: [e, t, n, r]
    })
}
,
THREE.Path.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
    var o = this.actions[this.actions.length - 1].args
      , s = o[o.length - 2]
      , c = o[o.length - 1]
      , h = new THREE.CubicBezierCurve(new THREE.Vector2(s,c),new THREE.Vector2(e,t),new THREE.Vector2(n,r),new THREE.Vector2(i,a));
    this.curves.push(h),
    this.actions.push({
        action: "bezierCurveTo",
        args: [e, t, n, r, i, a]
    })
}
,
THREE.Path.prototype.splineThru = function(e) {
    var t = Array.prototype.slice.call(arguments)
      , n = this.actions[this.actions.length - 1].args
      , r = n[n.length - 2]
      , i = n[n.length - 1]
      , a = [new THREE.Vector2(r,i)];
    Array.prototype.push.apply(a, e);
    var o = new THREE.SplineCurve(a);
    this.curves.push(o),
    this.actions.push({
        action: "splineThru",
        args: t
    })
}
,
THREE.Path.prototype.arc = function(e, t, n, r, i, a) {
    var o = this.actions[this.actions.length - 1].args
      , s = o[o.length - 2]
      , c = o[o.length - 1];
    this.absarc(e + s, t + c, n, r, i, a)
}
,
THREE.Path.prototype.absarc = function(e, t, n, r, i, a) {
    this.absellipse(e, t, n, n, r, i, a)
}
,
THREE.Path.prototype.ellipse = function(e, t, n, r, i, a, o, s) {
    var c = this.actions[this.actions.length - 1].args
      , h = c[c.length - 2]
      , l = c[c.length - 1];
    this.absellipse(e + h, t + l, n, r, i, a, o, s)
}
,
THREE.Path.prototype.absellipse = function(e, t, n, r, i, a, o, s) {
    var c = [e, t, n, r, i, a, o, s || 0]
      , h = new THREE.EllipseCurve(e,t,n,r,i,a,o,s);
    this.curves.push(h);
    var l = h.getPoint(1);
    c.push(l.x),
    c.push(l.y),
    this.actions.push({
        action: "ellipse",
        args: c
    })
}
,
THREE.Path.prototype.getSpacedPoints = function(e) {
    e || (e = 40);
    for (var t = [], n = 0; e > n; n++)
        t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]),
    t
}
,
THREE.Path.prototype.getPoints = function(e) {
    e = e || 12;
    for (var t, n, r, i, a, o, s, c, h, l, u, p = THREE.ShapeUtils.b2, d = THREE.ShapeUtils.b3, E = [], f = 0, m = this.actions.length; m > f; f++) {
        var g = this.actions[f]
          , v = g.action
          , T = g.args;
        switch (v) {
        case "moveTo":
            E.push(new THREE.Vector2(T[0],T[1]));
            break;
        case "lineTo":
            E.push(new THREE.Vector2(T[0],T[1]));
            break;
        case "quadraticCurveTo":
            t = T[2],
            n = T[3],
            a = T[0],
            o = T[1],
            E.length > 0 ? (h = E[E.length - 1],
            s = h.x,
            c = h.y) : (h = this.actions[f - 1].args,
            s = h[h.length - 2],
            c = h[h.length - 1]);
            for (var y = 1; e >= y; y++) {
                var R = y / e;
                l = p(R, s, a, t),
                u = p(R, c, o, n),
                E.push(new THREE.Vector2(l,u))
            }
            break;
        case "bezierCurveTo":
            t = T[4],
            n = T[5],
            a = T[0],
            o = T[1],
            r = T[2],
            i = T[3],
            E.length > 0 ? (h = E[E.length - 1],
            s = h.x,
            c = h.y) : (h = this.actions[f - 1].args,
            s = h[h.length - 2],
            c = h[h.length - 1]);
            for (var y = 1; e >= y; y++) {
                var R = y / e;
                l = d(R, s, a, r, t),
                u = d(R, c, o, i, n),
                E.push(new THREE.Vector2(l,u))
            }
            break;
        case "splineThru":
            h = this.actions[f - 1].args;
            var H = new THREE.Vector2(h[h.length - 2],h[h.length - 1])
              , x = [H]
              , b = e * T[0].length;
            x = x.concat(T[0]);
            for (var _ = new THREE.SplineCurve(x), y = 1; b >= y; y++)
                E.push(_.getPointAt(y / b));
            break;
        case "arc":
            for (var M, w = T[0], S = T[1], L = T[2], A = T[3], C = T[4], P = !!T[5], D = C - A, B = 2 * e, y = 1; B >= y; y++) {
                var R = y / B;
                P || (R = 1 - R),
                M = A + R * D,
                l = w + L * Math.cos(M),
                u = S + L * Math.sin(M),
                E.push(new THREE.Vector2(l,u))
            }
            break;
        case "ellipse":
            var M, I, U, w = T[0], S = T[1], F = T[2], N = T[3], A = T[4], C = T[5], P = !!T[6], O = T[7], D = C - A, B = 2 * e;
            0 !== O && (I = Math.cos(O),
            U = Math.sin(O));
            for (var y = 1; B >= y; y++) {
                var R = y / B;
                if (P || (R = 1 - R),
                M = A + R * D,
                l = w + F * Math.cos(M),
                u = S + N * Math.sin(M),
                0 !== O) {
                    var G = l
                      , V = u;
                    l = (G - w) * I - (V - S) * U + w,
                    u = (G - w) * U + (V - S) * I + S
                }
                E.push(new THREE.Vector2(l,u))
            }
        }
    }
    var z = E[E.length - 1];
    return Math.abs(z.x - E[0].x) < Number.EPSILON && Math.abs(z.y - E[0].y) < Number.EPSILON && E.splice(E.length - 1, 1),
    this.autoClose && E.push(E[0]),
    E
}
,
THREE.Path.prototype.toShapes = function(e, t) {
    function n(e) {
        for (var t = [], n = new THREE.Path, r = 0, i = e.length; i > r; r++) {
            var a = e[r]
              , o = a.args
              , s = a.action;
            "moveTo" === s && 0 !== n.actions.length && (t.push(n),
            n = new THREE.Path),
            n[s].apply(n, o)
        }
        return 0 !== n.actions.length && t.push(n),
        t
    }
    function r(e) {
        for (var t = [], n = 0, r = e.length; r > n; n++) {
            var i = e[n]
              , a = new THREE.Shape;
            a.actions = i.actions,
            a.curves = i.curves,
            t.push(a)
        }
        return t
    }
    function i(e, t) {
        for (var n = t.length, r = !1, i = n - 1, a = 0; n > a; i = a++) {
            var o = t[i]
              , s = t[a]
              , c = s.x - o.x
              , h = s.y - o.y;
            if (Math.abs(h) > Number.EPSILON) {
                if (0 > h && (o = t[a],
                c = -c,
                s = t[i],
                h = -h),
                e.y < o.y || e.y > s.y)
                    continue;if (e.y === o.y) {
                    if (e.x === o.x)
                        return !0
                } else {
                    var l = h * (e.x - o.x) - c * (e.y - o.y);
                    if (0 === l)
                        return !0;
                    if (0 > l)
                        continue;r = !r
                }
            } else {
                if (e.y !== o.y)
                    continue;if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x)
                    return !0
            }
        }
        return r
    }
    var a = THREE.ShapeUtils.isClockWise
      , o = n(this.actions);
    if (0 === o.length)
        return [];
    if (t === !0)
        return r(o);
    var s, c, h, l = [];
    if (1 === o.length)
        return c = o[0],
        h = new THREE.Shape,
        h.actions = c.actions,
        h.curves = c.curves,
        l.push(h),
        l;
    var u = !a(o[0].getPoints());
    u = e ? !u : u;
    var p, d = [], E = [], f = [], m = 0;
    E[m] = void 0,
    f[m] = [];
    for (var g = 0, v = o.length; v > g; g++)
        c = o[g],
        p = c.getPoints(),
        s = a(p),
        s = e ? !s : s,
        s ? (!u && E[m] && m++,
        E[m] = {
            s: new THREE.Shape,
            p: p
        },
        E[m].s.actions = c.actions,
        E[m].s.curves = c.curves,
        u && m++,
        f[m] = []) : f[m].push({
            h: c,
            p: p[0]
        });
    if (!E[0])
        return r(o);
    if (E.length > 1) {
        for (var T = !1, y = [], R = 0, H = E.length; H > R; R++)
            d[R] = [];
        for (var R = 0, H = E.length; H > R; R++)
            for (var x = f[R], b = 0; b < x.length; b++) {
                for (var _ = x[b], M = !0, w = 0; w < E.length; w++)
                    i(_.p, E[w].p) && (R !== w && y.push({
                        froms: R,
                        tos: w,
                        hole: b
                    }),
                    M ? (M = !1,
                    d[w].push(_)) : T = !0);
                M && d[R].push(_)
            }
        y.length > 0 && (T || (f = d))
    }
    for (var S, g = 0, L = E.length; L > g; g++) {
        h = E[g].s,
        l.push(h),
        S = f[g];
        for (var A = 0, C = S.length; C > A; A++)
            h.holes.push(S[A].h)
    }
    return l
}
,
THREE.Shape = function() {
    THREE.Path.apply(this, arguments),
    this.holes = []
}
,
THREE.Shape.prototype = Object.create(THREE.Path.prototype),
THREE.Shape.prototype.constructor = THREE.Shape,
THREE.Shape.prototype.extrude = function(e) {
    return new THREE.ExtrudeGeometry(this,e)
}
,
THREE.Shape.prototype.makeGeometry = function(e) {
    return new THREE.ShapeGeometry(this,e)
}
,
THREE.Shape.prototype.getPointsHoles = function(e) {
    for (var t = [], n = 0, r = this.holes.length; r > n; n++)
        t[n] = this.holes[n].getPoints(e);
    return t
}
,
THREE.Shape.prototype.extractAllPoints = function(e) {
    return {
        shape: this.getPoints(e),
        holes: this.getPointsHoles(e)
    }
}
,
THREE.Shape.prototype.extractPoints = function(e) {
    return this.extractAllPoints(e)
}
,
THREE.LineCurve = function(e, t) {
    this.v1 = e,
    this.v2 = t
}
,
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.LineCurve.prototype.constructor = THREE.LineCurve,
THREE.LineCurve.prototype.getPoint = function(e) {
    var t = this.v2.clone().sub(this.v1);
    return t.multiplyScalar(e).add(this.v1),
    t
}
,
THREE.LineCurve.prototype.getPointAt = function(e) {
    return this.getPoint(e)
}
,
THREE.LineCurve.prototype.getTangent = function(e) {
    var t = this.v2.clone().sub(this.v1);
    return t.normalize()
}
,
THREE.QuadraticBezierCurve = function(e, t, n) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = n
}
,
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve,
THREE.QuadraticBezierCurve.prototype.getPoint = function(e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y))
}
,
THREE.QuadraticBezierCurve.prototype.getTangent = function(e) {
    var t = THREE.CurveUtils.tangentQuadraticBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
}
,
THREE.CubicBezierCurve = function(e, t, n, r) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = n,
    this.v3 = r
}
,
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve,
THREE.CubicBezierCurve.prototype.getPoint = function(e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
}
,
THREE.CubicBezierCurve.prototype.getTangent = function(e) {
    var t = THREE.CurveUtils.tangentCubicBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
}
,
THREE.SplineCurve = function(e) {
    this.points = void 0 == e ? [] : e
}
,
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve,
THREE.SplineCurve.prototype.getPoint = function(e) {
    var t = this.points
      , n = (t.length - 1) * e
      , r = Math.floor(n)
      , i = n - r
      , a = t[0 === r ? r : r - 1]
      , o = t[r]
      , s = t[r > t.length - 2 ? t.length - 1 : r + 1]
      , c = t[r > t.length - 3 ? t.length - 1 : r + 2]
      , h = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(h(a.x, o.x, s.x, c.x, i),h(a.y, o.y, s.y, c.y, i))
}
,
THREE.EllipseCurve = function(e, t, n, r, i, a, o, s) {
    this.aX = e,
    this.aY = t,
    this.xRadius = n,
    this.yRadius = r,
    this.aStartAngle = i,
    this.aEndAngle = a,
    this.aClockwise = o,
    this.aRotation = s || 0
}
,
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve,
THREE.EllipseCurve.prototype.getPoint = function(e) {
    var t = this.aEndAngle - this.aStartAngle;
    0 > t && (t += 2 * Math.PI),
    t > 2 * Math.PI && (t -= 2 * Math.PI);
    var n;
    n = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t;
    var r = this.aX + this.xRadius * Math.cos(n)
      , i = this.aY + this.yRadius * Math.sin(n);
    if (0 !== this.aRotation) {
        var a = Math.cos(this.aRotation)
          , o = Math.sin(this.aRotation)
          , s = r
          , c = i;
        r = (s - this.aX) * a - (c - this.aY) * o + this.aX,
        i = (s - this.aX) * o + (c - this.aY) * a + this.aY
    }
    return new THREE.Vector2(r,i)
}
,
THREE.ArcCurve = function(e, t, n, r, i, a) {
    THREE.EllipseCurve.call(this, e, t, n, n, r, i, a)
}
,
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve,
THREE.LineCurve3 = THREE.Curve.create(function(e, t) {
    this.v1 = e,
    this.v2 = t
}, function(e) {
    var t = new THREE.Vector3;
    return t.subVectors(this.v2, this.v1),
    t.multiplyScalar(e),
    t.add(this.v1),
    t
}),
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(e, t, n) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = n
}, function(e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y),t(e, this.v0.z, this.v1.z, this.v2.z))
}),
THREE.CubicBezierCurve3 = THREE.Curve.create(function(e, t, n, r) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = n,
    this.v3 = r
}, function(e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
}),
THREE.SplineCurve3 = THREE.Curve.create(function(e) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
    this.points = void 0 == e ? [] : e
}, function(e) {
    var t = this.points
      , n = (t.length - 1) * e
      , r = Math.floor(n)
      , i = n - r
      , a = t[0 == r ? r : r - 1]
      , o = t[r]
      , s = t[r > t.length - 2 ? t.length - 1 : r + 1]
      , c = t[r > t.length - 3 ? t.length - 1 : r + 2]
      , h = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(h(a.x, o.x, s.x, c.x, i),h(a.y, o.y, s.y, c.y, i),h(a.z, o.z, s.z, c.z, i))
}),
THREE.CatmullRomCurve3 = function() {
    function e() {}
    var t = new THREE.Vector3
      , n = new e
      , r = new e
      , i = new e;
    return e.prototype.init = function(e, t, n, r) {
        this.c0 = e,
        this.c1 = n,
        this.c2 = -3 * e + 3 * t - 2 * n - r,
        this.c3 = 2 * e - 2 * t + n + r
    }
    ,
    e.prototype.initNonuniformCatmullRom = function(e, t, n, r, i, a, o) {
        var s = (t - e) / i - (n - e) / (i + a) + (n - t) / a
          , c = (n - t) / a - (r - t) / (a + o) + (r - n) / o;
        s *= a,
        c *= a,
        this.init(t, n, s, c)
    }
    ,
    e.prototype.initCatmullRom = function(e, t, n, r, i) {
        this.init(t, n, i * (n - e), i * (r - t))
    }
    ,
    e.prototype.calc = function(e) {
        var t = e * e
          , n = t * e;
        return this.c0 + this.c1 * e + this.c2 * t + this.c3 * n
    }
    ,
    THREE.Curve.create(function(e) {
        this.points = e || [],
        this.closed = !1
    }, function(e) {
        var a, o, s, c, h = this.points;
        c = h.length,
        2 > c && console.log("duh, you need at least 2 points"),
        a = (c - (this.closed ? 0 : 1)) * e,
        o = Math.floor(a),
        s = a - o,
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / h.length) + 1) * h.length : 0 === s && o === c - 1 && (o = c - 2,
        s = 1);
        var l, u, p, d;
        if (this.closed || o > 0 ? l = h[(o - 1) % c] : (t.subVectors(h[0], h[1]).add(h[0]),
        l = t),
        u = h[o % c],
        p = h[(o + 1) % c],
        this.closed || c > o + 2 ? d = h[(o + 2) % c] : (t.subVectors(h[c - 1], h[c - 2]).add(h[c - 1]),
        d = t),
        void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var E = "chordal" === this.type ? .5 : .25
              , f = Math.pow(l.distanceToSquared(u), E)
              , m = Math.pow(u.distanceToSquared(p), E)
              , g = Math.pow(p.distanceToSquared(d), E);
            1e-4 > m && (m = 1),
            1e-4 > f && (f = m),
            1e-4 > g && (g = m),
            n.initNonuniformCatmullRom(l.x, u.x, p.x, d.x, f, m, g),
            r.initNonuniformCatmullRom(l.y, u.y, p.y, d.y, f, m, g),
            i.initNonuniformCatmullRom(l.z, u.z, p.z, d.z, f, m, g)
        } else if ("catmullrom" === this.type) {
            var v = void 0 !== this.tension ? this.tension : .5;
            n.initCatmullRom(l.x, u.x, p.x, d.x, v),
            r.initCatmullRom(l.y, u.y, p.y, d.y, v),
            i.initCatmullRom(l.z, u.z, p.z, d.z, v)
        }
        var T = new THREE.Vector3(n.calc(s),r.calc(s),i.calc(s));
        return T
    })
}(),
THREE.ClosedSplineCurve3 = function(e) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."),
    THREE.CatmullRomCurve3.call(this, e),
    this.type = "catmullrom",
    this.closed = !0
}
,
THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype),
THREE.BoxGeometry = function(e, t, n, r, i, a) {
    THREE.Geometry.call(this),
    this.type = "BoxGeometry",
    this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: i,
        depthSegments: a
    },
    this.fromBufferGeometry(new THREE.BoxBufferGeometry(e,t,n,r,i,a)),
    this.mergeVertices()
}
,
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry,
THREE.CubeGeometry = THREE.BoxGeometry,
THREE.BoxBufferGeometry = function(e, t, n, r, i, a) {
    function o(e, t, n) {
        var r = 0;
        return r += (e + 1) * (t + 1) * 2,
        r += (e + 1) * (n + 1) * 2,
        r += (n + 1) * (t + 1) * 2
    }
    function s(e, t, n) {
        var r = 0;
        return r += e * t * 2,
        r += e * n * 2,
        r += n * t * 2,
        6 * r
    }
    function c(e, t, n, r, i, a, o, s, c, l, u) {
        for (var R = a / c, H = o / l, x = a / 2, b = o / 2, _ = s / 2, M = c + 1, w = l + 1, S = 0, L = 0, A = new THREE.Vector3, C = 0; w > C; C++)
            for (var P = C * H - b, D = 0; M > D; D++) {
                var B = D * R - x;
                A[e] = B * r,
                A[t] = P * i,
                A[n] = _,
                d[m] = A.x,
                d[m + 1] = A.y,
                d[m + 2] = A.z,
                A[e] = 0,
                A[t] = 0,
                A[n] = s > 0 ? 1 : -1,
                E[m] = A.x,
                E[m + 1] = A.y,
                E[m + 2] = A.z,
                f[g] = D / c,
                f[g + 1] = 1 - C / l,
                m += 3,
                g += 2,
                S += 1
            }
        for (C = 0; l > C; C++)
            for (D = 0; c > D; D++) {
                var I = T + D + M * C
                  , U = T + D + M * (C + 1)
                  , F = T + (D + 1) + M * (C + 1)
                  , N = T + (D + 1) + M * C;
                p[v] = I,
                p[v + 1] = U,
                p[v + 2] = N,
                p[v + 3] = U,
                p[v + 4] = F,
                p[v + 5] = N,
                v += 6,
                L += 6
            }
        h.addGroup(y, L, u),
        y += L,
        T += S
    }
    THREE.BufferGeometry.call(this),
    this.type = "BoxBufferGeometry",
    this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: i,
        depthSegments: a
    };
    var h = this;
    r = Math.floor(r) || 1,
    i = Math.floor(i) || 1,
    a = Math.floor(a) || 1;
    var l = o(r, i, a)
      , u = s(r, i, a)
      , p = new (u > 65535 ? Uint32Array : Uint16Array)(u)
      , d = new Float32Array(3 * l)
      , E = new Float32Array(3 * l)
      , f = new Float32Array(2 * l)
      , m = 0
      , g = 0
      , v = 0
      , T = 0
      , y = 0;
    c("z", "y", "x", -1, -1, n, t, e, a, i, 0),
    c("z", "y", "x", 1, -1, n, t, -e, a, i, 1),
    c("x", "z", "y", 1, 1, e, n, t, r, a, 2),
    c("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
    c("x", "y", "z", 1, -1, e, t, n, r, i, 4),
    c("x", "y", "z", -1, -1, e, t, -n, r, i, 5),
    this.setIndex(new THREE.BufferAttribute(p,1)),
    this.addAttribute("position", new THREE.BufferAttribute(d,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(E,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(f,2))
}
,
THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry,
THREE.CircleGeometry = function(e, t, n, r) {
    THREE.Geometry.call(this),
    this.type = "CircleGeometry",
    this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: r
    },
    this.fromBufferGeometry(new THREE.CircleBufferGeometry(e,t,n,r))
}
,
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry,
THREE.CircleBufferGeometry = function(e, t, n, r) {
    THREE.BufferGeometry.call(this),
    this.type = "CircleBufferGeometry",
    this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: r
    },
    e = e || 50,
    t = void 0 !== t ? Math.max(3, t) : 8,
    n = void 0 !== n ? n : 0,
    r = void 0 !== r ? r : 2 * Math.PI;
    var i = t + 2
      , a = new Float32Array(3 * i)
      , o = new Float32Array(3 * i)
      , s = new Float32Array(2 * i);
    o[2] = 1,
    s[0] = .5,
    s[1] = .5;
    for (var c = 0, h = 3, l = 2; t >= c; c++,
    h += 3,
    l += 2) {
        var u = n + c / t * r;
        a[h] = e * Math.cos(u),
        a[h + 1] = e * Math.sin(u),
        o[h + 2] = 1,
        s[l] = (a[h] / e + 1) / 2,
        s[l + 1] = (a[h + 1] / e + 1) / 2
    }
    for (var p = [], h = 1; t >= h; h++)
        p.push(h, h + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(p),1)),
    this.addAttribute("position", new THREE.BufferAttribute(a,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(o,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(s,2)),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,e)
}
,
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry,
THREE.CylinderBufferGeometry = function(e, t, n, r, i, a, o, s) {
    function c() {
        var e = (r + 1) * (i + 1);
        return a === !1 && (e += 2 * (r + 1) + 2 * r),
        e
    }
    function h() {
        var e = r * i * 2 * 3;
        return a === !1 && (e += 2 * r * 3),
        e
    }
    function l() {
        var a, c, h = new THREE.Vector3, l = new THREE.Vector3, u = 0, d = (t - e) / n;
        for (c = 0; i >= c; c++) {
            var E = []
              , b = c / i
              , _ = b * (t - e) + e;
            for (a = 0; r >= a; a++) {
                var M = a / r;
                l.x = _ * Math.sin(M * s + o),
                l.y = -b * n + H,
                l.z = _ * Math.cos(M * s + o),
                m.setXYZ(T, l.x, l.y, l.z),
                h.copy(l),
                (0 === e && 0 === c || 0 === t && c === i) && (h.x = Math.sin(M * s + o),
                h.z = Math.cos(M * s + o)),
                h.setY(Math.sqrt(h.x * h.x + h.z * h.z) * d).normalize(),
                g.setXYZ(T, h.x, h.y, h.z),
                v.setXY(T, M, 1 - b),
                E.push(T),
                T++
            }
            R.push(E)
        }
        for (a = 0; r > a; a++)
            for (c = 0; i > c; c++) {
                var w = R[c][a]
                  , S = R[c + 1][a]
                  , L = R[c + 1][a + 1]
                  , A = R[c][a + 1];
                f.setX(y, w),
                y++,
                f.setX(y, S),
                y++,
                f.setX(y, A),
                y++,
                f.setX(y, S),
                y++,
                f.setX(y, L),
                y++,
                f.setX(y, A),
                y++,
                u += 6
            }
        p.addGroup(x, u, 0),
        x += u
    }
    function u(n) {
        var i, a, c, h = new THREE.Vector2, l = new THREE.Vector3, u = 0, d = n === !0 ? e : t, E = n === !0 ? 1 : -1;
        for (a = T,
        i = 1; r >= i; i++)
            m.setXYZ(T, 0, H * E, 0),
            g.setXYZ(T, 0, E, 0),
            n === !0 ? (h.x = i / r,
            h.y = 0) : (h.x = (i - 1) / r,
            h.y = 1),
            v.setXY(T, h.x, h.y),
            T++;
        for (c = T,
        i = 0; r >= i; i++) {
            var R = i / r;
            l.x = d * Math.sin(R * s + o),
            l.y = H * E,
            l.z = d * Math.cos(R * s + o),
            m.setXYZ(T, l.x, l.y, l.z),
            g.setXYZ(T, 0, E, 0),
            v.setXY(T, R, n === !0 ? 1 : 0),
            T++
        }
        for (i = 0; r > i; i++) {
            var b = a + i
              , _ = c + i;
            n === !0 ? (f.setX(y, _),
            y++,
            f.setX(y, _ + 1),
            y++,
            f.setX(y, b),
            y++) : (f.setX(y, _ + 1),
            y++,
            f.setX(y, _),
            y++,
            f.setX(y, b),
            y++),
            u += 3
        }
        p.addGroup(x, u, n === !0 ? 1 : 2),
        x += u
    }
    THREE.BufferGeometry.call(this),
    this.type = "CylinderBufferGeometry",
    this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
    };
    var p = this;
    e = void 0 !== e ? e : 20,
    t = void 0 !== t ? t : 20,
    n = void 0 !== n ? n : 100,
    r = Math.floor(r) || 8,
    i = Math.floor(i) || 1,
    a = void 0 !== a ? a : !1,
    o = void 0 !== o ? o : 0,
    s = void 0 !== s ? s : 2 * Math.PI;
    var d = c()
      , E = h()
      , f = new THREE.BufferAttribute(new (E > 65535 ? Uint32Array : Uint16Array)(E),1)
      , m = new THREE.BufferAttribute(new Float32Array(3 * d),3)
      , g = new THREE.BufferAttribute(new Float32Array(3 * d),3)
      , v = new THREE.BufferAttribute(new Float32Array(2 * d),2)
      , T = 0
      , y = 0
      , R = []
      , H = n / 2
      , x = 0;
    l(),
    a === !1 && (e > 0 && u(!0),
    t > 0 && u(!1)),
    this.setIndex(f),
    this.addAttribute("position", m),
    this.addAttribute("normal", g),
    this.addAttribute("uv", v)
}
,
THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry,
THREE.CylinderGeometry = function(e, t, n, r, i, a, o, s) {
    THREE.Geometry.call(this),
    this.type = "CylinderGeometry",
    this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
    },
    this.fromBufferGeometry(new THREE.CylinderBufferGeometry(e,t,n,r,i,a,o,s)),
    this.mergeVertices()
}
,
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry,
THREE.EdgesGeometry = function(e, t) {
    function n(e, t) {
        return e - t
    }
    THREE.BufferGeometry.call(this),
    t = void 0 !== t ? t : 1;
    var r, i = Math.cos(THREE.Math.DEG2RAD * t), a = [0, 0], o = {}, s = ["a", "b", "c"];
    e instanceof THREE.BufferGeometry ? (r = new THREE.Geometry,
    r.fromBufferGeometry(e)) : r = e.clone(),
    r.mergeVertices(),
    r.computeFaceNormals();
    for (var c = r.vertices, h = r.faces, l = 0, u = h.length; u > l; l++)
        for (var p = h[l], d = 0; 3 > d; d++) {
            a[0] = p[s[d]],
            a[1] = p[s[(d + 1) % 3]],
            a.sort(n);
            var E = a.toString();
            void 0 === o[E] ? o[E] = {
                vert1: a[0],
                vert2: a[1],
                face1: l,
                face2: void 0
            } : o[E].face2 = l
        }
    var f = [];
    for (var E in o) {
        var m = o[E];
        if (void 0 === m.face2 || h[m.face1].normal.dot(h[m.face2].normal) <= i) {
            var g = c[m.vert1];
            f.push(g.x),
            f.push(g.y),
            f.push(g.z),
            g = c[m.vert2],
            f.push(g.x),
            f.push(g.y),
            f.push(g.z)
        }
    }
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(f),3))
}
,
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry,
THREE.ExtrudeGeometry = function(e, t) {
    return "undefined" == typeof e ? void (e = []) : (THREE.Geometry.call(this),
    this.type = "ExtrudeGeometry",
    e = Array.isArray(e) ? e : [e],
    this.addShapeList(e, t),
    void this.computeFaceNormals())
}
,
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry,
THREE.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
    for (var n = e.length, r = 0; n > r; r++) {
        var i = e[r];
        this.addShape(i, t)
    }
}
,
THREE.ExtrudeGeometry.prototype.addShape = function(e, t) {
    function n(e, t, n) {
        return t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
        t.clone().multiplyScalar(n).add(e)
    }
    function r(e, t, n) {
        var r, i, a = 1, o = e.x - t.x, s = e.y - t.y, c = n.x - e.x, h = n.y - e.y, l = o * o + s * s, u = o * h - s * c;
        if (Math.abs(u) > Number.EPSILON) {
            var p = Math.sqrt(l)
              , d = Math.sqrt(c * c + h * h)
              , E = t.x - s / p
              , f = t.y + o / p
              , m = n.x - h / d
              , g = n.y + c / d
              , v = ((m - E) * h - (g - f) * c) / (o * h - s * c);
            r = E + o * v - e.x,
            i = f + s * v - e.y;
            var T = r * r + i * i;
            if (2 >= T)
                return new THREE.Vector2(r,i);
            a = Math.sqrt(T / 2)
        } else {
            var y = !1;
            o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0),
            y ? (r = -s,
            i = o,
            a = Math.sqrt(l)) : (r = o,
            i = s,
            a = Math.sqrt(l / 2))
        }
        return new THREE.Vector2(r / a,i / a)
    }
    function i() {
        if (T) {
            var e = 0
              , t = z * e;
            for (W = 0; k > W; W++)
                V = B[W],
                c(V[2] + t, V[1] + t, V[0] + t);
            for (e = R + 2 * v,
            t = z * e,
            W = 0; k > W; W++)
                V = B[W],
                c(V[0] + t, V[1] + t, V[2] + t)
        } else {
            for (W = 0; k > W; W++)
                V = B[W],
                c(V[2], V[1], V[0]);
            for (W = 0; k > W; W++)
                V = B[W],
                c(V[0] + z * R, V[1] + z * R, V[2] + z * R)
        }
    }
    function a() {
        var e = 0;
        for (o(I, e),
        e += I.length,
        M = 0,
        w = P.length; w > M; M++)
            _ = P[M],
            o(_, e),
            e += _.length
    }
    function o(e, t) {
        var n, r;
        for (W = e.length; --W >= 0; ) {
            n = W,
            r = W - 1,
            0 > r && (r = e.length - 1);
            var i = 0
              , a = R + 2 * v;
            for (i = 0; a > i; i++) {
                var o = z * i
                  , s = z * (i + 1)
                  , c = t + n + o
                  , l = t + r + o
                  , u = t + r + s
                  , p = t + n + s;
                h(c, l, u, p, e, i, a, n, r)
            }
        }
    }
    function s(e, t, n) {
        S.vertices.push(new THREE.Vector3(e,t,n))
    }
    function c(e, t, n) {
        e += L,
        t += L,
        n += L,
        S.faces.push(new THREE.Face3(e,t,n,null ,null ,0));
        var r = b.generateTopUV(S, e, t, n);
        S.faceVertexUvs[0].push(r)
    }
    function h(e, t, n, r, i, a, o, s, c) {
        e += L,
        t += L,
        n += L,
        r += L,
        S.faces.push(new THREE.Face3(e,t,r,null ,null ,1)),
        S.faces.push(new THREE.Face3(t,n,r,null ,null ,1));
        var h = b.generateSideWallUV(S, e, t, n, r);
        S.faceVertexUvs[0].push([h[0], h[1], h[3]]),
        S.faceVertexUvs[0].push([h[1], h[2], h[3]])
    }
    var l, u, p, d, E, f = void 0 !== t.amount ? t.amount : 100, m = void 0 !== t.bevelThickness ? t.bevelThickness : 6, g = void 0 !== t.bevelSize ? t.bevelSize : m - 2, v = void 0 !== t.bevelSegments ? t.bevelSegments : 3, T = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0, y = void 0 !== t.curveSegments ? t.curveSegments : 12, R = void 0 !== t.steps ? t.steps : 1, H = t.extrudePath, x = !1, b = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
    H && (l = H.getSpacedPoints(R),
    x = !0,
    T = !1,
    u = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(H,R,!1),
    p = new THREE.Vector3,
    d = new THREE.Vector3,
    E = new THREE.Vector3),
    T || (v = 0,
    m = 0,
    g = 0);
    var _, M, w, S = this, L = this.vertices.length, A = e.extractPoints(y), C = A.shape, P = A.holes, D = !THREE.ShapeUtils.isClockWise(C);
    if (D) {
        for (C = C.reverse(),
        M = 0,
        w = P.length; w > M; M++)
            _ = P[M],
            THREE.ShapeUtils.isClockWise(_) && (P[M] = _.reverse());
        D = !1
    }
    var B = THREE.ShapeUtils.triangulateShape(C, P)
      , I = C;
    for (M = 0,
    w = P.length; w > M; M++)
        _ = P[M],
        C = C.concat(_);
    for (var U, F, N, O, G, V, z = C.length, k = B.length, j = [], W = 0, X = I.length, q = X - 1, Y = W + 1; X > W; W++,
    q++,
    Y++)
        q === X && (q = 0),
        Y === X && (Y = 0),
        j[W] = r(I[W], I[q], I[Y]);
    var Z, K = [], Q = j.concat();
    for (M = 0,
    w = P.length; w > M; M++) {
        for (_ = P[M],
        Z = [],
        W = 0,
        X = _.length,
        q = X - 1,
        Y = W + 1; X > W; W++,
        q++,
        Y++)
            q === X && (q = 0),
            Y === X && (Y = 0),
            Z[W] = r(_[W], _[q], _[Y]);
        K.push(Z),
        Q = Q.concat(Z)
    }
    for (U = 0; v > U; U++) {
        for (N = U / v,
        O = m * (1 - N),
        F = g * Math.sin(N * Math.PI / 2),
        W = 0,
        X = I.length; X > W; W++)
            G = n(I[W], j[W], F),
            s(G.x, G.y, -O);
        for (M = 0,
        w = P.length; w > M; M++)
            for (_ = P[M],
            Z = K[M],
            W = 0,
            X = _.length; X > W; W++)
                G = n(_[W], Z[W], F),
                s(G.x, G.y, -O)
    }
    for (F = g,
    W = 0; z > W; W++)
        G = T ? n(C[W], Q[W], F) : C[W],
        x ? (d.copy(u.normals[0]).multiplyScalar(G.x),
        p.copy(u.binormals[0]).multiplyScalar(G.y),
        E.copy(l[0]).add(d).add(p),
        s(E.x, E.y, E.z)) : s(G.x, G.y, 0);
    var J;
    for (J = 1; R >= J; J++)
        for (W = 0; z > W; W++)
            G = T ? n(C[W], Q[W], F) : C[W],
            x ? (d.copy(u.normals[J]).multiplyScalar(G.x),
            p.copy(u.binormals[J]).multiplyScalar(G.y),
            E.copy(l[J]).add(d).add(p),
            s(E.x, E.y, E.z)) : s(G.x, G.y, f / R * J);
    for (U = v - 1; U >= 0; U--) {
        for (N = U / v,
        O = m * (1 - N),
        F = g * Math.sin(N * Math.PI / 2),
        W = 0,
        X = I.length; X > W; W++)
            G = n(I[W], j[W], F),
            s(G.x, G.y, f + O);
        for (M = 0,
        w = P.length; w > M; M++)
            for (_ = P[M],
            Z = K[M],
            W = 0,
            X = _.length; X > W; W++)
                G = n(_[W], Z[W], F),
                x ? s(G.x, G.y + l[R - 1].y, l[R - 1].x + O) : s(G.x, G.y, f + O)
    }
    i(),
    a()
}
,
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(e, t, n, r) {
        var i = e.vertices
          , a = i[t]
          , o = i[n]
          , s = i[r];
        return [new THREE.Vector2(a.x,a.y), new THREE.Vector2(o.x,o.y), new THREE.Vector2(s.x,s.y)]
    },
    generateSideWallUV: function(e, t, n, r, i) {
        var a = e.vertices
          , o = a[t]
          , s = a[n]
          , c = a[r]
          , h = a[i];
        return Math.abs(o.y - s.y) < .01 ? [new THREE.Vector2(o.x,1 - o.z), new THREE.Vector2(s.x,1 - s.z), new THREE.Vector2(c.x,1 - c.z), new THREE.Vector2(h.x,1 - h.z)] : [new THREE.Vector2(o.y,1 - o.z), new THREE.Vector2(s.y,1 - s.z), new THREE.Vector2(c.y,1 - c.z), new THREE.Vector2(h.y,1 - h.z)]
    }
},
THREE.ShapeGeometry = function(e, t) {
    THREE.Geometry.call(this),
    this.type = "ShapeGeometry",
    Array.isArray(e) === !1 && (e = [e]),
    this.addShapeList(e, t),
    this.computeFaceNormals()
}
,
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry,
THREE.ShapeGeometry.prototype.addShapeList = function(e, t) {
    for (var n = 0, r = e.length; r > n; n++)
        this.addShape(e[n], t);
    return this
}
,
THREE.ShapeGeometry.prototype.addShape = function(e, t) {
    void 0 === t && (t = {});
    var n, r, i, a = void 0 !== t.curveSegments ? t.curveSegments : 12, o = t.material, s = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator, c = this.vertices.length, h = e.extractPoints(a), l = h.shape, u = h.holes, p = !THREE.ShapeUtils.isClockWise(l);
    if (p) {
        for (l = l.reverse(),
        n = 0,
        r = u.length; r > n; n++)
            i = u[n],
            THREE.ShapeUtils.isClockWise(i) && (u[n] = i.reverse());
        p = !1
    }
    var d = THREE.ShapeUtils.triangulateShape(l, u);
    for (n = 0,
    r = u.length; r > n; n++)
        i = u[n],
        l = l.concat(i);
    var E, f, m = l.length, g = d.length;
    for (n = 0; m > n; n++)
        E = l[n],
        this.vertices.push(new THREE.Vector3(E.x,E.y,0));
    for (n = 0; g > n; n++) {
        f = d[n];
        var v = f[0] + c
          , T = f[1] + c
          , y = f[2] + c;
        this.faces.push(new THREE.Face3(v,T,y,null ,null ,o)),
        this.faceVertexUvs[0].push(s.generateTopUV(this, v, T, y))
    }
}
,
THREE.LatheBufferGeometry = function(e, t, n, r) {
    THREE.BufferGeometry.call(this),
    this.type = "LatheBufferGeometry",
    this.parameters = {
        points: e,
        segments: t,
        phiStart: n,
        phiLength: r
    },
    t = Math.floor(t) || 12,
    n = n || 0,
    r = r || 2 * Math.PI,
    r = THREE.Math.clamp(r, 0, 2 * Math.PI);
    var i, a, o, s = (t + 1) * e.length, c = t * e.length * 2 * 3, h = new THREE.BufferAttribute(new (c > 65535 ? Uint32Array : Uint16Array)(c),1), l = new THREE.BufferAttribute(new Float32Array(3 * s),3), u = new THREE.BufferAttribute(new Float32Array(2 * s),2), p = 0, d = 0, E = (1 / (e.length - 1),
    1 / t), f = new THREE.Vector3, m = new THREE.Vector2;
    for (a = 0; t >= a; a++) {
        var g = n + a * E * r
          , v = Math.sin(g)
          , T = Math.cos(g);
        for (o = 0; o <= e.length - 1; o++)
            f.x = e[o].x * v,
            f.y = e[o].y,
            f.z = e[o].x * T,
            l.setXYZ(p, f.x, f.y, f.z),
            m.x = a / t,
            m.y = o / (e.length - 1),
            u.setXY(p, m.x, m.y),
            p++
    }
    for (a = 0; t > a; a++)
        for (o = 0; o < e.length - 1; o++) {
            i = o + a * e.length;
            var y = i
              , R = i + e.length
              , H = i + e.length + 1
              , x = i + 1;
            h.setX(d, y),
            d++,
            h.setX(d, R),
            d++,
            h.setX(d, x),
            d++,
            h.setX(d, R),
            d++,
            h.setX(d, H),
            d++,
            h.setX(d, x),
            d++
        }
    if (this.setIndex(h),
    this.addAttribute("position", l),
    this.addAttribute("uv", u),
    this.computeVertexNormals(),
    r === 2 * Math.PI) {
        var b = this.attributes.normal.array
          , _ = new THREE.Vector3
          , M = new THREE.Vector3
          , w = new THREE.Vector3;
        for (i = t * e.length * 3,
        a = 0,
        o = 0; a < e.length; a++,
        o += 3)
            _.x = b[o + 0],
            _.y = b[o + 1],
            _.z = b[o + 2],
            M.x = b[i + o + 0],
            M.y = b[i + o + 1],
            M.z = b[i + o + 2],
            w.addVectors(_, M).normalize(),
            b[o + 0] = b[i + o + 0] = w.x,
            b[o + 1] = b[i + o + 1] = w.y,
            b[o + 2] = b[i + o + 2] = w.z
    }
}
,
THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry,
THREE.LatheGeometry = function(e, t, n, r) {
    THREE.Geometry.call(this),
    this.type = "LatheGeometry",
    this.parameters = {
        points: e,
        segments: t,
        phiStart: n,
        phiLength: r
    },
    this.fromBufferGeometry(new THREE.LatheBufferGeometry(e,t,n,r)),
    this.mergeVertices()
}
,
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry,
THREE.PlaneGeometry = function(e, t, n, r) {
    THREE.Geometry.call(this),
    this.type = "PlaneGeometry",
    this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r
    },
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e,t,n,r))
}
,
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry,
THREE.PlaneBufferGeometry = function(e, t, n, r) {
    THREE.BufferGeometry.call(this),
    this.type = "PlaneBufferGeometry",
    this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r
    };
    for (var i = e / 2, a = t / 2, o = Math.floor(n) || 1, s = Math.floor(r) || 1, c = o + 1, h = s + 1, l = e / o, u = t / s, p = new Float32Array(c * h * 3), d = new Float32Array(c * h * 3), E = new Float32Array(c * h * 2), f = 0, m = 0, g = 0; h > g; g++)
        for (var v = g * u - a, T = 0; c > T; T++) {
            var y = T * l - i;
            p[f] = y,
            p[f + 1] = -v,
            d[f + 2] = 1,
            E[m] = T / o,
            E[m + 1] = 1 - g / s,
            f += 3,
            m += 2
        }
    f = 0;
    for (var R = new (p.length / 3 > 65535 ? Uint32Array : Uint16Array)(o * s * 6), g = 0; s > g; g++)
        for (var T = 0; o > T; T++) {
            var H = T + c * g
              , x = T + c * (g + 1)
              , b = T + 1 + c * (g + 1)
              , _ = T + 1 + c * g;
            R[f] = H,
            R[f + 1] = x,
            R[f + 2] = _,
            R[f + 3] = x,
            R[f + 4] = b,
            R[f + 5] = _,
            f += 6
        }
    this.setIndex(new THREE.BufferAttribute(R,1)),
    this.addAttribute("position", new THREE.BufferAttribute(p,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(d,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(E,2))
}
,
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry,
THREE.RingBufferGeometry = function(e, t, n, r, i, a) {
    THREE.BufferGeometry.call(this),
    this.type = "RingBufferGeometry",
    this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: r,
        thetaStart: i,
        thetaLength: a
    },
    e = e || 20,
    t = t || 50,
    i = void 0 !== i ? i : 0,
    a = void 0 !== a ? a : 2 * Math.PI,
    n = void 0 !== n ? Math.max(3, n) : 8,
    r = void 0 !== r ? Math.max(1, r) : 1;
    var o, s, c, h = (n + 1) * (r + 1), l = n * r * 2 * 3, u = new THREE.BufferAttribute(new (l > 65535 ? Uint32Array : Uint16Array)(l),1), p = new THREE.BufferAttribute(new Float32Array(3 * h),3), d = new THREE.BufferAttribute(new Float32Array(3 * h),3), E = new THREE.BufferAttribute(new Float32Array(2 * h),2), f = 0, m = 0, g = e, v = (t - e) / r, T = new THREE.Vector3, y = new THREE.Vector2;
    for (s = 0; r >= s; s++) {
        for (c = 0; n >= c; c++)
            o = i + c / n * a,
            T.x = g * Math.cos(o),
            T.y = g * Math.sin(o),
            p.setXYZ(f, T.x, T.y, T.z),
            d.setXYZ(f, 0, 0, 1),
            y.x = (T.x / t + 1) / 2,
            y.y = (T.y / t + 1) / 2,
            E.setXY(f, y.x, y.y),
            f++;
        g += v
    }
    for (s = 0; r > s; s++) {
        var R = s * (n + 1);
        for (c = 0; n > c; c++) {
            o = c + R;
            var H = o
              , x = o + n + 1
              , b = o + n + 2
              , _ = o + 1;
            u.setX(m, H),
            m++,
            u.setX(m, x),
            m++,
            u.setX(m, b),
            m++,
            u.setX(m, H),
            m++,
            u.setX(m, b),
            m++,
            u.setX(m, _),
            m++
        }
    }
    this.setIndex(u),
    this.addAttribute("position", p),
    this.addAttribute("normal", d),
    this.addAttribute("uv", E)
}
,
THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry,
THREE.RingGeometry = function(e, t, n, r, i, a) {
    THREE.Geometry.call(this),
    this.type = "RingGeometry",
    this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: r,
        thetaStart: i,
        thetaLength: a
    },
    this.fromBufferGeometry(new THREE.RingBufferGeometry(e,t,n,r,i,a))
}
,
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry,
THREE.SphereGeometry = function(e, t, n, r, i, a, o) {
    THREE.Geometry.call(this),
    this.type = "SphereGeometry",
    this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: r,
        phiLength: i,
        thetaStart: a,
        thetaLength: o
    },
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(e,t,n,r,i,a,o))
}
,
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry,
THREE.SphereBufferGeometry = function(e, t, n, r, i, a, o) {
    THREE.BufferGeometry.call(this),
    this.type = "SphereBufferGeometry",
    this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: r,
        phiLength: i,
        thetaStart: a,
        thetaLength: o
    },
    e = e || 50,
    t = Math.max(3, Math.floor(t) || 8),
    n = Math.max(2, Math.floor(n) || 6),
    r = void 0 !== r ? r : 0,
    i = void 0 !== i ? i : 2 * Math.PI,
    a = void 0 !== a ? a : 0,
    o = void 0 !== o ? o : Math.PI;
    for (var s = a + o, c = (t + 1) * (n + 1), h = new THREE.BufferAttribute(new Float32Array(3 * c),3), l = new THREE.BufferAttribute(new Float32Array(3 * c),3), u = new THREE.BufferAttribute(new Float32Array(2 * c),2), p = 0, d = [], E = new THREE.Vector3, f = 0; n >= f; f++) {
        for (var m = [], g = f / n, v = 0; t >= v; v++) {
            var T = v / t
              , y = -e * Math.cos(r + T * i) * Math.sin(a + g * o)
              , R = e * Math.cos(a + g * o)
              , H = e * Math.sin(r + T * i) * Math.sin(a + g * o);
            E.set(y, R, H).normalize(),
            h.setXYZ(p, y, R, H),
            l.setXYZ(p, E.x, E.y, E.z),
            u.setXY(p, T, 1 - g),
            m.push(p),
            p++
        }
        d.push(m)
    }
    for (var x = [], f = 0; n > f; f++)
        for (var v = 0; t > v; v++) {
            var b = d[f][v + 1]
              , _ = d[f][v]
              , M = d[f + 1][v]
              , w = d[f + 1][v + 1];
            (0 !== f || a > 0) && x.push(b, _, w),
            (f !== n - 1 || s < Math.PI) && x.push(_, M, w)
        }
    this.setIndex(new (h.count > 65535 ? THREE.Uint32Attribute : THREE.Uint16Attribute)(x,1)),
    this.addAttribute("position", h),
    this.addAttribute("normal", l),
    this.addAttribute("uv", u),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,e)
}
,
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry,
THREE.TextGeometry = function(e, t) {
    t = t || {};
    var n = t.font;
    if (n instanceof THREE.Font == !1)
        return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
        new THREE.Geometry;
    var r = n.generateShapes(e, t.size, t.curveSegments);
    t.amount = void 0 !== t.height ? t.height : 50,
    void 0 === t.bevelThickness && (t.bevelThickness = 10),
    void 0 === t.bevelSize && (t.bevelSize = 8),
    void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
    THREE.ExtrudeGeometry.call(this, r, t),
    this.type = "TextGeometry"
}
,
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype),
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry,
THREE.TorusBufferGeometry = function(e, t, n, r, i) {
    THREE.BufferGeometry.call(this),
    this.type = "TorusBufferGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: r,
        arc: i
    },
    e = e || 100,
    t = t || 40,
    n = Math.floor(n) || 8,
    r = Math.floor(r) || 6,
    i = i || 2 * Math.PI;
    var a, o, s = (n + 1) * (r + 1), c = n * r * 2 * 3, h = new (c > 65535 ? Uint32Array : Uint16Array)(c), l = new Float32Array(3 * s), u = new Float32Array(3 * s), p = new Float32Array(2 * s), d = 0, E = 0, f = 0, m = new THREE.Vector3, g = new THREE.Vector3, v = new THREE.Vector3;
    for (a = 0; n >= a; a++)
        for (o = 0; r >= o; o++) {
            var T = o / r * i
              , y = a / n * Math.PI * 2;
            g.x = (e + t * Math.cos(y)) * Math.cos(T),
            g.y = (e + t * Math.cos(y)) * Math.sin(T),
            g.z = t * Math.sin(y),
            l[d] = g.x,
            l[d + 1] = g.y,
            l[d + 2] = g.z,
            m.x = e * Math.cos(T),
            m.y = e * Math.sin(T),
            v.subVectors(g, m).normalize(),
            u[d] = v.x,
            u[d + 1] = v.y,
            u[d + 2] = v.z,
            p[E] = o / r,
            p[E + 1] = a / n,
            d += 3,
            E += 2
        }
    for (a = 1; n >= a; a++)
        for (o = 1; r >= o; o++) {
            var R = (r + 1) * a + o - 1
              , H = (r + 1) * (a - 1) + o - 1
              , x = (r + 1) * (a - 1) + o
              , b = (r + 1) * a + o;
            h[f] = R,
            h[f + 1] = H,
            h[f + 2] = b,
            h[f + 3] = H,
            h[f + 4] = x,
            h[f + 5] = b,
            f += 6
        }
    this.setIndex(new THREE.BufferAttribute(h,1)),
    this.addAttribute("position", new THREE.BufferAttribute(l,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(u,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(p,2))
}
,
THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry,
THREE.TorusGeometry = function(e, t, n, r, i) {
    THREE.Geometry.call(this),
    this.type = "TorusGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: r,
        arc: i
    },
    this.fromBufferGeometry(new THREE.TorusBufferGeometry(e,t,n,r,i))
}
,
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry,
THREE.TorusKnotBufferGeometry = function(e, t, n, r, i, a) {
    function o(e, t, n, r, i) {
        var a = Math.cos(e)
          , o = Math.sin(e)
          , s = n / t * e
          , c = Math.cos(s);
        i.x = r * (2 + c) * .5 * a,
        i.y = r * (2 + c) * o * .5,
        i.z = r * Math.sin(s) * .5
    }
    THREE.BufferGeometry.call(this),
    this.type = "TorusKnotBufferGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: n,
        radialSegments: r,
        p: i,
        q: a
    },
    e = e || 100,
    t = t || 40,
    n = Math.floor(n) || 64,
    r = Math.floor(r) || 8,
    i = i || 2,
    a = a || 3;
    var s, c, h = (r + 1) * (n + 1), l = r * n * 2 * 3, u = new THREE.BufferAttribute(new (l > 65535 ? Uint32Array : Uint16Array)(l),1), p = new THREE.BufferAttribute(new Float32Array(3 * h),3), d = new THREE.BufferAttribute(new Float32Array(3 * h),3), E = new THREE.BufferAttribute(new Float32Array(2 * h),2), f = 0, m = 0, g = new THREE.Vector3, v = new THREE.Vector3, T = new THREE.Vector2, y = new THREE.Vector3, R = new THREE.Vector3, H = new THREE.Vector3, x = new THREE.Vector3, b = new THREE.Vector3;
    for (s = 0; n >= s; ++s) {
        var _ = s / n * i * Math.PI * 2;
        for (o(_, i, a, e, y),
        o(_ + .01, i, a, e, R),
        x.subVectors(R, y),
        b.addVectors(R, y),
        H.crossVectors(x, b),
        b.crossVectors(H, x),
        H.normalize(),
        b.normalize(),
        c = 0; r >= c; ++c) {
            var M = c / r * Math.PI * 2
              , w = -t * Math.cos(M)
              , S = t * Math.sin(M);
            g.x = y.x + (w * b.x + S * H.x),
            g.y = y.y + (w * b.y + S * H.y),
            g.z = y.z + (w * b.z + S * H.z),
            p.setXYZ(f, g.x, g.y, g.z),
            v.subVectors(g, y).normalize(),
            d.setXYZ(f, v.x, v.y, v.z),
            T.x = s / n,
            T.y = c / r,
            E.setXY(f, T.x, T.y),
            f++
        }
    }
    for (c = 1; n >= c; c++)
        for (s = 1; r >= s; s++) {
            var L = (r + 1) * (c - 1) + (s - 1)
              , A = (r + 1) * c + (s - 1)
              , C = (r + 1) * c + s
              , P = (r + 1) * (c - 1) + s;
            u.setX(m, L),
            m++,
            u.setX(m, A),
            m++,
            u.setX(m, P),
            m++,
            u.setX(m, A),
            m++,
            u.setX(m, C),
            m++,
            u.setX(m, P),
            m++
        }
    this.setIndex(u),
    this.addAttribute("position", p),
    this.addAttribute("normal", d),
    this.addAttribute("uv", E)
}
,
THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry,
THREE.TorusKnotGeometry = function(e, t, n, r, i, a, o) {
    THREE.Geometry.call(this),
    this.type = "TorusKnotGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: n,
        radialSegments: r,
        p: i,
        q: a
    },
    void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
    this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(e,t,n,r,i,a)),
    this.mergeVertices()
}
,
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry,
THREE.TubeGeometry = function(e, t, n, r, i, a) {
    function o(e, t, n) {
        return L.vertices.push(new THREE.Vector3(e,t,n)) - 1
    }
    THREE.Geometry.call(this),
    this.type = "TubeGeometry",
    this.parameters = {
        path: e,
        segments: t,
        radius: n,
        radialSegments: r,
        closed: i,
        taper: a
    },
    t = t || 64,
    n = n || 1,
    r = r || 8,
    i = i || !1,
    a = a || THREE.TubeGeometry.NoTaper;
    var s, c, h, l, u, p, d, E, f, m, g, v, T, y, R, H, x, b, _, M, w, S = [], L = this, A = t + 1, C = new THREE.Vector3, P = new THREE.TubeGeometry.FrenetFrames(e,t,i), D = P.tangents, B = P.normals, I = P.binormals;
    for (this.tangents = D,
    this.normals = B,
    this.binormals = I,
    m = 0; A > m; m++)
        for (S[m] = [],
        l = m / (A - 1),
        f = e.getPointAt(l),
        s = D[m],
        c = B[m],
        h = I[m],
        p = n * a(l),
        g = 0; r > g; g++)
            u = g / r * 2 * Math.PI,
            d = -p * Math.cos(u),
            E = p * Math.sin(u),
            C.copy(f),
            C.x += d * c.x + E * h.x,
            C.y += d * c.y + E * h.y,
            C.z += d * c.z + E * h.z,
            S[m][g] = o(C.x, C.y, C.z);
    for (m = 0; t > m; m++)
        for (g = 0; r > g; g++)
            v = i ? (m + 1) % t : m + 1,
            T = (g + 1) % r,
            y = S[m][g],
            R = S[v][g],
            H = S[v][T],
            x = S[m][T],
            b = new THREE.Vector2(m / t,g / r),
            _ = new THREE.Vector2((m + 1) / t,g / r),
            M = new THREE.Vector2((m + 1) / t,(g + 1) / r),
            w = new THREE.Vector2(m / t,(g + 1) / r),
            this.faces.push(new THREE.Face3(y,R,x)),
            this.faceVertexUvs[0].push([b, _, w]),
            this.faces.push(new THREE.Face3(R,H,x)),
            this.faceVertexUvs[0].push([_.clone(), M, w.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
}
,
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry,
THREE.TubeGeometry.NoTaper = function(e) {
    return 1
}
,
THREE.TubeGeometry.SinusoidalTaper = function(e) {
    return Math.sin(Math.PI * e)
}
,
THREE.TubeGeometry.FrenetFrames = function(e, t, n) {
    function r() {
        d[0] = new THREE.Vector3,
        E[0] = new THREE.Vector3,
        a = Number.MAX_VALUE,
        o = Math.abs(p[0].x),
        s = Math.abs(p[0].y),
        c = Math.abs(p[0].z),
        a >= o && (a = o,
        u.set(1, 0, 0)),
        a >= s && (a = s,
        u.set(0, 1, 0)),
        a >= c && u.set(0, 0, 1),
        f.crossVectors(p[0], u).normalize(),
        d[0].crossVectors(p[0], f),
        E[0].crossVectors(p[0], d[0])
    }
    var i, a, o, s, c, h, l, u = new THREE.Vector3, p = [], d = [], E = [], f = new THREE.Vector3, m = new THREE.Matrix4, g = t + 1;
    for (this.tangents = p,
    this.normals = d,
    this.binormals = E,
    h = 0; g > h; h++)
        l = h / (g - 1),
        p[h] = e.getTangentAt(l),
        p[h].normalize();
    for (r(),
    h = 1; g > h; h++)
        d[h] = d[h - 1].clone(),
        E[h] = E[h - 1].clone(),
        f.crossVectors(p[h - 1], p[h]),
        f.length() > Number.EPSILON && (f.normalize(),
        i = Math.acos(THREE.Math.clamp(p[h - 1].dot(p[h]), -1, 1)),
        d[h].applyMatrix4(m.makeRotationAxis(f, i))),
        E[h].crossVectors(p[h], d[h]);
    if (n)
        for (i = Math.acos(THREE.Math.clamp(d[0].dot(d[g - 1]), -1, 1)),
        i /= g - 1,
        p[0].dot(f.crossVectors(d[0], d[g - 1])) > 0 && (i = -i),
        h = 1; g > h; h++)
            d[h].applyMatrix4(m.makeRotationAxis(p[h], i * h)),
            E[h].crossVectors(p[h], d[h])
}
,
THREE.PolyhedronGeometry = function(e, t, n, r) {
    function i(e) {
        var t = e.normalize().clone();
        t.index = l.vertices.push(t) - 1;
        var n = s(e) / 2 / Math.PI + .5
          , r = c(e) / Math.PI + .5;
        return t.uv = new THREE.Vector2(n,1 - r),
        t
    }
    function a(e, t, n, r) {
        var i = new THREE.Face3(e.index,t.index,n.index,[e.clone(), t.clone(), n.clone()],void 0,r);
        l.faces.push(i),
        T.copy(e).add(t).add(n).divideScalar(3);
        var a = s(T);
        l.faceVertexUvs[0].push([h(e.uv, e, a), h(t.uv, t, a), h(n.uv, n, a)])
    }
    function o(e, t) {
        for (var n = Math.pow(2, t), r = i(l.vertices[e.a]), o = i(l.vertices[e.b]), s = i(l.vertices[e.c]), c = [], h = e.materialIndex, u = 0; n >= u; u++) {
            c[u] = [];
            for (var p = i(r.clone().lerp(s, u / n)), d = i(o.clone().lerp(s, u / n)), E = n - u, f = 0; E >= f; f++)
                0 === f && u === n ? c[u][f] = p : c[u][f] = i(p.clone().lerp(d, f / E))
        }
        for (var u = 0; n > u; u++)
            for (var f = 0; 2 * (n - u) - 1 > f; f++) {
                var m = Math.floor(f / 2);
                f % 2 === 0 ? a(c[u][m + 1], c[u + 1][m], c[u][m], h) : a(c[u][m + 1], c[u + 1][m + 1], c[u + 1][m], h)
            }
    }
    function s(e) {
        return Math.atan2(e.z, -e.x)
    }
    function c(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
    }
    function h(e, t, n) {
        return 0 > n && 1 === e.x && (e = new THREE.Vector2(e.x - 1,e.y)),
        0 === t.x && 0 === t.z && (e = new THREE.Vector2(n / 2 / Math.PI + .5,e.y)),
        e.clone()
    }
    THREE.Geometry.call(this),
    this.type = "PolyhedronGeometry",
    this.parameters = {
        vertices: e,
        indices: t,
        radius: n,
        detail: r
    },
    n = n || 1,
    r = r || 0;
    for (var l = this, u = 0, p = e.length; p > u; u += 3)
        i(new THREE.Vector3(e[u],e[u + 1],e[u + 2]));
    for (var d = this.vertices, E = [], u = 0, f = 0, p = t.length; p > u; u += 3,
    f++) {
        var m = d[t[u]]
          , g = d[t[u + 1]]
          , v = d[t[u + 2]];
        E[f] = new THREE.Face3(m.index,g.index,v.index,[m.clone(), g.clone(), v.clone()],void 0,f)
    }
    for (var T = new THREE.Vector3, u = 0, p = E.length; p > u; u++)
        o(E[u], r);
    for (var u = 0, p = this.faceVertexUvs[0].length; p > u; u++) {
        var y = this.faceVertexUvs[0][u]
          , R = y[0].x
          , H = y[1].x
          , x = y[2].x
          , b = Math.max(R, H, x)
          , _ = Math.min(R, H, x);
        b > .9 && .1 > _ && (.2 > R && (y[0].x += 1),
        .2 > H && (y[1].x += 1),
        .2 > x && (y[2].x += 1))
    }
    for (var u = 0, p = this.vertices.length; p > u; u++)
        this.vertices[u].multiplyScalar(n);
    this.mergeVertices(),
    this.computeFaceNormals(),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,n)
}
,
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry,
THREE.DodecahedronGeometry = function(e, t) {
    var n = (1 + Math.sqrt(5)) / 2
      , r = 1 / n
      , i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r]
      , a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
    THREE.PolyhedronGeometry.call(this, i, a, e, t),
    this.type = "DodecahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry,
THREE.IcosahedronGeometry = function(e, t) {
    var n = (1 + Math.sqrt(5)) / 2
      , r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1]
      , i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
    THREE.PolyhedronGeometry.call(this, r, i, e, t),
    this.type = "IcosahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry,
THREE.OctahedronGeometry = function(e, t) {
    var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1]
      , r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
    THREE.PolyhedronGeometry.call(this, n, r, e, t),
    this.type = "OctahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry,
THREE.TetrahedronGeometry = function(e, t) {
    var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
      , r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    THREE.PolyhedronGeometry.call(this, n, r, e, t),
    this.type = "TetrahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry,
THREE.ParametricGeometry = function(e, t, n) {
    THREE.Geometry.call(this),
    this.type = "ParametricGeometry",
    this.parameters = {
        func: e,
        slices: t,
        stacks: n
    };
    var r, i, a, o, s, c = this.vertices, h = this.faces, l = this.faceVertexUvs[0], u = t + 1;
    for (r = 0; n >= r; r++)
        for (s = r / n,
        i = 0; t >= i; i++)
            o = i / t,
            a = e(o, s),
            c.push(a);
    var p, d, E, f, m, g, v, T;
    for (r = 0; n > r; r++)
        for (i = 0; t > i; i++)
            p = r * u + i,
            d = r * u + i + 1,
            E = (r + 1) * u + i + 1,
            f = (r + 1) * u + i,
            m = new THREE.Vector2(i / t,r / n),
            g = new THREE.Vector2((i + 1) / t,r / n),
            v = new THREE.Vector2((i + 1) / t,(r + 1) / n),
            T = new THREE.Vector2(i / t,(r + 1) / n),
            h.push(new THREE.Face3(p,d,f)),
            l.push([m, g, T]),
            h.push(new THREE.Face3(d,E,f)),
            l.push([g.clone(), v, T.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
}
,
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry,
THREE.WireframeGeometry = function(e) {
    function t(e, t) {
        return e - t
    }
    THREE.BufferGeometry.call(this);
    var n = [0, 0]
      , r = {}
      , i = ["a", "b", "c"];
    if (e instanceof THREE.Geometry) {
        for (var a = e.vertices, o = e.faces, s = 0, c = new Uint32Array(6 * o.length), h = 0, l = o.length; l > h; h++)
            for (var u = o[h], p = 0; 3 > p; p++) {
                n[0] = u[i[p]],
                n[1] = u[i[(p + 1) % 3]],
                n.sort(t);
                var d = n.toString();
                void 0 === r[d] && (c[2 * s] = n[0],
                c[2 * s + 1] = n[1],
                r[d] = !0,
                s++)
            }
        for (var E = new Float32Array(2 * s * 3), h = 0, l = s; l > h; h++)
            for (var p = 0; 2 > p; p++) {
                var f = a[c[2 * h + p]]
                  , m = 6 * h + 3 * p;
                E[m + 0] = f.x,
                E[m + 1] = f.y,
                E[m + 2] = f.z
            }
        this.addAttribute("position", new THREE.BufferAttribute(E,3))
    } else if (e instanceof THREE.BufferGeometry)
        if (null  !== e.index) {
            var g = e.index.array
              , a = e.attributes.position
              , v = e.groups
              , s = 0;
            0 === v.length && e.addGroup(0, g.length);
            for (var c = new Uint32Array(2 * g.length), T = 0, y = v.length; y > T; ++T)
                for (var R = v[T], H = R.start, x = R.count, h = H, b = H + x; b > h; h += 3)
                    for (var p = 0; 3 > p; p++) {
                        n[0] = g[h + p],
                        n[1] = g[h + (p + 1) % 3],
                        n.sort(t);
                        var d = n.toString();
                        void 0 === r[d] && (c[2 * s] = n[0],
                        c[2 * s + 1] = n[1],
                        r[d] = !0,
                        s++)
                    }
            for (var E = new Float32Array(2 * s * 3), h = 0, l = s; l > h; h++)
                for (var p = 0; 2 > p; p++) {
                    var m = 6 * h + 3 * p
                      , _ = c[2 * h + p];
                    E[m + 0] = a.getX(_),
                    E[m + 1] = a.getY(_),
                    E[m + 2] = a.getZ(_)
                }
            this.addAttribute("position", new THREE.BufferAttribute(E,3))
        } else {
            for (var a = e.attributes.position.array, s = a.length / 3, M = s / 3, E = new Float32Array(2 * s * 3), h = 0, l = M; l > h; h++)
                for (var p = 0; 3 > p; p++) {
                    var m = 18 * h + 6 * p
                      , w = 9 * h + 3 * p;
                    E[m + 0] = a[w],
                    E[m + 1] = a[w + 1],
                    E[m + 2] = a[w + 2];
                    var _ = 9 * h + 3 * ((p + 1) % 3);
                    E[m + 3] = a[_],
                    E[m + 4] = a[_ + 1],
                    E[m + 5] = a[_ + 2]
                }
            this.addAttribute("position", new THREE.BufferAttribute(E,3))
        }
}
,
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry,
THREE.AxisHelper = function(e) {
    e = e || 1;
    var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e])
      , n = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1])
      , r = new THREE.BufferGeometry;
    r.addAttribute("position", new THREE.BufferAttribute(t,3)),
    r.addAttribute("color", new THREE.BufferAttribute(n,3));
    var i = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.LineSegments.call(this, r, i)
}
,
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper,
THREE.ArrowHelper = function() {
    var e = new THREE.Geometry;
    e.vertices.push(new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
    var t = new THREE.CylinderGeometry(0,.5,1,5,1);
    return t.translate(0, -.5, 0),
    function(n, r, i, a, o, s) {
        THREE.Object3D.call(this),
        void 0 === a && (a = 16776960),
        void 0 === i && (i = 1),
        void 0 === o && (o = .2 * i),
        void 0 === s && (s = .2 * o),
        this.position.copy(r),
        this.line = new THREE.Line(e,new THREE.LineBasicMaterial({
            color: a
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new THREE.Mesh(t,new THREE.MeshBasicMaterial({
            color: a
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(n),
        this.setLength(i, o, s)
    }
}(),
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper,
THREE.ArrowHelper.prototype.setDirection = function() {
    var e, t = new THREE.Vector3;
    return function(n) {
        n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(n.z, 0, -n.x).normalize(),
        e = Math.acos(n.y),
        this.quaternion.setFromAxisAngle(t, e))
    }
}(),
THREE.ArrowHelper.prototype.setLength = function(e, t, n) {
    void 0 === t && (t = .2 * e),
    void 0 === n && (n = .2 * t),
    this.line.scale.set(1, Math.max(0, e - t), 1),
    this.line.updateMatrix(),
    this.cone.scale.set(n, t, n),
    this.cone.position.y = e,
    this.cone.updateMatrix()
}
,
THREE.ArrowHelper.prototype.setColor = function(e) {
    this.line.material.color.set(e),
    this.cone.material.color.set(e)
}
,
THREE.BoxHelper = function(e) {
    var t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
      , n = new Float32Array(24)
      , r = new THREE.BufferGeometry;
    r.setIndex(new THREE.BufferAttribute(t,1)),
    r.addAttribute("position", new THREE.BufferAttribute(n,3)),
    THREE.LineSegments.call(this, r, new THREE.LineBasicMaterial({
        color: 16776960
    })),
    void 0 !== e && this.update(e)
}
,
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper,
THREE.BoxHelper.prototype.update = function() {
    var e = new THREE.Box3;
    return function(t) {
        if (t instanceof THREE.Box3 ? e.copy(t) : e.setFromObject(t),
        !e.isEmpty()) {
            var n = e.min
              , r = e.max
              , i = this.geometry.attributes.position
              , a = i.array;
            a[0] = r.x,
            a[1] = r.y,
            a[2] = r.z,
            a[3] = n.x,
            a[4] = r.y,
            a[5] = r.z,
            a[6] = n.x,
            a[7] = n.y,
            a[8] = r.z,
            a[9] = r.x,
            a[10] = n.y,
            a[11] = r.z,
            a[12] = r.x,
            a[13] = r.y,
            a[14] = n.z,
            a[15] = n.x,
            a[16] = r.y,
            a[17] = n.z,
            a[18] = n.x,
            a[19] = n.y,
            a[20] = n.z,
            a[21] = r.x,
            a[22] = n.y,
            a[23] = n.z,
            i.needsUpdate = !0,
            this.geometry.computeBoundingSphere()
        }
    }
}(),
THREE.BoundingBoxHelper = function(e, t) {
    var n = void 0 !== t ? t : 8947848;
    this.object = e,
    this.box = new THREE.Box3,
    THREE.Mesh.call(this, new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
        color: n,
        wireframe: !0
    }))
}
,
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper,
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object),
    this.box.size(this.scale),
    this.box.center(this.position)
}
,
THREE.CameraHelper = function(e) {
    function t(e, t, r) {
        n(e, r),
        n(t, r)
    }
    function n(e, t) {
        r.vertices.push(new THREE.Vector3),
        r.colors.push(new THREE.Color(t)),
        void 0 === a[e] && (a[e] = []),
        a[e].push(r.vertices.length - 1)
    }
    var r = new THREE.Geometry
      , i = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    })
      , a = {}
      , o = 16755200
      , s = 16711680
      , c = 43775
      , h = 16777215
      , l = 3355443;
    t("n1", "n2", o),
    t("n2", "n4", o),
    t("n4", "n3", o),
    t("n3", "n1", o),
    t("f1", "f2", o),
    t("f2", "f4", o),
    t("f4", "f3", o),
    t("f3", "f1", o),
    t("n1", "f1", o),
    t("n2", "f2", o),
    t("n3", "f3", o),
    t("n4", "f4", o),
    t("p", "n1", s),
    t("p", "n2", s),
    t("p", "n3", s),
    t("p", "n4", s),
    t("u1", "u2", c),
    t("u2", "u3", c),
    t("u3", "u1", c),
    t("c", "t", h),
    t("p", "c", l),
    t("cn1", "cn2", l),
    t("cn3", "cn4", l),
    t("cf1", "cf2", l),
    t("cf3", "cf4", l),
    THREE.LineSegments.call(this, r, i),
    this.camera = e,
    this.camera.updateProjectionMatrix(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.pointMap = a,
    this.update()
}
,
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper,
THREE.CameraHelper.prototype.update = function() {
    function e(e, a, o, s) {
        r.set(a, o, s).unproject(i);
        var c = n[e];
        if (void 0 !== c)
            for (var h = 0, l = c.length; l > h; h++)
                t.vertices[c[h]].copy(r)
    }
    var t, n, r = new THREE.Vector3, i = new THREE.Camera;
    return function() {
        t = this.geometry,
        n = this.pointMap;
        var r = 1
          , a = 1;
        i.projectionMatrix.copy(this.camera.projectionMatrix),
        e("c", 0, 0, -1),
        e("t", 0, 0, 1),
        e("n1", -r, -a, -1),
        e("n2", r, -a, -1),
        e("n3", -r, a, -1),
        e("n4", r, a, -1),
        e("f1", -r, -a, 1),
        e("f2", r, -a, 1),
        e("f3", -r, a, 1),
        e("f4", r, a, 1),
        e("u1", .7 * r, 1.1 * a, -1),
        e("u2", .7 * -r, 1.1 * a, -1),
        e("u3", 0, 2 * a, -1),
        e("cf1", -r, 0, 1),
        e("cf2", r, 0, 1),
        e("cf3", 0, -a, 1),
        e("cf4", 0, a, 1),
        e("cn1", -r, 0, -1),
        e("cn2", r, 0, -1),
        e("cn3", 0, -a, -1),
        e("cn4", 0, a, -1),
        t.verticesNeedUpdate = !0
    }
}(),
THREE.DirectionalLightHelper = function(e, t) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    t = t || 1;
    var n = new THREE.Geometry;
    n.vertices.push(new THREE.Vector3(-t,t,0), new THREE.Vector3(t,t,0), new THREE.Vector3(t,-t,0), new THREE.Vector3(-t,-t,0), new THREE.Vector3(-t,t,0));
    var r = new THREE.LineBasicMaterial({
        fog: !1
    });
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    this.lightPlane = new THREE.Line(n,r),
    this.add(this.lightPlane),
    n = new THREE.Geometry,
    n.vertices.push(new THREE.Vector3, new THREE.Vector3),
    r = new THREE.LineBasicMaterial({
        fog: !1
    }),
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    this.targetLine = new THREE.Line(n,r),
    this.add(this.targetLine),
    this.update()
}
,
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper,
THREE.DirectionalLightHelper.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(),
    this.lightPlane.material.dispose(),
    this.targetLine.geometry.dispose(),
    this.targetLine.material.dispose()
}
,
THREE.DirectionalLightHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , n = new THREE.Vector3;
    return function() {
        e.setFromMatrixPosition(this.light.matrixWorld),
        t.setFromMatrixPosition(this.light.target.matrixWorld),
        n.subVectors(t, e),
        this.lightPlane.lookAt(n),
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        this.targetLine.geometry.vertices[1].copy(n),
        this.targetLine.geometry.verticesNeedUpdate = !0,
        this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}(),
THREE.EdgesHelper = function(e, t, n) {
    var r = void 0 !== t ? t : 16777215;
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(e.geometry,n), new THREE.LineBasicMaterial({
        color: r
    })),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper,
THREE.FaceNormalsHelper = function(e, t, n, r) {
    this.object = e,
    this.size = void 0 !== t ? t : 1;
    var i = void 0 !== n ? n : 16776960
      , a = void 0 !== r ? r : 1
      , o = 0
      , s = this.object.geometry;
    s instanceof THREE.Geometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    var c = new THREE.BufferGeometry
      , h = new THREE.Float32Attribute(2 * o * 3,3);
    c.addAttribute("position", h),
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: i,
        linewidth: a
    })),
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper,
THREE.FaceNormalsHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , n = new THREE.Matrix3;
    return function() {
        this.object.updateMatrixWorld(!0),
        n.getNormalMatrix(this.object.matrixWorld);
        for (var r = this.object.matrixWorld, i = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; l > h; h++) {
            var u = s[h]
              , p = u.normal;
            e.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(r),
            t.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),
            i.setXYZ(c, e.x, e.y, e.z),
            c += 1,
            i.setXYZ(c, t.x, t.y, t.z),
            c += 1
        }
        return i.needsUpdate = !0,
        this
    }
}(),
THREE.GridHelper = function(e, t) {
    var n = new THREE.Geometry
      , r = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    this.color1 = new THREE.Color(4473924),
    this.color2 = new THREE.Color(8947848);
    for (var i = -e; e >= i; i += t) {
        n.vertices.push(new THREE.Vector3(-e,0,i), new THREE.Vector3(e,0,i), new THREE.Vector3(i,0,-e), new THREE.Vector3(i,0,e));
        var a = 0 === i ? this.color1 : this.color2;
        n.colors.push(a, a, a, a)
    }
    THREE.LineSegments.call(this, n, r)
}
,
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.GridHelper.prototype.constructor = THREE.GridHelper,
THREE.GridHelper.prototype.setColors = function(e, t) {
    this.color1.set(e),
    this.color2.set(t),
    this.geometry.colorsNeedUpdate = !0
}
,
THREE.HemisphereLightHelper = function(e, t) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.colors = [new THREE.Color, new THREE.Color];
    var n = new THREE.SphereGeometry(t,4,2);
    n.rotateX(-Math.PI / 2);
    for (var r = 0, i = 8; i > r; r++)
        n.faces[r].color = this.colors[4 > r ? 0 : 1];
    var a = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    });
    this.lightSphere = new THREE.Mesh(n,a),
    this.add(this.lightSphere),
    this.update()
}
,
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper,
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose(),
    this.lightSphere.material.dispose()
}
,
THREE.HemisphereLightHelper.prototype.update = function() {
    var e = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
        this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}(),
THREE.PointLightHelper = function(e, t) {
    this.light = e,
    this.light.updateMatrixWorld();
    var n = new THREE.SphereGeometry(t,4,2)
      , r = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    THREE.Mesh.call(this, n, r),
    this.matrix = this.light.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper,
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose(),
    this.material.dispose()
}
,
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
}
,
THREE.SkeletonHelper = function(e) {
    this.bones = this.getBoneList(e);
    for (var t = new THREE.Geometry, n = 0; n < this.bones.length; n++) {
        var r = this.bones[n];
        r.parent instanceof THREE.Bone && (t.vertices.push(new THREE.Vector3),
        t.vertices.push(new THREE.Vector3),
        t.colors.push(new THREE.Color(0,0,1)),
        t.colors.push(new THREE.Color(0,1,0)))
    }
    t.dynamic = !0;
    var i = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    });
    THREE.LineSegments.call(this, t, i),
    this.root = e,
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper,
THREE.SkeletonHelper.prototype.getBoneList = function(e) {
    var t = [];
    e instanceof THREE.Bone && t.push(e);
    for (var n = 0; n < e.children.length; n++)
        t.push.apply(t, this.getBoneList(e.children[n]));
    return t
}
,
THREE.SkeletonHelper.prototype.update = function() {
    for (var e = this.geometry, t = (new THREE.Matrix4).getInverse(this.root.matrixWorld), n = new THREE.Matrix4, r = 0, i = 0; i < this.bones.length; i++) {
        var a = this.bones[i];
        a.parent instanceof THREE.Bone && (n.multiplyMatrices(t, a.matrixWorld),
        e.vertices[r].setFromMatrixPosition(n),
        n.multiplyMatrices(t, a.parent.matrixWorld),
        e.vertices[r + 1].setFromMatrixPosition(n),
        r += 2)
    }
    e.verticesNeedUpdate = !0,
    e.computeBoundingSphere()
}
,
THREE.SpotLightHelper = function(e) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1;
    for (var t = new THREE.BufferGeometry, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, i = 1, a = 32; a > r; r++,
    i++) {
        var o = r / a * Math.PI * 2
          , s = i / a * Math.PI * 2;
        n.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
    }
    t.addAttribute("position", new THREE.Float32Attribute(n,3));
    var c = new THREE.LineBasicMaterial({
        fog: !1
    });
    this.cone = new THREE.LineSegments(t,c),
    this.add(this.cone),
    this.update()
}
,
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper,
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose(),
    this.cone.material.dispose()
}
,
THREE.SpotLightHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3;
    return function() {
        var n = this.light.distance ? this.light.distance : 1e3
          , r = n * Math.tan(this.light.angle);
        this.cone.scale.set(r, r, n),
        e.setFromMatrixPosition(this.light.matrixWorld),
        t.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(t.sub(e)),
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}(),
THREE.VertexNormalsHelper = function(e, t, n, r) {
    this.object = e,
    this.size = void 0 !== t ? t : 1;
    var i = void 0 !== n ? n : 16711680
      , a = void 0 !== r ? r : 1
      , o = 0
      , s = this.object.geometry;
    s instanceof THREE.Geometry ? o = 3 * s.faces.length : s instanceof THREE.BufferGeometry && (o = s.attributes.normal.count);
    var c = new THREE.BufferGeometry
      , h = new THREE.Float32Attribute(2 * o * 3,3);
    c.addAttribute("position", h),
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: i,
        linewidth: a
    })),
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper,
THREE.VertexNormalsHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , n = new THREE.Matrix3;
    return function() {
        var r = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0),
        n.getNormalMatrix(this.object.matrixWorld);
        var i = this.object.matrixWorld
          , a = this.geometry.attributes.position
          , o = this.object.geometry;
        if (o instanceof THREE.Geometry)
            for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; u > l; l++)
                for (var p = c[l], d = 0, E = p.vertexNormals.length; E > d; d++) {
                    var f = s[p[r[d]]]
                      , m = p.vertexNormals[d];
                    e.copy(f).applyMatrix4(i),
                    t.copy(m).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),
                    a.setXYZ(h, e.x, e.y, e.z),
                    h += 1,
                    a.setXYZ(h, t.x, t.y, t.z),
                    h += 1
                }
        else if (o instanceof THREE.BufferGeometry)
            for (var g = o.attributes.position, v = o.attributes.normal, h = 0, d = 0, E = g.count; E > d; d++)
                e.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(i),
                t.set(v.getX(d), v.getY(d), v.getZ(d)),
                t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),
                a.setXYZ(h, e.x, e.y, e.z),
                h += 1,
                a.setXYZ(h, t.x, t.y, t.z),
                h += 1;
        return a.needsUpdate = !0,
        this
    }
}(),
THREE.WireframeHelper = function(e, t) {
    var n = void 0 !== t ? t : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(e.geometry), new THREE.LineBasicMaterial({
        color: n
    })),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper,
THREE.ImmediateRenderObject = function(e) {
    THREE.Object3D.call(this),
    this.material = e,
    this.render = function(e) {}
}
,
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject,
THREE.MorphBlendMesh = function(e, t) {
    THREE.Mesh.call(this, e, t),
    this.animationsMap = {},
    this.animationsList = [];
    var n = this.geometry.morphTargets.length
      , r = "__default"
      , i = 0
      , a = n - 1
      , o = n / 1;
    this.createAnimation(r, i, a, o),
    this.setAnimationWeight(r, 1)
}
,
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh,
THREE.MorphBlendMesh.prototype.createAnimation = function(e, t, n, r) {
    var i = {
        start: t,
        end: n,
        length: n - t + 1,
        fps: r,
        duration: (n - t) / r,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[e] = i,
    this.animationsList.push(i)
}
,
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
    for (var t, n = /([a-z]+)_?(\d+)/i, r = {}, i = this.geometry, a = 0, o = i.morphTargets.length; o > a; a++) {
        var s = i.morphTargets[a]
          , c = s.name.match(n);
        if (c && c.length > 1) {
            var h = c[1];
            r[h] || (r[h] = {
                start: 1 / 0,
                end: -(1 / 0)
            });
            var l = r[h];
            a < l.start && (l.start = a),
            a > l.end && (l.end = a),
            t || (t = h)
        }
    }
    for (var h in r) {
        var l = r[h];
        this.createAnimation(h, l.start, l.end, e)
    }
    this.firstAnimation = t
}
,
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
    var t = this.animationsMap[e];
    t && (t.direction = 1,
    t.directionBackwards = !1)
}
,
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
    var t = this.animationsMap[e];
    t && (t.direction = -1,
    t.directionBackwards = !0)
}
,
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
    var n = this.animationsMap[e];
    n && (n.fps = t,
    n.duration = (n.end - n.start) / n.fps)
}
,
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
    var n = this.animationsMap[e];
    n && (n.duration = t,
    n.fps = (n.end - n.start) / n.duration)
}
,
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
    var n = this.animationsMap[e];
    n && (n.weight = t)
}
,
THREE.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
    var n = this.animationsMap[e];
    n && (n.time = t)
}
,
THREE.MorphBlendMesh.prototype.getAnimationTime = function(e) {
    var t = 0
      , n = this.animationsMap[e];
    return n && (t = n.time),
    t
}
,
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
    var t = -1
      , n = this.animationsMap[e];
    return n && (t = n.duration),
    t
}
,
THREE.MorphBlendMesh.prototype.playAnimation = function(e) {
    var t = this.animationsMap[e];
    t ? (t.time = 0,
    t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
}
,
THREE.MorphBlendMesh.prototype.stopAnimation = function(e) {
    var t = this.animationsMap[e];
    t && (t.active = !1)
}
,
THREE.MorphBlendMesh.prototype.update = function(e) {
    for (var t = 0, n = this.animationsList.length; n > t; t++) {
        var r = this.animationsList[t];
        if (r.active) {
            var i = r.duration / r.length;
            r.time += r.direction * e,
            r.mirroredLoop ? (r.time > r.duration || r.time < 0) && (r.direction *= -1,
            r.time > r.duration && (r.time = r.duration,
            r.directionBackwards = !0),
            r.time < 0 && (r.time = 0,
            r.directionBackwards = !1)) : (r.time = r.time % r.duration,
            r.time < 0 && (r.time += r.duration));
            var a = r.start + THREE.Math.clamp(Math.floor(r.time / i), 0, r.length - 1)
              , o = r.weight;
            a !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0,
            this.morphTargetInfluences[r.currentFrame] = 1 * o,
            this.morphTargetInfluences[a] = 0,
            r.lastFrame = r.currentFrame,
            r.currentFrame = a);
            var s = r.time % i / i;
            r.directionBackwards && (s = 1 - s),
            r.currentFrame !== r.lastFrame ? (this.morphTargetInfluences[r.currentFrame] = s * o,
            this.morphTargetInfluences[r.lastFrame] = (1 - s) * o) : this.morphTargetInfluences[r.currentFrame] = o
        }
    }
}
;
