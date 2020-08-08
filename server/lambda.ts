import http from 'http'
import { APIGatewayEvent, Context } from 'aws-lambda'
import awsServerlessExpress from 'aws-serverless-express'
import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import config from '../nuxt.config'
import { customDomainAdaptorMiddleware } from './middleware'

const app = express()

async function initApp () {
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(customDomainAdaptorMiddleware)
  app.use(nuxt.render)

  return app
}

let server: http.Server
const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]

export function handler (event: APIGatewayEvent, context: Context) {
  initApp().then((app) => {
    if (server === undefined) {
      server = awsServerlessExpress.createServer(app, undefined, binaryMimeTypes)
    }
    awsServerlessExpress.proxy(server, event, context)
  })
}
