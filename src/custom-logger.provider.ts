// custom-logger.service.ts

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Counter } from 'prom-client';

export const ERROR_COUNTER = 'your_error_counter_value';

@Injectable()
export class CustomLoggerService {
  constructor(
    private readonly logger: Logger,
    @Inject('ERROR_COUNTER') private readonly errorCounter: Counter,
  ) {}

  error(message: string, trace: string) {
    // Log the error using NestJS's Logger and increment the error counter
    this.logger.error(message, trace);
    this.errorCounter.inc();
  }
}
