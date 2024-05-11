import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly emailService: MailService) {}

  @Post('send-email')
  async sendEmail(@Body() body: { to: string; subject: string; html: string }) {
    try {
      await this.emailService.sendEmail(body.to, body.subject, body.html);
      return { message: 'Email sent successfully' };
    } catch (error) {
      return { message: 'Error sending email', error };
    }
  }
}
