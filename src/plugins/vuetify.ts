/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "main",
    themes: {
      "main": {
        dark: true,
        colors: {
          background: "000814",
          surface: "001f36",
          primary: "ffc40c",
          secondary: "003566",
          tertiary: "daa520",
        }
      }
    }
  },
});
