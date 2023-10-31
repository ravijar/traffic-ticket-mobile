// native-base-theme.js
import { extendTheme } from 'native-base';

const theme = extendTheme({
    // Customize your theme here
    colors: {
      primary: {
        500: '#007AFF', // Example primary color
      },
      // Add more color variations as needed
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'full',
        },
        variants: {
          // Customize button variants
          solid: {
            bg: 'primary.500',
            color: 'white',
          },
        },
      },
      // Customize other components here
    },
    // Add more theme customization options as needed
  });

export default theme;
