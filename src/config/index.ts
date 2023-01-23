import pkg from '../../package.json'

const config={
  app: {
    name: pkg.name,
    version: pkg.version,
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
  },
  dataBase: {
    url: process.env.MONGO_URL
  },
  services: {
    sample: { url: 'http://localhost:3000' }
  }
}

export default config