import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUserRepository'
import { CreateUserUseCase } from "./CreateUserUserCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUserRepository();

const createUserUserCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider,

);

const createUserController = new CreateUserController(
  createUserUserCase
);

export {CreateUserController, CreateUserUseCase}