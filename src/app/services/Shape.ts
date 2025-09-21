export class Rectangle {
  constructor(public width: number, public height: number) {}
  setWidth(w: number) {
    this.width = w;
  }
  setHeight(h: number) {
    this.height = h;
  }
  getArea() {
    return this.width * this.height;
  }
}

export class Square extends Rectangle {
  setWidth(w: number) {
    this.width = this.height = w;
  }
  setHeight(h: number) {
    this.width = this.height = h;
  }
}
