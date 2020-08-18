import { Middleware } from '~/node_modules/@nuxt/types'

const redirectHome: Middleware = function (ctx) {
  ctx.redirect('/')
}

export default redirectHome
