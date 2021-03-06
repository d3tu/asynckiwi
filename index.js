"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncKiwi = void 0;
class AsyncKiwi extends Array {
    constructor() {
        super();
    }
    wait() {
        let resolve;
        const next = this.length ? this[this.length - 1].promise : Promise.resolve(), promise = new Promise(res => {
            resolve = res;
        });
        super.push({ promise, resolve });
        return next;
    }
    next() {
        const next = super.shift();
        if (next)
            next.resolve();
    }
}
exports.AsyncKiwi = AsyncKiwi;
