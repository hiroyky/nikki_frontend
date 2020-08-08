import express from 'express'

export const customDomainAdaptorMiddleware = (req: express.Request, _: express.Response, next: express.NextFunction) => {
  const apigatewayHeader = req.headers['x-apigateway-event']
  if (apigatewayHeader === undefined) {
    next()
    return
  }

  req.url = req.originalUrl = `/${req.url}`.replace('//', '/')

  next()
}
