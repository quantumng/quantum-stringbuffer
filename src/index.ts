export default class StringBuffer {
    private buffers: Array<string> = [];
    private length: number = 0;
    private splChar: string = '';

    constructor(...arg: any[]) {
        if (arg.length > 0) {
            for (var i = 0, iLen = arg.length; i < iLen; i++) {
                this.Append(arg[i]);
            }
        }
    }

    Restore(...arg: any[]) {
        this.buffers = [];
        this.Append(arg[0]);
        this.length = this.buffers.join(this.splChar).length;
    }

    Append(...arg: any[]) {
        if (arg.length >= 1) {
            this.length += arg[0].length;
            this.buffers[this.buffers.length] = arg[0];
            return true;
        } else {
            return false;
        }
    }

    Remove(...arg: any[]) {
        var _iStart = arg[0];
        var _iEnd = arg[1];
        if (arg.length >= 2 && !isNaN(_iStart) && !isNaN(_iEnd)) {
            var sReturn = this.buffers.join(this.splChar);
            sReturn = sReturn.substring(0, _iStart) + sReturn.substring(_iStart + _iEnd, sReturn.length);
            this.Restore(sReturn);
            return sReturn;
        } else {
            return this.buffers.join(this.splChar);
        }
    }

    Clear() {
        this.buffers = [];
        this.length = 0;
        return true;
    }

    Replace(...arg: any[]) {
        if (arg.length >= 2) {
            var sReturn = this.buffers.join(this.splChar).replace(arg[0], arg[1]);
            this.Restore(sReturn);
            return sReturn;
        } else {
            return this.buffers.join(this.splChar);
        }
    }

    IndexOf(...arg: any[]) {
        if (arg.length >= 1) {
            return this.buffers.join(this.splChar).indexOf(arg[0]);
        } else {
            return -1;
        }
    }

    ToString() {
        return this.buffers.join(this.splChar);
    }

    Length() {
        if (this.splChar.length > 0 && (!this.IsEmpty())) {
            return  this.length + (this.splChar.length * (this.buffers.length - 1));
        } else {
            return this.length;
        }
    }

    IsEmpty() {
        return this.buffers.length <= 0;
    }
};