import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';

@Module({
  imports: [MailModule, ScheduleModule.forRoot()],
  controllers: [AppController, MailController],
  providers: [AppService, MailService, CronService],
})
export class AppModule {}
