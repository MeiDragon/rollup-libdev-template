import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      dir: undefined,
      format: 'esm',
      file: './lib/index.esm.js'
    },
    {
      dir: undefined,
      format: 'cjs',
      file: './lib/index.cjs.js'
    },
    {
      dir: undefined,
      format: 'umd',
      name: 'LibName',
      file: './lib/index.umd.js',
    },
    {
      dir: undefined,
      format: 'iife',
      name: 'LibName',
      file: './lib/index.min.js',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser()
  ]
})