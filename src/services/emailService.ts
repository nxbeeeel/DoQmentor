import { EmailService } from '@/types';

export class MailtoEmailService implements EmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
    try {
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      const mailtoLink = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
      
      window.location.href = mailtoLink;
      return true;
    } catch (error) {
      console.error('Error opening email client:', error);
      return false;
    }
  }
}

export const emailService = new MailtoEmailService();
