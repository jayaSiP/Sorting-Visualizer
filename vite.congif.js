import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: [
            '@mui/material',
            '@mui/system',
            '@mui/styled-engine',
            '@mui/utils',
            // Add other MUI packages you use
        ],
    },
    ssr: {
        noExternal: [
            '@mui/material',
            '@mui/system',
            '@mui/styled-engine',
            '@mui/utils',
            // same packages here for SSR build
        ],
    },
});
