import react from '@vitejs/plugin-react';

export default {
    plugins: [react()],
    optimizeDeps: {
        include: ['@mui/material', '@mui/system', '@mui/icons-material'],
    },
};
