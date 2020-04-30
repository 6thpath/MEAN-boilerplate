import 'dotenv/config'
import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import chalk from 'chalk'

import { connectMongoDB } from './utils/mongoose'

async function main() {
  // Connect to database
  await connectMongoDB(process.env.MONGO_URL)

  // Initializes application
  const app = express()

  // Enable cors
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true
    })
  )

  const httpServer = createServer(app)

  // Listen to HTTP and WebSocket server
  const PORT = process.env.PORT || process.env.API_PORT
  httpServer.listen({ port: PORT }, () => {
    console.log(`
Platform                : ${process.platform}
Processor architecture  : ${process.arch}
pid                     : ${process.pid}
Current directory       : ${process.cwd()}

${chalk.greenBright.bold(`Server ready`)}`)
  })
}

main()
