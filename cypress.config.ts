import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // event listeners
    },
    baseUrl: 'https://the-internet.herokuapp.com',  
  },
});
