export class PaymentService {
  processPayment(type: string, amount: number) {
    if (type === "credit") {
      console.log("Processing credit card payment:", amount);
    } else if (type === "paypal") {
      console.log("Processing PayPal payment:", amount);
    } else if (type === "crypto") {
      console.log("Processing crypto payment:", amount);
    } else {
      throw new Error("Unsupported payment type");
    }
  }
}
