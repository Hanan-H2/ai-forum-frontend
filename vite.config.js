import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  if (command === 'build' && mode === 'production' && !env.VITE_API_BASE_URL?.trim()) {
    throw new Error(
      'VITE_API_BASE_URL must be set to the deployed backend origin before building the frontend.',
    )
  }

  return {
    plugins: [react()],
  }
})
