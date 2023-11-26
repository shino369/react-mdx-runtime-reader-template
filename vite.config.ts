import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react-swc'
import mdx from "@mdx-js/rollup"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx(),
    react(),     
  ],
  base: process.env.GITHUB_PAGES
  ? '/react-mdx-runtime-reader-template/' // レポジトリ名を設定
  : './',
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
},
})
