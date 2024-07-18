import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";




// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'TailM3',
    social: {
      github: 'https://github.com/CodeRagnarok07/TailM3'
    },
    sidebar: [{
      label: 'Guides',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          slug: 'guides/example'
        }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }
    ],
    customCss: [
      // Ruta a tus estilos base de Tailwind:
      './src/styles/tailwind.css',
    ],

  }), tailwind({
    // Desactiva los estilos base predeterminados:
    applyBaseStyles: false,
  })]
});