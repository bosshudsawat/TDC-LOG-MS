import { Inject, Injectable, Logger } from '@nestjs/common';
import { CustomLoggerService } from './custom-logger.provider';

@Injectable()
export class TestService {
    constructor(private readonly customLoggerService: CustomLoggerService) {}

    someMethod() {
        try {
            // Your code that might throw an error
          } catch (error) {
            // Log the error using the custom logger service
            this.customLoggerService.error('An error occurred', error.stack);
          }
      }
}
