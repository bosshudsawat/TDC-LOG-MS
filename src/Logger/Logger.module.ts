// logger.module.ts
import { Module, Logger } from '@nestjs/common';

@Module({
  providers: [Logger],
  exports: [Logger], // Export the Logger so that it can be used in other modules
})
export class LoggerModule {}