import { setupCache } from '../src/cache/create';
import { buildMemoryStorage } from '../src/storage/memory';
import { buildWebStorage } from '../src/storage/web-api';

describe('test bundle imports', () => {
  it('test development bundle imports', async () => {
    const oldWarn = console.warn;
    console.warn = jest.fn();

    const bundle = await import('../src/index.development');

    expect(console.warn).toHaveBeenCalledTimes(1);

    expect(bundle.setupCache).toBe(setupCache);
    expect(bundle.buildMemoryStorage).toBe(buildMemoryStorage);
    expect(bundle.buildWebStorage).toBe(buildWebStorage);

    console.warn = oldWarn;
  });
});
