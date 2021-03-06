!function e(t, n, r) {
    function o(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u)
                    return u(a, !0);
                if (i)
                    return i(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                var n = t[a][1][e];
                return o(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++)
        o(r[a]);
    return o
}({
    1: [function(e, t, n) {
        "use strict";
        function r() {
            if (L.addPass(new y.RenderPass(w,x)),
            M) {
                var e = new y.ShaderPass(F);
                e.material.precision = "highp",
                L.addPass(e),
                e.uniforms.tDepth.value = j,
                e.uniforms.cameraNear.value = x.near,
                e.uniforms.cameraFar.value = x.far
            }
            L.addPass(new g(w,x)),
            L.passes[L.passes.length - 1].renderToScreen = !0
        }
        function o(e) {
            e = e || 0;
            var t = e > 1 ? new THREE.WebGLMultiRenderTarget(window.innerWidth,window.innerHeight) : new THREE.WebGLRenderTarget(window.innerWidth,window.innerHeight);
            if (t.texture.format = THREE.RGBFormat,
            t.texture.minFilter = THREE.NearestFilter,
            t.texture.magFilter = THREE.NearestFilter,
            t.texture.generateMipmaps = !1,
            t.stencilBuffer = !1,
            t.depthBuffer = !0,
            e > 1) {
                var n = t.texture.clone();
                n.format = THREE.RGBAFormat,
                n.type = THREE.FloatType,
                t.attachments.push(n)
            }
            return t
        }
        function i() {
            var e = T.getPixelRatio()
              , t = T.getSize()
              , n = t.width * e
              , r = t.height * e;
            q.forEach(function(e) {
                e.setSize(n, r)
            })
        }
        function a(e) {
            H += Math.min(30, e) / 1e3,
            I && (I.position.y = .25 * Math.sin(H) + 1,
            I.rotation.y += 5e-5 * e),
            b();
            var t = T.getClearColor();
            S && (w.overrideMaterial = z,
            T.setRenderTarget(P),
            T.setClearColor(A, 1),
            T.clear(!0, !0, !0),
            T.render(w, x, P)),
            L.passes.forEach(function(e) {
                e.uniforms && e.uniforms.resolution && e.uniforms.resolution.value.set(O.width, O.height)
            }),
            T.setRenderTarget(null ),
            T.setClearColor(t, 1),
            w.overrideMaterial = null ,
            L.passes.length > 1 ? L.render() : T.render(w, x)
        }
        function s(e) {
            function t() {
                l = !0,
                i.nextPalette(),
                n()
            }
            function n() {
                v = !1,
                y && clearInterval(y),
                y = setInterval(function() {
                    v = !0
                }, 2e3)
            }
            var r = e.palettes
              , o = e.envMap;
            document.querySelector("#canvas").style.display = "block";
            var i = p({
                palettes: r,
                scene: w,
                envMap: o,
                loop: U,
                camera: x,
                renderer: T
            })
              , a = ["#fff", "#e2e2e2"];
            i.setPalette(a),
            document.body.style.background = "#F9F9F9";
            var s = C()
              , u = !1
              , c = 0
              , l = !1
              , d = f(s.binCount, !0)
              , v = !1
              , y = void 0
              , g = ["#fff", "#d3d3d3", "#a5a5a5"]
              , F = h({
                whitePalette: g,
                scene: w,
                controls: _,
                audio: s,
                camera: x,
                geo: i
            })
              , A = setInterval(function() {
                i.nextGeometry()
            }, 400);
            m ? s.skip() : (s.queue(),
            s.once("ready", function() {
                s.playQueued()
            })),
            F.once("stop", function(e) {
                F.on("stop", function() {
                    n(),
                    v = !1
                });
                var r = null 
                  , o = function() {
                    var e = 7721;
                    r = setTimeout(function() {
                        t()
                    }, e)
                }
                ;
                e ? o() : s.once("ready", o),
                F.once("start", function() {
                    r && clearTimeout(r)
                })
            }),
            E({
                interactions: F
            }, function() {
                u = !0,
                clearInterval(A)
            }),
            setInterval(function() {
                for (var e = 0; e < d.length; e++)
                    d[e] = !0
            }, 100),
            U.on("tick", function(e) {
                if (c += e,
                u) {
                    s.update(e);
                    for (var t = 0; t < s.beats.length; t++)
                        d[t] && s.beats[t] && (i.nextGeometry({
                            type: t
                        }),
                        d[t] = !1);
                    !F.keyDown && v && s.beats[1] && l && (i.nextPalette(),
                    v = !1)
                }
            })
        }
        function u() {
            v.intro()
        }
        var c = e("raf-loop")
          , l = e("./lib/app")
          , f = e("new-array")
          , p = e("./lib/geoScene")
          , d = e("./lib/palette")
          , h = (e("right-now"),
        e("./lib/setupInteractions"))
          , v = e("./lib/log")
          , m = e("./lib/isMobile")
          , E = e("./lib/intro")
          , y = e("./lib/EffectComposer")
          , g = e("./lib/BloomPass")
          , F = e("./lib/shader/SSAOShader")
          , C = e("./lib/audio")
          , A = new THREE.Color("white")
          , D = {
            antialias: !1,
            alpha: !1,
            stencil: !1
        }
          , B = l(D)
          , b = B.updateProjectionMatrix
          , x = B.camera
          , w = B.scene
          , T = B.renderer
          , _ = B.controls
          , M = (B.canvas,
        !0);
        T.extensions.get("WEBGL_depth_texture") || (window.ga && window.ga("send", "event", "error", "WEBGL_depth_texture", 0),
        console.warn("Requires WEBGL_depth_texture for certain post-processing effects."),
        M = !1);
        var S = !1;
        T.gammaInput = !0,
        T.gammaOutput = !0,
        T.gammaFactor = 2.2;
        var R = o()
          , k = o()
          , P = S ? R.clone() : null 
          , O = o()
          , L = new y(T,R,k,O)
          , q = [R, k, O, P].filter(Boolean);
        S ? (L.depthTexture = P,
        P.texture.type = THREE.FloatType) : M && (O.depthTexture = new THREE.DepthTexture);
        var j = S ? P : O.depthTexture
          , z = new THREE.MeshDepthMaterial;
        z.depthPacking = THREE.BasicDepthPacking,
        z.blending = THREE.NoBlending;
        var H = 0
          , I = null 
          , U = c(a).start();
        i(),
        window.addEventListener("resize", i),
        window.addEventListener("touchstart", function(e) {
            return e.preventDefault()
        }),
        u();
        var G = /(iPhone|iPad)/i.test(navigator.userAgent);
        G && !function() {
            var e = function() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 500)
            }
            ;
            e(),
            window.addEventListener("orientationchange", function() {
                e()
            }, !1)
        }(),
        window.onkeydown = function(e) {
            return 32 === e.keyCode ? !1 : void 0
        }
        ,
        r();
        var N = !G;
        s({
            palettes: d(),
            supportsMedia: N
        })
    }
    , {
        "./lib/BloomPass": 2,
        "./lib/EffectComposer": 3,
        "./lib/app": 4,
        "./lib/audio": 5,
        "./lib/geoScene": 8,
        "./lib/intro": 10,
        "./lib/isMobile": 11,
        "./lib/log": 12,
        "./lib/palette": 13,
        "./lib/setupInteractions": 14,
        "./lib/shader/SSAOShader": 15,
        "new-array": 34,
        "raf-loop": 60,
        "right-now": 66
    }],
    2: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
            this.scene = e,
            this.camera = t,
            this.debugCopyShader = new THREE.ShaderMaterial(i),
            this._lastWidth = null ,
            this._lastHeight = null ,
            this._blurTarget = null ,
            this._thresholdTarget = null ,
            this.enabled = !0,
            this.needsSwap = !0,
            this.oldColor = new THREE.Color,
            this.oldAlpha = 1,
            this.clearColor = new THREE.Color("#fff"),
            this.clearAlpha = 0,
            this.postShader = new THREE.RawShaderMaterial({
                vertexShader: "#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * position;\n}\n",
                fragmentShader: "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\n\nvec3 tex(vec2 uv);\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n#ifndef TAU\n  #define TAU 6.28318530718\n#endif\n\n//Use last part of hash function to generate new random radius and angle\nvec2 mult(inout vec2 r) {\n  r = fract(r * vec2(12.9898,78.233));\n  return sqrt(r.x + .001) * vec2(sin(r.y * TAU), cos(r.y * TAU));\n}\n\nvec3 blur(vec2 uv, float radius, float aspect, float offset) {\n  vec2 circle = vec2(radius);\n  circle.x *= aspect;\n  vec2 rnd = vec2(random(vec2(uv + offset)));\n\n  vec3 acc = vec3(0.0);\n  for (int i = 0; i < 10; i++) {\n    acc += tex(uv + circle * mult(rnd)).xyz;\n  }\n  return acc / float(10);\n}\n\nvec3 blur(vec2 uv, float radius, float aspect) {\n  return blur(uv, radius, aspect, 0.0);\n}\n\nvec3 blur(vec2 uv, float radius) {\n  return blur(uv, radius, 1.0);\n}\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\nvec3 tex(vec2 uv) {\n  vec3 rgb = texture2D(tDiffuse, uv).rgb;\n  // float threshold = luma(rgb);\n  return rgb;\n  // return threshold > 0.2 ? rgb : vec3(0.0);\n  // return step(1.0 - t, rgb);\n  // return smoothstep(vec3(0.0), vec3(, threshold);\n}\n\nvoid main () {\n  float aspect = resolution.x / resolution.y;\n  \n  //jitter the noise but not every frame\n  float tick = 0.0;//floor(fract(iGlobalTime)*20.0);\n  float jitter = mod(tick * 382.0231, 21.321);\n  \n  // vec3 blurred = vec3(0.0);\n  // blurred += 0.6 * blur(vUv, 0.3, 1.0 / aspect, jitter);\n  \n  vec3 blurred = blur(vUv, 0.25, 1.0 / aspect);\n  gl_FragColor.rgb = blurred;\n  gl_FragColor.a = 1.0;\n  // gl_FragColor = texture2D(tDiffuse, vUv);\n}",
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null 
                    },
                    resolution: {
                        type: "v2",
                        value: new THREE.Vector2(1,1)
                    }
                }
            }),
            this.postShader.name = "bloom-blur-material",
            this.combineShader = new THREE.RawShaderMaterial({
                vertexShader: "#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * position;\n}\n",
                fragmentShader: "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform sampler2D tBloomDiffuse;\nuniform vec2 resolution;\n\nvoid main () {\n  vec4 blurred = texture2D(tBloomDiffuse, vUv);\n  blurred.rgb *= 0.5;\n  gl_FragColor = texture2D(tDiffuse, vUv) + blurred;\n}",
                uniforms: {
                    resolution: {
                        type: "v2",
                        value: new THREE.Vector2
                    },
                    tDiffuse: {
                        type: "t",
                        value: null 
                    },
                    tBloomDiffuse: {
                        type: "t",
                        value: null 
                    }
                }
            }),
            this.combineShader.name = "bloom-combine-material",
            this.postCamera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
            this.postScene = new THREE.Scene,
            this.postQuad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2)),
            this.postQuad.name = "godray-post-quad",
            this.postScene.add(this.postQuad),
            this.renderToScreen = !1
        }
        var o = e("clamp")
          , i = e("three-copyshader")
          , a = (e("./isMobile"),
        2)
          , s = 4096;
        t.exports = r,
        r.prototype = {
            _updateTargets: function(e) {
                var t = e.width
                  , n = e.height
                  , r = o(Math.floor(t / a), 2, s)
                  , i = o(Math.floor(n / a), 2, s);
                this._thresholdTarget && this._blurTarget ? this._thresholdTarget.width === t && this._thresholdTarget.height === n || (this._thresholdTarget.setSize(r, i),
                this._blurTarget.setSize(r, i)) : (this._blurTarget = new THREE.WebGLRenderTarget(r,i),
                this._blurTarget.texture.minFilter = THREE.LinearFilter,
                this._blurTarget.texture.magFilter = THREE.LinearFilter,
                this._blurTarget.texture.generateMipmaps = !1,
                this._blurTarget.depthBuffer = !0,
                this._blurTarget.stencilBuffer = !1,
                this._thresholdTarget = this._blurTarget.clone())
            },
            render: function(e, t, n, r) {
                this._updateTargets(n);
                var o = this.renderToScreen ? void 0 : t;
                this.oldColor.copy(e.getClearColor()),
                this.oldAlpha = e.getClearAlpha();
                var i = e.autoClear;
                e.setClearColor(this.clearColor, this.clearAlpha),
                e.autoClear = !1,
                e.clearTarget(this._thresholdTarget, !0, !0, !1),
                e.render(this.scene, this.camera, this._thresholdTarget, !1),
                this.postScene.overrideMaterial = this.postShader,
                this.postShader.uniforms.resolution.value.set(this._thresholdTarget.width, this._thresholdTarget.height),
                this.postShader.uniforms.tDiffuse.value = this._thresholdTarget,
                e.render(this.postScene, this.postCamera, this._blurTarget, !0),
                this.postScene.overrideMaterial = this.combineShader,
                this.combineShader.uniforms.tDiffuse.value = n,
                this.combineShader.uniforms.tBloomDiffuse.value = this._blurTarget;
                var a = e.getPixelRatio();
                this.combineShader.uniforms.resolution.value.set(o ? o.width : window.innerWidth * a, o ? o.height : window.innerHeight * a),
                e.render(this.postScene, this.postCamera, o, !0),
                e.setClearColor(this.oldColor, this.oldAlpha),
                e.autoClear = i
            }
        }
    }
    , {
        "./isMobile": 11,
        clamp: 22,
        "three-copyshader": 69
    }],
    3: [function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            if (this.renderer = e,
            void 0 === t)
                throw new Error("must specify targets");
            this.renderTarget1 = t,
            this.renderTarget2 = n,
            this.initialRenderTarget = r,
            this.writeBuffer = this.renderTarget1,
            this.readBuffer = this.renderTarget2,
            this.passes = [],
            this.copyPass = new i(o)
        }
        t.exports = r;
        var o = r.CopyShader = e("three-copyshader")
          , i = (r.RenderPass = e("three-effectcomposer/lib/renderpass")(THREE),
        r.ShaderPass = e("three-effectcomposer/lib/shaderpass")(THREE, r))
          , a = r.MaskPass = e("three-effectcomposer/lib/maskpass")(THREE)
          , s = r.ClearMaskPass = e("three-effectcomposer/lib/clearmaskpass")(THREE);
        r.prototype = {
            swapBuffers: function() {
                var e = this.readBuffer;
                this.readBuffer = this.writeBuffer,
                this.writeBuffer = e
            },
            addPass: function(e) {
                this.passes.push(e)
            },
            clearPasses: function() {
                this.passes.length = 0
            },
            insertPass: function(e, t) {
                this.passes.splice(t, 0, e),
                this.initialClearColor = new THREE.Color(1,0,0)
            },
            render: function(e) {
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2;
                var t, n, r, o = !1, i = this.passes.length;
                for (n = 0,
                r = 0; i > n; n++)
                    if (t = this.passes[n],
                    t.enabled) {
                        var u, c;
                        1 >= r ? (c = this.writeBuffer,
                        u = this.initialRenderTarget) : (c = this.writeBuffer,
                        u = this.readBuffer);
                        var l;
                        l = this.depthTexture ? this.depthTexture : 0 === r ? void 0 : this.initialRenderTarget.depthTexture;
                        var f = this.initialRenderTarget.attachments;
                        if (t.render(this.renderer, c, u, e, o, l, f),
                        t.needsSwap) {
                            if (o) {
                                var p = this.renderer.context;
                                p.stencilFunc(p.NOTEQUAL, 1, 4294967295),
                                this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                                p.stencilFunc(p.EQUAL, 1, 4294967295)
                            }
                            this.swapBuffers()
                        }
                        t instanceof a ? o = !0 : t instanceof s && (o = !1),
                        r++
                    }
            },
            reset: function(e) {
                void 0 === e && (e = this.renderTarget1.clone(),
                e.width = window.innerWidth,
                e.height = window.innerHeight),
                this.renderTarget1 = e,
                this.renderTarget2 = e.clone(),
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2
            },
            setSize: function(e, t) {
                var n = this.renderTarget1.clone();
                n.width = e,
                n.height = t,
                this.reset(n)
            }
        },
        r.camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
        r.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null ),
        r.scene = new THREE.Scene,
        r.scene.add(r.quad)
    }
    , {
        "three-copyshader": 69,
        "three-effectcomposer/lib/clearmaskpass": 70,
        "three-effectcomposer/lib/maskpass": 71,
        "three-effectcomposer/lib/renderpass": 72,
        "three-effectcomposer/lib/shaderpass": 73
    }],
    4: [function(e, t, n) {
        "use strict";
        function r() {
            function e() {
                var e = window.innerWidth
                  , t = window.innerHeight
                  , n = e / t;
                f.update(),
                u.position.fromArray(f.position),
                u.up.fromArray(f.up),
                u.lookAt(c.fromArray(f.direction)),
                u.aspect = n,
                u.updateProjectionMatrix()
            }
            function t() {
                var t = window.innerWidth
                  , n = window.innerHeight;
                a && (t++,
                n++),
                s.setSize(t, n),
                e()
            }
            var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , r = Math.min(1.5, window.devicePixelRatio)
              , a = /(iPhone|iPad|iPod)/i.test(navigator.userAgent)
              , s = new THREE.WebGLRenderer(i({
                canvas: document.querySelector("#canvas"),
                antialias: !0
            }, n));
            s.setPixelRatio(r);
            var u = new THREE.PerspectiveCamera(75,1,.01,100)
              , c = new THREE.Vector3
              , l = new THREE.Scene
              , f = o(i({
                canvas: canvas,
                rotateSpeed: 0,
                zoomSpeed: 0,
                pinchSpeed: 0,
                phi: 0,
                distance: 1,
                distanceBounds: [0, 100]
            }, n));
            return window.addEventListener("resize", t),
            t(),
            {
                updateProjectionMatrix: e,
                camera: u,
                scene: l,
                renderer: s,
                controls: f,
                canvas: canvas
            }
        }
        var o = e("orbit-controls")
          , i = e("object-assign");
        t.exports = r
    }
    , {
        "object-assign": 35,
        "orbit-controls": 36
    }],
    5: [function(e, t, n) {
        "use strict";
        function r() {
            var e = new window.Audio;
            if ("" !== e.canPlayType('audio/mp4;codecs="ec-3"')) {
                if (-1 !== navigator.userAgent.indexOf("Safari") && -1 !== navigator.userAgent.indexOf("Mac OS X 10_11") && -1 !== navigator.userAgent.indexOf("Version/9"))
                    return !0;
                if (-1 !== navigator.userAgent.indexOf("Edge"))
                    return !0
            }
            return !1
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
         : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        }
          , i = e("web-audio-player")
          , a = e("audio-frequency-to-index")
          , s = e("ios-safe-audio-context")
          , u = e("beats")
          , c = e("events").EventEmitter
          , l = e("new-array")
          , f = e("soundbank-reverb")
          , p = e("path")
          , d = e("./log")
          , h = 2
          , v = r()
          , m = ["01_-_Matter", "02_-_Now_Be_The_Light", "03_-_Entrance", "04_-_I_Am_You", "05_-_Skin", "06_-_Anthem", "07_-_Lipstick", "08_-_Softcore", "09_-_Starfilter_Fur_Alina"]
          , E = [[[40, 55], [40, 55]], [[145, 5e3], [145, 5e3]], [[510, 535], [20, 50]], [[35, 55], [35, 55]], [[30, 55], [30, 50]], [[1200, 2e3], [20, 50]], [[50, 80], [16800, 2e4]], [[10, 150], [10, 150]], [[0, 0], [450, 4500]]]
          , y = m.map(function(e) {
            return "music/" + e
        }).map(function(e) {
            var t = [e + ".mp3"];
            return v && t.unshift({
                src: e + "_Dolby.mp4"
            }),
            t
        });
        t.exports = function() {
            function e() {
                w++
            }
            function t() {
                "suspended" === T.state && "function" == typeof T.resume && T.resume()
            }
            function n(e) {
                if (S) {
                    var t = f(T);
                    return t.time = 4.5,
                    t.wet.value = 0,
                    t.dry.value = 1,
                    t.filterType = "highpass",
                    t.cutoff.value = 200,
                    t.connect(e),
                    t
                }
                var n = function() {
                    var t = T.createGain()
                      , n = T.createGain()
                      , r = T.createGain()
                      , o = T.createBiquadFilter();
                    return t.connect(n),
                    t.connect(r),
                    o.type = "lowpass",
                    o.frequency.value = 1e3,
                    n.connect(e),
                    r.connect(o),
                    o.connect(e),
                    Object.defineProperties(t, {
                        wet: {
                            get: function() {
                                return r.gain
                            }
                        },
                        dry: {
                            get: function() {
                                return n.gain
                            }
                        }
                    }),
                    t.wet.value = 0,
                    t.dry.value = 1,
                    {
                        v: t
                    }
                }();
                return "object" === ("undefined" == typeof n ? "undefined" : o(n)) ? n.v : void 0
            }
            function r(e) {
                I && (_.getByteTimeDomainData(M),
                L.beats = I.detectBeats(M),
                m() || (U = !0),
                N && F())
            }
            function m() {
                for (var e = M[0], t = 0; t < M.length; t++)
                    if (M[t] !== e)
                        return !0;
                return !1
            }
            function g() {
                U && (U = !1,
                N = !0)
            }
            function F() {
                for (var e = 0; e < M.length; e++)
                    M[e] = 127
            }
            function C() {
                if (j)
                    return W;
                j = !0;
                var e = w++ % y.length
                  , t = y[e]
                  , n = E[e]
                  , r = "string" == typeof t[0] ? t[0] : t[0].src;
                return B(t, n, function(e) {
                    H = e,
                    j = !1,
                    L.emit("ready")
                }),
                W = p.basename(r, p.extname(r)),
                window.ga && window.ga("send", "event", "audio", "queue", W),
                W = W.replace(/\_Dolby/i, ""),
                W = W.replace(/\_/g, " "),
                W = W.replace("Interlude", " (Interlude)"),
                W = W.replace("Fur Alina", "(Für Alina)"),
                W.trim()
            }
            function A() {
                if (!z) {
                    if (j)
                        return D(),
                        z = !0,
                        void L.once("ready", function() {
                            z = !1,
                            A()
                        });
                    D(),
                    U = !1,
                    N = !1,
                    H.play(),
                    I = H,
                    G && clearTimeout(G),
                    G = setTimeout(g, V)
                }
            }
            function D() {
                if (I) {
                    x[I.urlKey] = I.element.currentTime,
                    I.stop();
                    for (var e = [], t = I.element; t.firstChild; )
                        e.push(t.firstChild),
                        t.removeChild(t.firstChild);
                    I.lastSources = e,
                    I.element.load(),
                    I.node.disconnect()
                }
            }
            function B(e, n, r) {
                if (!q) {
                    Array.isArray(e) || (e = [e]);
                    var o = "string" == typeof e[0] ? e[0] : e[0].src;
                    q = !0,
                    t();
                    var s = i(e, {
                        loop: !0,
                        buffer: !1,
                        context: T
                    });
                    b[o] = s,
                    s.urlKey = o,
                    s.on("error", function(e) {
                        console.error(e)
                    });
                    var c = n.map(function(e) {
                        return {
                            lo: a(e[0], k, P),
                            hi: a(e[1], k, P),
                            threshold: 100,
                            decay: .001
                        }
                    });
                    return s.detectBeats = u(c),
                    s.on("decoding", function() {}),
                    s.on("load", function() {
                        o in x && (s.element.currentTime = x[o]),
                        r(s),
                        q = !1
                    }),
                    s.node.connect(_),
                    s
                }
            }
            v && d("Dolby Digital Plus supported!");
            var b = {}
              , x = {}
              , w = 0
              , T = s();
            setTimeout(function() {
                return t()
            }, 1e3);
            var _ = T.createAnalyser()
              , M = new Uint8Array(_.frequencyBinCount)
              , S = T.sampleRate <= 96e3
              , R = n(T.destination);
            _.connect(R);
            var k = T.sampleRate
              , P = _.frequencyBinCount
              , O = 0
              , L = new c
              , q = !1
              , j = !1
              , z = !1
              , H = void 0
              , I = void 0
              , U = !1
              , G = null 
              , N = !1
              , W = void 0
              , V = 3e3;
            return Object.defineProperty(L, "effect", {
                get: function() {
                    return O
                },
                set: function(e) {
                    O = e,
                    R.wet.value = e,
                    R.dry.value = 1 - e
                }
            }),
            L.update = r,
            L.binCount = h,
            L.beats = l(h, 0),
            L.queue = C,
            L.playQueued = A,
            L.skip = e,
            L
        }
    }
    , {
        "./log": 12,
        "audio-frequency-to-index": 17,
        beats: 18,
        events: 19,
        "ios-safe-audio-context": 33,
        "new-array": 34,
        path: 20,
        "soundbank-reverb": 68,
        "web-audio-player": 124
    }],
    6: [function(e, t, n) {
        t.exports = [["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"], ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B"], ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A"], ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"], ["#774F38", "#E08E79", "#F1D4AF", "#ECE5CE", "#C5E0DC"], ["#E8DDCB", "#CDB380", "#036564", "#033649", "#031634"], ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F"], ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2"], ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951"], ["#E94E77", "#D68189", "#C6A49A", "#C6E5D9", "#F4EAD5"], ["#D9CEB2", "#948C75", "#D5DED9", "#7A6A53", "#99B2B7"], ["#FFFFFF", "#CBE86B", "#F2E9E1", "#1C140D", "#CBE86B"], ["#EFFFCD", "#DCE9BE", "#555152", "#2E2633", "#99173C"], ["#3FB8AF", "#7FC7AF", "#DAD8A7", "#FF9E9D", "#FF3D7F"], ["#343838", "#005F6B", "#008C9E", "#00B4CC", "#00DFFC"], ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE"], ["#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#2A363B"], ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4"], ["#554236", "#F77825", "#D3CE3D", "#F1EFA5", "#60B99A"], ["#351330", "#424254", "#64908A", "#E8CAA4", "#CC2A41"], ["#00A8C6", "#40C0CB", "#F9F2E7", "#AEE239", "#8FBE00"], ["#FF4242", "#F4FAD2", "#D4EE5E", "#E1EDB9", "#F0F2EB"], ["#655643", "#80BCA3", "#F6F7BD", "#E6AC27", "#BF4D28"], ["#8C2318", "#5E8C6A", "#88A65E", "#BFB35A", "#F2C45A"], ["#FAD089", "#FF9C5B", "#F5634A", "#ED303C", "#3B8183"], ["#BCBDAC", "#CFBE27", "#F27435", "#F02475", "#3B2D38"], ["#D1E751", "#FFFFFF", "#000000", "#4DBCE9", "#26ADE4"], ["#FF9900", "#424242", "#E9E9E9", "#BCBCBC", "#3299BB"], ["#5D4157", "#838689", "#A8CABA", "#CAD7B2", "#EBE3AA"], ["#5E412F", "#FCEBB6", "#78C0A8", "#F07818", "#F0A830"], ["#EEE6AB", "#C5BC8E", "#696758", "#45484B", "#36393B"], ["#1B676B", "#519548", "#88C425", "#BEF202", "#EAFDE6"], ["#F8B195", "#F67280", "#C06C84", "#6C5B7B", "#355C7D"], ["#452632", "#91204D", "#E4844A", "#E8BF56", "#E2F7CE"], ["#F04155", "#FF823A", "#F2F26F", "#FFF7BD", "#95CFB7"], ["#F0D8A8", "#3D1C00", "#86B8B1", "#F2D694", "#FA2A00"], ["#2A044A", "#0B2E59", "#0D6759", "#7AB317", "#A0C55F"], ["#67917A", "#170409", "#B8AF03", "#CCBF82", "#E33258"], ["#B9D7D9", "#668284", "#2A2829", "#493736", "#7B3B3B"], ["#BBBB88", "#CCC68D", "#EEDD99", "#EEC290", "#EEAA88"], ["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"], ["#E8D5B7", "#0E2430", "#FC3A51", "#F5B349", "#E8D5B9"], ["#B3CC57", "#ECF081", "#FFBE40", "#EF746F", "#AB3E5B"], ["#AB526B", "#BCA297", "#C5CEAE", "#F0E2A4", "#F4EBC3"], ["#607848", "#789048", "#C0D860", "#F0F0D8", "#604848"], ["#515151", "#FFFFFF", "#00B4FF", "#EEEEEE"], ["#3E4147", "#FFFEDF", "#DFBA69", "#5A2E2E", "#2A2C31"], ["#300030", "#480048", "#601848", "#C04848", "#F07241"], ["#1C2130", "#028F76", "#B3E099", "#FFEAAD", "#D14334"], ["#A8E6CE", "#DCEDC2", "#FFD3B5", "#FFAAA6", "#FF8C94"], ["#EDEBE6", "#D6E1C7", "#94C7B6", "#403B33", "#D3643B"], ["#FDF1CC", "#C6D6B8", "#987F69", "#E3AD40", "#FCD036"], ["#AAB3AB", "#C4CBB7", "#EBEFC9", "#EEE0B7", "#E8CAAF"], ["#CC0C39", "#E6781E", "#C8CF02", "#F8FCC1", "#1693A7"], ["#3A111C", "#574951", "#83988E", "#BCDEA5", "#E6F9BC"], ["#FC354C", "#29221F", "#13747D", "#0ABFBC", "#FCF7C5"], ["#B9D3B0", "#81BDA4", "#B28774", "#F88F79", "#F6AA93"], ["#5E3929", "#CD8C52", "#B7D1A3", "#DEE8BE", "#FCF7D3"], ["#230F2B", "#F21D41", "#EBEBBC", "#BCE3C5", "#82B3AE"], ["#5C323E", "#A82743", "#E15E32", "#C0D23E", "#E5F04C"], ["#4E395D", "#827085", "#8EBE94", "#CCFC8E", "#DC5B3E"], ["#DAD6CA", "#1BB0CE", "#4F8699", "#6A5E72", "#563444"], ["#C2412D", "#D1AA34", "#A7A844", "#A46583", "#5A1E4A"], ["#D1313D", "#E5625C", "#F9BF76", "#8EB2C5", "#615375"], ["#9D7E79", "#CCAC95", "#9A947C", "#748B83", "#5B756C"], ["#1C0113", "#6B0103", "#A30006", "#C21A01", "#F03C02"], ["#8DCCAD", "#988864", "#FEA6A2", "#F9D6AC", "#FFE9AF"], ["#CFFFDD", "#B4DEC1", "#5C5863", "#A85163", "#FF1F4C"], ["#75616B", "#BFCFF7", "#DCE4F7", "#F8F3BF", "#D34017"], ["#382F32", "#FFEAF2", "#FCD9E5", "#FBC5D8", "#F1396D"], ["#B6D8C0", "#C8D9BF", "#DADABD", "#ECDBBC", "#FEDCBA"], ["#E3DFBA", "#C8D6BF", "#93CCC6", "#6CBDB5", "#1A1F1E"], ["#A7C5BD", "#E5DDCB", "#EB7B59", "#CF4647", "#524656"], ["#9DC9AC", "#FFFEC7", "#F56218", "#FF9D2E", "#919167"], ["#413D3D", "#040004", "#C8FF00", "#FA023C", "#4B000F"], ["#EDF6EE", "#D1C089", "#B3204D", "#412E28", "#151101"], ["#A8A7A7", "#CC527A", "#E8175D", "#474747", "#363636"], ["#7E5686", "#A5AAD9", "#E8F9A2", "#F8A13F", "#BA3C3D"], ["#FFEDBF", "#F7803C", "#F54828", "#2E0D23", "#F8E4C1"], ["#C1B398", "#605951", "#FBEEC2", "#61A6AB", "#ACCEC0"], ["#5E9FA3", "#DCD1B4", "#FAB87F", "#F87E7B", "#B05574"], ["#951F2B", "#F5F4D7", "#E0DFB1", "#A5A36C", "#535233"], ["#FFFBB7", "#A6F6AF", "#66B6AB", "#5B7C8D", "#4F2958"], ["#000000", "#9F111B", "#B11623", "#292C37", "#CCCCCC"], ["#9CDDC8", "#BFD8AD", "#DDD9AB", "#F7AF63", "#633D2E"], ["#EFF3CD", "#B2D5BA", "#61ADA0", "#248F8D", "#605063"], ["#84B295", "#ECCF8D", "#BB8138", "#AC2005", "#2C1507"], ["#FCFEF5", "#E9FFE1", "#CDCFB7", "#D6E6C3", "#FAFBE3"], ["#0CA5B0", "#4E3F30", "#FEFEEB", "#F8F4E4", "#A5B3AA"], ["#4D3B3B", "#DE6262", "#FFB88C", "#FFD0B3", "#F5E0D3"], ["#B5AC01", "#ECBA09", "#E86E1C", "#D41E45", "#1B1521"], ["#379F7A", "#78AE62", "#BBB749", "#E0FBAC", "#1F1C0D"], ["#FFE181", "#EEE9E5", "#FAD3B2", "#FFBA7F", "#FF9C97"], ["#4E4D4A", "#353432", "#94BA65", "#2790B0", "#2B4E72"], ["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"], ["#30261C", "#403831", "#36544F", "#1F5F61", "#0B8185"], ["#2D2D29", "#215A6D", "#3CA2A2", "#92C7A3", "#DFECE6"], ["#F38A8A", "#55443D", "#A0CAB5", "#CDE9CA", "#F1EDD0"], ["#793A57", "#4D3339", "#8C873E", "#D1C5A5", "#A38A5F"], ["#11766D", "#410936", "#A40B54", "#E46F0A", "#F0B300"], ["#AAFF00", "#FFAA00", "#FF00AA", "#AA00FF", "#00AAFF"], ["#C75233", "#C78933", "#D6CEAA", "#79B5AC", "#5E2F46"], ["#F8EDD1", "#D88A8A", "#474843", "#9D9D93", "#C5CFC6"], ["#6DA67A", "#77B885", "#86C28B", "#859987", "#4A4857"], ["#1B325F", "#9CC4E4", "#E9F2F9", "#3A89C9", "#F26C4F"], ["#BED6C7", "#ADC0B4", "#8A7E66", "#A79B83", "#BBB2A1"], ["#046D8B", "#309292", "#2FB8AC", "#93A42A", "#ECBE13"], ["#82837E", "#94B053", "#BDEB07", "#BFFA37", "#E0E0E0"], ["#312736", "#D4838F", "#D6ABB1", "#D9D9D9", "#C4FFEB"], ["#E5EAA4", "#A8C4A2", "#69A5A4", "#616382", "#66245B"], ["#6DA67A", "#99A66D", "#A9BD68", "#B5CC6A", "#C0DE5D"], ["#395A4F", "#432330", "#853C43", "#F25C5E", "#FFA566"], ["#331327", "#991766", "#D90F5A", "#F34739", "#FF6E27"], ["#FDFFD9", "#FFF0B8", "#FFD6A3", "#FAAD8E", "#142F30"], ["#E21B5A", "#9E0C39", "#333333", "#FBFFE3", "#83A300"], ["#FBC599", "#CDBB93", "#9EAE8A", "#335650", "#F35F55"], ["#C7FCD7", "#D9D5A7", "#D9AB91", "#E6867A", "#ED4A6A"], ["#EC4401", "#CC9B25", "#13CD4A", "#7B6ED6", "#5E525C"], ["#BF496A", "#B39C82", "#B8C99D", "#F0D399", "#595151"], ["#FFEFD3", "#FFFEE4", "#D0ECEA", "#9FD6D2", "#8B7A5E"], ["#F1396D", "#FD6081", "#F3FFEB", "#ACC95F", "#8F9924"], ["#F6F6F6", "#E8E8E8", "#333333", "#990100", "#B90504"], ["#261C21", "#6E1E62", "#B0254F", "#DE4126", "#EB9605"], ["#E9E0D1", "#91A398", "#33605A", "#070001", "#68462B"], ["#F2E3C6", "#FFC6A5", "#E6324B", "#2B2B2B", "#353634"], ["#FFAB07", "#E9D558", "#72AD75", "#0E8D94", "#434D53"], ["#59B390", "#F0DDAA", "#E47C5D", "#E32D40", "#152B3C"], ["#FDE6BD", "#A1C5AB", "#F4DD51", "#D11E48", "#632F53"], ["#E4E4C5", "#B9D48B", "#8D2036", "#CE0A31", "#D3E4C5"], ["#512B52", "#635274", "#7BB0A8", "#A7DBAB", "#E4F5B1"], ["#805841", "#DCF7F3", "#FFFCDD", "#FFD8D8", "#F5A2A2"], ["#E65540", "#F8ECC2", "#65A8A6", "#79896D"], ["#CAFF42", "#EBF7F8", "#D0E0EB", "#88ABC2", "#49708A"], ["#595643", "#4E6B66", "#ED834E", "#EBCC6E", "#EBE1C5"], ["#E4DED0", "#ABCCBD", "#7DBEB8", "#181619", "#E32F21"], ["#058789", "#503D2E", "#D54B1A", "#E3A72F", "#F0ECC9"], ["#FF003C", "#FF8A00", "#FABE28", "#88C100", "#00C176"], ["#311D39", "#67434F", "#9B8E7E", "#C3CCAF", "#A51A41"], ["#EFD9B4", "#D6A692", "#A39081", "#4D6160", "#292522"], ["#C6CCA5", "#8AB8A8", "#6B9997", "#54787D", "#615145"], ["#CC5D4C", "#FFFEC6", "#C7D1AF", "#96B49C", "#5B5847"], ["#111625", "#341931", "#571B3C", "#7A1E48", "#9D2053"], ["#EFEECC", "#FE8B05", "#FE0557", "#400403", "#0AABBA"], ["#CCF390", "#E0E05A", "#F7C41F", "#FC930A", "#FF003D"], ["#73C8A9", "#DEE1B6", "#E1B866", "#BD5532", "#373B44"], ["#79254A", "#795C64", "#79927D", "#AEB18E", "#E3CF9E"], ["#E0EFF1", "#7DB4B5", "#FFFFFF", "#680148", "#000000"], ["#F06D61", "#DA825F", "#C4975C", "#A8AB7B", "#8CBF99"], ["#2D1B33", "#F36A71", "#EE887A", "#E4E391", "#9ABC8A"], ["#2B2726", "#0A516D", "#018790", "#7DAD93", "#BACCA4"], ["#95A131", "#C8CD3B", "#F6F1DE", "#F5B9AE", "#EE0B5B"], ["#360745", "#D61C59", "#E7D84B", "#EFEAC5", "#1B8798"], ["#E3E8CD", "#BCD8BF", "#D3B9A3", "#EE9C92", "#FE857E"], ["#807462", "#A69785", "#B8FAFF", "#E8FDFF", "#665C49"], ["#4B1139", "#3B4058", "#2A6E78", "#7A907C", "#C9B180"], ["#FC284F", "#FF824A", "#FEA887", "#F6E7F7", "#D1D0D7"], ["#FFB884", "#F5DF98", "#FFF8D4", "#C0D1C2", "#2E4347"], ["#027B7F", "#FFA588", "#D62957", "#BF1E62", "#572E4F"], ["#80A8A8", "#909D9E", "#A88C8C", "#FF0D51", "#7A8C89"], ["#A69E80", "#E0BA9B", "#E7A97E", "#D28574", "#3B1922"], ["#A1DBB2", "#FEE5AD", "#FACA66", "#F7A541", "#F45D4C"], ["#641F5E", "#676077", "#65AC92", "#C2C092", "#EDD48E"], ["#FFF3DB", "#E7E4D5", "#D3C8B4", "#C84648", "#703E3B"], ["#F5DD9D", "#BCC499", "#92A68A", "#7B8F8A", "#506266"], ["#2B222C", "#5E4352", "#965D62", "#C7956D", "#F2D974"], ["#D4F7DC", "#DBE7B4", "#DBC092", "#E0846D", "#F51441"], ["#A32C28", "#1C090B", "#384030", "#7B8055", "#BCA875"], ["#85847E", "#AB6A6E", "#F7345B", "#353130", "#CBCFB4"], ["#E6B39A", "#E6CBA5", "#EDE3B4", "#8B9E9B", "#6D7578"], ["#11644D", "#A0B046", "#F2C94E", "#F78145", "#F24E4E"], ["#6D9788", "#1E2528", "#7E1C13", "#BF0A0D", "#E6E1C2"], ["#23192D", "#FD0A54", "#F57576", "#FEBF97", "#F5ECB7"], ["#EB9C4D", "#F2D680", "#F3FFCF", "#BAC9A9", "#697060"], ["#D3D5B0", "#B5CEA4", "#9DC19D", "#8C7C62", "#71443F"], ["#452E3C", "#FF3D5A", "#FFB969", "#EAF27E", "#3B8C88"], ["#041122", "#259073", "#7FDA89", "#C8E98E", "#E6F99D"], ["#B1E6D1", "#77B1A9", "#3D7B80", "#270A33", "#451A3E"], ["#9D9E94", "#C99E93", "#F59D92", "#E5B8AD", "#D5D2C8"], ["#FDCFBF", "#FEB89F", "#E23D75", "#5F0D3B", "#742365"], ["#540045", "#C60052", "#FF714B", "#EAFF87", "#ACFFE9"], ["#B7CBBF", "#8C886F", "#F9A799", "#F4BFAD", "#F5DABD"], ["#280904", "#680E34", "#9A151A", "#C21B12", "#FC4B2A"], ["#F0FFC9", "#A9DA88", "#62997A", "#72243D", "#3B0819"], ["#429398", "#6B5D4D", "#B0A18F", "#DFCDB4", "#FBEED3"], ["#E6EBA9", "#ABBB9F", "#6F8B94", "#706482", "#703D6F"], ["#A3C68C", "#879676", "#6E6662", "#4F364A", "#340735"], ["#44749D", "#C6D4E1", "#FFFFFF", "#EBE7E0", "#BDB8AD"], ["#322938", "#89A194", "#CFC89A", "#CC883A", "#A14016"], ["#CFB590", "#9E9A41", "#758918", "#564334", "#49281F"], ["#FA6A64", "#7A4E48", "#4A4031", "#F6E2BB", "#9EC6B8"], ["#1D1313", "#24B694", "#D22042", "#A3B808", "#30C4C9"], ["#F6D76B", "#FF9036", "#D6254D", "#FF5475", "#FDEBA9"], ["#E7EDEA", "#FFC52C", "#FB0C06", "#030D4F", "#CEECEF"], ["#373737", "#8DB986", "#ACCE91", "#BADB73", "#EFEAE4"], ["#161616", "#C94D65", "#E7C049", "#92B35A", "#1F6764"], ["#26251C", "#EB0A44", "#F2643D", "#F2A73D", "#A0E8B7"], ["#4B3E4D", "#1E8C93", "#DBD8A2", "#C4AC30", "#D74F33"], ["#8D7966", "#A8A39D", "#D8C8B8", "#E2DDD9", "#F8F1E9"], ["#F2E8C4", "#98D9B6", "#3EC9A7", "#2B879E", "#616668"], ["#5CACC4", "#8CD19D", "#CEE879", "#FCB653", "#FF5254"]]
    }
    , {}],
    7: [function(e, t, n) {
        "use strict";
        var r = e("three-simplicial-complex")(THREE)
          , o = e("unlerp");
        t.exports = function(e) {
            function t(e) {
                var t = void 0;
                if (d) {
                    var n = Math.atan2(e.z, e.x);
                    0 > n && (n += 2 * Math.PI),
                    t = n / (2 * Math.PI)
                } else
                    t = h === v ? 0 : o(h, v, e[f]);
                var r = m === E ? 0 : o(m, E, e[p]);
                return new THREE.Vector2(t,1 - r)
            }
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
              , i = n.type || 0
              , a = r(e);
            a.computeBoundingBox();
            var s = a.boundingBox
              , u = []
              , c = a.vertices
              , l = a.faces
              , f = "x"
              , p = 0 === i ? "y" : "z"
              , d = 0 === i
              , h = s.min[f]
              , v = s.max[f]
              , m = s.min[p]
              , E = s.max[p];
            return l.forEach(function(e, n) {
                var r = e.a
                  , o = e.b
                  , i = e.c
                  , a = c[r]
                  , s = c[o]
                  , l = c[i];
                u.push([t(a), t(s), t(l)])
            }),
            a.faceVertexUvs[0] = u,
            a.uvsNeedUpdate = !0,
            a.dynamic = !0,
            a
        }
    }
    , {
        "three-simplicial-complex": 74,
        unlerp: 123
    }],
    8: [function(e, t, n) {
        "use strict";
        var r = e("random-float")
          , o = e("geo-piecering")
          , i = e("geo-arc")
          , a = (e("array-shuffle"),
        e("./createComplex"))
          , s = Math.PI
          , u = e("tweenr")()
          , c = e("./isMobile")
          , l = [-12, -2]
          , f = [-10, 0]
          , p = l[0]
          , d = 4
          , h = c ? 60 : 100
          , v = 50;
        t.exports = function(e) {
            function t() {
                I.forEach(function(e) {
                    X.copy(w(e)),
                    e.material = j[Math.floor(Math.random() * j.length)].clone(),
                    x(e, X)
                })
            }
            function n() {
                I.forEach(function(e) {
                    e.active = !1,
                    e.visible = !1
                })
            }
            function c() {
                return R[z % R.length]
            }
            function m(e) {
                H.length = 0,
                U.length = 0,
                H = e.slice(),
                T(H.shift()),
                U = H.slice(),
                I.forEach(function(e) {
                    b(e)
                })
            }
            function E() {
                var e = (arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                R[z++ % R.length]);
                m(e)
            }
            function y() {
                for (var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = 0, n = 0; t < I.length && d > n; t++) {
                    var r = I[t];
                    r.active || e.type !== r.type && "undefined" != typeof e.type || (g(r),
                    n++)
                }
            }
            function g(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , n = t.initial ? f : l;
                e.position.y = r(n[0], n[1]),
                e.active = !0,
                e.visible = !0,
                e.material.uniforms && (e.material.uniforms.dance.value = Math.random() > .5 ? r(0, 1) : 0),
                b(e),
                t.animate !== !1 && !function() {
                    var t = 1e-10
                      , n = {
                        value: 0
                    };
                    e.scale.set(t, t, t),
                    u.to(n, {
                        duration: .5,
                        value: 1,
                        ease: "expoOut"
                    }).on("update", function() {
                        var t = n.value;
                        e.scale.set(t, t, t)
                    })
                }()
            }
            function F() {
                0 !== H.length && U.push(H.shift())
            }
            function C() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
                  , t = void 0;
                if (0 === e.type) {
                    var n = Math.floor(r(5, 40))
                      , a = r(.25, .75);
                    t = A(o({
                        y: 0,
                        height: r(.01, 1),
                        radius: r(.1, 1.5),
                        numPieces: n,
                        quadsPerPiece: 1,
                        pieceSize: 2 * s * 1 / n * a
                    }), e)
                } else if (1 === e.type) {
                    var u = r(0, 2);
                    t = A(i({
                        y: 0,
                        startRadian: r(-s, s),
                        endRadian: r(-s, s),
                        innerRadius: u,
                        outerRadius: u + r(.005, .15),
                        numBands: 2,
                        numSlices: 90
                    }), e)
                }
                return t && !e.active && (t.active = !1,
                t.visible = !1),
                t && (t.type = e.type),
                t
            }
            function A(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (0 === e.cells.length)
                    return null ;
                var n = a(e, t);
                if (n) {
                    var r = j[Math.floor(Math.random() * j.length)].clone()
                      , o = D(n, r, t);
                    return b(o),
                    o
                }
            }
            function D(e, t, n) {
                var o = new THREE.Mesh(e,t);
                if (n.mirror) {
                    for (var i = n.offset || 0, a = new THREE.Object3D, u = 4, c = 0; u > c; c++) {
                        var l = 2 * s * (c / u)
                          , p = o.clone();
                        p.position.x = Math.cos(l) * i,
                        p.position.z = Math.sin(l) * i,
                        a.add(p)
                    }
                    I.push(a),
                    o = a,
                    o.isGroup = !0
                } else
                    I.push(o);
                return o.boundingRegion = (new THREE.Box3).setFromObject(o),
                o.rotationFactor = r(-.5, .5),
                o.speed = r(.8, 1),
                o.active = !0,
                o.position.y = r(f[0], f[1]),
                S.add(o),
                o
            }
            function B() {
                return U[Math.floor(Math.random() * U.length)]
            }
            function b(e) {
                var t = e.material;
                t.color ? t.color.setStyle(B()) : t.uniforms.color.value.setStyle(B())
            }
            function x(e, t) {
                var n = e.material;
                n.color ? n.color.copy(t) : n.uniforms.color.value.copy(t)
            }
            function w(e) {
                var t = e.material;
                return t.color ? t.color : t.uniforms.color.value
            }
            function T(e) {
                _.setClearColor(e, 1),
                document.body.style.background = e
            }
            var _ = e.renderer
              , M = e.camera
              , S = e.scene
              , R = e.palettes
              , k = (e.envMap,
            e.loop)
              , P = new THREE.MeshBasicMaterial({
                wireframe: !0,
                transparent: !0,
                opacity: 1,
                side: THREE.DoubleSide
            })
              , O = new THREE.MeshBasicMaterial({
                opacity: 1,
                side: THREE.DoubleSide
            })
              , L = new THREE.RawShaderMaterial({
                opacity: 1,
                transparent: !0,
                uniforms: {
                    iGlobalTime: {
                        type: "f",
                        value: 0
                    },
                    aspect: {
                        type: "v2",
                        value: 1
                    },
                    color: {
                        type: "c",
                        value: new THREE.Color
                    },
                    dance: {
                        type: "f",
                        value: 0
                    }
                },
                vertexShader: "#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform float aspect;\nuniform float iGlobalTime;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform float dance;\n// varying vec2 vUv;\n\n#define PI 3.14\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n  // vUv = uv;\n  vec3 offset = vec3(0.0);\n  float p = uv.x * 2.0 - 1.0;\n\n  if (dance > 0.0) {\n    float nOff = snoise(vec3(position.y, iGlobalTime, p * mix(2.0, 5.0, dance)));\n    offset.y = 0.5 * nOff;\n  }\n\n  vec4 newPosition = vec4(position.xyz + offset.xyz, 1.0);\n  vec4 worldPos = modelViewMatrix * newPosition;\n  vec4 projected = projectionMatrix * worldPos;\n\n  //into NDC space [-1 .. 1]\n  // vec2 currentScreen = projected.xy / projected.w;\n\n  //correct for aspect ratio (screenWidth / screenHeight)\n  // currentScreen.x *= aspect;\n\n  // angle = (atan(-1.0 * currentScreen.y, currentScreen.x) + PI * 1.0) / (PI * 2.0);\n  gl_Position = projected;\n}\n",
                fragmentShader: "// #extension GL_OES_standard_derivatives : enable\nprecision mediump float;\n#define GLSLIFY 1\nuniform vec3 color;\n// varying vec2 vUv;\n// varying float angle;\n\n// #pragma glslify: aastep = require('glsl-aastep');\n\nvoid main () {\n  vec3 rgb = color;\n  // float pattern = sin(angle * 100.0) * 0.5 + 0.5;\n  // pattern = aastep(0.5, pattern);\n  gl_FragColor = vec4(rgb, 1.0);\n  // gl_FragColor.a *= pattern;\n  // if (gl_FragColor.a < 0.001) discard;\n}",
                side: THREE.DoubleSide
            })
              , q = L.clone();
            q.wireframe = !0;
            var j = [P, O, L, q]
              , z = 0
              , H = R[z].slice()
              , I = [];
            T(H.shift());
            for (var U = H.slice(), G = 0; h > G; G++) {
                var N = C({
                    active: v > G,
                    type: Math.random() > .5 ? 0 : 1
                });
                N && v > G && g(N, {
                    initial: !0,
                    animate: !1
                })
            }
            var W = 0
              , V = new THREE.Vector3
              , X = new THREE.Color;
            V.copy(M.position),
            M.localToWorld(V),
            k.on("tick", function(e) {
                W += e / 1e3,
                I.forEach(function(t) {
                    t.material.uniforms && (t.material.uniforms.aspect.value = window.innerWidth / window.innerHeight,
                    t.material.uniforms.iGlobalTime.value = W),
                    t.rotation.y += e / 1e3 * t.rotationFactor,
                    t.position.y += e / 1e3 * t.speed * Q.globalSpeed,
                    t.isGroup && t.children.forEach(function(t) {
                        t.rotation.x += e / 1e3
                    });
                    var n = t.boundingRegion.max.y - t.boundingRegion.min.y;
                    t.active && (t.position.y > 2 * n + V.y + 5 || t.position.y < p - 2 * n) && (t.active = !1,
                    t.visible = !1)
                })
            });
            var Q = {
                nextGeometry: y,
                nextColor: F,
                nextPalette: E,
                getFullPalette: c,
                setPalette: m,
                randomizeMaterials: t,
                globalSpeed: 1,
                clearGeometry: n
            };
            return Q
        }
    }
    , {
        "./createComplex": 7,
        "./isMobile": 11,
        "array-shuffle": 16,
        "geo-arc": 29,
        "geo-piecering": 30,
        "random-float": 65,
        tweenr: 76
    }],
    9: [function(e, t, n) {
        t.exports = [["#300030", "#480048", "#601848", "#C04848", "#F07241"], ["#E8DDCB", "#CDB380", "#036564", "#033649", "#031634"], ["#343838", "#005F6B", "#008C9E", "#00B4CC", "#00DFFC"], ["#B9D7D9", "#668284", "#2A2829", "#493736", "#7B3B3B"], ["#F0D8A8", "#3D1C00", "#86B8B1", "#F2D694", "#FA2A00"], ["#5D4157", "#838689", "#A8CABA", "#CAD7B2", "#EBE3AA"], ["#351330", "#424254", "#64908A", "#E8CAA4", "#CC2A41"], ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE"], ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B"], ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F"], ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951"]]
    }
    , {}],
    10: [function(e, t, n) {
        "use strict";
        var r = e("tweenr")()
          , o = e("dom-css")
          , i = e("./isMobile")
          , a = function() {}
        ;
        t.exports = function() {
            function e() {
                u(T, {
                    delay: _ + .5
                }, function() {
                    c(T, {
                        delay: B
                    }, function() {
                        t()
                    })
                })
            }
            function t() {
                u(m),
                x.enable(),
                x.once("start", function() {
                    s(),
                    c(m, {}, function() {
                        b || (w = setTimeout(function() {
                            u(E)
                        }, 650))
                    })
                }),
                x.once("stop", function() {
                    b = !0,
                    c(E),
                    n()
                })
            }
            function n() {
                w && clearTimeout(w),
                F.style.display = "none",
                s(),
                d()
            }
            function s() {
                D.forEach(function(e) {
                    e.style.display = "none"
                })
            }
            function u(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , n = arguments.length <= 2 || void 0 === arguments[2] ? a : arguments[2]
                  , o = t.delay || 0;
                e.style.display = "block";
                var i = "number" == typeof t.duration ? t.duration : A
                  , s = f(e, t);
                s.forEach(function(e, t) {
                    var a = {
                        opacity: 0,
                        yOff: C,
                        element: e
                    };
                    l({
                        target: a
                    });
                    var u = r.to(a, {
                        delay: o,
                        opacity: 1,
                        duration: i,
                        ease: "quadOut"
                    }).on("update", l);
                    r.to(a, {
                        delay: o,
                        yOff: 0,
                        duration: .5 * i,
                        ease: "expoOut"
                    }),
                    o += .1,
                    t === s.length - 1 && u.on("complete", n)
                })
            }
            function c(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , n = arguments.length <= 2 || void 0 === arguments[2] ? a : arguments[2]
                  , o = t.delay || 0
                  , i = "number" == typeof t.duration ? t.duration : A
                  , s = f(e, t);
                s.reverse(),
                s.forEach(function(t, a) {
                    var u = {
                        opacity: 1,
                        yOff: 0,
                        element: t
                    };
                    l({
                        target: u
                    }),
                    r.to(u, {
                        delay: o,
                        opacity: 0,
                        duration: .25 * i,
                        ease: "quadOut"
                    });
                    var c = r.to(u, {
                        delay: o,
                        yOff: C,
                        duration: .5 * i,
                        ease: "expoOut"
                    }).on("update", l);
                    o += .075,
                    a === s.length - 1 && c.on("complete", function() {
                        e.style.display = "none",
                        n()
                    })
                })
            }
            function l(e) {
                var t = e.target;
                o(t.element, {
                    transform: "translateY(" + t.yOff + "px)",
                    opacity: t.opacity
                })
            }
            function f(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , n = Array.prototype.slice.call(e.querySelectorAll(t.childTagName || "p"));
                return 0 === n.length && n.push(e),
                n
            }
            var p = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , d = arguments.length <= 1 || void 0 === arguments[1] ? a : arguments[1]
              , h = document.querySelector(".intro-1a")
              , v = document.querySelector(".intro-1b")
              , m = document.querySelector(".intro-2")
              , E = document.querySelector(".intro-3")
              , y = document.querySelector(".header-container")
              , g = document.querySelector(".logo-container")
              , F = document.querySelector("#intro")
              , C = 10
              , A = .25
              , D = [y, g].filter(Boolean)
              , B = 3.5
              , b = !1
              , x = p.interactions
              , w = null 
              , T = i ? h : v;
            i && (m.innerHTML = '<span class="spacebar">tap</span> and hold to load a new track',
            E.innerHTML = 'Release <span class="spacebar">tap</span> to play');
            var _ = 0;
            u(y, {
                childTagName: "div"
            }),
            e()
        }
    }
    , {
        "./isMobile": 11,
        "dom-css": 23,
        tweenr: 76
    }],
    11: [function(e, t, n) {
        "use strict";
        t.exports = /(Android|iPhone|iPod|iPad)/i.test(navigator.userAgent)
    }
    , {}],
    12: [function(e, t, n) {
        "use strict";
        var r = 'font-family: "NotoSans", "Helvetica", sans-serif;'
          , o = "Pilotpriest";
        t.exports = function(e) {
            console.log("%c" + e, r)
        }
        ,
        t.exports.intro = function(e) {
            console.log(["%c🎹 audiograph.xyz", "%c		Created by Matt DesLauriers (%chttp://twitter.com/mattdesl/%c)", "%c		Audio by " + o, "%c		Color palettes sourced from ColourLovers.com", "%c		With UX help from Melissa Hernandez"].join("\n"), r + " background: #efefef; padding: 1px 5px;", r, r + " color: #3aa3e0;", r, r, r, r)
        }
        ,
        t.exports.easterEgg = function() {}
    }
    , {}],
    13: [function(e, t, n) {
        "use strict";
        var r = e("array-shuffle")
          , o = e("index-of-array")
          , i = e("./color-palettes.json").slice(0, 200)
          , a = e("./intro-palettes.json");
        t.exports = function() {
            var e = r(a)[0]
              , t = r(i)
              , n = o(t, e);
            return -1 !== n && t.splice(n, 1),
            t.unshift(e),
            t
        }
    }
    , {
        "./color-palettes.json": 6,
        "./intro-palettes.json": 9,
        "array-shuffle": 16,
        "index-of-array": 31
    }],
    14: [function(e, t, n) {
        "use strict";
        var r = e("events").EventEmitter
          , o = e("./isMobile")
          , i = e("./log");
        t.exports = function(e) {
            function t() {
                if (i.easterEgg(),
                window.addEventListener("keydown", function(e) {
                    return 32 !== e.keyCode || d.keyDown ? void (67 === e.keyCode && !d.easterEggDown) : (n(),
                    !1)
                }),
                window.addEventListener("keyup", function(e) {
                    return 32 === e.keyCode && d.keyDown ? (a(),
                    !1) : void (67 === e.keyCode && d.easterEggDown)
                }),
                o) {
                    var e = document.querySelector("#canvas");
                    e.addEventListener("touchstart", n),
                    e.addEventListener("touchend", a)
                }
            }
            function n() {
                d.emit("start"),
                p = f.getFullPalette(),
                f.setPalette(u),
                d.keyDown = !0,
                h = !1,
                c.once("ready", function() {
                    h = !0
                });
                var e = c.queue();
                s(e),
                c.effect = 1,
                f.globalSpeed = .75,
                l.position[1] = -1
            }
            function a() {
                d.keyDown = !1,
                s(null ),
                f.setPalette(p),
                c.playQueued(),
                c.effect = 0,
                l.position[1] = 1,
                l.distance = v,
                f.globalSpeed = 1,
                f.nextPalette(),
                d.emit("stop", h)
            }
            function s(e) {
                if (!e)
                    return void (m.style.display = "none");
                m.style.display = "table";
                var t = e.split("-").map(function(e) {
                    return e.trim()
                });
                y.textContent = "next track",
                E.textContent = t[1]
            }
            var u = (e.scene,
            e.whitePalette)
              , c = e.audio
              , l = (e.camera,
            e.controls)
              , f = e.geo
              , p = f.getFullPalette()
              , d = new r;
            d.keyDown = !1,
            d.easterEggDown = !1,
            d.enable = t;
            var h = !1
              , v = l.distance
              , m = document.querySelector(".track-aligner")
              , E = document.querySelector(".track-name")
              , y = document.querySelector(".track-number");
            return d
        }
    }
    , {
        "./isMobile": 11,
        "./log": 12,
        events: 19
    }],
    15: [function(e, t, n) {
        "use strict";
        t.exports = {
            uniforms: {
                tDiffuse: {
                    type: "t",
                    value: null 
                },
                tDepth: {
                    type: "t",
                    value: null 
                },
                resolution: {
                    type: "v2",
                    value: new THREE.Vector2(512,512)
                },
                cameraNear: {
                    type: "f",
                    value: 1
                },
                cameraFar: {
                    type: "f",
                    value: 100
                },
                onlyAO: {
                    type: "i",
                    value: 0
                },
                aoClamp: {
                    type: "f",
                    value: .5
                },
                lumInfluence: {
                    type: "f",
                    value: .5
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform float cameraNear;", "uniform float cameraFar;", "uniform bool onlyAO;", "uniform vec2 resolution;", "uniform float aoClamp;", "uniform float lumInfluence;", "uniform sampler2D tDiffuse;", "uniform highp sampler2D tDepth;", "varying vec2 vUv;", "#define DL 2.399963229728653", "#define EULER 2.718281828459045", "const int samples = 4;", "const float radius = 5.0;", "const bool useNoise = false;", "const float noiseAmount = 0.0003;", "const float diffArea = 0.4;", "const float gDisplace = 0.4;", "highp vec2 rand( const vec2 coord ) {", "highp vec2 noise;", "if ( useNoise ) {", "float nx = dot ( coord, vec2( 12.9898, 78.233 ) );", "float ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );", "noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );", "} else {", "highp float ff = fract( 1.0 - coord.s * ( resolution.x / 2.0 ) );", "highp float gg = fract( coord.t * ( resolution.y / 2.0 ) );", "noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;", "}", "return ( noise * 2.0  - 1.0 ) * noiseAmount;", "}", "float readDepth( const in vec2 coord ) {", "float cameraFarPlusNear = cameraFar + cameraNear;", "float cameraFarMinusNear = cameraFar - cameraNear;", "float cameraCoef = 2.0 * cameraNear;", "return cameraCoef / ( cameraFarPlusNear - texture2D( tDepth, coord ).x * cameraFarMinusNear );", "}", "float compareDepths( const in float depth1, const in float depth2, inout int far ) {", "float garea = 2.0;", "float diff = ( depth1 - depth2 ) * 100.0;", "if ( diff < gDisplace ) {", "garea = diffArea;", "} else {", "far = 1;", "}", "float dd = diff - gDisplace;", "float gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );", "return gauss;", "}", "float calcAO( float depth, float dw, float dh ) {", "float dd = radius - depth * radius;", "vec2 vv = vec2( dw, dh );", "vec2 coord1 = vUv + dd * vv;", "vec2 coord2 = vUv - dd * vv;", "float temp1 = 0.0;", "float temp2 = 0.0;", "int far = 0;", "temp1 = compareDepths( depth, readDepth( coord1 ), far );", "if ( far > 0 ) {", "temp2 = compareDepths( readDepth( coord2 ), depth, far );", "temp1 += ( 1.0 - temp1 ) * temp2;", "}", "return temp1;", "}", "void main() {", "highp vec2 noise = rand( vUv );", "float depth = readDepth( vUv );", "float tt = clamp( depth, aoClamp, 1.0 );", "float w = ( 1.0 / resolution.x )  / tt + ( noise.x * ( 1.0 - noise.x ) );", "float h = ( 1.0 / resolution.y ) / tt + ( noise.y * ( 1.0 - noise.y ) );", "float ao = 0.0;", "float dz = 1.0 / float( samples );", "float z = 1.0 - dz / 2.0;", "float l = 0.0;", "for ( int i = 0; i <= samples; i ++ ) {", "float r = sqrt( 1.0 - z );", "float pw = cos( l ) * r;", "float ph = sin( l ) * r;", "ao += calcAO( depth, pw * w, ph * h );", "z = z - dz;", "l = l + DL;", "}", "ao /= float( samples );", "ao = 1.0 - ao;", "vec3 color = texture2D( tDiffuse, vUv ).rgb;", "vec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );", "float lum = dot( color.rgb, lumcoeff );", "vec3 luminance = vec3( lum );", "vec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );", "if ( onlyAO ) {", "final = vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );", "}", "gl_FragColor = vec4( final, 1.0 );", "}"].join("\n")
        }
    }
    , {}],
    16: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            if (!Array.isArray(e))
                throw new TypeError("Expected an array");
            for (var t, n, r = e.length, o = e.slice(); r; )
                t = Math.floor(Math.random() * r--),
                n = o[r],
                o[r] = o[t],
                o[t] = n;
            return o
        }
    }
    , {}],
    17: [function(e, t, n) {
        function r(e, t, n) {
            var r = t / 2
              , i = Math.round(e / r * n);
            return o(i, 0, n)
        }
        var o = e("clamp");
        t.exports = r
    }
    , {
        clamp: 22
    }],
    18: [function(e, t, n) {
        function r(e, t) {
            e = Array.isArray(e) ? e : [e];
            var n = e.map(o("threshold", 0))
              , r = e.map(o("threshold", 0))
              , u = e.map(o("decay", .005))
              , c = e.map(a(o("hi", 512)))
              , l = e.map(a(o("lo", 0)))
              , f = i(c, l)
              , p = e.length
              , d = new Float64Array(p)
              , h = new Uint8Array(p);
            t = t || 0,
            s(c, 'All "hi" keys must be numbers'),
            s(l, 'All "lo" keys must be numbers'),
            s(r, 'All "threshold" keys must be numbers'),
            s(u, 'All "decay" keys must be numbers');
            for (var v = 0; v < u.length; v += 1)
                u[v] = 1 - u[v];
            return function(e, o) {
                o = o || 1;
                for (var i = 0; p > i; i += 1) {
                    for (var a = 1 / f[i], s = c[i], v = l[i], m = 0, E = v; s > E; E += 1)
                        m += a * e[E];
                    d[i] += o,
                    d[i] > t && m > r[i] ? (h[i] = m,
                    d[i] = 0,
                    r[i] = m > n[i] ? m : r[i]) : h[i] = 0,
                    r[i] *= u[i]
                }
                return h
            }
        }
        function o(e, t) {
            return function(n) {
                return e in n ? n[e] : t
            }
        }
        function i(e, t) {
            for (var n = [], r = 0; r < e.length; r += 1)
                n[r] = e[r] - t[r];
            return n
        }
        function a(e) {
            return function(t) {
                return Math.round(e(t))
            }
        }
        function s(e, t) {
            for (var n = 0; n < e.length; n += 1)
                if ("number" != typeof e[n])
                    throw new Error(t);
            return e
        }
        t.exports = r
    }
    , {}],
    19: [function(e, t, n) {
        function r() {
            this._events = this._events || {},
            this._maxListeners = this._maxListeners || void 0
        }
        function o(e) {
            return "function" == typeof e
        }
        function i(e) {
            return "number" == typeof e
        }
        function a(e) {
            return "object" == typeof e && null  !== e
        }
        function s(e) {
            return void 0 === e
        }
        t.exports = r,
        r.EventEmitter = r,
        r.prototype._events = void 0,
        r.prototype._maxListeners = void 0,
        r.defaultMaxListeners = 10,
        r.prototype.setMaxListeners = function(e) {
            if (!i(e) || 0 > e || isNaN(e))
                throw TypeError("n must be a positive number");
            return this._maxListeners = e,
            this
        }
        ,
        r.prototype.emit = function(e) {
            var t, n, r, i, u, c;
            if (this._events || (this._events = {}),
            "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                if (t = arguments[1],
                t instanceof Error)
                    throw t;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (n = this._events[e],
            s(n))
                return !1;
            if (o(n))
                switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    i = Array.prototype.slice.call(arguments, 1),
                    n.apply(this, i)
                }
            else if (a(n))
                for (i = Array.prototype.slice.call(arguments, 1),
                c = n.slice(),
                r = c.length,
                u = 0; r > u; u++)
                    c[u].apply(this, i);
            return !0
        }
        ,
        r.prototype.addListener = function(e, t) {
            var n;
            if (!o(t))
                throw TypeError("listener must be a function");
            return this._events || (this._events = {}),
            this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t),
            this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
            a(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners,
            n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0,
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
            "function" == typeof console.trace && console.trace())),
            this
        }
        ,
        r.prototype.on = r.prototype.addListener,
        r.prototype.once = function(e, t) {
            function n() {
                this.removeListener(e, n),
                r || (r = !0,
                t.apply(this, arguments))
            }
            if (!o(t))
                throw TypeError("listener must be a function");
            var r = !1;
            return n.listener = t,
            this.on(e, n),
            this
        }
        ,
        r.prototype.removeListener = function(e, t) {
            var n, r, i, s;
            if (!o(t))
                throw TypeError("listener must be a function");
            if (!this._events || !this._events[e])
                return this;
            if (n = this._events[e],
            i = n.length,
            r = -1,
            n === t || o(n.listener) && n.listener === t)
                delete this._events[e],
                this._events.removeListener && this.emit("removeListener", e, t);
            else if (a(n)) {
                for (s = i; s-- > 0; )
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        r = s;
                        break
                    }
                if (0 > r)
                    return this;
                1 === n.length ? (n.length = 0,
                delete this._events[e]) : n.splice(r, 1),
                this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }
        ,
        r.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events)
                return this;
            if (!this._events.removeListener)
                return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                this;
            if (0 === arguments.length) {
                for (t in this._events)
                    "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"),
                this._events = {},
                this
            }
            if (n = this._events[e],
            o(n))
                this.removeListener(e, n);
            else if (n)
                for (; n.length; )
                    this.removeListener(e, n[n.length - 1]);
            return delete this._events[e],
            this
        }
        ,
        r.prototype.listeners = function(e) {
            var t;
            return t = this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }
        ,
        r.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (o(t))
                    return 1;
                if (t)
                    return t.length
            }
            return 0
        }
        ,
        r.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }
    , {}],
    20: [function(e, t, n) {
        (function(e) {
            function t(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var o = e[r];
                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1),
                    n++) : n && (e.splice(r, 1),
                    n--)
                }
                if (t)
                    for (; n--; n)
                        e.unshift("..");
                return e
            }
            function r(e, t) {
                if (e.filter)
                    return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++)
                    t(e[r], r, e) && n.push(e[r]);
                return n
            }
            var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
              , i = function(e) {
                return o.exec(e).slice(1)
            }
            ;
            n.resolve = function() {
                for (var n = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                    var a = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof a)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    a && (n = a + "/" + n,
                    o = "/" === a.charAt(0))
                }
                return n = t(r(n.split("/"), function(e) {
                    return !!e
                }), !o).join("/"),
                (o ? "/" : "") + n || "."
            }
            ,
            n.normalize = function(e) {
                var o = n.isAbsolute(e)
                  , i = "/" === a(e, -1);
                return e = t(r(e.split("/"), function(e) {
                    return !!e
                }), !o).join("/"),
                e || o || (e = "."),
                e && i && (e += "/"),
                (o ? "/" : "") + e
            }
            ,
            n.isAbsolute = function(e) {
                return "/" === e.charAt(0)
            }
            ,
            n.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return n.normalize(r(e, function(e, t) {
                    if ("string" != typeof e)
                        throw new TypeError("Arguments to path.join must be strings");
                    return e
                }).join("/"))
            }
            ,
            n.relative = function(e, t) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++)
                        ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                        ;
                    return t > n ? [] : e.slice(t, n - t + 1)
                }
                e = n.resolve(e).substr(1),
                t = n.resolve(t).substr(1);
                for (var o = r(e.split("/")), i = r(t.split("/")), a = Math.min(o.length, i.length), s = a, u = 0; a > u; u++)
                    if (o[u] !== i[u]) {
                        s = u;
                        break
                    }
                for (var c = [], u = s; u < o.length; u++)
                    c.push("..");
                return c = c.concat(i.slice(s)),
                c.join("/")
            }
            ,
            n.sep = "/",
            n.delimiter = ":",
            n.dirname = function(e) {
                var t = i(e)
                  , n = t[0]
                  , r = t[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)),
                n + r) : "."
            }
            ,
            n.basename = function(e, t) {
                var n = i(e)[2];
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
                n
            }
            ,
            n.extname = function(e) {
                return i(e)[3]
            }
            ;
            var a = "b" === "ab".substr(-1) ? function(e, t, n) {
                return e.substr(t, n)
            }
             : function(e, t, n) {
                return 0 > t && (t = e.length + t),
                e.substr(t, n)
            }
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 21
    }],
    21: [function(e, t, n) {
        function r() {
            l = !1,
            s.length ? c = s.concat(c) : f = -1,
            c.length && o()
        }
        function o() {
            if (!l) {
                var e = setTimeout(r);
                l = !0;
                for (var t = c.length; t; ) {
                    for (s = c,
                    c = []; ++f < t; )
                        s && s[f].run();
                    f = -1,
                    t = c.length
                }
                s = null ,
                l = !1,
                clearTimeout(e)
            }
        }
        function i(e, t) {
            this.fun = e,
            this.array = t
        }
        function a() {}
        var s, u = t.exports = {}, c = [], l = !1, f = -1;
        u.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new i(e,t)),
            1 !== c.length || l || setTimeout(o, 0)
        }
        ,
        i.prototype.run = function() {
            this.fun.apply(null , this.array)
        }
        ,
        u.title = "browser",
        u.browser = !0,
        u.env = {},
        u.argv = [],
        u.version = "",
        u.versions = {},
        u.on = a,
        u.addListener = a,
        u.once = a,
        u.off = a,
        u.removeListener = a,
        u.removeAllListeners = a,
        u.emit = a,
        u.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        u.cwd = function() {
            return "/"
        }
        ,
        u.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        u.umask = function() {
            return 0
        }
    }
    , {}],
    22: [function(e, t, n) {
        function r(e, t, n) {
            return n > t ? t > e ? t : e > n ? n : e : n > e ? n : e > t ? t : e
        }
        t.exports = r
    }
    , {}],
    23: [function(e, t, n) {
        function r(e, t, n) {
            var r = c[t];
            if ("undefined" == typeof r && (r = i(t)),
            r) {
                if (void 0 === n)
                    return e.style[r];
                e.style[r] = l(r, n)
            }
        }
        function o(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && r(e, n, t[n])
        }
        function i(e) {
            var t = u(e)
              , n = s(t);
            return c[t] = c[e] = c[n] = n,
            n
        }
        function a() {
            2 === arguments.length ? o(arguments[0], arguments[1]) : r(arguments[0], arguments[1], arguments[2])
        }
        var s = e("prefix-style")
          , u = e("to-camel-case")
          , c = {
            "float": "cssFloat"
        }
          , l = e("add-px-to-style");
        t.exports = a,
        t.exports.set = a,
        t.exports.get = function(e, t) {
            return Array.isArray(t) ? t.reduce(function(t, n) {
                return t[n] = r(e, n || ""),
                t
            }, {}) : r(e, t || "")
        }
    }
    , {
        "add-px-to-style": 24,
        "prefix-style": 25,
        "to-camel-case": 26
    }],
    24: [function(e, t, n) {
        var r = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        t.exports = function(e, t) {
            return "number" != typeof t || r[e] ? t : t + "px"
        }
    }
    , {}],
    25: [function(e, t, n) {
        var r = null 
          , o = ["Webkit", "Moz", "O", "ms"];
        t.exports = function(e) {
            r || (r = document.createElement("div"));
            var t = r.style;
            if (e in t)
                return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = o.length; i >= 0; i--) {
                var a = o[i] + n;
                if (a in t)
                    return a
            }
            return !1
        }
    }
    , {}],
    26: [function(e, t, n) {
        function r(e) {
            return o(e).replace(/\s(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        var o = e("to-space-case");
        t.exports = r
    }
    , {
        "to-space-case": 27
    }],
    27: [function(e, t, n) {
        function r(e) {
            return o(e).replace(/[\W_]+(.|$)/g, function(e, t) {
                return t ? " " + t : ""
            })
        }
        var o = e("to-no-case");
        t.exports = r
    }
    , {
        "to-no-case": 28
    }],
    28: [function(e, t, n) {
        function r(e) {
            return a.test(e) ? e.toLowerCase() : (u.test(e) && (e = o(e)),
            s.test(e) && (e = i(e)),
            e.toLowerCase())
        }
        function o(e) {
            return e.replace(c, function(e, t) {
                return t ? " " + t : ""
            })
        }
        function i(e) {
            return e.replace(l, function(e, t, n) {
                return t + " " + n.toLowerCase().split("").join(" ")
            })
        }
        t.exports = r;
        var a = /\s/
          , s = /[a-z][A-Z]/
          , u = /[\W_]/
          , c = /[\W_]+(.|$)/g
          , l = /(.)([A-Z]+)/g
    }
    , {}],
    29: [function(e, t, n) {
        function r(e) {
            var t = {
                positions: [],
                cells: [],
                uvs: []
            };
            return e = e || {},
            e.cellSize = e.cellSize || 3,
            e.x = e.x || 0,
            e.y = e.y || 0,
            e.z = e.z || 0,
            e.startRadian = e.startRadian || 0,
            e.endRadian = e.endRadian || 1.5 * Math.PI,
            e.innerRadius = "number" == typeof e.innerRadius ? e.innerRadius : 40,
            e.outerRadius = e.outerRadius || 200,
            e.numBands = e.numBands || 2,
            e.numSlices = e.numSlices || 40,
            e.drawOutline = void 0 !== e.drawOutline ? e.drawOutline : !0,
            o(e, t.positions, t.cells, t.uvs),
            t
        }
        function o(e, t, n, r) {
            for (var o, i, a, s, u, c, l, f = e, p = f.cellSize, d = f.endRadian - f.startRadian, h = Math.floor(Math.abs(d) / (2 * Math.PI) * f.numSlices), v = d / h, m = 1 == f.numBands ? 1 : f.numBands - 1, E = (f.outerRadius - f.innerRadius) / m, y = 0, g = h; g >= y; y++) {
                o = y * v + f.startRadian,
                l = (y - 1) * f.numBands,
                c = y * f.numBands;
                for (var F = 0, C = f.numBands; C > F; F++)
                    u = f.innerRadius + E * F,
                    i = Math.cos(o) * u + f.x,
                    a = f.y,
                    s = Math.sin(o) * u + f.z,
                    t.push([i, a, s]),
                    r.push([y / h, F / m]),
                    1 == p ? n.push([c + F]) : 2 == p ? y > 0 && C > F + 1 && (n.push([l + F, c + F]),
                    n.push([c + F + 1, l + F + 1]),
                    f.drawOutline || n.push([c + F, c + F + 1])) : 3 == p && y > 0 && C > F + 1 && (n.push([c + F, l + F + 1, l + F]),
                    n.push([c + F, c + F + 1, l + F + 1]))
            }
            if (2 == p && d % Math.PI * 2 != 0) {
                for (var F = 0, C = f.numBands - 1; C > F; F++)
                    n.push([c + F, c + F + 1]);
                c = 0;
                for (var F = 0, C = f.numBands - 1; C > F; F++)
                    n.push([c + F, c + F + 1])
            }
        }
        t.exports = r
    }
    , {}],
    30: [function(e, t, n) {
        function r(e) {
            var t = {
                positions: [],
                cells: []
            };
            return e = e || {},
            e.cellSize = e.cellSize || 3,
            e.x = e.x || 0,
            e.y = e.y || 0,
            e.z = e.z || 0,
            e.radius = e.radius || 200,
            e.pieceSize = e.pieceSize || .15 * Math.PI,
            e.startRadian = e.startRadian || 0,
            e.numPieces = e.numPieces || 8,
            e.quadsPerPiece = e.quadsPerPiece || 5,
            e.height = e.height || 10,
            e.drawOutline = void 0 === e.drawOutline ? !0 : e.drawOutline,
            o(e, t.positions, t.cells),
            t
        }
        function o(e, t, n) {
            for (var r, o, i, a, s, u, c = e, l = t, f = c.y, p = .5 * c.height, d = c.radius, h = c.pieceSize, v = c.numPieces, m = c.quadsPerPiece, E = c.startRadian, y = (2 * Math.PI - v * h) / v, g = h / m, F = 0, C = 0, A = 0; v > A; A++) {
                for (var D = 0; m > D; D++)
                    s = F + g * D + E,
                    u = F + g * (D + 1) + E,
                    r = Math.cos(s) * d + c.x,
                    o = Math.sin(s) * d + c.z,
                    i = Math.cos(u) * d + c.x,
                    a = Math.sin(u) * d + c.z,
                    l.push([r, f - p, o]),
                    l.push([r, f + p, o]),
                    l.push([i, f + p, a]),
                    l.push([i, f - p, a]),
                    1 == c.cellSize ? (n.push([C]),
                    n.push([C + 1]),
                    n.push([C + 2]),
                    n.push([C + 3])) : 2 == c.cellSize ? (c.drawOutline ? 0 === D ? n.push([C, C + 1]) : D == m - 1 && n.push([C + 2, C + 3]) : (n.push([C, C + 1]),
                    n.push([C + 2, C + 3])),
                    n.push([C + 1, C + 2]),
                    n.push([C + 3, C])) : 3 == c.cellSize && (n.push([C, C + 1, C + 2]),
                    n.push([C + 3, C, C + 2])),
                    C += 4;
                F += y + h
            }
        }
        t.exports = r
    }
    , {}],
    31: [function(e, t, n) {
        function r(e, t, n) {
            var r = e.length >>> 0;
            if (0 === r)
                return -1;
            var i = +n || 0;
            if (Math.abs(i) === 1 / 0 && (i = 0),
            i >= r)
                return -1;
            for (i = Math.max(i >= 0 ? i : r - Math.abs(i), 0); r > i; ) {
                if (o(e[i], t))
                    return i;
                i++
            }
            return -1
        }
        var o = e("array-equal");
        t.exports = r
    }
    , {
        "array-equal": 32
    }],
    32: [function(e, t, n) {
        t.exports = function(e, t) {
            var n = e.length;
            if (n !== t.length)
                return !1;
            for (var r = 0; n > r; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
    }
    , {}],
    33: [function(e, t, n) {
        function r(e) {
            var t = window.AudioContext || window.webkitAudioContext;
            e = "number" == typeof e ? e : 44100;
            var n = new t;
            if (/(iPhone|iPad)/i.test(navigator.userAgent) && n.sampleRate !== e) {
                var r = n.createBuffer(1, 1, e)
                  , o = n.createBufferSource();
                o.buffer = r,
                o.connect(n.destination),
                o.start(0),
                o.disconnect(),
                n.close(),
                n = new t
            }
            return n
        }
        t.exports = r
    }
    , {}],
    34: [function(e, t, n) {
        function r(e, t) {
            e = e || 0;
            for (var n = new Array(e), r = 0; e > r; r++)
                n[r] = t;
            return n
        }
        t.exports = r
    }
    , {}],
    35: [function(e, t, n) {
        "use strict";
        function r(e) {
            if (null  === e || void 0 === e)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        var o = Object.prototype.hasOwnProperty
          , i = Object.prototype.propertyIsEnumerable;
        t.exports = Object.assign || function(e, t) {
            for (var n, a, s = r(e), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var c in n)
                    o.call(n, c) && (s[c] = n[c]);
                if (Object.getOwnPropertySymbols) {
                    a = Object.getOwnPropertySymbols(n);
                    for (var l = 0; l < a.length; l++)
                        i.call(n, a[l]) && (s[a[l]] = n[a[l]])
                }
            }
            return s
        }
    }
    , {}],
    36: [function(e, t, n) {
        function r(e) {
            function t(e, t) {
                var n = 2 * Math.PI;
                E[0] -= n * e * C.rotateSpeed,
                E[1] -= n * t * C.rotateSpeed
            }
            function n(e) {
                E[2] += e * C.zoomSpeed
            }
            function r(e) {
                E[2] -= e * C.pinchSpeed
            }
            function h() {
                var e = C.up || f;
                u(g, e, f),
                c(F, g);
                var t = C.distance;
                l.subtract(y, C.position, C.target),
                l.transformQuat(y, y, g);
                var n = Math.atan2(y[0], y[2])
                  , r = Math.atan2(Math.sqrt(y[0] * y[0] + y[2] * y[2]), y[1]);
                n += E[0],
                r += E[1],
                n = a(n, C.thetaBounds[0], C.thetaBounds[1]),
                r = a(r, C.phiBounds[0], C.phiBounds[1]),
                r = a(r, p, Math.PI - p),
                t += E[2],
                t = a(t, C.distanceBounds[0], C.distanceBounds[1]);
                var i = Math.abs(t) <= p ? p : t;
                y[0] = i * Math.sin(r) * Math.sin(n),
                y[1] = i * Math.cos(r),
                y[2] = i * Math.sin(r) * Math.cos(n),
                C.phi = r,
                C.theta = n,
                C.distance = t,
                l.transformQuat(y, y, F),
                l.add(C.position, C.target, y),
                o(C.direction, e, C.position, C.target);
                for (var s = "number" == typeof C.damping ? C.damping : 1, d = 0; d < E.length; d++)
                    E[d] *= 1 - s
            }
            function v(e, t, n) {
                e && l.copy(e, C.position),
                t && l.copy(t, C.direction),
                n && l.copy(n, C.up)
            }
            function m() {
                var e = Math.max(p, C.distance);
                C.position[0] = e * Math.sin(C.phi) * Math.sin(C.theta),
                C.position[1] = e * Math.cos(C.phi),
                C.position[2] = e * Math.sin(C.phi) * Math.cos(C.theta),
                l.add(C.position, C.position, C.target)
            }
            e = e || {};
            var E = [0, 0, 0]
              , y = [0, 0, 0]
              , g = [0, 0, 0, 1]
              , F = g.slice()
              , C = {
                update: h,
                copyInto: v,
                position: e.position ? e.position.slice() : [0, 0, 1],
                direction: [0, 0, -1],
                up: e.up ? e.up.slice() : [0, 1, 0],
                target: e.target ? e.target.slice() : [0, 0, 0],
                phi: i(e.phi, Math.PI / 2),
                theta: e.theta || 0,
                distance: i(e.distance, 1),
                damping: i(e.damping, .25),
                rotateSpeed: i(e.rotateSpeed, .28),
                zoomSpeed: i(e.zoomSpeed, .0075),
                pinchSpeed: i(e.pinchSpeed, .0075),
                pinch: e.pinching !== !1,
                zoom: e.zoom !== !1,
                rotate: e.rotate !== !1,
                phiBounds: e.phiBounds || [0, Math.PI],
                thetaBounds: e.thetaBounds || [-(1 / 0), 1 / 0],
                distanceBounds: e.distanceBounds || [0, 1 / 0]
            };
            return "number" != typeof e.distance && (l.subtract(d, C.position, C.target),
            C.distance = l.length(d)),
            m(),
            s({
                parent: e.parent || window,
                element: e.element,
                rotate: e.rotate !== !1 ? t : null ,
                zoom: e.zoom !== !1 ? n : null ,
                pinch: e.pinch !== !1 ? r : null 
            }),
            C
        }
        function o(e, t, n, r) {
            l.copy(e, r),
            l.subtract(e, e, n),
            l.normalize(e, e)
        }
        var i = e("defined")
          , a = e("clamp")
          , s = e("./lib/input")
          , u = e("quat-from-unit-vec3")
          , c = e("gl-quat/invert")
          , l = {
            length: e("gl-vec3/length"),
            add: e("gl-vec3/add"),
            subtract: e("gl-vec3/subtract"),
            transformQuat: e("gl-vec3/transformQuat"),
            copy: e("gl-vec3/copy"),
            normalize: e("gl-vec3/normalize"),
            cross: e("gl-vec3/cross")
        }
          , f = [0, 1, 0]
          , p = Math.pow(2, -23)
          , d = [0, 0, 0];
        t.exports = r
    }
    , {
        "./lib/input": 37,
        clamp: 38,
        defined: 39,
        "gl-quat/invert": 40,
        "gl-vec3/add": 43,
        "gl-vec3/copy": 44,
        "gl-vec3/cross": 45,
        "gl-vec3/length": 47,
        "gl-vec3/normalize": 48,
        "gl-vec3/subtract": 50,
        "gl-vec3/transformQuat": 51,
        "quat-from-unit-vec3": 56
    }],
    37: [function(e, t, n) {
        function r(e) {
            function t(e) {
                e.preventDefault()
            }
            function n() {
                h.addEventListener("touchmove", function(e) {
                    if (E && !r())
                        for (var t = 0; t < e.changedTouches.length; t++) {
                            var n = e.changedTouches[t]
                              , o = d.indexOfTouch(n)
                              , i = A ? -1 !== o : 0 === o;
                            if (i) {
                                l(n);
                                break
                            }
                        }
                }),
                d.on("place", function(e, t) {
                    if (E = !r()) {
                        var n = t || e;
                        u(n)
                    }
                }),
                d.on("lift", function(e, t) {
                    E = !r(),
                    E && t && i(t, h, m)
                })
            }
            function r() {
                return d.pinching && A
            }
            function s() {
                d.on("change", function(e, t) {
                    A(e - t)
                })
            }
            function u(e) {
                i(e, h, m),
                f(m) && (E = !0)
            }
            function c() {
                E = !1
            }
            function l(e) {
                var t = i(e, h, y);
                if (d && r())
                    return void (m = t);
                if (E) {
                    var n = p(g)
                      , o = (t[0] - m[0]) / n[0]
                      , a = (t[1] - m[1]) / n[1];
                    C(o, a),
                    m[0] = t[0],
                    m[1] = t[1]
                }
            }
            function f(e) {
                if (h === window || h === document || h === document.body)
                    return !0;
                var t = h.getBoundingClientRect();
                return e[0] >= 0 && e[1] >= 0 && e[0] < t.width && e[1] < t.height
            }
            function p(e) {
                var t = h;
                return t !== window && t !== document && t !== document.body || (t = document.documentElement),
                e[0] = t.clientWidth,
                e[1] = t.clientHeight,
                e
            }
            var d, h = e.element || window, v = e.parent || h, m = [0, 0], E = !1, y = [0, 0], g = [0, 0], F = e.zoom, C = e.rotate, A = e.pinch;
            F && o(h, function(e, t) {
                F(t)
            }, !0),
            C && (v.addEventListener("mousedown", u),
            v.addEventListener("mousemove", l),
            v.addEventListener("mouseup", c)),
            (C || A) && (d = a(h),
            h.addEventListener("touchstart", t),
            C && n(),
            A && s())
        }
        var o = e("mouse-wheel")
          , i = e("mouse-event-offset")
          , a = e("touch-pinch");
        t.exports = r
    }
    , {
        "mouse-event-offset": 52,
        "mouse-wheel": 55,
        "touch-pinch": 57
    }],
    38: [function(e, t, n) {
        arguments[4][22][0].apply(n, arguments)
    }
    , {
        dup: 22
    }],
    39: [function(e, t, n) {
        t.exports = function() {
            for (var e = 0; e < arguments.length; e++)
                if (void 0 !== arguments[e])
                    return arguments[e]
        }
    }
    , {}],
    40: [function(e, t, n) {
        function r(e, t) {
            var n = t[0]
              , r = t[1]
              , o = t[2]
              , i = t[3]
              , a = n * n + r * r + o * o + i * i
              , s = a ? 1 / a : 0;
            return e[0] = -n * s,
            e[1] = -r * s,
            e[2] = -o * s,
            e[3] = i * s,
            e
        }
        t.exports = r
    }
    , {}],
    41: [function(e, t, n) {
        function r(e, t) {
            var n = t[0]
              , r = t[1]
              , o = t[2]
              , i = t[3]
              , a = n * n + r * r + o * o + i * i;
            return a > 0 && (a = 1 / Math.sqrt(a),
            e[0] = n * a,
            e[1] = r * a,
            e[2] = o * a,
            e[3] = i * a),
            e
        }
        t.exports = r
    }
    , {}],
    42: [function(e, t, n) {
        t.exports = e("gl-vec4/normalize")
    }
    , {
        "gl-vec4/normalize": 41
    }],
    43: [function(e, t, n) {
        function r(e, t, n) {
            return e[0] = t[0] + n[0],
            e[1] = t[1] + n[1],
            e[2] = t[2] + n[2],
            e
        }
        t.exports = r
    }
    , {}],
    44: [function(e, t, n) {
        function r(e, t) {
            return e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e
        }
        t.exports = r
    }
    , {}],
    45: [function(e, t, n) {
        function r(e, t, n) {
            var r = t[0]
              , o = t[1]
              , i = t[2]
              , a = n[0]
              , s = n[1]
              , u = n[2];
            return e[0] = o * u - i * s,
            e[1] = i * a - r * u,
            e[2] = r * s - o * a,
            e
        }
        t.exports = r
    }
    , {}],
    46: [function(e, t, n) {
        function r(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
        }
        t.exports = r
    }
    , {}],
    47: [function(e, t, n) {
        function r(e) {
            var t = e[0]
              , n = e[1]
              , r = e[2];
            return Math.sqrt(t * t + n * n + r * r)
        }
        t.exports = r
    }
    , {}],
    48: [function(e, t, n) {
        function r(e, t) {
            var n = t[0]
              , r = t[1]
              , o = t[2]
              , i = n * n + r * r + o * o;
            return i > 0 && (i = 1 / Math.sqrt(i),
            e[0] = t[0] * i,
            e[1] = t[1] * i,
            e[2] = t[2] * i),
            e
        }
        t.exports = r
    }
    , {}],
    49: [function(e, t, n) {
        function r(e, t, n, r) {
            return e[0] = t,
            e[1] = n,
            e[2] = r,
            e
        }
        t.exports = r
    }
    , {}],
    50: [function(e, t, n) {
        function r(e, t, n) {
            return e[0] = t[0] - n[0],
            e[1] = t[1] - n[1],
            e[2] = t[2] - n[2],
            e
        }
        t.exports = r
    }
    , {}],
    51: [function(e, t, n) {
        function r(e, t, n) {
            var r = t[0]
              , o = t[1]
              , i = t[2]
              , a = n[0]
              , s = n[1]
              , u = n[2]
              , c = n[3]
              , l = c * r + s * i - u * o
              , f = c * o + u * r - a * i
              , p = c * i + a * o - s * r
              , d = -a * r - s * o - u * i;
            return e[0] = l * c + d * -a + f * -u - p * -s,
            e[1] = f * c + d * -s + p * -a - l * -u,
            e[2] = p * c + d * -u + l * -s - f * -a,
            e
        }
        t.exports = r
    }
    , {}],
    52: [function(e, t, n) {
        function r(e, t, n) {
            t = t || e.currentTarget || e.srcElement,
            Array.isArray(n) || (n = [0, 0]);
            var r = e.clientX || 0
              , i = e.clientY || 0
              , a = o(t);
            return n[0] = r - a.left,
            n[1] = i - a.top,
            n
        }
        function o(e) {
            return e === window || e === document || e === document.body ? i : e.getBoundingClientRect()
        }
        var i = {
            left: 0,
            top: 0
        };
        t.exports = r
    }
    , {}],
    53: [function(e, t, n) {
        t.exports = function(e, t) {
            t || (t = [0, ""]),
            e = String(e);
            var n = parseFloat(e, 10);
            return t[0] = n,
            t[1] = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "",
            t
        }
    }
    , {}],
    54: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = a(getComputedStyle(e).getPropertyValue(t));
            return n[0] * i(n[1], e)
        }
        function o(e, t) {
            var n = document.createElement("div");
            n.style["font-size"] = "128" + e,
            t.appendChild(n);
            var o = r(n, "font-size") / 128;
            return t.removeChild(n),
            o
        }
        function i(e, t) {
            switch (t = t || document.body,
            e = (e || "px").trim().toLowerCase(),
            t !== window && t !== document || (t = document.body),
            e) {
            case "%":
                return t.clientHeight / 100;
            case "ch":
            case "ex":
                return o(e, t);
            case "em":
                return r(t, "font-size");
            case "rem":
                return r(document.body, "font-size");
            case "vw":
                return window.innerWidth / 100;
            case "vh":
                return window.innerHeight / 100;
            case "vmin":
                return Math.min(window.innerWidth, window.innerHeight) / 100;
            case "vmax":
                return Math.max(window.innerWidth, window.innerHeight) / 100;
            case "in":
                return s;
            case "cm":
                return s / 2.54;
            case "mm":
                return s / 25.4;
            case "pt":
                return s / 72;
            case "pc":
                return s / 6
            }
            return 1
        }
        var a = e("parse-unit");
        t.exports = i;
        var s = 96
    }
    , {
        "parse-unit": 53
    }],
    55: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            "function" == typeof e && (n = !!t,
            t = e,
            e = window);
            var r = o("ex", e)
              , i = function(e) {
                n && e.preventDefault();
                var o = e.deltaX || 0
                  , i = e.deltaY || 0
                  , a = e.deltaZ || 0
                  , s = e.deltaMode
                  , u = 1;
                switch (s) {
                case 1:
                    u = r;
                    break;
                case 2:
                    u = window.innerHeight
                }
                return o *= u,
                i *= u,
                a *= u,
                o || i || a ? t(o, i, a) : void 0
            }
            ;
            return e.addEventListener("wheel", i),
            i
        }
        var o = e("to-px");
        t.exports = r
    }
    , {
        "to-px": 54
    }],
    56: [function(e, t, n) {
        function r(e, t, n) {
            var r = o(t, n) + 1;
            return c > r ? (r = 0,
            Math.abs(t[0]) > Math.abs(t[2]) ? i(u, -t[1], t[0], 0) : i(u, 0, -t[2], t[1])) : s(u, t, n),
            e[0] = u[0],
            e[1] = u[1],
            e[2] = u[2],
            e[3] = r,
            a(e, e),
            e
        }
        var o = e("gl-vec3/dot")
          , i = e("gl-vec3/set")
          , a = e("gl-quat/normalize")
          , s = e("gl-vec3/cross")
          , u = [0, 0, 0]
          , c = 1e-6;
        t.exports = r
    }
    , {
        "gl-quat/normalize": 42,
        "gl-vec3/cross": 45,
        "gl-vec3/dot": 46,
        "gl-vec3/set": 49
    }],
    57: [function(e, t, n) {
        function r(e) {
            function t(e) {
                for (var t = e.identifier, n = 0; n < h.length; n++)
                    if (h[n] && h[n].touch && h[n].touch.identifier === t)
                        return n;
                return -1
            }
            function n() {
                y || (y = !0,
                e.addEventListener("touchstart", c, !1),
                e.addEventListener("touchmove", l, !1),
                e.addEventListener("touchend", f, !1),
                e.addEventListener("touchcancel", f, !1))
            }
            function r() {
                y && (y = !1,
                e.removeEventListener("touchstart", c, !1),
                e.removeEventListener("touchmove", l, !1),
                e.removeEventListener("touchend", f, !1),
                e.removeEventListener("touchcancel", f, !1))
            }
            function c(n) {
                for (var r = 0; r < n.changedTouches.length; r++) {
                    var i = n.changedTouches[r]
                      , a = i.identifier
                      , s = t(a);
                    if (-1 === s && 2 > v) {
                        var c = 0 === v
                          , l = h[0] ? 1 : 0
                          , f = h[0] ? 0 : 1
                          , y = new o;
                        h[l] = y,
                        v++,
                        y.touch = i,
                        u(i, e, y.position);
                        var g = h[f] ? h[f].touch : void 0;
                        if (d.emit("place", i, g),
                        !c) {
                            var F = p();
                            E = !1,
                            d.emit("start", F),
                            m = F
                        }
                    }
                }
            }
            function l(n) {
                for (var r = !1, o = 0; o < n.changedTouches.length; o++) {
                    var i = n.changedTouches[o]
                      , a = t(i);
                    -1 !== a && (r = !0,
                    h[a].touch = i,
                    u(i, e, h[a].position))
                }
                if (2 === v && r) {
                    var s = p();
                    d.emit("change", s, m),
                    m = s
                }
            }
            function f(e) {
                for (var n = 0; n < e.changedTouches.length; n++) {
                    var r = e.changedTouches[n]
                      , o = t(r);
                    if (-1 !== o) {
                        h[o] = null ,
                        v--;
                        var i = 0 === o ? 1 : 0
                          , a = h[i] ? h[i].touch : void 0;
                        d.emit("lift", r, a)
                    }
                }
                E || 2 === v || (E = !0,
                d.emit("end"))
            }
            function p() {
                return 2 > v ? 0 : i(h[0].position, h[1].position)
            }
            e = e || window;
            var d = new a
              , h = [null , null ]
              , v = 0
              , m = 0
              , E = !1
              , y = !1;
            return Object.defineProperties(d, {
                pinching: s(function() {
                    return 2 === v
                }),
                fingers: s(function() {
                    return h
                })
            }),
            n(),
            d.enable = n,
            d.disable = r,
            d.indexOfTouch = t,
            d
        }
        function o() {
            this.position = [0, 0],
            this.touch = null 
        }
        var i = e("gl-vec2/distance")
          , a = e("events").EventEmitter
          , s = e("dprop")
          , u = e("mouse-event-offset");
        t.exports = r
    }
    , {
        dprop: 58,
        events: 19,
        "gl-vec2/distance": 59,
        "mouse-event-offset": 52
    }],
    58: [function(e, t, n) {
        function r(e, t) {
            return {
                configurable: !0,
                enumerable: !0,
                get: e,
                set: t
            }
        }
        t.exports = r
    }
    , {}],
    59: [function(e, t, n) {
        function r(e, t) {
            var n = t[0] - e[0]
              , r = t[1] - e[1];
            return Math.sqrt(n * n + r * r)
        }
        t.exports = r
    }
    , {}],
    60: [function(e, t, n) {
        function r(e) {
            return this instanceof r ? (this.running = !1,
            this.last = a(),
            this._frame = 0,
            this._tick = this.tick.bind(this),
            void (e && this.on("tick", e))) : new r(e)
        }
        var o = e("inherits")
          , i = e("events").EventEmitter
          , a = e("right-now")
          , s = e("raf");
        t.exports = r,
        o(r, i),
        r.prototype.start = function() {
            return this.running ? void 0 : (this.running = !0,
            this.last = a(),
            this._frame = s(this._tick),
            this)
        }
        ,
        r.prototype.stop = function() {
            return this.running = !1,
            0 !== this._frame && s.cancel(this._frame),
            this._frame = 0,
            this
        }
        ,
        r.prototype.tick = function() {
            this._frame = s(this._tick);
            var e = a()
              , t = e - this.last;
            this.emit("tick", t),
            this.last = e
        }
    }
    , {
        events: 19,
        inherits: 61,
        raf: 62,
        "right-now": 64
    }],
    61: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
         : t.exports = function(e, t) {
            e.super_ = t;
            var n = function() {}
            ;
            n.prototype = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e
        }
    }
    , {}],
    62: [function(e, t, n) {
        (function(n) {
            for (var r = e("performance-now"), o = "undefined" == typeof window ? n : window, i = ["moz", "webkit"], a = "AnimationFrame", s = o["request" + a], u = o["cancel" + a] || o["cancelRequest" + a], c = 0; !s && c < i.length; c++)
                s = o[i[c] + "Request" + a],
                u = o[i[c] + "Cancel" + a] || o[i[c] + "CancelRequest" + a];
            if (!s || !u) {
                var l = 0
                  , f = 0
                  , p = []
                  , d = 1e3 / 60;
                s = function(e) {
                    if (0 === p.length) {
                        var t = r()
                          , n = Math.max(0, d - (t - l));
                        l = n + t,
                        setTimeout(function() {
                            var e = p.slice(0);
                            p.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled)
                                    try {
                                        e[t].callback(l)
                                    } catch (n) {
                                        setTimeout(function() {
                                            throw n
                                        }, 0)
                                    }
                        }, Math.round(n))
                    }
                    return p.push({
                        handle: ++f,
                        callback: e,
                        cancelled: !1
                    }),
                    f
                }
                ,
                u = function(e) {
                    for (var t = 0; t < p.length; t++)
                        p[t].handle === e && (p[t].cancelled = !0)
                }
            }
            t.exports = function(e) {
                return s.call(o, e)
            }
            ,
            t.exports.cancel = function() {
                u.apply(o, arguments)
            }
            ,
            t.exports.polyfill = function() {
                o.requestAnimationFrame = s,
                o.cancelAnimationFrame = u
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "performance-now": 63
    }],
    63: [function(e, t, n) {
        (function(e) {
            (function() {
                var n, r, o;
                "undefined" != typeof performance && null  !== performance && performance.now ? t.exports = function() {
                    return performance.now()
                }
                 : "undefined" != typeof e && null  !== e && e.hrtime ? (t.exports = function() {
                    return (n() - o) / 1e6
                }
                ,
                r = e.hrtime,
                n = function() {
                    var e;
                    return e = r(),
                    1e9 * e[0] + e[1]
                }
                ,
                o = n()) : Date.now ? (t.exports = function() {
                    return Date.now() - o
                }
                ,
                o = Date.now()) : (t.exports = function() {
                    return (new Date).getTime() - o
                }
                ,
                o = (new Date).getTime())
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 21
    }],
    64: [function(e, t, n) {
        (function(e) {
            t.exports = e.performance && e.performance.now ? function() {
                return performance.now()
            }
             : Date.now || function() {
                return +new Date
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    65: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t) {
            if (void 0 === t && (t = e,
            e = 0),
            "number" != typeof e || "number" != typeof t)
                throw new TypeError("Expected all arguments to be numbers");
            return Math.random() * (t - e) + e
        }
    }
    , {}],
    66: [function(e, t, n) {
        arguments[4][64][0].apply(n, arguments)
    }
    , {
        dup: 64
    }],
    67: [function(e, t, n) {
        function r(e, t, n, r) {
            u += 1;
            var c = s[u] = {
                id: u,
                cb: r,
                length: e,
                decay: t,
                reverse: n,
                impulseL: new Float32Array(e),
                impulseR: new Float32Array(e)
            };
            return a.push([c.id, 0, Math.min(i, e)]),
            setTimeout(o, 1),
            u
        }
        function o() {
            var e = a.shift();
            if (e) {
                var t = s[e[0]];
                if (t) {
                    for (var n = t.length, r = t.decay, u = t.reverse, c = e[1], l = e[2], f = t.impulseL, p = t.impulseR, d = c; l > d; d++) {
                        var h = u ? n - d : d;
                        f[d] = (2 * Math.random() - 1) * Math.pow(1 - h / n, r),
                        p[d] = (2 * Math.random() - 1) * Math.pow(1 - h / n, r)
                    }
                    l >= n - 1 ? (delete s[e[0]],
                    t.cb([t.impulseL, t.impulseR])) : a.push([t.id, l, Math.min(l + i, n)])
                }
            }
            a.length && setTimeout(o, 5)
        }
        t.exports = r;
        var i = 2048
          , a = []
          , s = {}
          , u = 0;
        r.cancel = function(e) {
            return s[e] ? (delete s[e],
            !0) : !1
        }
    }
    , {}],
    68: [function(e, t, n) {
        function r(e) {
            var t = e.createGain()
              , n = t._dry = e.createGain()
              , r = t._wet = e.createGain()
              , o = t.output = e.createGain()
              , a = t._convolver = e.createConvolver()
              , s = t._filter = e.createBiquadFilter();
            return t.connect(n),
            t.connect(r),
            a.connect(s),
            n.connect(o),
            r.connect(a),
            s.connect(o),
            Object.defineProperties(t, i),
            t._time = 3,
            t._decay = 2,
            t._reverse = !1,
            t.cutoff.value = 2e4,
            t.filterType = "lowpass",
            t._building = !1,
            t._buildImpulse(),
            t
        }
        var o = e("./build-impulse");
        t.exports = r;
        var i = {
            connect: {
                value: function() {
                    this.output.connect.apply(this.output, arguments)
                }
            },
            disconnect: {
                value: function() {
                    this.output.disconnect.apply(this.output, arguments)
                }
            },
            wet: {
                get: function() {
                    return this._wet.gain
                }
            },
            dry: {
                get: function() {
                    return this._dry.gain
                }
            },
            cutoff: {
                get: function() {
                    return this._filter.frequency
                }
            },
            filterType: {
                get: function() {
                    return this._filter.type
                },
                set: function(e) {
                    this._filter.type = e
                }
            },
            _buildImpulse: {
                value: function() {
                    var e = this
                      , t = e.context.sampleRate
                      , n = Math.max(t * e.time, 1);
                    e._building && o.cancel(e._building),
                    e._building = o(n, e.decay, e.reverse, function(r) {
                        var o = e.context.createBuffer(2, n, t);
                        o.getChannelData(0).set(r[0]),
                        o.getChannelData(1).set(r[1]),
                        e._convolver.buffer = o,
                        e._building = !1
                    })
                }
            },
            time: {
                enumerable: !0,
                get: function() {
                    return this._time
                },
                set: function(e) {
                    this._time = e,
                    this._buildImpulse()
                }
            },
            decay: {
                enumerable: !0,
                get: function() {
                    return this._decay
                },
                set: function(e) {
                    this._decay = e,
                    this._buildImpulse()
                }
            },
            reverse: {
                enumerable: !0,
                get: function() {
                    return this._reverse
                },
                set: function(e) {
                    this._reverse = e,
                    this._buildImpulse()
                }
            }
        }
    }
    , {
        "./build-impulse": 67
    }],
    69: [function(e, t, n) {
        t.exports = {
            uniforms: {
                tDiffuse: {
                    type: "t",
                    value: null 
                },
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
        }
    }
    , {}],
    70: [function(e, t, n) {
        t.exports = function(e) {
            function t() {
                return this instanceof t ? void (this.enabled = !0) : new t(scene,camera)
            }
            return t.prototype = {
                render: function(e, t, n, r) {
                    var o = e.context;
                    o.disable(o.STENCIL_TEST)
                }
            },
            t
        }
    }
    , {}],
    71: [function(e, t, n) {
        t.exports = function(e) {
            function t(e, n) {
                return this instanceof t ? (this.scene = e,
                this.camera = n,
                this.enabled = !0,
                this.clear = !0,
                this.needsSwap = !1,
                void (this.inverse = !1)) : new t(e,n)
            }
            return t.prototype = {
                render: function(e, t, n, r) {
                    var o = e.context;
                    o.colorMask(!1, !1, !1, !1),
                    o.depthMask(!1);
                    var i, a;
                    this.inverse ? (i = 0,
                    a = 1) : (i = 1,
                    a = 0),
                    o.enable(o.STENCIL_TEST),
                    o.stencilOp(o.REPLACE, o.REPLACE, o.REPLACE),
                    o.stencilFunc(o.ALWAYS, i, 4294967295),
                    o.clearStencil(a),
                    e.render(this.scene, this.camera, n, this.clear),
                    e.render(this.scene, this.camera, t, this.clear),
                    o.colorMask(!0, !0, !0, !0),
                    o.depthMask(!0),
                    o.stencilFunc(o.EQUAL, 1, 4294967295),
                    o.stencilOp(o.KEEP, o.KEEP, o.KEEP)
                }
            },
            t
        }
    }
    , {}],
    72: [function(e, t, n) {
        t.exports = function(e) {
            function t(n, r, o, i, a) {
                return this instanceof t ? (this.scene = n,
                this.camera = r,
                this.overrideMaterial = o,
                this.clearColor = i,
                this.clearAlpha = void 0 !== a ? a : 1,
                this.oldClearColor = new e.Color,
                this.oldClearAlpha = 1,
                this.enabled = !0,
                this.clear = !0,
                void (this.needsSwap = !1)) : new t(n,r,o,i,a)
            }
            return t.prototype = {
                render: function(e, t, n, r) {
                    this.scene.overrideMaterial = this.overrideMaterial,
                    this.clearColor && (this.oldClearColor.copy(e.getClearColor()),
                    this.oldClearAlpha = e.getClearAlpha(),
                    e.setClearColor(this.clearColor, this.clearAlpha)),
                    e.render(this.scene, this.camera, n, this.clear),
                    this.clearColor && e.setClearColor(this.oldClearColor, this.oldClearAlpha),
                    this.scene.overrideMaterial = null 
                }
            },
            t
        }
    }
    , {}],
    73: [function(e, t, n) {
        t.exports = function(e, t) {
            function n(t, r) {
                return this instanceof n ? (this.textureID = void 0 !== r ? r : "tDiffuse",
                this.uniforms = e.UniformsUtils.clone(t.uniforms),
                this.material = new e.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                }),
                this.renderToScreen = !1,
                this.enabled = !0,
                this.needsSwap = !0,
                void (this.clear = !1)) : new n(t,r)
            }
            return n.prototype = {
                render: function(e, n, r, o) {
                    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = r),
                    t.quad.material = this.material,
                    this.renderToScreen ? e.render(t.scene, t.camera) : e.render(t.scene, t.camera, n, this.clear)
                }
            },
            n
        }
    }
    , {}],
    74: [function(e, t, n) {
        var r = e("inherits");
        t.exports = function(e) {
            function t(n) {
                return this instanceof t ? (e.Geometry.call(this),
                this.dynamic = !0,
                void (n && this.update(n))) : new t(n)
            }
            return r(t, e.Geometry),
            t.prototype._updatePositions = function(t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    n > this.vertices.length - 1 ? this.vertices.push((new e.Vector3).fromArray(r)) : this.vertices[n].fromArray(r)
                }
                this.vertices.length = t.length,
                this.verticesNeedUpdate = !0
            }
            ,
            t.prototype._updateCells = function(t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (n > this.faces.length - 1)
                        this.faces.push(new e.Face3(r[0],r[1],r[2]));
                    else {
                        var o = this.faces[n];
                        o.a = r[0],
                        o.b = r[1],
                        o.c = r[2]
                    }
                }
                this.faces.length = t.length,
                this.elementsNeedUpdate = !0
            }
            ,
            t.prototype.update = function(e) {
                this._updatePositions(e.positions),
                this._updateCells(e.cells)
            }
            ,
            t
        }
    }
    , {
        inherits: 75
    }],
    75: [function(e, t, n) {
        arguments[4][61][0].apply(n, arguments)
    }
    , {
        dup: 61
    }],
    76: [function(e, t, n) {
        function r(e) {
            return this instanceof r ? (a.call(this, o(f, e)),
            s.call(this),
            this._handleTick = function(e) {
                e = Math.min(30, e),
                e /= 1e3,
                this.emit("tick", e),
                this.tick(e)
            }
            .bind(this),
            void l.on("tick", this._handleTick)) : new r(e)
        }
        var o = e("xtend")
          , i = e("eases")
          , a = e("tween-ticker")
          , s = e("events").EventEmitter
          , u = e("inherits")
          , c = e("mixes")
          , l = e("./loop")
          , f = {
            eases: i
        };
        t.exports = r,
        u(r, a),
        c(r, s.prototype),
        r.prototype.dispose = function() {
            l.removeListener("tick", this._handleTick)
        }
    }
    , {
        "./loop": 77,
        eases: 96,
        events: 19,
        inherits: 110,
        mixes: 111,
        "tween-ticker": 112,
        xtend: 122
    }],
    77: [function(e, t, n) {
        var r = e("raf-loop")();
        r.start(),
        t.exports = r
    }
    , {
        "raf-loop": 60
    }],
    78: [function(e, t, n) {
        function r(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
        t.exports = r
    }
    , {}],
    79: [function(e, t, n) {
        function r(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        }
        t.exports = r
    }
    , {}],
    80: [function(e, t, n) {
        function r(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        }
        t.exports = r
    }
    , {}],
    81: [function(e, t, n) {
        function r(e) {
            return .5 > e ? .5 * (1 - o(1 - 2 * e)) : .5 * o(2 * e - 1) + .5
        }
        var o = e("./bounce-out");
        t.exports = r
    }
    , {
        "./bounce-out": 83
    }],
    82: [function(e, t, n) {
        function r(e) {
            return 1 - o(1 - e)
        }
        var o = e("./bounce-out");
        t.exports = r
    }
    , {
        "./bounce-out": 83
    }],
    83: [function(e, t, n) {
        function r(e) {
            var t = 4 / 11
              , n = 8 / 11
              , r = .9
              , o = 4356 / 361
              , i = 35442 / 1805
              , a = 16061 / 1805
              , s = e * e;
            return t > e ? 7.5625 * s : n > e ? 9.075 * s - 9.9 * e + 3.4 : r > e ? o * s - i * e + a : 10.8 * e * e - 20.52 * e + 10.72
        }
        t.exports = r
    }
    , {}],
    84: [function(e, t, n) {
        function r(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        t.exports = r
    }
    , {}],
    85: [function(e, t, n) {
        function r(e) {
            return 1 - Math.sqrt(1 - e * e)
        }
        t.exports = r
    }
    , {}],
    86: [function(e, t, n) {
        function r(e) {
            return Math.sqrt(1 - --e * e)
        }
        t.exports = r
    }
    , {}],
    87: [function(e, t, n) {
        function r(e) {
            return .5 > e ? 4 * e * e * e : .5 * Math.pow(2 * e - 2, 3) + 1
        }
        t.exports = r
    }
    , {}],
    88: [function(e, t, n) {
        function r(e) {
            return e * e * e
        }
        t.exports = r
    }
    , {}],
    89: [function(e, t, n) {
        function r(e) {
            var t = e - 1;
            return t * t * t + 1
        }
        t.exports = r
    }
    , {}],
    90: [function(e, t, n) {
        function r(e) {
            return .5 > e ? .5 * Math.sin(13 * Math.PI / 2 * 2 * e) * Math.pow(2, 10 * (2 * e - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * e - 1 + 1)) * Math.pow(2, -10 * (2 * e - 1)) + 1
        }
        t.exports = r
    }
    , {}],
    91: [function(e, t, n) {
        function r(e) {
            return Math.sin(13 * e * Math.PI / 2) * Math.pow(2, 10 * (e - 1))
        }
        t.exports = r
    }
    , {}],
    92: [function(e, t, n) {
        function r(e) {
            return Math.sin(-13 * (e + 1) * Math.PI / 2) * Math.pow(2, -10 * e) + 1
        }
        t.exports = r
    }
    , {}],
    93: [function(e, t, n) {
        function r(e) {
            return 0 === e || 1 === e ? e : .5 > e ? .5 * Math.pow(2, 20 * e - 10) : -.5 * Math.pow(2, 10 - 20 * e) + 1
        }
        t.exports = r
    }
    , {}],
    94: [function(e, t, n) {
        function r(e) {
            return 0 === e ? e : Math.pow(2, 10 * (e - 1))
        }
        t.exports = r
    }
    , {}],
    95: [function(e, t, n) {
        function r(e) {
            return 1 === e ? e : 1 - Math.pow(2, -10 * e)
        }
        t.exports = r
    }
    , {}],
    96: [function(e, t, n) {
        t.exports = {
            backInOut: e("./back-in-out"),
            backIn: e("./back-in"),
            backOut: e("./back-out"),
            bounceInOut: e("./bounce-in-out"),
            bounceIn: e("./bounce-in"),
            bounceOut: e("./bounce-out"),
            circInOut: e("./circ-in-out"),
            circIn: e("./circ-in"),
            circOut: e("./circ-out"),
            cubicInOut: e("./cubic-in-out"),
            cubicIn: e("./cubic-in"),
            cubicOut: e("./cubic-out"),
            elasticInOut: e("./elastic-in-out"),
            elasticIn: e("./elastic-in"),
            elasticOut: e("./elastic-out"),
            expoInOut: e("./expo-in-out"),
            expoIn: e("./expo-in"),
            expoOut: e("./expo-out"),
            linear: e("./linear"),
            quadInOut: e("./quad-in-out"),
            quadIn: e("./quad-in"),
            quadOut: e("./quad-out"),
            quartInOut: e("./quart-in-out"),
            quartIn: e("./quart-in"),
            quartOut: e("./quart-out"),
            quintInOut: e("./quint-in-out"),
            quintIn: e("./quint-in"),
            quintOut: e("./quint-out"),
            sineInOut: e("./sine-in-out"),
            sineIn: e("./sine-in"),
            sineOut: e("./sine-out")
        }
    }
    , {
        "./back-in": 79,
        "./back-in-out": 78,
        "./back-out": 80,
        "./bounce-in": 82,
        "./bounce-in-out": 81,
        "./bounce-out": 83,
        "./circ-in": 85,
        "./circ-in-out": 84,
        "./circ-out": 86,
        "./cubic-in": 88,
        "./cubic-in-out": 87,
        "./cubic-out": 89,
        "./elastic-in": 91,
        "./elastic-in-out": 90,
        "./elastic-out": 92,
        "./expo-in": 94,
        "./expo-in-out": 93,
        "./expo-out": 95,
        "./linear": 97,
        "./quad-in": 99,
        "./quad-in-out": 98,
        "./quad-out": 100,
        "./quart-in": 102,
        "./quart-in-out": 101,
        "./quart-out": 103,
        "./quint-in": 105,
        "./quint-in-out": 104,
        "./quint-out": 106,
        "./sine-in": 108,
        "./sine-in-out": 107,
        "./sine-out": 109
    }],
    97: [function(e, t, n) {
        function r(e) {
            return e
        }
        t.exports = r
    }
    , {}],
    98: [function(e, t, n) {
        function r(e) {
            return e /= .5,
            1 > e ? .5 * e * e : (e--,
            -.5 * (e * (e - 2) - 1))
        }
        t.exports = r
    }
    , {}],
    99: [function(e, t, n) {
        function r(e) {
            return e * e
        }
        t.exports = r
    }
    , {}],
    100: [function(e, t, n) {
        function r(e) {
            return -e * (e - 2)
        }
        t.exports = r
    }
    , {}],
    101: [function(e, t, n) {
        function r(e) {
            return .5 > e ? 8 * Math.pow(e, 4) : -8 * Math.pow(e - 1, 4) + 1
        }
        t.exports = r
    }
    , {}],
    102: [function(e, t, n) {
        function r(e) {
            return Math.pow(e, 4)
        }
        t.exports = r
    }
    , {}],
    103: [function(e, t, n) {
        function r(e) {
            return Math.pow(e - 1, 3) * (1 - e) + 1
        }
        t.exports = r
    }
    , {}],
    104: [function(e, t, n) {
        function r(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }
        t.exports = r
    }
    , {}],
    105: [function(e, t, n) {
        function r(e) {
            return e * e * e * e * e
        }
        t.exports = r
    }
    , {}],
    106: [function(e, t, n) {
        function r(e) {
            return --e * e * e * e * e + 1
        }
        t.exports = r
    }
    , {}],
    107: [function(e, t, n) {
        function r(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        t.exports = r
    }
    , {}],
    108: [function(e, t, n) {
        function r(e) {
            var t = Math.cos(e * Math.PI * .5);
            return Math.abs(t) < 1e-14 ? 1 : 1 - t
        }
        t.exports = r
    }
    , {}],
    109: [function(e, t, n) {
        function r(e) {
            return Math.sin(e * Math.PI / 2)
        }
        t.exports = r
    }
    , {}],
    110: [function(e, t, n) {
        arguments[4][61][0].apply(n, arguments)
    }
    , {
        dup: 61
    }],
    111: [function(e, t, n) {
        function r(e, t) {
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    if ("function" == typeof r)
                        e[n] = r;
                    else if (r && "object" == typeof r) {
                        var a = o(i, r);
                        Object.defineProperty(e, n, a)
                    }
                }
        }
        var o = e("xtend")
          , i = {
            enumerable: !0,
            configurable: !0
        };
        t.exports = function(e, t) {
            r(e.prototype, t)
        }
        ,
        t.exports.mix = r
    }
    , {
        xtend: 122
    }],
    112: [function(e, t, n) {
        function r(e) {
            return this instanceof r ? (e = e || {},
            this.stack = [],
            this.defaultEase = e.defaultEase || a,
            this.eases = e.eases || {},
            void (this._applyEase = this.ease.bind(this))) : new r(e)
        }
        function o(e) {
            return "function" == typeof e.tick && "function" == typeof e.cancel
        }
        function i(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                "function" == typeof n.sync && n.sync()
            }
        }
        var a = e("eases/linear")
          , s = e("tween-objects")
          , u = e("tween-base");
        r.prototype.cancel = function() {
            for (var e = 0; e < this.stack.length; e++) {
                var t = this.stack[e];
                t.cancel(),
                t.tick(0)
            }
            return this.stack.length = 0,
            this
        }
        ,
        r.prototype.clear = r.prototype.cancel,
        r.prototype.to = function(e, t) {
            var n = e;
            if (t && "object" == typeof t)
                n = s(e, t);
            else if (e || t) {
                if (!o(n))
                    throw new Error("must provide options or a tween object")
            } else
                n = new u;
            return this.push(n)
        }
        ,
        r.prototype.push = function(e) {
            return this.stack.push(e),
            e
        }
        ,
        r.prototype.tick = function(e, t) {
            t = "function" == typeof t ? t : this._applyEase,
            e = "number" == typeof e ? e : 1 / 60;
            for (var n = 0; n < this.stack.length; n++)
                this.stack[n].tick(e, t);
            for (i(this.stack),
            n = this.stack.length - 1; n >= 0; n--)
                this.stack[n].active || this.stack.splice(n, 1)
        }
        ,
        r.prototype.ease = function(e, t) {
            var n = e.ease || this.defaultEase;
            return "string" == typeof n && (n = this.eases[n]),
            "function" != typeof n && (n = a),
            n(t)
        }
        ,
        t.exports = r
    }
    , {
        "eases/linear": 97,
        "tween-base": 116,
        "tween-objects": 117
    }],
    113: [function(e, t, n) {
        function r(e) {
            return e.BYTES_PER_ELEMENT && "[object ArrayBuffer]" === o.call(e.buffer) || Array.isArray(e)
        }
        var o = Object.prototype.toString;
        t.exports = r
    }
    , {}],
    114: [function(e, t, n) {
        var r = e("lerp");
        t.exports = function(e, t, n, o) {
            if ("number" == typeof e && "number" == typeof t)
                return r(e, t, n);
            var i = Math.min(e.length, t.length);
            o = o || new Array(i);
            for (var a = 0; i > a; a++)
                o[a] = r(e[a], t[a], n);
            return o
        }
    }
    , {
        lerp: 115
    }],
    115: [function(e, t, n) {
        function r(e, t, n) {
            return e * (1 - n) + t * n
        }
        t.exports = r
    }
    , {}],
    116: [function(e, t, n) {
        function r(e) {
            s.call(this),
            this.duration = e && e.duration || 0,
            this.delay = e && e.delay || 0,
            this.time = 0,
            this.ease = e && e.ease,
            this.active = !0,
            this.enabled = !0,
            this.cancelling = !1,
            this._started = !1
        }
        function o(e, t) {
            return "function" == typeof e.ease ? e.ease(t) : a(t)
        }
        var i = function() {}
          , a = e("eases/linear")
          , s = e("events").EventEmitter
          , u = e("inherits");
        u(r, s),
        r.prototype.lerp = i,
        r.prototype.ready = i,
        r.prototype.cancel = function() {
            return this.cancelling = !0,
            this
        }
        ,
        r.prototype.tick = function(e, t) {
            if (t = "function" == typeof t ? t : o,
            this.cancelling && this.active && (this.active = !1,
            this.emit("cancelling", this),
            this.emit("complete", this)),
            this.active && this.enabled) {
                this.time;
                this.time += e;
                var n = (this.time - this.delay) / this.duration;
                this.time - this.delay > 0 && (this._started || (this._started = !0,
                this.ready(),
                this.emit("start", this)),
                0 > n ? n = 0 : n > 1 && (n = 1),
                n = t(this, n),
                this.lerp(n),
                this.emit("update", this)),
                this.time >= this.duration + this.delay && (this.active = !1,
                this.emit("complete", this))
            }
        }
        ,
        t.exports = r
    }
    , {
        "eases/linear": 97,
        events: 19,
        inherits: 110
    }],
    117: [function(e, t, n) {
        var r = e("./lib/object")
          , o = e("./lib/group");
        t.exports = function(e, t) {
            var n = Array.isArray(e) ? new o(e,t) : new r(e,t);
            return n
        }
    }
    , {
        "./lib/group": 119,
        "./lib/object": 120
    }],
    118: [function(e, t, n) {
        var r = e("tween-base")
          , o = e("an-array")
          , i = e("own-enumerable-keys")
          , a = i(new r);
        t.exports = function(e, t) {
            var n = []
              , r = i(t);
            for (var s in t)
                if (r.indexOf(s) >= 0 && s in e && -1 === a.indexOf(s)) {
                    var u = e[s]
                      , c = t[s];
                    "number" == typeof u && "number" == typeof c ? n.push({
                        key: s,
                        start: u,
                        end: c
                    }) : o(u) && o(c) && n.push({
                        key: s,
                        start: u.slice(),
                        end: c.slice()
                    })
                }
            return n
        }
    }
    , {
        "an-array": 113,
        "own-enumerable-keys": 121,
        "tween-base": 116
    }],
    119: [function(e, t, n) {
        function r(e, t) {
            a.call(this, t),
            this.target = e,
            this.end = [],
            this._options = t
        }
        var o = e("inherits")
          , i = e("lerp-array")
          , a = e("tween-base")
          , s = e("./end-target");
        o(r, a),
        r.prototype.ready = function() {
            this.end = this.target.map(function(e) {
                return s(e, this._options)
            }, this)
        }
        ,
        r.prototype.lerp = function(e) {
            for (var t = 0; t < this.end.length; t++)
                for (var n = this.end[t], r = this.target[t], o = 0; o < n.length; o++) {
                    var a = n[o]
                      , s = a.key;
                    r[s] = i(a.start, a.end, e, r[s])
                }
        }
        ,
        t.exports = r
    }
    , {
        "./end-target": 118,
        inherits: 110,
        "lerp-array": 114,
        "tween-base": 116
    }],
    120: [function(e, t, n) {
        function r(e, t) {
            a.call(this, t),
            this.target = e,
            this.endings = void 0,
            this._options = t
        }
        var o = e("inherits")
          , i = e("lerp-array")
          , a = e("tween-base")
          , s = e("./end-target");
        o(r, a),
        r.prototype.ready = function() {
            this.endings = s(this.target, this._options)
        }
        ,
        r.prototype.lerp = function(e) {
            for (var t = 0; t < this.endings.length; t++) {
                var n = this.endings[t]
                  , r = n.key;
                this.target[r] = i(n.start, n.end, e, this.target[r])
            }
        }
        ,
        t.exports = r
    }
    , {
        "./end-target": 118,
        inherits: 110,
        "lerp-array": 114,
        "tween-base": 116
    }],
    121: [function(e, t, n) {
        function r(e) {
            var t = Object.getOwnPropertyNames(e);
            return Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e))),
            t.filter(function(t) {
                return o.call(e, t)
            })
        }
        var o = Object.prototype.propertyIsEnumerable;
        t.exports = r
    }
    , {}],
    122: [function(e, t, n) {
        function r() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    o.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        t.exports = r;
        var o = Object.prototype.hasOwnProperty
    }
    , {}],
    123: [function(e, t, n) {
        t.exports = function(e, t, n) {
            return (n - e) / (t - e)
        }
    }
    , {}],
    124: [function(e, t, n) {
        function r(e, t) {
            if (!e)
                throw new TypeError("must specify a src parameter");
            return t = t || {},
            t.buffer ? o(e, t) : i(e, t)
        }
        var o = e("./lib/buffer-source")
          , i = e("./lib/media-source");
        t.exports = r
    }
    , {
        "./lib/buffer-source": 126,
        "./lib/media-source": 129
    }],
    125: [function(e, t, n) {
        function r() {
            var e = window.AudioContext || window.webkitAudioContext;
            return new e
        }
        t.exports = r
    }
    , {}],
    126: [function(e, t, n) {
        (function(n) {
            function r(e, t) {
                function r(e) {
                    a(h, e, function(e, t) {
                        return e ? d.emit("error", e) : (f = t,
                        l && (l.buffer = f),
                        p = f.duration,
                        v.buffer = f,
                        void d.emit("load"))
                    }, function(e, t) {
                        d.emit("progress", e, t)
                    }, function() {
                        d.emit("decoding")
                    })
                }
                function c() {
                    d.emit("end"),
                    g = !1,
                    y = 0
                }
                t = t || {};
                var l, f, p, d = new s, h = t.context || i(), v = h.createGain(), m = null , E = null , y = 0, g = !1, F = t.loop;
                d.play = function() {
                    if (!g) {
                        g = !0,
                        l = h.createBufferSource(),
                        l.connect(d.node),
                        l.onended = c,
                        f && (l.buffer = f),
                        F && (l.loop = !0),
                        p && y > p && (y %= p);
                        var e = y;
                        l.start(0, e),
                        m = u()
                    }
                }
                ,
                d.pause = function() {
                    g && (g = !1,
                    l.onended = null ,
                    l.stop(0),
                    E = u(),
                    y += (E - m) / 1e3)
                }
                ,
                d.stop = function() {
                    d.pause(),
                    c()
                }
                ,
                d.dispose = function() {
                    f = null 
                }
                ,
                d.node = v,
                d.context = h,
                Object.defineProperties(d, {
                    duration: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return p
                        }
                    },
                    playing: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return g
                        }
                    },
                    buffer: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return f
                        }
                    },
                    volume: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return v.gain.value
                        },
                        set: function(e) {
                            v.gain.value = e
                        }
                    }
                }),
                "number" == typeof t.volume && (d.volume = t.volume);
                var C = Array.isArray(e) ? e : [e];
                C = C.filter(Boolean);
                var A = C.some(o);
                if (A) {
                    var D = C.filter(o)[0];
                    "function" == typeof D.getAttribute ? D = D.getAttribuet("src") : "string" == typeof D.src && (D = D.src),
                    r(D)
                } else
                    n.nextTick(function() {
                        d.emit("error", o.createError(C))
                    });
                return d
            }
            var o = e("./can-play-src")
              , i = e("./audio-context")
              , a = e("./xhr-audio")
              , s = e("events").EventEmitter
              , u = e("right-now");
            t.exports = r
        }
        ).call(this, e("_process"))
    }
    , {
        "./audio-context": 125,
        "./can-play-src": 127,
        "./xhr-audio": 130,
        _process: 21,
        events: 19,
        "right-now": 133
    }],
    127: [function(e, t, n) {
        function r(e) {
            if (!e)
                throw new TypeError("src cannot be empty");
            var t;
            if ("function" == typeof e.getAttribute)
                t = e.getAttribute("type");
            else if ("string" == typeof e) {
                var n = i(e);
                n && (t = s(n))
            } else
                t = e.type;
            if (!t)
                return !0;
            a || (a = new window.Audio);
            var r = a.canPlayType(t).replace(/no/, "");
            return Boolean(r)
        }
        function o(e) {
            var t = new Error("This browser does not support any of the following sources:\n    " + e.join(", ") + "\nTry using an array of OGG, MP3 and WAV.");
            return t.type = "AUDIO_FORMAT",
            t
        }
        function i(e) {
            var t = e.lastIndexOf(".");
            if (!(0 >= t || t === e.length - 1))
                return e.substring(t + 1)
        }
        var a, s = e("browser-media-mime-type");
        t.exports = r,
        t.exports.createError = o
    }
    , {
        "browser-media-mime-type": 131
    }],
    128: [function(e, t, n) {
        function r(e, t, n) {
            function r(o) {
                e.removeEventListener(t, r, !1),
                n()
            }
            e.addEventListener(t, r, !1)
        }
        t.exports = r
    }
    , {}],
    129: [function(e, t, n) {
        (function(n) {
            function r(e, t) {
                function r() {
                    var e = function() {
                        l.emit("load")
                    }
                    ;
                    p.load(),
                    p.readyState >= p.HAVE_ENOUGH_DATA ? n.nextTick(e) : (c(p, "canplay", e),
                    c(p, "error", function(e) {
                        l.emit("error", e)
                    }))
                }
                t = a({}, t);
                var l = new o;
                t.element || (t.element = new window.Audio);
                var f = t.volume;
                delete t.volume;
                var p = i(e, t)
                  , d = t.context || s()
                  , h = d.createGain()
                  , v = d.createMediaElementSource(p);
                v.connect(h),
                p.addEventListener("ended", function() {
                    l.emit("end")
                }),
                l.element = p,
                l.context = d,
                l.node = h,
                l.play = p.play.bind(p),
                l.pause = p.pause.bind(p),
                l.dispose = function() {}
                ,
                l.stop = function() {
                    var e = l.playing;
                    p.pause(),
                    p.currentTime = 0,
                    e && l.emit("end")
                }
                ,
                Object.defineProperties(l, {
                    duration: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return p.duration
                        }
                    },
                    currentTime: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return p.currentTime
                        }
                    },
                    playing: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return !p.paused
                        }
                    },
                    volume: {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return h.gain.value
                        },
                        set: function(e) {
                            h.gain.value = e
                        }
                    }
                }),
                "number" == typeof f && (l.volume = f);
                var m = Array.isArray(e) ? e : [e];
                m = m.filter(Boolean);
                var E = m.some(u);
                return E ? r() : n.nextTick(function() {
                    l.emit("error", u.createError(m))
                }),
                l
            }
            var o = e("events").EventEmitter
              , i = e("simple-media-element").audio
              , a = e("object-assign")
              , s = e("./audio-context")
              , u = e("./can-play-src")
              , c = e("./event-add-once");
            t.exports = r
        }
        ).call(this, e("_process"))
    }
    , {
        "./audio-context": 125,
        "./can-play-src": 127,
        "./event-add-once": 128,
        _process: 21,
        events: 19,
        "object-assign": 35,
        "simple-media-element": 134
    }],
    130: [function(e, t, n) {
        function r(e, t, n, r, a) {
            function s(t) {
                a(),
                e.decodeAudioData(t, function(e) {
                    n(null , e)
                }, function() {
                    var e = new Error("Error decoding audio data");
                    e.type = "DECODE_AUDIO_DATA",
                    n(e)
                })
            }
            var u = o({
                uri: t,
                responseType: "arraybuffer"
            }, function(e, r, o) {
                return /^2/.test(r.statusCode) || (e = new Error("status code " + r.statusCode + " requesting " + t)),
                e ? n(e) : void s(o)
            });
            i(u).on("data", function(e, t) {
                r(e, t)
            })
        }
        var o = e("xhr")
          , i = e("xhr-progress");
        t.exports = r
    }
    , {
        xhr: 137,
        "xhr-progress": 136
    }],
    131: [function(e, t, n) {
        var r = e("./mime-types.json")
          , o = {};
        Object.keys(r).forEach(function(e) {
            var t = r[e];
            t.forEach(function(t) {
                o[t] = e
            })
        }),
        t.exports = function(e) {
            if (!e)
                throw new TypeError("must specify extension string");
            return 0 === e.indexOf(".") && (e = e.substring(1)),
            o[e.toLowerCase()]
        }
    }
    , {
        "./mime-types.json": 132
    }],
    132: [function(e, t, n) {
        t.exports = {
            "audio/midi": ["mid", "midi", "kar", "rmi"],
            "audio/mp4": ["mp4a", "m4a"],
            "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
            "audio/ogg": ["oga", "ogg", "spx"],
            "audio/webm": ["weba"],
            "audio/x-matroska": ["mka"],
            "audio/x-mpegurl": ["m3u"],
            "audio/wav": ["wav"],
            "video/3gpp": ["3gp"],
            "video/3gpp2": ["3g2"],
            "video/mp4": ["mp4", "mp4v", "mpg4"],
            "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
            "video/ogg": ["ogv"],
            "video/quicktime": ["qt", "mov"],
            "video/webm": ["webm"],
            "video/x-f4v": ["f4v"],
            "video/x-fli": ["fli"],
            "video/x-flv": ["flv"],
            "video/x-m4v": ["m4v"],
            "video/x-matroska": ["mkv", "mk3d", "mks"]
        }
    }
    , {}],
    133: [function(e, t, n) {
        arguments[4][64][0].apply(n, arguments)
    }
    , {
        dup: 64
    }],
    134: [function(e, t, n) {
        function r(e, t, n) {
            n = n || {},
            Array.isArray(t) || (t = [t]);
            var r = n.element || document.createElement(e);
            return n.loop && r.setAttribute("loop", "loop"),
            n.muted && r.setAttribute("muted", "muted"),
            n.autoplay && r.setAttribute("autoplay", "autoplay"),
            n.controls && r.setAttribute("controls", "controls"),
            n.crossOrigin && r.setAttribute("crossorigin", n.crossOrigin),
            n.preload && r.setAttribute("preload", n.preload),
            n.poster && r.setAttribute("poster", n.poster),
            "undefined" != typeof n.volume && r.setAttribute("volume", n.volume),
            t = t.filter(Boolean),
            t.forEach(function(e) {
                r.appendChild(o(e))
            }),
            r
        }
        function o(e) {
            if (a(e))
                return e;
            if ("string" == typeof e && (e = {
                src: e
            },
            e.src)) {
                var t = i(e.src);
                t && (e.type = s(t))
            }
            var n = document.createElement("source");
            return e.src && n.setAttribute("src", e.src),
            e.type && n.setAttribute("type", e.type),
            n
        }
        function i(e) {
            var t = e.lastIndexOf(".");
            return 0 >= t || t === e.length - 1 ? null  : e.substring(t + 1)
        }
        var a = e("is-dom")
          , s = e("browser-media-mime-type");
        t.exports.video = r.bind(null , "video"),
        t.exports.audio = r.bind(null , "audio")
    }
    , {
        "browser-media-mime-type": 131,
        "is-dom": 135
    }],
    135: [function(e, t, n) {
        t.exports = function(e) {
            return e && "object" == typeof e ? window && "object" == typeof window.Node ? e instanceof window.Node : "number" == typeof e.nodeType && "string" == typeof e.nodeName : !1
        }
    }
    , {}],
    136: [function(e, t, n) {
        function r(e) {
            function t(e) {
                var t = e.lengthComputable ? e.loaded / e.total : 0;
                i || r.emit("data", t, e.total || null ),
                i = 1 === t
            }
            function n(o) {
                ("load" === o.type || /^(ready|complete)$/g.test((o.currentTarget || o.srcElement).readyState)) && (i || (e.removeEventListener ? (e.removeEventListener("load", n, !1),
                e.removeEventListener("progress", t, !1)) : e.detatchEvent && e.detatchEvent("onreadystatechange", n),
                r.emit("data", 1, o.total || null ),
                r.emit("done"),
                i = !0))
            }
            var r = new o
              , i = !1;
            return e.attachEvent ? (e.attachEvent("onreadystatechange", n),
            r) : (e.addEventListener("load", n, !1),
            e.addEventListener("progress", t, !1),
            r)
        }
        var o = e("events").EventEmitter;
        t.exports = r
    }
    , {
        events: 19
    }],
    137: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < e.length; n++)
                t(e[n])
        }
        function o(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }
        function i(e, t, n) {
            var r = e;
            return f(t) ? (n = t,
            "string" == typeof e && (r = {
                uri: e
            })) : r = d(t, {
                uri: e
            }),
            r.callback = n,
            r
        }
        function a(e, t, n) {
            return t = i(e, t, n),
            s(t)
        }
        function s(e) {
            function t() {
                4 === c.readyState && i()
            }
            function n() {
                var e = void 0;
                if (c.response ? e = c.response : "text" !== c.responseType && c.responseType || (e = c.responseText || c.responseXML),
                F)
                    try {
                        e = JSON.parse(e)
                    } catch (t) {}
                return e
            }
            function r(e) {
                clearTimeout(h),
                e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
                e.statusCode = 0,
                s(e, u)
            }
            function i() {
                if (!d) {
                    var t;
                    clearTimeout(h),
                    t = e.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;
                    var r = u
                      , o = null ;
                    0 !== t ? (r = {
                        body: n(),
                        statusCode: t,
                        method: m,
                        headers: {},
                        url: v,
                        rawRequest: c
                    },
                    c.getAllResponseHeaders && (r.headers = p(c.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"),
                    s(o, r, r.body)
                }
            }
            var s = e.callback;
            if ("undefined" == typeof s)
                throw new Error("callback argument missing");
            s = l(s);
            var u = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: m,
                url: v,
                rawRequest: c
            }
              , c = e.xhr || null ;
            c || (c = e.cors || e.useXDR ? new a.XDomainRequest : new a.XMLHttpRequest);
            var f, d, h, v = c.url = e.uri || e.url, m = c.method = e.method || "GET", E = e.body || e.data || null , y = c.headers = e.headers || {}, g = !!e.sync, F = !1;
            if ("json" in e && (F = !0,
            y.accept || y.Accept || (y.Accept = "application/json"),
            "GET" !== m && "HEAD" !== m && (y["content-type"] || y["Content-Type"] || (y["Content-Type"] = "application/json"),
            E = JSON.stringify(e.json))),
            c.onreadystatechange = t,
            c.onload = i,
            c.onerror = r,
            c.onprogress = function() {}
            ,
            c.ontimeout = r,
            c.open(m, v, !g, e.username, e.password),
            g || (c.withCredentials = !!e.withCredentials),
            !g && e.timeout > 0 && (h = setTimeout(function() {
                d = !0,
                c.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT",
                r(e)
            }, e.timeout)),
            c.setRequestHeader)
                for (f in y)
                    y.hasOwnProperty(f) && c.setRequestHeader(f, y[f]);
            else if (e.headers && !o(e.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType" in e && (c.responseType = e.responseType),
            "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(c),
            c.send(E),
            c
        }
        function u() {}
        var c = e("global/window")
          , l = e("once")
          , f = e("is-function")
          , p = e("parse-headers")
          , d = e("xtend");
        t.exports = a,
        a.XMLHttpRequest = c.XMLHttpRequest || u,
        a.XDomainRequest = "withCredentials" in new a.XMLHttpRequest ? a.XMLHttpRequest : c.XDomainRequest,
        r(["get", "put", "post", "patch", "head", "delete"], function(e) {
            a["delete" === e ? "del" : e] = function(t, n, r) {
                return n = i(t, n, r),
                n.method = e.toUpperCase(),
                s(n)
            }
        })
    }
    , {
        "global/window": 138,
        "is-function": 139,
        once: 140,
        "parse-headers": 143,
        xtend: 144
    }],
    138: [function(e, t, n) {
        (function(e) {
            "undefined" != typeof window ? t.exports = window : "undefined" != typeof e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {}
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    139: [function(e, t, n) {
        function r(e) {
            var t = o.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt);
        }
        t.exports = r;
        var o = Object.prototype.toString
    }
    , {}],
    140: [function(e, t, n) {
        function r(e) {
            var t = !1;
            return function() {
                return t ? void 0 : (t = !0,
                e.apply(this, arguments))
            }
        }
        t.exports = r,
        r.proto = r(function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return r(this)
                },
                configurable: !0
            })
        })
    }
    , {}],
    141: [function(e, t, n) {
        function r(e, t, n) {
            if (!s(t))
                throw new TypeError("iterator must be a function");
            arguments.length < 3 && (n = this),
            "[object Array]" === u.call(e) ? o(e, t, n) : "string" == typeof e ? i(e, t, n) : a(e, t, n)
        }
        function o(e, t, n) {
            for (var r = 0, o = e.length; o > r; r++)
                c.call(e, r) && t.call(n, e[r], r, e)
        }
        function i(e, t, n) {
            for (var r = 0, o = e.length; o > r; r++)
                t.call(n, e.charAt(r), r, e)
        }
        function a(e, t, n) {
            for (var r in e)
                c.call(e, r) && t.call(n, e[r], r, e)
        }
        var s = e("is-function");
        t.exports = r;
        var u = Object.prototype.toString
          , c = Object.prototype.hasOwnProperty
    }
    , {
        "is-function": 139
    }],
    142: [function(e, t, n) {
        function r(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        n = t.exports = r,
        n.left = function(e) {
            return e.replace(/^\s*/, "")
        }
        ,
        n.right = function(e) {
            return e.replace(/\s*$/, "")
        }
    }
    , {}],
    143: [function(e, t, n) {
        var r = e("trim")
          , o = e("for-each")
          , i = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        t.exports = function(e) {
            if (!e)
                return {};
            var t = {};
            return o(r(e).split("\n"), function(e) {
                var n = e.indexOf(":")
                  , o = r(e.slice(0, n)).toLowerCase()
                  , a = r(e.slice(n + 1));
                "undefined" == typeof t[o] ? t[o] = a : i(t[o]) ? t[o].push(a) : t[o] = [t[o], a]
            }),
            t
        }
    }
    , {
        "for-each": 141,
        trim: 142
    }],
    144: [function(e, t, n) {
        arguments[4][122][0].apply(n, arguments)
    }
    , {
        dup: 122
    }]
}, {}, [1]);
