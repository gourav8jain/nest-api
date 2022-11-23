import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* eslint-disable prettier/prettier */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();