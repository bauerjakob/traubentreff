import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://bauerjakob.github.io',
    base: '/weintreff',
    integrations: [sitemap(), image({
        serviceEntryPoint: "@astrojs/image/sharp"
    }), compress({
        css: false,
        html: {
            removeComments: true,
            removeAttributeQuotes: false
        },
        img: false,
        js: false,
        svg: true
    }), prefetch()],
    vite: {
        build: {
            assetsInlineLimit: 0
        }
    },
},);
