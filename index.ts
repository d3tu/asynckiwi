interface Next<T> {
    promise: Promise<T>;
    resolve: Function;
}

export class AsyncKiwi extends Array<Next<void>> {
    constructor() {
        super();
    }

    wait(): Promise<void> {
        const next = this[this.length - 1].promise || Promise.resolve(),
            promise = new Promise<void>(resolve => {
                super.push({ promise, resolve });
            });

        return next;
    }

    next(): void {
        const next = super.shift();
        if (next) next.resolve();
    }
}