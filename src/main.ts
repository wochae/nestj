import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');

  const port = 4000;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
