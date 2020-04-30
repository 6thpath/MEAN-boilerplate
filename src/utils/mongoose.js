import mongoose from 'mongoose'
import chalk from 'chalk'

export async function connectMongoDB(mongoUrl) {
  mongoose.set('useCreateIndex', true)
  return await mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() =>
      console.log(chalk.greenBright.bold(`Database connected (URL: ${chalk.blueBright(mongoUrl)})`))
    )
    .catch((err) => console.error(err))
}
