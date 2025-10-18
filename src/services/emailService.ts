export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const emailService = {
  async sendContactEmail(data: ContactFormData): Promise<boolean> {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
};
