import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUserCase";

export class CreateUserController {
  constructor(
    private crateUserCase: CreateUserUseCase
  ) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, password } = request.body;

    try {
      await this.crateUserCase.execute({
        name,
        surname,
        email,
        password
      });
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error . '
      })

    }

  }
}