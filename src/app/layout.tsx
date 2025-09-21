import React from "react";
import UserProfile from "./components/UserProfile";
import { PaymentService } from "./services/PaymentService";
import { Rectangle, Square } from "./services/Shape";
import { BasicPrinter } from "./services/Printer";
import { EmailService } from "./services/EmailService";

export default function App() {
  const paymentService = new PaymentService();
  paymentService.processPayment("credit", 100);

  const rect = new Rectangle(10, 5);
  const square = new Square(5, 5);
  console.log("Rectangle area:", rect.getArea());
  console.log("Square area:", square.getArea());

  const printer = new BasicPrinter();
  printer.print();

  const emailService = new EmailService();
  emailService.notifyUser("user@example.com");

  return (
    <div>
      <h2>SOLID Violations Demo</h2>
      <UserProfile />
    </div>
  );
}
