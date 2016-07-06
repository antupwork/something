/** 
 * Made by Spring/Summer 2016
 * Compiled at: 11/5/2016 10:36:38
 */
"use strict"
"use strict";
var __extends = this && this.__extends || function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e)
        e.hasOwnProperty(s) && (t[s] = e[s]);
    t.prototype = null  === e ? Object.create(e) : (i.prototype = e.prototype,
    new i)
}
, ss;
!function(t) {
    var e = function() {
        function t() {
            this._ = {}
        }
        return t.prototype.add = function(t, e) {
            this._[t] = e
        }
        ,
        t.prototype.get = function(t) {
            return this._[t]
        }
        ,
        t.prototype.set = function(t, e) {
            this._[t] = e
        }
        ,
        t.prototype.remove = function(t) {
            delete this._[t]
        }
        ,
        t.prototype.containsKey = function(t) {
            return !this._.hasOwnProperty(t)
        }
        ,
        t.prototype.forEach = function(t) {
            var e;
            for (e in this._)
                if (t(e, this._[e]) === !1)
                    return
        }
        ,
        t.prototype.toString = function() {
            var t = "{";
            return this.forEach(function(e, i) {
                t = t + "\n	" + e + " : " + i.toString()
            }),
            t + "\n}"
        }
        ,
        t
    }();
    t.Dictionary = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t) {
            this._ = [],
            this.len = 0,
            this.key = t
        }
        return t.prototype.add = function(t) {
            return 0 == this.len ? void this._.push(t) : void this._addAt(t, 0, this.len - 1)
        }
        ,
        t.prototype._addAt = function(t, e, i) {
            var s = t[this.key];
            if (s >= this._[i][this.key])
                return void this._.splice(i + 1, 0, t);
            if (s <= this._[e][this.key])
                return void this._.splice(e, 0, t);
            var n = e + Math.floor((i - e) / 2)
              , o = this._[n][this.key];
            o > s ? this._addAt(t, e, n - 1) : s > o ? this._addAt(t, n + 1, i) : this._.splice(n, 0, t)
        }
        ,
        t.prototype.getWithinBounds = function(t) {
            var e = [];
            if (0 == this.len)
                return e;
            if (t.start > this._[this.len - 1][this.key])
                return e;
            if (t.end >= this._[0][this.key]) {
                for (var i = 0; t.start > this._[i++][this.key]; )
                    ;
                for (e.push(this._[i]); this._[i++][this.key] <= t.start; )
                    e.push(this._[i])
            }
            return e
        }
        ,
        t
    }();
    t.SortedListByKey = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {
            this.__listeners = {}
        }
        return t.prototype.once = function(t, e) {
            this.addEventListener(t, function() {
                this.removeEventListener(t, e),
                e(arguments)
            })
        }
        ,
        t.prototype.addEventListener = function(t, e) {
            void 0 === this.__listeners[t] && (this.__listeners[t] = []),
            -1 === this.__listeners[t].indexOf(e) && this.__listeners[t].push(e)
        }
        ,
        t.prototype.hasEventListener = function(t, e) {
            return void 0 !== this.__listeners[t] && -1 !== this.__listeners[t].indexOf(e)
        }
        ,
        t.prototype.removeEventListener = function(t, e) {
            var i = this.__listeners[t];
            if (void 0 !== i) {
                var s = i.indexOf(e);
                -1 !== s && (i.splice(s, 1),
                s <= this.__i && this.__i--)
            }
        }
        ,
        t.prototype.dispatchEvent = function(t) {
            var e = this.__listeners[t.type];
            if (void 0 !== e)
                for (this.__i = 0; this.__i < e.length; )
                    e[this.__i](t),
                    this.__i++
        }
        ,
        t.prototype.destroy = function() {
            this.__listeners = void 0
        }
        ,
        t
    }();
    t.EventDispatcher = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e) {
            this.type = t,
            this.target = e
        }
        return t.COMPLETE = "complete",
        t.ERROR = "error",
        t
    }();
    t.TaskEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.isExecuting = !1,
            this.execute = this.__default_execute,
            this.revert = this.__
        }
        return __extends(i, e),
        i.prototype.__ = function() {}
        ,
        i.prototype.setStateToDefault = function() {
            this.isExecuting = !1,
            this.execute = this.__default_execute,
            this.revert = this.__
        }
        ,
        i.prototype.setStateToExecuting = function() {
            this.isExecuting = !0,
            this.execute = this.__executing_execute,
            this.revert = this.__executing_revert
        }
        ,
        i.prototype.setStateToComplete = function() {
            this.isExecuting = !1,
            this.execute = this.__complete_execute,
            this.revert = this.__complete_revert
        }
        ,
        i.prototype.__default_execute = function() {}
        ,
        i.prototype.__executing_execute = function() {}
        ,
        i.prototype.__complete_execute = function() {
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            })
        }
        ,
        i.prototype.onExecuteComplete = function(e) {
            this.setStateToComplete(),
            this.dispatchEvent(new t.TaskEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.__executing_revert = function() {
            this.setStateToDefault()
        }
        ,
        i.prototype.__complete_revert = function() {
            this.setStateToDefault()
        }
        ,
        i.prototype.destroy = function() {
            this.revert(),
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.EventDispatcher);
    t.ATask = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.tasks = new Array,
            this.nTasks = 0,
            this.nExecutedTasks = 0,
            this.onQueueItemErrorHandlerBind = this.onQueueItemCompleteHandler.bind(this),
            this.onQueueItemCompleteHandlerBind = this.onQueueItemCompleteHandler.bind(this)
        }
        return __extends(i, e),
        i.prototype.addTask = function(t) {
            this.tasks.push(t),
            this.nTasks++
        }
        ,
        i.prototype.__default_execute = function() {
            return this.nExecutedTasks == this.nTasks ? void this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            }) : (this.isPaused = !1,
            this.currentTask = this.tasks[this.nExecutedTasks],
            this.currentTask.addEventListener(t.TaskEvent.COMPLETE, this.onQueueItemCompleteHandlerBind),
            this.currentTask.addEventListener(t.TaskEvent.ERROR, this.onQueueItemCompleteHandlerBind),
            this.setStateToExecuting(),
            void this.currentTask.execute())
        }
        ,
        i.prototype.pause = function() {
            this.isExecuting === !0 && (this.isPaused = !0,
            this.setStateToDefault())
        }
        ,
        i.prototype.__executing_revert = function() {
            this.currentTask.removeEventListener(t.TaskEvent.COMPLETE, this.onQueueItemCompleteHandlerBind),
            this.currentTask.removeEventListener(t.TaskEvent.ERROR, this.onQueueItemCompleteHandlerBind),
            this.currentTask.revert(),
            this.currentTask = null ,
            e.prototype.__executing_revert.call(this)
        }
        ,
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.tasks = this.nTasks = this.nExecutedTasks = null 
        }
        ,
        i.prototype.onQueueItemErrorHandler = function(e) {
            this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            }),
            this.breakOnError !== !0 ? this.onQueueItemCompleteHandler(e) : (this.currentTask.removeEventListener(t.TaskEvent.COMPLETE, this.onQueueItemCompleteHandlerBind),
            this.currentTask.removeEventListener(t.TaskEvent.ERROR, this.onQueueItemCompleteHandlerBind),
            this.currentTask = null ,
            this.setStateToDefault(),
            this.dispatchEvent(new t.SSEvent(t.TaskEvent.ERROR,this)))
        }
        ,
        i.prototype.onQueueItemCompleteHandler = function(e) {
            this.currentTask.removeEventListener(t.TaskEvent.COMPLETE, this.onQueueItemCompleteHandlerBind),
            this.currentTask.removeEventListener(t.TaskEvent.ERROR, this.onQueueItemCompleteHandlerBind),
            this.currentTask = null ,
            this.nExecutedTasks++,
            this.setStateToDefault(),
            this.isPaused !== !0 && this.execute()
        }
        ,
        i
    }(t.ATask);
    t.TaskQueue = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.tasks = new Array,
            this.runningTasks = new Array,
            this.nTasks = 0,
            this.nExecutedTasks = 0,
            this.onQueueErrorBind = this.onItemComplete.bind(this),
            this.onItemCompleteBind = this.onItemComplete.bind(this)
        }
        return __extends(i, e),
        i.prototype.addTask = function(t) {
            this.tasks.push(t),
            this.nTasks++,
            this.isExecuting === !0 && this.executeTask(t)
        }
        ,
        i.prototype.executeTask = function(e) {
            e.addEventListener(t.TaskEvent.COMPLETE, this.onItemCompleteBind),
            e.addEventListener(t.TaskEvent.ERROR, this.onItemCompleteBind),
            e.execute()
        }
        ,
        i.prototype.cleanTask = function(e) {
            e.removeEventListener(t.TaskEvent.COMPLETE, this.onItemCompleteBind),
            e.removeEventListener(t.TaskEvent.ERROR, this.onItemCompleteBind)
        }
        ,
        i.prototype.cancelTask = function(t) {
            this.cleanTask(t),
            t.revert()
        }
        ,
        i.prototype.__default_execute = function() {
            e.prototype.setStateToExecuting.call(this),
            this.nExecutedTasks = 0,
            this.runningTasks = t.ArrayUtility.CloneArray(this.tasks);
            for (var i = 0, s = this.nTasks; s > i; )
                this.executeTask(this.tasks[i++])
        }
        ,
        i.prototype.__executing_execute = function() {
            this.nExecutedTasks = 0,
            this.runningTasks = t.ArrayUtility.CloneArray(this.tasks);
            for (var e = 0, i = this.nTasks; i > e; )
                this.executeTask(this.tasks[e++])
        }
        ,
        i.prototype.__complete_execute = function() {}
        ,
        i.prototype.__executing_revert = function() {
            for (var t = this.nTasks; t--; )
                this.cancelTask(this.runningTasks[t]);
            e.prototype.setStateToDefault.call(this)
        }
        ,
        i.prototype.__complete_revert = function() {}
        ,
        i.prototype.destroy = function() {
            this.revert(),
            this.tasks = this.nTasks = this.nExecutedTasks = null 
        }
        ,
        i.prototype.onItemError = function(e) {
            this.runningTasks.removeItem(e.target),
            this.breakOnError !== !0 ? this.onItemComplete(e) : (this.cleanTask(e.target),
            this.setStateToDefault(),
            this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            }))
        }
        ,
        i.prototype.onItemComplete = function(e) {
            this.cleanTask(e.target),
            this.runningTasks.removeItem(e.target),
            ++this.nExecutedTasks == this.nTasks && (this.setStateToDefault(),
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            }))
        }
        ,
        i
    }(t.ATask);
    t.TaskQueueAsync = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e, i) {
            this.h = t,
            this.s = e,
            this.l = i
        }
        return e.FromString = function(t) {
            var i = t.match(/\d+/g);
            return new e(parseFloat(i[0]) / 360,parseFloat(i[1]) / 100,parseFloat(i[2]) / 100)
        }
        ,
        e.FromArray = function(t) {
            return new e(t[0],t[1],t[2])
        }
        ,
        e.FromRGB = function(t) {
            return e.FromRGBValues(t.r, t.g, t.b)
        }
        ,
        e.FromRGBValues = function(t, i, s) {
            t /= 255,
            i /= 255,
            s /= 255;
            var n, o, r = Math.max(t, i, s), a = Math.min(t, i, s), h = (r + a) / 2;
            if (r == a)
                n = o = 0;
            else {
                var l = r - a;
                switch (o = h > .5 ? l / (2 - r - a) : l / (r + a),
                r) {
                case t:
                    n = (i - s) / l + (s > i ? 6 : 0);
                    break;
                case i:
                    n = (s - t) / l + 2;
                    break;
                case s:
                    n = (t - i) / l + 4
                }
                n /= 6
            }
            return new e(n,o,h)
        }
        ,
        e.FromJSON = function(t) {
            return new e(t.h,t.s,t.l)
        }
        ,
        e.FromHEXNumber = function(t) {
            return e.FromRGBValues(t >> 16 & 255, t >> 8 & 255, 255 & t)
        }
        ,
        e.prototype.clone = function() {
            return new e(this.h,this.s,this.l)
        }
        ,
        e.prototype.toString = function() {
            return "hsl(" + Math.round(360 * this.h) + ", " + Math.round(100 * this.s) + "%, " + Math.round(100 * this.l) + "%)"
        }
        ,
        e.prototype.toJSON = function() {
            return {
                h: this.h,
                s: this.s,
                l: this.l
            }
        }
        ,
        e._HueToRGB = function(t, e, i) {
            return 0 > i && (i += 1),
            i > 1 && (i -= 1),
            1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        ,
        e.prototype.toRGB = function() {
            if (0 == this.s)
                return new t.RGB(this.l,this.l,this.l);
            var i = this.l < .5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s
              , s = 2 * this.l - i;
            return new t.RGB(Math.round(255 * e._HueToRGB(s, i, this.h + 1 / 3)),Math.round(255 * e._HueToRGB(s, i, this.h)),Math.round(255 * e._HueToRGB(s, i, this.h - 1 / 3)))
        }
        ,
        e.prototype.toHEXNumber = function() {
            var t = this.toRGB();
            return (t.r << 16) + (t.g << 8) + t.b
        }
        ,
        e.prototype.blend = function(t, i) {
            return new e(Math.round(this.h + i * (t.h - this.h)),Math.round(this.s + i * (t.s - this.s)),Math.round(this.l + i * (t.l - this.l)))
        }
        ,
        e.prototype.blendInBetween = function(t, e, i) {
            this.h = Math.round(t.h + i * (e.h - t.h)),
            this.s = Math.round(t.s + i * (e.s - t.s)),
            this.l = Math.round(t.l + i * (e.l - t.l))
        }
        ,
        e
    }();
    t.HSL = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e, i) {
            this.r = t,
            this.g = e,
            this.b = i
        }
        return e.FromString = function(i) {
            var s = i.match(/\d+/g);
            return s.forEach(t.ArrayUtility.ForEachMakeFloat),
            e.FromArray(s)
        }
        ,
        e.FromArray = function(t) {
            return new e(t[0],t[1],t[2])
        }
        ,
        e.FromJSON = function(t) {
            return new e(t.r,t.g,t.b)
        }
        ,
        e.FromHex = function(t) {
            return t = "#" == t.charAt(0) ? t.substring(1, 7) : t,
            3 === t.length && (t = "" + t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
            new e(parseInt(t.substring(0, 2), 16),parseInt(t.substring(2, 4), 16),parseInt(t.substring(4, 6), 16))
        }
        ,
        e.FromHexNumber = function(t) {
            return new e(t >> 16 & 255,t >> 8 & 255,255 & t)
        }
        ,
        e.prototype.getLightness = function() {
            var t = this.r / 255
              , e = this.g / 255
              , i = this.b / 255
              , s = Math.max(t, e, i)
              , n = Math.min(t, e, i);
            return (s + n) / 2
        }
        ,
        e.prototype.clone = function() {
            return new e(this.r,this.g,this.b)
        }
        ,
        e.prototype.copy = function(t) {
            this.r = t.r,
            this.g = t.g,
            this.b = t.b
        }
        ,
        e.prototype.toString = function() {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
        }
        ,
        e.prototype.toHexString = function() {
            return "#" + t.ColorUtility.PrependZeroIfNecessaryHelper(this.r.toString(16)) + t.ColorUtility.PrependZeroIfNecessaryHelper(this.g.toString(16)) + t.ColorUtility.PrependZeroIfNecessaryHelper(this.b.toString(16))
        }
        ,
        e.prototype.toHexNumber = function() {
            return (this.r << 16) + (this.g << 8) + this.b
        }
        ,
        e.prototype.toJSON = function() {
            return {
                r: this.r,
                g: this.g,
                b: this.b
            }
        }
        ,
        e.prototype.toRGB = function() {
            return new e(this.r,this.g,this.b)
        }
        ,
        e.prototype.toRGBA = function(e) {
            return new t.RGBA(this.r,this.g,this.b,null  === e ? 1 : e)
        }
        ,
        e.prototype.blendRGB = function(t, i) {
            return new e(Math.round(this.r + i * (t.r - this.r)),Math.round(this.g + i * (t.g - this.g)),Math.round(this.b + i * (t.b - this.b)))
        }
        ,
        e.prototype.blendInBetween = function(t, e, i) {
            this.r = Math.round(t.r + i * (e.r - t.r)),
            this.g = Math.round(t.g + i * (e.g - t.g)),
            this.b = Math.round(t.b + i * (e.b - t.b))
        }
        ,
        e.prototype.darken = function(t) {
            return this.blendRGB(e.BLACK, t)
        }
        ,
        e.prototype.brigthen = function(t) {
            return this.blendRGB(e.WHITE, t)
        }
        ,
        e.BLACK = new e(0,0,0),
        e.WHITE = new e(255,255,255),
        e
    }();
    t.RGB = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t, i, s, n) {
            e.call(this, t, i, s),
            this.a = n
        }
        return __extends(i, e),
        i.FromString = function(e) {
            var s = e.match(/\d+/g);
            return s.forEach(t.ArrayUtility.ForEachMakeFloat),
            i.FromArray(s)
        }
        ,
        i.FromArray = function(t) {
            return new i(t[0],t[1],t[2],t[3] || 1)
        }
        ,
        i.FromJSON = function(t) {
            return new i(t.r,t.g,t.b,t.a)
        }
        ,
        i.FromHex = function(t) {
            t = "#" == t.charAt(0) ? t.substring(1, 9) : t,
            4 === t.length && (t = "" + t[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
            var e = parseInt(t.substring(6, 8), 16) / 255;
            return new i(parseInt(t.substring(0, 2), 16),parseInt(t.substring(2, 4), 16),parseInt(t.substring(4, 6), 16),e || 1)
        }
        ,
        i.prototype.blendRGBA = function(t, e) {
            return new i(Math.round(this.r + e * (t.r - this.r)),Math.round(this.g + e * (t.g - this.g)),Math.round(this.b + e * (t.b - this.b)),Math.round(this.a + e * (t.a - this.a)))
        }
        ,
        i.prototype.blendRGB = function(t, e) {
            return new i(Math.round(this.r + e * (t.r - this.r)),Math.round(this.g + e * (t.g - this.g)),Math.round(this.b + e * (t.b - this.b)),this.a)
        }
        ,
        i.prototype.clone = function() {
            return new i(this.r,this.g,this.b,this.a)
        }
        ,
        i.prototype.toString = function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
        }
        ,
        i.prototype.toJSON = function() {
            return {
                r: this.r,
                g: this.g,
                b: this.b,
                a: this.a
            }
        }
        ,
        i
    }(t.RGB);
    t.RGBA = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.SetTransition = function(i, s, n, o) {
            if (i.style[t.css.name.TRANSITION] = s,
            "function" == typeof n || o !== !1) {
                var r = function(t) {
                    t.target === i && (i.removeEventListener("transitionend", r),
                    o !== !1 && e.SetTransition(i, "", null , !1),
                    "function" == typeof n && n(),
                    t.stopPropagation())
                }
                ;
                i.addEventListener("transitionend", r)
            }
        }
        ,
        e.RemoveTransition = function(e) {
            e.style[t.css.name.TRANSITION] = "none"
        }
        ,
        e.SetOrigin = function(e, i, s) {
            e.style[t.StyleUtility.GetVendorPrefix("TransformOrigin")] = i + "px " + s + "px"
        }
        ,
        e.SetTranslate = function(e, i, s) {
            e.style[t.css.name.TRANSFORM] = t.Polyfills.Create3DTranslate(i, s)
        }
        ,
        e.SetTranslateRotate = function(e, i, s, n) {
            e.style[t.css.name.TRANSFORM] = t.Polyfills.Create3DTranslate(i, s) + " rotate(" + n + "deg)"
        }
        ,
        e.SetTranslateScale = function(e, i, s, n) {
            e.style[t.css.name.TRANSFORM] = t.Polyfills.Create3DTranslate(i, s) + " scale(" + n + ")"
        }
        ,
        e.SetTranslateScaleRotate = function(e, i, s, n, o) {
            e.style[t.css.name.TRANSFORM] = t.Polyfills.Create3DTranslate(i, s) + " scale(" + n + ") rotate(" + o + "deg)"
        }
        ,
        e.SetRotate = function(e, i) {
            e.style[t.css.name.TRANSFORM] = "rotate(" + i + "deg)"
        }
        ,
        e.SetRotateScale = function(e, i, s) {
            e.style[t.css.name.TRANSFORM] = "rotate(" + i + "deg) scale(" + s + ")"
        }
        ,
        e.SetScale = function(e, i) {
            e.style[t.css.name.TRANSFORM] = "scale(" + i + ")"
        }
        ,
        e.SetScaleXY = function(e, i, s) {
            e.style[t.css.name.TRANSFORM] = "scaleX(" + i + ") scaleY(" + s + ")"
        }
        ,
        e.SetTransformMatrix = function(e, i) {
            e.style[t.css.name.TRANSFORM] = i.toString()
        }
        ,
        e.SetOpacity = function(e, i) {
            e.style[t.css.name.OPACITY] = i
        }
        ,
        e.ForceUpdate = function(t) {
            t.offsetHeight
        }
        ,
        e
    }();
    t.CSS = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.EaseInOut = function(t) {
            return "cubic-bezier(" + t + ", 0, " + (1 - t) + ", 1)"
        }
        ,
        t.EaseIn = function(t) {
            return "cubic-bezier(" + t + ", 0, 1, 1)"
        }
        ,
        t.EaseOut = function(t) {
            return "cubic-bezier(0, 0, " + (1 - t) + ", 1)"
        }
        ,
        t.Linear = "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
        t.SineIn = "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        t.QuadIn = "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
        t.CubicIn = "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
        t.QuartIn = "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
        t.QuintIn = "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        t.ExpoIn = "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
        t.CircIn = "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
        t.BackIn = "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        t.SineOut = "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        t.QuadOut = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        t.CubicOut = "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        t.QuartOut = "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        t.QuintOut = "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        t.ExpoOut = "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        t.CircOut = "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
        t.BackOut = "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        t.SineInOut = "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
        t.QuadInOut = "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        t.CubicInOut = "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        t.QuartInOut = "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        t.QuintInOut = "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
        t.ExpoInOut = "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
        t.CircInOut = "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
        t.BackInOut = "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        t.SineInOutFixed = "cubic-bezier(0.45, 0, 0.55, 1)",
        t.QuadInOutFixed = "cubic-bezier(0.45, 0, 0.55, 1)",
        t.CubicInOutFixed = "cubic-bezier(0.64, 0, 0.36, 1)",
        t.QuartInOutFixed = "cubic-bezier(0.83, 0, 0.17, 1)",
        t.QuintInOutFixed = "cubic-bezier(0.88, 0, 0.12, 1)",
        t.ExpoInOutFixed = "cubic-bezier(1, 0, 0, 1)",
        t
    }();
    t.CSSEase = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t._UpperCaseFunction = function(t, e) {
            return e.toUpperCase()
        }
        ,
        t._getVendorStyleName = function(e) {
            if (e = e.charAt(0).toLowerCase() + e.slice(1),
            e in t._CssTestStyle)
                return e;
            for (var i, s = e.charAt(0).toUpperCase() + e.slice(1), n = t._CssPrefixes.length; n--; )
                if (i = t._CssPrefixes[n] + s,
                i in t._CssTestStyle)
                    return i
        }
        ,
        t.GetVendorPrefix = function(e) {
            return t._PrefixTable[e] || (t._PrefixTable[e] = t._getVendorStyleName(e))
        }
        ,
        t.convertJSPropertyToCSS = function(e) {
            var i = new RegExp("([a-z])([A-Z])","g")
              , s = new RegExp("(^" + t._CssPrefixes.join("|") + ")");
            return e = e.replace(i, "$1-$2"),
            e = e.replace(s, "-$1"),
            e.toLowerCase()
        }
        ,
        t.GetStyleValue = function(t, e, i) {
            var s = window.getComputedStyle(t).getPropertyValue(e);
            return null  != s && "" !== s && "none" !== s && "auto" !== s && "auto auto" !== s || (s = i ? i : "0"),
            s
        }
        ,
        t.GetUnit = function(e) {
            var i = e.match(t._GetUnitRegex);
            return i.length > 0 ? i[0].toLowerCase() : null 
        }
        ,
        t.ConvertToPercentagesOrAuto = function(t) {
            return null  === t ? "auto" : Math.round(100 * t) + "%"
        }
        ,
        t._RmsPrefix = /^-ms-/,
        t._RdashAlpha = /-([\da-z])/gi,
        t._CssPrefixes = ["Khtml", "O", "ms", "Moz", "Webkit"],
        t._CssTestStyle = document.getElementsByTagName("html")[0].style,
        t._PrefixTable = {},
        t._GetUnitRegex = /[a-z%]+/,
        t
    }();
    t.StyleUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e;
    !function(e) {
        var i = function() {
            function e() {}
            return e.OPACITY = t.StyleUtility.GetVendorPrefix("opacity"),
            e.TRANSFORM = t.StyleUtility.GetVendorPrefix("transform"),
            e.TRANSFORMORIGIN = t.StyleUtility.GetVendorPrefix("transformOrigin"),
            e.TRANSITION = t.StyleUtility.GetVendorPrefix("transition"),
            e.ANIMATIONNAME = t.StyleUtility.GetVendorPrefix("animationName"),
            e
        }();
        e.name = i
    }(e = t.css || (t.css = {}))
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Create3DTranslate = function(t, i) {
            return e._TranslateStart + t + "px," + i + "px" + e._TranslateEnd
        }
        ,
        e.Create3DTranslateFromString = function(t, i) {
            return e._TranslateStart + t + "," + i + e._TranslateEnd
        }
        ,
        e.Init = function() {
            e._TranslateStart = t.DeviceInfo.Has3D() ? "translate3d(" : "translate(",
            e._TranslateEnd = t.DeviceInfo.Has3D() ? ",0px)" : ")"
        }
        ,
        e
    }();
    t.Polyfills = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.x = t,
            this.y = e
        }
        return e.FromZero = function() {
            return new e(0,0)
        }
        ,
        e.FromJSON = function(t) {
            return new e(t.x,t.y)
        }
        ,
        e.FromArray = function(t) {
            return new e(t[0],t[1])
        }
        ,
        e.FromString = function(t) {
            var i = t.match(/(-?[\d\.?]+)/g);
            return new e(parseFloat(i[0]),parseFloat(i[1]))
        }
        ,
        e.prototype.clone = function() {
            return new e(this.x,this.y)
        }
        ,
        e.prototype.isZero = function() {
            return null  !== this.x && 0 !== this.x && null  !== this.y && 0 !== this.y
        }
        ,
        e.prototype.set = function(t, e) {
            this.x = t,
            this.y = e
        }
        ,
        e.prototype.copy = function(t) {
            this.x = t.x,
            this.y = t.y
        }
        ,
        e.prototype.add = function(t) {
            return new e(this.x + t.x,this.y + t.y)
        }
        ,
        e.prototype.addIn = function(t) {
            this.x += t.x,
            this.y += t.y
        }
        ,
        e.prototype.addValues = function(t, i) {
            return new e(this.x + t,this.y + i)
        }
        ,
        e.prototype.addValuesIn = function(t, e) {
            this.x += t,
            this.y += e
        }
        ,
        e.prototype.subtract = function(t) {
            return new e(this.x - t.x,this.y - t.y)
        }
        ,
        e.prototype.subtractIn = function(t) {
            this.x -= t.x,
            this.y -= t.y
        }
        ,
        e.prototype.subtractValues = function(t, i) {
            return new e(this.x + t,this.y + i)
        }
        ,
        e.prototype.subtractValuesIn = function(t, e) {
            this.x -= t,
            this.y -= e
        }
        ,
        e.prototype.multiply = function(t) {
            return new e(this.x * t.x,this.y * t.y)
        }
        ,
        e.prototype.multiplyIn = function(t) {
            this.x *= t.x,
            this.y *= t.y
        }
        ,
        e.prototype.multiplyValues = function(t, i) {
            return new e(this.x * t,this.y * i)
        }
        ,
        e.prototype.multiplyValuesIn = function(t, e) {
            this.x *= t,
            this.y *= e
        }
        ,
        e.prototype.scale = function(t) {
            return new e(this.x * t,this.y * t)
        }
        ,
        e.prototype.scaleIn = function(t) {
            this.x *= t,
            this.y *= t
        }
        ,
        e.prototype.divide = function(t) {
            return new e(this.x / t.x,this.y / t.y)
        }
        ,
        e.prototype.divideIn = function(t) {
            this.x /= t.x,
            this.y /= t.y
        }
        ,
        e.prototype.divideValues = function(t, i) {
            return new e(this.x / t,this.y / i)
        }
        ,
        e.prototype.divideValuesIn = function(t, e) {
            this.x /= t,
            this.y /= e
        }
        ,
        e.prototype.lerp = function(t, i) {
            return new e(this.x + i * (t.x - this.x),this.y + i * (t.y - this.y))
        }
        ,
        e.prototype.lerpIn = function(t, e) {
            this.x += e * (t.x - this.x),
            this.y += e * (t.y - this.y)
        }
        ,
        e.prototype.lerpCopy = function(t, e, i) {
            this.x = t.x + i * (e.x - t.x),
            this.y = t.y + i * (e.y - t.y)
        }
        ,
        e.prototype.equal = function(t) {
            return t.x == this.x && t.y == this.y
        }
        ,
        e.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y
        }
        ,
        e.prototype.cross = function(t) {
            return this.x * t.x + this.y * t.x
        }
        ,
        e.prototype.abs = function() {
            this.x = Math.abs(this.x),
            this.y = Math.abs(this.y)
        }
        ,
        e.prototype.negate = function() {
            this.x = -this.x,
            this.y = -this.y
        }
        ,
        e.prototype.normalize = function() {
            var t = this.clone();
            return t.normalizeIn(),
            t
        }
        ,
        e.prototype.normalizeIn = function() {
            var t = this.x * this.x + this.y * this.y;
            t > 0 && (t = Math.sqrt(t),
            this.x /= t,
            this.y /= t)
        }
        ,
        e.prototype.perpendicular = function() {
            return new t.VectorPair(new e(-this.y,this.x),new e(this.y,-this.x))
        }
        ,
        e.prototype.distanceTo = function(t) {
            var e = t.x - this.x
              , i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        }
        ,
        e.prototype.getDistance = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        ,
        e.prototype.setDistance = function(t) {
            var e = this.getAngle();
            this.x = Math.cos(e) * t,
            this.y = Math.sin(e) * t
        }
        ,
        e.prototype.squaredDistance = function() {
            return this.x * this.x + this.y * this.y
        }
        ,
        e.prototype.squaredDistanceTo = function(t) {
            var e = t.x - this.x
              , i = t.y - this.y;
            return e * e + i * i
        }
        ,
        e.prototype.transformIn = function(t) {
            var e = t.toArray();
            this.x = this.x * e[0] + this.y * e[1] + e[4],
            this.x = this.x * e[2] + this.y * e[4] + e[5]
        }
        ,
        e.prototype.angleTo = function(t) {
            return Math.atan2(t.y - this.y, t.x - this.x)
        }
        ,
        e.prototype.setAngleIn = function(t) {
            var e = this.getDistance();
            this.set(Math.cos(t) * e, Math.sin(t) * e)
        }
        ,
        e.prototype.getAngle = function() {
            return Math.atan2(this.y, this.x)
        }
        ,
        e.prototype.rotateIn = function(t, e) {
            var i = this.x - e.x
              , s = this.y - e.y
              , n = Math.sin(t)
              , o = Math.cos(t);
            this.x = i * o - s * n + e.x,
            this.y = i * n + s * o + e.y
        }
        ,
        e.prototype.modulo = function(t) {
            return new e(this.x % t.x,this.y % t.y)
        }
        ,
        e.prototype.moduloIn = function(t) {
            this.x %= t.x,
            this.y %= t.y
        }
        ,
        e.prototype.floor = function() {
            return new e(Math.floor(this.x),Math.floor(this.y))
        }
        ,
        e.prototype.floorIn = function() {
            this.x = Math.floor(this.x),
            this.y = Math.floor(this.y)
        }
        ,
        e.prototype.round = function() {
            return new e(Math.round(this.x),Math.round(this.y))
        }
        ,
        e.prototype.roundIn = function() {
            this.x = Math.round(this.x),
            this.y = Math.round(this.y)
        }
        ,
        e.prototype.ceil = function() {
            return new e(Math.ceil(this.x),Math.ceil(this.y))
        }
        ,
        e.prototype.ceilIn = function() {
            this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y)
        }
        ,
        e.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        ,
        e.prototype.getAxisLength = function(t) {
            return t.InsideOf(this)
        }
        ,
        e.prototype.getSize = function() {
            return this
        }
        ,
        e.prototype.getWidth = function() {
            return this.x
        }
        ,
        e.prototype.getHeight = function() {
            return this.y
        }
        ,
        e.prototype.getAspectRatio = function() {
            return this.x / this.y
        }
        ,
        e.prototype.toString = function() {
            return this.x + "," + this.y
        }
        ,
        e.prototype.toStringWithUnit = function(t) {
            return this.x + t + "," + this.y + t
        }
        ,
        e.prototype.toWiseString = function() {
            return 0 == this.x && 0 == this.y ? "" : this.x + "," + this.y
        }
        ,
        e.prototype.toCSSString = function() {
            return this.x + " " + this.y
        }
        ,
        e.prototype.toCSSStringWithUnit = function(t) {
            return this.x + t + " " + this.y + t
        }
        ,
        e.prototype.toJSON = function() {
            return {
                x: this.x,
                y: this.y
            }
        }
        ,
        e.prototype.toSVGString = function(t) {
            return t + this.x + "," + this.y
        }
        ,
        e.ZERO = new e(0,0),
        e
    }();
    t.Vector = e,
    t.Vec = e,
    t.Area = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.AddEventListener = function(t, e) {
            this._eventDispatcher.addEventListener(t, e)
        }
        ,
        e.RemoveEventListener = function(t, e) {
            this._eventDispatcher.removeEventListener(t, e)
        }
        ,
        e.DispatchEvent = function(t) {
            this._eventDispatcher.dispatchEvent(t)
        }
        ,
        e.HasTransition = function() {
            return void 0 !== t.css.name.TRANSITION
        }
        ,
        e.Init = function() {
            e.InitBrowsers(),
            e.OnBrowserResize(),
            window.addEventListener && window.addEventListener("resize", e.OnBrowserResize)
        }
        ,
        e.OnBrowserResize = function(i) {
            e._size.set(window.innerWidth, window.innerHeight);
            var s = window.devicePixelRatio ? window.devicePixelRatio : 1;
            s !== e.PixelRatio && (e.PixelRatio = s,
            e.DispatchEvent(new t.SSEvent(t.DeviceInfoEvent.PIXEL_DENSITY_CHANGED,e)))
        }
        ,
        e.GetViewportSize = function() {
            return e._size
        }
        ,
        e.GetViewportWidth = function() {
            return e._size.x
        }
        ,
        e.GetViewportHeight = function() {
            return e._size.y
        }
        ,
        e.GetDocumentHeight = function() {
            return document.body.scrollHeight
        }
        ,
        e.HasWebGlSupport = function() {
            if (void 0 !== e._hasWebGl)
                return e._hasWebGl;
            var t, i, s = {
                antialias: !0,
                stencil: !1,
                depth: !1
            };
            try {
                i = e.CanvasTestElement || document.createElement("canvas"),
                t = i.getContext("webgl", s) || i.getContext("experimental-webgl", s)
            } catch (n) {}
            return e._hasWebGl = !!t,
            !!t
        }
        ,
        e.HasCanvasSupport = function() {
            var t = e.CanvasTestElement || document.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }
        ,
        e.Has3D = function() {
            return e._has3DSupport || e._Has3DCheck()
        }
        ,
        e._Has3DCheck = function() {
            if (!window.getComputedStyle)
                return !1;
            var e, i = document.createElement("p"), s = t.StyleUtility.GetVendorPrefix("transform");
            return document.body.insertBefore(i, null ),
            void 0 !== i.style[s] && (i.style[s] = "translate3d(1px,1px,1px)",
            e = window.getComputedStyle(i).getPropertyValue(s)),
            document.body.removeChild(i),
            void 0 !== e && "" !== e && "none" !== e
        }
        ,
        e.hasPointerEvents = function() {
            return void 0 === this._hasPointerEvents && (this._hasPointerEvents = this.getPointerEventsSupport()),
            this._hasPointerEvents
        }
        ,
        e.getPointerEventsSupport = function() {
            var t = document.createElement("a").style;
            return t.cssText = "pointer-events: auto",
            "auto" === t.pointerEvents
        }
        ,
        e.InitBrowsers = function() {
            var t = navigator.userAgent.toLowerCase();
            if (-1 != t.indexOf("msie"))
                this.IsIE = !0,
                this.IEVersion = parseInt(t.split("msie")[1]);
            else if (-1 != t.indexOf("firefox"))
                this.IsFireFox = !0;
            else if (-1 != t.indexOf("opera"))
                this.IsOpera = !0;
            else if (-1 != t.indexOf("chrome"))
                this.IsChrome = !0;
            else if (-1 != t.indexOf("crios"))
                this.IsChrome = !0;
            else if (-1 != t.indexOf("safari")) {
                this.IsSafari = !0;
                var e = t.match(/version\/(\d+)/i).splice(1, 1)[0];
                this.SafariVersion = parseInt(e)
            }
        }
        ,
        e._eventDispatcher = new t.EventDispatcher,
        e.HasPopState = "onpopstate" in window,
        e.HasTouch = "ontouchstart" in window,
        e.IsLessOrEqualToIE8 = !document.addEventListener,
        e.IsMobileDevice = null  !== navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(BlackBerry)|(IEMobile)|(Windows Phone)|(kindle)|(Opera Mini)|(webOS)/i),
        e.PixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1,
        e.PixelRatioInt = Math.ceil(e.PixelRatio),
        e._size = new t.Area(null ,null ),
        e.IsMac = -1 !== navigator.platform.toUpperCase().indexOf("MAC"),
        e.IsIOS = !(!e.IsMobileDevice || null  === navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i)),
        e.IsAndroid = !(!e.IsMobileDevice || null  === navigator.userAgent.match(/(Android)/i)),
        e.IsIE = !1,
        e.IsChrome = !1,
        e.IsSafari = !1,
        e.IsOpera = !1,
        e
    }();
    t.DeviceInfo = e
}(ss || (ss = {})),
ss.DeviceInfo.Init();
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.PIXEL_DENSITY_CHANGED = "pixelDensityChanged",
        t
    }();
    t.DeviceInfoEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    t.MouseEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.PROGRESS = "progress",
        e
    }(t.TaskEvent);
    t.RequestEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e) {
            this.type = t,
            this.target = e
        }
        return t
    }();
    t.SSEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.CHANGED = "changed",
        t
    }();
    t.TextureEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e) {
            this.type = t,
            this.target = e
        }
        return t.SHOWN = "show_complete",
        t.HIDDEN = "hide_complete",
        t
    }();
    t.YoYoEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {
            this._ = {}
        }
        return t.prototype.addClass = function(t, e) {
            t = t.toLowerCase(),
            this._[t] = e
        }
        ,
        t.prototype.get = function(t) {
            return t = t.toLowerCase(),
            this._[t]
        }
        ,
        t.prototype.create = function(t, e) {
            return t = t.toLowerCase(),
            new this._[t].apply(null ,e)
        }
        ,
        t.prototype.destroy = function() {
            this._ = void 0
        }
        ,
        t
    }();
    t.RuntimeFactory = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t) {
            this.count = t
        }
        return t.prototype.add = function(t) {
            this.count += t
        }
        ,
        t.prototype.get = function() {
            return this.count
        }
        ,
        t
    }();
    t.Counter = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this._ = t,
            this.cols = e,
            this.len = t.length
        }
        return e.FromString = function(i, s) {
            i = i.split("(")[1],
            i = i.split(")")[0];
            var n = i.split(",");
            return n.forEach(t.ArrayUtility.ForEachMakeFloat),
            new e(n,s)
        }
        ,
        e.prototype.clone = function() {
            return new e(t.ArrayUtility.CloneArray(this._),this.cols)
        }
        ,
        e.prototype.toString = function() {
            return this._.join(", ")
        }
        ,
        e.prototype.get = function(t) {
            return this._[t]
        }
        ,
        e.prototype.set = function(t) {
            return this._[t]
        }
        ,
        e.prototype.interpolate = function(i, s) {
            for (var n = [], o = this.len; o--; )
                n[o] = t.MathUtility.Lerp(this._[o], i._[o], s);
            return new e(n,this.cols)
        }
        ,
        e.prototype.multiply = function(t) {}
        ,
        e.prototype.fromArray = function(t) {}
        ,
        e
    }();
    t.Matrix = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e) {
            this.start = t,
            this.end = e
        }
        return t.FromArrayKey = function(t) {
            throw new Error("This function is not done")
        }
        ,
        t.FromUnorderedArray = function(e) {
            return new t(Math.min.apply(null , e),Math.max.apply(null , e))
        }
        ,
        t.FromUnorderedValues = function(e, i) {
            return i > e ? new t(e,i) : new t(i,e)
        }
        ,
        t.prototype.set = function(t, e) {
            this.start = t,
            this.end = e
        }
        ,
        t.prototype.copy = function(t) {
            this.start = t.start,
            this.end = t.end
        }
        ,
        t.prototype.clone = function() {
            return new t(this.start,this.end)
        }
        ,
        t.prototype.clear = function() {
            this.start = this.end = null 
        }
        ,
        t.prototype.contains = function(t) {
            return t >= this.start && t <= this.end
        }
        ,
        t.prototype.containsRange = function(t) {
            return t.start >= this.start && t.end <= this.end
        }
        ,
        t.prototype.intersectsWithRange = function(t) {
            return t.start <= this.end && t.end >= this.start || t.end >= this.start && t.start <= this.end
        }
        ,
        t.prototype.concat = function(t) {
            var e = this.clone();
            return e.concatIn(t),
            e
        }
        ,
        t.prototype.concatIn = function(t) {
            null  !== t.start && (this.start = null  === this.start ? t.start : Math.min(this.start, t.start)),
            null  !== t.end && (this.end = null  === this.end ? t.end : Math.max(this.end, t.end))
        }
        ,
        t.prototype.include = function(e) {
            return new t(null  === this.start ? e : Math.min(this.start, e),null  === this.end ? e : Math.max(this.end, e))
        }
        ,
        t.prototype.includeIn = function(t) {
            this.start = null  === this.start ? t : Math.min(this.start, t),
            this.end = null  === this.end ? t : Math.max(this.end, t)
        }
        ,
        t.prototype.scale = function(e) {
            return new t(null  === this.start ? null  : this.start * e,null  === this.end ? null  : this.end * e)
        }
        ,
        t.prototype.scaleIn = function(t) {
            this.start = null  === this.start ? null  : this.start * t,
            this.end = null  === this.end ? null  : this.end * t
        }
        ,
        t.prototype.intersection = function(e) {
            var i = Math.max(this.start, e.start)
              , s = Math.min(this.end, e.end);
            return s >= i ? new t(i,s) : null 
        }
        ,
        t.prototype.equals = function(t) {
            return this.start === t.start && this.end === t.end
        }
        ,
        t.prototype.offset = function(e) {
            return new t(null  === this.start ? null  : this.start + e,null  === this.end ? null  : this.end + e)
        }
        ,
        t.prototype.offsetIn = function(t) {
            this.start = null  === this.start ? null  : this.start + t,
            this.end = null  === this.end ? null  : this.end + t
        }
        ,
        t.prototype.distanceToNumber = function(t) {
            return t < this.start ? this.start - t : t > this.end ? t - this.end : 0
        }
        ,
        t.prototype.distanceToRange = function(t) {
            return t.end < this.start ? this.start - t.end : t.start > this.end ? t.start - this.end : 0
        }
        ,
        t.prototype.limitValue = function(t) {
            return Math.min(this.end, Math.max(this.start, t))
        }
        ,
        t.prototype.length = function() {
            return this.end - this.start
        }
        ,
        t.prototype.toString = function() {
            return "[" + this.start + "-" + this.end + "]"
        }
        ,
        t
    }();
    t.Range = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.IsInt = function(t) {
            return isFinite(t) && t % 1 == 0
        }
        ,
        t.GetSign = function(t) {
            return 0 == t ? 0 : t > 0 ? 1 : -1
        }
        ,
        t.Limit = function(t, e, i) {
            return Math.min(i, Math.max(e, t))
        }
        ,
        t.Sum = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
                e[i - 0] = arguments[i];
            return e.reduce(t._SumReduceFunc, 0)
        }
        ,
        t._SumReduceFunc = function(t, e) {
            return t + e
        }
        ,
        t.Average = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
                e[i - 0] = arguments[i];
            return t.Sum.apply(null , e) / arguments.length;
        }
        ,
        t.GetRandomInt = function(t) {
            return Math.floor(Math.random() * t)
        }
        ,
        t.ToRadians = function(e) {
            return e * t.DEGREE
        }
        ,
        t.ToDegrees = function(e) {
            return e * t.RADIAN
        }
        ,
        t.Modulo = function(t, e) {
            return t %= e,
            0 > t * e ? t + e : t
        }
        ,
        t.Lerp = function(t, e, i) {
            return t + i * (e - t)
        }
        ,
        t.LerpRadians = function(e, i, s) {
            var n = ((i - e) % t.DOUBLE_PI + 3 * Math.PI) % t.DOUBLE_PI - Math.PI;
            return e + s * n
        }
        ,
        t.ModulaShortest = function(e, i, s) {
            return ((i - e) % t.DOUBLE_PI + 3 * Math.PI) % t.DOUBLE_PI - Math.PI
        }
        ,
        t.PRECISION = 1e-6,
        t.HALF_PI = .5 * Math.PI,
        t.DOUBLE_PI = 2 * Math.PI,
        t.DEGREE = Math.PI / 180,
        t.RADIAN = 180 / Math.PI,
        t
    }();
    t.MathUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.CreateDictionary = function(t, e) {
            for (var i = {}, s = t.length; s--; )
                i[t[s][e]] = t[s];
            return i
        }
        ,
        t.GetMax = function(t, e) {
            for (var i, s = t.length; s--; )
                if (t[s][e] > i)
                    return t[s];
            return null 
        }
        ,
        t.GetMin = function(t, e) {
            for (var i, s = t.length; s--; )
                if (t[s][e] < i)
                    return t[s];
            return null 
        }
        ,
        t.Add = function(t, e) {
            -1 == t.indexOf(e) && t.push(e)
        }
        ,
        t.AddAt = function(t, e, i) {
            -1 == t.indexOf(e) && t.splice(i, 0, e)
        }
        ,
        t.Remove = function(t, e) {
            var i = t.indexOf(e);
            -1 != i && t.splice(i, 1)
        }
        ,
        t.PushAt = function(t, e, i) {
            t.splice(i, 0, e)
        }
        ,
        t.Swap = function(t, e, i) {
            var s = t[e];
            t[e] = t[i],
            t[i] = s
        }
        ,
        t.SwapItems = function(t, e, i) {
            var s = t.indexOf(e)
              , n = t.indexOf(i)
              , o = t[s];
            t[s] = t[n],
            t[n] = o
        }
        ,
        t.CloneArray = function(t) {
            return t.concat()
        }
        ,
        t.CloneCloneableArray = function(t) {
            for (var e = [], i = 0, s = t.length; s > i; i++)
                e[i] = t[i].clone();
            return e
        }
        ,
        t.FilterByPropertyValue = function(t, e, i) {
            return t.filter(function(t) {
                return t[e] == i
            })
        }
        ,
        t.ForEachMakeFloat = function(t, e, i) {
            i[e] = parseFloat(t)
        }
        ,
        t.ForEachMakeInt = function(t, e, i) {
            i[e] = parseInt(t)
        }
        ,
        t.ForEachMakeString = function(t, e, i) {
            i[e] = t.toString()
        }
        ,
        t.ReduceToString = function(t, e) {
            return t.push(e.toString()),
            t
        }
        ,
        t.ReduceToFloat = function(t, e) {
            return t.push(parseFloat(e)),
            t
        }
        ,
        t
    }();
    t.ArrayUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n) {
            this.t = e,
            this.o = i,
            this.s = s,
            this.r = t.MathUtility.Modulo(n, t.MathUtility.DOUBLE_PI)
        }
        return e.FromJSON = function(i) {
            return new e(t.Vector.FromJSON(i.anchor),t.Vector.FromJSON(i.origin),t.Vector.FromJSON(i.scale),i.rotation)
        }
        ,
        e.FromElement = function(i) {
            return e.FromTransformString(t.StyleUtility.GetStyleValue(i, t.css.name.TRANSFORM, "matrix(1,0,0,1,0,0)"))
        }
        ,
        e.FromDefault = function() {
            return new e(new t.Vector(0,0),new t.Vector(0,0),new t.Vector(1,1),0)
        }
        ,
        e.FromHTML = function(i) {
            return e.FromTransformString(i.style[t.css.name.TRANSFORM])
        }
        ,
        e.FromSVG = function(t) {
            return e.FromTransformString(t.getAttributeNS(null , "transform"))
        }
        ,
        e.FromTransformString = function(i) {
            for (var s, n, o, r, a = e._extractTransformCommands; n = a.exec(i); )
                if (o = n[2].toLowerCase(),
                r = n[3].split(","),
                "matrix" == o)
                    s = e.FromValues(parseFloat(r[0]), parseFloat(r[1]), parseFloat(r[2]), parseFloat(r[3]), parseFloat(r[4]), parseFloat(r[5]));
                else if (void 0 === s && (s = e.FromDefault()),
                "translate" == o)
                    s.addTranslateValueIn(parseFloat(r[0]), parseFloat(r[1]));
                else if ("translate3d" == o)
                    s.addTranslateValueIn(parseFloat(r[0]), parseFloat(r[1]));
                else if ("translatex" == o)
                    s.addTranslateXIn(parseFloat(r[0]));
                else if ("translatey" == o)
                    s.addTranslateYIn(parseFloat(r[0]));
                else if ("scale" == o)
                    s.multiplyScaleIn(parseFloat(r[0]), parseFloat(r[1]));
                else if ("scalex" == o)
                    s.multiplyScaleXIn(parseFloat(r[0]));
                else if ("scaley" == o)
                    s.multiplyScaleYIn(parseFloat(r[0]));
                else if ("rotate" == o) {
                    var h = t.StyleUtility.GetUnit(r[0])
                      , l = parseFloat(r[0]);
                    "deg" == h && (l = t.MathUtility.ToRadians(l)),
                    s.addRotateIn(l)
                }
            return void 0 === s ? e.FromDefault() : s
        }
        ,
        e.FromString = function(i) {
            var s = i.split("(")[1].split(")")[0].split(",");
            return s.forEach(t.ArrayUtility.ForEachMakeFloat),
            e.FromArray(s)
        }
        ,
        e.FromArray = function(t) {
            return e.FromValues(t[0], t[1], t[2], t[3], t[4], t[5])
        }
        ,
        e.FromValues = function(i, s, n, o, r, a) {
            var h = new t.Vector(Math.round(r),Math.round(a))
              , l = Math.atan2(s, i);
            0 > l && (l += t.MathUtility.DOUBLE_PI);
            var d = Math.pow(i, 2) + Math.pow(s, 2)
              , u = Math.sqrt(d)
              , p = (i * o - n * s) / u;
            return new e(h,new t.Vector(0,0),new t.Vector(u,p),l)
        }
        ,
        e.prototype.isDefault = function() {
            return 0 === this.t.x && 0 === this.t.y && 0 === this.o.x && 0 === this.o.y && 1 === this.s.x && 1 === this.s.y && 0 === this.r
        }
        ,
        e.prototype.set = function(e, i, s, n) {
            this.t = e,
            this.o = i,
            this.s = s,
            this.r = t.MathUtility.Modulo(n, t.MathUtility.DOUBLE_PI)
        }
        ,
        e.prototype.reset = function() {
            this.t = new t.Vector(0,0),
            this.o = new t.Vector(0,0),
            this.s = new t.Vector(0,0),
            this.r = 0
        }
        ,
        e.prototype.setOrigin = function(t) {
            this.o = t
        }
        ,
        e.prototype.clone = function() {
            return new e(this.t.clone(),this.o.clone(),this.s.clone(),this.r)
        }
        ,
        e.prototype.copy = function(t) {
            this.t = t.t.clone(),
            this.o = t.o.clone(),
            this.s = t.s.clone(),
            this.r = t.r
        }
        ,
        e.prototype.lerp = function(t, e) {
            var i = this.clone();
            return i.lerpIn(t, e),
            i
        }
        ,
        e.prototype.lerpIn = function(e, i) {
            this.t.lerpIn(e.t, i),
            this.s.lerpIn(e.s, i),
            this.r = t.MathUtility.LerpRadians(this.r, e.r, i)
        }
        ,
        e.prototype.translateIn = function(t) {
            this.t.x = t.x,
            this.t.y = t.y
        }
        ,
        e.prototype.addTranslateIn = function(t) {
            this.t.x += t.x,
            this.t.y += t.y
        }
        ,
        e.prototype.translateValueIn = function(t, e) {
            this.t.x = t,
            this.t.y = e
        }
        ,
        e.prototype.addTranslateValueIn = function(t, e) {
            this.t.x += t,
            this.t.y += e
        }
        ,
        e.prototype.translateXIn = function(t) {
            this.t.x = t
        }
        ,
        e.prototype.addTranslateXIn = function(t) {
            this.t.x += t
        }
        ,
        e.prototype.translateYIn = function(t) {
            this.t.y = t
        }
        ,
        e.prototype.addTranslateYIn = function(t) {
            this.t.y += t
        }
        ,
        e.prototype.originIn = function(t) {
            this.o.x = t.x,
            this.o.y = t.y
        }
        ,
        e.prototype.addOriginIn = function(t) {
            this.o.x += t.x,
            this.o.y += t.y
        }
        ,
        e.prototype.originValueIn = function(t, e) {
            this.o.x = t,
            this.o.y = e
        }
        ,
        e.prototype.addOriginValueIn = function(t, e) {
            this.o.x += t,
            this.o.y += e
        }
        ,
        e.prototype.originXIn = function(t) {
            this.o.x = t
        }
        ,
        e.prototype.addOriginXIn = function(t) {
            this.o.x += t
        }
        ,
        e.prototype.originYIn = function(t) {
            this.o.y = t
        }
        ,
        e.prototype.addOriginYIn = function(t) {
            this.o.y += t
        }
        ,
        e.prototype.scaleIn = function(t, e) {
            this.s.x = t,
            this.s.y = e
        }
        ,
        e.prototype.addScaleIn = function(t, e) {
            this.s.x += t,
            this.s.y += e
        }
        ,
        e.prototype.multiplyScaleIn = function(t, e) {
            this.s.x += t,
            this.s.y *= e
        }
        ,
        e.prototype.scaleXIn = function(t) {
            this.s.x = t
        }
        ,
        e.prototype.addScaleXIn = function(t) {
            this.s.x += t
        }
        ,
        e.prototype.multiplyScaleXIn = function(t) {
            this.s.x *= t
        }
        ,
        e.prototype.scaleYIn = function(t) {
            this.s.y = t
        }
        ,
        e.prototype.addScaleYIn = function(t) {
            this.s.y += t
        }
        ,
        e.prototype.multiplyScaleYIn = function(t) {
            this.s.y *= t
        }
        ,
        e.prototype.rotateIn = function(t) {
            this.r = t
        }
        ,
        e.prototype.addRotateIn = function(t) {
            this.r += t
        }
        ,
        e.prototype.toArray = function() {
            var t = []
              , e = Math.cos(this.r)
              , i = Math.sin(this.r);
            return t[0] = e * this.s.x,
            t[1] = i * this.s.y,
            t[2] = i * -this.s.x,
            t[3] = e * this.s.y,
            t[4] = this.t.x - (this.o.x * t[0] + this.o.y * t[2]),
            t[5] = this.t.y - (this.o.x * t[1] + this.o.y * t[3]),
            t
        }
        ,
        e.prototype.toMatrix = function() {
            return new t.Matrix(this.toArray(),3)
        }
        ,
        e.prototype.toJSON = function() {
            return {
                anchor: this.t.toJSON(),
                origin: this.o.toJSON(),
                scalex: this.s.toJSON(),
                rotation: this.r
            }
        }
        ,
        e.prototype.toString = function() {
            var t = this.toArray();
            return "matrix(" + t[0].toFixed(10) + ", " + t[1].toFixed(10) + ", " + t[2].toFixed(10) + ", " + t[3].toFixed(10) + ", " + t[4].toFixed(10) + ", " + t[5].toFixed(10) + ")"
        }
        ,
        e.ZERO = e.FromDefault(),
        e.ZERO_ARRAY = [1, 0, 0, 1, 0, 0],
        e._extractTransformCommands = /(([\w\d^\(]+)\(([^\)]+)*\))+/g,
        e
    }();
    t.TransformMatrix = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.a = t,
            this.r = e
        }
        return e.FromZero = function() {
            return new e(t.Vec.FromZero(),0)
        }
        ,
        e.FromValues = function(i, s, n) {
            return new e(new t.Vector(i,s),n)
        }
        ,
        e.FromJSON = function(i) {
            return new e(t.Vector.FromJSON(i.a),i.r)
        }
        ,
        e.prototype.clone = function() {
            return new e(this.a.clone(),this.r)
        }
        ,
        e.prototype.perimeter = function() {
            return 0
        }
        ,
        e.prototype.getPointAt = function(e) {
            return new t.Vector(0,0)
        }
        ,
        e.prototype.lastPoint = function() {
            return this.a
        }
        ,
        e.prototype.offset = function(t, e) {
            return this
        }
        ,
        e.prototype.scale = function(t) {
            var e = this.clone();
            return e.scaleIn(t),
            e
        }
        ,
        e.prototype.scaleIn = function(t) {
            this.a.scaleIn(t),
            this.r *= t
        }
        ,
        e.prototype.lerp = function(t, e) {
            var i = this.clone();
            return i.lerpIn(t, e),
            i
        }
        ,
        e.prototype.lerpIn = function(t, e) {
            this.a.lerpIn(t.a, e),
            this.r += (t.r - this.r) * e
        }
        ,
        e.prototype.lerpCopy = function(t, e, i) {
            this.a.lerpCopy(t.a, e.a, i),
            this.r = t.r + i * (e.r - t.r)
        }
        ,
        e.prototype.equal = function(t) {
            return t.a.x == this.a.x && t.a.y == this.a.y && t.r == this.r
        }
        ,
        e.prototype.isWithinShape = function(t) {
            var e = t.subtract(this.a);
            return e.x * e.x + e.y * e.y <= this.r * this.r
        }
        ,
        e.prototype.isCircleIntersecting = function(t) {
            var e = t.a.subtract(this.a)
              , i = e.getDistance()
              , s = Math.sqrt(i);
            if (s > this.r + t.r)
                return !1;
            this.r * this.r,
            t.r * t.r;
            return s < Math.abs(this.r - t.r),
            !0
        }
        ,
        e.prototype.getCircleIntersection = function(e) {
            var i = e.a.subtract(this.a)
              , s = i.getDistance()
              , n = Math.sqrt(s);
            if (n > this.r + e.r)
                return null ;
            var o = this.r * this.r
              , r = e.r * e.r;
            if (n < Math.abs(this.r - e.r))
                return new t.VectorPair(this.a.clone(),e.a.clone());
            var a = (o - r + s) / (2 * n)
              , h = Math.sqrt(o - a * a)
              , l = i.scale(a / n);
            return l.addIn(this.a),
            new t.VectorPair(new t.Vector(l.x + h * i.y / n,l.y - h * i.x / n),new t.Vector(l.x - h * i.y / n,l.y + h * i.x / n))
        }
        ,
        e.prototype.isLineIntersectingEndless = function(t) {
            var e = t.getDirectionVector()
              , i = this.a.subtract(t.a)
              , s = e.dot(e)
              , n = i.dot(e)
              , o = i.dot(i) - this.r * this.r
              , r = n / s
              , a = o / s
              , h = r * r - a;
            return !(0 > h)
        }
        ,
        e.prototype.getLineIntersectionEndless = function(e) {
            var i = e.getDirectionVector()
              , s = this.a.subtract(e.a)
              , n = i.dot(i)
              , o = s.dot(i)
              , r = s.dot(s) - this.r * this.r
              , a = o / n
              , h = r / n
              , l = a * a - h;
            if (0 > l)
                return null ;
            var d = Math.sqrt(l)
              , u = -a + d
              , p = -a - d;
            return new t.VectorPair(new t.Vector(e.a.x - i.x * u,e.a.y - i.y * u),new t.Vector(e.a.x - i.x * p,e.a.y - i.y * p))
        }
        ,
        e.prototype.isLineIntersecting = function(t) {
            var e = this.getLineIntersectionEndless(t);
            if (null  !== e) {
                if (t.isWithinBounds(e.a) === !0)
                    return !0;
                if (t.isWithinBounds(e.b) === !0)
                    return !0
            }
            return !1
        }
        ,
        e.prototype.getLineIntersection = function(e) {
            var i = this.getLineIntersectionEndless(e)
              , s = new t.VectorList;
            return null  !== i && (e.isWithinBounds(i.a) === !0 && s.add(i.a),
            e.isWithinBounds(i.b) === !0 && s.add(i.b)),
            s
        }
        ,
        e.prototype.isWithinBounds = function(t) {
            var e = this.a.subtractValues(this.r, this.r)
              , i = this.a.addValues(this.r, this.r);
            return t.x >= e.x && t.y >= e.y && t.x <= i.x && t.y <= i.y
        }
        ,
        e.prototype.getBounds = function() {
            return new t.Rectangle(this.a.subtractValues(this.r, this.r),this.getSize())
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(2 * this.r,2 * this.r)
        }
        ,
        e.prototype.getWidth = function() {
            return 2 * this.r
        }
        ,
        e.prototype.getHeight = function() {
            return 2 * this.r
        }
        ,
        e.prototype.toString = function() {
            return "[" + this.a + "," + this.r + "]"
        }
        ,
        e.prototype.toJSON = function() {
            return {
                a: this.a.toJSON(),
                r: this.r
            }
        }
        ,
        e.prototype.toSVGString = function(t) {
            var e = 2 * this.r;
            return t + (this.a.x - this.r) + "," + this.a.y + " a" + this.r + "," + this.r + " 0 1,0 " + e + ",0 a" + this.r + "," + this.r + " 0 1,0 " + -e + ",0"
        }
        ,
        e.prototype.drawAt = function(e) {
            var i = e.pixelDensity;
            e.context.arc(this.a.x * i, this.a.y * i, this.r * i, 0, t.MathUtility.DOUBLE_PI)
        }
        ,
        e.prototype.createSVGSymbol = function() {
            return new t.SVGCircleSymbol(this)
        }
        ,
        e
    }();
    t.Circle = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e, i, s) {
            this.a = t,
            this.aC = e,
            this.bC = i,
            this.b = s
        }
        return e.FromZero = function() {
            return new e(t.Vector.FromZero(),t.Vector.FromZero(),t.Vector.FromZero(),t.Vector.FromZero())
        }
        ,
        e.FromJSON = function(i) {
            return new e(t.Vector.FromJSON(i.a),t.Vector.FromJSON(i.aC),t.Vector.FromJSON(i.bC),t.Vector.FromJSON(i.b))
        }
        ,
        e.prototype.clone = function() {
            return new e(this.a.clone(),this.aC.clone(),this.bC.clone(),this.b.clone())
        }
        ,
        e.prototype.getPointAt = function(t) {
            if (0 == t)
                return this.a;
            if (1 == t)
                return this.b;
            var e = this.a.lerp(this.aC, t)
              , i = this.aC.lerp(this.bC, t)
              , s = this.bC.lerp(this.b, t);
            return e.lerpIn(i, t),
            i.lerpIn(s, t),
            e.lerp(i, t)
        }
        ,
        e.prototype.lastPoint = function() {
            return this.b
        }
        ,
        e.prototype.offset = function(t, e) {
            return this.clone().offsetIn(t, e)
        }
        ,
        e.prototype.offsetIn = function(t, e) {
            return 0 == e ? (this.aC.x = this.bC.x = this.b.x = this.a.x,
            this.aC.y = this.bC.y = this.b.y = this.a.y,
            this) : (1 != e && (this.offsetEndIn(e),
            t /= e),
            1 == t ? (this.a.x = this.aC.x = this.bC.x = this.b.x,
            this.a.y = this.aC.y = this.bC.y = this.b.y,
            this) : (0 != t && this.offsetStartIn(t),
            this))
        }
        ,
        e.prototype.offsetEndIn = function(t) {
            var e = this.aC.lerp(this.bC, t)
              , i = this.bC.lerp(this.b, t);
            return this.aC = this.a.lerp(this.aC, t),
            this.bC = this.aC.lerp(e, t),
            e = e.lerp(i, t),
            this.b = this.bC.lerp(e, t),
            this
        }
        ,
        e.prototype.offsetStartIn = function(t) {
            var e = this.a.lerp(this.aC, t)
              , i = this.aC.lerp(this.bC, t);
            return this.bC = this.bC.lerp(this.b, t),
            e = e.lerp(i, t),
            this.aC = i.lerp(this.bC, t),
            this.a = e.lerp(this.aC, t),
            this
        }
        ,
        e.prototype.lerpCopy = function(t, e, i) {
            this.a.lerpCopy(t.a, e.a, i),
            this.aC.lerpCopy(t.aC, e.aC, i),
            this.bC.lerpCopy(t.bC, e.bC, i),
            this.b.lerpCopy(t.b, e.b, i)
        }
        ,
        e.prototype.perimeter = function() {
            var e = .5
              , i = this.a.lerp(this.aC, e)
              , s = this.aC.lerp(this.bC, e)
              , n = this.bC.lerp(this.b, e)
              , o = i.lerp(s, e)
              , r = s.lerp(n, e)
              , a = o.lerp(r, e);
            return t.GeometryUtility.Distance(this.a, i) + t.GeometryUtility.Distance(i, o) + t.GeometryUtility.Distance(o, a) + t.GeometryUtility.Distance(a, r) + t.GeometryUtility.Distance(r, n)
        }
        ,
        e.prototype.min = function() {
            return new t.Vector(Math.min(this.a.x, this.aC.x, this.bC.x, this.b.x),Math.min(this.a.y, this.aC.y, this.bC.y, this.b.y))
        }
        ,
        e.prototype.max = function() {
            return new t.Vector(Math.max(this.a.x, this.aC.x, this.bC.x, this.b.x),Math.max(this.a.y, this.aC.y, this.bC.y, this.b.y))
        }
        ,
        e.prototype.getBounds = function() {
            return new t.Rectangle(this.min(),this.getSize())
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        e.prototype.getWidth = function() {
            return Math.max(this.a.x, this.aC.x, this.bC.x, this.b.x) - Math.min(this.a.x, this.aC.x, this.bC.x, this.b.x)
        }
        ,
        e.prototype.getHeight = function() {
            return Math.max(this.a.y, this.aC.y, this.bC.y, this.b.y) - Math.min(this.a.y, this.aC.y, this.bC.y, this.b.y)
        }
        ,
        e.prototype.toString = function() {
            return "[" + this.a.x + "," + this.a.y + "] -> [" + this.b.x + "," + this.b.y + "]"
        }
        ,
        e.prototype.toJSON = function() {
            return {
                a: this.a.toJSON(),
                aC: this.aC.toJSON(),
                bC: this.bC.toJSON(),
                b: this.b.toJSON()
            }
        }
        ,
        e.prototype.toSVGString = function(t) {
            var e = this;
            return t + e.a.x + "," + e.a.y + " C" + e.aC.x + "," + e.aC.y + " " + e.bC.x + "," + e.bC.y + " " + e.b.x + "," + e.b.y
        }
        ,
        e.prototype.drawAt = function(t, e) {
            var i = t.pixelDensity;
            e === !0 ? t.context.lineTo(this.a.x * i, this.a.y * i) : t.context.moveTo(this.a.x * i, this.a.y * i),
            t.context.bezierCurveTo(this.aC.x * i, this.aC.y * i, this.bC.x * i, this.bC.y * i, this.b.x * i, this.b.y * i)
        }
        ,
        e.prototype.createSVGSymbol = function() {
            return new t.SVGCubicBezierSymbol(this)
        }
        ,
        e
    }();
    t.CubicBezier = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.a = t,
            this.b = e
        }
        return e.prototype.clone = function() {
            return new e(this.a.clone(),this.b.clone())
        }
        ,
        e.prototype.set = function(t, e) {
            this.a = t,
            this.b = e
        }
        ,
        e.prototype.addVector = function(t) {
            var e = this.clone();
            return e.addVectorIn(t),
            e
        }
        ,
        e.prototype.addVectorIn = function(t) {
            this.a.addIn(t),
            this.b.addIn(t)
        }
        ,
        e.prototype.substractVector = function(t) {
            var e = this.clone();
            return e.substractVectorIn(t),
            e
        }
        ,
        e.prototype.substractVectorIn = function(t) {
            this.a.subtractIn(t),
            this.b.subtractIn(t)
        }
        ,
        e.prototype.add = function(t) {
            var e = this.clone();
            return e.addIn(t),
            e
        }
        ,
        e.prototype.addIn = function(t) {
            this.a.addIn(t.a),
            this.b.addIn(t.b)
        }
        ,
        e.prototype.subtract = function(t) {
            var e = this.clone();
            return e.subtractIn(t),
            e
        }
        ,
        e.prototype.subtractIn = function(t) {
            this.a.subtractIn(t.a),
            this.b.subtractIn(t.b)
        }
        ,
        e.prototype.scale = function(t) {
            var e = this.clone();
            return e.scaleIn(t),
            e
        }
        ,
        e.prototype.scaleIn = function(t) {
            this.a.scaleIn(t),
            this.b.scaleIn(t)
        }
        ,
        e.prototype.concatVector = function(t) {
            var e = this.clone();
            return e.concatVectorIn(t),
            e
        }
        ,
        e.prototype.concatVectorIn = function(t) {
            this.a.x = Math.min(this.a.x, this.b.x, t.x),
            this.a.y = Math.min(this.a.y, this.b.y, t.y),
            this.b.x = Math.max(this.a.x, this.b.x, t.x),
            this.b.y = Math.max(this.a.y, this.b.y, t.y)
        }
        ,
        e.prototype.concat = function(t) {
            var e = this.clone();
            return e.concatIn(t),
            e
        }
        ,
        e.prototype.concatIn = function(t) {
            this.a.x = Math.min(this.a.x, this.b.x, t.a.x, t.b.x),
            this.a.y = Math.min(this.a.y, this.b.y, t.a.y, t.b.y),
            this.b.x = Math.max(this.a.x, this.b.x, t.a.x, t.b.x),
            this.b.y = Math.max(this.a.y, this.b.y, t.a.y, t.b.y)
        }
        ,
        e.prototype.getDirectionVector = function() {
            return this.b.subtract(this.a)
        }
        ,
        e.prototype.isWithinBounds = function(t) {
            return t.x >= Math.min(this.a.x, this.b.x) && t.y >= Math.min(this.a.y, this.b.y) && t.x <= Math.max(this.a.x, this.b.x) && t.y <= Math.max(this.a.y, this.b.y)
        }
        ,
        e.prototype.length = function() {
            var t = this.a.x - this.b.x
              , e = this.a.y - this.b.y;
            return Math.sqrt(t * t + e * e)
        }
        ,
        e.prototype.min = function() {
            return new t.Vector(Math.min(this.a.x, this.b.x),Math.min(this.a.y, this.b.y))
        }
        ,
        e.prototype.max = function() {
            return new t.Vector(Math.max(this.a.x, this.b.x),Math.max(this.a.y, this.b.y))
        }
        ,
        e.prototype.getSize = function() {
            var t = this.b.subtract(this.a);
            return t.abs(),
            t
        }
        ,
        e.prototype.getWidth = function() {
            return Math.abs(this.b.x - this.a.x)
        }
        ,
        e.prototype.getHeight = function() {
            return Math.abs(this.b.y - this.a.y)
        }
        ,
        e.prototype.lerp = function(t, e) {
            var i = this.clone();
            return i.lerpIn(t, e),
            i
        }
        ,
        e.prototype.lerpIn = function(t, e) {
            this.a.lerpIn(t.a, e),
            this.b.lerpIn(t.b, e)
        }
        ,
        e.prototype.lerpCopy = function(t, e, i) {
            this.a.lerpCopy(t.a, e.a, i),
            this.b.lerpCopy(t.b, e.b, i)
        }
        ,
        e.prototype.rotateIn = function(t) {
            var e = Math.sin(t)
              , i = Math.cos(t)
              , s = this.a.x
              , n = this.a.y;
            this.a.x = s * i + this.b.x * e,
            this.a.y = n * i + this.b.y * e,
            this.b.x = s * -e + this.b.x * i,
            this.b.y = n * -e + this.b.y * i
        }
        ,
        e.prototype.equal = function(t) {
            return t.a.x == this.a.x && t.a.y == this.a.y && t.b.x == this.b.x && t.b.y == this.b.y
        }
        ,
        e.prototype.toString = function() {
            return "[" + this.a.x + "," + this.a.y + "] -> [" + this.b.x + "," + this.b.y + "]"
        }
        ,
        e.prototype.toJSON = function() {
            return {
                a: this.a.toJSON(),
                b: this.b.toJSON()
            }
        }
        ,
        e
    }();
    t.VectorPair = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments)
        }
        return __extends(i, e),
        i.FromZero = function() {
            return new i(t.Vector.FromZero(),t.Vector.FromZero())
        }
        ,
        i.FromValues = function(e, s, n, o) {
            return new i(new t.Vector(e,s),new t.Vector(n,o))
        }
        ,
        i.FromJSON = function(e) {
            return new i(t.Vector.FromJSON(e.a),t.Vector.FromJSON(e.b))
        }
        ,
        i.prototype.clone = function() {
            return new i(this.a.clone(),this.b.clone())
        }
        ,
        i.prototype.perimeter = function() {
            return Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.a.y - this.b.y, 2))
        }
        ,
        i.prototype.getPointAt = function(e) {
            return new t.Vector(t.MathUtility.Lerp(this.a.x, this.b.x, e),t.MathUtility.Lerp(this.a.y, this.b.y, e))
        }
        ,
        i.prototype.lastPoint = function() {
            return this.b
        }
        ,
        i.prototype.distanceToPoint = function(e) {
            var i = new t.Vector(-(this.a.x - this.b.x),this.a.y - this.b.y);
            i.normalizeIn();
            var s = this.a.subtract(e);
            return s.dot(i)
        }
        ,
        i.prototype.getSlope = function() {
            return this.b.x - this.a.x === 0 ? 0 : (this.b.y - this.a.y) / (this.b.x - this.a.x)
        }
        ,
        i.prototype.getIntercept = function() {
            if (this.b.x - this.a.x === 0)
                return null ;
            var t = (this.b.y - this.a.y) / (this.b.x - this.a.x)
              , e = this.a.y - t * this.a.x;
            return {
                slope: t,
                yi: e,
                xi: 0 == t ? !1 : -e / t
            }
        }
        ,
        i.prototype.getPerpendicular = function(t, e) {
            var s = this.getDirectionVector();
            s.normalizeIn();
            var n = s.perpendicular()
              , o = this.getPointAt(t)
              , r = n.a.scale(e);
            return r.addIn(this.a),
            new i(o,r)
        }
        ,
        i.prototype.offset = function(t, e) {
            var i = this.clone();
            return i.offsetIn(t, e),
            i
        }
        ,
        i.prototype.offsetIn = function(t, e) {
            if (0 == e)
                this.b.x = this.a.x,
                this.b.y = this.a.y;
            else if (1 == t)
                this.a.x = this.b.x,
                this.a.y = this.b.y;
            else {
                var i = this.a;
                this.a = i.lerp(this.b, t),
                this.b = i.lerp(this.b, e)
            }
        }
        ,
        i.prototype.getAngle = function() {
            return t.GeometryUtility.CalculateAngle(this.a, this.b)
        }
        ,
        i.prototype.getDirectionVector = function() {
            return this.b.subtract(this.a)
        }
        ,
        i.prototype.getEndlessLineIntersection = function(e) {
            var i = this.getIntercept()
              , s = e.getIntercept()
              , n = this.a
              , o = e.a;
            if (null  === i) {
                if (null  === s)
                    return null ;
                var r = -s.slope * (o.x - n.x) + o.y;
                return new t.Vector(n.x,r)
            }
            if (null  == s)
                return r = -i.slope * (n.x - o.x) + n.y,
                new t.Vector(o.x,r);
            if (s.slope != i.slope) {
                var a = (i.slope * n.x - s.slope * o.x + o.y - n.y) / (i.slope - s.slope)
                  , h = i.slope * (a - n.x) + n.y;
                return new t.Vector(a,h)
            }
            return i.yi == s.yi ? this.a : null 
        }
        ,
        i.prototype.isLineIntersecting = function(t) {
            var e = this.getEndlessLineIntersection(t);
            return null  !== e && this.isWithinBounds(e) && t.isWithinBounds(e)
        }
        ,
        i.prototype.getLineIntersection = function(t) {
            var e = this.getEndlessLineIntersection(t);
            return null  !== e && this.isWithinBounds(e) && t.isWithinBounds(e) ? e : null 
        }
        ,
        i.prototype.min = function() {
            return new t.Vector(Math.min(this.a.x, this.b.x),Math.min(this.a.y, this.b.y))
        }
        ,
        i.prototype.max = function() {
            return new t.Vector(Math.max(this.a.x, this.b.x),Math.max(this.a.y, this.b.y))
        }
        ,
        i.prototype.getBounds = function() {
            return new t.Rectangle(this.min(),this.getSize())
        }
        ,
        i.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        i.prototype.getWidth = function() {
            return Math.max(this.a.x, this.b.x) - Math.min(this.a.x, this.b.x)
        }
        ,
        i.prototype.getHeight = function() {
            return Math.max(this.a.y, this.b.y) - Math.min(this.a.y, this.b.y)
        }
        ,
        i.prototype.toSVGString = function(t) {
            return t + this.a.x + "," + this.a.y + " L" + this.b.x + "," + this.b.y
        }
        ,
        i.prototype.drawAt = function(t) {
            var e = t.pixelDensity;
            t.context.moveTo(this.a.x * e, this.a.y * e),
            t.context.lineTo(this.b.x * e, this.b.y * e)
        }
        ,
        i.prototype.createSVGSymbol = function() {
            return new t.SVGLineSymbol(this)
        }
        ,
        i
    }(t.VectorPair);
    t.Line = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e) {
            this.offsetRange = new t.Range(0,1),
            this.shape = this.originalShape = e
        }
        return e.prototype.clone = function() {
            return new e(this.shape.clone())
        }
        ,
        e.prototype.perimeter = function() {
            return this.shape.perimeter()
        }
        ,
        e.prototype.getPointAt = function(t) {
            return this.shape.getPointAt(t)
        }
        ,
        e.prototype.lastPoint = function() {
            return this.shape.lastPoint()
        }
        ,
        e.prototype.offset = function(t, e) {
            return this.shape = this.originalShape.offset(this.offsetRange.start = t, this.offsetRange.end = e)
        }
        ,
        e.prototype.setOffset = function(t, e) {
            this.offsetRange.start = t,
            this.offsetRange.end = e
        }
        ,
        e.prototype.setOffsetStart = function(t) {
            this.offsetRange.start = t
        }
        ,
        e.prototype.setOffsetEnd = function(t) {
            this.offsetRange.end = t
        }
        ,
        e.prototype.update = function() {
            this.shape = this.originalShape.offset(this.offsetRange.start, this.offsetRange.end)
        }
        ,
        e.prototype.getBounds = function() {
            return this.shape.getBounds()
        }
        ,
        e.prototype.getSize = function() {
            return this.shape.getSize()
        }
        ,
        e.prototype.getWidth = function() {
            return this.shape.getWidth()
        }
        ,
        e.prototype.getHeight = function() {
            return this.shape.getHeight()
        }
        ,
        e.prototype.toString = function() {
            return this.shape.toString()
        }
        ,
        e.prototype.toJSON = function() {
            return this.shape.toJSON()
        }
        ,
        e.prototype.toSVGString = function(t) {
            return this.shape.toSVGString(t)
        }
        ,
        e.prototype.drawAt = function(t) {
            this.shape.drawAt(t)
        }
        ,
        e
    }();
    t.OffsetableShape = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.segments = [],
            this.connectSegments = t || !1,
            this.closed = e || !1
        }
        return e.FromArray = function(t, i, s) {
            var n = new e(i || !1,s || !1);
            return n.segments = t,
            n
        }
        ,
        e.FromJSON = function(t) {
            return new e
        }
        ,
        e.FromString = function(t) {
            var i = new e;
            return i.addString(t),
            i
        }
        ,
        e.prototype.clone = function() {
            return e.FromArray(t.ArrayUtility.CloneCloneableArray(this.segments), this.connectSegments, this.closed)
        }
        ,
        e.prototype.add = function(t) {
            this.segments.push(t)
        }
        ,
        e.prototype.addString = function(t) {
            for (var e, i = t.match(/[a-df-z][^a-df-z]*/gi), s = 0, n = i.length; n > s; s++) {
                e = i[s][0];
                var o;
                this.segments.push(o)
            }
        }
        ,
        e.prototype.moveTo = function(t) {
            this.drawPointer = t
        }
        ,
        e.prototype.lineTo = function(e) {
            var i = this.drawPointer || new t.Vector(0,0)
              , s = new t.Line(i,e);
            return this.segments.push(s),
            this.drawPointer = e,
            s
        }
        ,
        e.prototype.curveTo = function(e, i, s) {
            var n = this.drawPointer || new t.Vector(0,0)
              , o = new t.CubicBezier(n,e,i,s);
            return this.segments.push(o),
            this.drawPointer = s,
            o
        }
        ,
        e.prototype.perimeter = function() {
            for (var t = 0, e = this.segments.length; e--; )
                t += this.segments[e].perimeter();
            return t
        }
        ,
        e.prototype.getPointAt = function(t) {
            for (var e = [], i = 0, s = this.segments.length, n = 0; s > i; i++)
                n += this.segments[i].perimeter(),
                e.push(n);
            var o, r = n * t, a = 0;
            for (i = 0; s > i; i++) {
                if (o = e[i],
                o > r)
                    return this.segments[i].getPointAt((r - a) / (o - a));
                a = o
            }
            return i -= 1,
            a -= e[i],
            this.segments[i].getPointAt((r - a) / (o - a))
        }
        ,
        e.prototype.lastPoint = function() {
            var e = this.segments.length;
            return 0 == e ? t.Vector.ZERO : this.segments[e - 1].lastPoint()
        }
        ,
        e.prototype.getSegmentIndex = function(t) {
            for (var e = [], i = 0, s = this.segments.length, n = 0; s > i; i++)
                n += this.segments[i].perimeter(),
                e.push(n);
            var o, r = n * t;
            for (i = 0; s > i; i++)
                if (o = e[i],
                o > r)
                    return i;
            return s - 1
        }
        ,
        e.prototype.offset = function(t, i) {
            if (t >= i)
                return new e;
            for (var s, n = new e(this.connectSegments,this.closed), o = [], r = [], a = [], h = 0, l = this.segments.length, d = l - 1, u = l - 1, p = this.perimeter(), c = 0; l > h; ) {
                if (o.push(c),
                s = this.segments[h].perimeter(),
                a.push(s),
                c += s,
                r.push(c),
                c / p > t) {
                    d = h;
                    break
                }
                h++
            }
            if (c / p > i)
                u = h;
            else
                for (h++; l > h; ) {
                    if (o.push(c),
                    s = this.segments[h].perimeter(),
                    a.push(s),
                    c += s,
                    r.push(c),
                    c / p > i) {
                        u = h;
                        break
                    }
                    h++
                }
            var y = o[d] / p
              , m = a[d] / p;
            if (n.add(this.segments[d].offset((t - y) / m, Math.min((i - y) / m, 1))),
            l = u - 1,
            h = d,
            u > h) {
                for (; l > h; )
                    n.add(this.segments[++h]);
                y = o[u] / p,
                m = a[u] / p,
                n.add(this.segments[u].offset(Math.max((t - y) / m, 0), (i - y) / m))
            }
            return n
        }
        ,
        e.prototype.min = function() {
            return new t.Vector(0,0)
        }
        ,
        e.prototype.max = function() {
            return new t.Vector(0,0)
        }
        ,
        e.prototype.getBounds = function() {
            return new t.Rectangle(this.min(),this.getSize())
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        e.prototype.getWidth = function() {
            return 0
        }
        ,
        e.prototype.getHeight = function() {
            return 0
        }
        ,
        e.prototype.toString = function() {
            return this.segments.reduce(this._stringCombineFunc, []).join(" -> ")
        }
        ,
        e.prototype._stringCombineFunc = function(t, e) {
            return t.push(e.toString()),
            t
        }
        ,
        e.prototype.toJSON = function() {
            return {}
        }
        ,
        e.prototype.toSVGString = function(t) {
            var e = []
              , i = this.segments.length
              , s = 1
              , n = this.connectSegments ? "L" : "M";
            if (i > 0) {
                for (e.push(this.segments[0].toSVGString(t)); i > s; )
                    e.push(this.segments[s++].toSVGString(n));
                this.closed === !0 && e.push("Z")
            }
            return e.join(" ")
        }
        ,
        e.prototype.drawAt = function(t) {
            for (var e = 0, i = this.segments.length; i > e; )
                this.segments[e++].drawAt(t, this.connectSegments);
            this.closed === !0 && t.context.closePath()
        }
        ,
        e.prototype.createSVGSymbol = function() {
            return new t.SVGPathSymbol(this)
        }
        ,
        e
    }();
    t.Path = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {
            this._ = []
        }
        return e.FromArray = function(t, i) {
            var s = new e;
            return s._ = t,
            s
        }
        ,
        e.FromZero = function(i, s) {
            for (var n = new e; i--; )
                n._.push(t.Vector.FromZero());
            return n
        }
        ,
        e.prototype.clone = function() {
            return e.FromArray(t.ArrayUtility.CloneCloneableArray(this._))
        }
        ,
        e.prototype.add = function(t) {
            this._.push(t)
        }
        ,
        e.prototype.addAt = function(t, e) {
            this._.splice(e, 0, t)
        }
        ,
        e.prototype.addAfter = function(t, e) {
            this._.splice(this._.indexOf(e), 0, t)
        }
        ,
        e.prototype.addPointsFromString = function(e) {
            for (var i = e.match(/(-?[\d\.?]+)/g), s = 0, n = i.length; n > s; )
                this._.push(new t.Vector(parseFloat(i[s]),parseFloat(i[s + 1]))),
                s += 2
        }
        ,
        e.prototype.addIn = function(t) {
            for (var e = this._.length; e--; )
                this._[e].addIn(t)
        }
        ,
        e.prototype.addValuesIn = function(t, e) {
            for (var i = this._.length; i--; )
                this._[i].addValuesIn(t, e)
        }
        ,
        e.prototype.subtractIn = function(t) {
            for (var e = this._.length; e--; )
                this._[e].subtractIn(t)
        }
        ,
        e.prototype.subtractValuesIn = function(t, e) {
            for (var i = this._.length; i--; )
                this._[i].subtractValuesIn(t, e)
        }
        ,
        e.prototype.multiplyIn = function(t) {
            for (var e = this._.length; e--; )
                this._[e].multiplyIn(t)
        }
        ,
        e.prototype.multiplyValuesIn = function(t, e) {
            for (var i = this._.length; i--; )
                this._[i].multiplyValuesIn(t, e)
        }
        ,
        e.prototype.divideIn = function(t) {
            for (var e = this._.length; e--; )
                this._[e].divideIn(t)
        }
        ,
        e.prototype.lerp = function(t, e) {
            var i = this.clone();
            return i.lerpIn(t, e),
            i
        }
        ,
        e.prototype.lerpIn = function(t, e) {
            for (var i = Math.min(this._.length, t.length()); i--; )
                this._[i].lerpIn(t[i], e)
        }
        ,
        e.prototype.lerpCopy = function(t, e, i) {
            for (var s = Math.min(t.length(), e.length()); s--; )
                this._[s].lerpIn(e[s], i)
        }
        ,
        e.prototype.transformIn = function(t) {
            for (var e = this._.length; e--; )
                this._[e].transformIn(t)
        }
        ,
        e.prototype.isWithinBounds = function(t) {
            var e = this.getBounds();
            return e.isWithinBounds(t)
        }
        ,
        e.prototype.isWithinShape = function(t) {
            for (var e, i, s, n, o = !1, r = t.x, a = t.y, h = this._, l = h.length / 2, d = 0, u = l - 1; l > d; )
                e = h[2 * d],
                i = h[2 * d + 1],
                s = h[2 * u],
                n = h[2 * u + 1],
                i > a != n > a && (s - e) * (a - i) / (n - i) + e > r && (o = !o),
                u = d++;
            return o
        }
        ,
        e.prototype.min = function() {
            return new t.Vector(t.ArrayUtility.GetMin(this._, "x").x,t.ArrayUtility.GetMin(this._, "y").y)
        }
        ,
        e.prototype.max = function() {
            return new t.Vector(t.ArrayUtility.GetMax(this._, "x").x,t.ArrayUtility.GetMax(this._, "y").y)
        }
        ,
        e.prototype.getBounds = function() {
            var e = t.ArrayUtility.GetMin(this._, "x")
              , i = t.ArrayUtility.GetMin(this._, "y")
              , s = t.ArrayUtility.GetMax(this._, "x")
              , n = t.ArrayUtility.GetMax(this._, "y");
            return new t.Rectangle(new t.Vector(e,i),new t.Vector(s - e,n - i))
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        e.prototype.getWidth = function() {
            return t.ArrayUtility.GetMax(this._, "x").x - t.ArrayUtility.GetMin(this._, "x").x
        }
        ,
        e.prototype.getHeight = function() {
            return t.ArrayUtility.GetMax(this._, "y").y - t.ArrayUtility.GetMin(this._, "y").y
        }
        ,
        e.prototype.length = function() {
            return this._.length
        }
        ,
        e.prototype.toString = function() {
            return this._.reduce(t.ArrayUtility.ReduceToString, []).join(" ")
        }
        ,
        e.prototype.toJSON = function() {
            for (var t = [], e = this._.length, i = 0; e > i; )
                t.push(this._[i++].toJSON());
            return t
        }
        ,
        e.prototype.destroy = function() {
            this._ = void 0
        }
        ,
        e
    }();
    t.VectorList = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this),
            this.closed = t || !1
        }
        return __extends(i, e),
        i.FromArray = function(t, e) {
            var s = new i(e);
            return s._ = t,
            s
        }
        ,
        i.FromNumbers = function() {
            for (var e = [], s = 0; s < arguments.length; s++)
                e[s - 0] = arguments[s];
            for (var n = new i(closed), o = 0, r = e.length; r > o; )
                n.add(new t.Vector(e[o],e[o + 1])),
                o += 2;
            return n
        }
        ,
        i.FromSVG = function(t) {
            return i.FromString(t.getAttributeNS(null , "d"))
        }
        ,
        i.FromString = function(t, e) {
            var s = new i(e);
            return s.addPointsFromString(t),
            s
        }
        ,
        i.FromJSON = function(t) {
            return new i
        }
        ,
        i.prototype.clone = function() {
            return i.FromArray(t.ArrayUtility.CloneCloneableArray(this._), this.closed)
        }
        ,
        i.prototype.getPointAt = function(e) {
            for (var i, s, n = 1, o = this._.length, r = this.perimeter(), a = r * e, h = this._[0], l = 0; o > n; n++)
                if (i = h,
                s = l,
                h = this._[n],
                l += t.GeometryUtility.Distance(h, i),
                l > a)
                    return i.lerp(h, (a - s) / (l - s));
            return this.closed === !0 ? (i = h,
            s = l,
            h = this._[0],
            l += t.GeometryUtility.Distance(h, i),
            this._[n - 1].lerp(h, (a - s) / (l - s))) : i.lerp(h, (a - s) / (l - s))
        }
        ,
        i.prototype.lastPoint = function() {
            var t = this._.length;
            return 0 == t ? null  : this._[t - 1]
        }
        ,
        i.prototype.offset = function(t, e) {
            throw new Error("offset NOT DONE JET")
        }
        ,
        i.prototype.perimeter = function() {
            for (var e = 0, i = this._.length - 1, s = this._[i]; i--; )
                e += t.GeometryUtility.Distance(this._[i], s),
                s = this._[i];
            return this.closed === !0 && (e += t.GeometryUtility.Distance(this._[this._.length - 1], s)),
            e
        }
        ,
        i.prototype.toSVGString = function(t) {
            var e = []
              , i = this._.length
              , s = 1;
            if (i > 0) {
                for (e.push(this._[0].toSVGString(t)); i > s; s++)
                    e.push(this._[s].toSVGString("L"));
                this.closed === !0 && e.push(this._[0].toSVGString("L"))
            }
            return e.join(" ")
        }
        ,
        i.prototype.drawAt = function(t) {
            var e = t.pixelDensity
              , i = t.context
              , s = this._[0]
              , n = 0
              , o = this._.length;
            for (i.moveTo(s.x * e, s.y * e); o > n; )
                s = this._[n++],
                i.lineTo(s.x * e, s.y * e);
            this.closed === !0 && i.closePath()
        }
        ,
        i.prototype.createSVGSymbol = function() {
            return new t.SVGPolygonSymbol(this)
        }
        ,
        i
    }(t.VectorList);
    t.Polygon = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e) {
            this.transform = t.TransformMatrix.FromDefault(),
            this.alpha = 1,
            this.visible = !0,
            "string" == typeof e ? this.node = document.createElementNS("http://www.w3.org/2000/svg", e) : this.node = e
        }
        return e.prototype.setAlpha = function(t) {
            this.alpha = t,
            this.node.setAttributeNS(null , "opacity", this.alpha)
        }
        ,
        e.prototype.getAlpha = function() {
            return this.alpha
        }
        ,
        e.prototype.show = function() {
            this.visible !== !0 && (this.visible = !0,
            this.node.style.visibility = "visible")
        }
        ,
        e.prototype.hide = function() {
            this.visible !== !1 && (this.visible = !1,
            this.node.style.visibility = "hidden")
        }
        ,
        e.prototype.getSVG = function() {
            return this.node
        }
        ,
        e.prototype.setAttribute = function(t, e) {
            this.node.setAttributeNS(null , t, e)
        }
        ,
        e.prototype.getAttribute = function(t) {
            return this.node.getAttributeNS(null , t)
        }
        ,
        e.prototype.addClass = function(e) {
            t.SVG.AddClass(this.node, e)
        }
        ,
        e.prototype.removeClass = function(e) {
            t.SVG.RemoveClass(this.node, e)
        }
        ,
        e.prototype.getBounds = function() {
            return t.Rectangle.ZERO
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        e.prototype.getWidth = function() {
            return 0
        }
        ,
        e.prototype.getHeight = function() {
            return 0
        }
        ,
        e.prototype.update = function() {}
        ,
        e.prototype.destroy = function() {
            this.node = void 0
        }
        ,
        e
    }();
    t.SVGSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.setFillColor = function(t) {
            this.node.setAttributeNS(null , "fill", t)
        }
        ,
        e.prototype.setLineWidth = function(t) {
            this.node.setAttributeNS(null , "stroke-width", t + "px")
        }
        ,
        e.prototype.setLineColor = function(t) {
            this.node.setAttributeNS(null , "stroke", t)
        }
        ,
        e.prototype.setLineJoin = function(t) {
            this.node.setAttributeNS(null , "stroke-linejoin", t)
        }
        ,
        e.prototype.setLineCap = function(t) {
            this.node.setAttributeNS(null , "stroke-linecap", t)
        }
        ,
        e
    }(t.SVGSymbol);
    t.ASVGShapeSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "rect"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.prototype.update = function() {
            this._x !== this.shape.a.x && t.SVG.SetAttribute(this.node, "x", this._x = this.shape.a.x),
            this._y !== this.shape.a.y && t.SVG.SetAttribute(this.node, "y", this._y = this.shape.a.y),
            this._w !== this.shape.s.x && t.SVG.SetAttribute(this.node, "width", this._w = this.shape.s.x),
            this._h !== this.shape.s.y && t.SVG.SetAttribute(this.node, "height", this._h = this.shape.s.y)
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGRectangleSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.a = t,
            this.s = e
        }
        return e.FromZero = function() {
            return new e(t.Vector.FromZero(),t.Vector.FromZero())
        }
        ,
        e.FromJSON = function(i) {
            return new e(t.Vector.FromJSON(i.a),t.Vector.FromJSON(i.b))
        }
        ,
        e.FromNumbers = function(i, s, n, o) {
            return new e(new t.Vector(i,s),new t.Vector(n,o))
        }
        ,
        e.FromVectorPair = function(t) {
            return new e(t.a.clone(),t.b.subtract(t.a))
        }
        ,
        e.FromSVG = function(i) {
            var s = parseFloat(i.getAttributeNS(null , "x"))
              , n = parseFloat(i.getAttributeNS(null , "y"))
              , o = parseFloat(i.getAttributeNS(null , "width"))
              , r = parseFloat(i.getAttributeNS(null , "height"));
            return new e(new t.Vector(s,n),new t.Vector(o,r))
        }
        ,
        e.prototype.set = function(t, e) {
            this.a = t,
            this.s = e
        }
        ,
        e.prototype.copy = function(t) {
            this.a.copy(t.a),
            this.s.copy(t.s)
        }
        ,
        e.prototype.clone = function() {
            return new e(this.a.clone(),this.s.clone())
        }
        ,
        e.prototype.equal = function(t) {
            return t.a.x == this.a.x && t.a.y == this.a.y && t.s.x == this.s.x && t.s.y == this.s.y
        }
        ,
        e.prototype.add = function(t) {
            var e = this.clone();
            return e.addIn(t),
            e
        }
        ,
        e.prototype.addIn = function(t) {
            this.a.addIn(t.a),
            this.s.addIn(t.b)
        }
        ,
        e.prototype.subtract = function(t) {
            var e = this.clone();
            return e.subtractIn(t),
            e
        }
        ,
        e.prototype.subtractIn = function(t) {
            this.a.subtractIn(t.a),
            this.s.subtractIn(t.s)
        }
        ,
        e.prototype.multiply = function(t) {
            var e = this.clone();
            return e.multiplyIn(t),
            e
        }
        ,
        e.prototype.multiplyIn = function(t) {
            this.a.multiplyIn(t.a),
            this.s.multiplyIn(t.s)
        }
        ,
        e.prototype.multiplyVec = function(t) {
            var e = this.clone();
            return e.multiplyVecIn(t),
            e
        }
        ,
        e.prototype.multiplyVecIn = function(t) {
            this.a.multiplyIn(t),
            this.s.multiplyIn(t)
        }
        ,
        e.prototype.divide = function(t) {
            var e = this.clone();
            return e.divideIn(t),
            e
        }
        ,
        e.prototype.divideIn = function(t) {
            this.a.divideIn(t.a),
            this.s.divideIn(t.s)
        }
        ,
        e.prototype.divideVec = function(t) {
            var e = this.clone();
            return e.divideVecIn(t),
            e
        }
        ,
        e.prototype.divideVecIn = function(t) {
            this.a.divideIn(t),
            this.s.divideIn(t)
        }
        ,
        e.prototype.scale = function(t) {
            var e = this.clone();
            return e.scaleIn(t),
            e
        }
        ,
        e.prototype.scaleIn = function(t) {
            this.a.scaleIn(t),
            this.s.scaleIn(t)
        }
        ,
        e.prototype.concatVector = function(t) {
            var e = this.clone();
            return e.concatVectorIn(t),
            e
        }
        ,
        e.prototype.concatVectorIn = function(t) {
            var e = this.a.x
              , i = this.a.y;
            this.s.x = Math.max(e + this.s.x, t.x) - e,
            this.s.y = Math.max(i + this.s.y, t.y) - i,
            this.a.x = Math.min(e, t.x),
            this.a.y = Math.min(i, t.y)
        }
        ,
        e.prototype.concat = function(t) {
            var e = this.clone();
            return e.concatIn(t),
            e
        }
        ,
        e.prototype.concatIn = function(t) {
            var e = Math.max(this.a.x + this.s.x, t.a.x + t.s.x)
              , i = Math.max(this.a.y + this.s.y, t.a.y + t.s.y);
            this.a.x = Math.min(this.a.x, t.a.x),
            this.a.y = Math.min(this.a.y, t.a.y),
            this.s.x = e - this.a.x,
            this.s.y = i - this.a.y
        }
        ,
        e.prototype.intersect = function(i) {
            var s = Math.max(this.a.x, i.a.x)
              , n = Math.max(this.a.y, i.a.y)
              , o = Math.min(this.a.x + this.s.x, i.a.x + i.s.x)
              , r = Math.min(this.a.y + this.s.y, i.a.y + i.s.y);
            return new e(new t.Vector(s,n),new t.Vector(o - s,r - n))
        }
        ,
        e.prototype.intersectIn = function(t) {
            var e = Math.max(this.a.x, t.a.x)
              , i = Math.max(this.a.y, t.a.y);
            this.s.x = Math.min(this.a.x + this.s.x, t.a.x + t.s.x) - e,
            this.s.y = Math.min(this.a.y + this.s.y, t.a.y + t.s.y) - i,
            this.a.x = e,
            this.a.y = i
        }
        ,
        e.prototype.perimeter = function() {
            return 2 * (this.s.x + this.s.y)
        }
        ,
        e.prototype.getPointAt = function(e) {
            var i, s, n = this.min(), o = Math.abs(this.s.x), r = Math.abs(this.s.y), a = o + r;
            if (e = 2 * e - 1,
            e > 0) {
                var h = e * a;
                i = o - Math.min(h, o),
                s = r - Math.max(h - o, 0)
            } else {
                var h = (1 + e) * a;
                i = Math.min(h, o),
                s = Math.max(h - o, 0)
            }
            return new t.Vector(n.x + i,n.y + s)
        }
        ,
        e.prototype.lastPoint = function() {
            return this.a
        }
        ,
        e.prototype.offset = function(t, e) {
            return this
        }
        ,
        e.prototype.lerp = function(t, e) {
            var i = this.clone();
            return i.lerpIn(t, e),
            i
        }
        ,
        e.prototype.lerpIn = function(t, e) {
            this.a.lerpIn(t.a, e),
            this.s.lerpIn(t.s, e)
        }
        ,
        e.prototype.lerpCopy = function(t, e, i) {
            this.a.lerpCopy(t.a, e.a, i),
            this.s.lerpCopy(t.s, e.s, i)
        }
        ,
        e.prototype.isWithinBounds = function(t) {
            var e = this.min()
              , i = this.max();
            return t.x >= e.x && t.y >= e.y && t.x <= i.x && t.y <= i.y
        }
        ,
        e.prototype.isWithinShape = function(t) {
            return this.isWithinBounds(t)
        }
        ,
        e.prototype.min = function() {
            return new t.Vector(Math.min(this.a.x, this.a.x + this.s.x),Math.min(this.a.y, this.a.y + this.s.y))
        }
        ,
        e.prototype.max = function() {
            return new t.Vector(Math.max(this.a.x, this.a.x + this.s.x),Math.max(this.a.y, this.a.y + this.s.y))
        }
        ,
        e.prototype.getBounds = function() {
            return new e(this.min(),this.max())
        }
        ,
        e.prototype.getSize = function() {
            return this.s
        }
        ,
        e.prototype.getWidth = function() {
            return this.s.x
        }
        ,
        e.prototype.getHeight = function() {
            return this.s.y
        }
        ,
        e.prototype.getVectorPair = function() {
            return new t.VectorPair(this.a.clone(),this.s.add(this.a))
        }
        ,
        e.prototype.toString = function() {
            return "[" + this.a.x + "," + this.a.y + "] -> [" + this.s.x + "," + this.s.y + "]"
        }
        ,
        e.prototype.toJSON = function() {
            return {
                a: this.a.toJSON(),
                s: this.s.toJSON()
            }
        }
        ,
        e.prototype.toSVGString = function(t) {
            var e = this.s.x
              , i = this.s.y;
            return t + this.a.x + "," + this.a.y + " h" + e + " v" + i + " h" + -e + " v" + -i
        }
        ,
        e.prototype.drawAt = function(t) {
            var e = t.pixelDensity;
            t.context.rect(this.a.x * e, this.a.y * e, this.s.x * e, this.s.y * e)
        }
        ,
        e.prototype.createSVGSymbol = function() {
            return new t.SVGRectangleSymbol(this)
        }
        ,
        e.ZERO = new e(new t.Vector(0,0),new t.Vector(0,0)),
        e
    }();
    t.Rectangle = e,
    t.Rect = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t, i, s) {
            e.call(this, t, i),
            this.r = s
        }
        return __extends(i, e),
        i.FromJSON = function(e) {
            return new i(t.Vector.FromJSON(e.a),t.Vector.FromJSON(e.b),e.r)
        }
        ,
        i.prototype.clone = function() {
            return new i(this.a.clone(),this.s.clone(),this.r)
        }
        ,
        i.prototype.offset = function(t, e) {
            return this
        }
        ,
        i.prototype.lerpIn = function(t, i) {
            e.prototype.lerpIn.call(this, t, i),
            this.r += i * (t.r - this.r)
        }
        ,
        i.prototype.lerpCopy = function(t, i, s) {
            e.prototype.lerpCopy.call(this, t, i, s),
            this.r = t.r + s * (i.r - t.r)
        }
        ,
        i.prototype.toJSON = function() {
            var t = e.prototype.toJSON.call(this);
            return t.r = this.r,
            t
        }
        ,
        i.prototype.toSVGString = function(t) {
            var e = Math.max(2 * this.r, Math.min(2 * this.r, this.s.x, this.s.y))
              , i = .5 * e;
            return t + (this.a.x + i) + "," + (this.a.y - i - .5 * i) + "h" + (this.s.x - e) + "a" + i + "," + i + " 1 0 1 " + i + "," + i + "v" + (this.s.y - i) + "a" + i + "," + i + " 1 0 1 " + -i + "," + i + "h" + -(this.s.x - e) + "a" + i + "," + i + " 1 0 1 " + -i + "," + -i + "v" + -(this.s.y - i) + "a" + i + "," + i + " 1 0 1 " + i + "," + -i
        }
        ,
        i.prototype.drawAt = function(t) {
            var e = t.pixelDensity;
            t.context.fillRect(this.a.x * e, this.a.y * e, this.s.x * e, this.s.y * e)
        }
        ,
        i.prototype.createSVGSymbol = function() {
            return new t.SVGRoundedRectangleSymbol(this)
        }
        ,
        i
    }(t.Rectangle);
    t.RoundedRectangle = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t, i, s, n, o, r) {
            e.call(this, t, i),
            this.radiusTL = s,
            this.radiusTR = n,
            this.radiusBL = o,
            this.radiusBR = r
        }
        return __extends(i, e),
        i.FromJSON = function(e) {
            return new i(t.Vector.FromJSON(e.a),t.Vector.FromJSON(e.s),e.radiusTL,e.radiusTR,e.radiusBL,e.radiusBR)
        }
        ,
        i.prototype.setFlex = function(t, i, s, n, o, r) {
            e.prototype.set.call(this, t, i),
            this.radiusTL = s,
            this.radiusTR = n,
            this.radiusBL = o,
            this.radiusBR = r
        }
        ,
        i.prototype.clone = function() {
            return new i(this.a.clone(),this.s.clone(),this.radiusTL,this.radiusTR,this.radiusBL,this.radiusBR)
        }
        ,
        i.prototype.offset = function(t, e) {
            return this
        }
        ,
        i.prototype.lerpIn = function(t, i) {
            e.prototype.lerpIn.call(this, t, i),
            this.radiusTL += i * (t.radiusTL - this.radiusTL),
            this.radiusTR += i * (t.radiusTR - this.radiusTR),
            this.radiusBL += i * (t.radiusBL - this.radiusBL),
            this.radiusBR += i * (t.radiusBR - this.radiusBR)
        }
        ,
        i.prototype.lerpCopy = function(t, i, s) {
            e.prototype.lerpCopy.call(this, t, i, s),
            this.radiusTL = t.radiusTL + s * (i.radiusTL - t.radiusTL),
            this.radiusTR = t.radiusTR + s * (i.radiusTR - t.radiusTR),
            this.radiusBL = t.radiusBL + s * (i.radiusBL - t.radiusBL),
            this.radiusBR = t.radiusBR + s * (i.radiusBR - t.radiusBR)
        }
        ,
        i.prototype.toJSON = function() {
            var t = e.prototype.toJSON.call(this);
            return t.radiusTL = this.radiusTL,
            t.radiusTR = this.radiusTR,
            t.radiusBL = this.radiusBL,
            t.radiusBR = this.radiusBR,
            t
        }
        ,
        i.prototype.toSVGString = function(t) {
            this.radiusTL - Math.max(0, .5 * (this.radiusTL + this.radiusTR - Math.min(this.s.x, this.s.y))),
            this.radiusTR - Math.max(0, .5 * (this.radiusTL + this.radiusTR - Math.min(this.s.x, this.s.y))),
            this.radiusBL - Math.max(0, .5 * (this.radiusBL + this.radiusBR - Math.min(this.s.x, this.s.y))),
            this.radiusBR - Math.max(0, .5 * (this.radiusBL + this.radiusBR - Math.min(this.s.x, this.s.y)));
            return t + (this.a.x + this.radiusTL) + "," + this.a.y + "h" + (this.s.x - (this.radiusTL + this.radiusTR)) + "a" + this.radiusTR + "," + this.radiusTR + " 0 0 1 " + this.radiusTR + "," + this.radiusTR + "v" + (this.s.y - (this.radiusTR + this.radiusBR)) + "a" + this.radiusBR + "," + this.radiusBR + " 0 0 1 " + -this.radiusBR + "," + this.radiusBR + "h" + -(this.s.x - (this.radiusBR + this.radiusBL)) + "a" + this.radiusBL + "," + this.radiusBL + " 0 0 1 " + -this.radiusBL + "," + -this.radiusBL + "v" + -(this.s.y - (this.radiusTL + this.radiusBL)) + "a" + this.radiusTL + "," + this.radiusTL + " 0 0 1 " + this.radiusTL + "," + -this.radiusTL
        }
        ,
        i.prototype.drawAt = function(t) {
            var e = t.pixelDensity;
            t.context.fillRect(this.a.x * e, this.a.y * e, this.s.x * e, this.s.y * e)
        }
        ,
        i.prototype.createSVGSymbol = function() {
            return new t.SVGRoundedRectangleFlexSymbol(this)
        }
        ,
        i
    }(t.Rectangle);
    t.RoundedRectangleFlex = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.GetElement = function(t) {
            return document.getElementById(t)
        }
        ,
        t.Qs = function(t, e) {
            return e.querySelector(t)
        }
        ,
        t.QsAll = function(t, e) {
            return e.querySelectorAll(t)
        }
        ,
        t.Create = function(t, e) {
            var i = document.createElement(t);
            if (e) {
                var s;
                for (s in e)
                    "html" == s ? i.innerHTML = e[s] : i.setAttribute(s, e[s])
            }
            return i
        }
        ,
        t.Add = function(t, e) {
            t.appendChild(e)
        }
        ,
        t.AddAt = function(t, e, i) {
            t.insertBefore(e, t.childNodes[i || 0] || null )
        }
        ,
        t.Remove = function(t, e) {
            t.removeChild(e)
        }
        ,
        t.RemoveAllFrom = function(t) {
            for (; t.hasChildNodes(); )
                t.removeChild(t.lastChild)
        }
        ,
        t.WrapElement = function(t, e, i) {
            var s = t.parentNode.insertBefore(document.createElement(e), t);
            if (i) {
                var n;
                for (n in i)
                    s.setAttribute(n, i[n])
            }
            return s.appendChild(t),
            s
        }
        ,
        t.WrapElements = function(t, e, i) {
            var s = document.createElement(e);
            if (i) {
                var n;
                for (n in i)
                    s.setAttribute(n, i[n])
            }
            for (; t.childNodes.length; )
                s.appendChild(t.childNodes[0]);
            return t.appendChild(s),
            s
        }
        ,
        t.GetClass = function(t) {
            return t.className
        }
        ,
        t.SetClass = function(t, e) {
            t.className;
            t.className = e
        }
        ,
        t.HasClass = function(t, e) {
            return (" " + t.className + " ").indexOf(" " + e + " ") > 0
        }
        ,
        t.AddClass = function(t, e) {
            new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className) || (t.className += t.className ? " " + e : e)
        }
        ,
        t.RemoveClass = function(t, e) {
            t.className = t.className.replace(new RegExp("(\\b)" + e + "(\\s|$)","g"), " ").trim().replace(/[\s]{2}/g, " ")
        }
        ,
        t.ToggleClass = function(e, i, s) {
            var n = new RegExp("(^|\\s)" + i + "(\\s|$|:)");
            n.test(e.className) ? (t.RemoveClass(e, i),
            s && t.AddClass(e, s)) : (t.AddClass(e, i),
            s && t.RemoveClass(e, s))
        }
        ,
        t.SetStyles = function(t, e, i) {
            var s;
            for (s in e)
                t.style[s] = e[s];
            i === !1 ? !1 : t.offsetTop
        }
        ,
        t.GetElementIndex = function(t) {
            for (var e = 0; t.previousElementSibling; )
                e++,
                t = t.previousElementSibling;
            return e
        }
        ,
        t.CreateEventObject = function(t) {
            var e;
            return document.createEvent ? (e = document.createEvent("HTMLEvents"),
            e.initEvent(t, !0, !0)) : (e = document.createEventObject(),
            e.eventType = t),
            e
        }
        ,
        t.FireEvent = function(t, e) {
            document.createEvent ? t.dispatchEvent(event) : t.fireEvent("on" + event.eventType, event)
        }
        ,
        t.FireEventByString = function(e, i) {
            document.createEvent ? e.dispatchEvent(t.CreateEventObject(i)) : e.fireEvent("on" + i)
        }
        ,
        t.GetGlobalOffsetLeft = function(t) {
            return t.offsetParent ? t.offsetLeft + this.GetGlobalOffsetLeft(t.offsetParent) : t.offsetLeft
        }
        ,
        t.GetGlobalOffsetTop = function(t) {
            return t.offsetParent ? t.offsetTop + this.GetGlobalOffsetTop(t.offsetParent) : t.offsetTop
        }
        ,
        t
    }();
    t.HTML = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.onClickBind = this.onClick.bind(this),
            this.node = t,
            this.link = e,
            this.node.addEventListener("click", this.onClickBind)
        }
        return e.prototype.onClick = function(e) {
            t.URLManager.HandleLinkClick(this.link, e)
        }
        ,
        e.prototype.destroy = function() {
            this.node.removeEventListener("click", this.onClickBind),
            this.node = this.onClickBind = void 0
        }
        ,
        e
    }();
    t.HTMLLink = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t) {
            this.type = t
        }
        return t.ON_URL_CHANGE = "onUrlChange",
        t
    }();
    t.URLEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Init = function(i) {
            e.SetPathFromUrl(e.GetUrl()),
            i === !0 && t.DeviceInfo.HasPopState === !0 ? ("" !== window.location.hash && null  !== window.location.hash && window.history.replaceState(null , e.GetPath(), e.GetPath()),
            window.addEventListener("popstate", e.OnUrlChangeHandler)) : window.addEventListener("hashchange", e.OnUrlChangeHandler)
        }
        ,
        e.OnUrlChangeHandler = function(t) {
            e.SetPathFromUrl(e.GetUrl()),
            e.FireHistoryChange()
        }
        ,
        e.FireHistoryChange = function() {
            e._eventDispatcher.dispatchEvent(new t.SSEvent(t.URLEvent.ON_URL_CHANGE,e))
        }
        ,
        e.SetRootPath = function(t) {
            e._root = t
        }
        ,
        e.SetPathAtLevel = function(t, i) {
            if (e.GetPathList()[t] !== i) {
                var s = e.GetPathList() || [];
                return s[t] = i,
                e.SetPathFromUrl("/" + s.join("/")),
                !0
            }
            return !1
        }
        ,
        e.SetPathFromUrl = function(t) {
            e._path = e.GetPathFromUrl(t)
        }
        ,
        e.GetPathFromUrl = function(t) {
            var i, s = /(?:#)[^\s]+/g;
            if (i = t.match(s),
            null  !== i)
                return i[0].slice(1);
            var n = /[^?\s]+/g;
            return t = t.replace(e._root, ""),
            t = t.replace(/^https?:\/\/[^\s\/]+/, ""),
            i = t.match(n),
            null  !== i ? i[0] : null 
        }
        ,
        e.GetRootPath = function() {
            return e._root
        }
        ,
        e.GetPath = function() {
            return e._path
        }
        ,
        e.GetPathList = function() {
            return e._path.split("/").filter(function(t) {
                return "" !== t && "/" !== t
            })
        }
        ,
        e.GetPathAt = function(t) {
            return e._path.split("/").filter(function(t) {
                return "" !== t && "/" !== t
            })
        }
        ,
        e.GetUrl = function() {
            return window.location.href
        }
        ,
        e.GetHistoryLength = function() {
            return e._historyLength
        }
        ,
        e.GoToPathAtLevel = function(t, i) {
            this.SetPathAtLevel(t, i) === !0 && e.Perform()
        }
        ,
        e.GoToURL = function(i, s) {
            return t.UrlUtility.IsAbsolute(i) !== !0 && s !== !0 ? (e.SetPathFromUrl(i),
            e.Perform()) : 0 == i.indexOf(location.origin) && s !== !0 ? (e.SetPathFromUrl(i),
            e.Perform()) : void window.open(i, s === !0 ? null  : "_self")
        }
        ,
        e.Perform = function() {
            t.DeviceInfo.HasPopState === !0 ? (window.history.pushState({
                historyNum: e._historyLength++
            }, e.GetPath(), e.GetPath()),
            e.FireHistoryChange()) : window.location.hash = e.GetPath().replace(/^\/+/, "/")
        }
        ,
        e.AddEventListener = function(t, e) {
            this._eventDispatcher.addEventListener(t, e)
        }
        ,
        e.RemoveEventListener = function(t, e) {
            this._eventDispatcher.removeEventListener(t, e)
        }
        ,
        e.DispatchEvent = function(t) {
            this._eventDispatcher.dispatchEvent(t)
        }
        ,
        e.AddCostumeScheme = function(t, e) {
            this._CostumeSchemes[t] = e
        }
        ,
        e.HandleLinkClick = function(t, e) {
            this.CallCostumeURL(t, e.metaKey === !0)
        }
        ,
        e.CallCostumeURL = function(e, i) {
            if (t.UrlUtility.HasScheme(e) === !0) {
                var s = e.indexOf(":")
                  , n = e.substr(0, s)
                  , o = e.substr(s + 1);
                this.CallCostumeScheme(n, o, i)
            } else
                this.GoToURL(e, i)
        }
        ,
        e.CallCostumeScheme = function(t, e, i) {
            this._CostumeSchemes.hasOwnProperty(t) === !0 ? this._CostumeSchemes[t](e) : this.GoToURL(t + ":" + e, i)
        }
        ,
        e._root = "",
        e._historyLength = window.history.length,
        e._eventDispatcher = new t.EventDispatcher,
        e._CostumeSchemes = {},
        e
    }();
    t.URLManager = e
}(ss || (ss = {})),
Function.prototype.bind || (Function.prototype.bind = function() {
    var t = this
      , e = Array.prototype.slice.call(arguments)
      , i = e.shift();
    return function() {
        return t.apply(i, e.concat(Array.prototype.slice.call(arguments)))
    }
}
),
Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
    var i = this.length >>> 0
      , e = e || 0;
    for (e = 0 > e ? Math.ceil(e) : Math.floor(e),
    0 > e && (e += i); i > e; ) {
        if (e in this && this[e] === t)
            return e;
        e++
    }
    return -1
}
),
Array.prototype.clone || (Array.prototype.clone = function() {
    return this.slice(0)
}
),
Array.prototype.addItem || (Array.prototype.addItem = function(t) {
    -1 == this.indexOf(t) && this.push(t)
}
),
Array.prototype.addItemAt || (Array.prototype.addItemAt = function(t, e) {
    -1 == this.indexOf(t) && this.splice(e, 0, t)
}
),
Array.prototype.removeItem || (Array.prototype.removeItem = function(t) {
    var e = this.indexOf(t);
    -1 != e && this.splice(e, 1)
}
),
Array.prototype.reduce || (Array.prototype.reduce = function(t, e) {
    void 0 === e && (e = void 0);
    for (var i = this.length, s = 0, n = e; i > s; )
        n = void 0 !== n && s in this ? t.call(void 0, n, this[s], s, this) : this[s],
        s++;
    return n
}
),
function() {
    if ("performance" in window == 0 && (window.performance = {}),
    Date.now = Date.now || function() {
        return (new Date).getTime()
    }
    ,
    "now" in window.performance == 0) {
        var t;
        t = performance.timing && performance.timing.navigationStart ? performance.timing.navigationStart : Date.now(),
        window.performance.now = function() {
            return Date.now() - t
        }
    }
}(),
function() {
    if (function() {
        for (var t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
            window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"]
    }(),
    !window.requestAnimationFrame) {
        var t = (new Date).getTime()
          , e = 0;
        window.requestAnimationFrame = function(i) {
            var s = (new Date).getTime() - t
              , n = Math.max(0, 16 - (s - e))
              , o = window.setTimeout(function() {
                i(s + n)
            }, n);
            return e = s + n,
            o
        }
    }
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    }
    )
}();
var XHR;
!function() {
    XHR = "undefined" == typeof XMLHttpRequest ? function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (t) {}
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
    }
     : XMLHttpRequest
}(),
window.URL || (window.URL = window.webkitURL || window.mozURL || window.msURL);
var ss;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.onTouchClickBind = this.onTouchClick.bind(this),
            this.onTouchStartBind = this.onTouchStart.bind(this),
            this.onTouchMoveBind = this.onTouchMove.bind(this),
            this.onTouchEndBind = this.onTouchEnd.bind(this),
            this.onTouchCancelBind = this.onTouchCancel.bind(this),
            this.target = t,
            this.listener = e,
            t.addEventListener("click", this.onTouchClickBind),
            t.addEventListener("touchstart", this.onTouchStartBind),
            t.addEventListener("touchcancel", this.onTouchCancelBind)
        }
        return e.AddClickListener = function(i, s) {
            t.DeviceInfo.HasTouch === !0 ? i._touchClick = new e(i,s) : i.addEventListener("click", s)
        }
        ,
        e.RemoveClickListener = function(e, i) {
            t.DeviceInfo.HasTouch === !0 ? (e._touchClick.destroy(),
            delete e._touchClick) : e.removeEventListener("click", i)
        }
        ,
        e.prototype.onTouchClick = function(t) {
            if (void 0 != t.changedTouches && 1 == t.changedTouches.length) {
                if (void 0 === this.touchStartTime)
                    return t.stopPropagation(),
                    void t.preventDefault();
                this.target.removeEventListener("touchend", this.onTouchEndBind),
                this.target.removeEventListener("touchmove", this.onTouchMoveBind),
                this.touchStartTime = void 0
            }
            this.listener(t)
        }
        ,
        e.prototype.onTouchStart = function(t) {
            if (1 == t.targetTouches.length) {
                var e = t.targetTouches[0];
                this.touchStartX = e.pageX,
                this.touchStartY = e.pageY,
                this.touchStartTime = performance.now(),
                this.target.addEventListener("touchend", this.onTouchEndBind),
                this.target.addEventListener("touchmove", this.onTouchMoveBind)
            }
        }
        ,
        e.prototype.onTouchMove = function(t) {
            if (1 == t.changedTouches.length) {
                var e = t.changedTouches[0];
                (Math.abs(e.pageX - this.touchStartX) > 5 || Math.abs(e.pageY - this.touchStartY) > 5) && (this.target.removeEventListener("touchend", this.onTouchEndBind),
                this.target.removeEventListener("touchmove", this.onTouchMoveBind),
                this.touchStartTime = void 0)
            }
        }
        ,
        e.prototype.onTouchEnd = function(t) {
            if (1 == t.changedTouches.length) {
                var e = t.changedTouches[0];
                if (Math.abs(e.pageX - this.touchStartX) > 5 || Math.abs(e.pageY - this.touchStartY) > 5)
                    return;
                this.target.removeEventListener("touchend", this.onTouchEndBind),
                this.target.removeEventListener("touchmove", this.onTouchMoveBind),
                this.touchStartTime = void 0,
                this.listener(t)
            }
        }
        ,
        e.prototype.onTouchCancel = function(t) {
            this.target.removeEventListener("touchend", this.onTouchEndBind),
            this.target.removeEventListener("touchmove", this.onTouchMoveBind)
        }
        ,
        e.prototype.destroy = function() {
            this.target.removeEventListener("click", this.onTouchClick.bind(this)),
            this.target.removeEventListener("touchend", this.onTouchStartBind),
            this.onTouchCancel(),
            this.onTouchClickBind = this.target = this.listener = null 
        }
        ,
        e
    }();
    t.TouchClick = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t, s, n) {
            void 0 === s && (s = new Object),
            void 0 === n && (n = i.TYPE_GET),
            e.call(this),
            this.progress = 0,
            this.onProgressHandlerBind = this.onProgressHandler.bind(this),
            this.url = t,
            this.requestData = s,
            this.requestType = n.toUpperCase()
        }
        return __extends(i, e),
        i.prototype.__default_execute = function() {
            this.request = new XMLHttpRequest,
            this.request.onreadystatechange = this.onLoadCompleteHandler.bind(this),
            this.request.addEventListener("progress", this.onProgressHandlerBind);
            var e = this.url
              , s = t.UrlUtility.URLEncodeObject(this.requestData);
            this.requestType == i.TYPE_GET && (e += "?" + s,
            s = null ),
            this.request.open(this.requestType, e, !0),
            this.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            this.setStateToExecuting(),
            this.request.send(s)
        }
        ,
        i.prototype.__executing_revert = function() {
            this.request.removeEventListener("progress", this.onProgressHandlerBind),
            this.request.onreadystatechange = null ,
            this.request.abort(),
            this.__complete_revert()
        }
        ,
        i.prototype.__complete_revert = function() {
            this.request = null ,
            e.prototype.setStateToDefault.call(this)
        }
        ,
        i.prototype.destroy = function() {
            this.revert(),
            this.url = this.requestData = this.requestType = null 
        }
        ,
        i.prototype.onProgressHandler = function(e) {
            e.lengthComputable === !0 && (this.progress = e.loaded / e.total,
            this.dispatchEvent({
                type: t.RequestEvent.PROGRESS,
                target: this
            }))
        }
        ,
        i.prototype.onLoadCompleteHandler = function(e) {
            4 === this.request.readyState && (this.request.status >= 200 && this.request.status < 400 ? (this.request.removeEventListener("progress", this.onProgressHandlerBind),
            this.request.onreadystatechange = null ,
            this.setStateToComplete(),
            this.onCompleteHandler(e),
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            })) : this.request.status > 400 && this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            }))
        }
        ,
        i.prototype.onCompleteHandler = function(t) {}
        ,
        i.TYPE_GET = "GET",
        i.TYPE_POST = "POST",
        i
    }(t.ATask);
    t.AAjaxRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e._RegexReplace = function(t) {
            return "@2x" + t
        }
        ,
        e.GenerateRetinaURL = function(i) {
            return t.DeviceInfo.PixelRatio >= 2 ? i.replace(/\.[\w\?=]+$/, e._RegexReplace) : i
        }
        ,
        e.URLEncodeObject = function(t) {
            var e = [];
            for (var i in t)
                e.push(i + "=" + encodeURIComponent(t[i]));
            return e.join("&")
        }
        ,
        e.IsAbsolute = function(t) {
            var e = new RegExp("^(?:[a-z]+:)?//","i");
            return e.test(t)
        }
        ,
        e.HasScheme = function(t) {
            var e = new RegExp("^[a-z0-9]+:","i");
            return e.test(t)
        }
        ,
        e.GetFileExtension = function(t) {
            var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i
              , i = e.exec(t);
            return i.pop().toLowerCase()
        }
        ,
        e
    }();
    t.UrlUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t, s, n) {
            e.call(this),
            this.progress = 0,
            this.onLoadProgressHandlerBind = this.onLoadProgressHandler.bind(this),
            this.onLoadCompleteHandlerBind = this.onLoadCompleteHandler.bind(this),
            this.url = t,
            this.requestData = s || new Object,
            this.requestType = n || i.REQUEST_GET
        }
        return __extends(i, e),
        i.prototype.__default_execute = function() {
            this.request = new XHR,
            this.request.addEventListener("load", this.onLoadCompleteHandlerBind),
            this.request.addEventListener("progress", this.onLoadProgressHandlerBind);
            var e = this.url
              , s = t.UrlUtility.URLEncodeObject(this.requestData);
            this.requestType == i.REQUEST_GET && (e += "?" + s,
            s = null ),
            this.request.open(this.requestType, e, !0),
            null  != this.responseType && (this.request.responseType = this.responseType),
            this.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
            this.setStateToExecuting(),
            this.request.send(s)
        }
        ,
        i.prototype.__executing_revert = function() {
            this.request.removeEventListener("load", this.onLoadCompleteHandlerBind),
            this.request.removeEventListener("progress", this.onLoadProgressHandlerBind),
            this.request.abort(),
            this.__complete_revert()
        }
        ,
        i.prototype.__complete_revert = function() {
            this.request = null ,
            e.prototype.setStateToDefault.call(this)
        }
        ,
        i.prototype.destroy = function() {
            this.revert(),
            this.url = this.requestData = this.requestType = null 
        }
        ,
        i.prototype.onLoadProgressHandler = function(e) {
            e.lengthComputable && (this.progress = e.loaded / e.total,
            this.dispatchEvent(new t.SSEvent(t.RequestEvent.PROGRESS,this)))
        }
        ,
        i.prototype.onLoadCompleteHandler = function(e) {
            4 == this.request.readyState && (this.request.status >= 200 && this.request.status < 400 ? (this.request.removeEventListener("load", this.onLoadCompleteHandlerBind),
            this.request.removeEventListener("progress", this.onLoadProgressHandlerBind),
            this.setStateToComplete(),
            this.onCompleteHandler(e),
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            })) : this.request.status > 400 && this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            }))
        }
        ,
        i.prototype.onCompleteHandler = function(t) {}
        ,
        i.REQUEST_GET = "GET",
        i.REQUEST_POST = "POST",
        i.RESPONSE_ARRAY = "arraybuffer",
        i.RESPONSE_DOCUMENT = "document",
        i.RESPONSE_BLOB = "blob",
        i.RESPONSE_JSON = "json",
        i.RESPONSE_TEXT = "text",
        i
    }(t.ATask);
    t.AXHRRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this),
            this.onLoadCompleteHandlerBind = this.onLoadCompleteHandler.bind(this),
            this.onLoadErrorHandlerBind = this.onLoadErrorHandler.bind(this),
            this.url = t
        }
        return __extends(i, e),
        i.WithTargetAsCSS = function(e, s) {
            var n = new i(s);
            return n.addEventListener(t.TaskEvent.COMPLETE, function(t) {
                e.style["background-image"] = "url('" + s + "')",
                n.destroy()
            }),
            n
        }
        ,
        i.WithTargetAsElement = function(e, s) {
            var n = new i(s);
            return n.addEventListener(t.TaskEvent.COMPLETE, function(t) {
                e.appendChild(t.data),
                n.destroy()
            }),
            n
        }
        ,
        i.prototype.__default_execute = function() {
            this.data = new Image,
            this.data.addEventListener("load", this.onLoadCompleteHandlerBind),
            this.data.addEventListener("abort", this.onLoadErrorHandlerBind),
            this.data.addEventListener("error", this.onLoadErrorHandlerBind),
            this.setStateToExecuting(),
            this.data.src = this.url
        }
        ,
        i.prototype.removeEventListeners = function() {
            this.data.removeEventListener("load", this.onLoadCompleteHandlerBind),
            this.data.removeEventListener("abort", this.onLoadErrorHandlerBind),
            this.data.removeEventListener("error", this.onLoadErrorHandlerBind)
        }
        ,
        i.prototype.onLoadCompleteHandler = function(e) {
            this.removeEventListeners(),
            this.setStateToComplete(),
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            })
        }
        ,
        i.prototype.onLoadErrorHandler = function(e) {
            this.revert(),
            this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            })
        }
        ,
        i.prototype.__executing_revert = function() {
            this.removeEventListeners(),
            this.data.src = "",
            this.data.removeAttribute("src"),
            this.data = null ,
            this.setStateToDefault()
        }
        ,
        i.prototype.__complete_revert = function() {
            this.data = null ,
            this.setStateToDefault()
        }
        ,
        i.prototype.destroy = function() {
            this.url = null ,
            e.prototype.destroy.call(this),
            this.data = null 
        }
        ,
        i
    }(t.ATask);
    t.ImageRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.responseType = t.AXHRRequest.RESPONSE_BLOB
        }
        return __extends(i, e),
        i.prototype.onCompleteHandler = function(t) {
            try {
                this.data = window.URL.createObjectURL(this.request.response)
            } catch (e) {
                throw new Error("ImageRequestXHR: Image Parsing Error: " + e.name + ": " + e.message)
            }
        }
        ,
        i.prototype.destroy = function() {
            this.data = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.AXHRRequest);
    t.ImageRequestXHR = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.onCompleteHandler = function(t) {
            try {
                this.data = JSON.parse(this.request.responseText)
            } catch (e) {
                throw new Error("JSON Parsing Error: " + e.name + ": " + e.message)
            }
        }
        ,
        e.prototype.__complete_revert = function() {
            this.data = null ,
            t.prototype.__complete_revert.call(this)
        }
        ,
        e
    }(t.AAjaxRequest);
    t.JSONRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.responseType = t.AXHRRequest.RESPONSE_ARRAY
        }
        return __extends(i, e),
        i.prototype.onCompleteHandler = function(t) {
            var e = new Uint8Array(this.request.response)
              , i = String.fromCharCode.apply(null , e)
              , s = btoa(i);
            this.data = "data:image/jpeg;base64," + s
        }
        ,
        i.prototype.destroy = function() {
            this.data = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.AXHRRequest);
    t.RawImageRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.responseType = t.AXHRRequest.RESPONSE_TEXT
        }
        return __extends(i, e),
        i.prototype.onCompleteHandler = function(t) {
            this.data = this.request.response
        }
        ,
        i.prototype.destroy = function() {
            this.data = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.AXHRRequest);
    t.RawRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Load = function(i) {
            var s = t.UrlUtility.GetFileExtension(i).toLowerCase();
            if (e._ExtDictionary.hasOwnProperty(s) === !1)
                throw new TypeError("RequestFactory::Load There is no request type for the file-extension '" + s + "'");
            return new e._ExtDictionary[s](i)
        }
        ,
        e.ImageLoader = t.ImageRequest,
        e._ExtDictionary = {
            png: t.ImageRequest,
            jpg: t.ImageRequest,
            jpeg: t.ImageRequest,
            gif: t.ImageRequest
        },
        e
    }();
    t.RequestFactory = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s, n, o, r, a) {
            e.call(this, null ),
            this.apiWidthParameterName = i.DefaultApiWidthParameterName,
            this.currentPixelDensity = 1,
            this.currentSize = t.Vector.ZERO,
            this.round = Math.round,
            this.imageAPI = s,
            this.imageSourceSize = n,
            this.imageAspectRatio = n.getAspectRatio(),
            this.sizeBehavior = o,
            this.sizeSteps = r || i.DEFAULT_SIZE_STEPS,
            this._allowRetina = a !== !0
        }
        return __extends(i, e),
        i.SetDefaultApiParameterName = function(t) {
            this.DefaultApiWidthParameterName = t
        }
        ,
        i.prototype.setApiParameterName = function(t) {
            this.apiWidthParameterName = t
        }
        ,
        i.prototype.changeRounding = function(t) {
            this.round = t
        }
        ,
        i.prototype.set = function(e, i) {
            this.imageAPI = e,
            this.imageSourceSize = i,
            this.imageAspectRatio = i.getAspectRatio(),
            this.currentSize = t.Vector.ZERO
        }
        ,
        i.prototype.allowRetina = function() {
            this._allowRetina = !0,
            void 0 !== this._size && this.setSize(this._size)
        }
        ,
        i.prototype.__default_execute = function() {
            null  != this.url && e.prototype.__default_execute.call(this)
        }
        ,
        i.prototype.setSize = function(e) {
            this._size = e;
            var i = this.sizeBehavior.toRectangle(e, this.imageSourceSize)
              , s = i.s.x;
            this._allowRetina === !0 && (s *= t.DeviceInfo.PixelRatio,
            this.currentPixelDensity = t.DeviceInfo.PixelRatio),
            s = Math.min(this.round(s / this.sizeSteps) * this.sizeSteps, this.imageSourceSize.x),
            this.currentSize.x != s && (this.revert(),
            this.currentSize = new t.Vector(s,Math.round(s / this.imageAspectRatio)),
            this.url = this.imageAPI + "?" + this.apiWidthParameterName + "=" + s)
        }
        ,
        i.prototype.updateSize = function() {
            this.currentSize = new t.Vector(this.data.width,this.data.height)
        }
        ,
        i.prototype.getAspectRatio = function() {
            return this.imageAspectRatio
        }
        ,
        i.prototype.getRealSize = function() {
            return this.currentSize
        }
        ,
        i.prototype.getNeutralSize = function() {
            return this.currentSize.divideValues(this.currentPixelDensity, this.currentPixelDensity)
        }
        ,
        i.prototype.destroy = function() {
            this.sizeBehavior = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i.DEFAULT_SIZE_STEPS = 16,
        i.DefaultApiWidthParameterName = "width",
        i
    }(t.ImageRequest);
    t.ResponsiveImageRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s, n, o, r, a) {
            e.call(this, null ),
            this.apiWidthParameterName = t.ResponsiveImageRequest.DefaultApiWidthParameterName,
            this.currentPixelDensity = 1,
            this.currentSize = t.Vector.ZERO,
            this.imageAPI = s,
            this.imageSourceSize = n,
            this.imageAspectRatio = n.getAspectRatio(),
            this.sizeBehavior = o,
            this.sizeSteps = r || i.DEFAULT_SIZE_STEPS,
            this._allowRetina = a !== !0
        }
        return __extends(i, e),
        i.prototype.setApiParameterName = function(t) {
            this.apiWidthParameterName = t
        }
        ,
        i.prototype.allowRetina = function() {
            this._allowRetina = !0,
            void 0 !== this._size && this.setSize(this._size)
        }
        ,
        i.prototype.__default_execute = function() {
            void 0 != this.url && e.prototype.__default_execute.call(this)
        }
        ,
        i.prototype.setSize = function(e) {
            this._size = e;
            var i = this.sizeBehavior.toRectangle(e, this.imageSourceSize)
              , s = i.s.x;
            this._allowRetina === !0 && (s *= t.DeviceInfo.PixelRatio,
            this.currentPixelDensity = t.DeviceInfo.PixelRatio),
            s = Math.min(Math.floor(s / this.sizeSteps) * this.sizeSteps, this.imageSourceSize.x),
            this.currentSize.x != s && (this.revert(),
            this.currentSize = new t.Vector(s,Math.round(s / this.imageAspectRatio)),
            this.url = this.imageAPI,
            this.requestData[this.apiWidthParameterName] = s)
        }
        ,
        i.prototype.updateSize = function() {}
        ,
        i.prototype.getAspectRatio = function() {
            return this.imageAspectRatio
        }
        ,
        i.prototype.getRealSize = function() {
            return this.currentSize
        }
        ,
        i.prototype.getNeutralSize = function() {
            return this.currentSize.divideValues(this.currentPixelDensity, this.currentPixelDensity)
        }
        ,
        i.prototype.destroy = function() {
            this.sizeBehavior = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i.DEFAULT_SIZE_STEPS = 16,
        i
    }(t.ImageRequestXHR);
    t.ResponsiveImageRequestXHR = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.onCompleteHandler = function(t) {
            this.scriptElement = document.createElement("script"),
            this.scriptElement.type = "text/javascript",
            this.scriptElement.text = this.request.responseText,
            document.body.appendChild(this.scriptElement)
        }
        ,
        e
    }(t.AXHRRequest);
    t.ScriptRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.onCompleteHandler = function(t) {
            this.data = this.request.responseText
        }
        ,
        e.prototype.__complete_revert = function() {
            this.data = null ,
            t.prototype.__complete_revert.call(this)
        }
        ,
        e
    }(t.AAjaxRequest);
    t.TXTRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.onCompleteHandler = function(t) {
            this.data = this.request.responseText
        }
        ,
        e.prototype.__complete_revert = function() {
            this.data = null ,
            t.prototype.__complete_revert.call(this)
        }
        ,
        e
    }(t.AAjaxRequest);
    t.XMLRequest = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.AngleDifference = function(e, i) {
            var s = t.MathUtility.Modulo(i, t.MathUtility.DOUBLE_PI) - t.MathUtility.Modulo(e, t.MathUtility.DOUBLE_PI);
            return s > Math.PI ? s -= t.MathUtility.DOUBLE_PI : s <= -Math.PI && (s += t.MathUtility.DOUBLE_PI),
            s
        }
        ,
        e.GetRadiusToCoverSquare = function(t) {
            return Math.sqrt(2 * Math.pow(t, 2))
        }
        ,
        e.GetDiameterToCoverRectangle = function(t) {
            return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2))
        }
        ,
        e.GetSquareWidthInsideCircle = function(t) {
            return Math.sqrt(.5 * Math.pow(t, 2))
        }
        ,
        e.CalculateAngle = function(t, e) {
            return Math.atan2(e.y - t.y, e.x - t.x)
        }
        ,
        e.Distance = function(t, e) {
            var i = e.x - t.x
              , s = e.y - t.y;
            return Math.sqrt(i * i + s * s)
        }
        ,
        e.SquaredDistance = function(t, e) {
            var i = t.x - e.x
              , s = t.y - e.y;
            return i * i + s * s
        }
        ,
        e.CoordinateDifference = function(e, i) {
            return new t.Vector(e.x - i.x,e.y - i.y)
        }
        ,
        e.CoordinateDifferenceSquared = function(t, e) {
            var i = e.x - t.x
              , s = e.y - t.y;
            return i * i + s * s
        }
        ,
        e.GetInterpolatedPoint = function(e, i, s) {
            return new t.Vector(t.MathUtility.Lerp(e.x, i.x, s),t.MathUtility.Lerp(e.y, i.y, s))
        }
        ,
        e.GetClosestLinearInterpolation = function(t, e, i) {
            var s = e.x - t.x
              , n = e.y - t.y;
            return ((i.x - t.x) * s + (i.y - t.y) * n) / this.CoordinateDifferenceSquared(t, e)
        }
        ,
        e.GetClosestPoint = function(t, i, s) {
            return e.GetInterpolatedPoint(i, s, e.GetClosestLinearInterpolation(i, s, t))
        }
        ,
        e.GetClosestPointOnLine = function(i, s, n) {
            return e.GetInterpolatedPoint(s, n, t.MathUtility.Limit(e.GetClosestLinearInterpolation(s, n, i), 0, 1))
        }
        ,
        e.RotatePoint = function(e, i) {
            var s = Math.cos(i)
              , n = Math.sin(i)
              , o = e.x * s - e.y * n
              , r = e.y * s + e.x * n;
            return new t.Vector(o,r)
        }
        ,
        e.RotatePointAroundAxis = function(e, i, s) {
            e = e.subtract(i);
            var n = Math.cos(s)
              , o = Math.sin(s)
              , r = e.x * n - e.y * o
              , a = e.y * n + e.x * o;
            return new t.Vector(r,a)
        }
        ,
        e.C = .55191502449,
        e.CalculateAspectRatio = function(t, e) {
            return t / e
        }
        ,
        e.CalculateScaleAspectToFitInsideValues = function(t, e, i, s) {
            return i / s > t / e ? t / i : e / s
        }
        ,
        e.CalculateScaleAspectToFitInsideArea = function(t, e) {
            return t.x / t.y < e.x / e.y ? t.x / e.x : t.y / e.y
        }
        ,
        e
    }();
    t.GeometryUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e, i, s) {
            this.width = t,
            this.height = e,
            this.halign = i,
            this.valign = s
        }
        return e.GetAlignmentValueFromString = function(t) {
            for (var e, i = t.split(" "), s = [.5, .5], n = i.length; n--; )
                switch (e = i[n]) {
                case "left":
                    s[0] = 0;
                    break;
                case "right":
                    s[0] = 1;
                    break;
                case "top":
                    s[1] = 0;
                    break;
                case "bottom":
                    s[1] = 1
                }
            return s
        }
        ,
        e.FromJSON = function(t) {
            var i, s, n, o;
            if (void 0 !== t.size) {
                var r = t.size.match(/\d+|auto/g);
                null  !== r ? (i = parseFloat(r[0]) / 100,
                s = parseFloat(r[1]) / 100) : i = s = "cover" == t.size ? 1 : ("contain" == t.size,
                null )
            }
            if (void 0 !== t.align) {
                var a = t.align.match(/\d+/g);
                if (null  !== a)
                    n = parseFloat(a[0]) / 100,
                    o = parseFloat(a[1]) / 100;
                else {
                    var h = e.GetAlignmentValueFromString(t.align);
                    n = h[0],
                    o = h[1]
                }
            }
            return isNaN(i) && (i = null ),
            isNaN(s) && (s = null ),
            isNaN(n) && (n = .5),
            isNaN(o) && (o = .5),
            new e(i,s,n,o)
        }
        ,
        e.Contain = function(t, i) {
            return new e(null ,null ,t,i)
        }
        ,
        e.Cover = function(t, i) {
            return new e(1,1,t,i)
        }
        ,
        e.prototype.setSize = function(t, e) {
            this.width = t,
            this.height = e
        }
        ,
        e.prototype.setAlign = function(t, e) {
            this.halign = t,
            this.valign = e
        }
        ,
        e.prototype.getSizeProp = function() {
            return 1 == this.width && 1 == this.height ? "cover" : null  == this.width && null  == this.height ? "contain" : t.StyleUtility.ConvertToPercentagesOrAuto(this.width) + " " + t.StyleUtility.ConvertToPercentagesOrAuto(this.height)
        }
        ,
        e.prototype.toAspects = function(e, i) {
            var s, n;
            1 == this.width && 1 == this.height ? i > e ? (s = i,
            n = 1) : (s = 1,
            n = 1 / i) : null  == this.width && null  == this.height ? e > i ? (s = i,
            n = 1) : (s = 1,
            n = 1 / i) : null  !== this.width ? (s = this.width,
            n = s / i) : (n = this.height,
            s = n * i);
            var o = 1 - s
              , r = 1 - n
              , a = new t.Vector(o * this.halign,r * this.valign);
            return new t.Rectangle(a,new t.Vector(s,n))
        }
        ,
        e.prototype.toRectangle = function(e, i) {
            var s, n, o = t.GeometryUtility.CalculateAspectRatio(e.x, e.y), r = t.GeometryUtility.CalculateAspectRatio(i.x, i.y);
            1 == this.width && 1 == this.height ? r > o ? (s = e.y * r,
            n = e.y) : (s = e.x,
            n = e.x / r) : null  == this.width && null  == this.height ? o > r ? (s = e.y * r,
            n = e.y) : (s = e.x,
            n = e.x / r) : null  !== this.width ? (s = e.x * this.width,
            n = s / r) : (n = e.y * this.height,
            s = n * r);
            var a = e.x - s
              , h = e.y - n
              , l = new t.Vector(a * this.halign,h * this.valign);
            return new t.Rectangle(l,new t.Vector(s,n))
        }
        ,
        e.prototype.toCropRectangle = function(e, i) {
            var s, n, o = t.GeometryUtility.CalculateAspectRatio(e.x, e.y), r = t.GeometryUtility.CalculateAspectRatio(i.x, i.y);
            1 == this.width && 1 == this.height ? r > o ? (s = i.y * o,
            n = i.y) : (s = i.x,
            n = i.x / o) : null  == this.width && null  == this.height ? o > r ? (s = i.y * o,
            n = i.y) : (s = i.x,
            n = i.x / o) : null  !== this.width ? (s = i.x * this.width,
            n = s / o) : (n = i.y * this.height,
            s = n * o);
            var a = i.x - s
              , h = i.y - n
              , l = new t.Vector(a * this.halign,h * this.valign);
            return new t.Rectangle(l,new t.Vector(s,n))
        }
        ,
        e.prototype.getAligment = function(e, i) {
            return new t.Vector((e.x - i.x) * this.halign,(e.y - i.y) * this.valign)
        }
        ,
        e.prototype.toRectanglePercentages = function(e, i) {
            var s, n, o = t.GeometryUtility.CalculateAspectRatio(e.x, e.y), r = t.GeometryUtility.CalculateAspectRatio(i.x, i.y);
            1 == this.width && 1 == this.height ? r > o ? (s = e.y * r,
            n = e.y) : (s = e.x,
            n = e.x / r) : null  == this.width && null  == this.height ? o > r ? (s = e.y * r,
            n = e.y) : (s = e.x,
            n = e.x / r) : null  !== this.width ? (s = e.x * this.width,
            n = s / r) : (n = e.y * this.height,
            s = n * r);
            var a = e.x - s
              , h = e.y - n
              , l = new t.Vector(a * this.halign / e.x,h * this.valign / e.y);
            return new t.Rectangle(l,new t.Vector(s / e.x,n / e.y))
        }
        ,
        e.prototype.defineAsCSSBackground = function(t) {
            t.style.backgroundPosition = Math.floor(100 * this.halign) + "% " + Math.floor(100 * this.valign) + "% ",
            t.style.backgroundSize = this.getSizeProp()
        }
        ,
        e.prototype.defineAsCSSPercentages = function(e) {
            var i = this.halign
              , s = this.valign;
            null  != this.width && (i = (1 - this.width) * i),
            null  != this.height && (s = (1 - this.height) * s),
            e.style.marginLeft = t.StyleUtility.ConvertToPercentagesOrAuto(i),
            e.style.marginTop = t.StyleUtility.ConvertToPercentagesOrAuto(s),
            e.style.width = t.StyleUtility.ConvertToPercentagesOrAuto(this.width),
            e.style.height = t.StyleUtility.ConvertToPercentagesOrAuto(this.height)
        }
        ,
        e.prototype.defineAsCSSPixels = function(t, e, i) {
            var s = this.toRectangle(t, e);
            i.style.marginLeft = s.a.x + "px",
            i.style.marginTop = s.a.y + "px",
            i.style.width = s.s.x + "px",
            i.style.height = s.s.y + "px"
        }
        ,
        e.prototype.defineAsCSSPercentagesAbsolute = function(e) {
            e.style.left = t.StyleUtility.ConvertToPercentagesOrAuto(this.halign),
            e.style.top = t.StyleUtility.ConvertToPercentagesOrAuto(this.valign),
            e.style.width = t.StyleUtility.ConvertToPercentagesOrAuto(this.width),
            e.style.height = t.StyleUtility.ConvertToPercentagesOrAuto(this.height)
        }
        ,
        e.prototype.defineAsCSSPixelsAbsolute = function(t, e, i) {
            var s = this.toRectangle(t, e);
            i.style.left = s.a.x + "px",
            i.style.top = s.a.y + "px",
            i.style.width = s.s.x + "px",
            i.style.height = s.s.y + "px"
        }
        ,
        e.prototype.toJSON = function() {}
        ,
        e
    }();
    t.FitDef = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.GetElement = function(t) {
            return document.getElementById(t)
        }
        ,
        t.Qs = function(t, e) {
            return e.querySelector(t)
        }
        ,
        t.QsAll = function(t, e) {
            return e.querySelectorAll(t)
        }
        ,
        t.Create = function(t, e) {
            var i = document.createElementNS("http://www.w3.org/2000/svg", t);
            if (null  !== e) {
                var s;
                for (s in e)
                    i.setAttributeNS(null , s, e[s])
            }
            return i
        }
        ,
        t.SetAttribute = function(t, e, i) {
            t.setAttributeNS(null , e, i)
        }
        ,
        t.SetAttributes = function(t, e) {
            var i;
            for (i in e)
                t.setAttributeNS(null , i, e[i])
        }
        ,
        t.GetAttribute = function(t, e) {
            return t.getAttributeNS(null , e)
        }
        ,
        t.AddClass = function(t, e) {
            var i = t.getAttributeNS(null , "class");
            if (null  == i || "" == i)
                i = e;
            else {
                var s = new RegExp("(^|\\s)" + e + "(\\s|$)");
                s.test(i) || (i += " " + e)
            }
            t.setAttributeNS(null , "class", i)
        }
        ,
        t.RemoveClass = function(t, e) {
            var i = t.getAttributeNS(null , "class");
            if (null  != i && "" != i) {
                var s = new RegExp("(\\b)" + e + "(\\s|$)","g");
                i = i.replace(s, " ").trim().replace(/[\s]{2}/g, " "),
                t.setAttributeNS(null , "class", i)
            }
        }
        ,
        t
    }();
    t.SVG = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments),
            this.childs = []
        }
        return __extends(e, t),
        e.prototype.addChild = function(t) {
            this.childs.push(t),
            this.node.appendChild(t.node)
        }
        ,
        e.prototype.addChildAt = function(t, e) {
            this.childs.splice(e, 0, t),
            this.node.insertBefore(t.node, this.node.childNodes[e])
        }
        ,
        e.prototype.removeChild = function(t) {
            this.node.removeChild(t.node),
            this.childs.removeItem(t)
        }
        ,
        e.prototype.getIndexOf = function(t) {
            return this.childs.indexOf(t)
        }
        ,
        e.prototype.amountOfChildren = function() {
            return this.childs.length
        }
        ,
        e.prototype.clone = function() {
            return new e("not done jet...")
        }
        ,
        e.prototype.update = function() {
            for (var t = this.childs.length; t--; )
                this.childs[t].update()
        }
        ,
        e.prototype.destroy = function() {
            for (var e, i = this.childs.length; i--; )
                e = this.childs[i],
                this.node.removeChild(e.node),
                e.destroy();
            this.childs = null ,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.SVGSymbol);
    t.SVGSymbolContainer = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            t.call(this, "svg"),
            this.node.setAttributeNS(null , "width", e),
            this.node.setAttributeNS(null , "height", i)
        }
        return __extends(e, t),
        e.prototype.setSize = function(t, e) {
            this.node.setAttributeNS(null , "width", t),
            this.node.setAttributeNS(null , "height", e)
        }
        ,
        e.prototype.getHTML = function() {
            return this.node
        }
        ,
        e
    }(t.SVGSymbolContainer);
    t.HTMLSVGSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t) {
            this.alpha = 1,
            this.visible = !0,
            "string" == typeof t ? this.node = document.createElement(t) : this.node = t
        }
        return e.FromID = function(t) {
            return new e(document.getElementById(t))
        }
        ,
        e.FromQS = function(t, i) {
            var s = i.querySelector(t);
            return null  !== s ? new e(s) : null 
        }
        ,
        e.prototype.setAlpha = function(e) {
            this.alpha = e,
            this.node.style[t.css.name.OPACITY] = this.alpha
        }
        ,
        e.prototype.getAlpha = function() {
            return this.alpha
        }
        ,
        e.prototype.show = function() {
            this.visible === !1 && (this.visible = !0,
            this.node.style.visibility = "visible")
        }
        ,
        e.prototype.hide = function() {
            this.visible === !0 && (this.visible = !1,
            this.node.style.visibility = "hidden")
        }
        ,
        e.prototype.isVisible = function() {
            return this.visible
        }
        ,
        e.prototype.getHTML = function() {
            return this.node
        }
        ,
        e.prototype.setAttribute = function(t, e) {
            this.node.setAttribute(t, e)
        }
        ,
        e.prototype.getAttribute = function(t) {
            return this.node.getAttribute(t)
        }
        ,
        e.prototype.hasClass = function(t) {
            return (" " + this.node.className + " ").indexOf(" " + t + " ") > -1
        }
        ,
        e.prototype.addClass = function(t) {
            new RegExp("(^|\\s)" + t + "(\\s|$)").test(this.node.className) || (this.node.className += this.node.className ? " " + t : t)
        }
        ,
        e.prototype.removeClass = function(t) {
            this.node.className = this.node.className.replace(new RegExp("(\\b)" + t + "(\\s|$)","g"), " ").trim().replace(/[\s]{2}/g, " ")
        }
        ,
        e.prototype.update = function() {}
        ,
        e.prototype.setSize = function(t) {
            this.node.style.width = t.x + "px",
            this.node.style.height = t.y + "px"
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        e.prototype.getWidth = function() {
            return this.node.offsetWidth
        }
        ,
        e.prototype.getHeight = function() {
            return this.node.offsetHeight
        }
        ,
        e.prototype.destroy = function() {
            this.node = void 0
        }
        ,
        e
    }();
    t.HTMLSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments),
            this._children = []
        }
        return __extends(e, t),
        e.FromID = function(t) {
            return new e(document.getElementById(t))
        }
        ,
        e.FromQS = function(t, i) {
            var s = i.querySelector(t);
            return null  !== s ? new e(s) : null 
        }
        ,
        e.prototype.addChild = function(t) {
            this._children.push(t),
            this.node.appendChild(t.getHTML())
        }
        ,
        e.prototype.addChildAt = function(t, e) {
            this._children.splice(e, 0, t),
            this.node.insertBefore(t.getHTML(), this.node.childNodes[e || 0] || null )
        }
        ,
        e.prototype.removeChild = function(t) {
            this.node.removeChild(t.getHTML()),
            this._children.removeItem(t)
        }
        ,
        e.prototype.getIndexOf = function(t) {
            return this._children.indexOf(t)
        }
        ,
        e.prototype.amountOfChildren = function() {
            return this._children.length
        }
        ,
        e.prototype.destroy = function(t) {
            if (t === !0)
                for (var e = this._children.length; e--; )
                    this._children[e].destroy();
            this._children = void 0
        }
        ,
        e
    }(t.HTMLSymbol);
    t.HTMLSymbolContainer = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.FindSmoothPropName = function(e) {
            return e.imageSmoothingEnabled || (e.webkitImageSmoothingEnabled ? t.SmoothPropName = "webkitImageSmoothingEnabled" : e.mozImageSmoothingEnabled ? t.SmoothPropName = "mozImageSmoothingEnabled" : e.oImageSmoothingEnabled ? t.SmoothPropName = "oImageSmoothingEnabled" : e.msImageSmoothingEnabled && (t.SmoothPropName = "msImageSmoothingEnabled")),
            "imageSmoothingEnabled"
        }
        ,
        t.GetImageSmoothProp = function(e) {
            return t.SmoothPropName || t.FindSmoothPropName(e)
        }
        ,
        t
    }();
    t.CanvasUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.GetRandomHex = function() {
            for (var t = "0123456789ABCDEF".split(""), e = "#", i = 0; 6 > i; i++)
                e += t[Math.floor(16 * Math.random())];
            return e
        }
        ,
        e.StringToRGB = function(i) {
            return i = i.toLowerCase(),
            "#" == i.substr(0, 1) ? t.RGB.FromHex(i) : "rgb" == i.substr(0, 3) ? t.RGB.FromString(i) : t.RGB.FromHex(e.NameToHex(i))
        }
        ,
        e.StringToRGBA = function(i) {
            return i = i.toLowerCase(),
            "#" == i.substr(0, 1) ? t.RGBA.FromHex(i) : "rgb" == i.substr(0, 3) ? t.RGBA.FromString(i) : t.RGBA.FromHex(e.NameToHex(i))
        }
        ,
        e.RGBArrayToHEXNumber = function(e, i, s) {
            return new t.RGB(e,i,s).toHexNumber()
        }
        ,
        e.PrependZeroIfNecessaryHelper = function(t) {
            return 1 == t.length ? "0" + t : t
        }
        ,
        e.RGBValuesToHEX = function(t, i, s) {
            return "#" + e.PrependZeroIfNecessaryHelper(t.toString(16)) + e.PrependZeroIfNecessaryHelper(i.toString(16)) + e.PrependZeroIfNecessaryHelper(s.toString(16))
        }
        ,
        e.HexToNumber = function(e) {
            var i = t.RGB.FromHex(e);
            return i.toHexNumber()
        }
        ,
        e.NameToHex = function(t) {
            return "#" + e.ColorNames[t.toLowerCase()]
        }
        ,
        e.ColorNames = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "778899",
            lightslategrey: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        },
        e
    }();
    t.ColorUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.MergeArrays = function(t, e) {
            var i = [];
            return i[0] = e[0] * t[0] + e[1] * t[2],
            i[1] = e[0] * t[1] + e[1] * t[3],
            i[2] = e[2] * t[0] + e[3] * t[2],
            i[3] = e[2] * t[1] + e[3] * t[3],
            i[4] = e[4] * t[0] + e[5] * t[2] + t[4],
            i[5] = e[4] * t[1] + e[5] * t[3] + t[5],
            i
        }
        ,
        t
    }();
    t.MatrixUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.ConvertWheelDelta = function(t) {
            var e, i = t.detail, s = t.wheelDelta, n = 225, o = n - 1;
            return i = i ? s && (e = s / i) ? i / e : -i / 1.35 : s / 120,
            i = 1 > i ? -1 > i ? (-Math.pow(i, 2) - o) / n : i : (Math.pow(i, 2) + o) / n,
            Math.min(Math.max(i / 2, -1), 1)
        }
        ,
        t.IsRightClick = function(t) {
            return "which" in t ? 3 == t.which : "button" in t ? 2 == t.button : !1
        }
        ,
        t
    }();
    t.MouseUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.IsNumeric = function(t) {
            return !isNaN(t) && isFinite(t)
        }
        ,
        t
    }();
    t.NumberUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.GetType = function(t) {
            var e = /function (.{1,})\(/
              , i = e.exec(t.constructor.toString());
            return i && i.length > 1 ? i[1] : ""
        }
        ,
        t.Clone = function(t) {
            var e = /^\[object (.*)\]$/.exec(Object.prototype.toString.call(t))[1];
            switch (e) {
            case "Object":
                return this.CloneObject(t);
            case "Array":
                return t.slice(0);
            case "Date":
                return new Date(+t);
            default:
                return t
            }
        }
        ,
        t.CloneObject = function(t) {
            if (this.IsPlainObject(t)) {
                var e, i, s = {};
                for (e in t)
                    t.hasOwnProperty(e) && (i = t[e],
                    s[e] = this.Clone(i));
                return s
            }
            return t
        }
        ,
        t.IsPlainObject = function(t) {
            return !!t && "object" == typeof t && t.constructor === Object
        }
        ,
        t.MergeObject = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e - 0] = arguments[e];
            var i, s, n, o, r = 1;
            for (o = this.Clone(t[0]); n = t[r++]; )
                for (i in n)
                    n.hasOwnProperty(i) && (s = n[i],
                    "object" == typeof s && "object" == typeof o[i] ? o[i] = this.MergeObject(o[i], s) : o[i] = this.Clone(s));
            return o
        }
        ,
        t
    }();
    t.ObjectUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.URLDecode = function(t) {
            return decodeURIComponent((t + "").replace(/\+/g, "%20"))
        }
        ,
        t.GetHashCode = function(t) {
            var e, i, s = 1315423911;
            for (e = t.length - 1; e >= 0; e--)
                i = t.charCodeAt(e),
                s ^= (s << 5) + i + (s >> 2);
            return 2147483647 & s
        }
        ,
        t.IsNullOrEmpty = function(t) {
            return "" == t || null  == t
        }
        ,
        t.ConvertNullToEmpty = function(t) {
            return null  == t ? "" : t
        }
        ,
        t.RemoveNewLineAndTab = function(t) {
            return t.replace(/[\r\n\t]/g, "")
        }
        ,
        t.UppercaseFirstLetter = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        ,
        t.RemoveWhiteSpace = function(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        ,
        t.GetFileExtension = function(t) {
            return t.substr(t.lastIndexOf(".") + 1)
        }
        ,
        t.ShortenIfLongerThan = function(t, e, i) {
            return t.length > e ? t.substring(0, e) + i : t
        }
        ,
        t
    }();
    t.StringUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.CreateLimitedCallFunction = function(t, e, i) {
            var s = !1
              , n = function() {
                if (s !== !0) {
                    s = !0;
                    var n = arguments;
                    setTimeout(function() {
                        s = !1,
                        t.apply(i, n)
                    }, e)
                }
            }
            ;
            return n
        }
        ,
        t.CreateDelayedFunction = function(t, e, i) {
            var s, n = !1, o = function() {
                n === !0 && clearTimeout(s),
                n = !0;
                var o = arguments;
                s = setTimeout(function() {
                    n = !1,
                    t.apply(i, o)
                }, e)
            }
            ;
            return o
        }
        ,
        t.CreateLimitCaller = function(t, e, i) {
            var s, n, o = !1, r = function() {
                var r = arguments;
                o === !0 ? s = t : (o = !0,
                n = setInterval(function() {
                    void 0 === s ? (o = !1,
                    clearInterval(n)) : (t.apply(i, r),
                    s = void 0)
                }, e),
                t.apply(i, r))
            }
            ;
            return r
        }
        ,
        t
    }();
    t.TimerUtility = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.BeforeOf = function(t) {
            return t.getLeft()
        }
        ,
        t.InsideOf = function(t) {
            return t.getWidth()
        }
        ,
        t.AfterOf = function(t) {
            return t.getRight()
        }
        ,
        t
    }();
    t.X = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.BeforeOf = function(t) {
            return t.getTop()
        }
        ,
        t.InsideOf = function(t) {
            return t.getHeight()
        }
        ,
        t.AfterOf = function(t) {
            return t.getBottom()
        }
        ,
        t
    }();
    t.Y = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.prototype.clone = function() {
            return new e
        }
        ,
        e.prototype.toString = function() {
            return "Model"
        }
        ,
        e.prototype.toJSON = function() {
            return {}
        }
        ,
        e.prototype.createSVGSymbol = function() {
            var e = new t.SVGSymbol("g");
            return e
        }
        ,
        e
    }();
    t.Model = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.call(this),
            this._children = []
        }
        return __extends(i, e),
        i.prototype.addChild = function(e) {
            t.ArrayUtility.Add(this._children, e)
        }
        ,
        i.prototype.addChildAt = function(e, i) {
            t.ArrayUtility.AddAt(this._children, e, i)
        }
        ,
        i.prototype.removeChild = function(e) {
            t.ArrayUtility.Remove(this._children, e)
        }
        ,
        i.prototype.getIndexOf = function(t) {
            return this._children.indexOf(t)
        }
        ,
        i.prototype.amountOfChildren = function() {
            return this._children.length
        }
        ,
        i.prototype.toString = function() {
            return "[" + this._children.join(",") + "]"
        }
        ,
        i.prototype.toJSON = function() {
            var t = {};
            t.childs = [];
            for (var e = 0; e < this._children.length; e++)
                t.childs.push(this._children[e].toJSON());
            return t
        }
        ,
        i.prototype.createSVGSymbol = function() {
            for (var e = new t.SVGGroupSymbol, i = 0, s = this._children.length; s > i; )
                e.addChild(this._children[i++].createSVGSymbol());
            return e
        }
        ,
        i
    }(t.Model);
    t.ModelContainer = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "circle"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.prototype.update = function() {
            this._cx !== this.shape.a.x && t.SVG.SetAttribute(this.node, "cx", this._cx = this.shape.a.x),
            this._cy !== this.shape.a.y && t.SVG.SetAttribute(this.node, "cy", this._cy = this.shape.a.y),
            this._r !== this.shape.r && t.SVG.SetAttribute(this.node, "r", this._r = this.shape.r)
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGCircleSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.call(this, "clipPath")
        }
        return __extends(e, t),
        e
    }(t.SVGSymbolContainer);
    t.SVGClipPathSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "path"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.prototype.update = function() {
            t.SVG.SetAttribute(this.node, "d", this.shape.toSVGString("M"))
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGCubicBezierSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.call(this, "g")
        }
        return __extends(e, t),
        e
    }(t.SVGSymbolContainer);
    t.SVGGroupSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "line"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.FromPoints = function(e, s) {
            return new i(new t.Line(e,s))
        }
        ,
        i.prototype.update = function() {
            this._x1 !== this.shape.a.x && t.SVG.SetAttribute(this.node, "x1", this._x1 = this.shape.a.x),
            this._y1 !== this.shape.a.y && t.SVG.SetAttribute(this.node, "y1", this._y1 = this.shape.a.y),
            this._x2 !== this.shape.b.x && t.SVG.SetAttribute(this.node, "x2", this._x2 = this.shape.b.x),
            this._y2 !== this.shape.b.y && t.SVG.SetAttribute(this.node, "y2", this._y2 = this.shape.b.y)
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGLineSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "path"),
            this.path = t,
            this.update()
        }
        return __extends(i, e),
        i.FromArray = function(e) {
            return new i(t.Path.FromArray(e))
        }
        ,
        i.prototype.clone = function() {
            return new i(this.path.clone())
        }
        ,
        i.prototype.update = function() {
            t.SVG.SetAttribute(this.node, "d", this.path.toSVGString("M"))
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGPathSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "polygon"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.FromArray = function(e) {
            return new i(t.Polygon.FromArray(e))
        }
        ,
        i.prototype.clone = function() {
            return new i(this.shape.clone())
        }
        ,
        i.prototype.update = function() {
            t.SVG.SetAttribute(this.node, "points", this.shape.toString())
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGPolygonSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "path"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.prototype.update = function() {
            t.SVG.SetAttribute(this.node, "d", this.shape.toSVGString("M"))
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGRoundedRectangleFlexSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this, "rect"),
            this.shape = t,
            this.update()
        }
        return __extends(i, e),
        i.prototype.update = function() {
            this._x !== this.shape.a.x && t.SVG.SetAttribute(this.node, "x", this._x = this.shape.a.x),
            this._y !== this.shape.a.y && t.SVG.SetAttribute(this.node, "y", this._y = this.shape.a.y),
            this._w !== this.shape.s.x && t.SVG.SetAttribute(this.node, "width", this._w = this.shape.s.x),
            this._h !== this.shape.s.y && t.SVG.SetAttribute(this.node, "height", this._h = this.shape.s.y),
            this._r !== this.shape.r && (t.SVG.SetAttribute(this.node, "rx", this._r = this.shape.r),
            t.SVG.SetAttribute(this.node, "ry", this.shape.r))
        }
        ,
        i
    }(t.ASVGShapeSymbol);
    t.SVGRoundedRectangleSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t) {
            this.child = t,
            this.base = this.child.getDecorator(),
            this.base.setWrap(this)
        }
        return e.prototype.addFitDef = function(e) {
            return new t.TextureFitDef(this.base.wrap,e)
        }
        ,
        e.prototype.addRelCrop = function(e) {
            return new t.TextureRelCrop(this.base.wrap,e)
        }
        ,
        e.prototype.addColorBlend = function(e) {
            return new t.TextureColorBlend(this.base.wrap,e)
        }
        ,
        e.prototype.getDecorator = function() {
            return this.base
        }
        ,
        e.prototype.setSize = function(t) {
            this.base.setSize(t)
        }
        ,
        e.prototype.update = function() {
            this.child.update()
        }
        ,
        e.prototype.drawAt = function(t) {
            this.child.drawInside(t)
        }
        ,
        e.prototype.drawInside = function(t) {
            this.child.drawInside(t)
        }
        ,
        e.prototype.destroy = function() {
            this.base,
            this.child = void 0
        }
        ,
        e
    }();
    t.ATextureDeco = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.drawAt = this._none_drawAt,
            this.drawAtSize = this._none_drawAtSize,
            this.drawInside = this._none_drawInside
        }
        return __extends(i, e),
        i.prototype.addFitDef = function(e) {
            return new t.TextureFitDef(this.getDecorator(),e)
        }
        ,
        i.prototype.addRelCrop = function(e) {
            return new t.TextureRelCrop(this.getDecorator(),e)
        }
        ,
        i.prototype.addColorBlend = function(e) {
            return new t.TextureColorBlend(this.getDecorator(),e)
        }
        ,
        i.prototype.getDecorator = function() {
            return new t.TextureDecoBase(this)
        }
        ,
        i.prototype.getSource = function() {
            return this
        }
        ,
        i.prototype.setSize = function(t) {}
        ,
        i.prototype.set = function(e, i) {
            this.source = e,
            this.size = i,
            this.drawAt = this._drawAt,
            this.drawAtSize = this._drawAtSize,
            this.drawInside = this._drawInside,
            this.dispatchEvent(new t.SSEvent(t.TextureEvent.CHANGED,this))
        }
        ,
        i.prototype._none_drawAt = function(t) {}
        ,
        i.prototype._drawAt = function(t) {
            t.context.drawImage(this.source, 0, 0, this.size.x, this.size.y)
        }
        ,
        i.prototype._none_drawAtSize = function(t, e) {}
        ,
        i.prototype._drawAtSize = function(t, e) {
            t.context.drawImage(this.source, 0, 0, e.x, e.y)
        }
        ,
        i.prototype._none_drawInside = function(t, e, i) {}
        ,
        i.prototype._drawInside = function(t, e, i) {
            var s = t.pixelDensity;
            t.context.drawImage(this.source, Math.round(e.a.x), Math.round(e.a.y), Math.round(e.s.x), Math.round(e.s.y), i.a.x * s, i.a.y * s, i.s.x * s, i.s.y * s)
        }
        ,
        i.prototype.destroy = function() {
            this.source = this.size = void 0
        }
        ,
        i
    }(t.EventDispatcher);
    t.Texture = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            t.call(this, e),
            this.color = i.toRGBA()
        }
        return __extends(e, t),
        e.prototype.setBlendFactor = function(t) {
            this.factor = t,
            this.color.a = t,
            this.fillColor = this.color.toString()
        }
        ,
        e.prototype.drawAt = function(t) {
            if (this.child.drawAt(t),
            0 !== this.factor) {
                var e = this.base.out
                  , i = t.context;
                i.rect(e.a.x, e.a.y, e.s.x, e.s.y),
                i.fillStyle = this.fillColor,
                i.fill()
            }
        }
        ,
        e.prototype.drawInside = function(t) {
            if (this.child.drawInside(t),
            0 !== this.factor) {
                var e = this.base.out
                  , i = t.context;
                i.rect(e.a.x, e.a.y, e.s.x, e.s.y),
                i.fillStyle = this.fillColor,
                i.fill()
            }
        }
        ,
        e
    }(t.ATextureDeco);
    t.TextureColorBlend = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e) {
            this.wrap = this,
            this.onChangedBind = this.onChanged.bind(this),
            this.source = e,
            this.source.addEventListener(t.TextureEvent.CHANGED, this.onChangedBind)
        }
        return e.prototype.addFitDef = function(e) {
            return new t.TextureFitDef(this.wrap,e)
        }
        ,
        e.prototype.addRelCrop = function(e) {
            return new t.TextureRelCrop(this.wrap,e)
        }
        ,
        e.prototype.addColorBlend = function(e) {
            return new t.TextureColorBlend(this.wrap,e)
        }
        ,
        e.prototype.getDecorator = function() {
            return this
        }
        ,
        e.prototype.setWrap = function(t) {
            this.wrap = t
        }
        ,
        e.prototype.set = function(t) {
            this.source = t,
            this.wrap.update(),
            this.updateCrop()
        }
        ,
        e.prototype.getSource = function() {
            return this.source
        }
        ,
        e.prototype.setSize = function(t) {
            this.conSize = t,
            void 0 !== this.source.size && (this.wrap.update(),
            this.updateCrop())
        }
        ,
        e.prototype.onChanged = function(t) {
            void 0 !== this.conSize && (this.wrap.update(),
            this.updateCrop())
        }
        ,
        e.prototype.update = function() {
            this.inn = new t.Rect(t.Vec.FromZero(),this.source.size.clone()),
            this.out = new t.Rect(t.Vec.FromZero(),this.conSize.clone())
        }
        ,
        e.prototype.updateCrop = function() {}
        ,
        e.prototype.drawAt = function(t) {
            this.source.drawAtSize(t, this.conSize)
        }
        ,
        e.prototype.drawInside = function(t) {
            this.source.drawInside(t, this.inn, this.out)
        }
        ,
        e.prototype.destroy = function() {
            this.wrap = this.source = void 0
        }
        ,
        e
    }();
    t.TextureDecoBase = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            t.call(this, e),
            this.sizeBehavior = i
        }
        return __extends(e, t),
        e.prototype.update = function() {
            this.child.update();
            var t = this.base.inn.a;
            this.base.out.s;
            this.base.inn = this.sizeBehavior.toCropRectangle(this.base.out.s, this.base.inn.s),
            this.base.inn.a.x += t.x,
            this.base.inn.a.y += t.y
        }
        ,
        e
    }(t.ATextureDeco);
    t.TextureFitDef = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            t.call(this, e),
            this.rel = i
        }
        return __extends(e, t),
        e.prototype.update = function() {
            this.child.update();
            var t = this.base.inn.divideVec(this.base.source.size)
              , e = t.multiply(this.rel);
            this.base.inn.a.addIn(e.a.multiply(this.base.inn.s)),
            this.base.inn.s.multiplyIn(e.s),
            this.base.out.a.addIn(e.a.multiply(this.base.out.s)),
            this.base.out.s.multiplyIn(e.s)
        }
        ,
        e
    }(t.ATextureDeco);
    t.TextureRelCrop = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, t.HTML.Create("canvas")),
            this.parentRender = t.GlobalRenderManager,
            this.transparent = !0,
            this.backgroundColor = "#000",
            this.backgroundColorRGB = t.RGB.BLACK,
            this.worldAlpha = 1,
            this.children = [],
            this.pixelDensity = t.DeviceInfo.PixelRatio,
            this.onPixelDensityChangedBind = this.onPixelDensityChanged.bind(this),
            this.transform = t.TransformMatrix.FromDefault(),
            this.worldTransform = t.TransformMatrix.ZERO_ARRAY,
            this.drawAt = this.onDraw,
            this.renderCondition = function() {
                return !0
            }
            ,
            this.context = this.node.getContext("2d"),
            void 0 !== s ? this.pixelDensity = s : t.DeviceInfo.AddEventListener(t.DeviceInfoEvent.PIXEL_DENSITY_CHANGED, this.onPixelDensityChangedBind),
            this.setSize(i || new t.Vector(0,0))
        }
        return __extends(i, e),
        i.prototype.show = function() {
            this.visible = !0,
            this.computeVisibility(),
            e.prototype.show.call(this)
        }
        ,
        i.prototype.hide = function() {
            this.visible = !1,
            this.computeVisibility(),
            e.prototype.hide.call(this)
        }
        ,
        i.prototype.computeVisibility = function() {
            this.drawAt = this.visible === !0 && 0 !== this.alpha ? this.onDraw : this.none
        }
        ,
        i.prototype.none = function() {}
        ,
        i.prototype.setRenderManager = function(t) {
            this.parentRender = t
        }
        ,
        i.prototype.getPixelDensity = function() {
            return this.pixelDensity
        }
        ,
        i.prototype.setFixedPixelDensity = function(t) {
            this.pixelDensity = t,
            this.setSize(this.size)
        }
        ,
        i.prototype.onPixelDensityChanged = function(e) {
            this.pixelDensity = t.DeviceInfo.PixelRatio,
            this.setSize(this.size)
        }
        ,
        i.prototype.disbaleSmoothing = function() {
            this.context[t.CanvasUtility.GetImageSmoothProp(this.context)] = !1
        }
        ,
        i.prototype.enableSmoothing = function() {
            this.context[t.CanvasUtility.GetImageSmoothProp(this.context)] = !0
        }
        ,
        i.prototype.addChild = function(t) {
            this.children.push(t)
        }
        ,
        i.prototype.addChildAt = function(t, e) {
            this.children.splice(e, 0, t)
        }
        ,
        i.prototype.removeChild = function(t) {
            this.children.removeItem(t)
        }
        ,
        i.prototype.getIndexOf = function(t) {
            return this.children.indexOf(t)
        }
        ,
        i.prototype.amountOfChildren = function() {
            return this.children.length
        }
        ,
        i.prototype.swapChildren = function(t, e) {
            var i = this.children.indexOf(t)
              , s = this.children.indexOf(e);
            -1 !== i && -1 !== s && (this.children[i] = e,
            this.children[s] = t)
        }
        ,
        i.prototype.setSize = function(t) {
            this.size = t,
            this.innerSize = t.scale(this.pixelDensity),
            this.node.style.width = this.size.x + "px",
            this.node.style.height = this.size.y + "px",
            this.node.setAttribute("width", this.innerSize.x),
            this.node.setAttribute("height", this.innerSize.y)
        }
        ,
        i.prototype.getWidth = function() {
            return this.size.x
        }
        ,
        i.prototype.getHeight = function() {
            return this.size.y
        }
        ,
        i.prototype.getWorldTransform = function() {
            return t.TransformMatrix.ZERO_ARRAY
        }
        ,
        i.prototype.setAlpha = function(t) {
            this.worldAlpha = t
        }
        ,
        i.prototype.getAlpha = function() {
            return this.worldAlpha
        }
        ,
        i.prototype.getWorldAlpha = function() {
            return this.worldAlpha
        }
        ,
        i.prototype.setProgress = function(t) {
            this.renderCondition() === !0 && this.drawCanvas()
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.drawCanvas()
        }
        ,
        i.prototype.updateProgress = function(t) {
            this.drawCanvas()
        }
        ,
        i.prototype.forceUpdate = function() {
            this.active !== !1 && this.renderCondition() !== !1 || this.drawCanvas()
        }
        ,
        i.prototype.drawCanvas = function() {
            var t = this.children.length
              , e = 0;
            for (this.context.setTransform(1, 0, 0, 1, 0, 0),
            this.context.globalAlpha = 1,
            this.transparent === !0 ? this.context.clearRect(0, 0, this.innerSize.x, this.innerSize.y) : (this.context.fillStyle = this.backgroundColor,
            this.context.fillRect(0, 0, this.innerSize.x, this.innerSize.y)),
            this.context.globalAlpha = this.worldAlpha; t > e; )
                this.children[e++].drawAt(this, this)
        }
        ,
        i.prototype.onDraw = function(e, i) {
            this.worldAlpha = this.alpha * i.worldAlpha,
            e.context.globalAlpha = this.worldAlpha;
            var s = t.MatrixUtility.MergeArrays(i.worldTransform, this.transform.toArray());
            e.context.setTransform(s[0], s[1], s[2], s[3], s[4] * e.pixelDensity, s[5] * e.pixelDensity),
            e.context.drawImage(this.node, 0, 0, this.size.x * e.pixelDensity, this.size.y * e.pixelDensity)
        }
        ,
        i.prototype.setRenderCondition = function(t) {
            this.renderCondition = t
        }
        ,
        i.prototype.start = function() {
            this.active = !0,
            this.parentRender.add(this)
        }
        ,
        i.prototype.stop = function() {
            this.active = !1,
            this.parentRender.remove(this)
        }
        ,
        i.prototype.destroy = function(e) {
            if (t.DeviceInfo.RemoveEventListener(t.DeviceInfoEvent.PIXEL_DENSITY_CHANGED, this.onPixelDensityChangedBind),
            e === !0)
                for (var i = this.children.length; i--; )
                    this.children[i].destroy();
            this.children = void 0
        }
        ,
        i
    }(t.HTMLSymbol);
    t.HTMLCanvasSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {
            this.visible = !0,
            this.drawAt = this.onDraw,
            this.transform = t.TransformMatrix.FromDefault(),
            this.alpha = 1
        }
        return e.prototype.isVisible = function() {
            return this.visible
        }
        ,
        e.prototype.show = function() {
            this.visible = !0,
            this.computeVisibility()
        }
        ,
        e.prototype.hide = function() {
            this.visible = !1,
            this.computeVisibility()
        }
        ,
        e.prototype.computeVisibility = function() {
            this.drawAt = this.visible === !0 && 0 !== this.alpha ? this.onDraw : this.none
        }
        ,
        e.prototype.none = function() {}
        ,
        e.prototype.setAlpha = function(t) {
            this.alpha = t,
            this.computeVisibility()
        }
        ,
        e.prototype.getAlpha = function() {
            return this.alpha
        }
        ,
        e.prototype.getWorldAlpha = function() {
            return this.worldAlpha
        }
        ,
        e.prototype.getWorldTransform = function() {
            return this.worldTransform
        }
        ,
        e.prototype.onDraw = function(e, i) {
            this.worldAlpha = this.alpha * i.worldAlpha,
            e.context.globalAlpha = this.worldAlpha,
            this.worldTransform = t.MatrixUtility.MergeArrays(i.worldTransform, this.transform.toArray()),
            e.context.setTransform(this.worldTransform[0], this.worldTransform[1], this.worldTransform[2], this.worldTransform[3], this.worldTransform[4] * e.pixelDensity, this.worldTransform[5] * e.pixelDensity)
        }
        ,
        e.prototype.getBounds = function() {
            return t.Rectangle.ZERO
        }
        ,
        e.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        e.prototype.getWidth = function() {
            return 0
        }
        ,
        e.prototype.getHeight = function() {
            return 0
        }
        ,
        e.prototype.destroy = function() {}
        ,
        e
    }();
    t.CanvasSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this),
            this.shape = t
        }
        return __extends(i, e),
        i.prototype.onDraw = function(t, i) {
            e.prototype.onDraw.call(this, t, i);
            var s = t.context;
            s.rect(this.shape.a.x, this.shape.a.y, this.shape.s.x, this.shape.s.y),
            void 0 !== this.lineWidth && (s.fillStyle = this.fillColor,
            s.strokeStyle = this.lineColor,
            s.lineWidth = this.lineWidth * t.pixelDensity,
            void 0 !== this.lineJoin && (s.lineJoin = this.lineJoin),
            void 0 !== this.lineCap && (s.lineCap = this.lineCap),
            s.stroke()),
            void 0 !== this.fillColor && (s.fillStyle = this.fillColor,
            s.fill())
        }
        ,
        i.prototype.getBounds = function() {
            return t.Rectangle.ZERO
        }
        ,
        i.prototype.getSize = function() {
            return new t.Vector(this.getWidth(),this.getHeight())
        }
        ,
        i.prototype.getWidth = function() {
            return 0
        }
        ,
        i.prototype.getHeight = function() {
            return 0
        }
        ,
        i.prototype.destroy = function() {}
        ,
        i
    }(t.CanvasSymbol);
    t.CanvasRectangleSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e) {
            t.call(this),
            this.shape = e
        }
        return __extends(e, t),
        e.prototype.setFillColor = function(t) {
            this.fillColor = t
        }
        ,
        e.prototype.setLineWidth = function(t) {
            this.lineWidth = t
        }
        ,
        e.prototype.setLineColor = function(t) {
            this.lineColor = t
        }
        ,
        e.prototype.setLineJoin = function(t) {
            this.lineJoin = t
        }
        ,
        e.prototype.setLineCap = function(t) {
            this.lineCap = t
        }
        ,
        e.prototype.setCompositeOperation = function(t) {
            this.compositeOperation = t
        }
        ,
        e.prototype.onDraw = function(i, s) {
            t.prototype.onDraw.call(this, i, s);
            var n = i.context
              , o = n.globalCompositeOperation;
            void 0 !== this.compositeOperation && (n.globalCompositeOperation = this.compositeOperation),
            n.beginPath(),
            this.shape.drawAt(i),
            void 0 !== this.fillColor && (n.fillStyle = this.fillColor,
            n.fill()),
            void 0 !== this.lineWidth && (n.strokeStyle = this.lineColor,
            n.lineWidth = this.lineWidth * i.pixelDensity,
            void 0 !== this.lineJoin && (n.lineJoin = this.lineJoin),
            void 0 !== this.lineCap && (n.lineCap = this.lineCap),
            n.stroke(),
            void 0 !== this.lineCap && (n.lineCap = e.DEFAULT_LINECAP)),
            n.closePath(),
            n.globalCompositeOperation = o
        }
        ,
        e.prototype.getBounds = function() {
            return this.shape.getBounds()
        }
        ,
        e.prototype.getSize = function() {
            return this.shape.getSize()
        }
        ,
        e.prototype.getWidth = function() {
            return this.shape.getWidth()
        }
        ,
        e.prototype.getHeight = function() {
            return this.shape.getHeight()
        }
        ,
        e.prototype.destroy = function() {}
        ,
        e.DEFAULT_LINECAP = "butt",
        e
    }(t.CanvasSymbol);
    t.CanvasShapeSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments),
            this.children = []
        }
        return __extends(e, t),
        e.prototype.addChild = function(t) {
            this.children.push(t)
        }
        ,
        e.prototype.addChildAt = function(t, e) {
            this.children.splice(e, 0, t)
        }
        ,
        e.prototype.removeChild = function(t) {
            this.children.removeItem(t)
        }
        ,
        e.prototype.getIndexOf = function(t) {
            return this.children.indexOf(t)
        }
        ,
        e.prototype.amountOfChildren = function() {
            return this.children.length
        }
        ,
        e.prototype.swapChildren = function(t, e) {
            var i = this.children.indexOf(t)
              , s = this.children.indexOf(e);
            -1 !== i && -1 !== s && (this.children[i] = e,
            this.children[s] = t)
        }
        ,
        e.prototype.setMask = function(t) {
            this.mask = t
        }
        ,
        e.prototype.removeMask = function() {
            this.mask = void 0
        }
        ,
        e.prototype.onDraw = function(e, i) {
            if (t.prototype.onDraw.call(this, e, i),
            void 0 === this.mask)
                for (var s = 0, n = this.children.length; n > s; )
                    this.children[s++].drawAt(e, this);
            else {
                var o = e.context;
                o.save(),
                o.beginPath(),
                this.mask.drawAt(e),
                o.closePath(),
                o.clip();
                for (var s = 0, n = this.children.length; n > s; )
                    this.children[s++].drawAt(e, this);
                o.restore()
            }
        }
        ,
        e.prototype.destroy = function(t) {
            if (t === !0)
                for (var e = this.children.length; e--; )
                    this.children[e].destroy();
            this.children = void 0
        }
        ,
        e
    }(t.CanvasSymbol);
    t.CanvasSymbolContainer = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this),
            this.size = new t.Vector(null ,null ),
            this.anchor = new t.Vector(0,0),
            this.fontWeight = "",
            this.align = "left",
            this.textBaseline = "alphabetic",
            this.text = i,
            this.font = s,
            this.fontSize = n
        }
        return __extends(i, e),
        i.prototype.setCompositeOperation = function(t) {
            this.compositeOperation = t
        }
        ,
        i.prototype.setColor = function(t) {
            this.color = t
        }
        ,
        i.prototype.setFont = function(t) {
            this.font = t
        }
        ,
        i.prototype.setFontSize = function(t) {
            this.fontSize = t
        }
        ,
        i.prototype.setFontWeight = function(t) {
            this.fontWeight = t
        }
        ,
        i.prototype.setAlign = function(t) {
            this.align = t
        }
        ,
        i.prototype.setBaseline = function(t) {
            this.textBaseline = t
        }
        ,
        i.prototype.setText = function(t) {
            this.text = t
        }
        ,
        i.prototype.onDraw = function(t, i) {
            e.prototype.onDraw.call(this, t, i);
            var s = t.context
              , n = t.pixelDensity;
            s.font = this.fontWeight + " " + this.fontSize * n + "px " + this.font,
            s.fillStyle = this.color,
            s.textAlign = this.align,
            s.textBaseline = this.textBaseline;
            var o = s.globalCompositeOperation;
            void 0 !== this.compositeOperation && (s.globalCompositeOperation = this.compositeOperation),
            s.fillText(this.text, this.anchor.x * n, this.anchor.y * n),
            s.globalCompositeOperation = o
        }
        ,
        i.prototype.getSize = function() {
            return this.size
        }
        ,
        i.prototype.getWidth = function() {
            return this.size.x
        }
        ,
        i.prototype.getHeight = function() {
            return this.size.y
        }
        ,
        i.prototype.destroy = function() {}
        ,
        i
    }(t.CanvasSymbol);
    t.CanvasTextSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this),
            this.size = new t.Vector(0,0),
            this.texture = i
        }
        return __extends(i, e),
        i.prototype.setCompositeOperation = function(t) {
            this.compositeOperation = t
        }
        ,
        i.prototype.addFitDef = function(t) {
            var e = this.texture.addFitDef(t);
            return this.texture = e,
            e
        }
        ,
        i.prototype.addRelCrop = function(t) {
            var e = this.texture.addRelCrop(t);
            return this.texture = e,
            e
        }
        ,
        i.prototype.onDraw = function(t, i) {
            e.prototype.onDraw.call(this, t, i);
            var s = t.context
              , n = s.globalCompositeOperation;
            void 0 !== this.compositeOperation && (s.globalCompositeOperation = this.compositeOperation),
            this.texture.drawAt(t),
            s.globalCompositeOperation = n
        }
        ,
        i.prototype.getBounds = function() {
            return t.Rectangle.ZERO
        }
        ,
        i.prototype.setSize = function(t) {
            this.size = t,
            this.texture.setSize(t)
        }
        ,
        i.prototype.getSize = function() {
            return this.size
        }
        ,
        i.prototype.getWidth = function() {
            return this.size.x
        }
        ,
        i.prototype.getHeight = function() {
            return this.size.y
        }
        ,
        i.prototype.destroy = function() {}
        ,
        i
    }(t.CanvasSymbol);
    t.CanvasTextureSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.call(this),
            this.progress = 0,
            this.parentProgress = 0,
            this.offset = 0,
            this.before = this.__default_before,
            this.inside = this.__default_inside,
            this.after = this.__default_after,
            this.bounds = new t.Range(null ,null ),
            this.duration = 0
        }
        return __extends(i, e),
        i.prototype.getBounds = function() {
            return this.bounds
        }
        ,
        i.prototype.getOuterBounds = function() {
            return this.bounds
        }
        ,
        i.prototype.getProgress = function() {
            return this.progress
        }
        ,
        i.prototype.getDuration = function() {
            return this.duration
        }
        ,
        i.prototype.getOffset = function() {
            return this.offset
        }
        ,
        i.prototype.setOffset = function(t) {
            var e = t - this.offset;
            this.offset = t,
            this.bounds.offsetIn(e),
            this.progress -= e
        }
        ,
        i.prototype.updateBounds = function() {
            this.duration = this.bounds.length()
        }
        ,
        i.prototype.setStateToBefore = function() {
            this.before = this.__before_before,
            this.inside = this.__before_inside,
            this.after = this.__before_after,
            this.dispatchEvent(new t.SSEvent(t.TweenEvent.BEFORE,this))
        }
        ,
        i.prototype.setStateToInside = function() {
            this.before = this.__inside_before,
            this.inside = this.render,
            this.after = this.__inside_after,
            this.dispatchEvent(new t.SSEvent(t.TweenEvent.START,this))
        }
        ,
        i.prototype.setStateToAfter = function() {
            this.before = this.__after_before,
            this.inside = this.__after_inside,
            this.after = this.__after_after,
            this.dispatchEvent(new t.SSEvent(t.TweenEvent.AFTER,this))
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            this.parentProgress = t,
            this.progress = t - this.offset,
            t < this.bounds.end ? t > this.bounds.start ? this.inside() : this.before() : this.after()
        }
        ,
        i.prototype.updateProgress = function(t) {
            this.parentProgress = t,
            this.progress = t - this.offset,
            t < this.bounds.end ? t > this.bounds.start ? this.inside !== this.render && this.setStateToInside() : this.before !== this.__before_before && this.setStateToBefore() : this.after !== this.__after_after && this.setStateToAfter(),
            this._updateRender()
        }
        ,
        i.prototype.__default_before = function() {
            this.lastRender(),
            this.setStateToBefore()
        }
        ,
        i.prototype.__before_before = function() {}
        ,
        i.prototype.__inside_before = function() {
            this.lastRender(),
            this.setStateToBefore()
        }
        ,
        i.prototype.__after_before = function() {
            this.lastRender(),
            this.setStateToBefore()
        }
        ,
        i.prototype.__default_inside = function() {
            this.render(),
            this.setStateToInside()
        }
        ,
        i.prototype.__before_inside = function() {
            this.render(),
            this.setStateToInside()
        }
        ,
        i.prototype.__after_inside = function() {
            this.render(),
            this.setStateToInside()
        }
        ,
        i.prototype.__default_after = function() {
            this.lastRender(),
            this.setStateToAfter()
        }
        ,
        i.prototype.__before_after = function() {
            this.lastRender(),
            this.setStateToAfter()
        }
        ,
        i.prototype.__inside_after = function() {
            this.lastRender(),
            this.setStateToAfter()
        }
        ,
        i.prototype.__after_after = function() {}
        ,
        i.prototype.render = function() {}
        ,
        i.prototype.lastRender = function() {}
        ,
        i.prototype._updateRender = function() {}
        ,
        i.prototype.destroy = function() {
            this.duration = this.progress = this.parentProgress = this.bounds = null 
        }
        ,
        i
    }(t.EventDispatcher);
    t.AWithin = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {
            this.ct = 0,
            this.officialLen = 0,
            this.renders = [],
            this.len = 0,
            this.rafID = null ,
            this.performFrameBind = this.performFrame.bind(this)
        }
        return t.prototype.diagnose = function() {}
        ,
        t.prototype.amountOfRenders = function() {
            return this.officialLen
        }
        ,
        t.prototype.getProgress = function() {
            return performance.now()
        }
        ,
        t.prototype.add = function(t) {
            -1 === this.renders.indexOf(t) && (this.renders.splice(0, 0, t),
            this.len++,
            "function" == typeof t.shouldAutoPause && t.shouldAutoPause() === !0 && t.makeAutoPause(),
            this.startPerformFrame())
        }
        ,
        t.prototype.remove = function(t) {
            var e = this.renders.indexOf(t);
            -1 !== e && (this.renders.splice(e, 1),
            this.len--,
            "function" == typeof t.shouldAutoPause && t.shouldAutoPause() === !0 && t.removeAutoPause(),
            e <= this.i && this.i--,
            this.checkRenderNeed())
        }
        ,
        t.prototype.checkRenderNeed = function() {
            0 === this.len ? this.stopPerformFrame() : this.startPerformFrame()
        }
        ,
        t.prototype.startPerformFrame = function() {
            null  === this.rafID && (this.officialLen = this.len,
            this.rafID = window.requestAnimationFrame(this.performFrameBind))
        }
        ,
        t.prototype.stopPerformFrame = function() {
            null  !== this.rafID && (window.cancelAnimationFrame(this.rafID),
            this.rafID = null )
        }
        ,
        t.prototype.performFrame = function(t) {
            var e = this.renders
              , i = this.ct = performance.now();
            for (this.i = 0; this.i < this.len; )
                e[this.i].setProgress(i),
                this.i++;
            this.officialLen = this.len,
            this.len > 0 && (this.rafID = window.requestAnimationFrame(this.performFrameBind))
        }
        ,
        t
    }();
    t.RenderManager = e
}(ss || (ss = {}));
var ss;
!function(t) {
    t.GlobalRenderManager = new t.RenderManager
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.setBounds = function(t) {
            this.bounds.copy(t),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length()
        }
        ,
        e
    }(t.AWithin);
    t.IsWithin = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.subrenders = new t.SortedRenderList
        }
        return __extends(i, e),
        i.prototype.add = function(t) {
            this.subrenders.contains(t) === !1 && (this.subrenders.add(t),
            this.bounds = this.subrenders.getBounds(),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length())
        }
        ,
        i.prototype.remove = function(t) {
            this.subrenders.contains(t) === !0 && (this.subrenders.remove(t),
            this.bounds = this.subrenders.getBounds(),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length())
        }
        ,
        i.prototype.clear = function() {
            this.subrenders.clear(),
            this.bounds.clear(),
            this.duration = 0
        }
        ,
        i.prototype.updateBounds = function() {
            this.subrenders.updateSorting(),
            this.bounds = this.subrenders.getBounds(),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length()
        }
        ,
        i.prototype.addTween = function(t) {
            t.setParent(this),
            this.add(t)
        }
        ,
        i.prototype.removeTween = function(t) {
            this.remove(t),
            t.resetParent()
        }
        ,
        i.prototype.render = function() {
            this.subrenders.renderEachTowards(this.progress)
        }
        ,
        i.prototype.lastRender = function() {
            this.subrenders.lastRenderEachTowards(this.progress)
        }
        ,
        i.prototype._updateRender = function() {
            this.subrenders.updateEachTowards(this.progress)
        }
        ,
        i
    }(t.AWithin);
    t.WithinGroup = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {
            this.starts = [],
            this.ends = [],
            this.len = 0
        }
        return e.prototype.contains = function(t) {
            return -1 !== this.starts.indexOf(t)
        }
        ,
        e.prototype.remove = function(t) {
            var e = this.starts.indexOf(t);
            -1 != e && (this.starts.splice(e, 1),
            this.ends.splice(this.ends.indexOf(t), 1),
            this.len--)
        }
        ,
        e.prototype.clear = function() {
            this.starts = [],
            this.ends = [],
            this.len = 0
        }
        ,
        e.prototype.getBounds = function() {
            return 0 === this.len ? new t.Range(null ,null ) : new t.Range(this.starts[0].bounds.start,this.ends[this.len - 1].bounds.end)
        }
        ,
        e.prototype.renderEachLessThan = function(t) {
            for (var e = this.ends.length, i = 0; e > i; i++) {
                if (!(this.ends[i].bounds.end < t))
                    return i;
                this.ends[i].setProgress(t)
            }
            return i
        }
        ,
        e.prototype.renderEachMoreThan = function(t) {
            for (var e = this.starts.length; e--; ) {
                if (!(this.starts[e].bounds.start > t))
                    return e;
                this.starts[e].setProgress(t)
            }
            return e
        }
        ,
        e.prototype.renderEachTowards = function(t) {
            this.renderEachMoreThan(t);
            for (var e = this.renderEachLessThan(t), i = this.ends.length; i > e; )
                this.ends[e].bounds.start <= t && this.ends[e].setProgress(t),
                e++
        }
        ,
        e.prototype.lastRenderEachLessThan = function(t) {
            for (var e = this.ends.length, i = 0; e > i; i++) {
                if (!(this.ends[i].bounds.end < t))
                    return i;
                this.ends[i].setProgressLast(t)
            }
            return i
        }
        ,
        e.prototype.lastRenderEachMoreThan = function(t) {
            for (var e = this.starts.length; e--; ) {
                if (!(t < this.starts[e].bounds.start))
                    return e;
                this.starts[e].setProgressLast(t)
            }
            return e
        }
        ,
        e.prototype.lastRenderEachTowards = function(t) {
            this.lastRenderEachMoreThan(t);
            for (var e = this.lastRenderEachLessThan(t), i = this.ends.length; i > e; )
                this.ends[e].bounds.start <= t && this.ends[e].setProgressLast(t),
                e++
        }
        ,
        e.prototype.updateEachLessThan = function(t) {
            for (var e = this.ends.length, i = 0; e > i; i++) {
                if (!(this.ends[i].bounds.end < t))
                    return i;
                this.ends[i].updateProgress(t)
            }
            return i
        }
        ,
        e.prototype.updateEachMoreThan = function(t) {
            for (var e = this.starts.length; e--; ) {
                if (!(this.starts[e].bounds.start > t))
                    return e;
                this.starts[e].updateProgress(t)
            }
            return e
        }
        ,
        e.prototype.updateEachTowards = function(t) {
            this.updateEachMoreThan(t);
            for (var e = this.updateEachLessThan(t), i = this.ends.length; i > e; )
                this.ends[e].bounds.start <= t && this.ends[e].updateProgress(t),
                e++
        }
        ,
        e.prototype.add = function(t) {
            if (0 == this.len)
                return this.starts.push(t),
                this.ends.push(t),
                void this.len++;
            var e = this.len - 1;
            this._addStartAt(t, 0, e),
            this._addEndAt(t, 0, e),
            this.len++
        }
        ,
        e.prototype._addStartAt = function(t, e, i) {
            var s = t.bounds;
            if (s.start >= this.starts[i].bounds.start)
                return void this.starts.splice(i + 1, 0, t);
            if (s.start < this.starts[e].bounds.start)
                return void this.starts.splice(e, 0, t);
            if (!(s.start >= s.end)) {
                var n = e + Math.floor((i - e) / 2)
                  , o = this.starts[n].bounds.start;
                s.start < o ? this._addStartAt(t, e, n - 1) : s.start > o ? this._addStartAt(t, n + 1, i) : this.starts.splice(n, 0, t)
            }
        }
        ,
        e.prototype._addEndAt = function(t, e, i) {
            var s = t.bounds;
            if (s.end >= this.ends[i].bounds.end)
                return void this.ends.splice(i + 1, 0, t);
            if (s.end < this.ends[e].bounds.end)
                return void this.ends.splice(e, 0, t);
            var n = e + Math.floor((i - e) / 2)
              , o = this.ends[n].bounds.end;
            s.end < o ? this._addEndAt(t, e, n - 1) : s.end > o ? this._addEndAt(t, n + 1, i) : this.ends.splice(n, 0, t)
        }
        ,
        e._SortStarts = function(t, e) {
            return t.bounds.start - e.bounds.start
        }
        ,
        e._SortEnds = function(t, e) {
            return t.bounds.end - e.bounds.end
        }
        ,
        e.prototype.updateSorting = function() {
            this.starts.sort(e._SortStarts),
            this.ends.sort(e._SortEnds)
        }
        ,
        e.prototype.destroyContent = function() {
            for (var t = this.starts.length; t--; )
                this.starts[t].destroy()
        }
        ,
        e.prototype.destroy = function() {
            this.len = this.ends = this.starts = null 
        }
        ,
        e
    }();
    t.SortedRenderList = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.BEFORE = "before",
        t.AFTER = "after",
        t.START = "start",
        t.INSIDE = t.START,
        t
    }();
    t.RenderWithinEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.SIZE_CHANGED = "sizeChanged",
        t
    }();
    t.ScopeEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.COMPLETE = t.TaskEvent.COMPLETE,
        e.END = t.TaskEvent.COMPLETE,
        e.BEFORE = t.RenderWithinEvent.BEFORE,
        e.AFTER = t.RenderWithinEvent.AFTER,
        e.START = t.RenderWithinEvent.START,
        e
    }();
    t.TweenEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.parent = t.GlobalRenderManager,
            this.active = !1,
            this.lgt = 0,
            this.parentProgress = 0,
            this.offset = 0,
            this.ta = 1,
            this.bounds = new t.Range(0,0),
            this.to = 0,
            this.velocity = 0,
            this.current = 0,
            this.progress = 0,
            this.friction = i,
            this.tension = s
        }
        return __extends(i, e),
        i.prototype.getProgress = function() {
            return this.progress
        }
        ,
        i.prototype._onAutoDestroy = function() {
            this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind),
            this._onAutoDestroyBind = void 0,
            this.destroy()
        }
        ,
        i.prototype.makeAutoDestroy = function() {
            void 0 === this._onAutoDestroyBind && (this._onAutoDestroyBind = this._onAutoDestroy.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind))
        }
        ,
        i.prototype.removeAutoDestroy = function() {
            void 0 !== this._onAutoDestroyBind && (this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind),
            this._onAutoDestroyBind = void 0)
        }
        ,
        i.prototype._onAutoPause = function() {
            this.pause()
        }
        ,
        i.prototype.makeAutoPause = function() {
            void 0 === this._onAutoPauseBind && (this._onAutoPauseBind = this._onAutoPause.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onAutoPauseBind))
        }
        ,
        i.prototype.removeAutoPause = function() {
            void 0 !== this._onAutoPauseBind && (this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoPauseBind),
            this._onAutoPauseBind = void 0)
        }
        ,
        i.prototype.shouldAutoPause = function() {
            return !0
        }
        ,
        i.prototype.setTimeAspect = function(t) {
            this.ta = t
        }
        ,
        i.prototype.getTimeAspect = function() {
            return this.ta
        }
        ,
        i.prototype.setParent = function(t) {
            this.parent = t
        }
        ,
        i.prototype.resetParent = function() {
            this.parent = t.GlobalRenderManager
        }
        ,
        i.prototype.getBounds = function() {
            return this.bounds
        }
        ,
        i.prototype.getDuration = function() {
            return this.bounds.length()
        }
        ,
        i.prototype.getOffset = function() {
            return this.offset
        }
        ,
        i.prototype.setOffset = function(t) {
            var e = t - this.offset;
            this.offset = t,
            this.bounds.offsetIn(e),
            this.progress -= e
        }
        ,
        i.prototype.setProgress = function(e) {
            var s = e
              , n = (s - this.lgt) * this.ta;
            this.parentProgress += n,
            this.lgt = s,
            this.progress = this.parentProgress - this.offset;
            var o = this.tension
              , r = this.friction
              , a = this.to
              , h = this.current
              , l = a - h;
            if (0 !== n) {
                if (Math.abs(this.velocity) < .001 && Math.abs(l) < .001)
                    return this.current !== this.to && (this.current = this.to,
                    this.velocity = 0,
                    this.renderProgress()),
                    this.active = !1,
                    void this.dispatchEvent(new t.SSEvent(t.TweenEvent.COMPLETE,this));
                for (var d, u, p, c, y, m, f, g, v, S, b, w = i.DELTA * this.ta, C = 0, T = Math.abs(n), x = Math.ceil(T / i.RENDERSTEP), E = h, L = this.velocity, P = T / x, M = Math.abs(w); T > C; )
                    C += P,
                    b = a - E,
                    d = L,
                    y = o * b - r * d,
                    u = L + y * M * .5,
                    m = o * b - r * u,
                    p = L + m * M * .5,
                    f = o * b - r * p,
                    c = L + f * M * 1,
                    g = o * b - r * c,
                    v = 1 / 6 * (2 * (u + p) + d + c),
                    S = 1 / 6 * (2 * (m + f) + y + g),
                    E += v * M,
                    L += S * M;
                this.current = E,
                this.velocity = L,
                this.renderProgress()
            }
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.updateProgress = function(t) {
            this.renderUpdate()
        }
        ,
        i.prototype.renderProgress = function() {}
        ,
        i.prototype.renderProgressLast = function() {}
        ,
        i.prototype.renderUpdate = function() {}
        ,
        i.prototype.execute = function() {
            this.active === !1 && (this.offset = this.parent.getProgress(),
            this.active = !0,
            this.parent.add(this))
        }
        ,
        i.prototype.pause = function() {
            this.active = !1,
            this.parent.remove(this)
        }
        ,
        i.prototype.moveTo = function(t) {
            this.to !== t && (this.setTo(t),
            this.execute())
        }
        ,
        i.prototype.jumpTo = function(t) {
            this.to = this.current = t,
            this.velocity = 0,
            this.parent.remove(this),
            this.renderProgressLast()
        }
        ,
        i.prototype.setTo = function(t) {
            this.to !== t && (this.to = t)
        }
        ,
        i.prototype.getTo = function() {
            return this.to
        }
        ,
        i.prototype.revert = function() {
            this.active = !1,
            this.parent.remove(this),
            this.velocity = 0,
            this.renderProgressLast()
        }
        ,
        i.prototype.destroy = function() {
            this.parent.remove(this),
            this.offset = this.progress = this.bounds = this.active = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i.RENDERSTEP = 1e3 / 240,
        i.DELTA = .1,
        i
    }(t.EventDispatcher);
    t.ADynamicTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this),
            this.parent = t.GlobalRenderManager,
            this.active = !1,
            this.lgt = 0,
            this.parentProgress = 0,
            this.offset = 0,
            this.ta = 1,
            this.bounds = new t.Range(0,0),
            this.velocity = 0,
            this.lastVelocity = 0,
            this.current = 0,
            this.progress = 0,
            this.friction = i
        }
        return __extends(i, e),
        i.prototype.getProgress = function() {
            return this.progress
        }
        ,
        i.prototype._onAutoDestroy = function() {
            this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind),
            this._onAutoDestroyBind = void 0,
            this.destroy()
        }
        ,
        i.prototype.makeAutoDestroy = function() {
            void 0 === this._onAutoDestroyBind && (this._onAutoDestroyBind = this._onAutoDestroy.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind))
        }
        ,
        i.prototype.removeAutoDestroy = function() {
            void 0 !== this._onAutoDestroyBind && (this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind),
            this._onAutoDestroyBind = void 0)
        }
        ,
        i.prototype._onAutoPause = function() {
            this.pause()
        }
        ,
        i.prototype.makeAutoPause = function() {
            void 0 === this._onAutoPauseBind && (this._onAutoPauseBind = this._onAutoPause.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onAutoPauseBind))
        }
        ,
        i.prototype.removeAutoPause = function() {
            void 0 !== this._onAutoPauseBind && (this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoPauseBind),
            this._onAutoPauseBind = void 0)
        }
        ,
        i.prototype.shouldAutoPause = function() {
            return !0
        }
        ,
        i.prototype.setTimeAspect = function(t) {
            this.ta = t
        }
        ,
        i.prototype.getTimeAspect = function() {
            return this.ta
        }
        ,
        i.prototype.setParent = function(t) {
            this.parent = t
        }
        ,
        i.prototype.resetParent = function() {
            this.parent = t.GlobalRenderManager
        }
        ,
        i.prototype.getBounds = function() {
            return this.bounds
        }
        ,
        i.prototype.getDuration = function() {
            return this.bounds.length()
        }
        ,
        i.prototype.getOffset = function() {
            return this.offset
        }
        ,
        i.prototype.setOffset = function(t) {
            var e = t - this.offset;
            this.offset = t,
            this.bounds.offsetIn(e),
            this.progress -= e
        }
        ,
        i.prototype.setProgress = function(e) {
            var i = e
              , s = (i - this.lgt) * this.ta;
            this.parentProgress += s,
            this.lgt = i,
            this.progress = this.parentProgress - this.offset;
            var n = this.friction;
            if (0 !== s) {
                if (Math.abs(this.velocity) < .001)
                    return this.active = !1,
                    void this.dispatchEvent(new t.SSEvent(t.TweenEvent.COMPLETE,this));
                for (var o = t.ADynamicTween.DELTA * this.ta, r = 0, a = Math.abs(s), h = Math.ceil(a / t.ADynamicTween.RENDERSTEP), l = this.current, d = this.velocity, u = a / h, p = Math.abs(o); a > r; )
                    r += u,
                    d *= 1 - n * p,
                    l += d;
                this.current = l,
                this.velocity = d,
                this.render()
            }
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.render()
        }
        ,
        i.prototype.updateProgress = function() {
            this.render()
        }
        ,
        i.prototype.render = function() {}
        ,
        i.prototype.execute = function() {
            if (this.active === !1) {
                var t = this.parent.getProgress() - this.progress
                  , e = t - this.offset;
                this.offset = t,
                this.bounds.offsetIn(e),
                this.parentProgress = this.lgt = this.offset + this.progress,
                this.active = !0,
                this.parent.add(this)
            }
        }
        ,
        i.prototype.pause = function() {
            this.active = !1,
            this.parent.remove(this)
        }
        ,
        i.prototype.setCurrent = function(t) {
            this.current = t
        }
        ,
        i.prototype.setVelocity = function(t) {
            this.velocity !== t && (this.velocity = t,
            this.lastVelocity = t,
            this.execute())
        }
        ,
        i.prototype.addVelocity = function(t) {
            this.velocity += t,
            this.lastVelocity = this.velocity,
            this.execute()
        }
        ,
        i.prototype.getDirection = function() {
            return this.lastVelocity > 0 ? 1 : this.lastVelocity < 0 ? -1 : 0
        }
        ,
        i.prototype.revert = function() {
            this.active = !1,
            this.parent.remove(this),
            this.setProgressLast(this.bounds.start)
        }
        ,
        i.prototype.destroy = function() {
            this.parent.remove(this),
            this.offset = this.progress = this.bounds = this.active = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i.RENDERSTEP = 1e3 / 240,
        i.DELTA = .1,
        i
    }(t.EventDispatcher);
    t.AVelocityTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i, s) {
            t.call(this, i, s),
            this.func = e
        }
        return __extends(e, t),
        e.prototype.renderProgress = function() {
            this.func(this.current)
        }
        ,
        e.prototype.renderProgressLast = function() {
            this.func(this.current)
        }
        ,
        e.prototype.renderUpdate = function() {
            this.func(this.current)
        }
        ,
        e.prototype.destroy = function() {
            this.func = void 0,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.ADynamicTween);
    t.DynamicFunctionTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i, s) {
            t.call(this, i, s),
            this.within = e
        }
        return __extends(e, t),
        e.prototype.renderProgress = function() {
            this.within.setProgress(this.current)
        }
        ,
        e.prototype.renderProgressLast = function() {
            this.within.setProgressLast(this.current)
        }
        ,
        e.prototype.renderUpdate = function() {
            this.within.updateProgress(this.current)
        }
        ,
        e.prototype.destroy = function() {
            this.within = void 0,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.ADynamicTween);
    t.DynamicWithinTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            t.call(this, i),
            this.func = e
        }
        return __extends(e, t),
        e.prototype.render = function() {
            this.func(this.current)
        }
        ,
        e.prototype.destroy = function() {
            this.func = void 0,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.AVelocityTween);
    t.VelocityFunctionTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {
            throw new Error("CSSAdvPropertyWithUnitRender Cant be instianziated as an object.")
        }
        return e.FromDataValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("CSSAdvPropertyWithUnitRender Cant be created from data values. (" + typeof n + ")")
        }
        ,
        e.FromNumberValues = function(e, i, s, n, o, r, a, h) {
            return i = t.StyleUtility.GetVendorPrefix(i),
            null  === n && (n = parseFloat(t.StyleUtility.GetStyleValue(e, i))),
            new t.CSSPropertyWithUnitRender(e,i,s,n,o,r,a,h)
        }
        ,
        e.FromStringValues = function(e, i, s, n, o, r, a) {
            i = t.StyleUtility.GetVendorPrefix(i);
            var h = t.StyleUtility.GetUnit(n);
            if (null  === s) {
                s = t.StyleUtility.GetStyleValue(e, i, "0" + h);
                var l = t.StyleUtility.GetUnit(s);
                if (l != h)
                    throw new Error("The from and to values have to be in the same unit. Atleast for now, conversion between unit-types havent been made jet.")
            }
            return new t.CSSPropertyWithUnitRender(e,i,h,parseFloat(s),parseFloat(n),o,r,a)
        }
        ,
        e
    }();
    t.CSSAdvPropertyWithUnitRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a) {
            this.element = e,
            this.property = i,
            this.from = s,
            this.to = n,
            this.bounds = new t.Range(o,o + r),
            this.duration = r,
            this.ease = a
        }
        return e.FromDataValues = function(i, s, n, o, r, a, h, l) {
            return null  === o && (o = t.ColorUtility.StringToRGB(t.StyleUtility.GetStyleValue(i, s))),
            new e(i,s,o,r,a,h,l)
        }
        ,
        e.FromNumberValues = function(i, s, n, o, r, a, h, l) {
            if (null  === o) {
                var d = t.ColorUtility.StringToRGB(t.StyleUtility.GetStyleValue(i, s));
                return new e(i,s,d,t.RGB.FromHexNumber(r),a,h,l)
            }
            return new e(i,s,t.RGB.FromHexNumber(o),t.RGB.FromHexNumber(r),a,h,l)
        }
        ,
        e.FromStringValues = function(i, s, n, o, r, a, h) {
            return null  === n && (n = t.StyleUtility.GetStyleValue(i, s)),
            new e(i,s,t.ColorUtility.StringToRGB(n),t.ColorUtility.StringToRGB(o),r,a,h)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s),
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.from.blendRGB(this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.style[this.property] = this.from.blendRGB(this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start)).toString())
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.style[this.property] = this.from.blendRGB(this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start)).toString())
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element.style[this.property] = this.from.blendRGB(this.to, this.ease(this.progress - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start)).toString()
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.bounds = this.ease = this.from = this.to = null 
        }
        ,
        e
    }();
    t.CSSColorPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a) {
            this.element = e,
            this.property = i,
            this.to = n,
            this.from = s,
            this.bounds = new t.Range(o,o + r),
            this.ease = a
        }
        return e.FromDataValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("CSSPropertyRender Cant be created from data values. (" + typeof n + ")")
        }
        ,
        e.FromNumberValues = function(i, s, n, o, r, a, h, l) {
            return null  === o && (o = parseFloat(t.StyleUtility.GetStyleValue(i, s))),
            new e(i,s,o,r,a,h,l)
        }
        ,
        e.FromStringValues = function(i, s, n, o, r, a, h) {
            return null  === n && (n = t.StyleUtility.GetStyleValue(i, s)),
            new e(i,s,parseFloat(n),parseFloat(o),r,a,h)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.style[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start).toFixed(8));
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.style[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start).toFixed(8))
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element.style[this.property] = this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start).toFixed(8)
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.bounds = this.from = this.to = null 
        }
        ,
        e
    }();
    t.CSSPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments)
        }
        return __extends(i, e),
        i.FromNumberValues = function(e, i, s, n, o, r, a, h) {
            return null  === n && (n = parseFloat(t.StyleUtility.GetStyleValue(e, i, "1"))),
            new t.CSSPropertyRender(e,i,n,o,r,a,h)
        }
        ,
        i
    }(t.CSSPropertyRender);
    t.CSSOpacityPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a, h) {
            this.element = e,
            this.property = i,
            this.unit = s,
            this.to = o,
            this.from = n,
            this.bounds = new t.Range(r,r + a),
            this.ease = h
        }
        return e.FromDataValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("CSSPropertyWithUnitRender Cant be created from data values. (" + typeof n + ")")
        }
        ,
        e.FromNumberValues = function(i, s, n, o, r, a, h, l) {
            if (null  === o) {
                var d = t.StyleUtility.GetStyleValue(i, s);
                o = parseFloat(d);
                var u = t.StyleUtility.GetUnit(d);
                if (null  === n)
                    n = u;
                else if (u != n && 0 != o)
                    throw new Error("The from and to values have to be in the same unit. Atleast for now, conversion between unit-types havent been made jet.")
            }
            return null  === n && (n = "px"),
            new e(i,s,n,o,r,a,h,l)
        }
        ,
        e.FromStringValues = function(i, s, n, o, r, a, h) {
            var l = t.StyleUtility.GetUnit(o);
            null  === n && (n = t.StyleUtility.GetStyleValue(i, s));
            var d = parseFloat(n)
              , u = t.StyleUtility.GetUnit(n);
            if (null  === l)
                l = u;
            else if (u != l && 0 != d)
                throw new Error("The from and to values have to be in the same unit. Atleast for now, conversion between unit-types havent been made jet.");
            return null  === l && (l = "px"),
            new e(i,s,l,d,parseFloat(o),r,a,h)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.style[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start).toFixed(8) + this.unit)
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.style[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start).toFixed(8) + this.unit)
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element.style[this.property] = this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start).toFixed(8) + this.unit
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.bounds = this.unit = this.from = this.to = null 
        }
        ,
        e
    }();
    t.CSSPropertyWithUnitRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.element = e,
            this.property = t.css.name.TRANSFORM,
            this.from = i,
            this.to = s,
            this.bounds = new t.Range(n,n + o),
            this.duration = o,
            this.ease = r
        }
        return e.FromDataValues = function(i, s, n, o, r, a, h) {
            return null  === n && (n = t.TransformMatrix.FromString(t.StyleUtility.GetStyleValue(i, s, "matrix(1,0,0,1,0,0)"))),
            new e(i,n,o,r,a,h)
        }
        ,
        e.FromNumberValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("CSSTransformPropertyRender cant be created from numberic values.")
        }
        ,
        e.FromStringValues = function(i, s, n, o, r, a, h) {
            return null  === n && (n = t.StyleUtility.GetStyleValue(i, s, "matrix(1,0,0,1,0,0)")),
            new e(i,t.TransformMatrix.FromString(n),t.TransformMatrix.FromString(o),r,a,h)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s),
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t));
            var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
            return this.from.lerp(this.to, e)
        }
        ,
        e.prototype.setProgress = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
                this.element.style[this.property] = this.from.lerp(this.to, e).toString()
            }
        }
        ,
        e.prototype.setProgressLast = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
                this.element.style[this.property] = this.from.lerp(this.to, e).toString()
            }
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t));
            var e = this.ease((this.progress - this.bounds.start) / this.duration, 0, 1, 1);
            this.element.style[this.property] = this.from.lerp(this.to, e).toString()
        }
        ,
        e.prototype.destroy = function() {
            this.bounds = this.ease = this.element = this.property = this.from = this.to = null 
        }
        ,
        e
    }();
    t.CSSTransformPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a, h) {
            this.element = e,
            this.property = t.StyleUtility.GetVendorPrefix(i),
            this.unit = s,
            this.from = n,
            this.to = o,
            this.bounds = new t.Range(r,r + a),
            this.duration = a,
            this.ease = h
        }
        return e.FromDataValues = function(i, s, n, o, r, a, h, l) {
            if (null  === o) {
                var d = t.StyleUtility.GetStyleValue(i, s, "0 0");
                o = t.Vector.FromString(d);
                var u = t.StyleUtility.GetUnit(d);
                if (null  === n)
                    n = u;
                else if (u != n && 0 != o.x && 0 != o.y)
                    throw new Error("The from and to values have to be in the same unit. Atleast for now, conversion between unit-types havent been made jet.")
            }
            return null  === n && (n = "px"),
            new e(i,s,n,o,r,a,h,l)
        }
        ,
        e.FromNumberValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("CSSPointWithUnitPropertyRender cant be created from numberic values.")
        }
        ,
        e.FromStringValues = function(i, s, n, o, r, a, h) {
            var l = t.StyleUtility.GetUnit(o);
            null  === n && (n = t.StyleUtility.GetStyleValue(i, s, "0 0"));
            var d = t.Vector.FromString(n)
              , u = t.StyleUtility.GetUnit(n);
            if (null  === l)
                l = u;
            else if (u != l && 0 != d.x && 0 != d.y)
                throw new Error("The from and to values have to be in the same unit. Atleast for now, conversion between unit-types havent been made jet.");
            return null  === l && (l = "px"),
            new e(i,s,l,d,t.Vector.FromString(o),r,a,h)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s),
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t));
            var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
            return this.from.lerp(this.to, e)
        }
        ,
        e.prototype.setProgress = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
                this.element.style[this.property] = this.from.lerp(this.to, e).toCSSStringWithUnit(this.unit)
            }
        }
        ,
        e.prototype.setProgressLast = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
                this.element.style[this.property] = this.from.lerp(this.to, e).toCSSStringWithUnit(this.unit)
            }
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t));
            var e = this.ease((this.progress - this.bounds.start) / this.duration, 0, 1, 1);
            this.element.style[this.property] = this.from.lerp(this.to, e).toCSSStringWithUnit(this.unit)
        }
        ,
        e.prototype.destroy = function() {
            this.bounds = this.ease = this.element = this.property = this.from = this.to = null 
        }
        ,
        e
    }();
    t.CSSVectorWithUnitPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a) {
            this.element = e,
            this.property = i,
            this.from = s,
            this.to = n,
            this.bounds = new t.Range(o,o + r),
            this.duration = r,
            this.ease = a
        }
        return e.FromDataValues = function(e, i, s, n, o, r, a, h) {
            return null  === n && (n = t.ColorUtility.StringToRGB(t.StyleUtility.GetStyleValue(e, i))),
            new t.CSSColorPropertyRender(e,i,n,o,r,a,h)
        }
        ,
        e.FromNumberValues = function(e, i, s, n, o, r, a, h) {
            if (null  === n) {
                var l = t.ColorUtility.StringToRGB(t.StyleUtility.GetStyleValue(e, i));
                return new t.CSSColorPropertyRender(e,i,l,t.RGB.FromHexNumber(o),r,a,h)
            }
            return new t.CSSColorPropertyRender(e,i,t.RGB.FromHexNumber(n),t.RGB.FromHexNumber(o),r,a,h)
        }
        ,
        e.FromStringValues = function(e, i, s, n, o, r, a) {
            return null  === s && (s = t.StyleUtility.GetStyleValue(e, i)),
            new t.CSSColorPropertyRender(e,i,t.ColorUtility.StringToRGB(s),t.ColorUtility.StringToRGB(n),o,r,a)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s),
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.from.blendRGB(this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.setAttribute(this.property, this.from.blendRGB(this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start)).toString()))
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.setAttribute(this.property, this.from.blendRGB(this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start)).toString()))
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element.setAttribute(this.property, this.from.blendRGB(this.to, this.ease(this.progress - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start)).toString())
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.bounds = this.ease = this.from = this.to = null 
        }
        ,
        e
    }();
    t.ColorPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.func = e,
            this.from = i,
            this.to = s,
            this.bounds = new t.Range(n,n + o),
            this.ease = r
        }
        return e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.func(this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)))
        }
        ,
        e.prototype.getProgress = function() {
            return this.progress
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.func(this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)))
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.func(this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.destroy = function() {
            this.func = null ,
            this.bounds = null 
        }
        ,
        e
    }();
    t.FunctionRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.element = e,
            this.to = s,
            this.from = i,
            this.bounds = new t.Range(n,n + o)
        }
        return e.FromDataValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("HTMLClassPropertyRender Cant be created from data values. (" + typeof n + ")")
        }
        ,
        e.FromNumberValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("HTMLClassPropertyRender Cant be created from numberic values.")
        }
        ,
        e.FromStringValues = function(t, i, s, n, o, r, a) {
            return new e(t,s,n,o,r,a)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t - this.bounds.start
        }
        ,
        e.prototype.setProgress = function(e) {
            this.bounds.contains(e) === !0 ? this.active !== !0 && (this.active = !0,
            t.HTML.RemoveClass(this.element, this.from),
            t.HTML.AddClass(this.element, this.to)) : this.active !== !1 && (this.active = !1,
            t.HTML.AddClass(this.element, this.from),
            t.HTML.RemoveClass(this.element, this.to))
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.setProgress(t)
        }
        ,
        e.prototype.updateProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.setProgress(t)
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.bounds = this.from = this.to = null 
        }
        ,
        e
    }();
    t.HTMLClassPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a) {
            this.element = e,
            this.property = i,
            null  === s ? this.from = this.element.getAttributeNS(null , this.property) : this.from = s,
            this.to = n,
            this.bounds = new t.Range(o,o + r),
            this.ease = a
        }
        return e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element.setAttributeNS(null , this.property, this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)))
        }
        ,
        e.prototype.setProgressLast = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start);
                0 == e ? this.element.removeAttributeNS(null , this.property) : this.element.setAttributeNS(null , this.property, e)
            }
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element.setAttributeNS(null , this.property, this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.ease = this.bounds = null 
        }
        ,
        e
    }();
    t.NSPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a) {
            this.element = e,
            this.property = i,
            null  === s ? this.from = this.element[this.property] : this.from = s,
            this.to = n,
            this.bounds = new t.Range(o,o + r),
            this.ease = a
        }
        return e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element[this.property] = this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.ease = this.bounds = null 
        }
        ,
        e
    }();
    t.PropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r, a, h) {
            this.element = e,
            this.property = i,
            this.unit = s,
            null  === n ? this.from = parseFloat(this.element[this.property]) : this.from = n,
            this.to = o,
            this.bounds = new t.Range(r,r + a),
            this.ease = h
        }
        return e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.getValueAt = function(t) {
            return t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start) + this.unit)
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.element[this.property] = this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start) + this.unit)
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.element[this.property] = this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start) + this.unit
        }
        ,
        e.prototype.destroy = function() {
            this.element = this.property = this.ease = this.bounds = null 
        }
        ,
        e
    }();
    t.PropertyRenderWithUnit = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.obj = e,
            this.from = i,
            this.to = s,
            this.bounds = new t.Range(n,n + o),
            this.ease = r
        }
        return e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s)
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.setProgress = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t && (this.progress = t,
            this.obj.setProgress(this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start)))
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress = t,
            this.obj.setProgressLast(this.ease(t - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.obj.updateProgress(this.ease(this.progress - this.bounds.start, this.from, this.to - this.from, this.bounds.end - this.bounds.start))
        }
        ,
        e.prototype.destroy = function() {
            this.obj = this.ease = this.bounds = null 
        }
        ,
        e
    }();
    t.RenderRenderable = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.target = e,
            null  === i ? this.from = this.target.clone() : this.from = i,
            this.to = s,
            this.bounds = new t.Range(n,n + o),
            this.duration = o,
            this.ease = r
        }
        return e.FromDataValues = function(t, i, s, n, o, r, a, h) {
            return new e(t[i],n,o,r,a,h)
        }
        ,
        e.FromNumberValues = function(t, e, i, s, n, o, r, a) {
            throw new Error("PointPropertyRender Cant be created from number values. (" + typeof n + ")")
        }
        ,
        e.FromStringValues = function(i, s, n, o, r, a, h) {
            return null  === n && (n = t.StyleUtility.GetStyleValue(i, s)),
            new e(i[s],t.Vector.FromString(n),t.Vector.FromString(o),r,a,h)
        }
        ,
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.set(i, i + s),
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.setProgress = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
                this.target.lerpCopy(this.from, this.to, e)
            }
        }
        ,
        e.prototype.setProgressLast = function(t) {
            if (t = Math.min(this.bounds.end, Math.max(this.bounds.start, t)),
            this.progress != t) {
                this.progress = t;
                var e = this.ease((t - this.bounds.start) / this.duration, 0, 1, 1);
                this.target.lerpCopy(this.from, this.to, e)
            }
        }
        ,
        e.prototype.updateProgress = function(t) {
            this.progress = Math.min(this.bounds.end, Math.max(this.bounds.start, t));
            var e = this.ease((this.progress - this.bounds.start) / this.duration, 0, 1, 1);
            this.target.lerpCopy(this.from, this.to, e)
        }
        ,
        e.prototype.destroy = function() {
            this.from = this.to = this.target = this.ease = this.bounds = null 
        }
        ,
        e
    }();
    t.VectorPropertyRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.call(this),
            this.offset = 0,
            this.height = 0,
            this._updateSizeFunc = this._default_updateSizeFunc
        }
        return __extends(i, e),
        i.prototype._default_updateSizeFunc = function(t, e) {}
        ,
        i.prototype.scopeUpdateBehaviour = function(t) {
            this._updateSizeFunc = t
        }
        ,
        i.prototype.addedToParent = function(t) {
            this.parent = t
        }
        ,
        i.prototype.removedFromParent = function(t) {
            this.parent = void 0
        }
        ,
        i.prototype.getParent = function() {
            return this.parent
        }
        ,
        i.prototype.getBounds = function() {
            return new t.Range(null ,null )
        }
        ,
        i.prototype.getHeight = function() {
            return this.height
        }
        ,
        i.prototype.setHeight = function(t) {
            this.height = t
        }
        ,
        i.prototype.getGlobalOffset = function() {
            var t = 0;
            return void 0 !== this.parent && (t += this.parent.getGlobalOffset()),
            t + this.getOffset()
        }
        ,
        i.prototype.getOffset = function() {
            return 0
        }
        ,
        i.prototype.setOffset = function(t) {
            this.offset = t
        }
        ,
        i.prototype.updateSize = function(t) {
            return this._updateSizeFunc(this, t),
            this.updateBounds(),
            this.getBounds()
        }
        ,
        i.prototype.updateBounds = function() {}
        ,
        i.prototype.destroy = function() {}
        ,
        i
    }(t.EventDispatcher);
    t.AScope = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.children = [],
            this.childrenSize = new t.Area(null ,null )
        }
        return __extends(i, e),
        i.prototype.setChildrenSize = function(t) {
            this.childrenSize = t
        }
        ,
        i.prototype.getChildrenSize = function() {
            return this.childrenSize
        }
        ,
        i.prototype._default_updateSizeFunc = function(t, e) {
            this.childrenSize.copy(e)
        }
        ,
        i.prototype.add = function(t) {
            t.addedToParent(this),
            this.children.addItem(t)
        }
        ,
        i.prototype.remove = function(t) {
            t.removedFromParent(this),
            this.children.removeItem(t)
        }
        ,
        i.prototype.getAt = function(t) {
            return this.children[t]
        }
        ,
        i.prototype.updateSize = function(e) {
            this._updateSizeFunc(this, e);
            for (var i = new t.Range(null ,null ), s = this.children, n = s.length; n--; )
                i.concatIn(s[n].updateSize(this.childrenSize));
            return this.updateBounds(),
            this.getBounds()
        }
        ,
        i.prototype.destroy = function() {
            this.children = void 0,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.AScope);
    t.AScopeGroup = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e) {
            t.call(this),
            this.within = e
        }
        return __extends(e, t),
        e.prototype.getWithin = function() {
            return this.within
        }
        ,
        e.prototype.getBounds = function() {
            return this.within.bounds
        }
        ,
        e.prototype.getOffset = function() {
            return this.within.getOffset()
        }
        ,
        e.prototype.setOffset = function(t) {
            this.within.setOffset(t)
        }
        ,
        e.prototype.updateBounds = function() {
            this.within.updateBounds()
        }
        ,
        e.prototype.destroy = function() {
            this.within = void 0,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.AScope);
    t.ScopeController = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e) {
            t.call(this),
            this.within = e
        }
        return __extends(e, t),
        e.prototype.onScopeUpdate = function(t) {
            this._updateSizeFunc = t
        }
        ,
        e.prototype.getWithin = function() {
            return this.within
        }
        ,
        e.prototype.getBounds = function() {
            return this.within.bounds
        }
        ,
        e.prototype.getOffset = function() {
            return this.within.getOffset()
        }
        ,
        e.prototype.setOffset = function(t) {
            this.within.setOffset(t)
        }
        ,
        e.prototype.add = function(e) {
            this.within.add(e.getWithin()),
            t.prototype.add.call(this, e)
        }
        ,
        e.prototype.remove = function(e) {
            this.within.remove(e.getWithin()),
            t.prototype.remove.call(this, e)
        }
        ,
        e.prototype.updateBounds = function() {
            this.within.updateBounds()
        }
        ,
        e.prototype.destroy = function() {
            this.within = void 0,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.AScopeGroup);
    t.ScopeControllerGroup = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.updateSize = function(t) {
            this._updateSizeFunc(this, t);
            for (var e, i = this.children, s = 0, n = i.length, o = 0; n > s; )
                e = i[s],
                e.setOffset(o),
                e.updateSize(this.childrenSize),
                o += e.getHeight(),
                s++;
            return this.setHeight(o),
            this.updateBounds(),
            this.within.bounds
        }
        ,
        e
    }(t.ScopeControllerGroup);
    t.ScopeControllerGroupList = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.parent = t.GlobalRenderManager,
            this.lgt = 0,
            this.ta = 1,
            this.active = !1
        }
        return __extends(i, e),
        i.prototype.getOuterBounds = function() {
            return 1 !== this.ta ? this.bounds.scale(this.ta) : this.bounds
        }
        ,
        i.prototype._onAutoDestroy = function() {
            this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind),
            this._onAutoDestroyBind = void 0,
            this.destroy()
        }
        ,
        i.prototype.makeAutoDestroy = function() {
            void 0 === this._onAutoDestroyBind && (this._onAutoDestroyBind = this._onAutoDestroy.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind))
        }
        ,
        i.prototype.removeAutoDestroy = function() {
            void 0 !== this._onAutoDestroyBind && (this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoDestroyBind),
            this._onAutoDestroyBind = void 0)
        }
        ,
        i.prototype._onAutoPause = function() {
            this.pause()
        }
        ,
        i.prototype.makeAutoPause = function() {
            void 0 === this._onAutoPauseBind && void 0 === this._onLoopBind && (this._onAutoPauseBind = this._onAutoPause.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onAutoPauseBind))
        }
        ,
        i.prototype.removeAutoPause = function() {
            void 0 !== this._onAutoPauseBind && (this.removeEventListener(t.TaskEvent.COMPLETE, this._onAutoPauseBind),
            this._onAutoPauseBind = void 0)
        }
        ,
        i.prototype.shouldAutoPause = function() {
            return void 0 === this._onLoopBind
        }
        ,
        i.prototype._onLoop = function() {
            this.play()
        }
        ,
        i.prototype.isLooping = function() {
            return void 0 !== this._onLoopBind
        }
        ,
        i.prototype.makeLoop = function() {
            void 0 === this._onLoopBind && (void 0 !== this._onAutoPauseBind && this.removeAutoPause(),
            this._onLoopBind = this._onLoop.bind(this),
            this.addEventListener(t.TaskEvent.COMPLETE, this._onLoopBind))
        }
        ,
        i.prototype.removeLoop = function() {
            void 0 !== this._onLoopBind && (this.active === !0 && this.parent === t.GlobalRenderManager && this.makeAutoPause(),
            this.removeEventListener(t.TaskEvent.COMPLETE, this._onLoopBind),
            this._onLoopBind = void 0)
        }
        ,
        i.prototype.setTimeAspect = function(t) {
            this.ta = t
        }
        ,
        i.prototype.getTimeAspect = function() {
            return this.ta
        }
        ,
        i.prototype.setParent = function(t) {
            this.parent = t
        }
        ,
        i.prototype.resetParent = function() {
            this.setOffset(0),
            this.lgt = this.parentProgress = 0,
            this.parent.remove(this),
            this.parent = t.GlobalRenderManager,
            this.active = !1
        }
        ,
        i.prototype.setProgress = function(t) {
            var i = t;
            t = this.parentProgress + (i - this.lgt) * this.ta,
            this.lgt = i,
            e.prototype.setProgress.call(this, t)
        }
        ,
        i.prototype.updateProgress = function(t) {
            var i = t;
            t = this.parentProgress + (i - this.lgt) * this.ta,
            this.lgt = i,
            this.active === !1 && e.prototype.updateProgress.call(this, t)
        }
        ,
        i.prototype.__inside_before = function() {
            e.prototype.__inside_before.call(this),
            this.ta < 0 && this.dispatchEvent(new t.TaskEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.__inside_after = function() {
            e.prototype.__inside_after.call(this),
            this.ta > 0 && this.dispatchEvent(new t.TaskEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.revert = function() {
            this.active = !1,
            this.parent.remove(this),
            this.setProgressLast(this.bounds.start)
        }
        ,
        i.prototype.destroy = function() {
            this.removeLoop(),
            this.removeAutoPause(),
            this.removeAutoDestroy(),
            this.parent.remove(this),
            this.progress = this.active = null ,
            e.prototype.destroy.call(this),
            this.destroy = null 
        }
        ,
        i.prototype.execute = function() {
            if (this.active === !1) {
                var e = this.parent.getProgress() - this.progress
                  , i = e - this.offset;
                this.offset = e,
                this.bounds.offsetIn(i),
                this.parentProgress = this.lgt = this.offset + this.progress
            }
            this.ta > 0 && this.bounds.end < this.parentProgress ? this.dispatchEvent(new t.TaskEvent(t.TaskEvent.COMPLETE,this)) : this.ta < 0 && this.bounds.start > this.parentProgress ? this.dispatchEvent(new t.TaskEvent(t.TaskEvent.COMPLETE,this)) : (this.setStateToInside(),
            this.active = !0,
            this.parent.add(this))
        }
        ,
        i.prototype.forwardFrom = function(t) {
            this.progress = t,
            this.forward()
        }
        ,
        i.prototype.forward = function() {
            this.ta = Math.abs(this.ta),
            this.execute()
        }
        ,
        i.prototype.backwardFrom = function(t) {
            this.progress = t,
            this.backward()
        }
        ,
        i.prototype.backward = function() {
            this.ta = -Math.abs(this.ta),
            this.execute()
        }
        ,
        i.prototype.reverse = function() {
            this.ta = -this.ta,
            this.execute()
        }
        ,
        i.prototype.play = function() {
            this.progress = this.ta < 0 ? this.bounds.end : 0;
            var t = this.parent.getProgress() - this.progress
              , e = t - this.offset;
            this.offset = t,
            this.bounds.offsetIn(e),
            this.parentProgress = this.lgt = this.offset + this.progress,
            this.execute()
        }
        ,
        i.prototype.stop = function() {
            this.active = !1,
            this.parent.remove(this)
        }
        ,
        i.prototype.finish = function() {
            this.offset = this.parent.getProgress() - (this.bounds.end - this.offset),
            this.setProgressLast(this.bounds.end)
        }
        ,
        i.prototype.pause = function() {
            this.active = !1,
            this.parent.remove(this)
        }
        ,
        i.prototype.resume = function() {
            this.active === !1 && this.execute()
        }
        ,
        i
    }(t.AWithin);
    t.ATween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.FromString = function(e) {
            return e = e.toLowerCase(),
            void 0 !== t._dict[e] ? t._dict[e] : t.Linear
        }
        ,
        t.FromShape = function(t, e) {
            return function(i, s, n, o) {
                return t.getPointAt(n * i / o + s).y * e
            }
        }
        ,
        t.CombineInOut = function(t, e) {
            return function(i, s, n, o) {
                return .5 * o > i ? t(i, s, n, o) : e(i, s, n, o)
            }
        }
        ,
        t.ConfigElastic = function(t, e, i) {
            return function(s, n, o, r) {
                return t(s, n, o, r, e, i)
            }
        }
        ,
        t.Linear = function(t, e, i, s) {
            return i * t / s + e
        }
        ,
        t.QuadIn = function(t, e, i, s) {
            return i * (t /= s) * t + e
        }
        ,
        t.QuadOut = function(t, e, i, s) {
            return -i * (t /= s) * (t - 2) + e
        }
        ,
        t.QuadInOut = function(t, e, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
        }
        ,
        t.CubicIn = function(t, e, i, s) {
            return i * (t /= s) * t * t + e
        }
        ,
        t.CubicOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t + 1) + e
        }
        ,
        t.CubicInOut = function(t, e, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
        }
        ,
        t.QuartIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t + e
        }
        ,
        t.QuartOut = function(t, e, i, s) {
            return -i * ((t = t / s - 1) * t * t * t - 1) + e
        }
        ,
        t.QuartInOut = function(t, e, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
        }
        ,
        t.QuintIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e
        }
        ,
        t.QuintOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e
        }
        ,
        t.QuintInOut = function(t, e, i, s) {
            return (t /= s / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }
        ,
        t.SineIn = function(t, e, i, s) {
            return -i * Math.cos(t / s * (Math.PI / 2)) + i + e
        }
        ,
        t.SineOut = function(t, e, i, s) {
            return i * Math.sin(t / s * (Math.PI / 2)) + e
        }
        ,
        t.SineInOut = function(t, e, i, s) {
            return -i / 2 * (Math.cos(Math.PI * t / s) - 1) + e
        }
        ,
        t.ExpoIn = function(t, e, i, s) {
            return 0 === t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e
        }
        ,
        t.ExpoOut = function(t, e, i, s) {
            return t === s ? e + i : i * (-Math.pow(2, -10 * t / s) + 1) + e
        }
        ,
        t.ExpoInOut = function(t, e, i, s) {
            return 0 === t ? e : t === s ? e + i : (t /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e
        }
        ,
        t.CircIn = function(t, e, i, s) {
            return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
        }
        ,
        t.CircOut = function(t, e, i, s) {
            return i * Math.sqrt(1 - (t = t / s - 1) * t) + e
        }
        ,
        t.CircInOut = function(t, e, i, s) {
            return (t /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }
        ,
        t.BounceIn = function(e, i, s, n) {
            return s - t.BounceOut(n - e, 0, s, n) + i
        }
        ,
        t.BounceOut = function(t, e, i, s) {
            return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
        }
        ,
        t.BounceInOut = function(e, i, s, n) {
            return n / 2 > e ? .5 * t.BounceIn(2 * e, 0, s, n) + i : .5 * t.BounceOut(2 * e - n, 0, s, n) + .5 * s + i
        }
        ,
        t.ElasticIn = function(t, e, i, s, n, o) {
            if (0 === t)
                return e;
            if (1 === (t /= s))
                return e + i;
            o || (o = .3 * s),
            n || (n = 1);
            var r = 0;
            return n < Math.abs(i) ? (n = i,
            r = o / 4) : r = o / (2 * Math.PI) * Math.asin(i / n),
            -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - r) * (2 * Math.PI) / o)) + e
        }
        ,
        t.ElasticOut = function(t, e, i, s, n, o) {
            if (0 === t)
                return e;
            if (1 === (t /= s))
                return e + i;
            o || (o = .3 * s),
            n || (n = 1);
            var r = 0;
            return n < Math.abs(i) ? (n = i,
            r = o / 4) : r = o / (2 * Math.PI) * Math.asin(i / n),
            n * Math.pow(2, -10 * t) * Math.sin((t * s - r) * (2 * Math.PI) / o) + i + e
        }
        ,
        t.ElasticInOut = function(t, e, i, s, n, o) {
            if (0 === t)
                return e;
            if (2 === (t /= s / 2))
                return e + i;
            o || (o = s * (.3 * 1.5)),
            n || (n = 1);
            var r = 0;
            return n < Math.abs(i) ? (n = i,
            r = o / 4) : r = o / (2 * Math.PI) * Math.asin(i / n),
            1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - r) * (2 * Math.PI) / o)) + e : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - r) * (2 * Math.PI) / o) * .5 + i + e
        }
        ,
        t._dict = {
            linear: t.Linear,
            quadin: t.QuadIn,
            quadout: t.QuadOut,
            quadinout: t.QuadInOut,
            cubicin: t.CubicIn,
            cubicout: t.CubicOut,
            cubicinout: t.CubicInOut,
            easein: t.EaseIn,
            easeout: t.EaseOut,
            easeinout: t.EaseInOut,
            quartin: t.QuartIn,
            quartout: t.QuartOut,
            quartinout: t.QuartInOut,
            quintin: t.QuintIn,
            quintout: t.QuintOut,
            quintinout: t.QuintInOut,
            sinein: t.SineIn,
            sineout: t.SineOut,
            sineinout: t.SineInOut,
            expoin: t.ExpoIn,
            expoout: t.ExpoOut,
            expoinout: t.ExpoInOut,
            circin: t.CircIn,
            circout: t.CircOut,
            circinout: t.CircInOut,
            bouncein: t.BounceIn,
            bounceout: t.BounceOut,
            bounceinout: t.BounceInOut,
            elasticin: t.ElasticIn,
            elasticout: t.ElasticOut,
            elasticinout: t.ElasticInOut
        },
        t.EaseIn = t.CubicIn,
        t.EaseOut = t.CubicOut,
        t.EaseInOut = t.CubicInOut,
        t
    }();
    t.Ease = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i, s, n, o, r) {
            t.call(this),
            this.func = e,
            this.from = i,
            this.to = s,
            this.bounds.start = n,
            this.bounds.end = n + o,
            this.duration = o,
            this.ease = r
        }
        return __extends(e, t),
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.start = this.offset + i,
            this.bounds.end = this.offset + i + s,
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.render = function() {
            this.func(this.ease(this.parentProgress - this.bounds.start, this.from, this.to - this.from, this.duration))
        }
        ,
        e.prototype.lastRender = function() {
            this.func(this.ease(Math.min(Math.max(this.parentProgress - this.bounds.start, 0), this.duration), this.from, this.to - this.from, this.duration))
        }
        ,
        e.prototype._updateRender = function() {
            this.func(this.ease(Math.min(Math.max(this.parentProgress - this.bounds.start, 0), this.duration), this.from, this.to - this.from, this.duration))
        }
        ,
        e.prototype.destroy = function() {
            this.ease = this.from = this.to = this.func = null ,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.ATween);
    t.FunctionTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.apply(this, arguments),
            this.subrenders = new t.SortedRenderList
        }
        return __extends(i, e),
        i.prototype.add = function(t) {
            this.subrenders.contains(t) === !1 && (this.subrenders.add(t),
            this.bounds = this.subrenders.getBounds(),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length())
        }
        ,
        i.prototype.remove = function(t) {
            this.subrenders.contains(t) === !0 && (this.subrenders.remove(t),
            this.bounds = this.subrenders.getBounds(),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length())
        }
        ,
        i.prototype.clear = function() {
            this.subrenders.clear(),
            this.bounds.clear(),
            this.duration = 0
        }
        ,
        i.prototype.updateBounds = function() {
            this.subrenders.updateSorting(),
            this.bounds = this.subrenders.getBounds(),
            this.bounds.offsetIn(this.offset),
            this.duration = this.bounds.length()
        }
        ,
        i.prototype.addHTMLProperty = function(e, i, s, n, o, r, a) {
            var h = t.CSSPropertyRenderFactory.Create(e, i, s, n, o, r, a);
            return this.add(h),
            h
        }
        ,
        i.prototype.addFunction = function(e, i, s, n, o, r) {
            var a = new t.FunctionRender(e,i,s,n,o,r);
            return this.add(a),
            a
        }
        ,
        i.prototype.addRender = function(e, i, s, n, o, r) {
            var a = new t.RenderRenderable(e,i,s,n,o,r);
            return this.add(a),
            a
        }
        ,
        i.prototype.addTween = function(t) {
            t.setParent(this),
            this.add(t)
        }
        ,
        i.prototype.removeTween = function(t) {
            this.remove(t),
            t.resetParent()
        }
        ,
        i.prototype.render = function() {
            this.subrenders.renderEachTowards(this.progress)
        }
        ,
        i.prototype.lastRender = function() {
            this.subrenders.lastRenderEachTowards(this.progress)
        }
        ,
        i.prototype._updateRender = function() {
            this.subrenders.updateEachTowards(this.progress)
        }
        ,
        i.prototype.destroy = function() {
            this.subrenders.destroyContent(),
            this.subrenders.destroy(),
            this.subrenders = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.ATween);
    t.Tween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.property = t.css.name.TRANSFORM,
            this.target = i,
            this.matrix = s
        }
        return __extends(i, e),
        i.FromElement = function(e) {
            return new i(e,t.TransformMatrix.FromElement(e))
        }
        ,
        i.FromDefault = function(e) {
            return new i(e,t.TransformMatrix.FromDefault())
        }
        ,
        i.prototype.setMatrix = function(t) {
            this.matrix = t
        }
        ,
        i.prototype.translate = function(e, i, s, n, o) {
            var r = new t.VectorPropertyRender(this.matrix.t,e,i,s,n,o);
            return this.add(r),
            r
        }
        ,
        i.prototype.translateX = function(e, i, s, n, o) {
            var r = new t.PropertyRender(this.matrix.t,"x",e,i,s,n,o);
            return this.add(r),
            r
        }
        ,
        i.prototype.translateY = function(e, i, s, n, o) {
            var r = new t.PropertyRender(this.matrix.t,"y",e,i,s,n,o);
            return this.add(r),
            r
        }
        ,
        i.prototype.scale = function(e, i, s, n, o) {
            this.add(new t.PropertyRender(this.matrix,"sx",e,i,s,n,o)),
            this.add(new t.PropertyRender(this.matrix,"sy",e,i,s,n,o))
        }
        ,
        i.prototype.scaleX = function(e, i, s, n, o) {
            var r = new t.PropertyRender(this.matrix,"sx",e,i,s,n,o);
            return this.add(r),
            r
        }
        ,
        i.prototype.scaleY = function(e, i, s, n, o) {
            var r = new t.PropertyRender(this.matrix,"sy",e,i,s,n,o);
            return this.add(r),
            r
        }
        ,
        i.prototype.rotate = function(e, i, s, n, o) {
            var r = new t.PropertyRender(this.matrix,"r",e,i,s,n,o);
            return this.add(r),
            r
        }
        ,
        i.prototype.render = function() {
            e.prototype.render.call(this),
            this.target.style[this.property] = this.matrix.toString()
        }
        ,
        i.prototype.lastRender = function() {
            e.prototype.lastRender.call(this),
            this.target.style[this.property] = this.matrix.toString()
        }
        ,
        i.prototype.destroy = function() {
            this.matrix = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.Tween);
    t.HTMLMatrixTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this),
            this.target = t
        }
        return __extends(i, e),
        i.prototype._onAutoDestroy = function() {
            delete this.target._tween,
            e.prototype._onAutoDestroy.call(this)
        }
        ,
        i.GetOnceTweenFor = function(t) {
            if (t.hasOwnProperty("_tween"))
                return t._tween.removeAutoPause(),
                t._tween.makeAutoDestroy(),
                t._tween;
            var e = new i(t);
            return e.makeAutoDestroy(),
            t._tween = e
        }
        ,
        i.GetTweenFor = function(t) {
            if (t.hasOwnProperty("_tween"))
                return t._tween.removeAutoDestroy(),
                t._tween.makeAutoPause(),
                t._tween;
            var e = new i(t);
            return e.makeAutoPause(),
            t._tween = e
        }
        ,
        i.Once = function(t, e, s, n, o) {
            var r, a = i.GetOnceTweenFor(t);
            a.clear();
            for (r in e)
                a.tween(r, null , e[r], s, s + n, o);
            return a.execute(),
            a
        }
        ,
        i.To = function(t, e, s, n, o) {
            var r, a = i.GetTweenFor(t);
            a.clear();
            for (r in e)
                a.tween(r, null , e[r], s, s + n, o);
            return a.execute(),
            a
        }
        ,
        i.FromTo = function(t, e, s, n, o, r) {
            var a, h = i.GetTweenFor(t);
            h.clear();
            for (a in s)
                h.tween(a, e[a] || null , s[a], n, n + o, r);
            return h.execute(),
            h
        }
        ,
        i.Clear = function(t) {
            i.GetTweenFor(t).clear()
        }
        ,
        i.Start = function(t) {
            i.GetTweenFor(t).execute()
        }
        ,
        i.Stop = function(t) {
            i.GetTweenFor(t).stop()
        }
        ,
        i.Reverse = function(t) {
            i.GetTweenFor(t).reverse()
        }
        ,
        i.Finish = function(t) {
            i.GetTweenFor(t).finish()
        }
        ,
        i.Pause = function(t) {
            i.GetTweenFor(t).pause()
        }
        ,
        i.Resume = function(t) {
            i.GetTweenFor(t).resume()
        }
        ,
        i.Destroy = function(t) {
            i.GetTweenFor(t).destroy(),
            t._tween = void 0
        }
        ,
        i.prototype.getMatrixTween = function() {
            return null  == this.matrixTween && (this.matrixTween = t.HTMLMatrixTween.FromElement(this.target),
            this.add(this.matrixTween)),
            this.matrixTween
        }
        ,
        i.prototype.setMatrixDefault = function(e) {
            null  == this.matrixTween ? (this.matrixTween = new t.HTMLMatrixTween(this.target,e),
            this.add(this.matrixTween)) : this.matrixTween.setMatrix(e)
        }
        ,
        i.prototype.create = function(e, i, s) {
            var n = t.CSSPropertyRenderFactory.Get(e)
              , o = n.FromBlank(this.target, e, i, s);
            return this.add(o),
            o
        }
        ,
        i.prototype.tween = function(t, e, i, s, n, o) {
            return isNaN(i) === !1 ? this.tweenByNumber(t, null , e, i, s, n, o) : "string" == typeof i ? this.tweenByString(t, e, i, s, n, o) : this.tweenByData(t, e, i, s, n, o)
        }
        ,
        i.prototype.tweenByNumber = function(e, i, s, n, o, r, a) {
            var h = t.CSSPropertyRenderFactory.Get(e);
            if (void 0 !== h) {
                var l = h.FromNumberValues(this.target, e, i, s, n, o, r, a);
                return this.add(l),
                l
            }
            return this.setExtraPropByNumber(e, i, s, n, o, r, a)
        }
        ,
        i.prototype.tweenByString = function(e, i, s, n, o, r) {
            var a = t.CSSPropertyRenderFactory.Get(e);
            if (void 0 !== a) {
                var h = a.CreateFromString(this.target, e, i, s, n, o, r);
                return this.add(h),
                h
            }
            return this.setExtraPropByString(e, i, s, n, o, r)
        }
        ,
        i.prototype.tweenByData = function(e, i, s, n, o, r) {
            var a = t.CSSPropertyRenderFactory.Get(e);
            if (void 0 !== a) {
                var h = a.CreateFromData(this.target, e, i, s, n, o, r);
                return this.add(h),
                h
            }
            return this.setExtraPropByData(e, i, s, n, o, r)
        }
        ,
        i.prototype.setExtraPropByNumber = function(t, e, i, s, n, o, r) {
            if (t = t.toLowerCase(),
            "translate" == t)
                ;
            else {
                if ("translatex" == t)
                    return this.translateX(i, s, n, o, r);
                if ("translatey" == t)
                    return this.translateY(i, s, n, o, r);
                if ("scalex" == t)
                    return this.scaleX(i, s, n, o, r);
                if ("scaley" == t)
                    return this.scaleY(i, s, n, o, r);
                if ("rotate" == t)
                    return this.rotate(i, s, n, o, r)
            }
        }
        ,
        i.prototype.setExtraPropByString = function(e, i, s, n, o, r) {
            if (e = e.toLowerCase(),
            "translate" == e)
                return this.translate(t.Vector.FromString(i), t.Vector.FromString(s), n, o, r);
            if ("translatex" == e)
                return this.translateX(parseFloat(i), parseFloat(s), n, o, r);
            if ("translatey" == e)
                return this.translateY(parseFloat(i), parseFloat(s), n, o, r);
            if ("scalex" == e)
                return this.scaleX(parseFloat(i), parseFloat(s), n, o, r);
            if ("scaley" == e)
                return this.scaleY(parseFloat(i), parseFloat(s), n, o, r);
            if ("rotate" == e) {
                if (null  !== i) {
                    var a = t.StyleUtility.GetUnit(s)
                      , h = parseFloat(i);
                    "deg" == a && (h = t.MathUtility.ToRadians(h))
                } else
                    var h = null ;
                var l = t.StyleUtility.GetUnit(s)
                  , d = parseFloat(s);
                return "deg" == l && (d = t.MathUtility.ToRadians(d)),
                this.rotate(h, d, n, o, r)
            }
        }
        ,
        i.prototype.setExtraPropByData = function(t, e, i, s, n, o) {
            return t = t.toLowerCase(),
            "translate" == t ? this.translate(e, i, s, n, o) : void 0
        }
        ,
        i.prototype.translate = function(t, e, i, s, n) {
            var o = this.getMatrixTween()
              , r = o.translate(t, e, i, s, n);
            return this.updateBounds(),
            r
        }
        ,
        i.prototype.translateX = function(t, e, i, s, n) {
            var o = this.getMatrixTween()
              , r = o.translateX(t, e, i, s, n);
            return this.updateBounds(),
            r
        }
        ,
        i.prototype.translateY = function(t, e, i, s, n) {
            var o = this.getMatrixTween()
              , r = o.translateY(t, e, i, s, n);
            return this.updateBounds(),
            r
        }
        ,
        i.prototype.scaleX = function(t, e, i, s, n) {
            var o = this.getMatrixTween()
              , r = o.scaleX(t, e, i, s, n);
            return this.updateBounds(),
            r
        }
        ,
        i.prototype.scaleY = function(t, e, i, s, n) {
            var o = this.getMatrixTween()
              , r = o.scaleY(t, e, i, s, n);
            return this.updateBounds(),
            r
        }
        ,
        i.prototype.rotate = function(t, e, i, s, n) {
            var o = this.getMatrixTween()
              , r = o.rotate(t, e, i, s, n);
            return this.updateBounds(),
            r
        }
        ,
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.target = null 
        }
        ,
        i
    }(t.Tween);
    t.HTMLTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e) {
            t.call(this),
            this.point = e
        }
        return __extends(e, t),
        e.prototype.destroy = function() {
            this.point = null ,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.Tween);
    t.PointTween = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i, s, n, o, r) {
            t.call(this),
            this.target = e,
            this.from = i,
            this.to = s,
            this.bounds.start = n,
            this.bounds.end = n + o,
            this.duration = o,
            this.ease = r
        }
        return __extends(e, t),
        e.prototype.set = function(t, e, i, s) {
            this.from = t,
            this.to = e,
            this.bounds.start = this.offset + i,
            this.bounds.end = this.offset + i + s,
            this.duration = s
        }
        ,
        e.prototype.change = function(t, e) {
            this.from = t,
            this.to = e
        }
        ,
        e.prototype.render = function() {
            this.target.setProgress(this.ease(this.parentProgress - this.bounds.start, this.from, this.to - this.from, this.duration))
        }
        ,
        e.prototype.lastRender = function() {
            this.target.setProgressLast(this.ease(Math.min(Math.max(this.parentProgress - this.bounds.start, 0), this.duration), this.from, this.to - this.from, this.duration))
        }
        ,
        e.prototype._updateRender = function() {
            this.target.updateProgress(this.ease(Math.min(Math.max(this.parentProgress - this.bounds.start, 0), this.duration), this.from, this.to - this.from, this.duration))
        }
        ,
        e.prototype.destroy = function() {
            this.ease = this.from = this.to = this.func = null ,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(t.ATween);
    t.TweenRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this, i.a, i.r),
            this.bounds = new t.Range(n,n + o),
            this.from = i,
            this.to = s
        }
        return __extends(i, e),
        i.prototype.morphTo = function(t) {
            this.from = this.clone(),
            this.to = t
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (t - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.updateProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (this.progress - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.destroy = function() {
            this.from = this.to = this.bounds = null 
        }
        ,
        i
    }(t.Circle);
    t.CircleMorphRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this, i.a.clone(), i.aC.clone(), i.bC.clone(), i.b.clone()),
            this.bounds = new t.Range(n,n + o),
            this.from = i,
            this.to = s
        }
        return __extends(i, e),
        i.prototype.morphTo = function(t) {
            this.from = this.clone(),
            this.to = t
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (t - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.updateProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (this.progress - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.destroy = function() {
            this.from = this.to = this.bounds = null 
        }
        ,
        i
    }(t.CubicBezier);
    t.CubicBezierMorphRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o, r) {
            e.call(this, i.a.clone(), i.s.clone()),
            this.bounds = new t.Range(n,n + o),
            this.from = i,
            this.to = s,
            this.ease = r
        }
        return __extends(i, e),
        i.prototype.morphTo = function(t) {
            this.from = this.clone(),
            this.to = t
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        i.prototype.updateProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        i.prototype.destroy = function() {
            this.from = this.to = this.bounds = null 
        }
        ,
        i
    }(t.Rectangle);
    t.RectangleMorphRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this, i.a, i.s, i.radiusTL, i.radiusTR, i.radiusBL, i.radiusBR),
            this.bounds = new t.Range(n,n + o),
            this.from = i,
            this.to = s
        }
        return __extends(i, e),
        i.prototype.morphTo = function(t) {
            this.from = this.clone(),
            this.to = t
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (t - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.updateProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (this.progress - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.destroy = function() {
            this.from = this.to = this.bounds = null 
        }
        ,
        i
    }(t.RoundedRectangleFlex);
    t.RoundedRectangleFlexMorphRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this, i.a, i.s, i.r),
            this.bounds = new t.Range(n,n + o),
            this.from = i,
            this.to = s
        }
        return __extends(i, e),
        i.prototype.morphTo = function(t) {
            this.from = this.clone(),
            this.to = t
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (t - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.updateProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, (this.progress - this.bounds.start) / this.bounds.length())
        }
        ,
        i.prototype.destroy = function() {
            this.from = this.to = this.bounds = null 
        }
        ,
        i
    }(t.RoundedRectangle);
    t.RoundedRectangleMorphRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o, r) {
            e.call(this, i.x, i.y),
            this.bounds = new t.Range(n,n + o),
            this.from = i,
            this.to = s,
            this.ease = r
        }
        return __extends(i, e),
        i.prototype.morphTo = function(t) {
            this.from = this.clone(),
            this.to = t
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.setProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        i.prototype.updateProgress = function(t) {
            t = this.bounds.limitValue(t),
            this.progress = t,
            this.lerpCopy(this.from, this.to, this.ease(t - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        i.prototype.update = function() {
            this.lerpCopy(this.from, this.to, this.ease(this.progress - this.bounds.start, 0, 1, this.bounds.end - this.bounds.start))
        }
        ,
        i.prototype.destroy = function() {
            this.from = this.to = this.bounds = null 
        }
        ,
        i
    }(t.Vector);
    t.VectorMorphRender = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.AttachCSSPropertyRenderDictionary = function(e) {
            return e.width = e.height = e.minWidth = e.minHeight = e.maxWidth = e.maxHeight = e.left = e.right = e.top = e.bottom = e.margin = e.marginLeft = e.marginRight = e.marginTop = e.marginBottom = e.padding = e.paddingLeft = e.paddingRight = e.paddingTop = e.paddingBottom = e.fontSize = e.fontKerning = e.textJustify = e.wordSpacing = e.textIndent = e.lineHeight = e.letterSpacing = e.borderLeftWidth = e.borderRightWidth = e.borderTopWidth = e.borderBottomWidth = e.borderWidth = t.CSSPropertyWithUnitRender,
            e.perspective = t.CSSAdvPropertyWithUnitRender,
            e.opacity = t.CSSOpacityPropertyRender,
            e.transform = t.CSSTransformPropertyRender,
            e.transformOrigin = t.CSSVectorWithUnitPropertyRender,
            e.color = e.borderColor = e.backgroundColor = t.CSSColorPropertyRender,
            e
        }
        ,
        e.AttachSVGPropertyRenderDictionary = function(e) {
            return e.x = e.y = e.cx = e.cy = t.NSPropertyRender,
            e.width = e.height = e["stroke-width"] = t.CSSPropertyWithUnitRender,
            e["stroke-dashoffset"] = t.CSSPropertyRender,
            e.color = e.stroke = e.fill = t.CSSColorPropertyRender,
            e.opacity = e["stroke-opacity"] = e["fill-opacity"] = t.CSSOpacityPropertyRender,
            e
        }
        ,
        e
    }();
    t.PropertyRenderFactory = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Get = function(t) {
            return this._[t]
        }
        ,
        e.CreateFromData = function(t, e, i, s, n, o, r) {
            return void 0 === this._[e] ? null  : this._[e].FromDataValues(t, e, i, s, n, o, r)
        }
        ,
        e.CreateFromNumber = function(t, e, i, s, n, o, r, a) {
            return void 0 === this._[e] ? null  : this._[e].FromNumberValues(t, e, i, s, n, o, r, a)
        }
        ,
        e.CreateFromString = function(t, e, i, s, n, o, r) {
            return void 0 === this._[e] ? null  : this._[e].FromStringValues(t, e, i, s, n, o, r)
        }
        ,
        e.Create = function(t, i, s, n, o, r, a) {
            return isNaN(n) === !1 ? e.CreateFromNumber(t, i, null , s, n, o, r, a) : "string" == typeof n ? e.CreateFromString(t, i, s, n, o, r, a) : e.CreateFromData(t, i, s, n, o, r, a)
        }
        ,
        e._ = t.PropertyRenderFactory.AttachCSSPropertyRenderDictionary({}),
        e
    }();
    t.CSSPropertyRenderFactory = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Get = function(t) {
            return this._[t]
        }
        ,
        e._ = t.PropertyRenderFactory.AttachSVGPropertyRenderDictionary({}),
        e
    }();
    t.SVGPropertyRenderFactory = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(t, e, i) {
            void 0 === i && (i = !1),
            this.preventDefaultTouch = !1,
            this.dX = 0,
            this.dY = 0,
            this.hasParent = !1,
            this.isMouse = !1,
            this.destroy = this.__default_destroy,
            this.removeCurrentDetection = this._none,
            this.removeCurrentInteraction = this._none,
            this.mouseStartHandlerBind = this.mouseStartHandler.bind(this),
            this.touchStartHandlerBind = this.touchStartHandler.bind(this),
            this.mouseMoveHandlerBind = this.mouseMoveHandler.bind(this),
            this.touchMoveHandlerBind = this.touchMoveHandler.bind(this),
            this.mouseEndHandlerBind = this.mouseEndHandler.bind(this),
            this.touchEndHandlerBind = this.touchEndHandler.bind(this),
            this.target = t,
            this.hasParent = i,
            this.eventHandler = e,
            this._mouseTarget = window,
            this._touchTarget = this.target
        }
        return e.prototype._none = function(t) {}
        ,
        e.prototype.setStateToDefault = function() {
            this.destroy = this.__default_destroy
        }
        ,
        e.prototype.setStateToInitialized = function() {
            this.destroy = this.__isInit_destroy
        }
        ,
        e.prototype.enable = function() {
            this.enabled !== !0 && (this.enabled = !0,
            this.target.addEventListener("mousedown", this.mouseStartHandlerBind),
            this.target.addEventListener("touchstart", this.touchStartHandlerBind),
            this.eventHandler._enable(),
            this.setStateToInitialized())
        }
        ,
        e.prototype.disable = function() {
            this.enabled !== !1 && (this.enabled = !1,
            this.removeCurrentInteraction(),
            this.removeCurrentDetection(),
            this.target.style.cursor = null ,
            this.target.removeEventListener("mousedown", this.mouseStartHandlerBind),
            this.target.removeEventListener("touchstart", this.touchStartHandlerBind),
            this.eventHandler._disable(),
            this.setStateToDefault())
        }
        ,
        e.prototype.stopMovement = function() {
            this.removeCurrentDetection(),
            this.removeCurrentInteraction(),
            this.eventHandler._stopMovement()
        }
        ,
        e.prototype.mouseStartHandler = function(e) {
            return t.MouseUtility.IsRightClick(e) !== !0 ? (this.stopMovement(),
            this.pointerStartX = e.clientX,
            this.pointerStartY = e.clientY,
            this.removeCurrentDetection(),
            this.removeCurrentDetection = this.mouseEndHandlerBind,
            this._mouseTarget.addEventListener("mousemove", this.mouseMoveHandlerBind),
            this._mouseTarget.addEventListener("mouseup", this.mouseEndHandlerBind),
            this.hasParent === !1 ? e.stopPropagation() : void 0) : void 0
        }
        ,
        e.prototype.touchStartHandler = function(t) {
            return 1 === t.targetTouches.length && (this.stopMovement(),
            this.pointerStartX = t.targetTouches[0].screenX,
            this.pointerStartY = t.targetTouches[0].screenY,
            this.removeCurrentDetection(),
            this.removeCurrentDetection = this.touchEndHandlerBind,
            this._touchTarget.addEventListener("touchmove", this.touchMoveHandlerBind),
            this._touchTarget.addEventListener("touchend", this.touchEndHandlerBind),
            this.hasParent === !1) ? t.stopPropagation() : void 0
        }
        ,
        e.prototype.mouseMoveHandler = function(t) {
            return this.dX = t.clientX - this.pointerStartX,
            this.dY = t.clientY - this.pointerStartY,
            this.currentTarget = this._mouseTarget,
            this._pointerMoveHandler("mousemove", "mouseup", !0),
            t.preventDefault(),
            this.hasParent === !1 ? t.stopPropagation() : void 0
        }
        ,
        e.prototype.touchMoveHandler = function(t) {
            return 1 === t.targetTouches.length && (this.dX = t.targetTouches[0].screenX - this.pointerStartX,
            this.dY = t.targetTouches[0].screenY - this.pointerStartY,
            this.currentTarget = this._touchTarget,
            this._pointerMoveHandler("touchmove", "touchend", !1),
            this.preventDefaultTouch === !0 && t.preventDefault(),
            this.hasParent === !1) ? t.stopPropagation() : void 0
        }
        ,
        e.prototype.mouseEndHandler = function(t) {
            return this.isMouse = !1,
            this._mouseTarget.removeEventListener("mousemove", this.mouseMoveHandlerBind),
            this._mouseTarget.removeEventListener("mouseend", this.mouseEndHandlerBind),
            this.removeCurrentDetection = this._none,
            void 0 !== t && this.hasParent === !1 ? t.stopPropagation() : void 0
        }
        ,
        e.prototype.touchEndHandler = function(t) {
            return this._touchTarget.removeEventListener("touchmove", this.touchMoveHandlerBind),
            this._touchTarget.removeEventListener("touchend", this.touchEndHandlerBind),
            this.removeCurrentDetection = this._none,
            void 0 !== t && this.hasParent === !1 ? t.stopPropagation() : void 0
        }
        ,
        e.prototype._pointerMoveHandler = function(t, e, i) {}
        ,
        e.prototype.__default_destroy = function() {
            this.target = this.hasParent = this.eventHandler = this._mouseTarget = this._touchTarget = null 
        }
        ,
        e.prototype.__isInit_destroy = function() {
            this.disable(),
            this.__default_destroy()
        }
        ,
        e
    }();
    t.ATouchListener = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i, s, n, o) {
            void 0 === o && (o = !1),
            t.call(this, e, i, o),
            this.handleDragOnXBind = this.handleDragOnX.bind(this),
            this.onHandleDragOnXEndBind = this.onHandleDragOnXEnd.bind(this),
            this.handleDragOnYBind = this.handleDragOnY.bind(this),
            this.onHandleDragOnYEndBind = this.onHandleDragOnYEnd.bind(this),
            this.onClickPreventHandlerBind = this.onClickPreventHandler.bind(this),
            this.removeClickPreventBind = this.removeClickPrevent.bind(this),
            this.xAllowed = s,
            this.yAllowed = n
        }
        return __extends(e, t),
        e.prototype._pointerMoveHandler = function(t, e, i) {
            var s = Math.abs(this.dX)
              , n = Math.abs(this.dY)
              , o = Math.max(s, n)
              , r = 5;
            o > r && (this.removeCurrentDetection(),
            this.removeCurrentInteraction(),
            s > n ? this.xAllowed === !0 && (this.currentMoveEvent = t,
            this.currentEndEvent = e,
            this.removeCurrentInteraction = this.onHandleDragOnXEndBind,
            this.isMouse = i,
            this.eventHandler.onDragStartX(),
            this.currentTarget.addEventListener(t, this.handleDragOnXBind),
            this.currentTarget.addEventListener(e, this.onHandleDragOnXEndBind),
            this.currentTarget.addEventListener("click", this.onClickPreventHandlerBind, !0)) : this.yAllowed === !0 && (this.currentMoveEvent = t,
            this.currentEndEvent = e,
            this.removeCurrentInteraction = this.onHandleDragOnYEndBind,
            this.isMouse = i,
            this.eventHandler.onDragStartY(),
            this.currentTarget.addEventListener(t, this.handleDragOnYBind),
            this.currentTarget.addEventListener(e, this.onHandleDragOnYEndBind),
            this.currentTarget.addEventListener("click", this.onClickPreventHandlerBind, !0)))
        }
        ,
        e.prototype.handleDragOnX = function(t) {
            return this.isMouse === !0 || !this.isMouse && 1 == t.targetTouches.length ? (this.dX = (this.isMouse === !0 ? t.clientX : t.targetTouches[0].clientX) - this.pointerStartX,
            this.eventHandler.onDragMoveX(this.dX),
            t.preventDefault(),
            t.stopPropagation()) : void 0
        }
        ,
        e.prototype.onHandleDragOnXEnd = function(t) {
            return this.currentTarget.removeEventListener(this.currentMoveEvent, this.handleDragOnXBind),
            this.currentTarget.removeEventListener(this.currentEndEvent, this.onHandleDragOnXEndBind),
            setTimeout(this.removeClickPreventBind, 0),
            this.removeCurrentInteraction = this._none,
            this.eventHandler.onDragEndX(),
            void 0 !== t && (t.preventDefault(),
            this.hasParent === !1) ? t.stopPropagation() : void 0
        }
        ,
        e.prototype.handleDragOnY = function(t) {
            return this.isMouse === !0 || !this.isMouse && 1 == t.touches.length ? (this.dY = (this.isMouse === !0 ? t.clientY : t.targetTouches[0].screenY) - this.pointerStartY,
            this.eventHandler.onDragMoveY(this.dY),
            t.preventDefault(),
            t.stopPropagation()) : void 0
        }
        ,
        e.prototype.onHandleDragOnYEnd = function(t) {
            return this.currentTarget.removeEventListener(this.currentMoveEvent, this.handleDragOnYBind),
            this.currentTarget.removeEventListener(this.currentEndEvent, this.onHandleDragOnYEndBind),
            setTimeout(this.removeClickPreventBind, 0),
            this.removeCurrentInteraction = this._none,
            this.eventHandler.onDragEndY(),
            void 0 !== t && (t.preventDefault(),
            this.hasParent === !1) ? t.stopPropagation() : void 0
        }
        ,
        e.prototype.onClickPreventHandler = function(t) {
            return t.preventDefault(),
            t.stopPropagation()
        }
        ,
        e.prototype.removeClickPrevent = function() {
            this.currentTarget.removeEventListener("click", this.onClickPreventHandlerBind, !0)
        }
        ,
        e
    }(t.ATouchListener);
    t.DirectionalTouchListener = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(i, s, n, o) {
            this.wheelDelta = 0,
            this.deltaVelocity = e._DefaultDeltaVelocity,
            this.lastDeltaDirection = 0,
            this.onMouseWheelYHandlerBind = this.onMouseWheelYHandler.bind(this),
            this.onMouseWheelTimerHandlerBind = this.onMouseWheelTimerHandler.bind(this),
            this.target = i,
            this.xAllowed = n,
            this.yAllowed = o,
            this.maneuverHandler = s,
            this.onWheelYLimited = t.TimerUtility.CreateLimitedCallFunction(this.maneuverHandler.onWheelY, 100, this.maneuverHandler)
        }
        return e.prototype.enable = function() {
            this.enabled !== !0 && (this.enabled = !0,
            this.yAllowed === !0 && (void 0 === this.wheelEvent && (this.wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"),
            this.target.addEventListener(this.wheelEvent, this.onMouseWheelYHandlerBind)))
        }
        ,
        e.prototype.disable = function() {
            this.enabled !== !1 && (this.enabled = !1,
            this.yAllowed === !0 && this.target.removeEventListener(this.wheelEvent, this.onMouseWheelYHandlerBind))
        }
        ,
        e.prototype.onMouseWheelYHandler = function(e) {
            var i = void 0 != e.deltaY ? e.deltaY : -1 * e.wheelDelta;
            if (i *= t.DeviceInfo.IsFireFox === !0 && Math.abs(i) >= 1 ? .32 : .04,
            Math.abs(i) < .1 && (this.isTrackPad = !0),
            0 !== i) {
                if (this.isTrackPad === !1) {
                    var s = Math.abs(i)
                      , n = i > 0 ? 1 : -1;
                    n != this.lastDeltaDirection && (this.deltaVelocity = .5 * this.deltaVelocity),
                    this.lastDeltaDirection = n,
                    this.deltaVelocity += .125 * (Math.max(s - .5, 0) - this.deltaVelocity),
                    i = n * (Math.min(s, .5) + this.deltaVelocity)
                }
                return i = Math.min(Math.max(i, -4), 4),
                this.maneuverHandler.onWheelY(i, this.isTrackPad),
                window.clearInterval(this.mouseWheelTimerInstance),
                this.mouseWheelTimerInstance = setInterval(this.onMouseWheelTimerHandlerBind, this.isTrackPad === !0 ? 1e3 : 200),
                e.preventDefault(),
                e.stopPropagation()
            }
            this.onMouseWheelTimerHandler()
        }
        ,
        e.prototype.onMouseWheelTimerHandler = function() {
            window.clearInterval(this.mouseWheelTimerInstance),
            this.isTrackPad = !1,
            this.deltaVelocity = e._DefaultDeltaVelocity,
            this.maneuverHandler.onWheelYEnd()
        }
        ,
        e.prototype.destroy = function() {
            this.disable(),
            this.target = this.maneuverHandler = this.onWheelYLimited = this.mouseWheelTimerInstance = null 
        }
        ,
        e._DefaultDeltaVelocity = 0,
        e
    }();
    t.MouseWheelListener = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e, i, s, n) {
            void 0 === i && (i = !1),
            void 0 === s && (s = !0),
            this.enabled = !1,
            this.onKeyDownHandlerBind = this.onKeyDownHandler.bind(this),
            this.target = t,
            this.xAllowed = i,
            this.yAllowed = s,
            this.invertX = n,
            this.maneuverHandler = e
        }
        return t.prototype.enable = function() {
            this.enabled !== !0 && (this.enabled = !0,
            window.addEventListener("keydown", this.onKeyDownHandlerBind))
        }
        ,
        t.prototype.disable = function() {
            this.enabled !== !1 && (this.enabled = !1,
            window.removeEventListener("keydown", this.onKeyDownHandlerBind))
        }
        ,
        t.prototype.onKeyDownHandler = function(t) {
            switch (t.keyCode) {
            case 38:
                if (this.yAllowed === !0)
                    return t.metaKey === !0 ? this.maneuverHandler.moveToHome() : this.maneuverHandler.moveUp(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 40:
                if (this.yAllowed === !0)
                    return t.metaKey === !0 ? this.maneuverHandler.moveToEnd() : this.maneuverHandler.moveDown(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 37:
                if (this.xAllowed === !0)
                    return this.invertX === !0 ? this.maneuverHandler.movePageRight() : this.maneuverHandler.movePageLeft(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 39:
                if (this.xAllowed === !0)
                    return this.invertX === !0 ? this.maneuverHandler.movePageLeft() : this.maneuverHandler.movePageRight(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 33:
                if (this.yAllowed === !0)
                    return this.maneuverHandler.movePageUp(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 32:
            case 34:
                if (this.yAllowed === !0)
                    return this.maneuverHandler.movePageDown(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 36:
                if (this.yAllowed === !0)
                    return this.maneuverHandler.moveToHome(),
                    t.preventDefault(),
                    t.stopPropagation();
                break;
            case 35:
                if (this.yAllowed === !0)
                    return this.maneuverHandler.moveToEnd(),
                    t.preventDefault(),
                    t.stopPropagation()
            }
        }
        ,
        t.prototype.destroy = function() {
            this.disable(),
            this.onKeyDownHandlerBind = null 
        }
        ,
        t
    }();
    t.ViewportKeyboardListener = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s) {
            e.call(this),
            this.movementAspect = 1,
            this.getSnapPositionX = this.noSnapFunction,
            this.getSnapPositionY = this.noSnapFunction,
            this._lastDistX = 0,
            this._lastDistY = 0,
            this.currentPosition = new t.Vector(0,0),
            this._handlePositionOnMove = i.NoPositionHandling,
            this._handlePositionOnEnd = i.NoPositionHandling,
            this._interactionStartEvent = {
                type: t.ViewportManeuverEvent.INTERACTION_START,
                target: this
            },
            this._interactionEndEvent = {
                type: t.ViewportManeuverEvent.INTERACTION_STOP,
                target: this
            },
            this.onActivityEndBind = this.onActivityEnd.bind(this),
            this.onPositionChange = i.noneFunction,
            this.onTweenXBind = this.onTweenX.bind(this),
            this.onTweenYBind = this.onTweenY.bind(this),
            this.setAndStorePositionXBind = this.setPositionX.bind(this),
            this.setAndStorePositionYBind = this.setPositionY.bind(this),
            this.verticalMovement = .25,
            this.horizontalMovement = .25,
            this.setProgressBind = this.setProgress.bind(this),
            this.viewport = s
        }
        return __extends(i, e),
        i.noneFunction = function() {}
        ,
        i.prototype.setSnapHandlerX = function(t) {
            this.getSnapPositionX = t
        }
        ,
        i.prototype.setSnapHandlerY = function(t) {
            this.getSnapPositionY = t
        }
        ,
        i.prototype.noSnapFunction = function(t, e, i) {
            return t
        }
        ,
        i.prototype.snapWithinLimitX = function(t) {
            return Math.round(this._xLimit.limitValue(t))
        }
        ,
        i.prototype.snapWithinLimitY = function(t) {
            return Math.round(this._yLimit.limitValue(t))
        }
        ,
        i.prototype.onInteractionEnd = function() {
            this.dispatchEvent(this._interactionEndEvent)
        }
        ,
        i.prototype.onInteractionStart = function() {
            this.dispatchEvent(this._interactionStartEvent)
        }
        ,
        i.prototype.onActivityEnd = function() {
            this.stopAllMovement(),
            this.dispatchEvent(this._interactionEndEvent)
        }
        ,
        i.prototype._enable = function() {
            var e = this.viewport.getHeight();
            if (!t.NumberUtility.IsNumeric(e) || !t.NumberUtility.IsNumeric(e))
                throw new TypeError("The height or width on the viewport is either null, NaN or infinity.")
        }
        ,
        i.prototype._disable = function() {}
        ,
        i.prototype.getDirection = function() {
            return this._lastDistY > 0 ? 1 : this._lastDistY < 0 ? -1 : 0
        }
        ,
        i.prototype._stopMovement = function() {
            void 0 !== this._tween && this.stopAllMovement()
        }
        ,
        i.prototype.startTween = function(e, i, s, n, o, r) {
            this.stopAllMovement(),
            this._moveToTween = new t.FunctionTween(e,i,s,0,n,o),
            r === !0 && this._moveToTween.addEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._moveToTween.execute()
        }
        ,
        i.prototype.stopAllMovement = function() {
            void 0 !== this._tween && (this._tween.removeEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._tween.destroy(),
            this._tween = void 0,
            void 0 === this._moveToTween && this.onPositionChange(this.currentPosition)),
            void 0 !== this._moveToTween && (this._moveToTween.removeEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._moveToTween.destroy(),
            this._moveToTween = void 0,
            this.onPositionChange(this.currentPosition))
        }
        ,
        i.prototype.stopTween = function() {
            void 0 !== this._moveToTween && (this._moveToTween.removeEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._moveToTween.destroy(),
            this._moveToTween = void 0,
            this.onPositionChange(this.currentPosition))
        }
        ,
        i.prototype.stopDynamics = function() {
            void 0 !== this._tween && (this._tween.removeEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._tween.destroy(),
            this._tween = void 0,
            this.onPositionChange(this.currentPosition))
        }
        ,
        i.prototype.throwXWithVelocity = function(e, i) {
            return this.stopTween(),
            i === !0 ? (this.stopDynamics(),
            this.currentPosition.x = this._handlePositionOnEnd(this.currentPosition.x + e, this._xLimit),
            void this.viewport.setPositionX(this.currentPosition.x)) : (void 0 === this._tween && (this._tween = new t.VelocityFunctionTween(this.onTweenXBind,.4),
            this._tween.addEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._tween.setCurrent(this.currentPosition.x)),
            void this._tween.setVelocity(e))
        }
        ,
        i.prototype.onTweenX = function(t) {
            t = this._handlePositionOnMove(t, this._xLimit),
            this.currentPosition.x = t,
            this.viewport.setPositionX(t)
        }
        ,
        i.prototype.throwYWithVelocity = function(e, i) {
            return this.stopTween(),
            i === !0 ? (this.stopDynamics(),
            this.currentPosition.y = this._handlePositionOnEnd(this.currentPosition.y + e, this._yLimit),
            void this.viewport.setPositionY(this.currentPosition.y)) : (void 0 === this._tween && (this._tween = new t.VelocityFunctionTween(this.onTweenYBind,.3),
            this._tween.addEventListener(t.TaskEvent.COMPLETE, this.onActivityEndBind),
            this._tween.setCurrent(this.currentPosition.y)),
            void this._tween.setVelocity(e))
        }
        ,
        i.prototype.onTweenY = function(t) {
            t = this._handlePositionOnMove(t, this._yLimit),
            this.currentPosition.y = t,
            this.viewport.setPositionY(t)
        }
        ,
        i.prototype.onDragStartX = function() {
            this.stopAllMovement(),
            this.onInteractionStart(),
            this.startPosition = this.viewport.getPosition(),
            this.currentPosition.x = this.startPosition.x,
            this.currentPosition.y = this.startPosition.y,
            this.lastMoveTime = performance.now()
        }
        ,
        i.prototype.onDragMoveX = function(t) {
            var e = this._handlePositionOnMove(this.startPosition.x + t * this.movementAspect, this._xLimit);
            this._lastDistX = e - this.currentPosition.x,
            this.currentPosition.x = e,
            this.viewport.setPositionX(this.currentPosition.x),
            this.lastMoveTime = performance.now()
        }
        ,
        i.prototype.onDragEndX = function() {
            var e = performance.now() - this.lastMoveTime;
            e = t.MathUtility.Limit(e, 20, 80),
            this.lastMoveTime = null ;
            var i = this._lastDistX * (.01 * e)
              , s = Math.round(this.currentPosition.x)
              , n = this.getSnapPositionX(s, 16 * i, 0);
            if (n = this._handlePositionOnEnd(n, this._xLimit),
            s != n) {
                var o = 1e3 * Math.abs((n - this.currentPosition.x) / this.viewport.getHeight());
                o += t.MathUtility.Limit(o * (.5 * e), 0, 1e3),
                this.startTween(this.setAndStorePositionXBind, this.currentPosition.x, n, o, Math.abs(n - this.currentPosition.x + this._lastDistX) > Math.abs(n - this.currentPosition.x) ? t.Ease.CubicOut : t.Ease.QuadInOut, !0)
            } else
                Math.abs(i) > .1 ? (this.onPositionChange(new t.Vector(s,this.currentPosition.y)),
                this.throwXWithVelocity(i)) : this.onPositionChange(this.currentPosition);
            this.onInteractionEnd()
        }
        ,
        i.prototype.setPositionX = function(t) {
            this.currentPosition.x = t,
            this.viewport.setPositionX(t)
        }
        ,
        i.prototype.onDragStartY = function() {
            this.stopAllMovement(),
            this.onInteractionStart(),
            this.startPosition = this.viewport.getPosition(),
            this.currentPosition.x = this.startPosition.x,
            this.currentPosition.y = this.startPosition.y,
            this.lastMoveTime = performance.now()
        }
        ,
        i.prototype.onDragMoveY = function(t) {
            var e = this._handlePositionOnMove(this.startPosition.y + t * this.movementAspect, this._yLimit);
            this._lastDistY = e - this.currentPosition.y,
            this.currentPosition.y = e,
            this.viewport.setPositionY(this.currentPosition.y),
            this.lastMoveTime = performance.now()
        }
        ,
        i.prototype.onDragEndY = function() {
            var e = performance.now() - this.lastMoveTime;
            e = t.MathUtility.Limit(e, 20, 80),
            this.lastMoveTime = null ;
            var i = this._lastDistY * (.01 * e)
              , s = Math.round(this.currentPosition.y)
              , n = this.getSnapPositionY(s, 16 * i, 0);
            if (n = this._handlePositionOnEnd(n, this._yLimit),
            s != n) {
                var o = 1e3 * Math.abs((n - this.currentPosition.y) / this.viewport.getHeight());
                o += t.MathUtility.Limit(o * (.5 * e), 0, 1e3),
                this.startTween(this.setAndStorePositionYBind, this.currentPosition.y, n, o, Math.abs(n - this.currentPosition.y + this._lastDistY) > Math.abs(n - this.currentPosition.y) ? t.Ease.CubicOut : t.Ease.QuadInOut, !0)
            } else
                Math.abs(i) > .1 ? (this.onPositionChange(new t.Vector(this.currentPosition.x,s)),
                this.throwYWithVelocity(i)) : this.onPositionChange(this.currentPosition);
            this.onInteractionEnd()
        }
        ,
        i.prototype.setPositionY = function(t) {
            this.currentPosition.y = t,
            this.viewport.setPositionY(t)
        }
        ,
        i.prototype.onWheelY = function(t, e) {
            this.stopAllMovement(),
            this.onInteractionStart(),
            this.startPosition = this.viewport.getPosition(),
            this.currentPosition.x = this.startPosition.x,
            this.currentPosition.y = this.startPosition.y,
            this._lastDistY = Math.min(Math.max(10 * -t, .5 * -this.viewport.getHeight()), .5 * this.viewport.getHeight()) * this.movementAspect,
            this.throwYWithVelocity(this._lastDistY, e),
            this.lastMoveTime = performance.now()
        }
        ,
        i.prototype.onWheelYEnd = function() {
            this.onInteractionEnd(),
            this.triggerSnapY()
        }
        ,
        i.prototype.triggerSnapX = function() {
            this.moveToX(this.currentPosition.x, 0, 0)
        }
        ,
        i.prototype.triggerSnapY = function() {
            this.moveToY(this.currentPosition.y, 0, 0)
        }
        ,
        i.prototype.setPageMovementH = function(t) {
            this.horizontalMovement = t
        }
        ,
        i.prototype.setPageMovementV = function(t) {
            this.verticalMovement = t
        }
        ,
        i.prototype.movePageLeft = function() {
            var t = this.viewport.getWidth() * this.horizontalMovement
              , e = t + this.currentPosition.x;
            if (e > this._xLimit.start && e < this._xLimit.end) {
                var i = this.getSnapPositionX(e, .5 * t, 1);
                i != e ? this.moveToX(i, .1 * t, 1) : this.throwXWithVelocity(.05 * t, !1)
            } else
                this.moveToX(this.currentPosition.x + t, .1 * t, 1)
        }
        ,
        i.prototype.movePageRight = function() {
            var t = -this.viewport.getWidth() * this.horizontalMovement
              , e = t + this.currentPosition.x;
            if (e > this._xLimit.start && e < this._xLimit.end) {
                var i = this.getSnapPositionX(e, .5 * t, -1);
                i != e ? this.moveToX(i, .1 * t, -1) : this.throwXWithVelocity(.05 * t, !1)
            } else
                this.moveToX(this.currentPosition.x + t, .1 * t, -1)
        }
        ,
        i.prototype.moveToIndexX = function(t) {
            this.moveToX(-this.viewport.getWidth() * t, 0, 0)
        }
        ,
        i.prototype.moveUp = function() {
            var t = this.viewport.getHeight() * this.verticalMovement
              , e = t + this.currentPosition.y;
            if (e > this._yLimit.start && e < this._yLimit.end) {
                var i = this.getSnapPositionY(e, .5 * t, 1);
                i != e ? this.moveToY(i, .1 * t, 1) : this.throwYWithVelocity(.05 * t, !1)
            } else
                this.moveToY(this.currentPosition.y + t, .1 * t, 1)
        }
        ,
        i.prototype.moveDown = function() {
            var t = -this.viewport.getHeight() * this.verticalMovement
              , e = t + this.currentPosition.y;
            if (e > this._yLimit.start && e < this._yLimit.end) {
                var i = this.getSnapPositionY(e, .5 * t, -1);
                i != e ? this.moveToY(i, .1 * t, -1) : this.throwYWithVelocity(.05 * t, !1)
            } else
                this.moveToY(this.currentPosition.y + t, .1 * t, -1)
        }
        ,
        i.prototype.movePageUp = function() {
            var t = this.viewport.getHeight();
            this.moveToY(this.currentPosition.y + t, .1 * t, 1)
        }
        ,
        i.prototype.movePageDown = function() {
            var t = this.viewport.getHeight();
            this.moveToY(this.currentPosition.y - t, t * -.1, -1)
        }
        ,
        i.prototype.moveToHome = function() {
            this.moveToY(this._yLimit.end, 0, 0)
        }
        ,
        i.prototype.moveToEnd = function() {
            this.moveToY(this._yLimit.start, 0, 0)
        }
        ,
        i.prototype.moveToX = function(e, i, s) {
            this.stopAllMovement(),
            this.onInteractionStart();
            var n = this.getSnapPositionX(e, i, s);
            if (n = this._handlePositionOnEnd(n, this._xLimit),
            n != this.currentPosition.x) {
                this.onPositionChange(new t.Vector(n,this.currentPosition.y));
                var o = 600 * Math.abs((n - this.currentPosition.x) / this.viewport.getWidth());
                o += t.MathUtility.Limit(o, 0, 1e3);
                var r = Math.abs(n - this.currentPosition.x + i) >= Math.abs(n - this.currentPosition.x)
                  , a = t.Ease.SineInOut;
                r === !1 && (a = t.Ease.CubicInOut,
                o *= 2),
                this.startTween(this.setAndStorePositionXBind, this.currentPosition.x, n, o, a, !0)
            } else if (Math.abs(n - this.currentPosition.x) > 1) {
                this.onPositionChange(new t.Vector(n,this.currentPosition.y));
                var h = Math.abs(n - this.currentPosition.x) / (.1 * this.viewport.getWidth())
                  , o = h * (20 / h);
                o *= 20,
                this.startTween(this.setAndStorePositionXBind, this.currentPosition.x, n, o, t.Ease.EaseOut, !0)
            } else
                n - this.currentPosition.x != 0 && (this.onPositionChange(new t.Vector(n,this.currentPosition.y)),
                this.setAndStorePositionXBind(Math.round(n)))
        }
        ,
        i.prototype.moveToY = function(e, i, s) {
            this.stopAllMovement(),
            this.onInteractionStart();
            var n = this.getSnapPositionY(e, i, s);
            if (n = this._handlePositionOnEnd(n, this._yLimit),
            n != this.currentPosition.y) {
                this.onPositionChange(new t.Vector(this.currentPosition.x,n));
                var o = this.viewport.getHeight()
                  , r = Math.min(100 * Math.abs((n - this.currentPosition.y) / o), o);
                r += 2 * t.MathUtility.Limit(r, 0, o),
                r += t.MathUtility.Limit(r, 0, .5 * o);
                var a = Math.abs(n - this.currentPosition.y + this._lastDistY) > Math.abs(n - this.currentPosition.y)
                  , h = t.Ease.SineInOut;
                a === !1 && (h = t.Ease.CubicInOut,
                r *= 2),
                this.startTween(this.setAndStorePositionYBind, this.currentPosition.y, n, r, h, !0)
            } else
                n - this.currentPosition.y != 0 && (this.onPositionChange(new t.Vector(this.currentPosition.x,n)),
                this.setAndStorePositionYBind(Math.round(n)))
        }
        ,
        i.prototype.jumpToX = function(e) {
            this.stopAllMovement(),
            this.onInteractionStart();
            var i = this._handlePositionOnEnd(e, this._xLimit);
            i = this.getSnapPositionX(i, 0, 0),
            i - this.currentPosition.x != 0 && (this.onPositionChange(new t.Vector(i,this.currentPosition.y)),
            this.setAndStorePositionXBind(Math.round(i)))
        }
        ,
        i.prototype.jumpToY = function(e) {
            this.stopAllMovement(),
            this.onInteractionStart();
            var i = this._handlePositionOnEnd(e, this._yLimit);
            i = this.getSnapPositionY(i, 0, 0),
            i - this.currentPosition.y != 0 && (this.onPositionChange(new t.Vector(this.currentPosition.x,i)),
            this.setAndStorePositionYBind(Math.round(i)))
        }
        ,
        i.NoPositionHandling = function(t, e) {
            return t
        }
        ,
        i.HandleShrinkPositionMin = function(t, e) {
            if (e > t) {
                var i = t - e;
                t = t - i + .35 * i
            } else
                t > 0 && (t = .35 * t);
            return t
        }
        ,
        i.HandleStrictPositionMin = function(t, e) {
            return t = e > t ? e : t,
            t = t > 0 ? 0 : t
        }
        ,
        i.HandleShrinkPosition = function(t, e) {
            if (t > e.end) {
                var i = t - e.end;
                t = e.end + .35 * i
            } else if (t < e.start) {
                var i = t - e.start;
                t = e.start + .35 * i
            }
            return t
        }
        ,
        i.HandleStrictPosition = function(t, e) {
            return t = e.limitValue(t)
        }
        ,
        i.prototype.setMovementAspect = function(t) {
            this.movementAspect = t
        }
        ,
        i.prototype.setXLimit = function(e, s) {
            this._xLimit = new t.Range(e,s),
            this._handlePositionOnMove = i.HandleShrinkPosition,
            this._handlePositionOnEnd = i.HandleStrictPosition
        }
        ,
        i.prototype.setYLimit = function(e, s) {
            this._yLimit = new t.Range(e,s),
            this._handlePositionOnMove = i.HandleShrinkPosition,
            this._handlePositionOnEnd = i.HandleStrictPosition
        }
        ,
        i.prototype.getXLimit = function() {
            return this._xLimit
        }
        ,
        i.prototype.getYLimit = function() {
            return this._yLimit
        }
        ,
        i.prototype.setStrictYLimit = function(e, s) {
            this._yLimit = new t.Range(e,s),
            this._handlePositionOnMove = i.HandleStrictPosition,
            this._handlePositionOnEnd = i.HandleStrictPosition
        }
        ,
        i.prototype.setProgress = function(t) {
            this.viewport.setPositionY(this.currentPosition.y)
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.viewport.setPositionY(Math.round(this.currentPosition.y))
        }
        ,
        i.prototype.updateProgress = function() {
            this.viewport.setPositionY(Math.round(this.currentPosition.y))
        }
        ,
        i.prototype.destroy = function() {
            this.stopTween(),
            this.stopDynamics(),
            this.getSnapPositionX = this.getSnapPositionY = this.viewport = null 
        }
        ,
        i
    }(t.EventDispatcher);
    t.ViewportManeuverHandler = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.INTERACTION_START = "start",
        t.INTERACTION_STOP = "stop",
        t
    }();
    t.ViewportManeuverEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.PLAYING = "play",
        t.PAUSED = "pause",
        t.TIME_UPDATE = "timeupdate",
        t.END = "ended",
        t
    }();
    t.VideoPlaybackEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.PLAYING = "play",
        t.PAUSED = "pause",
        t.TIME_UPDATE = "timeupdate",
        t.END = "ended",
        t.CHANGE_FULLSCREEN = "change_fullscreen",
        t.ENTER_FULLSCREEN = "enter_fullscreen",
        t.EXIT_FULLSCREEN = "exit_fullscreen",
        t
    }();
    t.VideoPlayerEvent = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e, i) {
            this.fileExt = t,
            this.type = e,
            this.codec = i
        }
        return t.prototype.toString = function() {
            return this.type + '; codecs="' + this.codec + '"'
        }
        ,
        t
    }();
    t.Codec = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Init = function() {
            for (var t, i = document.createElement("video"), s = 0; t = e._VideoTypes[s++]; )
                "undefined" != typeof i.canPlayType && ("probably" != i.canPlayType(t.toString()) && "maybe" != i.canPlayType(t.toString()) || e._SupportedVideoCodecs.push(t));
            var n = document.createElement("audio");
            for (s = 0; t = e._AudioTypes[s++]; )
                "undefined" != typeof n.canPlayType && ("probably" != n.canPlayType(t.toString()) && "maybe" != n.canPlayType(t.toString()) || e._SupportedAudioCodec.push(t))
        }
        ,
        e.GetVideoCodec = function() {
            return e._SupportedVideoCodecs[0]
        }
        ,
        e.GetAudioCodec = function() {
            return e._SupportedVideoCodecs[0]
        }
        ,
        e.GetVideoCodecFor = function(t) {
            for (var i, s, n = 0; n < t.length; ) {
                for (i = t[n],
                s = e._SupportedVideoCodecs.length; s--; )
                    if (e._SupportedVideoCodecs[s].fileExt == i)
                        return e._SupportedVideoCodecs[s];
                n++
            }
            return null 
        }
        ,
        e.GetSupportedVideo = function(i) {
            for (var s, n, o = 0; o < i.length; ) {
                for (s = t.StringUtility.GetFileExtension(i[o]),
                n = e._SupportedVideoCodecs.length; n--; )
                    if (e._SupportedVideoCodecs[n].fileExt == s)
                        return i[o];
                o++
            }
            return null 
        }
        ,
        e._VideoTypes = [new t.Codec("mp4","video/mp4","avc1.42E01E, mp4a.40.2"), new t.Codec("m4v","video/mp4","avc1.42E01E, mp4a.40.2"), new t.Codec("ogv","video/ogg","theora, vorbis"), new t.Codec("webm","video/webm","vp8, vorbis"), new t.Codec("webmv","video/webm","vp8, vorbis"), new t.Codec("3gpp","video/3gpp","mp4v.20.8, samr")],
        e._AudioTypes = [new t.Codec("mp3","audio/mpeg","mp3"), new t.Codec("m4a","audio/mp4","mp4a.40.2"), new t.Codec("ogg","audio/ogg","vorbis"), new t.Codec("oga","audio/ogg","vorbis"), new t.Codec("webma","audio/webm","vorbis"), new t.Codec("wav","audio/wav","1")],
        e._SupportedVideoCodecs = [],
        e._SupportedAudioCodec = [],
        e
    }();
    t.CodecDetection = e,
    e.Init()
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this),
            this.loop = !0,
            this.fps = 60,
            this.amountOfImages = 0,
            this.onImageLoadedHandlerBind = this.onImageLoadedHandler.bind(this),
            this.onLoadErrorHandlerBind = this.onLoadErrorHandler.bind(this),
            this.url = i.url,
            this.amountOfImages = i.frameAmount,
            this.rows = i.rows,
            this.columns = i.columns,
            this.fps = i.fps,
            this.loop = i.loop,
            this.duration = this.amountOfImages / this.fps * 1e3,
            this.playerCon = t.HTML.Create("div"),
            this.element = t.HTML.Create("div", {
                "class": "sprite"
            }),
            this.element.style.backgroundSize = 100 * this.columns + "%",
            this.playerCon.appendChild(this.element),
            this.playerCon.addEventListener("click", this.pause.bind(this))
        }
        return __extends(i, e),
        i.prototype.addSizeBehaviour = function(t) {
            this.sizeBehavior = t
        }
        ,
        i.prototype.getHTML = function() {
            return this.playerCon
        }
        ,
        i.prototype.enable = function() {
            this.play()
        }
        ,
        i.prototype.disable = function() {
            this.pause()
        }
        ,
        i.prototype.__default_execute = function() {
            this.imageLoader = new t.ImageRequest(this.url),
            this.imageLoader.addEventListener(t.TaskEvent.COMPLETE, this.onImageLoadedHandlerBind),
            this.imageLoader.execute(),
            this.setStateToExecuting()
        }
        ,
        i.prototype.onImageLoadedHandler = function(e) {
            this.imageLoader.removeEventListener(t.TaskEvent.COMPLETE, this.onImageLoadedHandlerBind);
            var i = e.target.data.width
              , s = e.target.data.height;
            this.imgSize = new t.Area(i / this.columns,s / this.rows),
            t.HTML.SetStyles(this.element, {
                backgroundImage: "url(" + e.target.url + ")",
                backgroundPosition: "0 0"
            }),
            this.imageLoader.destroy(),
            this.setStateToComplete(),
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            })
        }
        ,
        i.prototype.onLoadErrorHandler = function(e) {
            this.revert(),
            this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            })
        }
        ,
        i.prototype.play = function() {
            this.baseTime = performance.now(),
            t.GlobalRenderManager.add(this)
        }
        ,
        i.prototype.pause = function() {
            t.GlobalRenderManager.remove(this)
        }
        ,
        i.prototype.setProgress = function(e) {
            var i = (e - this.baseTime) % this.duration
              , s = Math.floor(i / this.duration * this.amountOfImages);
            if (this.currentImageIndex !== s) {
                var n = s % this.columns
                  , o = Math.floor(s / this.columns)
                  , r = -(100 * n)
                  , a = -(100 * o);
                t.HTML.SetStyles(this.element, {
                    backgroundPosition: r + "% " + a + "%"
                }),
                this.currentImageIndex = s,
                this.loop === !1 && this.currentImageIndex === this.amountOfImages - 1 && this.pause()
            }
        }
        ,
        i.prototype.setProgressLast = function(t) {
            this.setProgress(t)
        }
        ,
        i.prototype.updateProgress = function(t) {}
        ,
        i.prototype.__executing_revert = function() {
            this.imageLoader.removeEventListener(t.TaskEvent.COMPLETE, this.onImageLoadedHandlerBind),
            this.imageLoader.destroy(),
            this.imageLoader = null ,
            this.__complete_revert()
        }
        ,
        i.prototype.updateSize = function(t) {
            this.size = t,
            void 0 !== this.imgSize && this.sizeBehavior.defineAsCSSPixels(this.size, this.imgSize, this.element)
        }
        ,
        i.prototype.destoy = function() {
            this.playerCon = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.ATask);
    t.SpriteSequencePlayer = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this),
            this.onLoadProgressHandlerBind = this.onLoadProgressHandler.bind(this),
            this.onMetaDataCompleteHandlerBind = this.onMetaDataCompleteHandler.bind(this),
            this.onLoadCompleteHandlerBind = this.onLoadCompleteHandler.bind(this),
            this.onLoadErrorHandlerBind = this.onLoadErrorHandler.bind(this),
            this.url = t
        }
        return __extends(i, e),
        i.prototype.__default_execute = function() {
            this.videoElement = document.createElement("video"),
            this.videoElement.addEventListener("loadedmetadata", this.onMetaDataCompleteHandlerBind),
            this.videoElement.addEventListener("canplaythrough", this.onLoadCompleteHandlerBind),
            this.videoElement.addEventListener("progress", this.onLoadProgressHandlerBind),
            this.videoElement.addEventListener("error", this.onLoadErrorHandlerBind),
            this.videoElement.src = this.url,
            this.videoElement.load(),
            this.setStateToExecuting()
        }
        ,
        i.prototype.__executing_revert = function() {
            this.__complete_revert()
        }
        ,
        i.prototype.__complete_revert = function() {
            this.videoElement.removeEventListener("loadedmetadata", this.onMetaDataCompleteHandlerBind),
            this.videoElement.removeEventListener("canplaythrough", this.onLoadCompleteHandlerBind),
            this.videoElement.removeEventListener("progress", this.onLoadProgressHandlerBind),
            this.videoElement.removeEventListener("error", this.onLoadErrorHandlerBind),
            this.videoElement.pause(),
            this.videoElement.src = "",
            this.videoElement.load(),
            this.videoElement.removeAttribute("src"),
            this.videoElement = void 0,
            this.setStateToDefault()
        }
        ,
        i.prototype.onLoadProgressHandler = function(t) {
            if (0 !== this.videoElement.buffered.length) {
                var e = this.videoElement.buffered.end(0);
                e / this.videoElement.duration * 100
            }
        }
        ,
        i.prototype.onMetaDataCompleteHandler = function(t) {
            this.dispatchEvent({
                type: "loadedmetadata",
                target: this
            })
        }
        ,
        i.prototype.onLoadCompleteHandler = function(e) {
            this.setStateToComplete(),
            this.dispatchEvent({
                type: t.TaskEvent.COMPLETE,
                target: this
            })
        }
        ,
        i.prototype.onLoadErrorHandler = function(e) {
            this.revert(),
            this.dispatchEvent({
                type: t.TaskEvent.ERROR,
                target: this
            })
        }
        ,
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            void 0 !== this.videoElement && (this.videoElement.pause(),
            this.videoElement.src = "",
            this.videoElement.load(),
            this.videoElement.removeAttribute("src"),
            this.videoElement = void 0),
            this.url = null 
        }
        ,
        i
    }(t.ATask);
    t.VideoLoader = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t, i, s) {
            e.call(this, t),
            this.autoplay = !1,
            this.loop = !1,
            this.volume = 1,
            this.onVideoEndedBind = this.onVideoEnded.bind(this),
            this.onUpdateTimeBind = this.onUpdateTime.bind(this),
            this.onPlayBind = this.onPlay.bind(this),
            this.onPauseBind = this.onPause.bind(this)
        }
        return __extends(i, e),
        i.FromArray = function(e) {
            return new i(t.CodecDetection.GetSupportedVideo(e))
        }
        ,
        i.prototype.__default_execute = function() {
            e.prototype.__default_execute.call(this),
            this.loop === !0 && (this.videoElement.loop = !0),
            this.videoElement.volume = this.volume,
            this.autoplay === !0 && (this.videoElement.autoplay = !0),
            this.videoElement.addEventListener(t.VideoPlaybackEvent.PLAYING, this.onPlayBind),
            this.videoElement.addEventListener(t.VideoPlaybackEvent.PAUSED, this.onPauseBind),
            this.videoElement.addEventListener(t.VideoPlaybackEvent.END, this.onVideoEndedBind),
            this.videoElement.addEventListener(t.VideoPlaybackEvent.TIME_UPDATE, this.onUpdateTimeBind)
        }
        ,
        i.prototype.__complete_revert = function() {
            this.videoElement.removeEventListener(t.VideoPlaybackEvent.PLAYING, this.onPlayBind),
            this.videoElement.removeEventListener(t.VideoPlaybackEvent.PAUSED, this.onPauseBind),
            this.videoElement.removeEventListener(t.VideoPlaybackEvent.END, this.onVideoEndedBind),
            this.videoElement.removeEventListener(t.VideoPlaybackEvent.TIME_UPDATE, this.onUpdateTimeBind),
            e.prototype.__complete_revert.call(this)
        }
        ,
        i.prototype.onVideoEnded = function() {
            this.loop !== !0 && this.dispatchEvent(new t.SSEvent(t.VideoPlaybackEvent.END,this))
        }
        ,
        i.prototype.onUpdateTime = function() {
            this.dispatchEvent(new t.SSEvent(t.VideoPlaybackEvent.TIME_UPDATE,this))
        }
        ,
        i.prototype.onPlay = function() {
            this.dispatchEvent(new t.SSEvent(t.VideoPlaybackEvent.PLAYING,this))
        }
        ,
        i.prototype.onPause = function() {
            this.dispatchEvent(new t.SSEvent(t.VideoPlaybackEvent.PAUSED,this))
        }
        ,
        i.prototype.getHTML = function() {
            return this.videoElement
        }
        ,
        i.prototype.makeAutoplay = function() {
            this.autoplay = !0,
            void 0 !== this.videoElement && (this.videoElement.autoplay = !0)
        }
        ,
        i.prototype.setLoop = function(t) {
            this.loop = t,
            void 0 !== this.videoElement && (this.videoElement.loop = t)
        }
        ,
        i.prototype.play = function() {
            void 0 !== this.videoElement && this.videoElement.play()
        }
        ,
        i.prototype.pause = function() {
            void 0 !== this.videoElement && this.videoElement.pause()
        }
        ,
        i.prototype.togglePlayPause = function() {
            this.isPlaying() === !0 ? this.pause() : this.play()
        }
        ,
        i.prototype.stop = function() {
            this.videoElement.pause(),
            this.seekTo(0)
        }
        ,
        i.prototype.seekTo = function(t) {
            this.videoElement.currentTime = t
        }
        ,
        i.prototype.isPlaying = function() {
            return !this.videoElement.paused
        }
        ,
        i.prototype.getDuration = function() {
            return this.videoElement.duration
        }
        ,
        i.prototype.getCurrentTime = function() {
            return this.videoElement.currentTime
        }
        ,
        i.prototype.setVolume = function(t) {
            this.volume = t,
            void 0 !== this.videoElement && (this.videoElement.volume = t)
        }
        ,
        i.prototype.getVolume = function() {
            return this.volume
        }
        ,
        i.prototype.toggleVolume = function() {
            this.getVolume() > 0 ? this.setVolume(0) : this.setVolume(this.volume)
        }
        ,
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.VideoLoader);
    t.VideoPlayback = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this),
            this.coverURL = null ,
            this.sizeBehavior = null ,
            this.videoSize = null ,
            this.onCompleteByCoverBind = this.onCompleteByCover.bind(this),
            this.onMetaDataCompleteBind = this.onMetaDataComplete.bind(this),
            this.onPlayingBind = this.onPlaying.bind(this),
            this.onPausedBind = this.onPaused.bind(this),
            this.onEndedBind = this.onEnded.bind(this),
            this.onTimeUpdateBind = this.onTimeUpdate.bind(this),
            this.onFullscreenChangeBind = this.onFullscreenChange.bind(this),
            this.onToggleFullscreenBind = this.onToggleFullscreen.bind(this),
            this.playerCon = t.HTML.Create("div"),
            t.HTML.AddClass(this.playerCon, "video-player"),
            this.coverCon = t.HTML.Create("div", {
                "class": "cover"
            }),
            this.playerCon.appendChild(this.coverCon),
            this.videoPlayback = new t.VideoPlayback(i),
            this.interfaceCon = t.HTML.Create("div", {
                "class": "ui"
            }),
            this.playerCon.appendChild(this.interfaceCon)
        }
        return __extends(i, e),
        i.prototype.addSizeBehaviour = function(t) {
            this.sizeBehavior = t,
            this.sizeBehavior.defineAsCSSBackground(this.coverCon)
        }
        ,
        i.prototype.addCover = function(t) {
            this.coverURL = t
        }
        ,
        i.prototype.setLoop = function(t) {
            this.videoPlayback.setLoop(t)
        }
        ,
        i.prototype.setVolume = function(t) {
            this.videoPlayback.setVolume(t)
        }
        ,
        i.prototype.getPlayback = function() {
            return this.videoPlayback
        }
        ,
        i.prototype.getHTML = function() {
            return this.playerCon
        }
        ,
        i.prototype.getUIHTML = function() {
            return this.interfaceCon
        }
        ,
        i.prototype.getDuration = function() {
            return this.videoPlayback.getDuration()
        }
        ,
        i.prototype.getCurrentTime = function() {
            return this.videoPlayback.getCurrentTime()
        }
        ,
        i.prototype.addUI = function(t) {
            t.defineVideoPlayer(this),
            this.interfaceCon.appendChild(t.getHTML())
        }
        ,
        i.prototype.__default_execute = function() {
            this.videoPlayback.addEventListener("loadedmetadata", this.onMetaDataCompleteBind),
            null  !== this.coverURL && (this._coverImageLoader = new t.ImageRequest(this.coverURL),
            this._coverImageLoader.addEventListener(t.TaskEvent.COMPLETE, this.onCompleteByCoverBind),
            this._coverImageLoader.execute()),
            this.setStateToExecuting(),
            this.videoPlayback.execute()
        }
        ,
        i.prototype.__executing_revert = function() {
            this.videoPlayback.removeEventListener("loadedmetadata", this.onMetaDataCompleteBind),
            null  !== this.coverURL && (this._coverImageLoader.removeEventListener(t.TaskEvent.COMPLETE, this.onCompleteByCoverBind),
            this._coverImageLoader.destroy(),
            this._coverImageLoader = void 0),
            this.setStateToDefault(),
            this.videoPlayback.revert()
        }
        ,
        i.prototype.onCompleteByCover = function(e) {
            t.HTML.SetStyles(this.coverCon, {
                backgroundImage: "url(" + e.target.data.src + ")"
            }),
            this._coverImageLoader.removeEventListener(t.TaskEvent.COMPLETE, this.onCompleteByCoverBind),
            this._coverImageLoader.destroy(),
            this._coverImageLoader = void 0,
            this.coverLoaded = !0,
            this.checkComplete()
        }
        ,
        i.prototype.onMetaDataComplete = function(t) {
            this.videoPlayback.removeEventListener("loadedmetadata", this.onMetaDataCompleteBind),
            this.metaDataLoaded = !0,
            this.checkComplete()
        }
        ,
        i.prototype.checkComplete = function() {
            null  !== this.coverURL && this.coverLoaded !== !0 || this.metaDataLoaded !== !0 || (e.prototype.onExecuteComplete.call(this),
            this.initVideo())
        }
        ,
        i.prototype.initVideo = function() {
            this.videoPlaybackHTML = this.videoPlayback.getHTML(),
            this.videoSize = new t.Area(this.videoPlaybackHTML.videoWidth,this.videoPlaybackHTML.videoHeight),
            this.updateSize(this.size),
            this.videoPlayback.addEventListener(t.VideoPlaybackEvent.PLAYING, this.onPlayingBind),
            this.videoPlayback.addEventListener(t.VideoPlaybackEvent.PAUSED, this.onPausedBind),
            this.videoPlayback.addEventListener(t.VideoPlaybackEvent.END, this.onEndedBind),
            this.videoPlayback.addEventListener(t.VideoPlaybackEvent.TIME_UPDATE, this.onTimeUpdateBind),
            document.addEventListener("fullscreenchange", this.onFullscreenChangeBind),
            document.addEventListener("mozfullscreenchange", this.onFullscreenChangeBind),
            document.addEventListener("webkitfullscreenchange", this.onFullscreenChangeBind),
            document.addEventListener("msfullscreenchange", this.onFullscreenChangeBind),
            t.HTML.AddAt(this.playerCon, this.videoPlaybackHTML, 0)
        }
        ,
        i.prototype.onPlaying = function(e) {
            this.hideCover(),
            this.dispatchEvent(new t.SSEvent(t.VideoPlayerEvent.PLAYING,this))
        }
        ,
        i.prototype.onPaused = function(e) {
            this.dispatchEvent(new t.SSEvent(t.VideoPlayerEvent.PAUSED,this))
        }
        ,
        i.prototype.onEnded = function(e) {
            this.dispatchEvent(new t.SSEvent(t.VideoPlayerEvent.END,this))
        }
        ,
        i.prototype.onTimeUpdate = function(e) {
            this.dispatchEvent(new t.SSEvent(t.VideoPlayerEvent.TIME_UPDATE,this))
        }
        ,
        i.prototype.play = function() {
            this.hideCover(),
            this.videoPlayback.play()
        }
        ,
        i.prototype.pause = function() {
            this.videoPlayback.pause()
        }
        ,
        i.prototype.togglePlayPause = function() {
            this.videoPlayback.togglePlayPause()
        }
        ,
        i.prototype.seekTo = function(t) {
            this.videoPlayback.seekTo(t)
        }
        ,
        i.prototype.stop = function() {
            this.videoPlayback.pause(),
            this.videoPlayback.seekTo(0)
        }
        ,
        i.prototype.hideCover = function() {
            this.coverCon.style.display = "none"
        }
        ,
        i.prototype.showCover = function() {
            this.coverCon.style.display = "block"
        }
        ,
        i.prototype.onFullscreenChange = function(e) {
            this.isDocumentInFullScreenMode() === !0 ? this.dispatchEvent(new t.SSEvent(t.VideoPlayerEvent.ENTER_FULLSCREEN,this)) : this.dispatchEvent(new t.SSEvent(t.VideoPlayerEvent.EXIT_FULLSCREEN,this))
        }
        ,
        i.prototype.onToggleFullscreen = function(t) {
            this.isDocumentInFullScreenMode() === !0 ? this.exitFullscreen() : this.enterFullscreen()
        }
        ,
        i.prototype.isDocumentInFullScreenMode = function() {
            return document.fullscreenElement && null  !== document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen
        }
        ,
        i.prototype.enterFullscreen = function() {
            this.playerCon.requestFullscreen ? this.playerCon.requestFullscreen() : this.playerCon.msRequestFullscreen ? this.playerCon.msRequestFullscreen() : this.playerCon.mozRequestFullScreen ? this.playerCon.mozRequestFullScreen() : this.playerCon.webkitRequestFullscreen && this.playerCon.webkitRequestFullscreen()
        }
        ,
        i.prototype.exitFullscreen = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }
        ,
        i.prototype.updateSize = function(e) {
            this.size = e,
            null  !== this.sizeBehavior && null  !== this.videoSize && (this.isDocumentInFullScreenMode() === !0 ? t.HTML.SetStyles(this.videoPlaybackHTML, {
                marginTop: "",
                marginLeft: null ,
                height: "100%",
                width: "100%"
            }) : this.sizeBehavior.defineAsCSSPercentages(this.videoPlaybackHTML))
        }
        ,
        i.prototype.destroy = function() {
            document.removeEventListener("fullscreenchange", this.onFullscreenChangeBind),
            document.removeEventListener("mozfullscreenchange", this.onFullscreenChangeBind),
            document.removeEventListener("webkitfullscreenchange", this.onFullscreenChangeBind),
            document.removeEventListener("msfullscreenchange", this.onFullscreenChangeBind),
            this.videoPlayback.destroy(),
            this.videoPlayback = null 
        }
        ,
        i
    }(t.ATask);
    t.VideoPlayer = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.responseType = t.AXHRRequest.RESPONSE_BLOB
        }
        return __extends(i, e),
        i.FromArray = function(e) {
            return new i(t.CodecDetection.GetSupportedVideo(e))
        }
        ,
        i.prototype.onCompleteHandler = function(t) {
            this.data = window.URL.createObjectURL(this.request.response)
        }
        ,
        i.prototype.destroy = function() {
            this.data = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.AXHRRequest);
    t.VideoLoaderXHR = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.onExecuteCompleteBind = this.onExecuteComplete.bind(this),
            this.url = i,
            this.element = t.HTML.Create("div", {
                "class": "media image"
            }),
            this.sizeBehavior = s
        }
        return __extends(i, e),
        i.FromJSON = function(e) {
            var s = t.FitDef.FromJSON(e)
              , n = e.url;
            if (void 0 == n)
                throw new Error("ImageHTMLDisplay::FromJSON: ´url´ for media item of type ´image´ cannot be empty.");
            return new i(n,s)
        }
        ,
        i.prototype.getHTML = function() {
            return this.element
        }
        ,
        i.prototype.__default_execute = function() {
            this.imageLoader = new t.ImageRequest(this.url),
            this.setStateToExecuting(),
            this.imageLoader.addEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind),
            this.imageLoader.execute()
        }
        ,
        i.prototype.__executing_revert = function() {
            this.imageLoader.removeEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind),
            this.imageLoader.destroy(),
            this.imageLoader = null ,
            e.prototype.__executing_revert.call(this)
        }
        ,
        i.prototype.onExecuteComplete = function(i) {
            this.sizeBehavior.defineAsCSSBackground(this.element),
            t.HTML.SetStyles(this.element, {
                backgroundImage: "url(" + this.imageLoader.data.src + ")"
            }),
            this.__executing_revert(),
            e.prototype.onExecuteComplete.call(this, i)
        }
        ,
        i.prototype.updateSize = function(t) {}
        ,
        i.prototype.enable = function() {}
        ,
        i.prototype.disable = function() {}
        ,
        i
    }(t.ATask);
    t.HTMLImageDisplay = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this),
            this.onExecuteCompleteBind = this.onExecuteComplete.bind(this),
            this.url = i,
            this.element = t.HTML.Create("div", {
                "class": "media image"
            }),
            this.sizeBehavior = n,
            this.sizeBehavior.defineAsCSSBackground(this.element),
            this.responsiveImage = new t.ResponsiveImageRequest(this.url,s,this.sizeBehavior),
            this.responsiveImage.addEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind)
        }
        return __extends(i, e),
        i.FromJSON = function(e) {
            var s = t.FitDef.FromJSON(e)
              , n = e.url
              , o = e.width
              , r = e.height;
            if (void 0 == n)
                throw new Error("HTMLImageResponsiveDisplay::FromJSON: ´url´ for media item of type ´image´ cannot be empty.");
            return new i(n,new t.Vector(o,r),s)
        }
        ,
        i.prototype.getHTML = function() {
            return this.element
        }
        ,
        i.prototype.__default_execute = function() {
            this.setStateToExecuting(),
            this.responsiveImage.execute()
        }
        ,
        i.prototype.__executing_revert = function() {
            this.responsiveImage.revert(),
            e.prototype.__executing_revert.call(this)
        }
        ,
        i.prototype.__complete_revert = function() {
            this.responsiveImage.revert(),
            e.prototype.__complete_revert.call(this)
        }
        ,
        i.prototype.onExecuteComplete = function(i) {
            t.HTML.SetStyles(this.element, {
                backgroundImage: "url(" + this.responsiveImage.data.src + ")"
            }),
            e.prototype.onExecuteComplete.call(this, i)
        }
        ,
        i.prototype.updateSize = function(t) {
            this.responsiveImage.setSize(t)
        }
        ,
        i.prototype.enable = function() {}
        ,
        i.prototype.disable = function() {}
        ,
        i.prototype.destroy = function() {
            this.sizeBehavior = null ,
            e.prototype.destroy.call(this),
            this.responsiveImage.removeEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind),
            this.responsiveImage.destroy(),
            this.responsiveImage = null 
        }
        ,
        i
    }(t.ATask);
    t.HTMLImageResponsiveDisplay = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.enabled = !0,
            this.autoPlay = !1,
            this.onExecuteCompleteBind = this.onExecuteComplete.bind(this),
            this.videoPlayer = new t.VideoPlayer(i),
            this.videoPlayer.addSizeBehaviour(s),
            this.element = this.videoPlayer.getHTML(),
            t.HTML.AddClass(this.element, "media")
        }
        return __extends(i, e),
        i.FromJSON = function(e) {
            var s = t.FitDef.FromJSON(e)
              , n = t.CodecDetection.GetSupportedVideo(e.urls);
            if (void 0 == n)
                throw new Error("ImageHTMLDisplay::FromJSON: ´urls´ for media item of type video cannot be empty.");
            var o = new i(n,s);
            return void 0 != e.coverURL && o.getPlayer().addCover(e.coverURL),
            e.autoPlay === !0 && t.DeviceInfo.IsMobileDevice === !1 && o.makeAutoPlay(),
            e.loop === !0 && o.getPlayer().setLoop(!0),
            void 0 != e.volume && o.getPlayer().setVolume(e.volume),
            o
        }
        ,
        i.prototype.makeAutoPlay = function() {
            this.autoPlay = !0
        }
        ,
        i.prototype.getHTML = function() {
            return this.element
        }
        ,
        i.prototype.getPlayer = function() {
            return this.videoPlayer
        }
        ,
        i.prototype.__default_execute = function() {
            this.setStateToExecuting(),
            this.videoPlayer.addEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind),
            this.videoPlayer.execute()
        }
        ,
        i.prototype.__executing_revert = function() {
            this.videoPlayer.removeEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind),
            e.prototype.__executing_revert.call(this)
        }
        ,
        i.prototype.onExecuteComplete = function(t) {
            this.__executing_revert(),
            this.videoPlayer.updateSize(this.size),
            this.enabled === !0 && this.autoPlay === !0 && this.videoPlayer.play(),
            e.prototype.onExecuteComplete.call(this, t)
        }
        ,
        i.prototype.updateSize = function(t) {
            this.size = t,
            this.videoPlayer.updateSize(t)
        }
        ,
        i.prototype.enable = function() {
            this.enabled !== !0 && (this.enabled = !0,
            this.autoPlay === !0 && this.videoPlayer.play())
        }
        ,
        i.prototype.disable = function() {
            this.enabled !== !1 && (this.enabled = !1,
            this.videoPlayer.pause())
        }
        ,
        i.prototype.destroy = function() {
            this.videoPlayer.destroy(),
            this.videoPlayer = null ,
            this.element = null 
        }
        ,
        i
    }(t.ATask);
    t.HTMLVideoDisplay = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.enabled = !0,
            this.onExecuteCompleteBind = this.onExecuteComplete.bind(this),
            this.url = i.url,
            this.sizeBehavior = s,
            this.sequencePlayer = new t.SpriteSequencePlayer(i),
            this.sequencePlayer.addSizeBehaviour(s),
            this.element = this.sequencePlayer.getHTML(),
            t.HTML.AddClass(this.element, "media spriteSequence")
        }
        return __extends(i, e),
        i.FromJSON = function(e) {
            var s = t.FitDef.FromJSON(e);
            if (void 0 == e.url)
                throw new Error("SpriteSequenceHTMLDisplay::FromJSON: ´url´ for media item of type ´image´ cannot be empty.");
            return new i(e,s)
        }
        ,
        i.prototype.__default_execute = function() {
            this.sequencePlayer.addEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind),
            this.sequencePlayer.execute()
        }
        ,
        i.prototype.__executing_revert = function() {
            this.sequencePlayer.removeEventListener(t.TaskEvent.COMPLETE, this.onExecuteCompleteBind)
        }
        ,
        i.prototype.onExecuteComplete = function(t) {
            this.__executing_revert(),
            this.sequencePlayer.updateSize(this.size),
            this.enabled === !0 && this.sequencePlayer.enable(),
            e.prototype.onExecuteComplete.call(this, t)
        }
        ,
        i.prototype.getHTML = function() {
            return this.element
        }
        ,
        i.prototype.updateSize = function(t) {
            this.size = t,
            this.sequencePlayer.updateSize(t)
        }
        ,
        i.prototype.enable = function() {
            this.enabled !== !0 && (this.enabled = !0,
            this.sequencePlayer.enable())
        }
        ,
        i.prototype.disable = function() {
            this.enabled !== !1 && (this.enabled = !1,
            this.sequencePlayer.disable())
        }
        ,
        i
    }(t.ATask);
    t.HTMLSpriteSequenceDisplay = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.CreateFromJSON = function(t) {
            return e.Create(t.type, t)
        }
        ,
        e.Create = function(t, i) {
            var t = t.toLowerCase();
            if (e._Dictionary.hasOwnProperty(t) === !1)
                throw new TypeError("HTMLDisplayFactory::CreateSection: There is no section with the type '" + t + "'.");
            return e._Dictionary[t].FromJSON(i)
        }
        ,
        e._Dictionary = {
            image: t.HTMLImageResponsiveDisplay,
            svg: t.HTMLImageDisplay,
            video: t.HTMLVideoDisplay,
            spritesequence: t.HTMLSpriteSequenceDisplay
        },
        e
    }();
    t.HTMLMediaDisplayFactory = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {}
        return t.loadScript = function(e, i, s) {
            t.ua = e,
            t.domainName = "localhost" == i ? "none" : i,
            window.GoogleAnalyticsObject = "ga",
            window.ga = window.ga || function() {
                (window.ga.q = window.ga.q || []).push(arguments)
            }
            ,
            window.ga.l = 1 * new Date;
            var n = document.createElement("script")
              , o = document.getElementsByTagName("script")[0];
            n.async = !0,
            n.src = "//www.google-analytics.com/analytics.js",
            o.parentNode.insertBefore(n, o),
            s === !0 ? ga("create", t.ua, {
                cookieDomain: t.domainName,
                cookieName: "ga_cookie"
            }) : (ga("create", t.ua, {
                anonymizeIp: !0,
                storage: "none",
                clientId: window.localStorage.getItem("ga_clientId")
            }),
            ga(function(t) {
                window.localStorage.setItem("ga_clientId", t.get("clientId"))
            }))
        }
        ,
        t.forceSSL = function() {
            ga("set", "forceSSL", !0)
        }
        ,
        t.sendPage = function() {
            ga("send", "pageview")
        }
        ,
        t.send = function(t, e, i) {
            void 0 === i && (i = "pageview"),
            ga("send", i, {
                page: t,
                title: e
            })
        }
        ,
        t.set = function(t, e, i) {
            void 0 === i && (i = "pageview"),
            ga("set", i, {
                page: t,
                title: e
            })
        }
        ,
        t
    }();
    t.GoogleAnalytics = e
}(ss || (ss = {}));
var __extends = this && this.__extends || function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e)
        e.hasOwnProperty(s) && (t[s] = e[s]);
    t.prototype = null  === e ? Object.create(e) : (i.prototype = e.prototype,
    new i)
}
, ss;
!function(t) {
    var e = function() {
        function e() {
            this._articles = [],
            this.onUrlChangedBind = this.onUrlChanged.bind(this),
            this.removeArticleBind = this.removeArticle.bind(this),
            this.calculateBrowserSizes = this.calcBrowserSizes.bind(this),
            this.calculateBrowserSizesDelayed = t.TimerUtility.CreateDelayedFunction(this.calcBrowserSizes, 400, this),
            this.onResizeBind = this.onResize.bind(this),
            this.onResizeDelayedBind = t.TimerUtility.CreateDelayedFunction(this.onResize, 400, this),
            this.bodyNode = document.getElementById("body"),
            t.HTML.RemoveAllFrom(this.bodyNode),
            this.sizeNode = t.HTML.Create("div", {
                "class": "size"
            }),
            this.bodyNode.appendChild(this.sizeNode),
            this.pageConNode = t.HTML.Create("div", {
                "class": "pageCon"
            }),
            this.bodyNode.appendChild(this.pageConNode),
            window.addEventListener("resize", this.onResizeBind),
            window.addEventListener("orientationchange", this.calculateBrowserSizes),
            window.addEventListener("orientationchange", this.calculateBrowserSizesDelayed),
            window.addEventListener("orientationchange", this.onResizeBind),
            window.addEventListener("orientationchange", this.onResizeDelayedBind),
            this.calcBrowserSizes(),
            this.onResize(),
            this.jsonLoader = new t.JSONRequest(t.Application.JSON_URL),
            this.jsonLoader.addEventListener(t.TaskEvent.COMPLETE, this.onJSONComplete.bind(this)),
            this.jsonLoader.execute(),
            t.GoogleAnalytics.loadScript("UA-75784937-1", "localhost", !1),
            t.DeviceInfo.IsMobileDevice === !0 && t.DeviceInfo.IsSafari === !0 && new t.OrientationSign(this.bodyNode)
        }
        return e.prototype.onJSONComplete = function(i) {
            this.data = i.target.data,
            this.menu = new t.Menu(this.data),
            e.Menu = this.menu,
            this.bodyNode.appendChild(this.menu.getHTML()),
            this.menu.setSize(this.size),
            this.mainPage = new t.MainPage(this.data,this.menu),
            this.pageConNode.appendChild(this.mainPage.getHTML());
            for (var s, n, o = this.data.articles, r = (o.length,
            0); s = o[r]; r++)
                n = new t.Article(s),
                n.addEventListener(t.Article.ANIMATION_OUT, this.removeArticleBind),
                this._articles.push(n);
            t.URLManager.AddEventListener(t.URLEvent.ON_URL_CHANGE, this.onUrlChangedBind),
            t.URLManager.Init(!0),
            this.onResizeBind(),
            this.onUrlChanged(null , !0)
        }
        ,
        e.prototype.getArticleById = function(t) {
            for (var e = this._articles.length; e--; )
                if (this._articles[e].getID() === t)
                    return this._articles[e];
            return null 
        }
        ,
        e.prototype.onUrlChanged = function(e, i) {
            void 0 === i && (i = !1);
            var s = t.URLManager.GetPathList()
              , n = s[0]
              , o = s[1];
            "" != n && void 0 != n || (n = "0");
            var r = this.getArticleById(o);
            null  !== r ? (i === !0 && this.mainPage.jumpToChapterByID(n),
            this.transitionToArticle(r, !i)) : (this.mainPage.getCurrentChapterID() !== n && (i === !0 ? (this.mainPage.setStartChapter(n),
            setTimeout(this.onResizeBind, 1e3)) : this.mainPage.transitionToChapterByID(n)),
            this.transitionToChapter()),
            t.GoogleAnalytics.send(window.location.href, document.title)
        }
        ,
        e.prototype.transitionToChapter = function() {
            void 0 !== this._currentArticle && (this._disassembleArticle(this._currentArticle),
            this._currentArticle = void 0,
            this.menu.closeOverlay()),
            this.mainPage.enable(),
            this.mainPage.zoomIn(),
            this.menu.enableSideMenu()
        }
        ,
        e.prototype.transitionToArticle = function(e, i) {
            void 0 === i && (i = !0),
            void 0 !== this._currentArticle ? (this._disassembleArticle(this._currentArticle),
            this._currentArticle = void 0) : this.menu.openOverlay(e.getChapterIndex()),
            this.mainPage.disable(),
            this.mainPage.zoomOut(),
            this.menu.disableSideMenu(),
            e.getHTML().parentNode !== this.pageConNode && this.pageConNode.appendChild(e.getHTML()),
            t.CSS.ForceUpdate(e.getHTML()),
            e.enable(),
            i === !0 ? e.animateIn() : e.open(),
            this._currentArticle = e
        }
        ,
        e.prototype._disassembleArticle = function(t) {
            void 0 !== t && (t.disable(),
            t.animateOut())
        }
        ,
        e.prototype.removeArticle = function(t) {
            this.pageConNode.removeChild(t.target.getHTML())
        }
        ,
        e.prototype.calcBrowserSizes = function() {
            var e = window.orientation
              , i = t.MathUtility.Modulo(e + 45, 180) / 180
              , s = !(i > .5)
              , n = (window.screen.availHeight,
            window.screen.width)
              , o = window.screen.height;
            t.DeviceInfo.IsSafari === !0 && (o = s === !0 ? window.screen.height : window.screen.width,
            n = s === !0 ? window.screen.width : window.screen.height),
            720 > n ? o > n && (this.iosBrowserViewportHeight = o - 64,
            this.iosBrowserViewportHeight -= 45) : this.iosBrowserViewportHeight = o - 64
        }
        ,
        e.prototype.onResize = function(e) {
            this.size = t.DeviceInfo.GetViewportSize(),
            t.DeviceInfo.IsMobileDevice === !0 && (t.DeviceInfo.IsSafari === !0 ? (this.size.x = window.innerWidth,
            this.size.y = this.iosBrowserViewportHeight) : t.DeviceInfo.IsChrome === !0 && (this.size.y = window.innerHeight)),
            void 0 !== this.menu && this.menu.setSize(this.size),
            void 0 !== this.mainPage && this.mainPage.setSize(this.size);
            for (var i = 0, s = void 0; s = this._articles[i]; i++)
                s.setSize(this.size)
        }
        ,
        e
    }();
    t.Main = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t() {
            var t = document.getElementById("body");
            t.innerHTML = '<div id="upgrade"><a href="http://outdatedbrowser.com/"><img src="/assets/img/update_browser.jpg" width="512" height="444" alt="Upgrade Browser"></a>'
        }
        return t
    }();
    t.UpgradeBrowser = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.Init = function() {
            window.addEventListener ? (t.ResponsiveImageRequest.SetDefaultApiParameterName("w"),
            document.addEventListener("DOMContentLoaded", t.Application.OnDomReady)) : window.attachEvent && window.attachEvent("onload", t.Application.OnLoad)
        }
        ,
        e.OnDomReady = function() {
            t.Polyfills.Init(),
            new t.Main
        }
        ,
        e.OnLoad = function() {
            new t.UpgradeBrowser
        }
        ,
        e.JSON_URL = window.JSON_URL,
        e
    }();
    t.Application = e
}(ss || (ss = {})),
ss.Application.Init();
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this),
            this._components = [],
            this._isAssembled = !1,
            this._closeButtonClickHandlerBind = this._closeButtonClickHandler.bind(this),
            this._keyboardHandlerBind = this._keyboardHandler.bind(this),
            this.onScrollHandlerBind = this.onScrollHandler.bind(this),
            this._handleAnimationInBind = this._handleAnimationIn.bind(this),
            this._handleAnimationOutBind = this._handleAnimationOut.bind(this),
            this.node = t.HTML.Create("div", {
                "class": "article article--" + i.id
            }),
            this.content = t.HTML.Create("div", {
                "class": "article__content"
            }),
            this.data = i,
            this.articleWithin = new t.WithinGroup,
            this.taskQueue = new t.TaskQueueAsync,
            this.closeButton = t.HTML.Create("div", {
                "class": "article__close-button"
            });
            var s = 30
              , n = 5
              , o = Math.pow(s - 2 * n, 2)
              , r = Math.sqrt(o + o)
              , a = new t.HTMLSVGSymbol("100%","100%");
            a.setAttribute("viewBox", "0 0 " + s + " " + s);
            var h = t.Line.FromValues(n, n, s - n, s - n)
              , l = new t.SVGLineSymbol(h);
            l.getSVG().style.strokeDasharray = "" + r,
            l.getSVG().style.strokeDashoffset = "" + r;
            var d = t.Line.FromValues(s - n, n, n, s - n)
              , u = new t.SVGLineSymbol(d);
            u.getSVG().style.strokeDasharray = "" + r,
            u.getSVG().style.strokeDashoffset = "" + r,
            l.setLineColor(t.Config.DARK_BLUE_RGB.toString()),
            u.setLineColor(t.Config.DARK_BLUE_RGB.toString()),
            a.addChild(l),
            a.addChild(u);
            var p = t.HTML.Create("div", {
                "class": "button__stripe"
            });
            p.style.backgroundColor = this.data.color,
            this.closeButton.appendChild(p),
            this.closeButton.appendChild(a.getSVG()),
            this.node.appendChild(this.content),
            this.node.appendChild(this.closeButton),
            this.closeButton.addEventListener("click", this._closeButtonClickHandlerBind),
            this.setState("close")
        }
        return __extends(i, e),
        i.prototype.getChapterIndex = function() {
            return parseInt(this.data.chapter)
        }
        ,
        i.prototype.getHTML = function() {
            return this.node
        }
        ,
        i.prototype.assemble = function() {
            if (this._isAssembled === !1) {
                for (var e, i, s, n, o = 0; o < this.data.components.length + 1; o++)
                    i = this.data.components[o],
                    e = o === this.data.components.length ? new (t.AArticleComp.Factory.get("end"))({
                        type: "end",
                        blueLogo: this.data.blueLogo
                    },this.data.color) : new (t.AArticleComp.Factory.get(i.type))(i,this.data.color),
                    s = e.getWithin(),
                    null  !== s && this.articleWithin.add(s),
                    n = e.getTask(),
                    null  !== n && this.taskQueue.addTask(n),
                    this._components.push(e),
                    this.content.appendChild(e.getHTML());
                this._isAssembled = !0,
                this.setSize(this.size)
            }
        }
        ,
        i.prototype.disassemble = function() {
            if (this._isAssembled === !0) {
                for (var e, i = 0; e = this._components[i]; i++)
                    e.destroy(),
                    delete this._components[i];
                this.content.innerHTML = "",
                this._components.length = 0,
                this.articleWithin.destroy(),
                this.taskQueue.destroy(),
                this.articleWithin = new t.WithinGroup,
                this.taskQueue = new t.TaskQueueAsync,
                this._isAssembled = !1
            }
        }
        ,
        i.prototype.enable = function() {
            window.addEventListener("keydown", this._keyboardHandlerBind),
            this.node.addEventListener("scroll", this.onScrollHandlerBind),
            this.content.addEventListener("scroll", this.onScrollHandlerBind)
        }
        ,
        i.prototype.disable = function() {
            window.removeEventListener("keydown", this._keyboardHandlerBind),
            this.node.removeEventListener("scroll", this.onScrollHandlerBind),
            this.content.removeEventListener("scroll", this.onScrollHandlerBind)
        }
        ,
        i.prototype._closeButtonClickHandler = function(t) {
            this.goBack(),
            t.preventDefault()
        }
        ,
        i.prototype._keyboardHandler = function(t) {
            27 === t.keyCode && this.goBack()
        }
        ,
        i.prototype.goBack = function() {
            var e = t.URLManager.GetPathList();
            t.URLManager.GoToURL("/" + e[0])
        }
        ,
        i.prototype.onScrollHandler = function(t) {
            this.articleWithin.setProgress(t.target.scrollTop)
        }
        ,
        i.prototype.setSize = function(t) {
            if (this.size = t,
            this._isAssembled === !0) {
                for (var e, i = 0; e = this._components[i]; i++)
                    e.setSize(this.size);
                void 0 !== this.articleWithin && (this.articleWithin.updateBounds(),
                this.articleWithin.updateProgress(this.articleWithin.getProgress()))
            }
        }
        ,
        i.prototype.getID = function() {
            return this.data.id
        }
        ,
        i.prototype.animateIn = function() {
            var e = t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM);
            t.DeviceInfo.HasTransition() === !0 ? (t.CSS.SetTransition(this.node, e + " 1200ms " + t.CSSEase.CubicInOut + " 300ms", this._handleAnimationInBind),
            this.open(!0)) : this.open()
        }
        ,
        i.prototype.animateOut = function() {
            var e = t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM);
            t.DeviceInfo.HasTransition() === !0 ? (t.CSS.SetTransition(this.node, e + " 1250ms " + t.CSSEase.CubicInOut + " 200ms", this._handleAnimationOutBind),
            this.close(!0)) : this.close()
        }
        ,
        i.prototype._handleAnimationIn = function(t) {
            "open" === this._state && (this.dispatchEvent({
                type: i.ANIMATION_IN,
                target: this
            }),
            this._open())
        }
        ,
        i.prototype._handleAnimationOut = function(t) {
            "close" === this._state && (this.dispatchEvent({
                type: i.ANIMATION_OUT,
                target: this
            }),
            this._close())
        }
        ,
        i.prototype.open = function(e) {
            void 0 === e && (e = !1),
            this.setState("open"),
            t.HTML.AddClass(this.node, "article--open"),
            e === !1 && this._open()
        }
        ,
        i.prototype.close = function(e) {
            void 0 === e && (e = !1),
            this.setState("close"),
            t.HTML.RemoveClass(this.node, "article--open"),
            e === !1 && this._close()
        }
        ,
        i.prototype._open = function() {
            this.taskQueue.execute();
            for (var t, e = 0; t = this._components[e]; e++)
                t.open();
            this.articleWithin.setProgress(0),
            this.setSize(this.size)
        }
        ,
        i.prototype._close = function() {
            for (var t, e = 0; t = this._components[e]; e++)
                t.close();
            this.disassemble()
        }
        ,
        i.prototype.setState = function(e) {
            switch (e) {
            case "open":
                this.assemble(),
                t.CSS.SetTranslate(this.node, 0, 0),
                this.node.scrollTop = 0,
                this._state = e;
                break;
            case "close":
                this.node.style[t.css.name.TRANSFORM] = t.Polyfills.Create3DTranslateFromString("100%", "0"),
                this._state = e
            }
        }
        ,
        i.ANIMATION_IN = "ANIMATION_IN",
        i.ANIMATION_OUT = "ANIMATION_OUT",
        i
    }(t.EventDispatcher);
    t.Article = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o) {
            this.segments = [],
            this.currentSegment = null ,
            this.onInsideWithinGroupBind = this.onInsideWithinGroup.bind(this),
            this.onOutsideWithinGroupBind = this.onOutsideWithinGroup.bind(this),
            this.data = e,
            this.menuItem = i,
            this.chapterWithinGroup = new t.WithinGroup,
            this.chapterWithinGroup.addEventListener(t.RenderWithinEvent.BEFORE, this.onOutsideWithinGroupBind),
            this.chapterWithinGroup.addEventListener(t.RenderWithinEvent.INSIDE, this.onInsideWithinGroupBind),
            this.chapterWithinGroup.addEventListener(t.RenderWithinEvent.AFTER, this.onOutsideWithinGroupBind),
            this.chapterScopeController = new t.ScopeControllerGroupList(this.chapterWithinGroup);
            for (var r, a = e.segments, h = 0, l = a.length; l > h; )
                r = new (t.ASegment.Factory.get(a[h].type))(a[h],n,o),
                this.segments.push(r),
                this.chapterScopeController.add(r.getScopeRender()),
                s.appendChild(r.getHTML()),
                h++
        }
        return e.prototype.getID = function() {
            return this.data.id
        }
        ,
        e.prototype.getIndex = function() {
            return this.menuItem.getIndex()
        }
        ,
        e.prototype.getMenuItem = function() {
            return this.menuItem
        }
        ,
        e.prototype.getBounds = function() {
            return this.chapterWithinGroup.getBounds()
        }
        ,
        e.prototype.getStart = function() {
            return this.chapterScopeController.getOffset() + this.segments[0].getStart()
        }
        ,
        e.prototype.getOffset = function() {
            return this.chapterScopeController.getOffset()
        }
        ,
        e.prototype.getHeight = function() {
            return this.chapterScopeController.getHeight()
        }
        ,
        e.prototype.getScopeRender = function() {
            return this.chapterScopeController
        }
        ,
        e.prototype.getSegmentByIndex = function(t) {
            return this.segments[t]
        }
        ,
        e.prototype.getCurrentSegment = function() {
            return this.currentSegment
        }
        ,
        e.prototype.onInsideWithinGroup = function() {}
        ,
        e.prototype.onOutsideWithinGroup = function() {}
        ,
        e.prototype.setSize = function(t) {
            this.size = t
        }
        ,
        e.prototype.updatePositionProps = function(t, e) {
            if (this.chapterWithinGroup.bounds.distanceToNumber(t) < e) {
                for (var i = t - this.chapterWithinGroup.getOffset(), s = 0, n = this.segments.length; n > s; )
                    this.segments[s].updatePositionProps(i, e, this.size.y) === !0 && (this.currentSegment = this.segments[s]),
                    s++;
                var o = this.chapterWithinGroup.bounds.clone()
                  , r = this.size.y;
                if (o.start += .5 * r,
                o.end -= .5 * r,
                o.contains(t) === !0)
                    return void 0 !== this.menuItem && this.menuItem.select(),
                    !0
            } else
                this.currentSegment = null ;
            return !1
        }
        ,
        e.prototype.computeSnapPoints = function(t) {
            for (var e = 0, i = this.segments.length; i > e; )
                this.segments[e].computeSnapPoints(t),
                e++
        }
        ,
        e
    }();
    t.Chapter = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e() {}
        return e.BREAKPOINT = 1023,
        e.LOADER_LINEAMOUNT = 6,
        e.DARK_BLUE = "#020e37",
        e.DARK_BLUE_RGB = t.RGB.FromHex("#020e37"),
        e.NORMAL_COLOR_RGB = e.DARK_BLUE_RGB,
        e.LIGHT_COLOR = "#F2F2F2",
        e.LIGHT_COLOR_RGB = t.RGB.FromHex("#F2F2F2"),
        e
    }();
    t.Config = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, t.HTML.Create("div", {
                "class": "mainPage"
            })),
            this.scrollY = 0,
            this.lastScrollY = 0,
            this.size = new t.Area(0,0),
            this.chapters = [],
            this.onFirstSegmentLoadedBind = this.onFirstSegmentLoaded.bind(this),
            this.updateLoadBoundsBind = this.updateLoadBounds.bind(this),
            this.isZoomedOut = !1,
            this.zoomOutDoneBind = this.zoomOutDone.bind(this),
            this.viewportHandler = new t.ViewportManeuverHandler(this),
            this.viewportHandler.setSnapHandlerY(this.handleSnap.bind(this));
            var n = document.getElementById("body");
            this.touchListener = new t.DirectionalTouchListener(n,this.viewportHandler,!1,!0),
            this.touchListener.preventDefaultTouch = !0,
            this.mouseWheelListener = new t.MouseWheelListener(n,this.viewportHandler,!1,!0),
            this.keyboardListener = new t.ViewportKeyboardListener(n,this.viewportHandler,!1,!0),
            this.htmlCanvasSymbol = new t.HTMLCanvasSymbol,
            this.htmlCanvasSymbol.transparent = !1,
            this.htmlCanvasSymbol.backgroundColor = "#ffffff",
            this.htmlCanvasSymbol.setRenderCondition(this.shouldRenderCanvas.bind(this)),
            this.htmlCanvasSymbol.start(),
            this.addChild(this.htmlCanvasSymbol),
            this.pageWithin = new t.WithinGroup,
            this.pageScopeController = new t.ScopeControllerGroupList(this.pageWithin);
            for (var o, r, a = i.chapters, h = 0, l = a.length; l > h; )
                a[h].showInMenu === !0 ? (o = new t.MenuItem(h,l,a[h]),
                s.addMenuItem(o)) : (o = new t.IntroMenuItem(h,l,a[h]),
                s.addMenuItem(o)),
                r = new t.Chapter(a[h],o,this.node,this.htmlCanvasSymbol,this.viewportHandler),
                this.chapters.push(r),
                this.pageScopeController.add(r.getScopeRender()),
                h++
        }
        return __extends(i, e),
        i.prototype.disable = function() {
            this.touchListener.disable(),
            this.mouseWheelListener.disable(),
            this.keyboardListener.disable()
        }
        ,
        i.prototype.enable = function() {
            this.touchListener.enable(),
            this.mouseWheelListener.enable(),
            this.keyboardListener.enable()
        }
        ,
        i.prototype.getCurrentChapterID = function() {
            return void 0 !== this.currentChapter ? this.currentChapter.getID() : null 
        }
        ,
        i.prototype.getCurrentChapterIndex = function() {
            return void 0 !== this.currentChapter ? this.currentChapter.getIndex() : null 
        }
        ,
        i.prototype.getCurrentChapter = function() {
            return void 0 !== this.currentChapter ? this.currentChapter : null 
        }
        ,
        i.prototype.getChapterByID = function(t) {
            for (var e = this.chapters.length; e--; )
                if (this.chapters[e].getID() === t)
                    return this.chapters[e];
            return this.chapters[0]
        }
        ,
        i.prototype.setStartChapter = function(e) {
            var i = this.getChapterByID(e);
            if (null  !== i) {
                this.viewportHandler.jumpToY(-i.getStart() - this.size.y);
                var s = i.getSegmentByIndex(0);
                s.addEventListener(t.TaskEvent.COMPLETE, this.onFirstSegmentLoadedBind),
                new t.Intro(this,i.getID(),s,this.htmlCanvasSymbol)
            }
        }
        ,
        i.prototype.onFirstSegmentLoaded = function(e) {
            e.target.removeEventListener(t.TaskEvent.COMPLETE, this.onFirstSegmentLoadedBind),
            this.onFirstSegmentLoadedBind = null ,
            this.enable()
        }
        ,
        i.prototype.transitionToChapterByID = function(e) {
            var i;
            i = void 0 !== this.currentChapter ? this.currentChapter.getIndex() : -1;
            var s = this.getChapterByID(e);
            if (null  !== s) {
                this.disable();
                var n = s.getSegmentByIndex(0);
                new t.Transition(this,s.getID(),n,this.htmlCanvasSymbol,i > s.getIndex())
            }
        }
        ,
        i.prototype.jumpToChapterByID = function(t) {
            var e = this.getChapterByID(t);
            this.enable(),
            this.viewportHandler.jumpToY(-e.getStart() - this.size.y)
        }
        ,
        i.prototype.shouldRenderCanvas = function() {
            var e = this.scrollY !== this.lastScrollY || t.GlobalRenderManager.amountOfRenders() > 1;
            return e && (this.lastScrollY = this.scrollY),
            e
        }
        ,
        i.prototype.setPosition = function(t) {}
        ,
        i.prototype.getPosition = function() {
            return new t.Vec(0,this.scrollY)
        }
        ,
        i.prototype.setPositionX = function(t) {}
        ,
        i.prototype.setPositionY = function(t) {
            this.scrollY = t,
            this.pageWithin.setProgress(-this.scrollY),
            void 0 === this.loadBoundsInterval && (this.updateLoadBounds(),
            this.loadBoundsInterval = setTimeout(this.updateLoadBoundsBind, 200))
        }
        ,
        i.prototype.updateLoadBounds = function() {
            this.loadBoundsInterval = void 0;
            for (var e, i = 0, s = this.chapters.length; s > i; ) {
                if (this.chapters[i].updatePositionProps(-this.scrollY, this.loadDistanceMax) === !0) {
                    if (this.currentChapter !== this.chapters[i]) {
                        this.currentChapter = this.chapters[i];
                        var n = t.URLManager.GetPathList[0]
                          , o = this.currentChapter.getID();
                        ("" !== n && null  != n || "0" !== o) && (n === o || t.URLManager.GoToPathAtLevel(0, this.currentChapter.getID())),
                        t.GoogleAnalytics.send(window.location.href, document.title)
                    }
                    e = this.currentChapter.getCurrentSegment(),
                    null  !== e && (e.isDark() === !0 ? t.Main.Menu.makeBright() : e.isNormal() === !0 ? t.Main.Menu.makeNormal() : t.Main.Menu.makeDark())
                }
                i++
            }
        }
        ,
        i.prototype.zoomIn = function() {
            this.isZoomedOut !== !1 && (this.isZoomedOut = !1,
            t.DeviceInfo.HasTransition() === !0 && (void 0 === this.overlay && (this.overlay = t.HTML.Create("div", {
                "class": "main__overlay"
            }),
            this.node.appendChild(this.overlay)),
            t.CSS.SetTransition(this.overlay, "opacity 1s linear 1s", this.zoomOutDoneBind),
            t.CSS.SetOpacity(this.overlay, 0),
            t.CSS.SetTransition(this.node, t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM) + " 1s " + t.CSSEase.CubicOut + " 1s"),
            t.CSS.SetScale(this.node, 1)))
        }
        ,
        i.prototype.zoomOut = function() {
            if (this.isZoomedOut !== !0 && (this.isZoomedOut = !0,
            t.DeviceInfo.HasTransition() === !0)) {
                void 0 === this.overlay && (this.overlay = t.HTML.Create("div", {
                    "class": "main__overlay"
                }),
                this.node.appendChild(this.overlay),
                t.CSS.SetOpacity(this.overlay, 0),
                t.CSS.ForceUpdate(this.overlay)),
                t.CSS.SetTransition(this.overlay, "opacity 1s linear"),
                t.CSS.SetOpacity(this.overlay, 1),
                t.CSS.SetTransition(this.node, t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM) + " 1s " + t.CSSEase.CubicOut);
                var e = Math.max(.95 * this.size.x / this.size.x, .95 * this.size.y / this.size.y);
                t.CSS.SetScale(this.node, e)
            }
        }
        ,
        i.prototype.zoomOutDone = function() {
            void 0 !== this.overlay && (this.node.removeChild(this.overlay),
            this.overlay = void 0)
        }
        ,
        i.prototype.getSize = function() {
            return this.size
        }
        ,
        i.prototype.setSize = function(t) {
            this.size = t,
            this.loadDistanceMax = 4.9 * this.size.y,
            this.htmlCanvasSymbol.setSize(this.size);
            this.pageScopeController.updateSize(this.size);
            this.snapPoints = [];
            for (var e = 0, i = this.chapters.length; i > e; )
                this.chapters[e].setSize(this.size),
                this.chapters[e].computeSnapPoints(this.snapPoints),
                e++;
            var s = this.chapters[i - 1].getOffset() + this.chapters[i - 1].getHeight();
            this.viewportHandler.setYLimit(-s, -this.size.y),
            this.pageWithin.updateProgress(-this.scrollY),
            this.shouldRenderCanvas() === !1 && this.htmlCanvasSymbol.drawCanvas()
        }
        ,
        i.prototype.handleSnap = function(t, e, i) {
            for (var s, n, o = 0, r = t + e, a = this.snapPoints.length, h = (this.size.y,
            999999); a > o; )
                this.snapPoints[o].doesSnap(-r) === !0 && (n = this.snapPoints[o].getDistance(-r),
                h > n && (s = this.snapPoints[o]),
                h = n),
                o++;
            if (void 0 !== s) {
                var l = -s.getPoint()
                  , d = l - t;
                return i > 0 && 0 > d ? t : 0 > i && d > 0 ? t : l
            }
            return t
        }
        ,
        i
    }(t.HTMLSymbolContainer);
    t.MainPage = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e) {
            var i = t.HTML.Create("div", {
                "class": "orientationSign"
            });
            e.appendChild(i)
        }
        return e
    }();
    t.OrientationSign = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this);
            var n = 1e3;
            this.a = new t.VectorMorphRender(t.Vec.FromZero(),t.Vec.FromZero(),400 + n,n,t.Ease.CubicIn),
            this.b = new t.VectorMorphRender(t.Vec.FromZero(),t.Vec.FromZero(),400,n,t.Ease.CubicOut),
            this.line = new t.Line(this.a,this.b),
            this.shapeSymbol = new t.CanvasShapeSymbol(this.line),
            this.shapeSymbol.setLineColor(s),
            this.shapeSymbol.setLineWidth(1),
            this.shapeSymbol.transform.o.x = -.5,
            this.addChild(this.shapeSymbol),
            this.textMaskRect = new t.Rectangle(new t.Vec(-100,-20),new t.Vec(200,20)),
            this.textMask = new t.CanvasSymbolContainer,
            this.textMask.setMask(this.textMaskRect),
            this.addChild(this.textMask),
            this.textSymbol = new t.CanvasTextSymbol(i,"Miller-Display",16),
            this.textSymbol.setColor(s),
            this.textSymbol.setAlign("center"),
            this.textSymbol.setBaseline("bottom"),
            this.textMask.addChild(this.textSymbol),
            this.tween = new t.Tween;
            var o = this.labelPositionProgress.bind(this);
            this.tween.add(new t.FunctionRender(o,-24,0,0,800,t.Ease.CubicOut)),
            this.tween.add(new t.FunctionRender(o,0,24,1300,700,t.Ease.CubicIn)),
            this.tween.add(this.a),
            this.tween.add(this.b),
            this.tween.makeLoop()
        }
        return __extends(i, e),
        i.prototype.setHeight = function(t) {
            this.a.from.y = -t,
            this.a.to.y = 0,
            this.b.from.y = -t,
            this.b.to.y = 0,
            this.textMask.transform.t.y = Math.round(-t - 12)
        }
        ,
        i.prototype.play = function() {
            this.tween.play()
        }
        ,
        i.prototype.pause = function() {
            this.tween.stop()
        }
        ,
        i.prototype.labelPositionProgress = function(t) {
            this.textSymbol.transform.t.y = t,
            this.textSymbol.setAlpha(1 - .05 * Math.abs(t))
        }
        ,
        i
    }(t.CanvasSymbolContainer);
    t.ScrollIndicator = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i) {
            this.sharingNodesArr = [],
            this.onClickShareBind = this.onClickShare.bind(this),
            this.closeShareCompleteBind = this.closeShareComplete.bind(this),
            this.onClickFacebookBind = this.onClickFacebook.bind(this),
            this.onClickTwitterBind = this.onClickTwitter.bind(this),
            this.onClickLinkedinBind = this.onClickLinkedin.bind(this),
            this.shareUrl = e,
            this.shareBnNode = t.HTML.Create("div", {
                "class": "share"
            }),
            this.aNode = t.HTML.Create("a", {
                html: i || "Share"
            }),
            this.aNode.addEventListener("click", this.onClickShareBind),
            this.shareBnNode.appendChild(this.aNode)
        }
        return e.prototype.getHTML = function() {
            return this.shareBnNode
        }
        ,
        e.prototype.onClickShare = function(t) {
            t.preventDefault(),
            this.open()
        }
        ,
        e.prototype.open = function() {
            void 0 !== e.CurrentShareButton && e.CurrentShareButton !== this && e.CurrentShareButton.close(),
            e.CurrentShareButton = this,
            this.aNode.removeEventListener("click", this.onClickShareBind),
            t.CSS.SetTransition(this.aNode, "all 300ms ease-in"),
            t.CSS.SetTranslate(this.aNode, 0, -40),
            t.CSS.SetOpacity(this.aNode, 0),
            this.assemble();
            var i, s;
            for (i = 0; s = this.sharingNodesArr[i]; i++)
                t.CSS.ForceUpdate(s),
                t.CSS.SetTransition(s, "all 400ms ease-out " + (200 * i + 150) + "ms"),
                t.CSS.SetTranslate(s, 0, 0),
                t.CSS.SetOpacity(s, 1)
        }
        ,
        e.prototype.assemble = function() {
            this.ul = t.HTML.Create("ul");
            var e;
            this.facebookNode = t.HTML.Create("a", {
                "class": "socialBn facebook",
                target: "_blank",
                title: "Share on Facebook",
                html: "Facebook"
            }),
            e = t.HTML.Create("li"),
            e.appendChild(this.facebookNode),
            this.ul.appendChild(e),
            this.twitterNode = t.HTML.Create("a", {
                "class": "socialBn twitter",
                target: "_blank",
                title: "Share on Twitter",
                html: "Twitter"
            }),
            e = t.HTML.Create("li"),
            e.appendChild(this.twitterNode),
            this.ul.appendChild(e),
            this.linkedinNode = t.HTML.Create("a", {
                "class": "socialBn linkedin",
                target: "_blank",
                title: "Share on LinkedIn",
                html: "LinkedIn"
            }),
            e = t.HTML.Create("li"),
            e.appendChild(this.linkedinNode),
            this.ul.appendChild(e),
            this.sharingNodesArr.push(this.facebookNode),
            this.sharingNodesArr.push(this.twitterNode),
            this.sharingNodesArr.push(this.linkedinNode);
            var i, s;
            for (i = 0; s = this.sharingNodesArr[i]; i++)
                t.CSS.SetTranslate(s, 0, 40),
                t.CSS.SetOpacity(s, 0);
            this.facebookNode.addEventListener("click", this.onClickFacebookBind),
            this.twitterNode.addEventListener("click", this.onClickTwitterBind),
            this.linkedinNode.addEventListener("click", this.onClickLinkedinBind),
            this.shareBnNode.appendChild(this.ul)
        }
        ,
        e.prototype.close = function() {
            var e, i;
            for (e = 0; i = this.sharingNodesArr[e]; e++)
                t.CSS.ForceUpdate(i),
                t.CSS.SetTransition(i, "all 300ms ease-out " + 100 * e + "ms"),
                t.CSS.SetTranslate(i, 0, 40),
                t.CSS.SetOpacity(i, 0);
            this.aNode.addEventListener("click", this.onClickShareBind),
            t.CSS.SetTransition(this.aNode, "all 300ms ease-in 300ms", this.closeShareCompleteBind),
            t.CSS.SetTranslate(this.aNode, 0, 0),
            t.CSS.SetOpacity(this.aNode, 1)
        }
        ,
        e.prototype.closeShareComplete = function() {
            this.disassemble()
        }
        ,
        e.prototype.disassemble = function() {
            this.facebookNode.removeEventListener("click", this.onClickFacebookBind),
            this.twitterNode.removeEventListener("click", this.onClickTwitterBind),
            this.linkedinNode.removeEventListener("click", this.onClickLinkedinBind),
            this.shareBnNode.removeChild(this.ul),
            this.ul = void 0,
            this.linkedinNode = void 0,
            this.twitterNode = void 0,
            this.facebookNode = void 0,
            this.sharingNodesArr = [],
            e.CurrentShareButton = void 0
        }
        ,
        e.prototype.onClickFacebook = function(t) {
            t.preventDefault();
            var e = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.shareUrl);
            window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"),
            this.close()
        }
        ,
        e.prototype.onClickTwitter = function(t) {
            t.preventDefault();
            var e = "https://twitter.com/share?url=" + encodeURIComponent(this.shareUrl);
            window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"),
            this.close()
        }
        ,
        e.prototype.onClickLinkedin = function(t) {
            t.preventDefault();
            var e = "http://www.linkedin.com/shareArticle?url=" + encodeURIComponent(this.shareUrl);
            window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"),
            this.close()
        }
        ,
        e
    }();
    t.ShareButton = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i) {
            this.index = e,
            this.curve = t.CubicBezier.FromZero(),
            i.add(this.curve)
        }
        return e.prototype.setSize = function(t) {
            this.size = t;
            var e = t.x * this.index;
            this.curve.a.x = e,
            this.curve.aC.x = e + .33 * this.size.x,
            this.curve.bC.x = e + .66 * this.size.x,
            this.curve.b.x = e + this.size.x
        }
        ,
        e.prototype.setProgress = function(t) {
            t += .5 * Math.PI * this.index;
            var e = t;
            this.curve.a.y = Math.cos(t) * this.size.y,
            t += .5 * Math.PI,
            this.curve.b.y = Math.cos(t) * this.size.y,
            this.curve.aC.y = this.curve.a.y - Math.sin(e) * this.size.y * .5,
            e -= .5 * Math.PI,
            this.curve.bC.y = this.curve.b.y - Math.sin(e) * this.size.y * .5
        }
        ,
        e.prototype.getCurve = function() {
            return this.curve
        }
        ,
        e
    }();
    t.Wave = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, t.HTML.Create("div", {
                "class": "article__component article__component--" + i.type
            })),
            this._data = i
        }
        return __extends(i, e),
        i.prototype.getTask = function() {
            return void 0 !== this._task ? this._task : null 
        }
        ,
        i.prototype.getWithin = function() {
            return null 
        }
        ,
        i.prototype.setSize = function(t) {}
        ,
        i.prototype.open = function() {}
        ,
        i.prototype.close = function() {}
        ,
        i.Factory = new t.RuntimeFactory,
        i
    }(t.HTMLSymbol);
    t.AArticleComp = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, i),
            this.onEndNotCompleteBind = this.onEndNotComplete.bind(this),
            this.onEndCompleteBind = this.onEndComplete.bind(this),
            this._content = t.HTML.Create("div", {
                "class": "end__content"
            }),
            this._content.style.backgroundColor = s,
            this.addClass(i.blueLogo === !0 ? "blue" : "white"),
            this.within = new t.IsWithin,
            this.within.addEventListener(t.RenderWithinEvent.BEFORE, this.onEndNotCompleteBind),
            this.within.addEventListener(t.RenderWithinEvent.INSIDE, this.onEndCompleteBind),
            this.within.addEventListener(t.RenderWithinEvent.AFTER, this.onEndCompleteBind),
            this.node.appendChild(this._content)
        }
        return __extends(i, e),
        i.prototype.getWithin = function() {
            return this.within
        }
        ,
        i.prototype.setSize = function(t) {
            this.within.bounds.start = this.node.offsetTop - t.y + .5 * this.node.offsetHeight,
            this.within.bounds.end = this.within.bounds.start
        }
        ,
        i.prototype.onEndNotComplete = function(e) {
            this._content.style[t.css.name.TRANSFORM] = t.Polyfills.Create3DTranslateFromString("0", "100%")
        }
        ,
        i.prototype.onEndComplete = function(e) {
            t.CSS.SetTranslate(this._content, 0, 0)
        }
        ,
        i
    }(t.AArticleComp);
    t.EndArticleComp = e,
    t.AArticleComp.Factory.addClass("end", e);
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            void 0 === n && (n = "p"),
            e.call(this, i),
            "color" in i && (this.node.style.color = i.color),
            this.node.style.backgroundColor = s,
            this.counter = new t.HTMLNumberTransition("h2",i.value,",",50),
            this.counter.updateSize();
            var o = t.HTML.Create("h3", {
                html: i.unit
            })
              , r = t.HTML.Create("p", {
                html: i.description
            });
            this.node.appendChild(this.counter.getHTML()),
            this.node.appendChild(o),
            this.node.appendChild(r)
        }
        return __extends(i, e),
        i.prototype.getWithin = function() {
            return this.counter.getTween()
        }
        ,
        i.prototype.setSize = function(t) {
            this.counter.getTween().setOffset(this.node.offsetTop - .8 * t.y)
        }
        ,
        i
    }(t.AArticleComp);
    t.FactArticleComp = e,
    t.AArticleComp.Factory.addClass("fact", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, i),
            this._figureImages = [],
            this._imageSources = [],
            this._responsiveImageRequests = [],
            this.functionRenderUpdateBind = this.functionRenderUpdate.bind(this),
            this.onImageTaskCompleteBind = this.onImageTaskComplete.bind(this),
            this._figure = t.HTML.Create("figure"),
            this._figureOverlay = t.HTML.Create("div", {
                "class": "figure__overlay"
            }),
            this._figureOverlay.style.backgroundColor = s;
            var n = i.media.sourceSize.split("x")
              , o = parseFloat(n[1]) / parseFloat(n[0]) * 100;
            this._figureImageContainer = t.HTML.Create("div", {
                "class": "figure__media"
            }),
            t.HTML.SetStyles(this._figureImageContainer, {
                backgroundColor: i.media.color,
                paddingTop: o + "%"
            }),
            "caption" in i && (this._figureCaption = t.HTML.Create("figcaption", {
                html: i.caption
            }),
            this._figure.appendChild(this._figureCaption)),
            this._figure.appendChild(this._figureOverlay),
            this._figure.appendChild(this._figureImageContainer),
            this.node.appendChild(this._figure),
            this._imageSources = i.media.sources || [i.media];
            var r, a = this._imageSources.length;
            t.HTML.AddClass(this._figureImageContainer, "figure__media--" + a);
            for (var h = new t.FitDef(null ,null ,0,0); a--; )
                r = new t.ResponsiveImageRequest(this._imageSources[a].url,new t.Vector(parseFloat(n[0]),parseFloat(n[1])),h),
                r.addEventListener(t.TaskEvent.COMPLETE, this.onImageTaskCompleteBind),
                this._responsiveImageRequests.push(r);
            this._functionRender = new t.FunctionRender(this.functionRenderUpdateBind,0,1,0,1,t.Ease.Linear),
            this.within = new t.Tween,
            this.within.add(this._functionRender)
        }
        return __extends(i, e),
        i.prototype.functionRenderUpdate = function(e) {
            t.CSS.SetTranslate(this._figureOverlay, 0, 30 * e)
        }
        ,
        i.prototype.getWithin = function() {
            return this.within
        }
        ,
        i.prototype.setSize = function(e) {
            for (var i = this._responsiveImageRequests.length; i--; )
                this._responsiveImageRequests[i].setSize(new t.Vector(this._figure.offsetWidth,this._figure.offsetHeight)),
                this._responsiveImageRequests[i].execute();
            this._functionRender.set(-1, 1, this.node.offsetTop - e.y, e.y + this.node.offsetHeight),
            this.within.updateBounds()
        }
        ,
        i.prototype.onImageTaskComplete = function(e) {
            var i = this._responsiveImageRequests.indexOf(e.target);
            this._figureImages.length < this._responsiveImageRequests.length ? (this._figureImageContainer.appendChild(e.target.data),
            this._figureImages.push(e.target.data),
            t.CSS.ForceUpdate(e.target.data),
            this._figureImages.length === this._responsiveImageRequests.length && this.open()) : this._figureImages[i].src = e.target.data.src
        }
        ,
        i.prototype.open = function() {
            t.HTML.AddClass(this._figureImageContainer, "play");
            for (var e, i = Math.max(0, this._figureImages.length - 1); i < this._figureImages.length; i++)
                e = this._figureImages[i],
                t.CSS.SetTransition(e, "opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)"),
                t.CSS.SetOpacity(e, 1)
        }
        ,
        i.prototype.close = function() {
            t.HTML.RemoveClass(this._figureImageContainer, "play");
            for (var e, i = 0; e = this._figureImages[i]; i++)
                t.CSS.SetTransition(e, "opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)"),
                t.CSS.SetOpacity(e, 0)
        }
        ,
        i
    }(t.AArticleComp);
    t.FigureArticleComp = e,
    t.AArticleComp.Factory.addClass("figure", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this, i);
            var s = i.title.split(/(\s\d+[\.\d]{0,}\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g);
            this.title = new t.HTMLTitleTweenSymbol("h2");
            for (var n, o = 0, r = s.length; r > o; )
                "<br/>" == s[o] ? this.title.addChild(new t.HTMLSymbol("br")) : "" == s[o] || (" " == s[o] ? s[o + 1] = " " + s[o + 1] : (n = new t.HTMLWordTransition("div",s[o]),
                t.CSS.SetTransition(n.getHTML(), "opacity 400ms linear", null , !1),
                this.title.add(n))),
                o++;
            this.node.appendChild(this.title.getHTML())
        }
        return __extends(i, e),
        i.prototype.open = function() {
            var t = this.title.getTween();
            t.forwardFrom(0)
        }
        ,
        i.prototype.close = function() {
            var t = this.title.getTween();
            t.setProgress(0)
        }
        ,
        i
    }(t.AArticleComp);
    t.HeadlineArticleComp = e,
    t.AArticleComp.Factory.addClass("headline", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, i),
            this.functionRenderUpdateBind = this.functionRenderUpdate.bind(this),
            this._isLoaded = !1,
            this._imageHandlerBind = this._imageHandler.bind(this),
            this._isOpened = !1;
            var n = i.media.sourceSize.split("x")
              , o = parseFloat(n[1]) / parseFloat(n[0]);
            this.imageRatio = o,
            this._imageLoader = new t.ResponsiveImageRequest(this._data.media.url,new t.Vector(parseFloat(n[0]),parseFloat(n[1])),new t.FitDef(100,null ,0,0)),
            this._imageLoader.addEventListener(t.TaskEvent.COMPLETE, this._imageHandlerBind),
            this._container = t.HTML.Create("div", {
                "class": "hero__media"
            }),
            this._overlay = t.HTML.Create("div", {
                "class": "hero__overlay"
            }),
            this._overlay.style.backgroundColor = s;
            var r = this._container.offsetWidth;
            this._container.style.height = r * this.imageRatio + "px",
            this._container.style.backgroundColor = t.ColorUtility.StringToRGB(s).darken(.25).toString(),
            this.node.appendChild(this._overlay),
            this.node.appendChild(this._container),
            this._functionRender = new t.FunctionRender(this.functionRenderUpdateBind,0,1,0,1,t.Ease.Linear),
            this.within = new t.Tween,
            this.within.add(this._functionRender)
        }
        return __extends(i, e),
        i.prototype.functionRenderUpdate = function(e) {
            t.CSS.SetTranslate(this._overlay, 0, 30 * e)
        }
        ,
        i.prototype.getWithin = function() {
            return this.within
        }
        ,
        i.prototype.setSize = function(e) {
            this._functionRender.set(-1, 1, this.node.offsetTop - e.y, e.y + this.node.offsetHeight),
            this.within.updateBounds();
            var i = this._container.offsetWidth;
            this._container.style.height = i * this.imageRatio + "px",
            this._imageLoader.setSize(new t.Vector(i,i * this.imageRatio)),
            this._imageLoader.execute()
        }
        ,
        i.prototype._imageHandler = function(e) {
            this._isLoaded = !0,
            void 0 === this._image && (this._image = t.HTML.Create("div"),
            this._container.appendChild(this._image),
            t.CSS.SetOpacity(this._image, 0),
            t.CSS.ForceUpdate(this._image)),
            this._image.style.backgroundImage = "url('" + e.target.url + "')",
            this._isOpened === !0 && this.open()
        }
        ,
        i.prototype.open = function() {
            void 0 !== this._image && this._isLoaded === !0 && (t.CSS.SetTransition(this._image, "opacity 1s", null , !1),
            t.CSS.SetOpacity(this._image, 1)),
            this._isOpened = !0
        }
        ,
        i.prototype.close = function() {
            this._isOpened = !1,
            this._isLoaded = !1,
            void 0 !== this._image && (t.CSS.SetTransition(this._image, "none"),
            t.CSS.SetOpacity(this._image, 0),
            t.CSS.SetTranslate(this._container, .1 * this._imageLoader.getRealSize().x, 0))
        }
        ,
        i
    }(t.AArticleComp);
    t.HeroArticleComp = e,
    t.AArticleComp.Factory.addClass("hero", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            void 0 === n && (n = "p"),
            e.call(this, i),
            this._paragraphs = [],
            this.onTitleNotCompleteBind = this.onTitleNotComplete.bind(this),
            this.onTitleCompleteBind = this.onTitleComplete.bind(this);
            for (var o, r, a = 0; r = i.paragraphs[a]; a++)
                o = t.HTML.Create(n, {
                    html: r
                }),
                o.style[t.css.name.OPACITY] = "0",
                this._paragraphs.push(o),
                t.CSS.SetTransition(o, "opacity 400ms linear " + 100 * a + "ms", null , !1),
                this.node.appendChild(o);
            this.within = new t.IsWithin,
            this.within.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.within.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleCompleteBind),
            this.within.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleCompleteBind)
        }
        return __extends(i, e),
        i.prototype.getWithin = function() {
            return this.within
        }
        ,
        i.prototype.setSize = function(t) {
            this.within.bounds.start = this.node.offsetTop - .85 * t.y,
            this.within.bounds.end = this.within.bounds.start
        }
        ,
        i.prototype.onTitleNotComplete = function(e) {
            for (var i, s = 0; i = this._paragraphs[s]; s++)
                i.style[t.css.name.OPACITY] = "0"
        }
        ,
        i.prototype.onTitleComplete = function(e) {
            for (var i, s = 0; i = this._paragraphs[s]; s++)
                i.style[t.css.name.OPACITY] = "1"
        }
        ,
        i
    }(t.AArticleComp);
    t.ParagraphArticleComp = e,
    t.AArticleComp.Factory.addClass("paragraph", e),
    t.AArticleComp.Factory.addClass("paragraph-highlight", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            t.call(this, e, i, "h4")
        }
        return __extends(e, t),
        e
    }(t.ParagraphArticleComp);
    t.PrologueArticleComp = e,
    t.AArticleComp.Factory.addClass("prologue", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this, i),
            this.onTitleNotCompleteBind = this.onTitleNotComplete.bind(this),
            this.onTitleCompleteBind = this.onTitleComplete.bind(this),
            this._blockquote = t.HTML.Create("blockquote");
            var s = i.quotation.split(/(\s\d+[\.\d]{0,}\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g);
            this._quote = new t.HTMLTitleTweenSymbol("p");
            for (var n, o = 0, r = s.length; r > o; )
                "<br/>" == s[o] ? this._quote.addChild(new t.HTMLSymbol("br")) : "" == s[o] || (" " == s[o] ? s[o + 1] = " " + s[o + 1] : (n = new t.HTMLWordTransition("div",s[o]),
                t.CSS.SetTransition(n.getHTML(), "opacity 400ms linear", null , !1),
                this._quote.add(n))),
                o++;
            this.within = new t.Tween,
            this._quoteTween = new t.TweenRender(this._quote.getTween(),0,1,0,1,t.Ease.Linear),
            this._blockquote.appendChild(this._quote.getHTML()),
            this._sourceTween = new t.IsWithin,
            "source" in i && (this._source = t.HTML.Create("footer", {
                html: i.source
            }),
            t.CSS.SetTransition(this._source, "opacity 400ms linear", null , !1),
            this._sourceTween.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this._sourceTween.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleCompleteBind),
            this._sourceTween.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this._blockquote.appendChild(this._source),
            this.within.add(this._sourceTween)),
            this.node.appendChild(this._blockquote),
            this.within.add(this._quoteTween)
        }
        return __extends(i, e),
        i.prototype.getWithin = function() {
            return this.within
        }
        ,
        i.prototype.setSize = function(t) {
            this._sourceTween.bounds.start = this.node.offsetTop - .85 * t.y + this.node.offsetHeight,
            this._sourceTween.bounds.end = this._sourceTween.bounds.start,
            this._quoteTween.set(this._quote.getTween().bounds.start, this._quote.getTween().bounds.end, this.node.offsetTop - t.y, .5 * (t.y + this.node.offsetHeight)),
            this.within.updateBounds()
        }
        ,
        i.prototype.onTitleNotComplete = function(e) {
            this._source.style[t.css.name.OPACITY] = "0"
        }
        ,
        i.prototype.onTitleComplete = function(e) {
            this._source.style[t.css.name.OPACITY] = "1"
        }
        ,
        i
    }(t.AArticleComp);
    t.QuoteArticleComp = e,
    t.AArticleComp.Factory.addClass("quote", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this, i);
            var s = i.title.split(/(\s\d+[\.\d]+\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g);
            this._title = new t.HTMLTitleTweenSymbol("h3");
            for (var n, o = 0, r = s.length; r > o; )
                "<br/>" == s[o] ? this._title.addChild(new t.HTMLSymbol("br")) : "" == s[o] || (" " == s[o] ? s[o + 1] = " " + s[o + 1] : (n = new t.HTMLWordTransition("div",s[o]),
                t.CSS.SetTransition(n.getHTML(), "opacity 400ms linear", null , !1),
                this._title.add(n))),
                o++;
            this.node.appendChild(this._title.getHTML()),
            this.within = new t.Tween,
            this._titleTween = new t.TweenRender(this._title.getTween(),0,1,0,1,t.Ease.Linear),
            this.within.add(this._titleTween)
        }
        return __extends(i, e),
        i.prototype.getWithin = function() {
            return this.within
        }
        ,
        i.prototype.setSize = function(t) {
            this._titleTween.set(this._title.getTween().bounds.start, this._title.getTween().bounds.end, this.node.offsetTop - t.y, .5 * (t.y + this.node.offsetHeight)),
            this.within.updateBounds()
        }
        ,
        i
    }(t.AArticleComp);
    t.SubHeadlineArticleComp = e,
    t.AArticleComp.Factory.addClass("sub-headline", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this, i),
            this._iframeContainer = t.HTML.Create("div", {
                "class": "video__media"
            }),
            this._iframe = t.HTML.Create("iframe", {
                src: i.url
            }),
            this._iframeContainer.appendChild(this._iframe),
            this.node.appendChild(this._iframeContainer),
            "source" in i && (this._source = t.HTML.Create("p", {
                html: i.source
            }),
            this.node.appendChild(this._source))
        }
        return __extends(i, e),
        i
    }(t.AArticleComp);
    t.VideoArticleComp = e,
    t.AArticleComp.Factory.addClass("video", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n) {
            this.overlayMargin = 0,
            this.onResizeBind = this.onResize.bind(this),
            this.lineSizeProgress = 0,
            this.onStartSegmentCompleteBind = this.onStartSegmentComplete.bind(this),
            this.setOverlayProgressBind = this.setOverlayProgress.bind(this),
            this.mainPage = e,
            this.chapterID = i,
            this.startSegment = s,
            this.canvas = n,
            this.bodyNode = t.HTML.GetElement("body"),
            this.startSegment.useForIntro(),
            this.overlayRect = t.Rectangle.FromZero(),
            this.overlaySymbol = new t.CanvasShapeSymbol(this.overlayRect),
            this.overlaySymbol.setFillColor(this.startSegment.getColor()),
            n.addChild(this.overlaySymbol),
            this.loaderLine = new t.IntroLine(t.Config.LOADER_LINEAMOUNT,3,this.onSizeUpComplete.bind(this)),
            n.addChild(this.loaderLine),
            this.onResize(),
            window.addEventListener("resize", this.onResizeBind);
            var o = new t.Tween;
            o.addFunction(this.updateLineSizeProgress.bind(this), 0, 1, 450, 1500, t.Ease.CubicOut),
            o.addFunction(this.loaderLine.setAlpha.bind(this.loaderLine), 0, 1, 150, 1e3, t.Ease.Linear),
            o.makeAutoDestroy(),
            o.play(),
            s.addEventListener(t.TaskEvent.COMPLETE, this.onStartSegmentCompleteBind)
        }
        return e.prototype.onResize = function(e) {
            this.size = new t.Vec(this.bodyNode.offsetWidth,this.bodyNode.offsetHeight),
            this.updateRectSize(),
            void 0 !== this.loaderLine && (this.loaderLine.transform.t.y = .5 * this.size.y,
            this.updateLineSize())
        }
        ,
        e.prototype.updateLineWidthProgress = function(t) {
            this.loaderLine.setLineWidth(t)
        }
        ,
        e.prototype.updateLineSizeProgress = function(t) {
            this.lineSizeProgress = t,
            this.updateLineSize()
        }
        ,
        e.prototype.updateLineSize = function() {
            if (void 0 !== this.loaderLine) {
                var e = Math.max(.2 * this.size.x, .25 * this.size.y)
                  , i = new t.Vec(e,.05 * e * this.lineSizeProgress);
                this.loaderLine.setSize(i),
                this.loaderLine.transform.t.x = .5 * this.size.x - (.5 * i.x + 2 * i.x)
            }
        }
        ,
        e.prototype.onSizeUpComplete = function(t) {
            setTimeout(this.onWaitTimeComplete.bind(this), 550)
        }
        ,
        e.prototype.onWaitTimeComplete = function(t) {
            this.waitingComplete = !0,
            this.loadComplete === !0 && this.onIntroReady()
        }
        ,
        e.prototype.onStartSegmentComplete = function(e) {
            this.startSegment.removeEventListener(t.TaskEvent.COMPLETE, this.onStartSegmentCompleteBind),
            this.loadComplete = !0,
            this.waitingComplete === !0 && this.onIntroReady()
        }
        ,
        e.prototype.onIntroReady = function() {
            var e = new t.FunctionTween(this.setOverlayProgressBind,0,1,0,2e3,t.Ease.CubicInOut);
            e.addEventListener(t.TweenEvent.COMPLETE, this.onOverlayTweenComplete.bind(this)),
            e.makeAutoDestroy(),
            e.execute(),
            t.Main.Menu.playIntro(this.loaderLine.getProgress()),
            this.mainPage.jumpToChapterByID(this.chapterID),
            this.canvas.removeChild(this.loaderLine),
            this.loaderLine.destroy(),
            this.loaderLine = void 0
        }
        ,
        e.prototype.onOverlayTweenComplete = function(t) {
            this.destroy()
        }
        ,
        e.prototype.setOverlayProgress = function(t) {
            this.overlayMargin = Math.round(.025 * this.size.x * t),
            this.overlaySymbol.setAlpha(1 - .2 * t),
            this.updateRectSize()
        }
        ,
        e.prototype.updateRectSize = function() {
            this.overlayRect.a.set(this.overlayMargin, this.overlayMargin),
            this.overlayRect.s.set(this.size.x - 2 * this.overlayMargin, this.size.y - 2 * this.overlayMargin)
        }
        ,
        e.prototype.destroy = function() {
            this.mainPage = null ,
            window.removeEventListener("resize", this.onResizeBind),
            this.startSegment.playOpeningAnimation(0),
            this.canvas.removeChild(this.overlaySymbol),
            this.overlaySymbol.destroy(),
            this.overlaySymbol = void 0
        }
        ,
        e
    }();
    t.Intro = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, new t.OffsetableShape(new t.Path(!0))),
            this.progress = 0,
            this.waves = [],
            this.onCompleteHandlerBind = this.onCompleteHandler.bind(this),
            this.amountOfWaves = i * s,
            this.repeatShape = s,
            this.waveSize = t.Vec.FromZero(),
            this.setLineWidth(20),
            this.setLineColor("#ffffff"),
            this.offsetPath = this.shape,
            this.path = this.offsetPath.shape;
            for (var o, r = 0, a = this.amountOfWaves; a > r; )
                o = new t.Wave(r,this.path),
                this.waves.push(o),
                r++;
            this.tween = new t.Tween,
            this.tween.add(new t.FunctionRender(this.setProgress.bind(this),Math.PI,0,200,1500,t.Ease.Linear)),
            this.tween.add(new t.FunctionRender(this.offsetPath.setOffsetStart.bind(this.offsetPath),0,.666667,200,1500,t.Ease.QuintOut)),
            this.tween.add(new t.FunctionRender(this.offsetPath.setOffsetEnd.bind(this.offsetPath),.33,1,200,1500,t.Ease.CubicOut)),
            this.tween.add(new t.FunctionRender(this.offsetPath.update.bind(this.offsetPath),0,1,200,1500,t.Ease.Linear)),
            this.tween.addEventListener(t.TweenEvent.COMPLETE, this.onCompleteHandlerBind),
            this.tween.addEventListener(t.TweenEvent.COMPLETE, n),
            this.tween.play()
        }
        return __extends(i, e),
        i.prototype.setSize = function(t) {
            this.size = t,
            this.waveSize.copy(this.size),
            this.waveSize.x /= this.amountOfWaves / this.repeatShape;
            for (var e = 0; e < this.amountOfWaves; )
                this.waves[e++].setSize(this.waveSize)
        }
        ,
        i.prototype.setProgress = function(t) {
            this.progress = t;
            for (var e = 0, i = this.amountOfWaves; i > e; )
                this.waves[e++].setProgress(t)
        }
        ,
        i.prototype.getProgress = function() {
            return this.progress
        }
        ,
        i.prototype.setSizeProgress = function(t) {
            this.waveSize.y = this.waveSize.y * t
        }
        ,
        i.prototype.onCompleteHandler = function(e) {
            this.tween.removeEventListener(t.TweenEvent.COMPLETE, this.onCompleteHandlerBind),
            this.tween.destroy(),
            this.tween = void 0,
            this.offsetPath.update(),
            this.tween = new t.Tween,
            this.tween.add(new t.FunctionRender(this.setProgress.bind(this),0,2 * -t.MathUtility.DOUBLE_PI,0,6e3,t.Ease.Linear)),
            this.tween.add(new t.FunctionRender(this.offsetPath.update.bind(this.offsetPath),0,0,0,6e3,t.Ease.Linear)),
            this.tween.makeLoop(),
            this.tween.play()
        }
        ,
        i.prototype.destroy = function() {
            this.tween.destroy(),
            this.tween = void 0,
            this.waves = void 0,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.CanvasShapeSymbol);
    t.IntroLine = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o) {
            this.overlayMargin = 0,
            this.colorRenderUpBind = this.colorRenderUp.bind(this),
            this.colorRenderDownBind = this.colorRenderDown.bind(this),
            this.onResizeBind = this.onResize.bind(this),
            this.onTweenCompleteBind = this.onTweenComplete.bind(this),
            this.setOverlayProgressBind = this.setOverlayProgress.bind(this),
            this.mainPage = e,
            this.chapterID = i,
            this.startSegment = s,
            this.canvas = n,
            this.scrollUp = o,
            this.bodyNode = t.HTML.GetElement("body"),
            this.startSegment.useForIntro(),
            this.overlayRect = t.Rectangle.FromZero(),
            this.overlayNode = t.HTML.Create("div", {
                "class": "transitionBox"
            }),
            document.getElementById("body").appendChild(this.overlayNode),
            this.colorFrom = t.Config.DARK_BLUE_RGB,
            this.colorTo = t.ColorUtility.StringToRGB(this.startSegment.getColor()),
            this.onResize(),
            this.startPosY = this.mainPage.getPosition().y;
            var r = new t.FunctionTween(o === !0 ? this.colorRenderUpBind : this.colorRenderDownBind,0,1,0,1e3,t.Ease.CubicOut);
            r.addEventListener(t.TweenEvent.COMPLETE, this.onColorChangeComplete.bind(this)),
            r.makeAutoDestroy(),
            r.execute(),
            window.addEventListener("resize", this.onResizeBind)
        }
        return e.prototype.colorRenderUp = function(e) {
            this.overlayNode.style[t.css.name.OPACITY] = (.5 + Math.max(1.25 * e - .25, 0)).toFixed(4),
            this.overlayNode.style.backgroundColor = this.colorFrom.blendRGB(this.colorTo, e).toString(),
            this.overlayNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(-this.size.y * (1 - e)) + "px)",
            this.mainPage.setPositionY(this.startPosY + this.size.y * e * .5)
        }
        ,
        e.prototype.colorRenderDown = function(e) {
            this.overlayNode.style[t.css.name.OPACITY] = Math.min(2 * e, 1).toFixed(4),
            this.overlayNode.style.backgroundColor = this.colorFrom.blendRGB(this.colorTo, e).toString(),
            this.overlayNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(this.size.y * (1 - e)) + "px)",
            this.mainPage.setPositionY(this.startPosY - this.size.y * e * .5)
        }
        ,
        e.prototype.onResize = function(e) {
            this.size = new t.Vec(this.bodyNode.offsetWidth,this.bodyNode.offsetHeight),
            this.updateRectSize()
        }
        ,
        e.prototype.onColorChangeComplete = function(e) {
            this.mainPage.jumpToChapterByID(this.chapterID);
            var i = new t.FunctionTween(this.setOverlayProgressBind,0,1,0,1e3,t.Ease.CubicInOut);
            i.addEventListener(t.TweenEvent.COMPLETE, this.onTweenCompleteBind),
            i.makeAutoDestroy(),
            i.execute()
        }
        ,
        e.prototype.onTweenComplete = function(t) {
            this.destroy()
        }
        ,
        e.prototype.setOverlayProgress = function(e) {
            this.overlayMargin = Math.round(.025 * this.size.x * e),
            this.overlayNode.style[t.css.name.OPACITY] = 1 - .2 * e,
            this.updateRectSize()
        }
        ,
        e.prototype.updateRectSize = function() {
            this.overlayNode.style.margin = this.overlayMargin + "px"
        }
        ,
        e.prototype.destroy = function() {
            this.mainPage = null ,
            window.removeEventListener("resize", this.onResizeBind),
            this.startSegment.playOpeningAnimation(0),
            document.getElementById("body").removeChild(this.overlayNode)
        }
        ,
        e
    }();
    t.Transition = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this),
            this.size = new t.Vector(0,0),
            this.texture = i
        }
        return __extends(i, e),
        i.prototype.setCompositeOperation = function(t) {
            this.compositeOperation = t
        }
        ,
        i.prototype.addFitDef = function(e) {
            this.fitDef = e,
            this.texture.addEventListener(t.TextureEvent.CHANGED, this.updateSB.bind(this))
        }
        ,
        i.prototype.onDraw = function(t, i) {
            e.prototype.onDraw.call(this, t, i);
            var s = t.context
              , n = s.globalCompositeOperation;
            void 0 !== this.compositeOperation && (s.globalCompositeOperation = this.compositeOperation),
            void 0 !== this.cropRect ? this.texture.drawInside(t, this.size, this.cropRect, this.outerCropRect) : this.texture.drawAt(t),
            s.globalCompositeOperation = n
        }
        ,
        i.prototype.updateSB = function() {
            this.cropRect = this.fitDef.toCropRectangle(this.size, this.texture.size)
        }
        ,
        i.prototype.getBounds = function() {
            return t.Rectangle.ZERO
        }
        ,
        i.prototype.setCrop = function(t) {
            this.cropRect = t
        }
        ,
        i.prototype.setOuterCrop = function(t) {
            this.outerCropRect = t
        }
        ,
        i.prototype.setSize = function(t) {
            this.size = t,
            void 0 !== this.fitDef && this.updateSB()
        }
        ,
        i.prototype.getSize = function() {
            return this.size
        }
        ,
        i.prototype.getWidth = function() {
            return 0
        }
        ,
        i.prototype.getHeight = function() {
            return 0
        }
        ,
        i.prototype.destroy = function() {}
        ,
        i
    }(t.CanvasSymbol);
    t.OldCanvasTextureSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(t) {
            e.call(this),
            this.size = t
        }
        return __extends(i, e),
        i.prototype.set = function(e, i) {
            this.source = e,
            this.size = i,
            this.dispatchEvent(new t.SSEvent(t.TextureEvent.CHANGED,this))
        }
        ,
        i.prototype.drawAt = function(t) {
            void 0 !== this.source ? t.context.drawImage(this.source, 0, 0, this.size.x * t.pixelDensity, this.size.y * t.pixelDensity) : void 0 !== this.color && (t.context.fillStyle = this.color,
            t.context.fillRect(0, 0, this.size.x * t.pixelDensity, this.size.y * t.pixelDensity))
        }
        ,
        i.prototype.drawInside = function(e, i, s, n) {
            var o = e.pixelDensity;
            if (null  != n) {
                var r = n.intersect(new t.Rectangle(new t.Vector(0,0),i));
                if (void 0 !== this.source) {
                    var a = s
                      , h = s.s.x / i.x
                      , l = r.clone();
                    l.a.y *= h,
                    l.s.scaleIn(h);
                    var d = a.a.x + Math.max(n.a.x * h, 0)
                      , u = a.a.y + Math.max(n.a.y * h, 0);
                    l.a.x = d,
                    l.a.y = u,
                    l.s.y > 1 && l.s.x > 1 && e.context.drawImage(this.source, Math.ceil(l.a.x), Math.ceil(l.a.y), Math.floor(l.s.x), Math.floor(l.s.y), Math.round(r.a.x * o), Math.round(r.a.y * o), Math.round(r.s.x * o), Math.round(r.s.y * o))
                } else
                    void 0 !== this.color && (e.context.fillStyle = this.color,
                    e.context.fillRect(Math.round(r.a.x * o), Math.round(r.a.y * o), Math.round(r.s.x * o), Math.round(r.s.y * o)))
            } else
                void 0 !== this.source ? e.context.drawImage(this.source, Math.round(s.a.x), Math.round(s.a.y), Math.round(s.s.x), Math.round(s.s.y), 0, 0, Math.round(i.x * o), Math.round(i.y * o)) : void 0 !== this.color && (e.context.fillStyle = this.color,
                e.context.fillRect(0, 0, Math.round(i.x * o), Math.round(i.y * o)))
        }
        ,
        i.prototype.destroy = function() {
            this.source = this.size = void 0
        }
        ,
        i
    }(t.EventDispatcher);
    t.OldTexture = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s) {
            this.currentDefaultColor = t.Config.DARK_BLUE_RGB.clone(),
            this.currentOpacity = t.MenuItem.OPACTY_INACTIVE,
            this.onLineClickBind = this.onLineClick.bind(this),
            this.onLineMouseOverBind = this.onLineMouseOver.bind(this),
            this.onLineMouseOutBind = this.onLineMouseOut.bind(this),
            this.menuUpdateSizeBind = this.menuUpdateSize.bind(this),
            this.updateSizeBind = this.updateSize.bind(this),
            this.index = e,
            this.chapterID = s.id,
            this.amountOfMenuItems = i,
            this.title = s.title,
            this.darkColor = t.ColorUtility.StringToRGB(s.darkColor),
            this.normalColor = t.ColorUtility.StringToRGB(s.normalColor),
            this.currentSelectedColor = this.darkColor.clone(),
            this.currentColor = this.currentDefaultColor,
            this.sideMenuCon = t.HTML.Create("a", {
                "class": "sideMenuItem"
            }),
            this.sideMenuCon.addEventListener("click", this.onLineClickBind),
            this.sideMenuCon.addEventListener("mouseover", this.onLineMouseOverBind),
            this.sideMenuCon.addEventListener("mouseout", this.onLineMouseOutBind),
            this.labelNode = t.HTML.Create("div", {
                "class": "label",
                html: this.title
            }),
            this.sideMenuCon.appendChild(this.labelNode),
            this.defaultLine = t.HTML.Create("div", {
                "class": "defaultline"
            }),
            this.defaultLine.style.backgroundColor = this.currentColor.toString(),
            this.defaultLine.style.transitionDelay = 20 * (i - this.index) + "ms",
            this.sideMenuCon.appendChild(this.defaultLine),
            this.moveOutTween = new t.Tween,
            this.moveOutTween.add(new t.CSSPropertyWithUnitRender(this.defaultLine,"width","px",60,0,40 + 50 * this.index,100,t.Ease.SineIn)),
            this.moveOutTween.add(new t.CSSPropertyWithUnitRender(this.defaultLine,"marginLeft","px",0,60,40 + 50 * this.index,100,t.Ease.SineIn))
        }
        return e.prototype.getIndex = function() {
            return this.index
        }
        ,
        e.prototype.getTween = function() {
            return null 
        }
        ,
        e.prototype.setMenuContainer = function(t) {
            this.menu = t,
            this.menu.getHTML().appendChild(this.sideMenuCon)
        }
        ,
        e.prototype.setSize = function(e) {
            this.viewportsize = e;
            var i = 20
              , s = 0;
            e.x > t.Config.BREAKPOINT && (s = 60),
            this.defaultLine.style.height = i + "px";
            var n = e.x
              , o = .5 * e.y - 40 * this.amountOfMenuItems * .5 + 40 * this.index;
            this.sideMenuCon.style.left = n - s + "px",
            this.sideMenuCon.style.top = o - .5 * i + "px",
            void 0 !== this.introTween && this.introTween.setSize(e),
            void 0 !== this.overlayMotion && this.overlayMotion.setSize(e)
        }
        ,
        e.prototype.setOffset = function(t) {}
        ,
        e.prototype.onLineClick = function(e) {
            t.URLManager.GoToPathAtLevel(0, this.chapterID),
            e.preventDefault()
        }
        ,
        e.prototype.onLineMouseOver = function(e) {
            this.defaultLine.style[t.css.name.TRANSFORM] = "translateX(60px)",
            t.HTML.AddClass(this.labelNode, "show")
        }
        ,
        e.prototype.onLineMouseOut = function(e) {
            this.defaultLine.style[t.css.name.TRANSFORM] = "translateX(0px)",
            t.HTML.RemoveClass(this.labelNode, "show")
        }
        ,
        e.prototype.hover = function() {}
        ,
        e.prototype.unhover = function() {}
        ,
        e.prototype.select = function() {
            e._currentSelected !== this && (void 0 !== e._currentSelected && e._currentSelected.deselect(),
            this.currentColor = this.currentSelectedColor,
            this.defaultLine.style.backgroundColor = this.currentColor.toString(),
            e._currentSelected = this,
            this.hover(),
            this.menuUpdateSize())
        }
        ,
        e.prototype.deselect = function() {
            this.currentColor = this.currentDefaultColor,
            this.defaultLine.style.backgroundColor = this.currentColor.toString(),
            this.update()
        }
        ,
        e.prototype.makeBright = function() {
            this.currentSelectedColor.copy(this.normalColor),
            this.currentDefaultColor.copy(t.Config.LIGHT_COLOR_RGB),
            this.defaultLine.style.backgroundColor = this.currentColor.toString(),
            this.labelNode.style.color = this.currentDefaultColor.toString(),
            this.update()
        }
        ,
        e.prototype.makeNormal = function() {
            this.currentSelectedColor.copy(this.normalColor),
            this.currentDefaultColor.copy(t.Config.NORMAL_COLOR_RGB),
            this.defaultLine.style.backgroundColor = this.currentColor.toString(),
            this.labelNode.style.color = this.currentDefaultColor.toString(),
            this.update()
        }
        ,
        e.prototype.makeDark = function() {
            this.currentSelectedColor.copy(this.darkColor),
            this.currentDefaultColor.copy(t.Config.DARK_BLUE_RGB),
            this.defaultLine.style.backgroundColor = this.currentColor.toString(),
            this.labelNode.style.color = this.currentDefaultColor.toString(),
            this.update()
        }
        ,
        e.prototype.menuUpdateSize = function() {
            this.menu.updateSize()
        }
        ,
        e.prototype.updateSize = function() {
            this.setSize(this.viewportsize)
        }
        ,
        e.prototype.update = function() {}
        ,
        e.prototype.playOpen = function() {
            this.getTween().forward()
        }
        ,
        e.prototype.playClose = function() {
            this.getTween().backward()
        }
        ,
        e.prototype.createIntroTween = function(e, i) {
            this.introTween = new t.MenuItemIntroMotion(this.index,this.amountOfMenuItems,this.currentColor,this.menu,this.defaultLine,i),
            this.introTween.setSize(this.viewportsize),
            this.introTween.getTween().updateProgress(0),
            e.add(this.introTween.getTween())
        }
        ,
        e.prototype.removeIntroTween = function(t) {
            t.remove(this.introTween.getTween()),
            this.introTween.destroy(),
            this.introTween = void 0
        }
        ,
        e.prototype.createOverlayTween = function(e, i) {
            return this.index !== i ? (this.overlayTween = this.moveOutTween,
            void e.add(this.overlayTween)) : (this.overlayMotion = new t.MenuItemOverlayMotion(this.index,this.amountOfMenuItems,this.currentColor,this.normalColor,this.menu,this.defaultLine),
            this.overlayMotion.setSize(this.viewportsize),
            this.overlayTween = this.overlayMotion.getTween(),
            void e.add(this.overlayTween))
        }
        ,
        e.prototype.removeOverlayTween = function(t) {
            t.remove(this.overlayTween),
            void 0 !== this.overlayMotion && (this.overlayMotion.destroy(),
            this.overlayMotion = void 0)
        }
        ,
        e.OPACTY_INACTIVE = .2,
        e
    }();
    t.AMenuItem = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return __extends(e, t),
        e.prototype.getTween = function() {
            return this.moveOutTween
        }
        ,
        e
    }(t.AMenuItem);
    t.IntroMenuItem = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e) {
            this.menuItems = [],
            this.bgColor = t.Config.DARK_BLUE_RGB.toRGBA(.95).toString(),
            this.bgColorTransparent = t.Config.DARK_BLUE_RGB.toRGBA(0).toString(),
            this.onBaseMotionTweenStartBind = this.onBaseMotionTweenStart.bind(this),
            this.onBaseMotionTweenCompleteBind = this.onBaseMotionTweenComplete.bind(this),
            this.toggleOpenBind = this.toggleOpen.bind(this),
            this._colorState = 3,
            this.onIntroMotionCompleteBind = this.onIntroMotionComplete.bind(this),
            this.onOverlayMotionCompleteBind = this.onOverlayMotionCompleteBefore.bind(this),
            this.baseTween = new t.Tween,
            this.baseTween.addEventListener(t.RenderWithinEvent.BEFORE, this.onOutsideBaseTween.bind(this)),
            this.baseTween.addEventListener(t.RenderWithinEvent.INSIDE, this.onInsideBaseTween.bind(this)),
            this.baseTween.addEventListener(t.TweenEvent.START, this.onBaseMotionTweenStartBind),
            this.baseTween.addEventListener(t.TweenEvent.COMPLETE, this.onBaseMotionTweenCompleteBind),
            this.htmlNode = t.HTML.Create("div", {
                "class": "menu"
            }),
            this.insideNode = t.HTML.Create("div", {
                "class": "inside"
            }),
            this.htmlNode.appendChild(this.insideNode),
            this._isOpen = !1,
            this.insideNode.addEventListener("click", this.close.bind(this)),
            this.insideVaNode = t.HTML.Create("div", {
                "class": "va"
            }),
            this.insideNode.appendChild(this.insideVaNode),
            this.logoNode = t.HTML.Create("a", {
                "class": "logo",
                href: "/"
            }),
            this.logoNode.addEventListener("click", this.onLogoClicked.bind(this)),
            this.insideVaNode.appendChild(this.logoNode),
            this.indexLabelNode = t.HTML.Create("div", {
                "class": "indexlabel",
                html: "Chapters"
            }),
            this.insideVaNode.appendChild(this.indexLabelNode),
            this.svgSymbol = new t.HTMLSVGSymbol("100%","100%"),
            this.htmlNode.appendChild(this.svgSymbol.getSVG()),
            this.button = new t.MenuButton,
            this.htmlNode.appendChild(this.button.getHTML()),
            this.button.getHTML().addEventListener("click", this.toggleOpenBind)
        }
        return e.prototype.onBaseMotionTweenStart = function(e) {
            t.DeviceInfo.hasPointerEvents() === !1 && (this.svgSymbol.getSVG().style.display = null )
        }
        ,
        e.prototype.onBaseMotionTweenComplete = function(e) {
            t.DeviceInfo.hasPointerEvents() === !1 && (this.svgSymbol.getSVG().style.display = "none")
        }
        ,
        e.prototype.addMenuItem = function(t) {
            this.menuItems.push(t),
            t.setMenuContainer(this),
            this.baseTween.add(t.getTween())
        }
        ,
        e.prototype.getHTML = function() {
            return this.htmlNode
        }
        ,
        e.prototype.getSVG = function() {
            return this.svgSymbol.getSVG()
        }
        ,
        e.prototype.getInsideHTML = function() {
            return this.insideVaNode
        }
        ,
        e.prototype.setSize = function(t) {
            this.size = t;
            for (var e = this.menuItems.length; e--; )
                this.menuItems[e].setSize(t);
            this.baseTween.updateBounds(),
            this.button.setSize(t),
            this.updateMenuSize()
        }
        ,
        e.prototype.updateSize = function() {
            for (var t = this.menuItems.length; t--; )
                this.menuItems[t].setSize(this.size);
            this.baseTween.updateBounds(),
            void 0 !== this.introBaseTween && this.introBaseTween.updateBounds(),
            void 0 !== this.overlayBaseTween && this.overlayBaseTween.updateBounds()
        }
        ,
        e.prototype.setOffset = function(t) {
            this.offset = t;
            for (var e = this.menuItems.length; e--; )
                this.menuItems[e].setOffset(t);
            this.updateMenuSize()
        }
        ,
        e.prototype.updateMenuSize = function() {
            this.logoNode.style[t.css.name.TRANSFORM] = "translateY(" + this.offset * -this.size.y + "px)",
            this.indexLabelNode.style[t.css.name.TRANSFORM] = "translateY(" + this.offset * -this.size.y + "px)"
        }
        ,
        e.prototype.toggleOpen = function() {
            this._isOpen === !1 ? this.open() : this.close()
        }
        ,
        e.prototype.open = function() {
            this._isOpen !== !0 && (this.baseTween.forward(),
            this._isLocked === !1 && (this.setOffset(0),
            this.insideNode.style[t.css.name.TRANSITION] = "background-color 800ms ease-in-out",
            this.insideNode.style.backgroundColor = this.bgColor),
            this.logoNode.style[t.css.name.OPACITY] = "1",
            this.indexLabelNode.style[t.css.name.OPACITY] = "1",
            this._isOpen = !0,
            this.button.open())
        }
        ,
        e.prototype.lock = function() {
            this._isLocked = !0,
            this.open()
        }
        ,
        e.prototype.unlock = function() {
            this._isLocked = !1,
            this.close()
        }
        ,
        e.prototype.enableSideMenu = function() {
            t.HTML.RemoveClass(this.htmlNode, "disable")
        }
        ,
        e.prototype.disableSideMenu = function() {
            t.HTML.AddClass(this.htmlNode, "disable")
        }
        ,
        e.prototype.close = function() {
            this._isOpen !== !1 && this._isLocked !== !0 && (this.insideNode.style[t.css.name.TRANSITION] = "background-color 800ms ease-in-out 400ms",
            this.insideNode.style.backgroundColor = this.bgColorTransparent,
            this.logoNode.style[t.css.name.OPACITY] = "0",
            this.indexLabelNode.style[t.css.name.OPACITY] = "0",
            this.baseTween.backward(),
            this._isOpen = !1,
            this.button.close())
        }
        ,
        e.prototype.onOutsideBaseTween = function() {
            t.HTML.RemoveClass(this.insideNode, "show")
        }
        ,
        e.prototype.onInsideBaseTween = function() {
            t.HTML.AddClass(this.insideNode, "show")
        }
        ,
        e.prototype.makeBright = function() {
            if (1 !== this._colorState) {
                for (var t = this.menuItems.length; t--; )
                    this.menuItems[t].makeBright();
                this.button.makeBright(),
                this._colorState = 1
            }
        }
        ,
        e.prototype.makeNormal = function() {
            if (2 !== this._colorState) {
                for (var t = this.menuItems.length; t--; )
                    this.menuItems[t].makeNormal();
                this.button.makeDark(),
                this._colorState = 2
            }
        }
        ,
        e.prototype.makeDark = function() {
            if (3 !== this._colorState) {
                for (var t = this.menuItems.length; t--; )
                    this.menuItems[t].makeDark();
                this.button.makeDark(),
                this._colorState = 3
            }
        }
        ,
        e.prototype.onLogoClicked = function(e) {
            t.URLManager.GoToURL("/0"),
            e.preventDefault()
        }
        ,
        e.prototype.createIntroTween = function(e) {
            if (void 0 === this.introBaseTween) {
                this.introBaseTween = new t.Tween,
                this.introBaseTween.addEventListener(t.TweenEvent.COMPLETE, this.onIntroMotionCompleteBind),
                this.introBaseTween.addEventListener(t.TweenEvent.START, this.onBaseMotionTweenStartBind),
                this.introBaseTween.addEventListener(t.TweenEvent.COMPLETE, this.onBaseMotionTweenCompleteBind);
                for (var i = 0, s = this.menuItems.length; s > i; )
                    this.menuItems[i++].createIntroTween(this.introBaseTween, e);
                this.introBaseTween.updateProgress(e)
            }
        }
        ,
        e.prototype.playIntro = function(t) {
            this.createIntroTween(t),
            this.introBaseTween.forward()
        }
        ,
        e.prototype.onIntroMotionComplete = function(e) {
            this.introBaseTween.removeEventListener(t.TweenEvent.COMPLETE, this.onIntroMotionCompleteBind);
            for (var i = 0, s = this.menuItems.length; s > i; )
                this.menuItems[i++].removeIntroTween(this.introBaseTween);
            this.introBaseTween.removeEventListener(t.TweenEvent.START, this.onBaseMotionTweenStartBind),
            this.introBaseTween.removeEventListener(t.TweenEvent.COMPLETE, this.onBaseMotionTweenCompleteBind),
            this.introBaseTween.destroy(),
            this.introBaseTween = void 0
        }
        ,
        e.prototype.createOverlayTween = function(e) {
            if (void 0 === this.overlayBaseTween) {
                this.overlayBaseTween = new t.Tween,
                this.overlayBaseTween.addEventListener(t.TweenEvent.START, this.onBaseMotionTweenStartBind),
                this.overlayBaseTween.addEventListener(t.TweenEvent.COMPLETE, this.onBaseMotionTweenCompleteBind);
                for (var i = 0, s = this.menuItems.length; s > i; )
                    this.menuItems[i++].createOverlayTween(this.overlayBaseTween, e)
            }
        }
        ,
        e.prototype.openOverlay = function(t) {
            void 0 !== this.introBaseTween && this.onIntroMotionComplete(),
            this.createOverlayTween(t),
            this.overlayBaseTween.updateBounds(),
            this.overlayBaseTween.forward()
        }
        ,
        e.prototype.closeOverlay = function() {
            void 0 !== this.overlayBaseTween && (this.overlayBaseTween.addEventListener(t.TweenEvent.COMPLETE, this.onOverlayMotionCompleteBind),
            this.overlayBaseTween.backward())
        }
        ,
        e.prototype.onOverlayMotionCompleteBefore = function(e) {
            this.overlayBaseTween.removeEventListener(t.TweenEvent.COMPLETE, this.onOverlayMotionCompleteBind);
            for (var i = 0, s = this.menuItems.length; s > i; )
                this.menuItems[i++].removeOverlayTween(this.overlayBaseTween);
            this.overlayBaseTween.removeEventListener(t.TweenEvent.START, this.onBaseMotionTweenStartBind),
            this.overlayBaseTween.removeEventListener(t.TweenEvent.COMPLETE, this.onBaseMotionTweenCompleteBind),
            this.overlayBaseTween.destroy(),
            this.overlayBaseTween = void 0
        }
        ,
        e
    }();
    t.Menu = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i() {
            e.call(this, t.HTML.Create("div", {
                "class": "menuButton"
            })),
            this.isAssembled = !1,
            this.curves = [],
            this.padding = 5,
            this.lineAmount = 3,
            this.segmentNumber = 3,
            this.lineWidth = 30,
            this.isOpen = !1,
            this.scaleDestination = 0,
            this.currentColor = t.Config.DARK_BLUE,
            this.onWaveUpdateBind = this.onWaveUpdate.bind(this),
            this.onWaveMorpherUpdateBind = this.onWaveMorpherUpdate.bind(this),
            this.scaleProgres = 0,
            this.onWaveScalerUpdateBind = this.onWaveScalerUpdate.bind(this)
        }
        return __extends(i, e),
        i.prototype.assemble = function() {
            if (this.isAssembled !== !0) {
                this.isAssembled = !0,
                this.svgSymbol = new t.HTMLSVGSymbol("100%","100%"),
                this.svgSymbol.setAttribute("viewBox", "0 0 " + this.lineWidth + " " + this.lineWidth),
                this.node.appendChild(this.svgSymbol.getSVG());
                for (var e, i, s, n, o = this.lineAmount; o--; ) {
                    for (s = new t.Path,
                    n = new t.SVGPathSymbol(s),
                    n.setLineColor(t.Config.DARK_BLUE_RGB.toString()),
                    e = this.segmentNumber,
                    this.curves[o] = []; e--; )
                        i = t.CubicBezier.FromZero(),
                        this.curves[o][e] = i,
                        this.curves[o][e] = i,
                        s.add(i);
                    this.svgSymbol.addChild(n)
                }
                this.waveUpdater = new t.FunctionTween(this.onWaveUpdateBind,0,0,0,1e3,t.Ease.Linear),
                this.waveMorpher = new t.FunctionTween(this.onWaveMorpherUpdateBind,0,1,0,750,t.Ease.Linear),
                this.waveScaler = new t.FunctionTween(this.onWaveScalerUpdateBind,0,1,0,750,t.Ease.Linear),
                this.scaleVector = new t.Vector(1,1),
                this.isOpen === !0 ? this.setOpenedState() : this.setClosedState()
            }
        }
        ,
        i.prototype.disassemble = function() {
            this.isAssembled !== !1 && (this.isAssembled = !1,
            this.node.removeChild(this.svgSymbol.getSVG()),
            this.svgSymbol.destroy(),
            this.waveUpdater.destroy(),
            this.waveMorpher.destroy(),
            this.waveScaler.destroy(),
            this.curves = [])
        }
        ,
        i.prototype.open = function() {
            this.isOpen !== !0 && (this.isOpen = !0,
            this.isAssembled === !0 && this.setOpenedState())
        }
        ,
        i.prototype.close = function() {
            this.isOpen !== !1 && (this.isOpen = !1,
            this.isAssembled === !0 && this.setClosedState())
        }
        ,
        i.prototype.setOpenedState = function() {
            this.waveUpdater.pause(),
            this.waveScaler.forward(),
            this.waveMorpher.play();
            for (var e, i = this.lineAmount; i--; )
                e = this.svgSymbol.childs[i],
                t.CSS.SetTransition(e.getSVG(), "transform 750ms cubic-bezier(0.19, 1, 0.22, 1), opacity 750ms cubic-bezier(0.19, 1, 0.22, 1), stroke 750ms cubic-bezier(0.19, 1, 0.22, 1) 50ms", null , !1),
                e.setLineColor(t.Config.LIGHT_COLOR),
                i < this.lineAmount - 1 && i > 0 && (t.CSS.SetScale(e.getSVG(), 0),
                t.CSS.SetOpacity(e.getSVG(), 0))
        }
        ,
        i.prototype.setClosedState = function() {
            this.waveMorpher.stop(),
            this.waveScaler.backward(),
            this.waveUpdater.play();
            for (var e, i = this.lineAmount; i--; )
                e = this.svgSymbol.childs[i],
                t.CSS.SetTransition(e.getSVG(), "transform 750ms cubic-bezier(0.19, 1, 0.22, 1), opacity 750ms cubic-bezier(0.19, 1, 0.22, 1), stroke 750ms cubic-bezier(0.19, 1, 0.22, 1) 500ms", null , !1),
                e.setLineColor(this.currentColor),
                i < this.lineAmount - 1 && i > 0 && (t.CSS.SetScale(e.getSVG(), 1),
                t.CSS.SetOpacity(e.getSVG(), 1))
        }
        ,
        i.prototype.makeBright = function() {
            this.updateCurrentColor(t.Config.LIGHT_COLOR)
        }
        ,
        i.prototype.makeDark = function() {
            this.updateCurrentColor(t.Config.DARK_BLUE)
        }
        ,
        i.prototype.updateCurrentColor = function(t) {
            if (this.currentColor = t,
            this.isAssembled === !0 && this.isOpen === !1)
                for (var e = this.lineAmount; e--; )
                    this.svgSymbol.childs[e].setLineColor(this.currentColor)
        }
        ,
        i.prototype.onWaveUpdate = function(e) {
            for (var i, s = 1, n = this.lineWidth / this.segmentNumber, o = 1.5, r = 0, a = 0, h = 0; a < this.curves.length; a++)
                for (r = a * (this.lineWidth - 2 * this.padding) / (this.curves.length - 1) + this.padding,
                o -= o / (this.curves.length - 1) * a,
                h = 0; i = this.curves[a][h]; h++)
                    s = h % 2 || -1,
                    i.a.lerpIn(new t.Vector(h * n,Math.sin(e) * o * s + r), 1 - this.scaleProgres),
                    i.aC.lerpIn(new t.Vector(i.a.x + n / 2,Math.sin(e) * o * s + r), 1 - this.scaleProgres),
                    i.b.lerpIn(new t.Vector(i.a.x + n,Math.sin(e) * o * -s + r), 1 - this.scaleProgres),
                    i.bC.lerpIn(new t.Vector(i.b.x - n / 2,Math.sin(e) * o * -s + r), 1 - this.scaleProgres);
            this.svgSymbol.update()
        }
        ,
        i.prototype.onWaveMorpherUpdate = function(e) {
            for (var i, s, n, o, r, a = t.Vector.FromJSON({
                x: this.lineWidth / 2,
                y: this.lineWidth / 2
            }), h = 0; 2 > h; h++) {
                for (n = h * (this.lineAmount - 1),
                o = new t.Vector(this.padding,this.padding + h * (this.lineWidth - 2 * this.padding)),
                r = o.clone(),
                r.x += this.lineWidth - 2 * this.padding,
                i = 1; i < this.segmentNumber - 1; i++)
                    s = this.curves[n][i],
                    s.a.lerpIn(a, e),
                    s.aC.lerpIn(a, e),
                    s.b.lerpIn(a, e),
                    s.bC.lerpIn(a, e);
                this.curves[n][0].a.lerpIn(o, e),
                this.curves[n][this.segmentNumber - 1].b.lerpIn(r, e),
                this.curves[n][0].aC.lerpIn(a, e),
                this.curves[n][0].b.lerpIn(a, e),
                this.curves[n][0].bC.lerpIn(a, e),
                this.curves[n][this.segmentNumber - 1].a.lerpIn(a, e),
                this.curves[n][this.segmentNumber - 1].aC.lerpIn(a, e),
                this.curves[n][this.segmentNumber - 1].bC.lerpIn(a, e)
            }
            this.svgSymbol.update()
        }
        ,
        i.prototype.onWaveScalerUpdate = function(t) {
            this.scaleProgres = t
        }
        ,
        i.prototype.setSize = function(e) {
            e.x > t.Config.BREAKPOINT ? this.disassemble() : this.assemble()
        }
        ,
        i
    }(t.HTMLSymbol);
    t.MenuButton = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.offset = 0,
            this.onMotionTweenCompleteBind = this.onMotionTweenComplete.bind(this),
            this.onMotionTweenStartBind = this.onMotionTweenStart.bind(this),
            this.onMotionTweenBeforeBind = this.onMotionTweenBefore.bind(this),
            this.onItemClickedBind = this.onItemClicked.bind(this),
            this.onMouseOverBind = this.hover.bind(this),
            this.onMouseOutBind = this.onMouseOut.bind(this),
            this.linkNodeShowProgress = 0,
            this.description = n.description,
            this.menuItemNode = t.HTML.Create("div"),
            t.HTML.AddClass(this.menuItemNode, "link"),
            this.linkNode = t.HTML.Create("a"),
            this.linkH2Node = t.HTML.Create("h2", {
                html: this.title
            }),
            this.linkNode.appendChild(this.linkH2Node),
            this.linkDescNode = t.HTML.Create("p", {
                html: this.description
            }),
            this.linkNode.appendChild(this.linkDescNode),
            this.menuItemNode.appendChild(this.linkNode),
            this.menuItemNode.addEventListener("mouseover", this.onMouseOverBind),
            this.menuItemNode.addEventListener("mouseout", this.onMouseOutBind),
            this.linkNode.addEventListener("click", this.onItemClickedBind),
            this.motionLine = new t.Path,
            this.motionLineA = t.CubicBezier.FromZero(),
            this.motionLine.add(this.motionLineA),
            this.motionLineB = t.CubicBezier.FromZero(),
            this.motionLine.add(this.motionLineB),
            this.motionLineEnd = t.Line.FromZero(),
            this.motionLine.add(this.motionLineEnd),
            this.motionLineB.a = this.motionLineA.b,
            this.motionLineB.b = this.motionLineEnd.a,
            this.motionLineOffset = new t.OffsetableShape(this.motionLine),
            this.motionLineOffset.setOffset(0, 0),
            this.motionLineSymbol = new t.SVGPathSymbol(this.motionLineOffset),
            this.motionLineSymbol.setFillColor("none"),
            this.motionLineSymbol.setLineColor(this.currentColor.toString()),
            this.motionLineSymbol.setLineWidth(20),
            this.motionLineSymbol.hide(),
            this.motionTween = new t.Tween,
            this.defaultLineRender = new t.CSSPropertyWithUnitRender(this.defaultLine,"width","px",60,0,100 * this.index,100,t.Ease.Linear),
            this.motionTween.add(this.defaultLineRender),
            this.linkShowRender = this.motionTween.addFunction(this.setLinkShowProgress.bind(this), 0, 1, 100, 600, t.Ease.Linear),
            this.offsetStartRender = this.motionTween.addFunction(this.motionLineOffset.setOffsetStart.bind(this.motionLineOffset), 0, 1, 100, 600, t.Ease.Linear),
            this.offsetEndRender = this.motionTween.addFunction(this.motionLineOffset.setOffsetEnd.bind(this.motionLineOffset), 0, 1, 50, 600, t.Ease.SineOut),
            this.offsetUpdateRender = this.motionTween.addFunction(this.update.bind(this), 0, 0, 0, 600, t.Ease.Linear),
            this.motionRootTween = new t.TweenRender(this.motionTween,0,600,0,600,t.Ease.CombineInOut(t.Ease.SineInOut, t.Ease.QuadInOut)),
            this.motionRootTween.addEventListener(t.TweenEvent.BEFORE, this.onMotionTweenBeforeBind),
            this.motionRootTween.addEventListener(t.TweenEvent.START, this.onMotionTweenStartBind),
            this.motionRootTween.addEventListener(t.TweenEvent.COMPLETE, this.onMotionTweenCompleteBind)
        }
        return __extends(i, e),
        i.prototype.getTween = function() {
            return this.motionRootTween
        }
        ,
        i.prototype.setMenuContainer = function(t) {
            e.prototype.setMenuContainer.call(this, t),
            this.menu.getInsideHTML().appendChild(this.menuItemNode),
            this.menu.getSVG().appendChild(this.motionLineSymbol.getSVG())
        }
        ,
        i.prototype.onMotionTweenComplete = function() {
            this.motionLineSymbol.hide()
        }
        ,
        i.prototype.onMotionTweenStart = function() {
            this.motionLineSymbol.show()
        }
        ,
        i.prototype.onMotionTweenBefore = function() {
            this.offset = 0
        }
        ,
        i.prototype.setSize = function(i) {
            if (e.prototype.setSize.call(this, i),
            void 0 === this.overlayMotion && void 0 === this.introTween) {
                var s = 0;
                i.x > t.Config.BREAKPOINT && (s = 60);
                var n = i.x
                  , o = .5 * i.y + 10 - 40 * this.amountOfMenuItems * .5 + 40 * this.index
                  , r = this.offset * -i.y
                  , a = this.menuItemNode.offsetTop + r
                  , h = this.linkNode.offsetWidth
                  , l = this.linkH2Node.offsetHeight;
                this.linkNodeWidth = h;
                var d = a + .5 * l
                  , u = .5 * i.x
                  , p = u - .5 * h
                  , c = n - s
                  , y = this.motionLineEnd.a;
                y.set(u, d),
                this.motionLineEnd.b.set(p, d);
                var m = y.x + .5 * (c - y.x)
                  , f = d - .4 * (d - o)
                  , g = Math.abs(u - m)
                  , v = .6 * (d - o);
                this.motionLineA.a.set(c, o),
                this.motionLineA.aC.set(c - .5 * g, o),
                this.motionLineA.bC.set(m + .25 * g, f - v),
                this.motionLineA.b.set(m, f),
                this.motionLineB.aC.set(m - .25 * g, f + v),
                this.motionLineB.bC.set(y.x + .5 * g, d);
                var S = 80 * this.index
                  , b = 800 + .2 * (c - p)
                  , w = S + 100 + b;
                this.defaultLineRender.set(60, 0, S, 100),
                this.defaultLineRender.updateProgress(this.defaultLineRender.progress),
                this.linkShowRender.bounds.set(S + 100, S + 100 + b),
                this.offsetStartRender.bounds.set(S + 100, S + 100 + b),
                this.offsetEndRender.bounds.set(S, S + b),
                this.offsetUpdateRender.bounds.set(0, w),
                this.motionTween.updateBounds();
                var C = this.motionRootTween.getProgress() == this.motionRootTween.bounds.end;
                this.motionRootTween.set(0, w, 0, w),
                this.motionRootTween.updateBounds(),
                C === !0 && this.motionRootTween.setProgressLast(w),
                this.update()
            }
        }
        ,
        i.prototype.setOffset = function(t) {
            this.offset = t,
            this.setSize(this.viewportsize)
        }
        ,
        i.prototype.onItemClicked = function(e) {
            t.URLManager.GoToPathAtLevel(0, this.chapterID),
            e.preventDefault()
        }
        ,
        i.prototype.hover = function() {
            void 0 !== t.AMenuItem._currentHovered && t.AMenuItem._currentHovered !== this && t.AMenuItem._currentHovered.unhover(),
            this.currentOpacity = 1,
            this.update(),
            t.AMenuItem._currentHovered = this,
            t.HTML.AddClass(this.menuItemNode, "hover"),
            clearTimeout(this.delayedUpdateSize),
            this.delayedUpdateSize = setTimeout(this.menuUpdateSizeBind, 400)
        }
        ,
        i.prototype.onMouseOut = function() {
            this.unhover(),
            void 0 !== t.AMenuItem._currentSelected ? t.AMenuItem._currentSelected.hover() : (clearTimeout(this.delayedUpdateSize),
            this.delayedUpdateSize = setTimeout(this.menuUpdateSizeBind, 400))
        }
        ,
        i.prototype.unhover = function() {
            this.currentOpacity = t.AMenuItem.OPACTY_INACTIVE,
            this.update(),
            t.HTML.RemoveClass(this.menuItemNode, "hover")
        }
        ,
        i.prototype.setLinkShowProgress = function(t) {
            this.linkNodeShowProgress = t
        }
        ,
        i.prototype.update = function() {
            this.motionLineSymbol.setLineColor(this.currentColor.blendRGB(t.RGB.WHITE, this.linkNodeShowProgress).toString()),
            this.motionLineOffset.update(),
            this.motionLineSymbol.update(),
            this.linkNode.style[t.css.name.TRANSFORM] = "translateX(" + -(this.linkNodeWidth * (1 - this.linkNodeShowProgress)) + "px)",
            this.menuItemNode.style[t.css.name.TRANSFORM] = "translate(" + .6 * this.linkNodeWidth * (1 - this.linkNodeShowProgress) + "px, " + this.offset * -this.viewportsize.y + "px)",
            this.menuItemNode.style.width = this.linkNodeWidth * this.linkNodeShowProgress + "px",
            this.menuItemNode.style[t.css.name.OPACITY] = (this.currentOpacity * this.linkNodeShowProgress + (1 - this.linkNodeShowProgress)) * this.linkNodeShowProgress
        }
        ,
        i
    }(t.AMenuItem);
    t.MenuItem = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.progress = 0,
            this.index = e,
            this.amountOfMenuItems = i,
            this.currentColor = s,
            this.menu = n,
            this.waveBaseP = r,
            this.line = new t.Path,
            this.lineA = t.CubicBezier.FromZero(),
            this.line.add(this.lineA),
            this.lineB = t.CubicBezier.FromZero(),
            this.line.add(this.lineB),
            this.lineEnd = new t.Path,
            this.wave = new t.Wave(e,this.lineEnd);
            this.wave.getCurve();
            this.lineB.a = this.lineA.b,
            this.lineOffset = new t.OffsetableShape(this.line),
            this.lineSymbol = new t.SVGPathSymbol(this.lineOffset),
            this.lineSymbol.setFillColor("none"),
            this.lineSymbol.setLineColor("#FFF"),
            this.lineSymbol.setLineWidth(20),
            this.lineEndOffset = new t.OffsetableShape(this.lineEnd),
            this.lineEndSymbol = new t.SVGPathSymbol(this.lineEndOffset),
            this.lineEndSymbol.setFillColor("none"),
            this.lineEndSymbol.setLineColor("#FFF"),
            this.lineEndSymbol.setLineWidth(20),
            this.motionTween = new t.Tween,
            this.defaultLineRender = new t.CSSPropertyWithUnitRender(o,"width","px",0,60,600,100,t.Ease.SineOut),
            this.motionTween.add(this.defaultLineRender),
            this.lineEndOffsetRender = this.motionTween.addFunction(this.lineEndOffset.setOffsetStart.bind(this.lineEndOffset), -.005, 1, 600, 100, t.Ease.Linear),
            this.motionTween.add(this.lineEndOffsetRender),
            this.offsetStartRender = this.motionTween.addFunction(this.lineOffset.setOffsetStart.bind(this.lineOffset), 1, 0, 100, 600, t.Ease.SineOut),
            this.offsetEndRender = this.motionTween.addFunction(this.lineOffset.setOffsetEnd.bind(this.lineOffset), 1, 0, 50, 600, t.Ease.Linear),
            this.offsetUpdateRender = this.motionTween.addFunction(this.setProgress.bind(this), 1, 0, 0, 700, t.Ease.Linear),
            this.rootTween = new t.Tween,
            this.rootTween.addFunction(this.updateWaveProgress.bind(this), 0, 0, 0, 3e3, t.Ease.Linear),
            this.rootTween.addFunction(this.setWaveProgress.bind(this), 0, 2.5 * -Math.PI, 0, 4500, t.Ease.SineOut),
            this.motionRenderController = this.rootTween.addRender(this.motionTween, 0, 600, 0, 600, t.Ease.CubicInOut),
            this.menu.getSVG().appendChild(this.lineSymbol.getSVG()),
            this.menu.getSVG().appendChild(this.lineEndSymbol.getSVG())
        }
        return e.prototype.getTween = function() {
            return this.rootTween
        }
        ,
        e.prototype.setSize = function(e) {
            this.viewportsize = e;
            var i, s = .5 * e.x, n = .5 * e.y, o = 0;
            e.x > t.Config.BREAKPOINT ? (o = 60,
            i = n + 10 - 40 * this.amountOfMenuItems * .5 + 40 * this.index) : i = n;
            var r = Math.max(.2 * e.x, .25 * e.y)
              , a = r
              , h = i
              , l = e.x - o
              , d = Math.round(a / this.amountOfMenuItems)
              , r = (d * (this.amountOfMenuItems - 1 - this.index),
            Math.max(.2 * e.x, .25 * e.y));
            this.waveSize = new t.Vec(r,.05 * r),
            this.wavePosX = s - .5 * this.waveSize.x,
            this.lineEndSymbol.setAttribute("transform", "translate(" + this.wavePosX + ", " + n + ")"),
            this.waveSize.x /= this.amountOfMenuItems,
            this.wave.setSize(this.waveSize);
            var u = this.wave.getCurve()
              , p = this.wavePosX + u.b.x + .5 * (l - (this.wavePosX + u.b.x))
              , c = h - .5 * (h - i);
            c += Math.cos(this.index / 2) * (.04 * -n),
            this.bezierMiddleX = p,
            this.bezierMiddleY = c,
            this.bezierCtrlOffset = .25 * (p - (this.wavePosX + u.b.x)),
            this.lineA.a.set(l, i),
            this.lineA.aC.set(l - .1 * e.x, i);
            var y = 140 * (this.amountOfMenuItems - this.index)
              , m = 1e3 + .2 * s
              , f = y + 250 + m + 100;
            this.defaultLineRender.set(0, 60, y + m, 250),
            this.defaultLineRender.updateProgress(this.defaultLineRender.progress),
            this.offsetStartRender.bounds.set(0, y + m),
            this.offsetEndRender.bounds.set(100, y + 250 + m),
            this.lineEndOffsetRender.bounds.set(0, 100),
            this.offsetUpdateRender.bounds.set(0, f),
            this.motionTween.updateBounds(),
            this.motionRenderController.set(0, f, 0, f),
            this.rootTween.updateBounds(),
            this.update()
        }
        ,
        e.prototype.setWaveProgress = function(t) {
            t += this.waveBaseP,
            this.wave.setProgress(t);
            var e = this.waveSize.y * (this.amountOfMenuItems - this.index);
            t += .5 * Math.PI * (this.index + 1);
            var i = .5 * this.viewportsize.y + Math.cos(t) * this.waveSize.y;
            this.lineB.b.set(this.wavePosX + this.waveSize.x + this.waveSize.x * this.index - 1, i);
            var s = i - Math.sin(t) * e * 1.25;
            this.lineB.bC.set(this.lineB.b.x + 2 * this.bezierCtrlOffset, s),
            t += Math.PI;
            var n = i - Math.cos(t) * e * .75;
            this.lineB.a.set(this.bezierMiddleX, n),
            t += .5 * Math.PI;
            var o = n - Math.sin(t) * e * .75;
            this.lineB.aC.set(this.bezierMiddleX - this.bezierCtrlOffset, o),
            t -= Math.PI;
            var r = n - Math.sin(t) * e * .75;
            this.lineA.bC.set(this.bezierMiddleX + this.bezierCtrlOffset, r)
        }
        ,
        e.prototype.updateWaveProgress = function(t) {
            this.lineOffset.update(),
            this.lineSymbol.update(),
            this.lineEndOffset.update(),
            this.lineEndSymbol.update()
        }
        ,
        e.prototype.setProgress = function(t) {
            this.progress = t,
            this.update()
        }
        ,
        e.prototype.update = function() {
            var e = t.MathUtility.Limit(3 * this.progress - .75, 0, 1)
              , i = this.currentColor.blendRGB(t.RGB.WHITE, e).toString();
            this.lineSymbol.setLineColor(i),
            this.lineEndSymbol.setLineColor(i)
        }
        ,
        e.prototype.destroy = function() {
            this.menu.getSVG().removeChild(this.lineSymbol.getSVG()),
            this.menu.getSVG().removeChild(this.lineEndSymbol.getSVG()),
            this.menu = null ,
            this.line = null ,
            this.lineA = this.lineB = this.lineEnd = null ,
            this.lineOffset = null ,
            this.lineSymbol = null ,
            this.lineEndOffset = null ,
            this.lineEndSymbol = null ,
            this.motionTween = null ,
            this.defaultLineRender = null ,
            this.lineEndOffsetRender = null ,
            this.offsetStartRender = null ,
            this.offsetEndRender = null ,
            this.offsetUpdateRender = null ,
            this.rootTween.destroy(),
            this.rootTween = null 
        }
        ,
        e
    }();
    t.MenuItemIntroMotion = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o, r) {
            this.progress = 0,
            this.index = e,
            this.amountOfMenuItems = i,
            this.currentColor = s,
            this.chapterColor = n,
            this.menu = o,
            this.defaultLine = r,
            this.line = new t.Path,
            this.lineA = t.CubicBezier.FromZero(),
            this.line.add(this.lineA),
            this.lineB = t.CubicBezier.FromZero(),
            this.line.add(this.lineB),
            this.lineEndA = t.Vec.FromZero(),
            this.lineEndB = t.Vec.FromZero(),
            this.lineEnd = new t.Line(this.lineEndA,this.lineEndB),
            this.lineB.a = this.lineA.b,
            this.lineB.b = this.lineEnd.b,
            this.lineOffset = new t.OffsetableShape(this.line),
            this.lineSymbol = new t.SVGPathSymbol(this.lineOffset),
            this.lineSymbol.setFillColor("none"),
            this.lineSymbol.setLineColor(this.currentColor.toString()),
            this.lineSymbol.setLineWidth(20),
            this.lineEndOffset = new t.OffsetableShape(this.lineEnd),
            this.lineEndSymbol = new t.SVGPathSymbol(this.lineEndOffset),
            this.lineEndSymbol.setFillColor("none"),
            this.lineEndSymbol.setLineColor(this.currentColor.toString()),
            this.lineEndSymbol.setLineWidth(20),
            this.motionTween = new t.Tween,
            this.defaultLineRender = new t.CSSPropertyWithUnitRender(r,"width","px",0,60,600,100,t.Ease.Linear),
            this.motionTween.add(this.defaultLineRender),
            this.lineEndOffsetRender = this.motionTween.addFunction(this.lineEndOffset.setOffsetStart.bind(this.lineEndOffset), 1, 0, 600, 100, t.Ease.Linear),
            this.motionTween.add(this.lineEndOffsetRender),
            this.offsetStartRender = this.motionTween.addFunction(this.lineOffset.setOffsetStart.bind(this.lineOffset), 0, 1, 100, 600, t.Ease.Linear),
            this.offsetEndRender = this.motionTween.addFunction(this.lineOffset.setOffsetEnd.bind(this.lineOffset), 0, 1, 50, 600, t.Ease.Linear),
            this.offsetUpdateRender = this.motionTween.addFunction(this.setProgress.bind(this), 0, 1, 0, 700, t.Ease.Linear),
            this.rootTween = new t.TweenRender(this.motionTween,0,600,0,600,t.Ease.CubicInOut),
            this.menu.getSVG().appendChild(this.lineSymbol.getSVG()),
            this.menu.getSVG().appendChild(this.lineEndSymbol.getSVG())
        }
        return e.prototype.getTween = function() {
            return this.rootTween
        }
        ,
        e.prototype.setSize = function(e) {
            var i = 0
              , s = .6 * e.x
              , n = 42;
            e.x > t.Config.BREAKPOINT && (i = 60,
            n = .5 * e.y);
            var o = .5 * e.y + 10 - 40 * this.amountOfMenuItems * .5 + 40 * this.index;
            this.defaultLine.style.width = i + "px";
            var r = 0
              , a = e.x - i
              , h = n;
            this.lineEndA.set(0, h),
            this.lineEndB.set(r, h);
            var l = Math.abs(.25 * s)
              , d = .5 * (n - o);
            d > 0 ? d += .12 * n : d -= .12 * n,
            this.lineA.a.set(a, o),
            this.lineA.aC.set(a - l, o),
            this.lineA.bC.set(s + l, n - d),
            this.lineA.b.set(s, n),
            this.lineB.aC.set(s - l, n + d),
            this.lineB.bC.set(this.lineEndB.x + l, h);
            var u = 40
              , p = 900 + .6 * e.x
              , c = u + p + 200;
            this.defaultLineRender.set(60, 0, u, 100),
            this.defaultLineRender.updateProgress(this.defaultLineRender.progress),
            this.offsetStartRender.bounds.set(u + 100, u + 200 + p),
            this.offsetEndRender.bounds.set(0, u + p),
            this.lineEndOffsetRender.bounds.set(u + p, u + p + 200),
            this.offsetUpdateRender.bounds.set(0, c),
            this.motionTween.updateBounds(),
            this.rootTween.set(0, c, 0, c),
            this.rootTween.updateBounds(),
            this.update()
        }
        ,
        e.prototype.setProgress = function(t) {
            this.progress = t,
            this.update()
        }
        ,
        e.prototype.update = function() {
            this.lineSymbol.setLineColor(this.currentColor.blendRGB(this.chapterColor, this.progress).toString()),
            this.lineEndSymbol.setLineColor(this.currentColor.blendRGB(this.chapterColor, this.progress).toString()),
            this.lineOffset.update(),
            this.lineSymbol.update(),
            this.lineEndOffset.update(),
            this.lineEndSymbol.update()
        }
        ,
        e.prototype.destroy = function() {
            this.menu.getSVG().removeChild(this.lineSymbol.getSVG()),
            this.menu.getSVG().removeChild(this.lineEndSymbol.getSVG()),
            this.menu = null ,
            this.line = null ,
            this.lineA = this.lineB = this.lineEndA = this.lineEndB = this.lineEnd = null ,
            this.lineOffset = null ,
            this.lineSymbol = null ,
            this.lineEndOffset = null ,
            this.lineEndSymbol = null ,
            this.motionTween = null ,
            this.defaultLineRender = null ,
            this.lineEndOffsetRender = null ,
            this.offsetStartRender = null ,
            this.offsetEndRender = null ,
            this.offsetUpdateRender = null ,
            this.rootTween.destroy(),
            this.rootTween = null 
        }
        ,
        e
    }();
    t.MenuItemOverlayMotion = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this),
            this._insideLoadBounds = !1,
            this.onInsideHandlerBind = this.onInsideHandler.bind(this),
            this.onOutsideHandlerBind = this.onOutsideHandler.bind(this),
            this._selected = !1,
            this.html = new t.HTMLSymbolContainer(t.HTML.Create("div", {
                "class": "pageSeg " + s
            })),
            this.id = i.id,
            this.data = i,
            this._isDark = void 0 !== i.isdark && i.isdark === !0,
            this._isNormal = void 0 !== i.isnormal && i.isnormal === !0,
            this.canvas = n,
            this.viewportHandler = o,
            this.marginTop = void 0 !== i.marginTop ? i.marginTop : .05,
            this.marginBottom = void 0 !== i.marginBottom ? i.marginBottom : .05,
            this.marginLeft = void 0 !== i.marginLeft ? i.marginLeft : .05,
            this.marginRight = void 0 !== i.marginRight ? i.marginRight : .05,
            this.segmentWithin = new t.WithinGroup,
            void 0 !== i.fontColor && (this.html.node.style.color = i.fontColor),
            this.segmentWithin.addEventListener(t.RenderWithinEvent.INSIDE, this.onInsideHandlerBind),
            this.segmentWithin.addEventListener(t.RenderWithinEvent.BEFORE, this.onOutsideHandlerBind),
            this.segmentWithin.addEventListener(t.RenderWithinEvent.AFTER, this.onOutsideHandlerBind),
            this.scopeCont = new t.ScopeController(this.segmentWithin),
            this.scopeCont.scopeUpdateBehaviour(this.scopeUpdateHandler.bind(this))
        }
        return __extends(i, e),
        i.prototype.getHTML = function() {
            return this.html.getHTML()
        }
        ,
        i.prototype.getStart = function() {
            return 0
        }
        ,
        i.prototype.getScopeRender = function() {
            return this.scopeCont
        }
        ,
        i.prototype.isDark = function() {
            return this._isDark
        }
        ,
        i.prototype.isNormal = function() {
            return this._isNormal
        }
        ,
        i.prototype.onInsideHandler = function(t) {
            this.isInside(),
            this.insideLoadBounds(),
            this.html.addClass("visible")
        }
        ,
        i.prototype.onOutsideHandler = function(t) {
            this.isOutside(),
            this.html.removeClass("visible")
        }
        ,
        i.prototype.updatePositionProps = function(t, e, i) {
            if (this.segmentWithin.bounds.distanceToNumber(t) < e) {
                this.insideLoadBounds();
                var s = this.segmentWithin.bounds.clone();
                if (s.start += .4 * i,
                s.end -= .4 * i,
                s.contains(t) === !0)
                    return this._selected === !1 && (this._selected = !0,
                    this.selected()),
                    !0
            } else
                this.outsideLoadBounds();
            return this._selected === !0 && (this._selected = !1,
            this.deselected()),
            !1
        }
        ,
        i.prototype.selected = function() {}
        ,
        i.prototype.deselected = function() {}
        ,
        i.prototype.insideLoadBounds = function() {
            this._insideLoadBounds === !1 && (this._insideLoadBounds = !0,
            this.isInsideLoadingBounds())
        }
        ,
        i.prototype.outsideLoadBounds = function() {
            this._insideLoadBounds === !0 && (this._insideLoadBounds = !1,
            this.isOutsideLoadingBounds())
        }
        ,
        i.prototype.isInside = function() {}
        ,
        i.prototype.isOutside = function() {}
        ,
        i.prototype.isInsideLoadingBounds = function() {}
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(t, e) {}
        ,
        i.prototype.computeSnapPoints = function(t) {}
        ,
        i.Factory = new t.RuntimeFactory,
        i
    }(t.EventDispatcher);
    t.ASegment = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this, i, void 0 !== o ? "image " + o : "image", s, n),
            this.onImageErrorBind = this.onImageError.bind(this),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.setPagePosBind = this.setPagePos.bind(this),
            this.transform = t.TransformMatrix.FromDefault(),
            this.pageSymbol = new t.CanvasSymbolContainer,
            this.pageSymbol.hide(),
            s.addChild(this.pageSymbol);
            var r = i.media;
            this.imageSourceSize = t.Vector.FromString(r.sourceSize),
            this.fitDef = t.FitDef.FromJSON(r),
            this.imageLoader = new t.ResponsiveImageRequest(r.url,this.imageSourceSize,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageLoader.addEventListener(t.RequestEvent.ERROR, this.onImageErrorBind),
            this.imageTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.imageTexture.color = r.color,
            this.imageSymbol = new t.OldCanvasTextureSymbol(this.imageTexture),
            this.imageSymbol.addFitDef(this.fitDef),
            this.pageSymbol.addChild(this.imageSymbol),
            this.pagePosScroll = new t.FunctionRender(this.setPagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.pagePosScroll)
        }
        return __extends(i, e),
        i.prototype.onImageError = function(t) {}
        ,
        i.prototype.onImageComplete = function(t) {
            this.imageLoader.updateSize(),
            this.imageTexture.set(t.target.data, this.imageLoader.getRealSize())
        }
        ,
        i.prototype.isInside = function() {
            this.pageSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.pageSymbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.imageLoader.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            var s = this.imageSourceSize.getAspectRatio()
              , n = i.x - (this.marginLeft + this.marginRight) * i.x
              , o = new t.Vec(n,n / s);
            this.updateImageSize(o, o.y, i),
            this.imageSymbol.transform.t.x = this.marginLeft * i.x,
            e.setHeight(Math.round(o.y)),
            this.segmentWithin.updateBounds()
        }
        ,
        i.prototype.updateImageSize = function(t, e, i) {
            this.imageSymbol.setSize(t),
            this.imageLoader.setSize(t),
            this._insideLoadBounds === !0 && this.imageLoader.execute();
            var s = i.y + e
              , n = 0
              , o = -e
              , r = i.y;
            this.pagePosScroll.set(r, o, n, s)
        }
        ,
        i.prototype.setPagePos = function(t) {
            this.pageSymbol.transform.t.y = t
        }
        ,
        i
    }(t.ASegment);
    t.ImageSegment = e,
    t.ASegment.Factory.addClass("image", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "articleSingle", s, n),
            this.scrollWithin = new t.WithinGroup,
            this.scrollX = 0,
            this.htmlTransform = t.TransformMatrix.FromDefault(),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.onClickBind = this.onClick.bind(this),
            this.setPagePosBind = this.setPagePos.bind(this),
            this.setRectPosBind = this.setRectPos.bind(this),
            this.pageCanvasSymbol = new t.CanvasSymbolContainer,
            this.pageCanvasSymbol.hide(),
            this.pageRectangle = t.Rectangle.FromZero(),
            this.pageRectangleSymbol = new t.CanvasShapeSymbol(this.pageRectangle),
            this.pageRectangleSymbol.setFillColor(i.color),
            this.pageCanvasSymbol.addChildAt(this.pageRectangleSymbol, 0),
            s.addChild(this.pageCanvasSymbol),
            this.insideNode = t.HTML.Create("div", {
                "class": "inside"
            }),
            this.headlineNode = t.HTML.Create("h3", {
                html: i.headline
            }),
            this.insideNode.appendChild(this.headlineNode),
            this.html.node.appendChild(this.insideNode),
            this.insideSymbol = new t.CanvasSymbolContainer,
            this.pageCanvasSymbol.addChild(this.insideSymbol),
            this.pagePosScroll = new t.FunctionRender(this.setPagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.pagePosScroll),
            this.pageRectScroll = new t.FunctionRender(this.setRectPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.pageRectScroll),
            this.url = i.item.url,
            this.node = t.HTML.Create("div", {
                "class": "item"
            }),
            this.insideNode.appendChild(this.node);
            var o = i.fontColor || ""
              , r = (null  !== o.match(/^#[fF]+$/) || "") && " link--white";
            this.node.appendChild(t.HTML.Create("h3", {
                html: i.item.title
            })),
            this.node.appendChild(t.HTML.Create("p", {
                html: i.item.description
            }));
            var a = t.HTML.Create("a", {
                "class": "link" + r,
                html: i.item.cta,
                href: i.item.url
            });
            a.addEventListener("click", this.onClickBind),
            this.node.appendChild(a);
            var h = i.item.media;
            this.sourceSize = t.Vector.FromString(h.sourceSize),
            this.sourceAspectRatio = this.sourceSize.getAspectRatio(),
            this.fitDef = new t.FitDef(1,1,.5,.5),
            this.imageLoader = new t.ResponsiveImageRequest(h.url,this.sourceSize,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.imageTexture.color = h.color,
            this.imageSymbol = new t.OldCanvasTextureSymbol(this.imageTexture),
            this.imageSymbol.addFitDef(this.fitDef),
            this.imageSymbol.setAlpha(0),
            this.insideSymbol.addChild(this.imageSymbol)
        }
        return __extends(i, e),
        i.prototype.onImageComplete = function(e) {
            if (this.imageLoader.updateSize(),
            this.imageTexture.set(e.target.data, this.imageLoader.getRealSize()),
            this.pageCanvasSymbol.isVisible() === !0) {
                if (1 !== this.imageSymbol.getAlpha()) {
                    var i = new t.FunctionTween(this.imageSymbol.setAlpha.bind(this.imageSymbol),this.imageSymbol.getAlpha(),1,0,800,t.Ease.Linear);
                    i.makeAutoDestroy(),
                    i.execute()
                }
            } else
                this.imageSymbol.setAlpha(1)
        }
        ,
        i.prototype.onClick = function(e) {
            t.URLManager.GoToURL(this.url),
            e.preventDefault()
        }
        ,
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.pageCanvasSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.pageCanvasSymbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.imageLoader.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            this._insideLoadBounds === !0 && this.imageLoader.execute();
            var s = this.headlineNode.offsetHeight
              , n = Math.round(.0125 * i.x)
              , o = .12 * i.x;
            i.x > t.Config.BREAKPOINT && (o *= .5);
            var r = i.x - 2 * o;
            this.headlineNode.style.width = r + "px",
            this.headlineNode.style.marginLeft = o + "px",
            this.insideSymbol.transform.t.y = s,
            this.imageSize = new t.Vector(r,r / this.sourceAspectRatio),
            this.imageSymbol.setSize(this.imageSize),
            this.imageLoader.setSize(this.imageSize),
            this.node.style.paddingTop = Math.round(this.imageSize.y + n + .5 * o) + "px",
            this.imageSymbol.transform.t.x = Math.round(o);
            var a = this.imageSize.y
              , h = o + this.node.offsetHeight - this.imageSize.y;
            this.pageRectangle.a.set(n, .5 * a + s),
            this.pageRectangle.s.set(i.x - 2 * n, h + .5 * a + 2 * n),
            this.segmentHeight = s + a + h + 3 * n;
            var l = i.y + this.segmentHeight
              , d = 0
              , u = -this.segmentHeight
              , p = i.y;
            this.pagePosScroll.set(p, u, d, l);
            var c = Math.min(.1 * i.x, .2 * i.y);
            this.pageRectScroll.set(-c, 0, d, l),
            this.segmentHeight += n,
            this.html.node.style.height = this.segmentHeight + "px",
            e.setHeight(Math.round(this.segmentHeight)),
            this.segmentWithin.updateBounds()
        }
        ,
        i.prototype.setPagePos = function(e) {
            this.pageCanvasSymbol.transform.t.y = Math.round(e),
            this.html.node.style[t.css.name.TRANSFORM] = this.pageCanvasSymbol.transform.toString()
        }
        ,
        i.prototype.setRectPos = function(t) {
            this.pageRectangleSymbol.transform.t.y = Math.round(t)
        }
        ,
        i
    }(t.ASegment);
    t.ArticleSegment = e,
    t.ASegment.Factory.addClass("article", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n, o) {
            void 0 === o && (o = ""),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.onClickBind = this.onClick.bind(this),
            this.onMouseEnterBind = this.onMouseEnter.bind(this),
            this.onMouseLeaveBind = this.onMouseLeave.bind(this),
            this.imageScaleBind = this.imageScale.bind(this),
            this.index = e,
            this.parent = i,
            this.url = s.url,
            this.backgroundColor = n,
            this.node = t.HTML.Create("div", {
                "class": "item"
            }),
            this.imageHoverNode = t.HTML.Create("div", {
                "class": "imageHover"
            }),
            this.h3 = t.HTML.Create("h3", {
                html: s.title
            }),
            this.p = t.HTML.Create("p", {
                html: s.description
            }),
            this.node.appendChild(this.imageHoverNode),
            this.node.appendChild(this.h3),
            this.node.appendChild(this.p);
            var r = (null  !== o.match(/^#[fF]+$/) || "") && " link--white";
            this.a = t.HTML.Create("a", {
                "class": "link" + r,
                html: s.cta,
                href: s.url
            }),
            this.a.addEventListener("click", this.onClickBind),
            this.node.appendChild(this.a),
            this.node.addEventListener("click", this.onClickBind),
            this.node.addEventListener("mouseenter", this.onMouseEnterBind),
            this.node.addEventListener("mouseleave", this.onMouseLeaveBind);
            var a = s.media;
            this.sourceSize = t.Vector.FromString(a.sourceSize),
            this.sourceAspectRatio = this.sourceSize.getAspectRatio(),
            this.fitDef = new t.FitDef(1,1,.5,.5),
            this.imageLoader = new t.ResponsiveImageRequest(a.url,this.sourceSize,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.imageTexture.color = a.color,
            this.imageSymbol = new t.OldCanvasTextureSymbol(this.imageTexture),
            this.imageSymbol.addFitDef(this.fitDef),
            this.container = new t.CanvasSymbolContainer,
            this.container.addChild(this.imageSymbol),
            this.tween = new t.FunctionTween(this.imageScaleBind,0,1,0,550,t.Ease.QuartInOut)
        }
        return e.prototype.getHTML = function() {
            return this.node
        }
        ,
        e.prototype.getCanvasSymbol = function() {
            return this.container
        }
        ,
        e.prototype.show = function() {
            this.container.show()
        }
        ,
        e.prototype.hide = function() {
            this.container.hide()
        }
        ,
        e.prototype.onImageComplete = function(e) {
            if (this.imageLoader.updateSize(),
            this.imageTexture.set(e.target.data, this.imageLoader.getRealSize()),
            this.imageSymbol.isVisible() === !0) {
                if (1 !== this.imageSymbol.getAlpha()) {
                    var i = new t.FunctionTween(this.imageSymbol.setAlpha.bind(this.imageSymbol),this.imageSymbol.getAlpha(),1,0,800,t.Ease.Linear);
                    i.makeAutoDestroy(),
                    i.execute()
                }
            } else
                this.imageSymbol.setAlpha(1)
        }
        ,
        e.prototype.onClick = function(e) {
            t.URLManager.GoToURL(this.url),
            e.preventDefault()
        }
        ,
        e.prototype.onMouseEnter = function(t) {
            this.tween.forward(),
            this.parent.onOverItem(this)
        }
        ,
        e.prototype.onMouseLeave = function(t) {
            this.tween.backward(),
            this.parent.onOutItem(this)
        }
        ,
        e.prototype.imageScale = function(t) {
            var e = 1 + .04 * t;
            this.imageSymbol.transform.s.set(e, e)
        }
        ,
        e.prototype.getTask = function() {
            return this.imageLoader
        }
        ,
        e.prototype.setSize = function(e, i) {
            var s = Math.round(e - 2 * i);
            this.imageSize = new t.Vector(s,s / this.sourceAspectRatio),
            this.imageSymbol.setSize(this.imageSize),
            this.imageSymbol.transform.t.set(.5 * this.imageSize.x, .5 * this.imageSize.y),
            this.imageSymbol.transform.o.set(.5 * this.imageSize.x, .5 * this.imageSize.y),
            this.imageLoader.setSize(this.imageSize),
            this.leftPos = this.index * e + i,
            this.node.style.width = s + "px",
            this.node.style.left = this.leftPos + "px",
            this.imageHoverNode.style.height = this.getImageHeight() + "px",
            this.node.style.paddingTop = this.imageSize.y + i + "px",
            this.container.transform.t.x = this.leftPos,
            this.contentHeight = i + i + i + this.node.offsetHeight - this.imageSize.y
        }
        ,
        e.prototype.getImageHeight = function() {
            return this.imageSize.y
        }
        ,
        e.prototype.getContentHeight = function() {
            return this.contentHeight
        }
        ,
        e.prototype.getHeight = function() {
            return 0
        }
        ,
        e
    }();
    t.ArticleSliderItem = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "articleSlider", s, n),
            this.scrollWithin = new t.WithinGroup,
            this.arrowLeftActive = !1,
            this.arrowRightActive = !1,
            this.scrollX = 0,
            this.taskQueue = new t.TaskQueueAsync,
            this.sliderItems = [],
            this.htmlTransform = t.TransformMatrix.FromDefault(),
            this.setPagePosBind = this.setPagePos.bind(this),
            this.onClickLeftArrowBind = this.onClickLeftArrow.bind(this),
            this.onClickRightArrowBind = this.onClickRightArrow.bind(this),
            this.scrollViewportHandler = new t.ViewportManeuverHandler(this),
            this.scrollViewportHandler.setXLimit(0, 0),
            this.scrollViewportHandler.setSnapHandlerX(this.handleSnap.bind(this)),
            this.touchListener = new t.DirectionalTouchListener(this.html.node,this.scrollViewportHandler,!0,!1,!0),
            this.touchListener.preventDefaultTouch = !0,
            this.mouseWheelListener = new t.MouseWheelListener(this.html.node,this.scrollViewportHandler,!0,!1),
            this.keyboardListener = new t.ViewportKeyboardListener(this.html.node,this.scrollViewportHandler,!0,!1),
            this.pageCanvasSymbol = new t.CanvasSymbolContainer,
            this.pageCanvasSymbol.hide(),
            this.pageRectangle = t.Rectangle.FromZero(),
            this.pageRectangleSymbol = new t.CanvasShapeSymbol(this.pageRectangle),
            this.pageRectangleSymbol.setFillColor(i.color),
            this.pageCanvasSymbol.addChildAt(this.pageRectangleSymbol, 0),
            s.addChild(this.pageCanvasSymbol),
            this.insideMaskNode = t.HTML.Create("div", {
                "class": "insideMask"
            }),
            this.insideNode = t.HTML.Create("div", {
                "class": "inside"
            }),
            this.outsideNode = t.HTML.Create("div", {
                "class": "outside"
            }),
            this.headlineNode = t.HTML.Create("h3", {
                html: i.headline
            }),
            this.arrowRightNode = t.HTML.Create("div", {
                "class": "arrowRight"
            }),
            this.arrowLeftNode = t.HTML.Create("div", {
                "class": "arrowLeft"
            }),
            this.arrowRightNode.style.display = "none",
            this.arrowLeftNode.style.display = "none",
            this.headlineNode.style.color = i.arrowColor;
            var o = new t.HTMLSVGSymbol("32px","32px")
              , r = new t.HTMLSVGSymbol("32px","32px")
              , a = new t.Path(!0)
              , h = new t.Line(new t.Vector(9,16),new t.Vector(23,30))
              , l = new t.Line(new t.Vector(9,16),new t.Vector(23,2))
              , d = new t.Path(!0)
              , u = new t.Line(new t.Vector(23,16),new t.Vector(9,30))
              , p = new t.Line(new t.Vector(23,16),new t.Vector(9,2));
            o.getSVG().setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg"),
            o.setAttribute("viewBox", "0 0 32 32"),
            o.setAttribute("preserveAspectRatio", "xMidYMax"),
            r.getSVG().setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg"),
            r.setAttribute("viewBox", "0 0 32 32"),
            r.setAttribute("preserveAspectRatio", "xMidYMax"),
            a.add(h),
            a.add(l),
            d.add(u),
            d.add(p);
            var c = new t.SVGPathSymbol(a);
            c.setLineColor(i.arrowColor),
            c.setLineWidth(1.5),
            c.setFillColor("none");
            var y = new t.SVGPathSymbol(d);
            y.setLineColor(i.arrowColor),
            y.setLineWidth(1.5),
            y.setFillColor("none"),
            o.addChild(c),
            r.addChild(y),
            this.arrowLeftNode.appendChild(o.getSVG()),
            this.arrowRightNode.appendChild(r.getSVG()),
            this.outsideNode.appendChild(this.arrowLeftNode),
            this.outsideNode.appendChild(this.arrowRightNode),
            this.outsideNode.appendChild(this.headlineNode),
            this.html.node.appendChild(this.outsideNode),
            this.insideMaskNode.appendChild(this.insideNode),
            this.html.node.appendChild(this.insideMaskNode),
            this.frameMaskRect = t.Rectangle.FromZero(),
            this.frameSymbol = new t.CanvasSymbolContainer,
            this.frameSymbol.setMask(this.frameMaskRect),
            this.pageCanvasSymbol.addChild(this.frameSymbol),
            this.insideSymbol = new t.CanvasSymbolContainer,
            this.frameSymbol.addChild(this.insideSymbol),
            this.pagePosScroll = new t.FunctionRender(this.setPagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.pagePosScroll);
            for (var m, f = 0, g = i.items.length; g > f; )
                m = new t.ArticleSliderItem(f,this,i.items[f],i.color,i.fontColor),
                this.insideNode.appendChild(m.getHTML()),
                this.insideSymbol.addChild(m.getCanvasSymbol()),
                this.sliderItems.push(m),
                this.taskQueue.addTask(m.getTask()),
                f++;
            this.arrowLeftNode.addEventListener("click", this.onClickLeftArrowBind),
            this.arrowRightNode.addEventListener("click", this.onClickRightArrowBind)
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.setPositionX(0),
            this.touchListener.enable(),
            this.mouseWheelListener.enable(),
            this.keyboardListener.enable(),
            this.pageCanvasSymbol.show(),
            this.arrowRightNode.style.display = "",
            this.arrowLeftNode.style.display = "",
            this.scrollViewportHandler.triggerSnapX();
            for (var t = 0, i = this.sliderItems.length; i > t; )
                this.sliderItems[t++].show()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.touchListener.disable(),
            this.mouseWheelListener.disable(),
            this.keyboardListener.disable(),
            this.pageCanvasSymbol.hide(),
            this.arrowRightNode.style.display = "none",
            this.arrowLeftNode.style.display = "none";
            for (var t = 0, i = this.sliderItems.length; i > t; )
                this.sliderItems[t++].hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.taskQueue.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(t, e) {
            this._insideLoadBounds === !0 && (this.taskQueue.execute(),
            this.setPositionX(this.scrollX)),
            this.viewportSize = e;
            var i = this.outsideNode.offsetHeight
              , s = Math.round(.0125 * e.x)
              , n = .1 * e.x
              , o = 1;
            e.x > 768 && (o = 2,
            n *= .5,
            e.x > 1279 && (o = 3,
            n *= .5,
            e.x > 1540 && (o = 4))),
            n = Math.round(n),
            this.gutter = n;
            var r = Math.round(.05 * e.x);
            this.insideSymbol.transform.t.y = i,
            this.insideSymbol.transform.o.x = -r + s,
            this.htmlTransform.o.x = -r + s,
            this.sliderWidth = e.x - (2 * s + r),
            this.itemWidth = this.sliderWidth / o;
            for (var a = 0, h = this.sliderItems.length; h > a; )
                this.sliderItems[a].setSize(this.itemWidth, n),
                a++;
            this.scrollViewportHandler.setXLimit(Math.min(-this.itemWidth * h + e.x - (r + 2 * s), 0), 0);
            var l = this.sliderItems[0].getImageHeight()
              , d = this.sliderItems[0].getContentHeight();
            this.frameMaskRect.a.x = s,
            this.frameMaskRect.s.x = e.x - 2 * s,
            this.frameMaskRect.s.y = d + l,
            this.pageRectangle.a.set(s, .5 * l + i),
            this.pageRectangle.s.set(e.x - 2 * s, d + .5 * l),
            this.segmentHeight = l + d + i,
            this.insideMaskNode.style.width = e.x - 2 * s - 1 + "px",
            this.insideMaskNode.style.height = d + l + "px",
            this.insideMaskNode.style.marginLeft = s + 1 + "px";
            var u = r + n - s;
            this.outsideNode.style.width = e.x - 2 * u + "px",
            this.outsideNode.style.marginLeft = u + "px";
            var p = e.y + this.segmentHeight
              , c = 0
              , y = -this.segmentHeight
              , m = e.y;
            this.pagePosScroll.set(m, y, c, p),
            this.segmentHeight += s,
            this.html.node.style.height = this.segmentHeight + "px",
            t.setHeight(Math.round(this.segmentHeight)),
            this.segmentWithin.updateBounds()
        }
        ,
        i.prototype.handleSnap = function(e, i) {
            var e = Math.round((e + 3 * i) / this.itemWidth) * this.itemWidth;
            return 0 > e ? this.arrowLeftActive === !1 && (this.arrowLeftActive = !0,
            t.HTML.AddClass(this.arrowLeftNode, "active")) : this.arrowLeftActive === !0 && (this.arrowLeftActive = !1,
            t.HTML.RemoveClass(this.arrowLeftNode, "active")),
            e > this.scrollViewportHandler.getXLimit().start ? this.arrowRightActive === !1 && (this.arrowRightActive = !0,
            t.HTML.AddClass(this.arrowRightNode, "active")) : this.arrowRightActive === !0 && (this.arrowRightActive = !1,
            t.HTML.RemoveClass(this.arrowRightNode, "active")),
            e
        }
        ,
        i.prototype.setPagePos = function(e) {
            this.pageCanvasSymbol.transform.t.y = Math.round(e),
            this.pageRectangleSymbol.transform.t.y = Math.round(e + this.viewportSize.y) * -.05,
            this.html.node.style[t.css.name.TRANSFORM] = this.pageCanvasSymbol.transform.toString()
        }
        ,
        i.prototype.onClickLeftArrow = function(t) {
            this.scrollViewportHandler.movePageLeft()
        }
        ,
        i.prototype.onClickRightArrow = function(t) {
            this.scrollViewportHandler.movePageRight()
        }
        ,
        i.prototype.onOverItem = function(t) {}
        ,
        i.prototype.onOutItem = function(t) {}
        ,
        i.prototype.getWidth = function() {
            return this.html.getWidth()
        }
        ,
        i.prototype.getHeight = function() {
            return this.html.getHeight()
        }
        ,
        i.prototype.setPosition = function(t) {}
        ,
        i.prototype.getPosition = function() {
            return new t.Vec(this.scrollX,0)
        }
        ,
        i.prototype.setPositionX = function(e) {
            this.scrollX = Math.round(e) - 1,
            this.insideSymbol.transform.t.x = Math.round(this.scrollX);
            var i = .0125 * this.viewportSize.x;
            this.htmlTransform.t.x = Math.round(this.scrollX - i),
            this.insideNode.style[t.css.name.TRANSFORM] = this.htmlTransform.toString(),
            this.canvas.forceUpdate()
        }
        ,
        i.prototype.setPositionY = function(t) {}
        ,
        i
    }(t.ASegment);
    t.ArticlesSegment = e,
    t.ASegment.Factory.addClass("articles", e)
}(ss || (ss = {}));
var ss;
!function(ss) {
    var CenterTextSegment = function(_super) {
        function CenterTextSegment(data, canvas, viewportHandler) {
            if (_super.call(this, data, "centertext", canvas, viewportHandler),
            this._textMatrix = ss.TransformMatrix.FromDefault(),
            this._textPosOffset = 0,
            this.setTextPosOffsetBind = this.setTextPosOffset.bind(this),
            this.setTextPosBind = this.setTextPos.bind(this),
            this.onTitleNotCompleteBind = this.onTitleNotComplete.bind(this),
            this.onTitleCompleteBind = this.onTitleComplete.bind(this),
            this.aspectRatio = eval(data.aspectRatio),
            this.highlightColor = data.highlightColor,
            void 0 !== data.title) {
                var titleParts = data.title.split(CenterTextSegment.SplitDataRegex);
                this.titleSymbol = new ss.HTMLTitleTweenSymbol("h3");
                for (var i = 0, len = titleParts.length, iSymbol; len > i; )
                    "<br/>" == titleParts[i] ? this.titleSymbol.addChild(new ss.HTMLSymbol("br")) : "" == titleParts[i] || (" " == titleParts[i] ? titleParts[i + 1] = " " + titleParts[i + 1] : (isNaN(parseInt(titleParts[i].charAt(0))) === !1 || isNaN(parseInt(titleParts[i].charAt(1))) === !1 ? (iSymbol = new ss.HTMLNumberTransition("div",titleParts[i]),
                    iSymbol.getHTML().style.color = this.highlightColor) : iSymbol = new ss.HTMLWordTransition("div",titleParts[i]),
                    ss.CSS.SetTransition(iSymbol.getHTML(), "opacity 400ms linear", null , !1),
                    this.titleSymbol.add(iSymbol))),
                    i++;
                this.html.addChild(this.titleSymbol)
            }
            if (this.pNode = ss.HTML.Create("p", {
                html: data.text
            }),
            this.pNode.style[ss.css.name.OPACITY] = "0",
            ss.CSS.SetTransition(this.pNode, "opacity 400ms linear", null , !1),
            this.html.node.appendChild(this.pNode),
            void 0 !== this.data.shareUrl) {
                this.shareButton = new ss.ShareButton(this.data.shareUrl);
                var shareNode = this.shareButton.getHTML();
                this.html.getHTML().appendChild(shareNode)
            }
            void 0 !== data.title ? (this.titleTweenIn = new ss.TweenRender(this.titleSymbol.getTween(),0,0,0,0,ss.Ease.Linear),
            this.titleTweenIn.addEventListener(ss.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.titleTweenIn.addEventListener(ss.RenderWithinEvent.INSIDE, this.onTitleNotCompleteBind),
            this.titleTweenIn.addEventListener(ss.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this.segmentWithin.add(this.titleTweenIn)) : (this.pIsWithin = new ss.IsWithin,
            this.pIsWithin.addEventListener(ss.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.pIsWithin.addEventListener(ss.RenderWithinEvent.INSIDE, this.onTitleCompleteBind),
            this.pIsWithin.addEventListener(ss.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this.segmentWithin.add(this.pIsWithin)),
            this.textPosScroll = new ss.FunctionRender(this.setTextPosBind,0,0,0,0,ss.Ease.Linear),
            this.segmentWithin.add(this.textPosScroll)
        }
        return __extends(CenterTextSegment, _super),
        CenterTextSegment.prototype.isInside = function() {}
        ,
        CenterTextSegment.prototype.isOutside = function() {}
        ,
        CenterTextSegment.prototype.isInsideLoadingBounds = function() {
            this._insideLoadBounds = !0
        }
        ,
        CenterTextSegment.prototype.isOutsideLoadingBounds = function() {
            this._insideLoadBounds = !1
        }
        ,
        CenterTextSegment.prototype.scopeUpdateHandler = function(t, e) {
            var i = this.html.node.offsetHeight;
            this.segmentHeight = i;
            var s = .08 * e.x
              , n = .1 * e.x
              , o = e.y + this.segmentHeight
              , r = s
              , a = -this.segmentHeight
              , h = e.y
              , l = Math.min(this.segmentHeight, .5 * e.y);
            void 0 !== this.data.title ? this.titleTweenIn.set(this.titleSymbol.getTween().bounds.start, this.titleSymbol.getTween().bounds.end, r + .33 * l, .25 * this.titleSymbol.getTween().bounds.end) : (this.pIsWithin.bounds.start = .5 * l,
            this.pIsWithin.bounds.end = o - .75 * l),
            this.textPosScroll.set(h, a, r, o),
            t.setHeight(Math.round(this.segmentHeight + s + n)),
            this.segmentWithin.updateBounds()
        }
        ,
        CenterTextSegment.prototype.setTextPosOffset = function(t) {
            this._textPosOffset = t
        }
        ,
        CenterTextSegment.prototype.setTextPos = function(t) {
            this._textMatrix.t.y = Math.round(t + this._textPosOffset),
            this.html.node.style[ss.css.name.TRANSFORM] = this._textMatrix.toString()
        }
        ,
        CenterTextSegment.prototype.onTitleNotComplete = function(t) {
            this.pNode.style[ss.css.name.OPACITY] = "0"
        }
        ,
        CenterTextSegment.prototype.onTitleComplete = function(t) {
            this.pNode.style[ss.css.name.OPACITY] = "1"
        }
        ,
        CenterTextSegment.SplitDataRegex = /(\s\d+[\.\d]+\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g,
        CenterTextSegment
    }(ss.ASegment);
    ss.CenterTextSegment = CenterTextSegment,
    ss.ASegment.Factory.addClass("centertext", CenterTextSegment)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "double", s, n),
            this.centerMode = i.centerMode || !1,
            this.marginBetween = i.marginBetween || .1,
            void 0 !== i.left ? this.leftElement = new (t.ASegmentElement.Factory.get(i.left.type))(i.left,s,n) : this.leftElement = new t.EmptySegmentElement({},s,n),
            void 0 !== i.right ? this.rightElement = new (t.ASegmentElement.Factory.get(i.right.type))(i.right,s,n) : this.rightElement = new t.EmptySegmentElement({},s,n),
            this.centerMode === !0 ? (this.leftElement.makeCenter(),
            this.rightElement.makeCenter()) : this.rightElement.makeRight(),
            null  !== this.leftElement.getHTML() && this.html.node.appendChild(this.leftElement.getHTML()),
            null  !== this.rightElement.getHTML() && this.html.node.appendChild(this.rightElement.getHTML());
            for (var o = this.leftElement.getWithins(), r = 0; r < o.length; )
                this.segmentWithin.add(o[r++]);
            for (o = this.rightElement.getWithins(),
            r = 0; r < o.length; )
                this.segmentWithin.add(o[r++])
        }
        return __extends(i, e),
        i.prototype.selected = function() {
            this.leftElement.selected(),
            this.rightElement.selected()
        }
        ,
        i.prototype.deselected = function() {
            this.leftElement.deselected(),
            this.rightElement.deselected()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.leftElement.insideLoadBounds(),
            this.rightElement.insideLoadBounds()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {
            this.leftElement.outsideLoadBounds(),
            this.rightElement.outsideLoadBounds()
        }
        ,
        i.prototype.isInside = function() {
            this.leftElement.isInside(),
            this.rightElement.isInside()
        }
        ,
        i.prototype.isOutside = function() {
            this.leftElement.isOutside(),
            this.rightElement.isOutside()
        }
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            var s, n = !1;
            i.x > t.Config.BREAKPOINT ? (n = this.centerMode !== !0,
            s = i.multiplyValues(.5, 1)) : s = i.clone(),
            this.leftElement.computeSize(s, i),
            this.rightElement.computeSize(s, i);
            var o = this.leftElement.getHeight()
              , r = this.rightElement.getHeight()
              , a = this.leftElement.getMarginTop()
              , h = this.rightElement.getMarginTop()
              , l = this.leftElement.getMarginBottom()
              , d = this.rightElement.getMarginBottom()
              , u = Math.max(o, r);
            n === !0 ? (this.leftElement.computeScope(s, u),
            this.rightElement.computeScope(s, u)) : (this.leftElement.computeScope(s, o),
            this.rightElement.computeScope(s, r));
            var p = this.marginTop * i.y;
            if (n === !0)
                this.leftElement.setOffset(p + a),
                this.rightElement.setOffset(p + h),
                p += Math.max(a, h) + u + Math.max(l, d);
            else {
                var c, y, m, f;
                "text" === this.rightElement.getType() && "text" != this.leftElement.getType() ? (c = this.rightElement,
                y = h + r + d,
                m = this.leftElement,
                f = a + o + l) : "productinfo" === this.leftElement.getType() ? (c = this.rightElement,
                y = h + r + d,
                m = this.leftElement,
                f = a + o + l) : (c = this.leftElement,
                y = a + o + l,
                m = this.rightElement,
                f = h + r + d),
                c.setOffset(p + a),
                p += y,
                p += this.marginBetween * i.y,
                m.setOffset(p + h),
                p += f
            }
            this.segmentWithin.updateBounds(),
            e.setHeight(Math.round(p + this.marginBottom * i.y))
        }
        ,
        i
    }(t.ASegment);
    t.DoubleSegment = e,
    t.ASegment.Factory.addClass("double", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s, n, o) {
            e.call(this, s, "endintro", n, o),
            this.size = new t.Vector(0,0),
            this.overlayCutoutTitles = [],
            this.overlayLines = [],
            this.onLogoCompleteBind = this.onLogoComplete.bind(this),
            this.onBGCompleteBind = this.onBGComplete.bind(this),
            this.onBGCompleteFirstTimeBind = this.onBGCompleteFirstTime.bind(this),
            this._contentTransform = t.TransformMatrix.FromDefault(),
            this.setTextPosBind = this.setTextPos.bind(this),
            this.setBgPosBind = this.setBgPos.bind(this),
            this.setOverlayPosBind = this.setOverlayPos.bind(this),
            this.dragStrechBind = this.dragStrech.bind(this),
            this.dragPosBind = this.dragPos.bind(this),
            this.barPosBind = this.barPos.bind(this),
            this.color = s.color,
            this.barWithin = new t.FunctionTween(this.barPosBind,0,0,0,0,t.Ease.CubicIn),
            this.segmentWithin.add(this.barWithin),
            this.overlayCon = new t.CanvasSymbolContainer,
            this.overlayCon.hide();
            for (var r, a = 5; a--; )
                r = new t.OverlayLine(a,this.color),
                this.overlayCon.addChild(r),
                this.overlayLines.push(r);
            for (var h, l = s.title.split("\n"), a = 0, d = l.length; d > a; )
                h = new t.CanvasTextSymbol(l[a],"MillerDisplay",0),
                h.setCompositeOperation("destination-out"),
                h.setAlign("center"),
                h.setBaseline("middle"),
                this.overlayCon.addChild(h),
                this.overlayCutoutTitles.push(h),
                a++;
            var u = s.content.split(i.SplitDataRegex);
            this.contentNode = t.HTML.Create("div", {
                "class": "content"
            }),
            this.textSymbol = new t.HTMLTitleTweenSymbol("h4");
            for (var p, a = 0, d = u.length; d > a; )
                "<br/>" == u[a] ? this.textSymbol.addChild(new t.HTMLSymbol("br")) : "" == u[a] || (" " == u[a] ? u[a + 1] = " " + u[a + 1] : (p = new t.HTMLWordTransition("div",u[a]),
                t.CSS.SetTransition(p.getHTML(), "opacity 400ms linear", null , !1),
                this.textSymbol.add(p))),
                a++;
            if (this.contentNode.appendChild(this.textSymbol.getHTML()),
            void 0 !== this.data.shareUrl) {
                this.shareButton = new t.ShareButton(this.data.shareUrl,this.data.shareLabel);
                var c = this.shareButton.getHTML();
                this.contentNode.appendChild(c)
            }
            this.textTweenIn = new t.TweenRender(this.textSymbol.getTween(),0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.textTweenIn),
            this.contentPosScroll = new t.FunctionRender(this.setTextPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.contentPosScroll),
            this.contentPosScrollOver = new t.FunctionRender(this.setTextPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.contentPosScrollOver);
            var y = t.FitDef.FromJSON(s.background.media);
            this.bgImageLoader = new t.ResponsiveImageRequest("",t.Vec.FromZero(),y),
            this.bgImageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onBGCompleteBind),
            this.bgImageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onBGCompleteFirstTimeBind),
            this.bgImageTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.bgImageSymbol = new t.OldCanvasTextureSymbol(this.bgImageTexture),
            this.bgImageSymbol.addFitDef(y),
            this.bgImageSymbol.hide(),
            this.bgImageSymbol.setCompositeOperation("destination-over"),
            this.bgImageOuterCrop = t.Rectangle.FromZero(),
            this.bgImageSymbol.setOuterCrop(this.bgImageOuterCrop);
            var m = s.bottom
              , f = t.HTML.Create("div", {
                "class": "col col--left"
            })
              , g = t.HTML.Create("div", {
                "class": "col col--right"
            })
              , v = t.HTML.Create("div", {
                "class": "logo logo--shipowners"
            })
              , S = t.HTML.Create("div", {
                "class": "logo logo--fund"
            })
              , b = t.HTML.Create("a", {
                "class": "contact",
                href: m.contactUrl,
                html: m.contactLabel
            })
              , w = t.HTML.Create("div", {
                "class": "support",
                html: m.support.supportText
            });
            f.appendChild(v),
            f.appendChild(b),
            g.appendChild(S),
            g.appendChild(w),
            this.barNode = t.HTML.Create("div", {
                "class": "bar"
            }),
            this.barNode.appendChild(f),
            this.barNode.appendChild(g),
            this.contentNode.appendChild(this.barNode);
            var C = t.HTML.Create("div", {
                "class": "grey"
            });
            this.contentNode.appendChild(C),
            this.html.node.appendChild(this.contentNode),
            this.canvas.addChildAt(this.bgImageSymbol, 0),
            this.bgPosScroll = new t.FunctionRender(this.setBgPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.bgPosScroll),
            this.bgPosScrollIn = new t.FunctionRender(this.setBgPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.bgPosScrollIn),
            this.bgPosScrollOver = new t.FunctionRender(this.setBgPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.bgPosScrollOver);
            var T = s.logo.media;
            this.logoLoader = new t.ResponsiveImageRequest(T.url,t.Vec.FromString(T.sourceSize),new t.FitDef(null ,null ,.5,.5)),
            this.logoLoader.addEventListener(t.RequestEvent.COMPLETE, this.onLogoCompleteBind),
            this.logoTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.logoSymbol = new t.OldCanvasTextureSymbol(this.logoTexture),
            this.overlayCon.addChild(this.logoSymbol),
            this.coverNode = t.HTML.Create("div", {
                "class": "cover"
            }),
            this.html.node.appendChild(this.coverNode),
            this.descriptionNode = t.HTML.Create("div", {
                "class": "description",
                html: s.description
            }),
            this.descriptionNode.style[t.css.name.OPACITY] = "0",
            this.coverNode.appendChild(this.descriptionNode),
            this.overlayScrollIn = new t.FunctionRender(this.setOverlayPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayScrollIn),
            this.overlayScrollOut = new t.FunctionRender(this.setOverlayPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayScrollOut),
            this.descriptionAlphaScrollIn = new t.CSSPropertyRender(this.descriptionNode,t.css.name.OPACITY,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.descriptionAlphaScrollIn),
            this.descriptionAlphaScrollOut = new t.CSSPropertyRender(this.descriptionNode,t.css.name.OPACITY,1,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.descriptionAlphaScrollOut);
            for (var x = new t.WithinGroup, a = this.overlayLines.length; a--; )
                this.overlayLines[a].addToTween(x);
            for (var a = 0, d = this.overlayCutoutTitles.length; d > a; )
                x.add(new t.FunctionRender(this.overlayCutoutTitles[a].setAlpha.bind(this.overlayCutoutTitles[a]),0,1,.6,.4,t.Ease.SineInOut)),
                a++;
            this.overlayDynamic = new t.DynamicWithinTween(x,14,1),
            this.overlayDynamic.jumpTo(1),
            this.overlayDynamicController = new t.FunctionRender(this.overlayDynamic.moveTo.bind(this.overlayDynamic),1,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayDynamicController),
            this.waveTween = new t.Tween,
            this.waveTween.makeLoop();
            for (var a = this.overlayLines.length; a--; )
                this.overlayLines[a].addToWaveTween(this.waveTween);
            this.dragColorRectangle = t.Rectangle.FromZero(),
            this.dragColorRectangleSymbol = new t.CanvasShapeSymbol(this.dragColorRectangle),
            this.dragColorRectangleSymbol.hide(),
            this.dragSizeScrollIn = new t.FunctionRender(this.dragStrechBind,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.dragSizeScrollIn),
            this.dragSizeScrollOut = new t.FunctionRender(this.dragStrechBind,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.dragSizeScrollOut),
            this.dragPosScroll = new t.FunctionRender(this.dragPosBind,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.dragPosScroll),
            void 0 !== s.strechColor && (this.dragColorRectangleSymbol.setFillColor(s.strechColor),
            this.canvas.addChildAt(this.dragColorRectangleSymbol, 0)),
            n.addChildAt(this.overlayCon, 0),
            this.clearRect = t.Rectangle.FromZero(),
            this.clearSymbol = new t.CanvasShapeSymbol(this.clearRect),
            this.clearSymbol.setCompositeOperation("destination-out"),
            this.clearSymbol.setFillColor("#FF0000"),
            this.clearSymbol.hide(),
            n.addChildAt(this.clearSymbol, 0)
        }
        return __extends(i, e),
        i.prototype.getColor = function() {
            return this.color
        }
        ,
        i.prototype.playFadeAnimation = function() {}
        ,
        i.prototype.useForIntro = function() {
            this.overlayCon.setAlpha(0);
            for (var e = 0, i = this.overlayCutoutTitles.length; i > e; )
                this.overlayCutoutTitles[e++].setAlpha(0);
            this.descriptionNode.style[t.css.name.TRANSFORM] = "translateY(-20px)",
            this.coverNode.style[t.css.name.OPACITY] = "0"
        }
        ,
        i.prototype.playOpeningAnimation = function(e) {
            this.overlayCon.setAlpha(1);
            var i = new t.Tween;
            i.makeAutoDestroy();
            for (var s = 0, n = this.overlayCutoutTitles.length; n > s; )
                i.add(new t.FunctionRender(this.overlayCutoutTitles[s].setAlpha.bind(this.overlayCutoutTitles[s]),0,1,e + 100 + 70 * s,700,t.Ease.SineInOut)),
                s++;
            t.CSS.SetTransition(this.coverNode, t.StyleUtility.convertJSPropertyToCSS(t.css.name.OPACITY) + " 800ms ease-out " + (e + 400) + "ms"),
            this.coverNode.style[t.css.name.OPACITY] = "1",
            t.CSS.SetTransition(this.descriptionNode, t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM) + " 800ms ease-out " + (e + 100) + "ms"),
            this.descriptionNode.style[t.css.name.TRANSFORM] = "translateY(0px)",
            i.add(new t.FunctionRender(this.logoSymbol.setAlpha.bind(this.logoSymbol),0,1,e,600,t.Ease.SineInOut)),
            i.execute()
        }
        ,
        i.prototype.onLogoComplete = function(t) {
            this.logoTexture.set(this.logoLoader.data, this.logoLoader.getNeutralSize())
        }
        ,
        i.prototype.onBGComplete = function(t) {
            this.bgImageLoader.updateSize(),
            this.bgImageTexture.set(t.target.data, this.bgImageLoader.getRealSize())
        }
        ,
        i.prototype.onBGCompleteFirstTime = function(e) {
            this.bgImageLoader.removeEventListener(t.RequestEvent.COMPLETE, this.onBGCompleteFirstTimeBind),
            this.dispatchEvent(new t.SSEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.isInside = function() {
            this.html.addClass("visible"),
            this.bgImageLoader.execute(),
            this.clearSymbol.show(),
            this.bgImageSymbol.show(),
            this.overlayCon.show(),
            this.waveTween.forward(),
            this.dragColorRectangleSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.html.removeClass("visible"),
            this.clearSymbol.hide(),
            this.bgImageSymbol.hide(),
            this.overlayCon.hide(),
            this.waveTween.pause(),
            this.dragColorRectangleSymbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.bgImageLoader.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            var s = i.clone()
              , n = Math.round(.025 * i.x)
              , o = i.y
              , r = s.y;
            this.size.x = i.x,
            this.size.y = r;
            var a = r + o
              , h = 0
              , l = o
              , d = -r;
            this.overlayScrollIn.set(.33 * i.y, 0, 0, o),
            this.overlayScrollOut.set(0, d, o, r),
            this.descriptionAlphaScrollIn.set(0, 1, .5 * o, .5 * o),
            this.descriptionAlphaScrollOut.set(1, 0, o, .12 * o);
            for (var u = this.overlayLines.length, p = new t.Vector(i.x - 2 * n,Math.round((i.y - 2 * n) / u)); u--; )
                this.overlayLines[u].setSize(p, n);
            this.overlayDynamicController.set(1, 0, h + o, .25 * o);
            for (var c, u = 0, y = this.overlayCutoutTitles.length, m = Math.max(44, .15 * Math.min(.9 * i.x, 1.15 * i.y)), f = 1.05 * m; y > u; )
                c = this.overlayCutoutTitles[u],
                c.setFontSize(m),
                c.anchor.x = Math.round(.5 * i.x),
                c.anchor.y = .48 * i.y - .5 * f * (y - 1) + u * f,
                u++;
            var g = f * y;
            this.descriptionNode.style.top = .48 * i.y + .5 * g + .55 * f + "px";
            var v = new t.Vec(.33 * i.x,Math.max(.2 * i.y, 100));
            v.x = Math.min(v.x + Math.min(-(v.x - 100), 0) + Math.max(.25 * (v.x - 100), 0), 300),
            this.logoLoader.setSize(v),
            this.logoLoader.execute(),
            this.logoSymbol.transform.t.x = Math.round(.5 * (i.x - this.logoLoader.getNeutralSize().x)),
            this.logoSymbol.transform.t.y = Math.round(2 * n + .12 * (i.y - 2 * n) - .5 * this.logoLoader.getNeutralSize().y);
            var S = new t.Vec(i.x,.8 * i.y)
              , b = this.getImageForViewportRatio(S.getAspectRatio())
              , w = t.Vector.FromString(b.sourceSize)
              , C = w.getAspectRatio();
            this.bgImageLoader.set(b.url, w);
            var T = new t.Vec(i.x,i.x / C);
            this.clearRect.s.x = i.x,
            this.clearRect.s.y = T.y,
            this.bgImageLoader.setSize(T);
            var x = this.bgImageLoader.getNeutralSize();
            x.x < i.x && x.scaleIn(i.x / x.x),
            this.bgImageOuterCrop.s.x = x.x,
            this.bgImageOuterCrop.s.y = x.y,
            this.bgImageSymbol.setSize(x),
            this._insideLoadBounds === !0 && this.bgImageLoader.execute();
            var E = Math.round(this.contentNode.offsetHeight - 1e3);
            r = Math.round(r + .1 * i.y);
            var L = r;
            r += E;
            var a = E
              , h = L
              , d = i.y - E
              , l = L
              , P = i.y - x.y;
            this.bgPosScrollIn.set(.4 * i.y, .33 * i.y, L - i.y, i.y),
            this.contentPosScroll.set(l, d, h, a),
            this.bgPosScroll.set(.33 * i.y, P, L, a),
            this.contentPosScrollOver.set(d, d - i.y, h + a, i.y),
            this.bgPosScrollOver.set(P, P - i.y, L + a, i.y);
            var M = L + .2 * i.y
              , R = .5 * E;
            this.textTweenIn.set(this.textSymbol.getTween().bounds.start, this.textSymbol.getTween().bounds.end, M, R);
            var _ = this.barNode.offsetHeight;
            this.barWithin.set(_, 0, h + a - 2 * _, 2 * _),
            e.setHeight(Math.round(r)),
            this.dragColorRectangle.s.x = i.x,
            this.dragSizeScrollIn.set(1 * o, .9 * o, 0, .5 * o),
            this.dragSizeScrollOut.set(.9 * o, 0, .5 * o, .5 * o),
            this.dragPosScroll.set(0, 0, 0, o),
            this.segmentWithin.updateBounds(),
            this.overlayDynamic.updateProgress(this.overlayDynamic.getProgress())
        }
        ,
        i.prototype.getImageForViewportRatio = function(e) {
            for (var i, s = this.data.background.media.sources, n = s.length; n--; )
                if (i = t.Vec.FromString(s[n].sourceSize).getAspectRatio(),
                e >= i)
                    return s[n];
            return s[0]
        }
        ,
        i.prototype.computeSnapPoints = function(e) {
            var i = this.scopeCont.getGlobalOffset() + this.size.y;
            e.push(new t.SnapPoint(i,!0,!1,.5 * this.size.y)),
            e.push(new t.SnapPoint(i,!1,!0,.1 * this.size.y));
            var i = this.scopeCont.getGlobalOffset() + 1.2 * this.size.y;
            e.push(new t.SnapPoint(i,!0,!1,.15 * this.size.y))
        }
        ,
        i.prototype.setTextPos = function(e) {
            this._contentTransform.t.y = Math.round(e),
            this.contentNode.style[t.css.name.TRANSFORM] = this._contentTransform.toString()
        }
        ,
        i.prototype.setBgPos = function(t) {
            t = Math.round(t),
            this.clearSymbol.transform.t.y = t,
            this.bgImageSymbol.transform.t.y = t
        }
        ,
        i.prototype.setOverlayPos = function(e) {
            e = Math.round(e),
            this.overlayCon.transform.t.y = e,
            this.coverNode.style[t.css.name.TRANSFORM] = "translateY(" + e + "px)"
        }
        ,
        i.prototype.dragStrech = function(t) {
            this.dragColorRectangle.s.y = Math.ceil(t)
        }
        ,
        i.prototype.dragPos = function(t) {
            this.dragColorRectangleSymbol.transform.t.y = Math.floor(t)
        }
        ,
        i.prototype.barPos = function(e) {
            this.barNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(e) + "px)"
        }
        ,
        i.SplitDataRegex = /(\s\d+[\.\d]+\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g,
        i
    }(t.ASegment);
    t.EndIntroSegment = e,
    t.ASegment.Factory.addClass("endintro", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s, n, o) {
            e.call(this, s, "end", n, o),
            this.updateBreakLineBind = this.updateBreakLine.bind(this),
            this.lineDynamicUpdateBind = this.lineDynamicUpdate.bind(this),
            this.setPagePosBind = this.setPagePos.bind(this),
            this.pageCanvasSymbol = new t.CanvasSymbolContainer,
            this.pageCanvasSymbol.hide(),
            n.addChild(this.pageCanvasSymbol),
            this.breakLineMotion = new t.WithinGroup,
            this.breakLineARender = new t.VectorMorphRender(new t.Vector(1e3,0),new t.Vector(0,0),0,1,t.Ease.Linear),
            this.breakLineMotion.add(this.breakLineARender),
            this.breakLineBRender = new t.VectorMorphRender(new t.Vector(1060,0),new t.Vector(60,0),0,1,t.Ease.SineIn),
            this.breakLineMotion.add(this.breakLineBRender),
            this.breakLine = new t.Line(this.breakLineARender,this.breakLineBRender),
            this.breakLineSymbol = new t.CanvasShapeSymbol(this.breakLine),
            this.breakLineSymbol.setLineColor(s.color),
            this.breakLineSymbol.setLineWidth(2),
            this.pageCanvasSymbol.addChild(this.breakLineSymbol),
            this.breakLineAlphaRender = new t.FunctionRender(this.breakLineSymbol.setAlpha.bind(this.breakLineSymbol),0,1,0,1,t.Ease.Linear),
            this.breakLineMotion.add(this.breakLineAlphaRender),
            this.breakLineDynamic = new t.DynamicFunctionTween(this.lineDynamicUpdateBind,4,1),
            this.breakLineUpdateRender = new t.FunctionRender(this.updateBreakLineBind,0,1,0,0,t.Ease.CubicOut),
            this.segmentWithin.add(this.breakLineUpdateRender),
            this.pagePosScroll = new t.FunctionRender(this.setPagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.pagePosScroll),
            this.titleSymbol = new t.HTMLTitleTweenSymbol("h3");
            for (var r, a = s.title.split(i.SplitDataRegex), h = 0, l = a.length; l > h; )
                "<br/>" == a[h] ? this.titleSymbol.addChild(new t.HTMLSymbol("br")) : "" == a[h] || (" " == a[h] ? a[h + 1] = " " + a[h + 1] : (r = new t.HTMLWordTransition("div",a[h]),
                t.CSS.SetTransition(r.getHTML(), "opacity 400ms linear", null , !1),
                this.titleSymbol.add(r))),
                h++;
            if (this.html.addChild(this.titleSymbol),
            this.descriptionNode = t.HTML.Create("div", {
                "class": "description",
                html: s.description
            }),
            this.html.node.appendChild(this.descriptionNode),
            void 0 !== this.data.shareUrl && (this.shareButton = new t.ShareButton(this.data.shareUrl),
            this.html.node.appendChild(this.shareButton.getHTML())),
            this.scrollIndicator = new t.ScrollIndicator(s.scroll,void 0 !== s.fontColor ? s.fontColor : t.Config.DARK_BLUE),
            this.scrollIndicator.hide(),
            this.canvas.addChild(this.scrollIndicator),
            this.scrollIndicatorMoveIn = new t.PropertyRender(this.scrollIndicator.transform.t,"y",0,0,0,0,t.Ease.SineOut),
            this.segmentWithin.add(this.scrollIndicatorMoveIn),
            this.scrollIndicatorFadeOut = new t.FunctionRender(this.scrollIndicator.setAlpha.bind(this.scrollIndicator),1,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.scrollIndicatorFadeOut),
            this.titleTweenIn = new t.TweenRender(this.titleSymbol.getTween(),0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.titleTweenIn),
            "cta" in s) {
                var d = t.HTML.Create("div", {
                    "class": "cta"
                })
                  , u = t.HTML.Create("a", {
                    "class": "link",
                    html: s.cta,
                    href: s.url,
                    target: "_blank"
                });
                d.appendChild(u),
                this.html.node.appendChild(d)
            }
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.pageCanvasSymbol.show(),
            this.scrollIndicator.show(),
            this.scrollIndicator.play()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.pageCanvasSymbol.hide(),
            this.scrollIndicator.hide(),
            this.scrollIndicator.pause()
        }
        ,
        i.prototype.updateBreakLine = function(t) {
            this.breakLineDynamic.moveTo(t)
        }
        ,
        i.prototype.lineDynamicUpdate = function(t) {
            this.breakLineMotion.setProgress(t)
        }
        ,
        i.prototype.scopeUpdateHandler = function(t, e) {
            this.viewportSize = e;
            var i = .025 * e.x
              , s = .025 * e.y;
            this.segmentHeight = 0,
            this.breakLineARender.from.x = .33 * e.x,
            this.breakLineBRender.from.x = .33 * e.x;
            var n = Math.round(i + 4 * s);
            this.breakLineSymbol.transform.t.x = .1 * e.x,
            this.breakLineSymbol.transform.t.y = n,
            this.breakLineUpdateRender.set(0, 1, n, 200),
            this.html.node.style.paddingTop = n + "px",
            this.segmentHeight += this.html.node.offsetHeight,
            this.segmentHeight += i + 4 * s;
            var o = Math.min(this.segmentHeight, .5 * e.y);
            this.titleTweenIn.set(this.titleSymbol.getTween().bounds.start, this.titleSymbol.getTween().bounds.end, this.breakLineSymbol.transform.t.y + i, .5 * o),
            this.segmentHeight += .02 * e.x;
            var r = e.y + this.segmentHeight
              , a = 0
              , h = -this.segmentHeight
              , l = e.y;
            this.pagePosScroll.set(l, h, a, r),
            this.segmentHeight += i,
            this.scrollIndicator.setHeight(Math.floor(.06 * e.y)),
            this.scrollIndicator.transform.t.x = Math.round(.5 * e.x),
            this.scrollIndicatorMoveIn.set(1.33 * e.y, e.y, this.segmentHeight - .25 * e.y, .25 * e.y),
            this.scrollIndicatorFadeOut.set(1, 0, this.segmentHeight, .25 * e.y),
            t.setHeight(Math.round(this.segmentHeight)),
            this.segmentWithin.updateBounds()
        }
        ,
        i.prototype.computeSnapPoints = function(e) {
            var i = this.scopeCont.getGlobalOffset() + this.segmentHeight;
            e.push(new t.SnapPoint(i,!1,!0,.5 * this.viewportSize.y))
        }
        ,
        i.prototype.setPagePos = function(e) {
            this.pageCanvasSymbol.transform.t.y = Math.round(e),
            this.html.node.style[t.css.name.TRANSFORM] = this.pageCanvasSymbol.transform.toString()
        }
        ,
        i.SplitDataRegex = /(\s\d+[\.\d]+\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g,
        i
    }(t.ASegment);
    t.EndPageSegment = e,
    t.ASegment.Factory.addClass("end", e)
}(ss || (ss = {}));
var ss;
!function(ss) {
    var HeadlineSegment = function(_super) {
        function HeadlineSegment(data, canvas, viewportHandler) {
            _super.call(this, data, "headline", canvas, viewportHandler),
            this._textMatrix = ss.TransformMatrix.FromDefault(),
            this._textPosOffset = 0,
            this.setTextPosOffsetBind = this.setTextPosOffset.bind(this),
            this.setTextPosBind = this.setTextPos.bind(this),
            this.aspectRatio = eval(data.aspectRatio),
            this.highlightColor = data.highlightColor;
            var titleParts = data.title.split(HeadlineSegment.SplitDataRegex);
            this.titleSymbol = new ss.HTMLTitleTweenSymbol("h2");
            for (var i = 0, len = titleParts.length, iSymbol; len > i; )
                "<br/>" == titleParts[i] ? this.titleSymbol.addChild(new ss.HTMLSymbol("br")) : "" == titleParts[i] || (" " == titleParts[i] ? titleParts[i + 1] = " " + titleParts[i + 1] : (isNaN(parseInt(titleParts[i].charAt(0))) === !1 || isNaN(parseInt(titleParts[i].charAt(1))) === !1 ? (iSymbol = new ss.HTMLNumberTransition("div",titleParts[i]),
                iSymbol.getHTML().style.color = this.highlightColor) : iSymbol = new ss.HTMLWordTransition("div",titleParts[i]),
                this.titleSymbol.add(iSymbol))),
                i++;
            if (this.html.addChild(this.titleSymbol),
            void 0 !== this.data.shareUrl) {
                this.shareButton = new ss.ShareButton(this.data.shareUrl);
                var shareNode = this.shareButton.getHTML();
                this.html.getHTML().appendChild(shareNode)
            }
            this.titleTweenIn = new ss.TweenRender(this.titleSymbol.getTween(),0,0,0,0,ss.Ease.Linear),
            this.segmentWithin.add(this.titleTweenIn),
            this.textPosScroll = new ss.FunctionRender(this.setTextPosBind,0,0,0,0,ss.Ease.Linear),
            this.segmentWithin.add(this.textPosScroll)
        }
        return __extends(HeadlineSegment, _super),
        HeadlineSegment.prototype.isInside = function() {}
        ,
        HeadlineSegment.prototype.isOutside = function() {}
        ,
        HeadlineSegment.prototype.isInsideLoadingBounds = function() {
            this._insideLoadBounds = !0
        }
        ,
        HeadlineSegment.prototype.isOutsideLoadingBounds = function() {
            this._insideLoadBounds = !1
        }
        ,
        HeadlineSegment.prototype.scopeUpdateHandler = function(t, e) {
            this.segmentHeight = e.x / this.aspectRatio;
            var i = this.titleSymbol.getHeight();
            void 0 !== this.shareButton && (i += 2 * this.shareButton.getHTML().offsetHeight),
            this.segmentHeight = Math.max(this.segmentHeight, i);
            var s = .5 * this.segmentHeight - .5 * i
              , n = e.y + this.segmentHeight
              , o = s
              , r = -this.segmentHeight
              , a = e.y
              , h = Math.min(this.segmentHeight, .5 * e.y);
            this.titleTweenIn.set(this.titleSymbol.getTween().bounds.start, this.titleSymbol.getTween().bounds.end, o + .33 * h, .5 * h),
            this.textPosScroll.set(a, r, o, n),
            t.setHeight(Math.round(this.segmentHeight)),
            this.segmentWithin.updateBounds()
        }
        ,
        HeadlineSegment.prototype.setTextPosOffset = function(t) {
            this._textPosOffset = t
        }
        ,
        HeadlineSegment.prototype.setTextPos = function(t) {
            this._textMatrix.t.y = Math.round(t + this._textPosOffset),
            this.html.node.style[ss.css.name.TRANSFORM] = this._textMatrix.toString()
        }
        ,
        HeadlineSegment.SplitDataRegex = /(\s?\d+[\.\d]+m<sup>3<\/sup>\s?|\s?\d+[\.\d]+\%?\s?|<br\/?>\s?|<sup?b?>[^<]+<\/sup?b?>\s?|\w+\s?|-)/g,
        HeadlineSegment
    }(ss.ASegment);
    ss.HeadlineSegment = HeadlineSegment,
    ss.ASegment.Factory.addClass("headline", HeadlineSegment)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "intro", s, n),
            this.parallaxPos = 0,
            this.size = new t.Vector(0,0),
            this.imageOuterCropRectangle = t.Rectangle.FromZero(),
            this.cropRect = t.Rectangle.FromZero(),
            this.parallaxRect = t.Rectangle.FromZero(),
            this.overlayCutoutTextSymbols = [],
            this.overlayLines = [],
            this.onImageErrorBind = this.onImageError.bind(this),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.setImagePosInBind = this.setImagePosIn.bind(this),
            this.setImagePosMiddleBind = this.setImagePosMiddle.bind(this),
            this.setImagePosOutBind = this.setImagePosOut.bind(this),
            this.setOverlayPosBind = this.setOverlayPos.bind(this),
            this.dragStrechBind = this.dragStrech.bind(this),
            this.dragPosBind = this.dragPos.bind(this),
            this.currentCropCalc = 0,
            this.color = i.color;
            var o = i.media;
            this.imageSize = t.Vector.FromString(o.sourceSize),
            this.fitDef = t.FitDef.FromJSON(o),
            this.imageLoader = new t.ResponsiveImageRequest(o.url,this.imageSize,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageLoader.addEventListener(t.RequestEvent.ERROR, this.onImageErrorBind),
            this.imageTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.imageTexture.color = o.color,
            this.clearRect = t.Rectangle.FromZero(),
            this.clearSymbol = new t.CanvasShapeSymbol(this.clearRect),
            this.clearSymbol.setCompositeOperation("destination-out"),
            this.clearSymbol.setFillColor("#000000"),
            this.clearSymbol.hide(),
            s.addChild(this.clearSymbol),
            this.overlayCon = new t.CanvasSymbolContainer,
            this.overlayCon.hide(),
            s.addChild(this.overlayCon);
            for (var r, a = 5; a--; )
                r = new t.OverlayLine(a,i.color),
                this.overlayCon.addChild(r),
                this.overlayLines.push(r);
            this.breakLine = new t.Rectangle(new t.Vec(-30,-2),new t.Vec(60,2)),
            this.breakLineSymbol = new t.CanvasShapeSymbol(this.breakLine),
            this.breakLineSymbol.setFillColor(i.fontColor || t.Config.DARK_BLUE),
            this.overlayCon.addChild(this.breakLineSymbol),
            this.overlayTextCon = new t.CanvasSymbolContainer,
            this.overlayCon.addChild(this.overlayTextCon);
            for (var h, l = i.title.split("\n"), a = 0, d = l.length; d > a; )
                h = new t.CanvasTextSymbol(l[a],"MillerDisplay",0),
                h.setCompositeOperation("destination-out"),
                h.setAlign("center"),
                h.setBaseline("middle"),
                this.overlayTextCon.addChild(h),
                this.overlayCutoutTextSymbols.push(h),
                a++;
            this.descriptionNode = t.HTML.Create("div", {
                "class": "description",
                html: i.description
            }),
            this.descriptionNode.style[t.css.name.OPACITY] = "0",
            this.html.node.appendChild(this.descriptionNode),
            this.dragColorRectangle = t.Rectangle.FromZero(),
            this.dragColorRectangleSymbol = new t.CanvasShapeSymbol(this.dragColorRectangle),
            this.dragColorRectangleSymbol.hide(),
            this.dragSizeScrollIn = new t.FunctionRender(this.dragStrechBind,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.dragSizeScrollIn),
            this.dragSizeScrollOut = new t.FunctionRender(this.dragStrechBind,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.dragSizeScrollOut),
            this.dragPosScroll = new t.FunctionRender(this.dragPosBind,0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.dragPosScroll),
            this.posScrollIn = new t.FunctionRender(this.setImagePosInBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.posScrollIn),
            this.posScrollMiddle = new t.FunctionRender(this.setImagePosMiddleBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.posScrollMiddle),
            this.posScrollOut = new t.FunctionRender(this.setImagePosOutBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.posScrollOut),
            this.overlayPosScroll = new t.FunctionRender(this.setOverlayPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayPosScroll);
            for (var u = new t.WithinGroup, a = this.overlayLines.length; a--; )
                this.overlayLines[a].addToTween(u);
            u.add(new t.FunctionRender(this.breakLineSymbol.setAlpha.bind(this.breakLineSymbol),0,1,.6,.4,t.Ease.SineInOut)),
            u.add(new t.FunctionRender(this.overlayTextCon.setAlpha.bind(this.overlayTextCon),0,1,.6,.4,t.Ease.SineInOut)),
            u.add(new t.CSSPropertyRender(this.descriptionNode,"opacity",0,1,.7,.3,t.Ease.SineInOut)),
            this.overlayDynamic = new t.DynamicWithinTween(u,15,1),
            this.overlayDynamicController = new t.FunctionRender(this.overlayDynamic.moveTo.bind(this.overlayDynamic),0,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayDynamicController),
            void 0 !== i.strechColor && (this.dragColorRectangleSymbol.setFillColor(i.strechColor),
            this.canvas.addChild(this.dragColorRectangleSymbol)),
            this.waveTween = new t.Tween,
            this.waveTween.makeLoop();
            for (var a = this.overlayLines.length; a--; )
                this.overlayLines[a].addToWaveTween(this.waveTween);
            this.imageSymbolOver = new t.OldCanvasTextureSymbol(this.imageTexture),
            this.imageSymbolOver.setOuterCrop(this.imageOuterCropRectangle),
            this.imageSymbolOver.hide(),
            this.imageSymbolOver.setCompositeOperation("destination-over"),
            s.addChild(this.imageSymbolOver)
        }
        return __extends(i, e),
        i.prototype.getStart = function() {
            return .25 * this.viewportSize.y
        }
        ,
        i.prototype.getColor = function() {
            return this.color
        }
        ,
        i.prototype.useForIntro = function() {
            for (var e = 0, i = this.overlayCutoutTextSymbols.length; i > e; )
                this.overlayCutoutTextSymbols[e++].setAlpha(0);
            this.breakLineSymbol.hide(),
            this.overlayCon.setAlpha(0),
            this.html.node.style[t.css.name.OPACITY] = "0",
            this.descriptionNode.style[t.css.name.TRANSFORM] = "translateY(-20px)"
        }
        ,
        i.prototype.playFadeAnimation = function() {}
        ,
        i.prototype.playOpeningAnimation = function(e) {
            var i = new t.Tween;
            i.makeAutoDestroy();
            for (var s = 0, n = this.overlayCutoutTextSymbols.length; n > s; )
                i.add(new t.FunctionRender(this.overlayCutoutTextSymbols[s].setAlpha.bind(this.overlayCutoutTextSymbols[s]),0,1,e + 200 + 60 * s,600,t.Ease.SineInOut)),
                s++;
            this.overlayCon.setAlpha(1),
            i.add(new t.FunctionRender(this.breakLineSymbol.setAlpha.bind(this.breakLineSymbol),0,1,e,600,t.Ease.SineInOut)),
            t.CSS.SetTransition(this.html.node, t.StyleUtility.convertJSPropertyToCSS(t.css.name.OPACITY) + " 800ms ease-out " + (e + 500) + "ms"),
            this.html.node.style[t.css.name.OPACITY] = "1",
            t.CSS.SetTransition(this.descriptionNode, t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM) + " 800ms ease-out " + (e + 200) + "ms"),
            this.descriptionNode.style[t.css.name.TRANSFORM] = "translateY(0px)",
            i.execute(),
            setTimeout(this.beforeIntroAnimation.bind(this), e)
        }
        ,
        i.prototype.beforeIntroAnimation = function() {
            this.breakLineSymbol.setAlpha(0),
            this.breakLineSymbol.show()
        }
        ,
        i.prototype.onImageError = function(t) {}
        ,
        i.prototype.onImageComplete = function(e) {
            this.imageLoader.updateSize(),
            this.imageTexture.set(e.target.data, this.imageLoader.getRealSize()),
            this.cropRect = this.fitDef.toCropRectangle(this.imageSymbolOver.getSize().multiplyValues(1, 1.25), this.imageTexture.size),
            this.parallaxRect.copy(this.cropRect),
            this.updateCrop(),
            this.dispatchEvent(new t.SSEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.isInside = function() {
            this.clearSymbol.show(),
            this.imageSymbolOver.show(),
            this.overlayCon.show(),
            this.dragColorRectangleSymbol.show(),
            this.waveTween.forward()
        }
        ,
        i.prototype.isOutside = function() {
            this.clearSymbol.hide(),
            this.imageSymbolOver.hide(),
            this.overlayCon.hide(),
            this.dragColorRectangleSymbol.hide(),
            this.waveTween.pause()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.imageLoader.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            this.viewportSize = i;
            var s = i.clone();
            s.y *= 1.25,
            this.imageOuterCropRectangle.s.x = i.x,
            this.clearRect.s = i.clone(),
            this.imageSymbolOver.setSize(i),
            this.imageLoader.setSize(s),
            this._insideLoadBounds === !0 && this.imageLoader.execute();
            var n = i.y
              , o = i.y;
            this.size.x = i.x,
            this.size.y = o;
            var r = n;
            this.posScrollIn.set(r, 0, 0, n),
            this.posScrollMiddle.set(0, .25 * n, n, .25 * n),
            this.posScrollOut.set(.25 * n, .75 * -n, 1.25 * n, n),
            this.overlayPosScroll.set(r, 1.25 * -n, .25 * i.y, 1.25 * o + n);
            for (var a, h = 0, l = this.overlayCutoutTextSymbols.length, d = Math.max(44, .15 * Math.min(.9 * i.x, 1.15 * i.y)), u = 1.05 * d; l > h; )
                a = this.overlayCutoutTextSymbols[h],
                a.setFontSize(d),
                a.anchor.x = .5 * i.x,
                a.anchor.y = .48 * i.y - .5 * u * (l - 1) + h * u,
                h++;
            var p = u * l;
            this.breakLineSymbol.transform.t.x = Math.round(.5 * i.x),
            this.breakLineSymbol.transform.t.y = Math.round(.48 * i.y + .5 * -p - .25 * u),
            this.descriptionNode.style.top = .48 * i.y + .5 * p + .25 * u + "px";
            for (var c = Math.round(.025 * i.x), h = this.overlayLines.length, y = new t.Vector(i.x - 2 * c,Math.round((i.y - 2 * c) / h)); h--; )
                this.overlayLines[h].setSize(y, c);
            this.overlayDynamicController.set(0, 1, n, .25 * n),
            this.dragColorRectangle.s.x = i.x,
            this.dragSizeScrollIn.set(0, .4 * n, 0, .5 * n),
            this.dragSizeScrollOut.set(.4 * n, 0, .5 * n, .5 * n),
            this.dragPosScroll.set(r, 0, 0, n),
            e.setHeight(Math.round(1.25 * o)),
            this.segmentWithin.updateBounds(),
            this.overlayDynamic.updateProgress(this.overlayDynamic.getProgress())
        }
        ,
        i.prototype.computeSnapPoints = function(e) {
            var i = this.scopeCont.getGlobalOffset() + 1.25 * this.size.y;
            e.push(new t.SnapPoint(i,!0,!1,.75 * this.size.y)),
            e.push(new t.SnapPoint(i,!1,!0,.125 * this.size.y))
        }
        ,
        i.prototype.setImagePosIn = function(t) {
            this.imagePos = Math.floor(t),
            this.setCrop(.9 * (this.imagePos + this.dragColorRectangle.s.y)),
            this.clearSymbol.transform.t.y = this.imagePos + this.dragColorRectangle.s.y,
            this.imageSymbolOver.transform.t.y = this.imagePos + this.dragColorRectangle.s.y;
            this.cropRect.s.y / this.size.y;
            this.clearRect.s.y = this.viewportSize.y - this.dragColorRectangle.s.y,
            this.imageOuterCropRectangle.a.y = 0,
            this.imageOuterCropRectangle.s.y = Math.floor(this.size.y - this.imagePos - this.dragColorRectangle.s.y)
        }
        ,
        i.prototype.setImagePosMiddle = function(t) {
            this.imagePos = Math.floor(t),
            this.setCrop(.2 * t),
            this.clearSymbol.transform.t.y = 0,
            this.imageSymbolOver.transform.t.y = 0,
            this.imageOuterCropRectangle.a.y = 0,
            this.imageOuterCropRectangle.s.y = Math.floor(this.size.y)
        }
        ,
        i.prototype.setImagePosOut = function(t) {
            this.imagePos = Math.floor(t - .25 * this.size.y),
            this.setCrop(.5 * this.imagePos + .25 * this.size.y * .2),
            this.clearSymbol.transform.t.y = this.imagePos,
            this.imageSymbolOver.transform.t.y = this.imagePos,
            this.imageOuterCropRectangle.a.y = -this.imagePos,
            this.imageOuterCropRectangle.s.y = Math.floor(this.size.y + this.imagePos)
        }
        ,
        i.prototype.setOverlayPos = function(e) {
            this.overlayCon.transform.t.y = Math.round(e),
            this.html.node.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(e) + "px)"
        }
        ,
        i.prototype.dragStrech = function(t) {
            this.dragColorRectangle.s.y = Math.ceil(t)
        }
        ,
        i.prototype.dragPos = function(t) {
            this.dragColorRectangleSymbol.transform.t.y = Math.round(t)
        }
        ,
        i.prototype.updateCrop = function() {
            this.setCrop(this.currentCropCalc)
        }
        ,
        i.prototype.setCrop = function(t) {
            this.currentCropCalc = t;
            var e = this.cropRect.s.x / this.size.x;
            this.parallaxRect.a.y = t * e,
            this.imageSymbolOver.setCrop(this.parallaxRect)
        }
        ,
        i
    }(t.ASegment);
    t.IntroSegment = e,
    t.ASegment.Factory.addClass("intro", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this);
            var s = i.logo;
            this.logoLoader = new t.ResponsiveImageRequest(s.url,t.Vec.FromString(s.sourceSize),new t.FitDef(null ,null ,.5,.5)),
            this.logoLoader.addEventListener(t.RequestEvent.COMPLETE, this.onLogoComplete.bind(this)),
            this.logoTexture = new t.Texture,
            this.logoSymbol = new t.CanvasTextureSymbol(this.logoTexture),
            this.addChild(this.logoSymbol)
        }
        return __extends(i, e),
        i.prototype.onLogoComplete = function(t) {
            this.logoTexture.set(this.logoLoader.data, this.logoLoader.getRealSize());
            var e = this.logoLoader.getNeutralSize();
            this.logoSymbol.transform.o.set(.5 * e.x, .5 * e.y)
        }
        ,
        i.prototype.setSize = function(t) {
            this.logoLoader.setSize(t)
        }
        ,
        i.prototype.execute = function() {
            this.logoLoader.execute()
        }
        ,
        i.prototype.play = function(e) {
            var i = new t.Tween;
            i.add(new t.FunctionRender(this.setAlpha.bind(this),0,1,e,600,t.Ease.SineInOut)),
            i.play()
        }
        ,
        i
    }(t.CanvasSymbolContainer);
    t.Logo = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "menu", s, n),
            this.setScrollBind = this.setScroll.bind(this),
            this.setMenuOffsetBind = this.setMenuOffset.bind(this),
            this.bgRect = t.Rectangle.FromZero(),
            this.bgSymbol = new t.CanvasShapeSymbol(this.bgRect),
            this.bgSymbol.setFillColor("#021120"),
            this.bgSymbol.hide(),
            s.addChild(this.bgSymbol),
            this.segmentScroll = new t.FunctionRender(this.setScrollBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.segmentScroll),
            this.offsetMenuTween = new t.FunctionTween(this.setMenuOffsetBind,-1,1,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.offsetMenuTween),
            this.middleWithin = new t.AWithin,
            this.middleWithin.addEventListener(t.RenderWithinEvent.BEFORE, this.isOutsideMiddle.bind(this)),
            this.middleWithin.addEventListener(t.RenderWithinEvent.AFTER, this.isOutsideMiddle.bind(this)),
            this.middleWithin.addEventListener(t.RenderWithinEvent.INSIDE, this.isInsideMiddle.bind(this)),
            this.segmentWithin.add(this.middleWithin),
            this.scrollIndicator = new t.ScrollIndicator(i.scroll,"#ffffff"),
            this.scrollIndicator.hide(),
            this.canvas.addChild(this.scrollIndicator),
            this.scrollIndicatorMoveIn = new t.PropertyRender(this.scrollIndicator.transform.t,"y",0,0,0,0,t.Ease.SineOut),
            this.segmentWithin.add(this.scrollIndicatorMoveIn),
            this.scrollIndicatorFadeOut = new t.FunctionRender(this.scrollIndicator.setAlpha.bind(this.scrollIndicator),1,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.scrollIndicatorFadeOut)
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            this.bgSymbol.show(),
            this.scrollIndicator.show(),
            this.scrollIndicator.play()
        }
        ,
        i.prototype.isOutside = function() {
            this.bgSymbol.hide(),
            this.scrollIndicator.hide(),
            this.scrollIndicator.pause()
        }
        ,
        i.prototype.isInsideMiddle = function() {
            t.Main.Menu.lock()
        }
        ,
        i.prototype.isOutsideMiddle = function() {
            t.Main.Menu.unlock()
        }
        ,
        i.prototype.scopeUpdateHandler = function(t, e) {
            var i = e.y
              , s = i
              , n = i + s
              , o = 0
              , r = -s
              , a = i;
            this.segmentScroll.set(a, r, o, n),
            this.offsetMenuTween.set(-1, 1, o, n),
            this.middleWithin.bounds.set(.4 * n, .6 * n),
            this.bgRect.s = e,
            this.scrollIndicator.setHeight(.06 * e.y),
            this.scrollIndicator.transform.t.x = .5 * e.x,
            this.scrollIndicatorMoveIn.set(1.33 * e.y, e.y, s - .25 * e.y, .25 * e.y),
            this.scrollIndicatorFadeOut.set(1, 0, s, .25 * e.y),
            t.setHeight(Math.round(s)),
            this.segmentWithin.bounds.end = this.segmentWithin.bounds.start + s
        }
        ,
        i.prototype.computeSnapPoints = function(e) {
            var i = this.scopeCont.getGlobalOffset() + this.bgRect.s.y;
            e.push(new t.SnapPoint(i,!0,!0,.5 * this.bgRect.s.y))
        }
        ,
        i.prototype.setScroll = function(t) {
            t > 0 && (t = 1.2 * t),
            this.bgSymbol.transform.t.y = Math.round(t)
        }
        ,
        i.prototype.setMenuOffset = function(e) {
            t.Main.Menu.setOffset(e)
        }
        ,
        i
    }(t.ASegment);
    t.MenuSegment = e,
    t.ASegment.Factory.addClass("menu", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "start", s, n),
            this.size = new t.Vector(0,0),
            this.imageOuterCropRectangle = t.Rectangle.FromZero(),
            this.cropRect = t.Rectangle.FromZero(),
            this.parallaxRect = t.Rectangle.FromZero(),
            this.overlayCutoutTexts = [],
            this.overlayLines = [],
            this.onImageErrorBind = this.onImageError.bind(this),
            this.onImageCompleteFirstTimeBind = this.onImageCompleteFirstTime.bind(this),
            this.onVideoErrorBind = this.onVideoError.bind(this),
            this.onVideoCompleteBind = this.onVideoComplete.bind(this),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.setImagePosBind = this.setImagePos.bind(this),
            this.setOverlayPosBind = this.setOverlayPos.bind(this),
            this.color = i.color;
            var o = i.media;
            this.imageSizeRuntime = t.Vector.FromString(o.sourceSize),
            this.fitDef = t.FitDef.FromJSON(o),
            this.imageLoader = new t.ResponsiveImageRequest(o.url,this.imageSizeRuntime,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteFirstTimeBind),
            this.imageLoader.addEventListener(t.RequestEvent.ERROR, this.onImageErrorBind),
            this.imageTexture = new t.OldTexture(new t.Vec(null ,null )),
            this.imageTexture.color = o.color,
            this.imageSymbol = new t.OldCanvasTextureSymbol(this.imageTexture),
            this.imageSymbol.addFitDef(this.fitDef),
            this.imageSymbol.setCompositeOperation("destination-over"),
            this.imageSymbol.hide(),
            this.imageSymbol.setOuterCrop(this.imageOuterCropRectangle),
            this.clearRect = t.Rectangle.FromZero(),
            this.clearSymbol = new t.CanvasShapeSymbol(this.clearRect),
            this.clearSymbol.setCompositeOperation("destination-out"),
            this.clearSymbol.setFillColor("#000000"),
            this.clearSymbol.hide(),
            s.addChild(this.clearSymbol),
            this.overlayCon = new t.CanvasSymbolContainer,
            this.overlayCon.hide(),
            s.addChild(this.overlayCon);
            for (var r, a = 5; a--; )
                r = new t.OverlayLine(a,this.color),
                this.overlayCon.addChild(r),
                this.overlayLines.push(r);
            for (var h, l = i.title.split("\n"), a = 0, d = l.length; d > a; )
                h = new t.CanvasTextSymbol(l[a],"MillerDisplay",0),
                h.setCompositeOperation("destination-out"),
                h.setAlign("center"),
                h.setBaseline("middle"),
                this.overlayCon.addChild(h),
                this.overlayCutoutTexts.push(h),
                a++;
            s.addChild(this.imageSymbol),
            this.logo = new t.Logo(i),
            this.overlayCon.addChild(this.logo),
            this.descriptionNode = t.HTML.Create("div", {
                "class": "description",
                html: i.description
            }),
            this.descriptionNode.style[t.css.name.OPACITY] = "0",
            this.html.node.appendChild(this.descriptionNode),
            this.posScroll = new t.FunctionRender(this.setImagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.posScroll),
            this.overlayPosOutScroll = new t.FunctionRender(this.setOverlayPosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayPosOutScroll),
            this.scrollIndicator = new t.ScrollIndicator(i.scroll,void 0 !== i.fontColor ? i.fontColor : t.Config.DARK_BLUE),
            this.overlayCon.addChild(this.scrollIndicator);
            var u = new t.WithinGroup;
            u.add(new t.FunctionRender(this.scrollIndicator.setAlpha.bind(this.scrollIndicator),0,1,.6,.4,t.Ease.SineInOut));
            for (var a = this.overlayLines.length; a--; )
                this.overlayLines[a].addToTween(u);
            for (var a = 0, d = this.overlayCutoutTexts.length; d > a; )
                u.add(new t.FunctionRender(this.overlayCutoutTexts[a].setAlpha.bind(this.overlayCutoutTexts[a]),0,1,.6,.4,t.Ease.SineInOut)),
                a++;
            u.add(new t.CSSPropertyRender(this.descriptionNode,"opacity",0,1,.7,.3,t.Ease.SineInOut)),
            this.overlayDynamic = new t.DynamicWithinTween(u,14,1),
            this.overlayDynamic.jumpTo(1),
            this.overlayDynamicController = new t.FunctionRender(this.overlayDynamic.moveTo.bind(this.overlayDynamic),1,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.overlayDynamicController),
            this.waveTween = new t.Tween,
            this.waveTween.makeLoop();
            for (var a = this.overlayLines.length; a--; )
                this.overlayLines[a].addToWaveTween(this.waveTween)
        }
        return __extends(i, e),
        i.prototype.getColor = function() {
            return this.color
        }
        ,
        i.prototype.playFadeAnimation = function() {}
        ,
        i.prototype.useForIntro = function() {
            for (var e = 0, i = this.overlayCutoutTexts.length; i > e; )
                this.overlayCutoutTexts[e++].setAlpha(0);
            this.overlayCon.setAlpha(0),
            this.logo.setAlpha(0),
            this.html.node.style[t.css.name.OPACITY] = "0",
            this.descriptionNode.style[t.css.name.TRANSFORM] = "translateY(-20px)"
        }
        ,
        i.prototype.playOpeningAnimation = function(e) {
            for (var i = 0, s = this.overlayCutoutTexts.length; s > i; )
                this.overlayCutoutTexts[i++].setAlpha(0);
            var n = new t.Tween;
            n.makeAutoDestroy();
            for (var i = 0, s = this.overlayCutoutTexts.length; s > i; )
                n.add(new t.FunctionRender(this.overlayCutoutTexts[i].setAlpha.bind(this.overlayCutoutTexts[i]),0,1,e + 100 + 70 * i,700,t.Ease.SineInOut)),
                i++;
            t.CSS.SetTransition(this.html.node, t.StyleUtility.convertJSPropertyToCSS(t.css.name.OPACITY) + " 800ms ease-out " + (e + 300) + "ms"),
            this.html.node.style[t.css.name.OPACITY] = "1",
            t.CSS.SetTransition(this.descriptionNode, t.StyleUtility.convertJSPropertyToCSS(t.css.name.TRANSFORM) + " 800ms ease-out " + e + "ms"),
            this.descriptionNode.style[t.css.name.TRANSFORM] = "translateY(0px)",
            this.logo.play(e),
            n.execute(),
            this.overlayCon.setAlpha(1)
        }
        ,
        i.prototype.onImageError = function(t) {}
        ,
        i.prototype.onImageCompleteFirstTime = function(e) {
            if (this.imageLoader.removeEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteFirstTimeBind),
            t.DeviceInfo.IsMobileDevice === !1 && t.DeviceInfo.IsSafari === !1) {
                this.videoSourceSize = t.Vector.FromString(this.data.video.sourceSize);
                var i = this.data.video.urls
                  , s = t.CodecDetection.GetSupportedVideo(i);
                this.videoPlayback = new t.VideoPlayback(s),
                this.videoPlayback.addEventListener(t.TaskEvent.COMPLETE, this.onVideoCompleteBind),
                this.videoPlayback.addEventListener(t.TaskEvent.ERROR, this.onVideoErrorBind),
                this.videoPlayback.setLoop(!0),
                this.videoPlayback.execute()
            } else
                this.dispatchEvent(new t.SSEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.onVideoError = function(e) {
            this.videoPlayback.removeEventListener(t.TaskEvent.ERROR, this.onVideoErrorBind),
            this.videoPlayback.removeEventListener(t.TaskEvent.COMPLETE, this.onVideoCompleteBind),
            this.dispatchEvent(new t.SSEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.onVideoComplete = function(e) {
            this.videoPlayback.removeEventListener(t.TaskEvent.ERROR, this.onVideoErrorBind),
            this.videoPlayback.removeEventListener(t.TaskEvent.COMPLETE, this.onVideoCompleteBind),
            this.imageTexture.set(this.videoPlayback.videoElement, this.videoSourceSize),
            this.cropRect = this.fitDef.toCropRectangle(this.imageSymbol.getSize(), this.imageTexture.size),
            this.parallaxRect.copy(this.cropRect),
            this.updateCrop(),
            this.hasVideo = !0,
            this._insideLoadBounds === !0 && this.videoPlayback.play(),
            this.dispatchEvent(new t.SSEvent(t.TaskEvent.COMPLETE,this))
        }
        ,
        i.prototype.onImageComplete = function(t) {
            this.imageLoader.updateSize(),
            this.imageTexture.set(t.target.data, this.imageLoader.getRealSize()),
            this.cropRect = this.fitDef.toCropRectangle(this.imageSymbol.getSize(), this.imageTexture.size),
            this.parallaxRect.copy(this.cropRect),
            this.updateCrop()
        }
        ,
        i.prototype.isInside = function() {
            this.hasVideo === !0 ? this.videoPlayback.play() : this.imageLoader.execute(),
            this.clearSymbol.show(),
            this.imageSymbol.show(),
            this.overlayCon.show(),
            this.waveTween.forward(),
            this.scrollIndicator.play()
        }
        ,
        i.prototype.isOutside = function() {
            this.hasVideo === !0 && this.videoPlayback.pause(),
            this.clearSymbol.hide(),
            this.imageSymbol.hide(),
            this.overlayCon.hide(),
            this.waveTween.pause(),
            this.scrollIndicator.pause()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.hasVideo !== !0 && this.imageLoader.execute(),
            this.logo.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            var s = i.clone()
              , n = Math.round(.025 * i.x);
            this.imageOuterCropRectangle.s = s,
            this.clearRect.s = s,
            this.imageSymbol.setSize(s),
            this.imageLoader.setSize(s),
            this._insideLoadBounds === !0 && (this.hasVideo !== !0 ? this.imageLoader.execute() : (this.cropRect = this.fitDef.toCropRectangle(this.imageSymbol.getSize(), this.imageTexture.size),
            this.parallaxRect.copy(this.cropRect),
            this.updateCrop()));
            var o = i.y
              , r = s.y;
            this.size.x = i.x,
            this.size.y = r;
            var a = 0
              , h = o
              , l = -r;
            this.posScroll.set(0, l, 1.25 * r, o),
            this.overlayPosOutScroll.set(h, l, a, o + r);
            for (var d = this.overlayLines.length, u = new t.Vector(i.x - 2 * n,Math.round((i.y - 2 * n) / d)); d--; )
                this.overlayLines[d].setSize(u, n);
            this.overlayDynamicController.set(1, 0, a + o, .25 * o);
            for (var p, d = 0, c = this.overlayCutoutTexts.length, y = Math.max(44, .15 * Math.min(.9 * i.x, 1.15 * i.y)), m = 1.05 * y; c > d; )
                p = this.overlayCutoutTexts[d],
                p.setFontSize(y),
                p.anchor.x = Math.round(.5 * i.x),
                p.anchor.y = .48 * i.y - .5 * m * (c - 1) + d * m,
                d++;
            var f = m * c;
            this.descriptionNode.style.top = .48 * i.y + .5 * f + .55 * m + "px";
            var g = new t.Vec(.33 * i.x,Math.max(.2 * i.y, 100));
            g.x = Math.min(g.x + Math.min(-(g.x - 100), 0) + Math.max(.25 * (g.x - 100), 0), 300),
            this.logo.setSize(g),
            this._insideLoadBounds === !0 && this.logo.execute(),
            this.logo.transform.t.x = Math.round(.5 * i.x),
            this.logo.transform.t.y = Math.round(2 * n + .12 * (i.y - 2 * n)),
            this.scrollIndicator.setHeight(Math.floor(n + .04 * i.y)),
            this.scrollIndicator.transform.t.x = Math.round(.5 * i.x),
            this.scrollIndicator.transform.t.y = i.y,
            e.setHeight(Math.round(r + .25 * s.y)),
            this.segmentWithin.updateBounds(),
            this.overlayDynamic.updateProgress(this.overlayDynamic.getProgress())
        }
        ,
        i.prototype.computeSnapPoints = function(t) {}
        ,
        i.prototype.setImagePos = function(t) {
            this.imagePos = Math.round(t),
            this.clearSymbol.transform.t.y = t,
            this.updateCrop(),
            this.imageSymbol.transform.t.y = this.imagePos,
            this.imageOuterCropRectangle.a.y = -this.imagePos
        }
        ,
        i.prototype.setOverlayPos = function(e) {
            e = Math.round(e),
            this.overlayCon.transform.t.y = e,
            this.html.node.style[t.css.name.TRANSFORM] = "translateY(" + e + "px)"
        }
        ,
        i.prototype.updateCrop = function() {
            var t = this.cropRect.s.y / this.imageSymbol.getSize().y;
            this.parallaxRect.a.y = .5 * this.imagePos * t,
            this.imageSymbol.setCrop(this.parallaxRect)
        }
        ,
        i
    }(t.ASegment);
    t.StartPageSegment = e,
    t.ASegment.Factory.addClass("start", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function t(t, e, i, s) {
            this.point = t,
            this.above = e,
            this.below = i,
            this.maxDistance = s
        }
        return t.prototype.setPoint = function(t) {
            this.point = t
        }
        ,
        t.prototype.getPoint = function() {
            return this.point
        }
        ,
        t.prototype.doesSnap = function(t) {
            if (Math.abs(t - this.point) < this.maxDistance) {
                if (this.above === !0 && t < this.point)
                    return !0;
                if (this.below === !0 && t > this.point)
                    return !0
            }
            return !1
        }
        ,
        t.prototype.getDistance = function(t) {
            return Math.abs(t - this.point)
        }
        ,
        t
    }();
    t.SnapPoint = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(s, n, o) {
            if (this.wordSymbols = [],
            this.delayCounter = new t.Counter(0),
            this.wordDelay = 80,
            this.charDelay = 30,
            this.node = s,
            this.node.style.visibility = "hidden",
            void 0 !== n) {
                void 0 !== o && this.delayCounter.add(o);
                for (var r, a, h = n.split(e.SplitSpaceRegex), l = h.length, d = 0; l > d; d++)
                    a = h[d],
                    " " == a ? this.node.appendChild(t.HTML.Create("div", {
                        html: "&nbsp;"
                    })) : "<br" == a.substr(0, 3) ? this.node.appendChild(t.HTML.Create("br")) : (r = new i(a,this),
                    this.node.appendChild(r.getHTML()),
                    this.wordSymbols.push(r))
            }
        }
        return e.prototype.assemble = function() {
            if (this._assembled !== !0) {
                for (var t = this.wordSymbols.length, e = 0; t > e; e++)
                    this.wordSymbols[e].assemble();
                this._assembled = !0
            }
        }
        ,
        e.prototype.show = function() {
            this.node.style.visibility = "",
            setTimeout(this.delayedShow.bind(this), 100),
            setTimeout(this.delayedTitleShow.bind(this), 100)
        }
        ,
        e.prototype.delayedShow = function() {}
        ,
        e.prototype.delayedTitleShow = function() {
            for (var e = this.wordSymbols.length, i = 0; e > i; i++)
                this.wordSymbols[i].show();
            this.node.style[t.css.name.OPACITY] = "1"
        }
        ,
        e.prototype.hide = function() {
            for (var t = this.wordSymbols.length, e = 0; t > e; e++)
                this.wordSymbols[e].hide()
        }
        ,
        e.prototype.delayedHide = function() {
            this.node.style.visibility = "hidden"
        }
        ,
        e.prototype.updateSize = function() {
            for (var t = this.wordSymbols.length, e = 0; t > e; e++)
                this.wordSymbols[e].updateSize()
        }
        ,
        e.prototype.destroy = function() {
            for (var t = this.wordSymbols.length, e = 0; t > e; e++)
                this.wordSymbols[e].getHTML();
            this.node = null 
        }
        ,
        e.SplitSpaceRegex = /(<br>|<br\/>|<sup>[^<]+<\/sup>|\s|-)/gi,
        e
    }();
    t.HTMLCharacterCSSTransition = e;
    var i = function() {
        function e(e, i) {
            this.text = e,
            this.node = t.HTML.Create("div"),
            this.insideNode = t.HTML.Create("div"),
            this.node.appendChild(this.insideNode),
            this.wordNode = t.HTML.Create("div"),
            this.insideNode.appendChild(this.wordNode),
            this.config = i,
            this.delay = i.delayCounter.get(),
            this.wordNode.innerHTML = e,
            i.delayCounter.add(20)
        }
        return e.prototype.getHTML = function() {
            return this.node
        }
        ,
        e.prototype.assemble = function() {
            this.wordWidth = this.wordNode.offsetWidth,
            this.wordHeight = this.wordNode.offsetHeight,
            this.conHeight = this.node.offsetHeight,
            this.node.style.width = this.wordWidth + "px",
            this.node.style.height = this.wordHeight + "px",
            this.insideNode.style[t.css.name.OPACITY] = "0",
            this.insideNode.style[t.css.name.TRANSFORM] = "translateY(300px)"
        }
        ,
        e.prototype.show = function() {
            this.text.length;
            t.CSS.RemoveTransition(this.insideNode),
            this.isAnimating = !0,
            t.CSS.SetTransition(this.insideNode, "transform 500ms " + t.CSSEase.ExpoOut + " " + this.delay + "ms, opacity 400ms ease-out " + this.delay + "ms", this.onShowComplete.bind(this)),
            this.insideNode.style[t.css.name.OPACITY] = "1",
            this.insideNode.style[t.css.name.TRANSFORM] = "translateY(0px)"
        }
        ,
        e.prototype.onShowComplete = function(t) {
            this.insideNode.style.width = "",
            this.isAnimating = !1
        }
        ,
        e.prototype.hide = function() {
            this.text.length;
            t.CSS.RemoveTransition(this.insideNode),
            this.insideNode.style.width = this.wordWidth + "px",
            t.CSS.ForceUpdate(this.insideNode),
            this.isAnimating = !0,
            t.CSS.SetTransition(this.insideNode, "transform 500ms " + t.CSSEase.CubicIn + " " + this.delay + "ms, opacity 400ms ease-out " + this.delay + "ms", this.onHideComplete.bind(this)),
            this.insideNode.style[t.css.name.OPACITY] = "0",
            this.insideNode.style[t.css.name.TRANSFORM] = "translateY(-300px)"
        }
        ,
        e.prototype.onHideComplete = function(e) {
            this.isAnimating = !1,
            this.insideNode.style[t.css.name.TRANSFORM] = "translateY(300px)"
        }
        ,
        e.prototype.updateSize = function() {
            this.wordWidth = this.wordNode.offsetWidth,
            this.wordHeight = this.wordNode.offsetHeight,
            this.conHeight = this.node.offsetHeight,
            this.node.style.width = this.wordWidth + "px",
            this.node.style.height = this.wordHeight + "px",
            this.isAnimating === !0 && (this.insideNode.style.width = this.wordWidth + "px")
        }
        ,
        e
    }()
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            void 0 === n && (n = "."),
            void 0 === o && (o = 400),
            e.call(this, i),
            this.numberInstances = [];
            var r = parseFloat(s)
              , a = r.toString()
              , h = s.indexOf(a)
              , l = s.substring(0, h)
              , d = s.substring(h + r.toString().length);
            "" != l && this.node.appendChild(t.HTML.Create("div", {
                html: l
            }));
            var u = t.HTML.Create("div");
            this.numberTween = new t.Tween;
            var p, c, y, m = 0, f = a.length, g = a.indexOf(".");
            for (-1 == g && (g = f); f > m; )
                c = g > m ? Math.pow(10, m - (g - 1)) : Math.pow(10, m - g),
                p = a.charAt(m),
                "." === p ? u.appendChild(t.HTML.Create("div", {
                    html: n
                })) : (y = new t.HTMLNumberTransitionNumber(u,c,0,Math.floor(r * c) / c),
                this.numberInstances.push(y),
                this.numberTween.add(y)),
                m++;
            this.numberTweenWrap = new t.TweenRender(this.numberTween,0,r,100,1400,t.Ease.ExpoInOut),
            this.node.appendChild(u),
            this.node.appendChild(t.HTML.Create("div", {
                html: d
            })),
            this.node.style.opacity = "0",
            this.tween = new t.HTMLTween(this.node);
            var v = this.onBeforeTween.bind(this)
              , S = this.onAfterTween.bind(this);
            this.tween.addEventListener(t.TweenEvent.BEFORE, v),
            this.tween.addEventListener(t.TweenEvent.START, S),
            this.tween.addEventListener(t.TweenEvent.AFTER, S),
            this.tween.tweenByNumber("opacity", null , 0, 1, 0, o, t.Ease.Linear)
        }
        return __extends(i, e),
        i.prototype.onBeforeTween = function() {
            this.numberTweenWrap.backward()
        }
        ,
        i.prototype.onAfterTween = function() {
            this.numberTweenWrap.forward()
        }
        ,
        i.prototype.getTween = function() {
            return this.tween
        }
        ,
        i.prototype.updateSize = function() {
            for (var t = this.numberInstances.length; t--; )
                this.numberInstances[t].updateSize()
        }
        ,
        i
    }(t.HTMLSymbol);
    t.HTMLNumberTransition = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s, n) {
            void 0 === s && (s = 0),
            void 0 === n && (n = 999),
            this.bounds = new t.Range(0,1e4),
            this.progress = 0,
            this.size = new t.Vector(40,45),
            this.spectrum = i,
            this.limitStart = s,
            this.limitEnd = n,
            this.node = t.HTML.Create("div"),
            t.HTML.AddClass(this.node, "numberCon");
            var o = t.HTML.Create("div");
            t.HTML.AddClass(o, "numberAbsCon"),
            this.node.appendChild(o),
            this.upperNode = t.HTML.Create("div"),
            this.lowerNode = t.HTML.Create("div"),
            o.appendChild(this.upperNode),
            o.appendChild(this.lowerNode),
            e.appendChild(this.node)
        }
        return e.prototype.setLimit = function(t) {
            this.limitEnd = t
        }
        ,
        e.prototype.setLimitRange = function(t, e) {
            this.limitStart = t,
            this.limitEnd = e
        }
        ,
        e.prototype.setProgress = function(e) {
            this.progress = e,
            e *= this.spectrum;
            var i = this.limitStart * this.spectrum
              , s = this.limitEnd * this.spectrum;
            if (e < Math.ceil(i)) {
                var n = 1 / (Math.ceil(i) - i);
                e = Math.ceil(e) - (Math.ceil(i) - e) * n
            }
            e = Math.min(e, Math.floor(s));
            var o = 10 * Math.floor(e / 10)
              , r = e - o;
            this.lowerValue != Math.ceil(r) && (this.lowerValue = Math.ceil(r),
            10 === this.lowerValue && (this.lowerValue = 0),
            this.lowerNode.innerHTML = this.lowerValue + ""),
            this.upperValue != Math.floor(r) && (this.upperValue = Math.floor(r),
            this.upperNode.innerHTML = this.upperValue + "",
            10 === this.upperValue && (this.upperValue = 0));
            var a = r - this.upperValue;
            this.upperNode.style[t.css.name.TRANSFORM] = "translateY(" + -1 * a + "em)",
            this.lowerNode.style[t.css.name.TRANSFORM] = "translateY(" + -1 * (a - 1) + "em)"
        }
        ,
        e.prototype.setProgressLast = function(t) {
            t = Math.max(Math.min(t, this.limitEnd), this.limitStart),
            this.setProgress(t)
        }
        ,
        e.prototype.updateProgress = function(t) {
            t = Math.max(Math.min(t, this.limitEnd), this.limitStart),
            this.setProgress(t)
        }
        ,
        e.prototype.updateSize = function() {
            this.size.y = this.upperNode.offsetHeight,
            this.updateProgress(this.progress)
        }
        ,
        e.prototype.destroy = function() {}
        ,
        e
    }();
    t.HTMLNumberTransitionNumber = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i) {
            e.call(this, i),
            this.words = [],
            this.delayCounter = new t.Counter(0),
            this.wordDelay = 40,
            this.tween = new t.Tween
        }
        return __extends(i, e),
        i.prototype.getTween = function() {
            return this.tween.updateBounds(),
            this.tween
        }
        ,
        i.prototype.updateSize = function() {
            for (var t = this.words.length; t--; )
                this.words[t].updateSize()
        }
        ,
        i.prototype.add = function(t) {
            var e = t.getTween();
            e.setOffset(this.delayCounter.get()),
            this.tween.add(e),
            this.words.push(e),
            this.addChild(t),
            this.delayCounter.add(this.wordDelay)
        }
        ,
        i
    }(t.HTMLSymbolContainer);
    t.HTMLTitleTweenSymbol = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, i),
            this.node.innerHTML = s,
            this.node.style.opacity = "0",
            this.tween = new t.HTMLTween(this.getHTML()),
            this.tween.tweenByNumber("opacity", null , 0, 1, 0, 400, t.Ease.Linear)
        }
        return __extends(i, e),
        i.prototype.getTween = function() {
            return this.tween
        }
        ,
        i.prototype.updateSize = function() {}
        ,
        i
    }(t.HTMLSymbol);
    t.HTMLWordTransition = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s) {
            this.node = null ,
            this.size = new t.Vector(null ,null ),
            this._insideLoadBounds = !1,
            this.onRenderInsideBind = this.onRenderInside.bind(this),
            this.onRenderOutsideBind = this.onRenderOutside.bind(this),
            this.data = e,
            this.tween = new t.Tween,
            this.tween.addEventListener(t.RenderWithinEvent.INSIDE, this.onRenderInsideBind),
            this.tween.addEventListener(t.RenderWithinEvent.BEFORE, this.onRenderOutsideBind),
            this.tween.addEventListener(t.RenderWithinEvent.AFTER, this.onRenderOutsideBind),
            this.canvas = i,
            this.marginTop = e.marginTop || 0,
            this.marginBottom = e.marginBottom || 0,
            this.marginLeft = e.marginLeft || 0,
            this.marginRight = e.marginRight || 0,
            void 0 !== e.extra && (this.extra = new (t.ASegmentExtra.Factory.get(e.extra.type))(e.extra,i,s))
        }
        return e.prototype.getType = function() {
            return "base"
        }
        ,
        e.prototype.onRenderInside = function() {
            this.isInside()
        }
        ,
        e.prototype.onRenderOutside = function() {
            this.isOutside()
        }
        ,
        e.prototype.getHTML = function() {
            return this.node
        }
        ,
        e.prototype.getMarginTop = function() {
            return this.size.y * this.marginTop
        }
        ,
        e.prototype.getMarginBottom = function() {
            return this.size.y * this.marginBottom
        }
        ,
        e.prototype.getHeight = function() {
            return this.size.y
        }
        ,
        e.prototype.makeRight = function() {
            this.right = !0,
            void 0 !== this.extra && this.extra.makeRight()
        }
        ,
        e.prototype.makeCenter = function() {
            this.center = !0
        }
        ,
        e.prototype.getWithins = function() {
            var t = [];
            return void 0 !== this.extra && t.push(this.extra.getWithin()),
            t.push(this.tween),
            t
        }
        ,
        e.prototype.setOffset = function(t) {
            this.tween.setOffset(t),
            void 0 !== this.extra && this.extra.setOffset(t)
        }
        ,
        e.prototype.selected = function() {}
        ,
        e.prototype.deselected = function() {}
        ,
        e.prototype.insideLoadBounds = function() {
            this._insideLoadBounds === !1 && (this._insideLoadBounds = !0,
            this.startLoading())
        }
        ,
        e.prototype.outsideLoadBounds = function() {
            this._insideLoadBounds = !1
        }
        ,
        e.prototype.isInside = function() {}
        ,
        e.prototype.isOutside = function() {}
        ,
        e.prototype.startLoading = function() {}
        ,
        e.prototype.computeSize = function(t, e) {
            void 0 !== this.extra && this.extra.computeSize(t, e)
        }
        ,
        e.prototype.computeScope = function(t, e) {
            void 0 !== this.extra && this.extra.computeScope(t, e)
        }
        ,
        e.Factory = new t.RuntimeFactory,
        e
    }();
    t.ASegmentElement = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.onImageErrorBind = this.onImageError.bind(this),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this._imagePosOffset = 0,
            this.setImagePosOffsetBind = this.setImagePosOffset.bind(this),
            this.setImagePosBind = this.setImagePos.bind(this);
            var o = i.media;
            this.imageSize = t.Vector.FromString(o.sourceSize),
            this.fitDef = t.FitDef.FromJSON(o),
            this.imageLoader = new t.ResponsiveImageRequest(o.url,this.imageSize,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageLoader.addEventListener(t.RequestEvent.ERROR, this.onImageErrorBind),
            this.imageTexture = new t.Texture,
            this.imageSymbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.imageSymbol.addFitDef(t.FitDef.Cover(.5, .5)),
            this.imageSymbol.setAlpha(0),
            this.imageSymbol.hide(),
            s.addChild(this.imageSymbol),
            this.imagePosOffsetIn = this.tween.addFunction(this.setImagePosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoOut),
            this.imagePosOffsetOut = this.tween.addFunction(this.setImagePosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoIn),
            this.imagePosScroll = this.tween.addFunction(this.setImagePosBind, 0, 0, 0, 0, t.Ease.Linear)
        }
        return __extends(i, e),
        i.prototype.getType = function() {
            return "image"
        }
        ,
        i.prototype.startLoading = function() {
            e.prototype.startLoading.call(this),
            this.imageLoader.execute()
        }
        ,
        i.prototype.onImageError = function(t) {
            this.imageTexture.size = this.imageLoader.getRealSize()
        }
        ,
        i.prototype.onImageComplete = function(e) {
            if (this.imageLoader.updateSize(),
            this.imageTexture.set(e.target.data, this.imageLoader.getRealSize()),
            this.imageSymbol.isVisible() === !0) {
                if (1 !== this.imageSymbol.getAlpha()) {
                    var i = new t.FunctionTween(this.imageSymbol.setAlpha.bind(this.imageSymbol),this.imageSymbol.getAlpha(),1,0,800,t.Ease.Linear);
                    i.makeAutoDestroy(),
                    i.execute()
                }
            } else
                this.imageSymbol.setAlpha(1)
        }
        ,
        i.prototype.isInside = function() {
            this.imageSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.imageSymbol.hide()
        }
        ,
        i.prototype.computeSize = function(i, s) {
            e.prototype.computeSize.call(this, i, s);
            var n = s.x
              , o = this.marginLeft
              , r = this.marginRight;
            n > t.Config.BREAKPOINT && (this.right === !0 && 0 != o && (o -= .06),
            this.right === !1 && 0 != r && (r -= .06));
            var a = new t.Vector(i.x - (o + r) * i.x,i.y);
            this.imageLoader.setSize(a),
            this.size = this.imageLoader.getNeutralSize();
            var h = this.fitDef.getAligment(a, this.size);
            this.imageSymbol.setSize(this.size),
            this._insideLoadBounds === !0 && this.imageLoader.execute(),
            this.right === !0 && n > t.Config.BREAKPOINT ? this.imageSymbol.transform.t.x = Math.round(i.x + h.x + o * i.x) : this.center === !0 && n > t.Config.BREAKPOINT ? this.imageSymbol.transform.t.x = Math.round(.5 * i.x + h.x + o * i.x) : this.imageSymbol.transform.t.x = Math.round(h.x + o * i.x)
        }
        ,
        i.prototype.computeScope = function(i, s) {
            e.prototype.computeScope.call(this, i, s);
            var n = i.getAxisLength(t.Y)
              , o = n + s
              , r = this.marginTop * s
              , a = r + o
              , h = -s
              , l = n
              , d = Math.min(s, .5 * n)
              , u = s - this.size.y
              , p = .5 * d;
            this.imagePosOffsetIn.set(p, 0, r, d),
            this.imagePosOffsetOut.set(0, -p, a - d, d),
            this.imagePosScroll.set(l, h + u, r, o),
            this.tween.updateBounds()
        }
        ,
        i.prototype.setImagePosOffset = function(t) {
            this._imagePosOffset = t
        }
        ,
        i.prototype.setImagePos = function(t) {
            this.imageSymbol.transform.t.y = Math.round(t + this._imagePosOffset)
        }
        ,
        i
    }(t.ASegmentElement);
    t.ImageSegmentElement = e,
    t.ASegmentElement.Factory.addClass("image", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.copyrightSymbol = new t.CanvasTextSymbol(i.copyright,"Arial",10),
            this.copyrightSymbol.setColor("#ffffff"),
            this.copyrightSymbol.setAlpha(i.copyrightAlpha || .5),
            this.copyrightSymbol.setAlign("right"),
            this.copyrightSymbol.hide(),
            s.addChild(this.copyrightSymbol)
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.copyrightSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.copyrightSymbol.hide()
        }
        ,
        i.prototype.computeSize = function(t, i) {
            e.prototype.computeSize.call(this, t, i),
            this.copyrightSymbol.transform.t.x = this.imageSymbol.transform.t.x + this.imageSymbol.getSize().x - 6
        }
        ,
        i.prototype.computeScope = function(t, i) {
            e.prototype.computeScope.call(this, t, i)
        }
        ,
        i.prototype.setImagePos = function(t) {
            e.prototype.setImagePos.call(this, t),
            this.copyrightSymbol.transform.t.y = Math.round(t + this._imagePosOffset) + this.imageSymbol.getSize().y - 6
        }
        ,
        i
    }(t.ImageSegmentElement);
    t.CopyrightImageSegmentElement = e,
    t.ASegmentElement.Factory.addClass("copyrightImage", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(t) {
        function e(e, i, s) {
            t.call(this, e, i, s)
        }
        return __extends(e, t),
        e.prototype.getMarginTop = function() {
            return 0
        }
        ,
        e.prototype.getMarginBottom = function() {
            return 0
        }
        ,
        e.prototype.getHeight = function() {
            return 0
        }
        ,
        e.prototype.getType = function() {
            return "empty"
        }
        ,
        e
    }(t.ASegmentElement);
    t.EmptySegmentElement = e,
    t.ASegmentElement.Factory.addClass("empty", t.ImageSegmentElement)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s, n, o) {
            e.call(this, s, n, o),
            this._textMatrix = t.TransformMatrix.FromDefault(),
            this._textPosOffset = 0,
            this.setTextPosOffsetBind = this.setTextPosOffset.bind(this),
            this.setTextPosBind = this.setTextPos.bind(this),
            this.onTitleNotCompleteBind = this.onTitleNotComplete.bind(this),
            this.onTitleCompleteBind = this.onTitleComplete.bind(this),
            this.node = t.HTML.Create("div", {
                "class": "fact"
            }),
            this.viewportHandler = o,
            this.bgAspectRatio = t.Vector.FromString(s.aspectRatio).getAspectRatio(),
            this.bgRectangle = t.Rectangle.FromZero(),
            this.bgSymbol = new t.CanvasShapeSymbol(this.bgRectangle),
            this.bgSymbol.setFillColor(s.color),
            this.bgSymbol.hide(),
            n.addChild(this.bgSymbol);
            var r = s.fact.split(i.SplitDataRegex);
            this.factSymbol = new t.HTMLTitleTweenSymbol("h2");
            for (var a, h = 0, l = r.length; l > h; )
                "<br/>" == r[h] ? this.titleSymbol.addChild(new t.HTMLSymbol("br")) : "" == r[h] || (" " == r[h] ? r[h + 1] = " " + r[h + 1] : (isNaN(parseInt(r[h].charAt(0))) === !1 || isNaN(parseInt(r[h].charAt(1))) === !1 ? a = new t.HTMLNumberTransition("div",r[h]) : (a = new t.HTMLWordTransition("div",r[h]),
                t.HTML.AddClass(a.getHTML(), "isText")),
                this.factSymbol.add(a))),
                h++;
            this.node.appendChild(this.factSymbol.getHTML());
            var d = s.title.split(i.SplitDataRegex);
            this.titleSymbol = new t.HTMLTitleTweenSymbol("h3");
            for (var a, h = 0, l = d.length; l > h; )
                a = isNaN(parseInt(d[h].charAt(0))) === !1 || isNaN(parseInt(d[h].charAt(1))) === !1 ? new t.HTMLNumberTransition("div",d[h]) : new t.HTMLWordTransition("div",d[h]),
                this.titleSymbol.add(a),
                h++;
            this.node.appendChild(this.titleSymbol.getHTML()),
            this.pNode = t.HTML.Create("p", {
                html: s.text
            }),
            this.pNode.style[t.css.name.OPACITY] = "0",
            this.node.appendChild(this.pNode),
            this.factTweenIn = new t.TweenRender(this.factSymbol.getTween(),0,0,0,0,t.Ease.Linear),
            this.tween.add(this.factTweenIn),
            void 0 !== s.title ? (this.titleTweenIn = new t.TweenRender(this.titleSymbol.getTween(),0,0,0,0,t.Ease.Linear),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleNotCompleteBind),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this.tween.add(this.titleTweenIn)) : (this.pIsWithin = new t.IsWithin,
            this.pIsWithin.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.pIsWithin.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleCompleteBind),
            this.pIsWithin.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this.tween.add(this.pIsWithin)),
            this.isOutside(),
            this.textPosOffsetIn = this.tween.addFunction(this.setTextPosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoOut),
            this.textPosOffsetOut = this.tween.addFunction(this.setTextPosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoIn),
            this.textPosScroll = this.tween.addFunction(this.setTextPosBind, 0, 0, 0, 0, t.Ease.Linear)
        }
        return __extends(i, e),
        i.prototype.getType = function() {
            return "fact"
        }
        ,
        i.prototype.getHTML = function() {
            return this.node
        }
        ,
        i.prototype.isInside = function() {
            this.bgSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.bgSymbol.hide()
        }
        ,
        i.prototype.makeRight = function() {
            e.prototype.makeRight.call(this),
            t.HTML.AddClass(this.node, "right")
        }
        ,
        i.prototype.computeSize = function(i, s) {
            e.prototype.computeSize.call(this, i, s);
            var n = this.node.offsetHeight
              , o = s.x
              , r = .18 * i.x
              , a = i.x - 2 * r
              , h = a / this.bgAspectRatio
              , l = Math.max(h, n);
            this.textNodeAlignH = .5 * (l - n),
            this._textMatrix.o.y = -this.textNodeAlignH,
            this.right === !0 && o > t.Config.BREAKPOINT ? this.bgSymbol.transform.t.x = i.x : this.bgSymbol.transform.t.x = 0,
            this.bgRectangle.a.x = r,
            this.bgRectangle.s.x = a,
            this.bgRectangle.s.y = h,
            this.size.set(i.x, l)
        }
        ,
        i.prototype.computeScope = function(i, s) {
            e.prototype.computeScope.call(this, i, s);
            var n = i.getAxisLength(t.Y)
              , s = this.size.y
              , o = n + s
              , r = this.marginTop * n
              , a = r + o
              , h = -s
              , l = n
              , d = Math.min(s, .5 * n)
              , u = s - this.size.y
              , p = .5 * d;
            this.factTweenIn.set(this.titleSymbol.getTween().bounds.start, this.titleSymbol.getTween().bounds.end, this.textNodeAlignH + r + .1 * d, .5 * d),
            void 0 !== this.data.title ? this.titleTweenIn.set(this.titleSymbol.getTween().bounds.start, this.titleSymbol.getTween().bounds.end, this.textNodeAlignH + r + .33 * d, .33 * d) : (this.pIsWithin.bounds.start = this.textNodeAlignH + .5 * d,
            this.pIsWithin.bounds.end = this.textNodeAlignH + o - .75 * d),
            this.textPosOffsetIn.set(.5 * p, 0, r, d),
            this.textPosOffsetOut.set(0, .5 * -p, a - d, d),
            this.textPosScroll.set(l, h + u, r, o),
            this.tween.updateBounds()
        }
        ,
        i.prototype.setTextPosOffset = function(t) {
            this._textPosOffset = t
        }
        ,
        i.prototype.setTextPos = function(e) {
            this._textMatrix.t.y = Math.round(e + this._textPosOffset),
            this.node.style[t.css.name.TRANSFORM] = this._textMatrix.toString(),
            this.bgSymbol.transform.t.y = this._textMatrix.t.y
        }
        ,
        i.prototype.onTitleNotComplete = function(e) {
            this.pNode.style[t.css.name.OPACITY] = "0"
        }
        ,
        i.prototype.onTitleComplete = function(e) {
            this.pNode.style[t.css.name.OPACITY] = "1"
        }
        ,
        i.SplitDataRegex = /(\s\d+[\.\d]+\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g,
        i
    }(t.ASegmentElement);
    t.FactSegmentElement = e,
    t.ASegmentElement.Factory.addClass("fact", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(s, n, o) {
            if (e.call(this, s, n, o),
            this._textMatrix = t.TransformMatrix.FromDefault(),
            this._textPosOffset = 0,
            this.setTextPosOffsetBind = this.setTextPosOffset.bind(this),
            this.setTextPosBind = this.setTextPos.bind(this),
            this.onTitleNotCompleteBind = this.onTitleNotComplete.bind(this),
            this.onTitleCompleteBind = this.onTitleComplete.bind(this),
            this.node = t.HTML.Create("div", {
                "class": "text"
            }),
            s.small === !0 && t.HTML.AddClass(this.node, "small"),
            this.viewportHandler = o,
            void 0 !== s.title) {
                var r = s.title.split(i.SplitDataRegex);
                this.titleSymbol = new t.HTMLTitleTweenSymbol("introtext" === s.type ? "h2" : "h3");
                for (var a, h = 0, l = r.length; l > h; )
                    "<br/>" == r[h] ? this.titleSymbol.addChild(new t.HTMLSymbol("br")) : "" == r[h] || (" " == r[h] ? r[h + 1] = " " + r[h + 1] : (a = new t.HTMLWordTransition("div",r[h]),
                    this.titleSymbol.add(a))),
                    h++;
                this.node.appendChild(this.titleSymbol.getHTML())
            }
            if (this.pNode = t.HTML.Create("p", {
                html: s.text
            }),
            this.pNode.style[t.css.name.OPACITY] = "0",
            this.node.appendChild(this.pNode),
            void 0 !== s.title ? (this.titleTweenIn = new t.TweenRender(this.titleSymbol.getTween(),0,0,0,0,t.Ease.Linear),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleNotCompleteBind),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this.tween.add(this.titleTweenIn)) : (this.pIsWithin = new t.IsWithin,
            this.pIsWithin.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleNotCompleteBind),
            this.pIsWithin.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleCompleteBind),
            this.pIsWithin.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleCompleteBind),
            this.tween.add(this.pIsWithin)),
            this.textPosOffsetIn = this.tween.addFunction(this.setTextPosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoOut),
            this.textPosOffsetOut = this.tween.addFunction(this.setTextPosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoIn),
            this.textPosScroll = this.tween.addFunction(this.setTextPosBind, 0, 0, 0, 0, t.Ease.Linear),
            void 0 !== this.data.shareUrl) {
                this.shareButton = new t.ShareButton(this.data.shareUrl);
                var d = this.shareButton.getHTML();
                this.node.appendChild(d)
            }
        }
        return __extends(i, e),
        i.prototype.getType = function() {
            return "text"
        }
        ,
        i.prototype.getHTML = function() {
            return this.node
        }
        ,
        i.prototype.makeRight = function() {
            e.prototype.makeRight.call(this),
            t.HTML.AddClass(this.node, "right")
        }
        ,
        i.prototype.makeCenter = function() {
            e.prototype.makeCenter.call(this),
            t.HTML.AddClass(this.node, "center")
        }
        ,
        i.prototype.isInside = function() {}
        ,
        i.prototype.isOutside = function() {}
        ,
        i.prototype.computeSize = function(t, i) {
            e.prototype.computeSize.call(this, t, i),
            this.size.set(t.x, this.node.offsetHeight)
        }
        ,
        i.prototype.computeScope = function(i, s) {
            e.prototype.computeScope.call(this, i, s);
            var n = i.getAxisLength(t.Y)
              , o = n + s
              , r = this.marginTop * n
              , a = r + o
              , h = -s
              , l = n
              , d = Math.min(s, .5 * n)
              , u = s - this.size.y
              , p = .5 * d;
            void 0 !== this.data.title ? this.titleTweenIn.set(this.titleSymbol.getTween().bounds.start, this.titleSymbol.getTween().bounds.end, r + .33 * d, .8 * d) : (this.pIsWithin.bounds.start = .5 * d,
            this.pIsWithin.bounds.end = o - .75 * d),
            this.textPosOffsetIn.set(.5 * p, 0, r, d),
            this.textPosOffsetOut.set(0, .5 * -p, a - d, d),
            this.textPosScroll.set(l, h + u, r, o),
            this.tween.updateBounds()
        }
        ,
        i.prototype.setTextPosOffset = function(t) {
            this._textPosOffset = t
        }
        ,
        i.prototype.setTextPos = function(e) {
            this._textMatrix.t.y = Math.round(e + this._textPosOffset),
            this.node.style[t.css.name.TRANSFORM] = this._textMatrix.toString()
        }
        ,
        i.prototype.onTitleNotComplete = function(e) {
            if (this.pNode.style[t.css.name.OPACITY] = "0",
            this.pNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(.02 * this.size.y) + "px)",
            void 0 !== this.shareButton) {
                var i = this.shareButton.getHTML();
                i.style[t.css.name.OPACITY] = "0",
                this.pNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(.04 * this.size.y) + "px)"
            }
        }
        ,
        i.prototype.onTitleComplete = function(e) {
            if (this.pNode.style[t.css.name.OPACITY] = "1",
            this.pNode.style[t.css.name.TRANSFORM] = "translateY(0px)",
            void 0 !== this.shareButton) {
                var i = this.shareButton.getHTML();
                i.style[t.css.name.OPACITY] = "1",
                this.pNode.style[t.css.name.TRANSFORM] = "translateY(0px)"
            }
        }
        ,
        i.SplitDataRegex = /(\s\d+[\.\d]{0,}\%?\s?|<br>|<br\/>|<sup>[^<]+<\/sup>|\s\w+\s?|-)/g,
        i
    }(t.ASegmentElement);
    t.TextSegmentElement = e,
    t.ASegmentElement.Factory.addClass("text", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.updateBreakLineBind = this.updateBreakLine.bind(this),
            this.lineDynamicUpdateBind = this.lineDynamicUpdate.bind(this),
            this.breakLineMotion = new t.WithinGroup,
            this.breakLineARender = new t.VectorMorphRender(new t.Vector(0,0),new t.Vector(0,0),0,1,t.Ease.Linear),
            this.breakLineMotion.add(this.breakLineARender),
            this.breakLineBRender = new t.VectorMorphRender(new t.Vector(0,0),new t.Vector(0,0),0,1,t.Ease.SineIn),
            this.breakLineMotion.add(this.breakLineBRender),
            this.breakLine = new t.Line(this.breakLineARender,this.breakLineBRender),
            this.breakLineSymbol = new t.CanvasShapeSymbol(this.breakLine),
            this.breakLineSymbol.setLineColor(this.data.color),
            this.breakLineSymbol.setLineWidth(2),
            this.breakLineSymbol.hide(),
            s.addChild(this.breakLineSymbol),
            this.defaultLineAlphaRender = new t.FunctionRender(this.breakLineSymbol.setAlpha.bind(this.breakLineSymbol),0,1,0,1,t.Ease.Linear),
            this.breakLineMotion.add(this.defaultLineAlphaRender),
            this.breakLineDynamic = new t.DynamicFunctionTween(this.lineDynamicUpdateBind,4,1),
            this.breakLineUpdateRender = this.tween.addFunction(this.updateBreakLineBind, 0, 0, 0, 0, t.Ease.CubicOut)
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            this.breakLineSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.breakLineSymbol.hide()
        }
        ,
        i.prototype.computeSize = function(i, s) {
            var n = s.x
              , o = .12;
            this.right === !0 && n > t.Config.BREAKPOINT && 0 != o && (o -= .06),
            this.breakLineBRender.to.x = 60,
            this.right === !0 && n > t.Config.BREAKPOINT ? this.breakLineSymbol.transform.t.x = Math.round(i.x + o * i.x) : this.breakLineSymbol.transform.t.x = Math.round(o * i.x),
            this.breakLineARender.from.x = i.x,
            this.breakLineBRender.from.x = i.x,
            this.breakLineUpdateRender.set(0, 1, 0, 200),
            e.prototype.computeSize.call(this, i, s)
        }
        ,
        i.prototype.computeScope = function(t, i) {
            e.prototype.computeScope.call(this, t, i)
        }
        ,
        i.prototype.updateBreakLine = function(t) {
            this.breakLineDynamic.moveTo(t)
        }
        ,
        i.prototype.lineDynamicUpdate = function(t) {
            this.breakLineMotion.setProgress(t)
        }
        ,
        i.prototype.setTextPos = function(t) {
            e.prototype.setTextPos.call(this, t),
            this.breakLineSymbol.transform.t.y = Math.round(t + this._textPosOffset)
        }
        ,
        i
    }(t.TextSegmentElement);
    t.IntroTextSegmentElement = e,
    t.ASegmentElement.Factory.addClass("introtext", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function s(s, n, o) {
            e.call(this, s, n, o),
            this.facts = [],
            this._transformMatrix = t.TransformMatrix.FromDefault(),
            this._positionOffset = 0,
            this.setPositionOffsetBind = this.setPositionOffset.bind(this),
            this.setPositionBind = this.setPosition.bind(this),
            this.onTitleBeforeBind = this.onTitleBefore.bind(this),
            this.onTitleInsideBind = this.onTitleInside.bind(this),
            this.node = t.HTML.Create("div", {
                "class": "productinfo"
            }),
            this.viewportHandler = o,
            this.labelNode = t.HTML.Create("p", {
                html: s.label
            }),
            this.labelNode.style[t.css.name.OPACITY] = "0",
            this.node.appendChild(this.labelNode),
            this.titleSymbol = new t.HTMLTitleTweenSymbol("h2");
            var r;
            r = new t.HTMLNumberTransition("div",s.distance,","),
            this.titleSymbol.add(r),
            r = new t.HTMLWordTransition("sup",s.unit),
            this.titleSymbol.add(r),
            this.node.appendChild(this.titleSymbol.getHTML());
            for (var a, h = 0, l = s.facts.length; l > h; )
                a = new i(h,s.facts[h].label,s.facts[h].value),
                this.facts.push(a),
                this.node.appendChild(a.getHTML()),
                h++;
            this.appearTween = new t.Tween,
            this.titleTweenIn = new t.TweenRender(this.titleSymbol.getTween(),this.titleSymbol.getTween().bounds.start,this.titleSymbol.getTween().bounds.end,0,400,t.Ease.Linear),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.BEFORE, this.onTitleBeforeBind),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.INSIDE, this.onTitleInsideBind),
            this.titleTweenIn.addEventListener(t.RenderWithinEvent.AFTER, this.onTitleInsideBind),
            this.appearTween.add(this.titleTweenIn),
            this.positionOffsetIn = this.tween.addFunction(this.setPositionOffsetBind, 0, 0, 0, 0, t.Ease.ExpoOut),
            this.positionOffsetOut = this.tween.addFunction(this.setPositionOffsetBind, 0, 0, 0, 0, t.Ease.ExpoIn),
            this.positionScroll = this.tween.addFunction(this.setPositionBind, 0, 0, 0, 0, t.Ease.Linear)
        }
        return __extends(s, e),
        s.prototype.getType = function() {
            return "productinfo"
        }
        ,
        s.prototype.getHTML = function() {
            return this.node
        }
        ,
        s.prototype.makeRight = function() {
            e.prototype.makeRight.call(this),
            t.HTML.AddClass(this.node, "right")
        }
        ,
        s.prototype.makeCenter = function() {
            e.prototype.makeCenter.call(this),
            t.HTML.AddClass(this.node, "center")
        }
        ,
        s.prototype.selected = function() {
            this.appearTween.forward();
            for (var t = 0, e = this.facts.length; e > t; )
                this.facts[t++].show()
        }
        ,
        s.prototype.deselected = function() {
            this.appearTween.backward();
            for (var t = 0, e = this.facts.length; e > t; )
                this.facts[t++].hide()
        }
        ,
        s.prototype.computeSize = function(t, i) {
            e.prototype.computeSize.call(this, t, i),
            this.size.set(t.x, this.node.offsetHeight)
        }
        ,
        s.prototype.computeScope = function(i, s) {
            e.prototype.computeScope.call(this, i, s);
            var n = i.getAxisLength(t.Y)
              , o = n + s
              , r = this.marginTop * n
              , a = r + o
              , h = -s
              , l = n
              , d = Math.min(s, .5 * n)
              , u = s - this.size.y
              , p = .5 * d;
            this.positionOffsetIn.set(.5 * p, 0, r, d),
            this.positionOffsetOut.set(0, .5 * -p, a - d, d),
            this.positionScroll.set(l, h + u, r, o),
            this.tween.updateBounds()
        }
        ,
        s.prototype.setPositionOffset = function(t) {
            this._positionOffset = t
        }
        ,
        s.prototype.setPosition = function(e) {
            this._transformMatrix.t.y = e + this._positionOffset,
            this.node.style[t.css.name.TRANSFORM] = this._transformMatrix.toString()
        }
        ,
        s.prototype.onTitleBefore = function(e) {
            this.labelNode.style[t.css.name.OPACITY] = "0"
        }
        ,
        s.prototype.onTitleInside = function(e) {
            this.labelNode.style[t.css.name.OPACITY] = "1"
        }
        ,
        s
    }(t.ASegmentElement);
    t.ProductInfoSegmentElement = e,
    t.ASegmentElement.Factory.addClass("productinfo", e);
    var i = function() {
        function e(e, i, s) {
            this.node = t.HTML.Create("div", {
                "class": "onefact"
            }),
            this.labelNode = t.HTML.Create("p", {
                html: i
            }),
            this.labelNode.style[t.css.name.OPACITY] = "0",
            this.labelNode.style.transitionDelay = 100 * e + "ms",
            this.node.appendChild(this.labelNode),
            this.valueNode = t.HTML.Create("h4", {
                html: s
            }),
            this.valueNode.style[t.css.name.OPACITY] = "0",
            this.valueNode.style.transitionDelay = 100 * e + 50 + "ms",
            this.node.appendChild(this.valueNode)
        }
        return e.prototype.getHTML = function() {
            return this.node
        }
        ,
        e.prototype.show = function() {
            this.labelNode.style[t.css.name.OPACITY] = "1",
            this.valueNode.style[t.css.name.OPACITY] = "1"
        }
        ,
        e.prototype.hide = function() {
            this.labelNode.style[t.css.name.OPACITY] = "0",
            this.valueNode.style[t.css.name.OPACITY] = "0"
        }
        ,
        e
    }()
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.bgCropRect = t.Rectangle.FromZero(),
            this.onOverlayImageCompleteBind = this.onOverlayImageComplete.bind(this),
            this._imagePosOffset = 0,
            this.setImagePosOffsetBind = this.setImagePosOffset.bind(this),
            this.setImagePosBind = this.setImagePos.bind(this),
            this.setImageCropBind = this.setImageCrop.bind(this),
            this.setProductScaleBind = this.setProductScale.bind(this),
            this.elementSymbol = new t.CanvasSymbolContainer,
            this.elementSymbol.hide(),
            s.addChild(this.elementSymbol);
            var o = i.media;
            this.bgImageSourceSize = t.Vector.FromString(o.sourceSize),
            this.bgFitDef = t.FitDef.FromJSON(o),
            this.bgRect = t.Rectangle.FromZero(),
            this.bgRectSymbol = new t.CanvasShapeSymbol(this.bgCropRect),
            this.bgRectSymbol.setFillColor(o.color),
            this.elementSymbol.addChild(this.bgRectSymbol),
            this.overlayMarginLeft = i.overlay.marginLeft || 0,
            this.overlayMarginRight = i.overlay.marginRight || 0,
            this.overlayMarginTop = i.overlay.marginTop || 0,
            this.overlayMarginBottom = i.overlay.marginBottom || 0;
            var r = i.overlay.media;
            this.overlayImageSize = t.Vector.FromString(r.sourceSize),
            this.overlayFitDef = t.FitDef.FromJSON(r),
            this.overlayImageLoader = new t.ResponsiveImageRequest(r.url,this.overlayImageSize,this.overlayFitDef),
            this.overlayImageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onOverlayImageCompleteBind),
            this.overlayImageTexture = new t.Texture,
            this.overlayImageSymbol = new t.CanvasTextureSymbol(this.overlayImageTexture),
            this.overlayImageSymbol.addFitDef(t.FitDef.Cover(.5, .5)),
            this.overlayImageSymbol.setAlpha(0),
            this.elementSymbol.addChild(this.overlayImageSymbol),
            this.positionOffsetIn = this.tween.addFunction(this.setImagePosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoOut),
            this.positionOffsetOut = this.tween.addFunction(this.setImagePosOffsetBind, 0, 0, 0, 0, t.Ease.ExpoIn),
            this.positionScroll = this.tween.addFunction(this.setImagePosBind, 0, 0, 0, 0, t.Ease.Linear),
            this.overlayImageSymbol.transform.s.y = this.overlayImageSymbol.transform.s.x = .9,
            this.appearTween = new t.Tween,
            this.appearCropRender = this.appearTween.addFunction(this.setImageCropBind, 0, 1, 250, 500, t.Ease.ExpoInOut),
            this.appearCropRender = this.appearTween.addFunction(this.setProductScaleBind, .9, 1, 0, 1e3, t.Ease.CubicInOut)
        }
        return __extends(i, e),
        i.prototype.getType = function() {
            return "image"
        }
        ,
        i.prototype.startLoading = function() {
            e.prototype.startLoading.call(this),
            this.overlayImageLoader.execute()
        }
        ,
        i.prototype.onOverlayImageComplete = function(e) {
            if (this.overlayImageLoader.updateSize(),
            this.overlayImageTexture.set(e.target.data, this.overlayImageLoader.getRealSize()),
            this.elementSymbol.isVisible() === !0) {
                if (1 !== this.overlayImageSymbol.getAlpha()) {
                    var i = new t.FunctionTween(this.overlayImageSymbol.setAlpha.bind(this.overlayImageSymbol),this.overlayImageSymbol.getAlpha(),1,0,800,t.Ease.Linear);
                    i.makeAutoDestroy(),
                    i.execute()
                }
            } else
                this.overlayImageSymbol.setAlpha(1)
        }
        ,
        i.prototype.selected = function() {
            this.appearTween.forward()
        }
        ,
        i.prototype.deselected = function() {
            this.appearTween.backward()
        }
        ,
        i.prototype.isInside = function() {
            this.elementSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.elementSymbol.hide()
        }
        ,
        i.prototype.computeSize = function(i, s) {
            e.prototype.computeSize.call(this, i, s);
            var n = s.x
              , o = this.marginLeft
              , r = this.marginRight;
            n > t.Config.BREAKPOINT && (this.right === !0 && 0 != o && (o -= .06),
            this.right === !1 && 0 != r && (r -= .06));
            var a = new t.Vector(i.x - (o + r) * i.x,i.y)
              , h = this.bgFitDef.toRectangle(a, this.bgImageSourceSize);
            this.bgRect.copy(h),
            this.bgRect.a.y = 0,
            this.size = this.bgRect.s,
            this.bgCropRect.a.x = this.bgRect.a.x,
            this.bgCropRect.s.x = this.bgRect.s.x;
            var l = this.overlayMarginLeft * i.x
              , d = this.overlayMarginRight * i.x
              , u = this.overlayMarginTop * this.size.y
              , p = this.overlayMarginBottom * this.size.y
              , c = new t.Vector(a.x - (l + d),this.size.y - (u + p));
            this.overlayImageLoader.setSize(c);
            var y = this.overlayImageLoader.getNeutralSize();
            this.overlayImageSymbol.setSize(y);
            var m = this.overlayFitDef.getAligment(c, this.overlayImageLoader.getNeutralSize());
            this.overlayImageSymbol.transform.t.x = Math.round(l + m.x + .5 * y.x),
            this.overlayImageSymbol.transform.t.y = Math.round(u + m.y + .5 * y.y),
            this.overlayImageSymbol.transform.o.x = Math.round(.5 * y.x),
            this.overlayImageSymbol.transform.o.y = Math.round(.5 * y.y),
            this._insideLoadBounds === !0 && this.overlayImageLoader.execute(),
            this.right === !0 && n > t.Config.BREAKPOINT ? this.elementSymbol.transform.t.x = Math.round(i.x + o * i.x) : this.center === !0 && n > t.Config.BREAKPOINT ? this.elementSymbol.transform.t.x = Math.round(.5 * i.x + o * i.x) : this.elementSymbol.transform.t.x = Math.round(o * i.x)
        }
        ,
        i.prototype.computeScope = function(i, s) {
            e.prototype.computeScope.call(this, i, s);
            var n = i.getAxisLength(t.Y)
              , o = n + s
              , r = this.marginTop * s
              , a = r + o
              , h = -s
              , l = n
              , d = Math.min(s, .5 * n)
              , u = s - this.size.y
              , p = .5 * d;
            this.positionOffsetIn.set(p, 0, r, d),
            this.positionOffsetOut.set(0, -p, a - d, d),
            this.positionScroll.set(l, h + u, r, o),
            this.tween.updateBounds()
        }
        ,
        i.prototype.setImagePosOffset = function(t) {
            this._imagePosOffset = t
        }
        ,
        i.prototype.setImagePos = function(t) {
            this.elementSymbol.transform.t.y = t + this._imagePosOffset
        }
        ,
        i.prototype.setImageCrop = function(t) {
            this.bgCropRect.a.y = this.bgRect.a.y + .5 * this.bgRect.s.y * (1 - t),
            this.bgCropRect.s.y = this.bgRect.s.y * t
        }
        ,
        i.prototype.setProductScale = function(t) {
            this.overlayImageSymbol.transform.s.y = this.overlayImageSymbol.transform.s.x = t
        }
        ,
        i
    }(t.ASegmentElement);
    t.ProductSegmentElement = e,
    t.ASegmentElement.Factory.addClass("product", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this),
            this.circles = [],
            this.onTweenCompleteBind = this.onTweenComplete.bind(this),
            this.parentSymbol = i,
            this.tween = new t.Tween,
            this.tween.addEventListener(t.TweenEvent.COMPLETE, this.onTweenCompleteBind),
            this.transform.t = s;
            for (var o, r, a, h = 0, l = 16; l > h; )
                o = 80 * h,
                r = new t.CanvasShapeSymbol(new t.Circle(new t.Vec(Math.round(12 * Math.random()) - 6,Math.round(12 * Math.random()) - 6),10)),
                r.setCompositeOperation("lighten"),
                r.transform.t.x = 32 * Math.random() - 16,
                r.transform.t.y = 32 * Math.random() - 16,
                a = r.setAlpha.bind(r),
                this.tween.add(new t.FunctionRender(a,0,.1,o,1200,t.Ease.ExpoOut)),
                this.tween.add(new t.FunctionRender(a,.1,0,o + 1200,4400,t.Ease.QuintIn)),
                this.tween.add(new t.VectorPropertyRender(r.transform.s,t.Vec.FromZero(),new t.Vec(2,2),o,5600,t.Ease.QuadOut)),
                r.setFillColor("#00be6b"),
                r.setFillColor("#90d6d5"),
                r.setAlpha(0),
                this.addChild(r),
                this.circles.push(r),
                h++;
            i.addChildAt(this, 0),
            this.tween.play()
        }
        return __extends(i, e),
        i.prototype.addCallback = function(t) {
            this.callback = t
        }
        ,
        i.prototype.onTweenComplete = function(t) {
            this.callback(this)
        }
        ,
        i.prototype.destroy = function() {
            this.tween.removeEventListener(t.TweenEvent.COMPLETE, this.onTweenCompleteBind),
            this.tween.destroy(),
            this.parentSymbol.removeChild(this);
            for (var i = this.circles.length; i--; )
                this.circles[i].destroy();
            this.tween = this.parentSymbol = null ,
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.CanvasSymbolContainer);
    t.CanvasMapImpact = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n, o) {
            e.call(this, new t.OffsetableShape(new t.Path)),
            this.curvesData = [],
            this.curves = [],
            this.tweens = [],
            this.impacts = [],
            this.setAlphaBind = this.setAlpha.bind(this),
            this.updateColorBind = this.updateColor.bind(this),
            this.onTweenCompleteBind = this.onTweenComplete.bind(this),
            this.onImpactCompleteBind = this.onImpactComplete.bind(this),
            this.canvas = s,
            this.color = n;
            var r = t.ColorUtility.StringToRGB(n);
            this.alphaColor = r.toRGBA(0).toString(),
            this.parentSymbol = o,
            this.impact = i.impact !== !1,
            this.setAlpha(0),
            this.setLineCap("round"),
            this.offsetPath = this.shape,
            this.path = this.offsetPath.shape;
            for (var a, h, l = 0, d = i.curves.length; d > l; )
                a = i.curves[l],
                this.curvesData.push({
                    a: new t.Vec(a[0],a[1]),
                    aC: new t.Vec(a[2],a[3]),
                    bC: new t.Vec(a[4],a[5]),
                    b: new t.Vec(a[6],a[7])
                }),
                h = t.CubicBezier.FromZero(),
                this.curves.push(h),
                this.path.add(h),
                l++;
            var u = i.repeat || 0
              , p = i.repeatDelay || 0
              , c = i.duration || 4e3;
            u += 1;
            var y = i.start || 0;
            l = 0;
            for (var m; l++ < u; )
                m = new t.FunctionTween(this.updateColorBind,0,1,y,c,t.Ease.SineIn),
                this.tweens.push(m),
                m = new t.FunctionTween(this.setAlphaBind,0,1,100 + y,500,t.Ease.CubicOut),
                this.tweens.push(m),
                y += c,
                m = new t.FunctionTween(this.setAlphaBind,1,0,y - 1e3,1e3,t.Ease.CubicIn),
                m.addEventListener(t.TweenEvent.START, this.onTweenCompleteBind),
                this.tweens.push(m),
                y += p
        }
        return __extends(i, e),
        i.prototype.getTweens = function() {
            return this.tweens
        }
        ,
        i.prototype.setSize = function(t, e) {
            this.mapSize = t,
            this.mapPos = e;
            var i = Math.max(Math.round(this.mapSize.x / 400), 2);
            this.setLineWidth(i);
            for (var s, n, o = 0, r = this.curves.length; r > o; )
                s = this.curvesData[o],
                n = this.curves[o],
                n.a = s.a.multiply(this.mapSize),
                n.aC = s.aC.multiply(this.mapSize),
                n.bC = s.bC.multiply(this.mapSize),
                n.b = s.b.multiply(this.mapSize),
                o++
        }
        ,
        i.prototype.updateColor = function(e) {
            var i = 1.4 * e - .25;
            this.offsetPath.setOffset(0, t.MathUtility.Limit(i, 0, 1)),
            this.offsetPath.update();
            var s = this.path.getPointAt(i)
              , n = this.canvas.pixelDensity
              , o = .1 * this.mapSize.x * n
              , r = s.x * n
              , a = s.y * n;
            this.gradient = this.canvas.context.createRadialGradient(r, a, 2 * n, r, a, o),
            this.gradient.addColorStop(0, this.color),
            this.gradient.addColorStop(1, this.alphaColor),
            this.setLineColor(this.gradient)
        }
        ,
        i.prototype.onTweenComplete = function(e) {
            if (this.impact === !0) {
                var i = this.curves[this.curves.length - 1].b
                  , s = new t.CanvasMapImpact(this.parentSymbol,i,this.color);
                s.addCallback(this.onImpactCompleteBind),
                this.impacts.push(s)
            }
        }
        ,
        i.prototype.onImpactComplete = function(e) {
            t.ArrayUtility.Remove(this.impacts, e),
            e.destroy()
        }
        ,
        i.prototype.destroy = function() {
            for (var t = 0, i = this.impacts.length; i > t; )
                this.impacts[t++].destroy();
            this.impacts = [],
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.CanvasShapeSymbol);
    t.CanvasMapPath = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function s(s, n, o, r) {
            e.call(this, new t.Path(!0,!0)),
            this.curvesData = [],
            this.curves = [],
            this.canvas = n,
            this.color = o,
            this.parentSymbol = r,
            this.setFillColor(o),
            this.setLineColor("red"),
            this.path = this.shape;
            var a, h, l = 0, d = s.steps.length, u = 0, p = [];
            for (u = 0,
            h = s.steps[0].length; h > u; ) {
                for (var c = [], y = 4; y--; )
                    c.push([]);
                p.push(c),
                u++
            }
            for (; d > l; ) {
                for (a = s.steps[l],
                u = 0,
                h = a.length,
                g; h > u; ) {
                    g = a[u];
                    for (var m = 0; 4 > m; )
                        p[u][m].push(new t.Vector(g[2 * m],g[2 * m + 1])),
                        m++;
                    u++
                }
                l++
            }
            u = 0,
            h = p.length;
            for (var f, g; h > u; )
                g = p[u],
                f = new t.CubicBezier(new i(g[0]),new i(g[1]),new i(g[2]),new i(g[3])),
                this.curves.push(f),
                this.path.add(f),
                u++
        }
        return __extends(s, e),
        s.prototype.setSize = function(t, e) {
            this.mapSize = t,
            this.mapPos = e;
            for (var i, s = 0, n = this.curves.length; n > s; )
                i = this.curves[s],
                i.a.setSize(t),
                i.aC.setSize(t),
                i.bC.setSize(t),
                i.b.setSize(t),
                s++
        }
        ,
        s.prototype.setProgress = function(t) {
            for (var e, i = 0, s = this.curves.length; s > i; )
                e = this.curves[i],
                e.a.setProgress(t),
                e.aC.setProgress(t),
                e.bC.setProgress(t),
                e.b.setProgress(t),
                i++
        }
        ,
        s.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        }
        ,
        s
    }(t.CanvasShapeSymbol);
    t.CanvasMapZone = e;
    var i = function(e) {
        function i(i) {
            e.call(this, 0, 0),
            this.current = t.Vec.FromZero(),
            this.data = i
        }
        return __extends(i, e),
        i.prototype.setProgress = function(e) {
            var i = this.data.length - 1;
            e = t.MathUtility.Limit(e, 0, i);
            var s = Math.floor(e)
              , n = Math.min(i, s + 1)
              , o = e - s
              , r = this.data[s]
              , a = this.data[n];
            this.current.lerpCopy(r, a, o),
            this.copy(this.current),
            this.multiplyIn(this.mapSize)
        }
        ,
        i.prototype.setSize = function(t) {
            this.mapSize = t,
            this.copy(this.current),
            this.multiplyIn(this.mapSize)
        }
        ,
        i
    }(t.Vector)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, "map", s, n),
            this.mapFitDef = new t.FitDef(null ,null ,.5,.5),
            this.mapVerticalAlignment = .5,
            this.onImageErrorBind = this.onImageError.bind(this),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.setPagePosBind = this.setPagePos.bind(this),
            this.setDecriptionPosBind = this.setDescriptionPos.bind(this),
            this.transform = t.TransformMatrix.FromDefault(),
            this.descriptionConNode = t.HTML.Create("div", {
                "class": "descriptionCon"
            }),
            this.html.node.appendChild(this.descriptionConNode),
            this.descriptionNode = t.HTML.Create("div", {
                "class": "description"
            }),
            this.descriptionConNode.appendChild(this.descriptionNode),
            this.titleNode = t.HTML.Create("h2", {
                html: i.title
            }),
            this.descriptionNode.appendChild(this.titleNode),
            this.pNode = t.HTML.Create("p", {
                html: i.description
            }),
            this.pNode.style[t.css.name.OPACITY] = "0.5",
            this.descriptionNode.appendChild(this.pNode),
            this.pageCanvasSymbol = new t.CanvasSymbolContainer,
            this.pageCanvasSymbol.hide(),
            s.addChild(this.pageCanvasSymbol),
            this.bgRect = t.Rectangle.FromZero(),
            this.bgSymbol = new t.CanvasShapeSymbol(this.bgRect),
            this.bgSymbol.setFillColor(i.backgroundColor),
            this.pageCanvasSymbol.addChild(this.bgSymbol);
            var o = i.media;
            this.mapSourceSize = t.Vector.FromString(o.sourceSize),
            this.imageLoader = new t.ResponsiveImageRequest(o.url,this.mapSourceSize,t.FitDef.FromJSON(o)),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageLoader.addEventListener(t.RequestEvent.ERROR, this.onImageErrorBind),
            this.mapTexture = new t.Texture,
            this.mapSymbol = new t.CanvasSymbolContainer,
            this.pageCanvasSymbol.addChild(this.mapSymbol),
            this.mapTextureSymbol = new t.CanvasTextureSymbol(this.mapTexture),
            this.mapSymbol.addChild(this.mapTextureSymbol),
            this.overlayColor = i.overlayColor,
            this.overlaySymbol = new t.CanvasShapeSymbol(this.bgRect),
            this.overlaySymbol.setFillColor(this.overlayColor),
            this.pageCanvasSymbol.addChild(this.overlaySymbol),
            this.pagePosScroll = new t.FunctionRender(this.setPagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.pagePosScroll),
            this.descriptionPosScroll = new t.FunctionRender(this.setDecriptionPosBind,0,0,0,0,t.Ease.SineInOut),
            this.segmentWithin.add(this.descriptionPosScroll)
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            this.pageCanvasSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.pageCanvasSymbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            this.imageLoader.execute()
        }
        ,
        i.prototype.isOutsideLoadingBounds = function() {}
        ,
        i.prototype.scopeUpdateHandler = function(e, i) {
            var s = i;
            this.viewportSize = s.clone();
            var n = Math.round(.5 * i.y)
              , o = Math.round(i.y + n)
              , r = o + i.y;
            this.bgRect.s.x = s.x,
            this.bgRect.s.y = o,
            this.mapFrameSize = new t.Vec(i.x,.75 * i.y),
            this.mapFrameSize.x < 1e3 && (this.mapFrameSize.x *= 1.2),
            this.mapFrameSize.x > 1e3 && (this.mapFrameSize.x *= .9),
            this.imageLoader.setSize(this.mapFrameSize),
            this.mapRect = this.mapFitDef.toRectangle(this.imageLoader.getNeutralSize(), this.mapSourceSize),
            this.mapTextureSymbol.setSize(this.mapRect.s),
            this.mapSymbol.transform.t.x = .5 * (this.viewportSize.x - this.mapRect.s.x),
            this.mapSymbol.transform.t.y = .5 * this.viewportSize.y + (this.viewportSize.y - this.mapRect.s.y) * this.mapVerticalAlignment,
            this.html.node.style.height = o + "px",
            this._insideLoadBounds === !0 && this.imageLoader.execute(),
            this.pagePosScroll.set(i.y, -o, 0, r),
            this.descriptionPosScroll.set(0, 1, i.y, n),
            e.setHeight(o),
            this.segmentWithin.updateBounds()
        }
        ,
        i.prototype.computeSnapPoints = function(e) {
            var i = this.scopeCont.getGlobalOffset() + this.viewportSize.y;
            e.push(new t.SnapPoint(i,!1,!0,.25 * this.viewportSize.y));
            var i = this.scopeCont.getGlobalOffset() + 1.5 * this.viewportSize.y;
            e.push(new t.SnapPoint(i,!0,!1,.25 * this.viewportSize.y)),
            e.push(new t.SnapPoint(i,!1,!0,.125 * this.viewportSize.y))
        }
        ,
        i.prototype.onImageError = function(t) {}
        ,
        i.prototype.onImageComplete = function(t) {
            var e = this.imageLoader.getRealSize();
            this.mapTexture.set(t.target.data, e)
        }
        ,
        i.prototype.setPagePos = function(e) {
            this.transform.t.y = e,
            this.html.node.style[t.css.name.TRANSFORM] = this.transform.toString(),
            this.pageCanvasSymbol.transform.t.y = Math.round(e)
        }
        ,
        i.prototype.setDescriptionPos = function(e) {
            this.overlaySymbol.setAlpha(.75 * (1 - e)),
            this.titleNode.style[t.css.name.OPACITY] = 1 - e,
            this.pNode.style[t.css.name.OPACITY] = 1 - e,
            this.titleNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(t.Ease.CircIn(e, 0, .75 * -this.viewportSize.y, 1)) + "px)",
            this.pNode.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(t.Ease.CubicIn(e, 0, .5 * -this.viewportSize.y, 1)) + "px)"
        }
        ,
        i
    }(t.ASegment);
    t.MapSegment = e,
    t.ASegment.Factory.addClass("map", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.radius = 0,
            this.shapes = [],
            this.symbols = [],
            this.circles = [],
            this.coordinates = i,
            this.amount = 12;
            for (var n, o, r = 0; r < this.amount; )
                n = new t.Circle(t.Vec.FromZero(),0),
                this.shapes.push(n),
                o = new t.CanvasShapeSymbol(n),
                o.setFillColor(s),
                this.addChild(o),
                this.symbols.push(o),
                r++;
            this.tween = new t.FunctionTween(this.draw.bind(this),0,this.amount,0,6400,t.Ease.Linear),
            this.tween.makeLoop(),
            this.tween.play()
        }
        return __extends(i, e),
        i.prototype.setSize = function(t) {
            this.transform.t.set(this.coordinates.x * t.x, this.coordinates.y * t.y),
            this.radius = .05 * t.x
        }
        ,
        i.prototype.draw = function(e) {
            for (var i, s = 0, n = this.amount; n > s; )
                i = Math.max((e + s) % n / n, 0),
                this.shapes[s].r = i * this.radius,
                this.symbols[s].setAlpha(t.Ease.ExpoOut(i, 1, -1, 1)),
                s++
        }
        ,
        i.prototype.destroy = function() {
            this.tween.destroy(),
            e.prototype.destroy.call(this)
        }
        ,
        i
    }(t.CanvasSymbolContainer);
    t.SpeciesDeparture = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this),
            this.paths = [],
            this.index = i,
            this.data = s,
            this.htmlNode = t.HTML.Create("div", {
                "class": "item"
            });
            var n = t.HTML.Create("h4", {
                html: s.title
            });
            this.htmlNode.appendChild(n),
            this.htmlNode.addEventListener("click", this.onClicked.bind(this)),
            this.descNode = t.HTML.Create("p", {
                html: s.description
            })
        }
        return __extends(i, e),
        i.prototype.getIndex = function() {
            return this.index
        }
        ,
        i.prototype.onClicked = function(e) {
            this.dispatchEvent(new t.SSEvent("click",this))
        }
        ,
        i.prototype.onCompleteTween = function(e) {
            this.dispatchEvent(new t.SSEvent("complete",this))
        }
        ,
        i.prototype.assemble = function(e, i) {
            if (this.isAssembled !== !0) {
                this.tween = new t.Tween,
                this.tween.addEventListener(t.TweenEvent.COMPLETE, this.onCompleteTween.bind(this)),
                void 0 !== this.data.departure && (this.departure = new t.SpeciesDeparture(t.Vec.FromArray(this.data.departure),this.data.pathColor),
                i.addChild(this.departure));
                for (var s, n, o, r = 0, a = this.data.paths.length; a > r; ) {
                    for (s = new t.CanvasMapPath(this.data.paths[r],e,this.data.pathColor,i),
                    i.addChild(s),
                    this.paths.push(s),
                    n = s.getTweens(),
                    o = n.length; o--; )
                        this.tween.add(n[o]);
                    r++
                }
                this.isAssembled = !0,
                this.updateSize(),
                t.HTML.AddClass(this.htmlNode, "active"),
                t.HTML.AddClass(this.descNode, "active");
                var h = new t.Tween;
                h.addFunction(this.departure.setAlpha.bind(this.departure), 0, 1, 0, 500, t.Ease.Linear),
                h.makeAutoDestroy(),
                h.play()
            }
        }
        ,
        i.prototype.makeLoop = function() {
            this.tween.makeLoop()
        }
        ,
        i.prototype.disassemble = function(e) {
            if (this.isAssembled === !0) {
                this.tween.destroy(),
                this.tween = void 0,
                void 0 !== this.departure && (e.removeChild(this.departure),
                this.departure.destroy(),
                this.departure = void 0);
                for (var i = this.paths.length; i--; )
                    e.removeChild(this.paths[i]),
                    this.paths[i].destroy();
                this.isAssembled = !1,
                t.HTML.RemoveClass(this.htmlNode, "active"),
                t.HTML.RemoveClass(this.descNode, "active")
            }
        }
        ,
        i.prototype.play = function() {
            this.tween.play()
        }
        ,
        i.prototype.pause = function() {
            this.tween.pause()
        }
        ,
        i.prototype.setSize = function(t, e, i) {
            this.viewportSize = t,
            this.mapRect = e,
            this.mapSymbolX = i,
            this.isAssembled === !0 && this.updateSize()
        }
        ,
        i.prototype.updateSize = function() {
            for (var e = 0, i = this.paths.length, s = this.mapRect.s, n = new t.Vec(this.mapSymbolX,.5 * (this.viewportSize.y - s.y)); i > e; )
                this.paths[e++].setSize(s, n);
            void 0 !== this.departure && this.departure.setSize(s)
        }
        ,
        i.prototype.getHTML = function() {
            return this.htmlNode
        }
        ,
        i.prototype.getDescriptionHTML = function() {
            return this.descNode
        }
        ,
        i
    }(t.EventDispatcher);
    t.SpeciesMapGroup = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.groups = [],
            this.onGroupClickedBind = this.onGroupClicked.bind(this),
            this.onGroupCompleteBind = this.onGroupComplete.bind(this),
            this.mapVerticalAlignment = .33,
            this.infoCon = t.HTML.Create("div", {
                "class": "speciesInfo"
            }),
            this.groupCon = t.HTML.Create("div", {
                "class": "groupCon"
            }),
            this.infoCon.appendChild(this.groupCon),
            this.descriptionCon = t.HTML.Create("div", {
                "class": "descCon"
            }),
            this.infoCon.appendChild(this.descriptionCon),
            this.html.node.appendChild(this.infoCon);
            for (var o, r = 0, a = i.groups.length; a > r; )
                o = new t.SpeciesMapGroup(r,i.groups[r]),
                this.groups.push(o),
                o.addEventListener("click", this.onGroupClickedBind),
                r++
        }
        return __extends(i, e),
        i.prototype.onGroupClicked = function(t) {
            this.changeGroup(t.target.getIndex(), !0)
        }
        ,
        i.prototype.onGroupComplete = function(t) {
            var e = t.target.getIndex() + 1;
            e >= this.groups.length && (e = 0),
            this.changeGroup(e)
        }
        ,
        i.prototype.assemble = function() {
            if (this.isAssembled !== !0) {
                this.isAssembled = !0;
                for (var t, e = 0, i = 0, s = this.groups.length; s > i; )
                    this.groupCon.appendChild(this.groups[i].getHTML()),
                    t = this.groups[i].getDescriptionHTML(),
                    this.descriptionCon.appendChild(t),
                    e = Math.max(e, t.offsetHeight),
                    i++;
                this.descriptionCon.style.height = e + "px",
                this.changeGroup(0)
            }
        }
        ,
        i.prototype.changeGroup = function(e, i) {
            this.currentGroupIndex === e ? i === !0 && (this.currentGroup.makeLoop(),
            this.currentGroup.removeEventListener("complete", this.onGroupCompleteBind)) : (void 0 !== this.currentGroup && (this.currentGroup.removeEventListener("complete", this.onGroupCompleteBind),
            this.currentGroup.disassemble(this.mapSymbol),
            this.currentGroup = void 0),
            this.currentGroupIndex = e,
            this.currentGroup = this.groups[e],
            this.currentGroup.assemble(this.canvas, this.mapSymbol),
            i === !0 ? this.currentGroup.makeLoop() : this.currentGroup.addEventListener("complete", this.onGroupCompleteBind),
            this.groupCon.style[t.css.name.TRANSFORM] = "translateX(" + -(this.currentGroup.getHTML().offsetLeft + .5 * this.currentGroup.getHTML().offsetWidth) + "px)",
            this.currentGroup.play())
        }
        ,
        i.prototype.disassemble = function() {
            if (this.isAssembled === !0) {
                this.isAssembled = !1;
                for (var t = 0, e = this.groups.length; e > t; )
                    this.groupCon.removeChild(this.groups[t++].getHTML());
                void 0 !== this.currentGroup && (this.currentGroup.disassemble(this.mapSymbol),
                this.currentGroup = void 0,
                this.currentGroupIndex = null )
            }
        }
        ,
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.isLoadedOnce === !0 && this.assemble()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.disassemble()
        }
        ,
        i.prototype.onImageComplete = function(t) {
            e.prototype.onImageComplete.call(this, t);
            for (var i = 0, s = this.groups.length; s > i; )
                this.groups[i++].setSize(this.viewportSize, this.mapRect, this.mapSymbol.transform.t.x);
            this.html.isVisible() === !0 && this.isLoadedOnce !== !0 && this.assemble(),
            this.isLoadedOnce = !0
        }
        ,
        i
    }(t.MapSegment);
    t.SpeciesMapSegment = e,
    t.ASegment.Factory.addClass("speciesmap", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function s(t, s) {
            e.call(this),
            this.dots = [],
            this.totalAmountOfYears = 0,
            this.noteCon = s;
            for (var n, o = 0, r = t.length; r > o; )
                n = new i(o,t[o]),
                this.dots.push(n),
                this.addChild(n),
                this.totalAmountOfYears = this.totalAmountOfYears + n.getLength(),
                o++
        }
        return __extends(s, e),
        s.prototype.getSteps = function() {
            return this.dots.length
        }
        ,
        s.prototype.setSize = function(e) {
            var i, s = Math.round(.12 * e.x), n = e.x - .24 * e.x;
            i = e.x > t.Config.BREAKPOINT ? Math.round(n / this.totalAmountOfYears) : Math.round(1024 / this.totalAmountOfYears),
            this.stepWidth = i;
            var o = 0;
            e.x > t.Config.BREAKPOINT ? this.transform.o.x = -s : this.transform.o.x = -(.5 * e.x),
            this.transform.o.y = Math.round(.5 * s);
            for (var r = 0, a = this.dots.length; a > r; )
                this.dots[r].setSize(e, i),
                this.dots[r].transform.t.x = o,
                o += this.dots[r].getLength() * i,
                r++
        }
        ,
        s.prototype.setProgress = function(e) {
            for (var i = 0, s = this.dots.length; s > i; )
                this.dots[i++].setProgress(e);
            if (this.currentStepI !== Math.round(e)) {
                this.currentStepI = Math.round(e);
                var n = this.dots[this.currentStepI].getNote();
                void 0 === n ? this.noteCon.style[t.css.name.OPACITY] = 0 : (this.noteCon.innerHTML = n,
                this.noteCon.style[t.css.name.OPACITY] = 1)
            }
        }
        ,
        s.prototype.getOffsetForStep = function(t) {
            for (var e = 0, i = 0, s = this.dots.length; s > i; )
                e += this.dots[i].getLength() * this.stepWidth * Math.min(Math.max(t - i, 0), 1),
                i++;
            return e
        }
        ,
        s.prototype.getStepAtX = function(t) {
            var e = 0;
            t += .5 * this.stepWidth;
            for (var i = 0, s = this.dots.length; s > i; ) {
                if (e += this.dots[i].getLength() * this.stepWidth,
                e > t)
                    return i;
                i++
            }
            return i
        }
        ,
        s.prototype.destroy = function() {
            for (var t, e = 0, i = this.dots.length; i > e; )
                t = this.dots[e],
                this.removeChild(t),
                t.destroy(),
                e++
        }
        ,
        s
    }(t.CanvasSymbolContainer);
    t.Timeline = e;
    var i = function(e) {
        function i(i, s) {
            e.call(this),
            this.smallCircles = [],
            this.index = i,
            this.label = s.label,
            this.note = s.note,
            this.length = s.length,
            this.labelSymbol = new t.CanvasTextSymbol(this.label,"Arial",14),
            this.labelSymbol.setFontWeight("lighter"),
            this.labelSymbol.setAlign("center"),
            this.labelSymbol.setBaseline("bottom"),
            this.labelSymbol.transform.t.y = -18,
            this.addChild(this.labelSymbol),
            this.line = t.Line.FromZero(),
            this.lineSymbol = new t.CanvasShapeSymbol(this.line),
            this.lineSymbol.setLineWidth(2),
            this.addChild(this.lineSymbol),
            this.circle = new t.Circle(t.Vec.FromZero(),0),
            this.circleSymbol = new t.CanvasShapeSymbol(this.circle),
            this.circleSymbol.setFillColor("#a1d9d0"),
            this.circleSymbol.setLineWidth(8),
            this.addChild(this.circleSymbol);
            for (var n, o, r = 1, a = this.length; a > r; )
                n = new t.Circle(t.Vec.FromZero(),3),
                o = new t.CanvasShapeSymbol(n),
                this.addChild(o),
                this.smallCircles.push(o),
                r++
        }
        return __extends(i, e),
        i.prototype.getLength = function() {
            return this.length
        }
        ,
        i.prototype.getNote = function() {
            return this.note
        }
        ,
        i.prototype.setSize = function(t, e) {
            this.line.b.x = e * this.length;
            for (var i = 0, s = this.smallCircles.length; s > i; )
                this.smallCircles[i].shape.a.x = e * (i + 1),
                i++
        }
        ,
        i.prototype.setProgress = function(t) {
            var e = t - this.index;
            Math.abs(e) < .5 ? this.select() : this.deselect();
            var s = i.notSelcRGB.blendRGB(i.selcRGB, Math.max(1 - Math.abs(e), 0)).toString();
            this.lineSymbol.setLineColor(s);
            for (var n = this.smallCircles.length; n--; )
                this.smallCircles[n].setFillColor(s);
            var o = 1 - Math.abs(Math.min(Math.max(e, -1), 1));
            this.circle.r = 4 + 4 * o,
            this.labelSymbol.transform.s.x = this.labelSymbol.transform.s.y = 1 + .5 * o
        }
        ,
        i.prototype.select = function() {
            this.isSelected !== !0 && (this.isSelected = !0,
            this.labelSymbol.setColor("#ffffff"),
            this.circleSymbol.setLineColor("#ffffff"))
        }
        ,
        i.prototype.deselect = function() {
            this.isSelected !== !1 && (this.isSelected = !1,
            this.labelSymbol.setColor("#aec4c1"),
            this.circleSymbol.setLineColor("#aec4c1"))
        }
        ,
        i.prototype.destroy = function() {
            for (var t = 0, e = this.smallCircles.length; e > t; )
                this.removeChild(this.smallCircles[t]),
                this.smallCircles[t].destroy(),
                t++;
            this.removeChild(this.labelSymbol),
            this.labelSymbol.destroy(),
            this.removeChild(this.lineSymbol),
            this.lineSymbol.destroy()
        }
        ,
        i.notSelcRGB = t.ColorUtility.StringToRGB("#aec4c1"),
        i.selcRGB = new t.RGB(255,255,255),
        i
    }(t.CanvasSymbolContainer)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function s(s, n) {
            e.call(this),
            this.zones = [],
            this.index = s,
            this.data = n,
            this.color = this.data.zoneColor,
            this.htmlNode = t.HTML.Create("div", {
                "class": "item"
            });
            var o = t.HTML.Create("div", {
                "class": "area",
                html: n.title
            });
            if (o.style.color = this.color,
            this.htmlNode.appendChild(o),
            void 0 !== this.data.sulphur) {
                var r = t.HTML.Create("div", {
                    "class": "detail"
                });
                this.valueS = new i(this.data.sulphur,!1,"%",this.color),
                r.appendChild(this.valueS.getHTML()),
                this.htmlNode.appendChild(r)
            }
        }
        return __extends(s, e),
        s.prototype.getIndex = function() {
            return this.index
        }
        ,
        s.prototype.assemble = function(e, i) {
            if (this.isAssembled !== !0) {
                for (var s, n = 0, o = this.data.zones.length; o > n; )
                    s = new t.CanvasMapZone(this.data.zones[n],e,this.data.zoneColor,i),
                    i.addChildAt(s, 0),
                    this.zones.push(s),
                    n++;
                this.isAssembled = !0,
                this.updateSize()
            }
        }
        ,
        s.prototype.disassemble = function(t) {
            if (this.isAssembled === !0) {
                for (var e = this.zones.length; e--; )
                    t.removeChild(this.zones[e]),
                    this.zones[e].destroy();
                this.isAssembled = !1
            }
        }
        ,
        s.prototype.setSize = function(t, e, i) {
            this.viewportSize = t,
            this.mapRect = e,
            this.mapSymbolX = i,
            this.isAssembled === !0 && this.updateSize()
        }
        ,
        s.prototype.updateSize = function() {
            for (var e = 0, i = this.zones.length, s = this.mapRect.s, n = new t.Vec(this.mapSymbolX,.5 * (this.viewportSize.y - s.y)); i > e; )
                this.zones[e++].setSize(s, n)
        }
        ,
        s.prototype.setProgress = function(e) {
            void 0 !== this.valueS && this.valueS.setProgress(e),
            void 0 !== this.valueN && this.valueN.setProgress(e);
            var i = this.data.alpha.length - 1;
            e = t.MathUtility.Limit(e, 0, i);
            for (var s = Math.floor(e), n = Math.min(i, s + 1), o = e - s, r = this.data.alpha[s], a = this.data.alpha[n], h = t.MathUtility.Lerp(r, a, o), l = 0, d = this.zones.length; d > l; )
                this.zones[l].setProgress(e),
                this.zones[l].setAlpha(h),
                l++
        }
        ,
        s.prototype.getHTML = function() {
            return this.htmlNode
        }
        ,
        s
    }(t.EventDispatcher);
    t.ZoneMapGroup = e;
    var i = function(e) {
        function i(i, s, n, o) {
            e.call(this, t.HTML.Create("h3")),
            this.opacity = 0,
            this.numberInstances = [],
            this.node.style.color = o,
            this.node.style[t.css.name.OPACITY] = "0",
            this.unit = n,
            this.data = i,
            s === !0 && this.numberInstances.push(new t.HTMLNumberTransitionNumber(this.node,.1,0,99.9)),
            this.numberInstances.push(new t.HTMLNumberTransitionNumber(this.node,1,0,99.9)),
            this.node.appendChild(t.HTML.Create("div", {
                html: "."
            })),
            this.numberInstances.push(new t.HTMLNumberTransitionNumber(this.node,10,0,99.9)),
            this.node.appendChild(t.HTML.Create("div", {
                html: n
            }))
        }
        return __extends(i, e),
        i.prototype.setProgress = function(e) {
            var i = this.data.length - 1;
            e = t.MathUtility.Limit(e, 0, i);
            var s = Math.floor(e)
              , n = Math.min(i, s + 1)
              , o = e - s
              , r = this.data[s]
              , a = this.data[n]
              , h = t.MathUtility.Lerp(r, a, o);
            1 === this.opacity && h > 15 ? (this.node.style[t.css.name.OPACITY] = "0",
            this.opacity = 0) : 0 === this.opacity && 15 > h && (this.node.style[t.css.name.OPACITY] = "1",
            this.opacity = 1);
            for (var l = 0, d = this.numberInstances.length; d > l; )
                this.numberInstances[l].setLimitRange(a, r),
                this.numberInstances[l].setProgress(h),
                l++
        }
        ,
        i
    }(t.HTMLSymbol)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.stepX = 0,
            this.amountOfSteps = 0,
            this.groups = [],
            this.stepWidth = 100,
            this.updateStepXBind = this.updateStepX.bind(this),
            this.stepX = i.defaultStep || 0,
            this.mapVerticalAlignment = .75,
            this.scrollViewportHandler = new t.ViewportManeuverHandler(this),
            this.scrollViewportHandler.setSnapHandlerX(this.getSnapPositionX.bind(this)),
            this.touchListener = new t.DirectionalTouchListener(this.html.node,this.scrollViewportHandler,!0,!1,!0),
            this.touchListener.preventDefaultTouch = !0,
            this.mouseWheelListener = new t.MouseWheelListener(this.html.node,this.scrollViewportHandler,!0,!1),
            this.keyboardListener = new t.ViewportKeyboardListener(this.html.node,this.scrollViewportHandler,!0,!1,!0);
            for (var o, r = 0, a = this.data.groups.length; a > r; )
                o = new t.ZoneMapGroup(r,this.data.groups[r]),
                this.groups.push(o),
                r++
        }
        return __extends(i, e),
        i.prototype.assemble = function() {
            if (this.isAssembled !== !0) {
                this.isAssembled = !0,
                this.groupCon = t.HTML.Create("div", {
                    "class": "detailsCon"
                });
                for (var e = 0, i = this.groups.length; i > e; )
                    this.groups[e].assemble(this.canvas, this.mapSymbol),
                    this.groupCon.appendChild(this.groups[e].getHTML()),
                    e++;
                this.noteCon = t.HTML.Create("div", {
                    "class": "note"
                }),
                this.groupCon.appendChild(this.noteCon),
                this.html.node.appendChild(this.groupCon),
                this.interactionNode = t.HTML.Create("div", {
                    "class": "interaction"
                }),
                this.interactionNode.addEventListener("click", this.onClick.bind(this)),
                this.html.node.appendChild(this.interactionNode),
                this.amountOfSteps = this.data.steps.length,
                this.timeline = new t.Timeline(this.data.steps,this.noteCon),
                this.timeline.transform.t.y = 1.5 * this.viewportSize.y,
                this.timeline.setSize(this.viewportSize),
                this.scrollViewportHandler.setXLimit(0, (this.timeline.getSteps() - 1) * this.stepWidth),
                this.scrollViewportHandler.setPageMovementH(this.stepWidth / this.viewportSize.x),
                this.pageCanvasSymbol.addChild(this.timeline),
                this.stepXDynamic = new t.DynamicFunctionTween(this.updateStepXBind,5,1),
                this.scrollViewportHandler.jumpToX(this.stepX * this.stepWidth),
                this.setPositionX(this.stepX * this.stepWidth),
                this.touchListener.enable(),
                this.mouseWheelListener.enable(),
                this.keyboardListener.enable()
            }
        }
        ,
        i.prototype.disassemble = function() {
            if (this.isAssembled === !0) {
                this.isAssembled = !1,
                this.html.node.removeChild(this.groupCon),
                this.stepXDynamic.destroy(),
                this.stepXDynamic = void 0;
                for (var t = 0, e = this.groups.length; e > t; )
                    this.groups[t].disassemble(this.mapSymbol),
                    this.groupCon.removeChild(this.groups[t].getHTML()),
                    t++;
                this.pageCanvasSymbol.removeChild(this.timeline),
                this.timeline.destroy(),
                this.timeline = void 0,
                this.groupCon = null ,
                this.touchListener.disable(),
                this.mouseWheelListener.disable(),
                this.keyboardListener.disable()
            }
        }
        ,
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.isLoadedOnce === !0 && this.assemble()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.disassemble()
        }
        ,
        i.prototype.scopeUpdateHandler = function(t, i) {
            e.prototype.scopeUpdateHandler.call(this, t, i),
            void 0 !== this.timeline && (this.timeline.transform.t.y = 1.5 * this.viewportSize.y,
            this.timeline.setSize(this.viewportSize),
            this.scrollViewportHandler.setXLimit(0, (this.timeline.getSteps() - 1) * this.stepWidth),
            this.scrollViewportHandler.setPageMovementH(this.stepWidth / this.viewportSize.x))
        }
        ,
        i.prototype.onImageComplete = function(t) {
            e.prototype.onImageComplete.call(this, t);
            for (var i = 0, s = this.groups.length; s > i; )
                this.groups[i++].setSize(this.viewportSize, this.mapRect, this.mapSymbol.transform.t.x);
            this.html.isVisible() === !0 && this.isLoadedOnce !== !0 && this.assemble(),
            this.isLoadedOnce = !0
        }
        ,
        i.prototype.setDescriptionPos = function(i) {
            e.prototype.setDescriptionPos.call(this, i);
            for (var s, n, o = 0, r = this.groups.length; r > o; )
                n = Math.min(Math.max(1.25 * (i - .2 * o), 0), 1),
                s = this.groups[o].getHTML(),
                s.style[t.css.name.OPACITY] = n.toFixed(2),
                s.style[t.css.name.TRANSFORM] = "translateY(" + Math.round(t.Ease.SineOut(n, .25 * this.viewportSize.y, .25 * -this.viewportSize.y, 1)) + "px)",
                o++
        }
        ,
        i.prototype.getSnapPositionX = function(t, e) {
            return Math.round((t + e) / this.stepWidth) * this.stepWidth
        }
        ,
        i.prototype.getWidth = function() {
            return this.viewportSize.x
        }
        ,
        i.prototype.getHeight = function() {
            return this.viewportSize.y
        }
        ,
        i.prototype.setPosition = function(t) {}
        ,
        i.prototype.getPosition = function() {
            return new t.Vec(this.stepX * this.stepWidth,0)
        }
        ,
        i.prototype.setPositionX = function(e) {
            this.stepX = Math.min(Math.max(e / this.stepWidth, 0), this.amountOfSteps),
            this.viewportSize.x > t.Config.BREAKPOINT ? this.timeline.transform.t.x = 0 : this.timeline.transform.t.x = -this.timeline.getOffsetForStep(this.stepX),
            this.timeline.setProgress(this.stepX),
            this.stepXDynamic.moveTo(this.stepX)
        }
        ,
        i.prototype.setPositionY = function(t) {}
        ,
        i.prototype.updateStepX = function(t) {
            for (var e = 0, i = this.groups.length; i > e; )
                this.groups[e++].setProgress(t);
            this.canvas.forceUpdate()
        }
        ,
        i.prototype.onClick = function(e) {
            if (this.viewportSize.x > t.Config.BREAKPOINT) {
                var i = e.clientX + this.timeline.transform.o.x - this.timeline.transform.t.x
                  , s = this.timeline.getStepAtX(i);
                this.scrollViewportHandler.moveToX(s * this.stepWidth, 0, 0)
            } else
                e.clientX < .44 * this.viewportSize.x ? this.scrollViewportHandler.movePageRight() : e.clientX > .56 * this.viewportSize.x && this.scrollViewportHandler.movePageLeft()
        }
        ,
        i
    }(t.MapSegment);
    t.ZoneMapSegment = e,
    t.ASegment.Factory.addClass("zonemap", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function() {
        function e(e, i, s) {
            this.onRenderInsideBind = this.onRenderInside.bind(this),
            this.onRenderOutsideBind = this.onRenderOutside.bind(this),
            this.render = new t.Tween,
            this.render.addEventListener(t.RenderWithinEvent.INSIDE, this.onRenderInsideBind),
            this.render.addEventListener(t.RenderWithinEvent.BEFORE, this.onRenderOutsideBind),
            this.render.addEventListener(t.RenderWithinEvent.AFTER, this.onRenderOutsideBind),
            this.canvas = i,
            this.marginTop = e.marginTop || 0,
            this.marginBottom = e.marginBottom || 0,
            this.depth = void 0 !== e.depth ? e.depth : 1
        }
        return e.prototype.onRenderInside = function() {
            this.isInside()
        }
        ,
        e.prototype.onRenderOutside = function() {
            this.isOutside()
        }
        ,
        e.prototype.isInside = function() {}
        ,
        e.prototype.isOutside = function() {}
        ,
        e.prototype.makeRight = function() {
            this.right = !0
        }
        ,
        e.prototype.getWithin = function() {
            return this.render
        }
        ,
        e.prototype.setOffset = function(t) {
            this.render.setOffset(t)
        }
        ,
        e.prototype.computeSize = function(t, e) {}
        ,
        e.prototype.computeScope = function(t, e) {}
        ,
        e.Factory = new t.RuntimeFactory,
        e
    }();
    t.ASegmentExtra = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this._rectPosOffset = 0,
            this.setScrollOffsetBind = this.setScrollOffset.bind(this),
            this.setScrollPosBind = this.setScrollPos.bind(this),
            this.rectSize = t.Vector.FromString(i.sourceSize),
            this.fitDef = t.FitDef.FromJSON(i),
            this.rectangle = new t.Rectangle(new t.Vec(0,0),new t.Vec(0,0)),
            this.rectSymbol = new t.CanvasShapeSymbol(this.rectangle),
            this.rectSymbol.fillColor = i.color,
            this.rectSymbol.hide(),
            s.addChild(this.rectSymbol),
            this.scrollOffsetInRender = this.render.addFunction(this.setScrollOffsetBind, 0, 0, 0, 0, t.Ease.ExpoOut),
            this.scrollOffsetOutRender = this.render.addFunction(this.setScrollOffsetBind, 0, 0, 0, 0, t.Ease.ExpoIn),
            this.scrollPosRender = this.render.addFunction(this.setScrollPosBind, 0, 0, 0, 0, t.Ease.Linear)
        }
        return __extends(i, e),
        i.prototype.isInside = function() {
            this.rectSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            this.rectSymbol.hide()
        }
        ,
        i.prototype.computeSize = function(t, e) {
            this.viewportSize = e
        }
        ,
        i.prototype.computeScope = function(e, i) {
            var s = new t.Vec(e.x,i);
            this.rectangle.copy(this.fitDef.toRectangle(s, this.rectSize)),
            this.right === !0 && this.viewportSize.x > t.Config.BREAKPOINT ? this.rectSymbol.transform.t.x = Math.round(e.x) : this.rectSymbol.transform.t.x = 0;
            var n = e.getAxisLength(t.Y)
              , o = n + i
              , r = this.marginTop * i
              , a = r + o
              , h = -i
              , l = n
              , d = Math.min(i, .5 * n)
              , u = (i - this.rectangle.s.y,
            i * this.depth)
              , p = u;
            l -= .5 * u;
            var c = .5 * d;
            this.scrollOffsetInRender.set(c, 0, 0, d),
            this.scrollOffsetOutRender.set(0, -c, a - d, d),
            this.scrollPosRender.set(l + r, h + p, 0, r + o),
            this.render.updateBounds()
        }
        ,
        i.prototype.setScrollOffset = function(t) {
            this._rectPosOffset = t
        }
        ,
        i.prototype.setScrollPos = function(t) {
            this.rectSymbol.transform.t.y = t + this._rectPosOffset
        }
        ,
        i
    }(t.ASegmentExtra);
    t.RectangleExtra = e,
    t.ASegmentExtra.Factory.addClass("rectangle", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s) {
            e.call(this, new t.Path(!0)),
            this.amountOfWaves = 4,
            this.waves = [],
            this.tweenProgress = 0,
            this.index = i,
            this.waveSize = t.Vec.FromZero();
            for (var n, o = 0, r = this.amountOfWaves; r > o; )
                n = new t.Wave(o,this.shape),
                this.waves.push(n),
                o++;
            this.color = t.ColorUtility.StringToRGB(s)
        }
        return __extends(i, e),
        i.prototype.addToTween = function(e) {
            e.add(new t.FunctionRender(this.setTweenProgress.bind(this),0,1,.1 + .05 * this.index,.6,t.Ease.CubicInOut)),
            e.add(new t.FunctionRender(this.setAlpha.bind(this),0,.8,.1 + .05 * this.index,.6,t.Ease.SineOut)),
            this.widthRender = new t.FunctionRender(this.setLineWidth.bind(this),0,0,.1 + .05 * this.index,.5,t.Ease.SineIn),
            e.add(this.widthRender)
        }
        ,
        i.prototype.addToWaveTween = function(e) {
            var i = new t.FunctionRender(this.onWaveUpdate.bind(this),0,t.MathUtility.DOUBLE_PI,0,2e3,t.Ease.Linear);
            e.add(i)
        }
        ,
        i.prototype.setSize = function(t, e) {
            this.size = t;
            var i = Math.round(t.y);
            e = Math.round(e),
            this.transform.t.x = e,
            this.transform.t.y = e + Math.floor(this.index * i + Math.floor(.5 * i)),
            i % 2 === 0 ? this.widthRender.to = i : this.index % 2 === 0 ? this.widthRender.to = i + 1 : this.widthRender.to = i - 1,
            this.waveSize.set(t.x / this.amountOfWaves, .3 * t.y * this.tweenProgress);
            for (var s = 0; s < this.amountOfWaves; )
                this.waves[s++].setSize(this.waveSize)
        }
        ,
        i.prototype.setTweenProgress = function(e) {
            this.tweenProgress = 1 - e,
            this.setLineColor(this.color.blendRGB(t.Config.DARK_BLUE_RGB, this.tweenProgress).toString())
        }
        ,
        i.prototype.onWaveUpdate = function(t) {
            this.progress = t;
            for (var e = 0, i = this.amountOfWaves; i > e; )
                this.waves[e++].setProgress(t);
            this.waveSize.set(this.size.x / this.amountOfWaves, .3 * this.size.y * this.tweenProgress)
        }
        ,
        i
    }(t.CanvasShapeSymbol);
    t.OverlayLine = e
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.imagePos = 0,
            this.onImageErrorBind = this.onImageError.bind(this),
            this.onImageCompleteBind = this.onImageComplete.bind(this),
            this.setImagePosBind = this.setImagePos.bind(this),
            this.updateImageBind = this.updateImage.bind(this);
            var o = i.media;
            this.imageSize = t.Vector.FromString(o.sourceSize),
            this.fitDef = t.FitDef.FromJSON(o),
            this.imageLoader = new t.ResponsiveImageRequest(o.url,this.imageSize,this.fitDef),
            this.imageLoader.addEventListener(t.RequestEvent.COMPLETE, this.onImageCompleteBind),
            this.imageLoader.addEventListener(t.RequestEvent.ERROR, this.onImageErrorBind),
            this.imageTexture = new t.Texture,
            this.cloud1Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud1Symbol.hide(),
            this.cloud1Symbol.setAlpha(.6),
            s.addChild(this.cloud1Symbol),
            this.cloud2Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud2Symbol.hide(),
            this.cloud2Symbol.setAlpha(.6),
            s.addChild(this.cloud2Symbol),
            this.cloud3Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud3Symbol.hide(),
            this.cloud3Symbol.setAlpha(.5),
            s.addChild(this.cloud3Symbol),
            this.cloud4Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud4Symbol.hide(),
            this.cloud4Symbol.setAlpha(.6),
            s.addChild(this.cloud4Symbol),
            this.cloud5Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud5Symbol.hide(),
            this.cloud5Symbol.setAlpha(.6),
            s.addChild(this.cloud5Symbol),
            this.cloud6Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud6Symbol.hide(),
            this.cloud6Symbol.setAlpha(.6),
            s.addChild(this.cloud6Symbol),
            this.cloud7Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud7Symbol.hide(),
            this.cloud7Symbol.setAlpha(.4),
            s.addChild(this.cloud7Symbol),
            this.cloud8Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud8Symbol.hide(),
            this.cloud8Symbol.setAlpha(.55),
            s.addChild(this.cloud8Symbol),
            this.cloud9Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud9Symbol.hide(),
            this.cloud9Symbol.setAlpha(.4),
            s.addChild(this.cloud9Symbol),
            this.cloud0Symbol = new t.CanvasTextureSymbol(this.imageTexture),
            this.cloud0Symbol.hide(),
            this.cloud0Symbol.setAlpha(.6),
            s.addChild(this.cloud0Symbol),
            this.imagePosScroll = new t.FunctionRender(this.setImagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.imagePosScroll),
            this.imagePosUpdater = new t.FunctionTween(this.updateImageBind,0,t.MathUtility.DOUBLE_PI,0,9e4,t.Ease.Linear),
            this.imagePosUpdater.makeLoop()
        }
        return __extends(i, e),
        i.prototype.onImageError = function(t) {}
        ,
        i.prototype.onImageComplete = function(t) {
            this.imageTexture.set(t.target.data, this.imageLoader.getRealSize());
            var e = this.imageLoader.getNeutralSize();
            this.cloud1Symbol.transform.o.x = .5 * e.x,
            this.cloud2Symbol.transform.o.x = .5 * e.x,
            this.cloud3Symbol.transform.o.x = .5 * e.x,
            this.cloud4Symbol.transform.o.x = .5 * e.x,
            this.cloud5Symbol.transform.o.x = .5 * e.x,
            this.cloud6Symbol.transform.o.x = .5 * e.x,
            this.cloud7Symbol.transform.o.x = .5 * e.x,
            this.cloud8Symbol.transform.o.x = .5 * e.x,
            this.cloud9Symbol.transform.o.x = .5 * e.x,
            this.cloud0Symbol.transform.o.x = .5 * e.x,
            this.cloud1Symbol.transform.o.y = .5 * e.y,
            this.cloud2Symbol.transform.o.y = .5 * e.y,
            this.cloud3Symbol.transform.o.y = .5 * e.y,
            this.cloud4Symbol.transform.o.y = .5 * e.y,
            this.cloud5Symbol.transform.o.y = .5 * e.y,
            this.cloud6Symbol.transform.o.y = .5 * e.y,
            this.cloud7Symbol.transform.o.y = .5 * e.y,
            this.cloud8Symbol.transform.o.y = .5 * e.y,
            this.cloud9Symbol.transform.o.y = .5 * e.y,
            this.cloud0Symbol.transform.o.y = .5 * e.y
        }
        ,
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.imagePosUpdater.play(),
            this.cloud1Symbol.show(),
            this.cloud2Symbol.show(),
            this.cloud3Symbol.show(),
            this.cloud4Symbol.show(),
            this.cloud5Symbol.show(),
            this.cloud6Symbol.show(),
            this.cloud7Symbol.show(),
            this.cloud8Symbol.show(),
            this.cloud9Symbol.show(),
            this.cloud0Symbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.imagePosUpdater.stop(),
            this.cloud1Symbol.hide(),
            this.cloud2Symbol.hide(),
            this.cloud3Symbol.hide(),
            this.cloud4Symbol.hide(),
            this.cloud5Symbol.hide(),
            this.cloud6Symbol.hide(),
            this.cloud7Symbol.hide(),
            this.cloud8Symbol.hide(),
            this.cloud9Symbol.hide(),
            this.cloud0Symbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            e.prototype.isInsideLoadingBounds.call(this),
            this.imageLoader.execute()
        }
        ,
        i.prototype.scopeUpdateHandler = function(i, s) {
            this.viewportSize = s;
            var n = new t.Vector(s.x,s.y);
            this.imageLoader.setSize(n),
            this._insideLoadBounds === !0 && this.imageLoader.execute();
            var o = s.x / this.aspectRatio
              , r = s.y + o
              , a = 0
              , h = -o + .5 * o
              , l = s.y + .5 * o
              , d = .25 * (this.cloud1Symbol.getSize().y - o)
              , u = this.imageLoader.getNeutralSize().x
              , p = s.x + 2 * u;
            this.cloud1Symbol.transform.t.x = .1 * p - .5 * u,
            this.cloud2Symbol.transform.t.x = .2 * p - .5 * u,
            this.cloud3Symbol.transform.t.x = .3 * p - .5 * u,
            this.cloud4Symbol.transform.t.x = .4 * p - .5 * u,
            this.cloud5Symbol.transform.t.x = .5 * p - .5 * u,
            this.cloud6Symbol.transform.t.x = .6 * p - .5 * u,
            this.cloud7Symbol.transform.t.x = .7 * p - .5 * u,
            this.cloud8Symbol.transform.t.x = .8 * p - .5 * u,
            this.cloud9Symbol.transform.t.x = .9 * p - .5 * u,
            this.cloud0Symbol.transform.t.x = 0 - .5 * u,
            this.imagePosScroll.set(l - d, h + d, a, r),
            e.prototype.scopeUpdateHandler.call(this, i, s)
        }
        ,
        i.prototype.setImagePos = function(t) {
            this.imagePos = t
        }
        ,
        i.prototype.updateImage = function(t) {
            var e = this.imagePos
              , i = this.imageLoader.getNeutralSize().x
              , s = this.viewportSize.x + i;
            this.cloud1Symbol.transform.t.x < .5 * -i && (this.cloud1Symbol.transform.t.x += s),
            this.cloud1Symbol.transform.t.x -= .24,
            this.cloud2Symbol.transform.t.x < .5 * -i && (this.cloud2Symbol.transform.t.x += s),
            this.cloud2Symbol.transform.t.x -= .2,
            this.cloud3Symbol.transform.t.x < .5 * -i && (this.cloud3Symbol.transform.t.x += s),
            this.cloud3Symbol.transform.t.x -= .3,
            this.cloud4Symbol.transform.t.x < .5 * -i && (this.cloud4Symbol.transform.t.x += s),
            this.cloud4Symbol.transform.t.x -= .26,
            this.cloud5Symbol.transform.t.x < .5 * -i && (this.cloud5Symbol.transform.t.x += s),
            this.cloud5Symbol.transform.t.x -= .3,
            this.cloud6Symbol.transform.t.x < .5 * -i && (this.cloud6Symbol.transform.t.x += s),
            this.cloud6Symbol.transform.t.x -= .28,
            this.cloud7Symbol.transform.t.x < .5 * -i && (this.cloud7Symbol.transform.t.x += s),
            this.cloud7Symbol.transform.t.x -= .22,
            this.cloud8Symbol.transform.t.x < .5 * -i && (this.cloud8Symbol.transform.t.x += s),
            this.cloud8Symbol.transform.t.x -= .3,
            this.cloud9Symbol.transform.t.x < .5 * -i && (this.cloud9Symbol.transform.t.x += s),
            this.cloud9Symbol.transform.t.x -= .28,
            this.cloud0Symbol.transform.t.x < .5 * -i && (this.cloud0Symbol.transform.t.x += s),
            this.cloud0Symbol.transform.t.x -= 0,
            this.cloud1Symbol.transform.t.y = e + .025 * -this.segmentHeight,
            this.cloud1Symbol.transform.r = 4 + e / 4600 + t,
            this.cloud2Symbol.transform.t.y = e + .05 * -this.segmentHeight,
            this.cloud2Symbol.transform.r = -1 + e / 3650 + t + .2,
            this.cloud3Symbol.transform.t.y = e + .01 * this.segmentHeight,
            this.cloud3Symbol.transform.r = e / 5700 + t + .9,
            this.cloud4Symbol.transform.t.y = e + .1 * this.segmentHeight,
            this.cloud4Symbol.transform.r = e / 4200 + t + .4,
            this.cloud5Symbol.transform.t.y = e + .025 * this.segmentHeight,
            this.cloud5Symbol.transform.r = -e / 5200 + t + 1.2,
            this.cloud6Symbol.transform.t.y = e + .05 * -this.segmentHeight,
            this.cloud6Symbol.transform.r = e / 6300 + t + .6,
            this.cloud7Symbol.transform.t.y = e + .025 * -this.segmentHeight,
            this.cloud7Symbol.transform.r = e / 4800 + t + 1.8,
            this.cloud8Symbol.transform.t.y = e + .075 * this.segmentHeight,
            this.cloud8Symbol.transform.r = e / 5700 + t,
            this.cloud9Symbol.transform.t.y = e + .025 * this.segmentHeight,
            this.cloud9Symbol.transform.r = e / 4400 + t + .8,
            this.cloud0Symbol.transform.t.y = e + .05 * -this.segmentHeight,
            this.cloud0Symbol.transform.r = e / 6100 + t + 1.2
        }
        ,
        i
    }(t.HeadlineSegment);
    t.HeadlineWClouds = e,
    t.ASegment.Factory.addClass("headlineWithClouds", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.imagePos = 0,
            this.extraRotation = 0,
            this.onImagesCompleteBind = this.onImagesComplete.bind(this),
            this.setImagePosBind = this.setImagePos.bind(this),
            this.imagesTaskQueue = new t.TaskQueueAsync,
            this.imagesTaskQueue.addEventListener(t.RequestEvent.COMPLETE, this.onImagesCompleteBind),
            this.crabTexture = new t.Texture,
            this.crabTextureSymbol = new t.CanvasTextureSymbol(this.crabTexture),
            this.crabTextureSymbol.hide(),
            s.addChild(this.crabTextureSymbol),
            this.crabImageLoader = new t.ResponsiveImageRequest(i.crab.url,t.Vector.FromString(i.crab.sourceSize),t.FitDef.FromJSON(i.crab)),
            this.imagesTaskQueue.addTask(this.crabImageLoader),
            this.imagePosScroll = new t.FunctionRender(this.setImagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.imagePosScroll)
        }
        return __extends(i, e),
        i.prototype.onImagesComplete = function(t) {
            this.crabTexture.set(this.crabImageLoader.data, this.crabImageLoader.getRealSize());
            var e = this.crabImageLoader.getNeutralSize();
            this.crabTextureSymbol.transform.o.x = .5 * e.x,
            this.crabTextureSymbol.transform.o.y = .5 * e.y
        }
        ,
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.crabTextureSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.crabTextureSymbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            e.prototype.isInsideLoadingBounds.call(this),
            this.imagesTaskQueue.execute()
        }
        ,
        i.prototype.scopeUpdateHandler = function(i, s) {
            e.prototype.scopeUpdateHandler.call(this, i, s),
            this.viewportSize = s;
            var n = new t.Vector(.8 * s.x,.8 * s.y);
            this.crabImageLoader.setSize(n),
            this._insideLoadBounds === !0 && this.imagesTaskQueue.execute();
            var o = s.y + this.segmentHeight
              , r = 0
              , a = r + o
              , h = -this.segmentHeight
              , l = s.y + this.segmentHeight;
            this.imagePosScroll.set(l, h, r - .25 * this.segmentHeight, a),
            this.textPosScroll.bounds.start += .1 * this.segmentHeight,
            this.textPosScroll.bounds.end += .1 * this.segmentHeight
        }
        ,
        i.prototype.setImagePos = function(t) {
            var e = .75 * this.viewportSize.x;
            this.crabTextureSymbol.transform.t.x = e,
            this.crabTextureSymbol.transform.t.y = t
        }
        ,
        i
    }(t.HeadlineSegment);
    t.HeadlineWCrab = e,
    t.ASegment.Factory.addClass("headlineWithCrab", e)
}(ss || (ss = {}));
var ss;
!function(t) {
    var e = function(e) {
        function i(i, s, n) {
            e.call(this, i, s, n),
            this.imagePos = 0,
            this.extraRotation = 0,
            this.onImagesCompleteBind = this.onImagesComplete.bind(this),
            this.setImagePosBind = this.setImagePos.bind(this),
            this.tweenRotation = 0,
            this.currentRotation = 0,
            this.updateImageBind = this.updateImage.bind(this),
            this.updateImageExtraRotationBind = this.updateImageExtraRotation.bind(this),
            this.updatePropBind = this.updateProp.bind(this),
            this.imagesTaskQueue = new t.TaskQueueAsync,
            this.imagesTaskQueue.addEventListener(t.RequestEvent.COMPLETE, this.onImagesCompleteBind),
            this._propellerCoreTexture = new t.Texture,
            this._propellerShadowTexture = new t.Texture,
            this._propellerCoreTextureSymbol = new t.CanvasTextureSymbol(this._propellerCoreTexture),
            this._propellerShadowTextureSymbol = new t.CanvasTextureSymbol(this._propellerShadowTexture),
            this._propellerCoreTextureSymbol.hide(),
            this._propellerShadowTextureSymbol.hide(),
            s.addChild(this._propellerShadowTextureSymbol),
            s.addChild(this._propellerCoreTextureSymbol),
            this._propellerCoreLoader = new t.ResponsiveImageRequest(i.propeller.url,t.Vector.FromString(i.propeller.sourceSize),t.FitDef.FromJSON(i.propeller)),
            this._propellerShadowLoader = new t.ResponsiveImageRequest(i.shadow.url,t.Vector.FromString(i.shadow.sourceSize),t.FitDef.FromJSON(i.shadow)),
            this.imagesTaskQueue.addTask(this._propellerCoreLoader),
            this.imagesTaskQueue.addTask(this._propellerShadowLoader),
            this.imagePosScroll = new t.FunctionRender(this.setImagePosBind,0,0,0,0,t.Ease.Linear),
            this.segmentWithin.add(this.imagePosScroll),
            this.imagePosUpdater = new t.FunctionTween(this.updateImageBind,0,t.MathUtility.DOUBLE_PI,0,8e4,t.Ease.Linear),
            this.imagePosUpdater.makeLoop(),
            this.imageExtraRotationIn = new t.FunctionTween(this.updateImageExtraRotationBind,0,0,0,0,t.Ease.SineOut),
            this.imageExtraRotationOut = new t.FunctionTween(this.updateImageExtraRotationBind,0,0,0,0,t.Ease.SineIn),
            this.propDynamic = new t.DynamicFunctionTween(this.updatePropBind,20,1),
            this.segmentWithin.add(this.imageExtraRotationIn),
            this.segmentWithin.add(this.imageExtraRotationOut)
        }
        return __extends(i, e),
        i.prototype.onImagesComplete = function(t) {
            this._propellerCoreTexture.set(this._propellerCoreLoader.data, this._propellerCoreLoader.getRealSize()),
            this._propellerShadowTexture.set(this._propellerShadowLoader.data, this._propellerShadowLoader.getRealSize());
            var e = this._propellerCoreLoader.getNeutralSize()
              , i = this._propellerShadowLoader.getNeutralSize();
            this._propellerCoreTextureSymbol.transform.o.x = .5 * e.x,
            this._propellerCoreTextureSymbol.transform.o.y = .5 * e.y,
            this._propellerShadowTextureSymbol.transform.o.x = .5 * i.x,
            this._propellerShadowTextureSymbol.transform.o.y = .5 * i.y
        }
        ,
        i.prototype.isInside = function() {
            e.prototype.isInside.call(this),
            this.imagePosUpdater.play(),
            this._propellerCoreTextureSymbol.show(),
            this._propellerShadowTextureSymbol.show()
        }
        ,
        i.prototype.isOutside = function() {
            e.prototype.isOutside.call(this),
            this.imagePosUpdater.stop(),
            this._propellerCoreTextureSymbol.hide(),
            this._propellerShadowTextureSymbol.hide()
        }
        ,
        i.prototype.isInsideLoadingBounds = function() {
            e.prototype.isInsideLoadingBounds.call(this),
            this.imagesTaskQueue.execute()
        }
        ,
        i.prototype.scopeUpdateHandler = function(i, s) {
            e.prototype.scopeUpdateHandler.call(this, i, s),
            this.viewportSize = s;
            var n = new t.Vector(s.x,s.y);
            this._propellerCoreLoader.setSize(n),
            this._propellerShadowLoader.setSize(n),
            this._insideLoadBounds === !0 && this.imagesTaskQueue.execute();
            var o = s.y + this.segmentHeight
              , r = 0
              , a = r + o
              , h = -this.segmentHeight
              , l = s.y + this.segmentHeight
              , d = .5 * o;
            this.imageExtraRotationIn.set(-.001, 0, r, d),
            this.imageExtraRotationOut.set(0, .001, a - d, d),
            this.imagePosScroll.set(l, h, r - .1 * this.segmentHeight, a),
            this.textPosScroll.set(l, h, .1 * this.segmentHeight, a)
        }
        ,
        i.prototype.setImagePos = function(t) {
            var e = .5 * this.viewportSize.x;
            this._propellerCoreTextureSymbol.transform.t.x = e,
            this._propellerShadowTextureSymbol.transform.t.x = 1.1 * e,
            this._propellerCoreTextureSymbol.transform.t.y = t,
            this._propellerShadowTextureSymbol.transform.t.y = 1.06 * t + .1 * e,
            this.propDynamic.moveTo(t * -.004)
        }
        ,
        i.prototype.updateImage = function(t) {
            var e = t - this.tweenRotation;
            this.tweenRotation = t,
            this.currentRotation += e * -this.viewportHandler.getDirection(),
            this._propellerCoreTextureSymbol.transform.r = this.currentRotation + this.extraRotation,
            this._propellerShadowTextureSymbol.transform.r = this.currentRotation + this.extraRotation
        }
        ,
        i.prototype.updateImageExtraRotation = function(t) {}
        ,
        i.prototype.updateProp = function(t) {
            this.extraRotation = t
        }
        ,
        i
    }(t.HeadlineSegment);
    t.HeadlineWProp = e,
    t.ASegment.Factory.addClass("headlineWithPropeller", e)
}(ss || (ss = {}));
