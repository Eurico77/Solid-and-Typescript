import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) { }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadExists) {
      throw new Error('User alread exists')
    }
    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'email de testes',
        email: 'olá esse é meu teste de solid com typescript'
      },
      subject: 'testes ahahahahahahahahahah',
      body: '<p> algum tipo de corpo </p>'
    })
  }
}