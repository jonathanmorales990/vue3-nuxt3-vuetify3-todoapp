import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f1f1f1',
    surface: '#a1a1a1',
    primary: '#be001f',
    secondary: '#d79e62',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
    	defaultTheme: 'defaultTheme',
    	themes: {
      	defaultTheme,
    	}
  	}
  })

  nuxtApp.vueApp.use(vuetify)
})
