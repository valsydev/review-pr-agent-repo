class GmailClient {
  sendEmail(to: string, message: string) {
    console.log(`Sending email to ${to} via Gmail: ${message}`);
  }
}

export class EmailService {
  private client = new GmailClient();

  notifyUser(userEmail: string) {
    this.client.sendEmail(userEmail, "Hello User!");
  }
}
