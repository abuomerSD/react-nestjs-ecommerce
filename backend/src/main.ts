import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDb } from './config/database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  await connectDb();
}
bootstrap();
