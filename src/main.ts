import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();


git remote add origin https://github.com/gourav8jain/nest-api.git
git add.
git commit - m "Code changes"
git push origin 