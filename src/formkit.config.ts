//@ts-nocheck
import { genesisIcons } from '@formkit/icons'
import { generateClasses } from '@formkit/themes'
import myTailwindTheme from '../tailwind-theme.js'

import { createAutoAnimatePlugin } from '@formkit/addons'
import { fr } from '@formkit/i18n'
import type { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  locales: { fr },
  locale: 'fr',
  config: {
    // pass our theme object to generateClasses
    classes: generateClasses(myTailwindTheme),
  },
    plugins: [
    createAutoAnimatePlugin(
      { 
        /* configuration AutoAnimate optionnelle */
        // par défaut :
        duration: 250,
        easing: 'ease-in-out',
        delay: 0,
      },
      { 
        /* objet cibles d'animation optionnel */
        // par défaut :
        global: ['outer', 'inner'],
        form: ['form'],
        repeater: ['items'],
      }
    )
  ],
  icons: {
    // include supporting icons from @formkit/icons
    ...genesisIcons,
  },

}

export default config