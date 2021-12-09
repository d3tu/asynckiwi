```typescript
import { AsyncKiwi } from 'asynckiwi';

const asyncKiwi = new AsyncKiwi(),
    sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

(async() => {
    await asyncKiwi.wait();
    try {
        await sleep(1000);
    } finally {
        asyncKiwi.next();
    }
})();
```