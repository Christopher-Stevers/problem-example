import { defineNuxtConfig } from 'nuxt3';

import Markdown from 'vite-plugin-md'
export default defineNuxtConfig({
    head: {
      title: 'my website title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
    },
    vite: {
      plugins: [
       Markdown()]
    },
    server:{port: "3001"},
})
