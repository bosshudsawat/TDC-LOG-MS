import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { CustomLoggerService } from './custom-logger.provider';
import { Logger } from 'winston';
import { LoggerModule } from './Logger/Logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService,CustomLoggerService,TestService],
})
export class AppModule {}
