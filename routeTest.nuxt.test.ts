import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'

describe('test', async () => {
    await setup();

    test('contains hellot as string', async () => {
        console.log("test");
        const html = await $fetch('/');
        console.log(html);
        expect(html).toContain('Hellot');
    })

    test('contains hello as string', async () => {
        console.log("test");
        const html = await $fetch('/');
        console.log(html);
        expect(html).toContain('Hello');
    })
})
