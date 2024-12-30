import { $fetch } from '@nuxt/test-utils/e2e'

const html = await $fetch('/')
console.log(html);