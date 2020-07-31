export interface IAdress {
  email: string;
  name: string;
}

export interface Message {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendEmail(message: Message): Promise<void>;
}