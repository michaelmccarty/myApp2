export class User {
  nick: string;
  email: string;
  pass: string;
  constructor(email: string, pass: string) {
    this.email = email;
    this.pass = pass;
  }
}
