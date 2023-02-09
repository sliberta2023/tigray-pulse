/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const path = require('path');
const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  // app.useGlobalPipes(new ValidationPipe());
  // app.enableCors();
  // app.use((req, res, next) => {
  //   console.log('Everything passes through here...');
  //   if (req.url.indexOf('/api/') > -1) {
  //     next();
  //   } else {
  //     res.set({'Content-Type': 'text/html'});
  //     res.sendFile(path.join(__dirname, 'ui', 'tigray-pulse-app', 'index.html'));
  //   }
  // });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
