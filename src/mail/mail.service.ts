import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: true,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: 'your-email@example.com',
        to,
        subject,
        html,
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
