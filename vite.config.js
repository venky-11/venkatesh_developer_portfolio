//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
  //plugins: [react()],
//})


//import { defineConfig } from 'vite';

//export default defineConfig({
 // base: '/<venkatesh_developer_portfolio>/',  // Replace <repo-name> with your actual repository name
//});


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/venkatesh_developer_portfolio/', // Ensure this matches your GitHub Pages URL
  plugins: [react()],
});

