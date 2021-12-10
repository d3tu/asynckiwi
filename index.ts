interface Next<T> {
    promise: Promise<T>;
    resolve: Function;
}

export class AsyncKiwi extends Array<Next<void>> {
    constructor() {
        super();
    }

    wait(): Promise<void> {
        let resolve: Function;
        const next = this.length ? this[this.length - 1].promise : Promise.resolve(),
            promise = new Promise<void>(res => {
                resolve = res;
            });
        super.push({ promise, resolve });
        return next;
    }

    next(): void {
        const next = super.shift();
        if (next) next.resolve();
    }
}