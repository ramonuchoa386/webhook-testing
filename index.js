const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');

let app;

async function bootstrap() {
  app = await NestFactory.create(AppModule);
  await app.init();
  return app;
}

module.exports = async (req, res) => {
  if (!app) {
    app = await bootstrap();
  }
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp(req, res);
};;