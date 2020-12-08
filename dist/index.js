(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.QuantumStringBuffer = factory());
}(this, (function () { 'use strict';

    var StringBuffer = (function () {
        function StringBuffer() {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            this.buffers = [];
            this.length = 0;
            this.splChar = '';
            if (arg.length > 0) {
                for (var i = 0, iLen = arg.length; i < iLen; i++) {
                    this.Append(arg[i]);
                }
            }
        }
        StringBuffer.prototype.Restore = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            this.buffers = [];
            this.Append(arg[0]);
            this.length = this.buffers.join(this.splChar).length;
        };
        StringBuffer.prototype.Append = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            if (arg.length >= 1) {
                this.length += arg[0].length;
                this.buffers[this.buffers.length] = arg[0];
                return true;
            }
            else {
                return false;
            }
        };
        StringBuffer.prototype.Remove = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            var _iStart = arg[0];
            var _iEnd = arg[1];
            if (arg.length >= 2 && !isNaN(_iStart) && !isNaN(_iEnd)) {
                var sReturn = this.buffers.join(this.splChar);
                sReturn = sReturn.substring(0, _iStart) + sReturn.substring(_iStart + _iEnd, sReturn.length);
                this.Restore(sReturn);
                return sReturn;
            }
            else {
                return this.buffers.join(this.splChar);
            }
        };
        StringBuffer.prototype.Clear = function () {
            this.buffers = [];
            this.length = 0;
            return true;
        };
        StringBuffer.prototype.Replace = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            if (arg.length >= 2) {
                var sReturn = this.buffers.join(this.splChar).replace(arg[0], arg[1]);
                this.Restore(sReturn);
                return sReturn;
            }
            else {
                return this.buffers.join(this.splChar);
            }
        };
        StringBuffer.prototype.IndexOf = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            if (arg.length >= 1) {
                return this.buffers.join(this.splChar).indexOf(arg[0]);
            }
            else {
                return -1;
            }
        };
        StringBuffer.prototype.ToString = function () {
            return this.buffers.join(this.splChar);
        };
        StringBuffer.prototype.Length = function () {
            if (this.splChar.length > 0 && (!this.IsEmpty())) {
                return this.length + (this.splChar.length * (this.buffers.length - 1));
            }
            else {
                return this.length;
            }
        };
        StringBuffer.prototype.IsEmpty = function () {
            return this.buffers.length <= 0;
        };
        return StringBuffer;
    }());

    return StringBuffer;

})));
