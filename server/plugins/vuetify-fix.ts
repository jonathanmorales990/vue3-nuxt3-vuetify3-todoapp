import type { RenderResponse } from 'nitropack'

export default defineNitroPlugin((nitroApp: any) => {
  nitroApp.hooks.hook("render:response", (response: any) => {
    response.body = response.body.replace(new RegExp("/_nuxt/\0", 'g'), "/_nuxt/")
  });
});