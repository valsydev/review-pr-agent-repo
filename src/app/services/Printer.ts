export interface MultiFunctionDevice {
  print(): void;
  scan(): void;
  fax(): void;
}

export class BasicPrinter implements MultiFunctionDevice {
  print() {
    console.log("Printing...");
  }
  scan() {
    throw new Error("Not supported");
  }
  fax() {
    throw new Error("Not supported");
  }
}
