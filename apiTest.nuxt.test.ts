import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'

describe('POST /api/test', async () => {
    await setup();

    test('contains 200 statusCode', async () => {
        const response = await $fetch('/api/test', {
            method: 'POST'
        });
        expect(response).toHaveProperty('statusCode', 200);
    })
})
