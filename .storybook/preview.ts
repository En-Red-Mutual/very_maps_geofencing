import type { Preview } from "@storybook/react";
import '../src/index.css'; // Asume que tus estilos de Tailwind están en src/index.css
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values:[
        {name: 'red', value: 'red'},
        {name: 'blue', value: 'blue'},
        {name: 'green', value: 'green'},
        {name:'light',value: 'white'},
        {name:'dark',value: 'black'},
      ]
    },
  },
};

export default preview;
