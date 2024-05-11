import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {
    @Cron(CronExpression.EVERY_10_MINUTES)
    handleCron() {
        console.log('Called when the current time is 10 minutes');
    }
}
