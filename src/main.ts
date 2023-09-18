import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Counter } from 'prom-client';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create and provide ERROR_COUNTER
  const errorCounter = new Counter({
    name: 'app_errors_total',
    help: 'Total number of application errors',
  });

  app.useLogger(app.get(Logger)); // Use NestJS Logger
  // app.useGlobalFilters(new MyExceptionFilter()); // Apply your custom exception filter

  // Provide ERROR_COUNTER to the AppModule context
  app.get<Counter>('ERROR_COUNTER', { strict: false }); // strict: false allows providing it without injection

  await app.listen(3000);
}
bootstrap();