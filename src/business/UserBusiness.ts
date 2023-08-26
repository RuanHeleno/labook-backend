import { UserDatabase } from "../database/UserDatabase";
import {
  DeleteUserInputDTO,
  DeleteUserOutputDTO,
} from "../dtos/user/deleteUser.dto";
import { EditUserInputDTO, EditUserOutputDTO } from "../dtos/user/editUser.dto";
import { GetUsersInputDTO, GetUsersOutputDTO } from "../dtos/user/getUsers.dto";
import { LoginInputDTO, LoginOutputDTO } from "../dtos/user/login.dto";
import { SignupInputDTO, SignupOutputDTO } from "../dtos/user/signup.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { USER_ROLES, User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager, TokenPayload } from "../services/TokenManager";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager,
    private hashManager: HashManager
  ) {}

  public getUsers = async (
    input: GetUsersInputDTO
  ): Promise<GetUsersOutputDTO> => {
    const { q } = input;

    const usersDB = await this.userDatabase.findUsers(q);

    const users = usersDB.map((userDB) => {
      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role,
        userDB.created_at
      );

      return user.toBusinessModel();
    });

    const output: GetUsersOutputDTO = users;

    return output;
  };

  public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
    const { name, email, password } = input;

    const userDBExists = await this.userDatabase.findUserByEmail(email);

    if (userDBExists) {
      throw new BadRequestError("'email' já existe");
    }

    const id = this.idGenerator.generateId();

    const hashedPassword = await this.hashManager.hash(password);

    const date = new Date();
    date.setUTCHours(date.getUTCHours() - 3); // Subtrai 3 horas para ajustar para GMT-3

    const isoDateString = date
      .toISOString()
      .replace("T", " ")
      .replace("Z", " ")
      .substring(0, 19);

    const newUser = new User(
      id,
      name,
      email,
      hashedPassword,
      USER_ROLES.NORMAL, // só é possível criar users com contas normais
      isoDateString
    );

    const newUserDB = newUser.toDBModel();
    await this.userDatabase.insertUser(newUserDB);

    const token = this.tokenManager.createToken({
      id,
      role: newUser.getRole(),
      name: newUser.getName(),
    });

    const output: SignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token: token,
    };

    return output;
  };

  public login = async (input: LoginInputDTO): Promise<LoginOutputDTO> => {
    const { email, password } = input;

    const userDB = await this.userDatabase.findUserByEmail(email);

    if (!userDB) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    const isPasswordValid = await this.hashManager.compare(
      password,
      userDB.password
    );

    if (!isPasswordValid) {
      throw new BadRequestError("'password' incorreto");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.created_at
    );

    const tokenPayload: TokenPayload = {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole(),
    };

    const token = this.tokenManager.createToken(tokenPayload);

    const output: LoginOutputDTO = {
      message: "Login realizado com sucesso",
      token: token,
    };

    return output;
  };

  public editUser = async (
    input: EditUserInputDTO
  ): Promise<EditUserOutputDTO> => {
    const { token, emailToEdit, name, email, password } = input;

    const payload = this.tokenManager.getPayload(token);

    if (!payload) {
      throw new BadRequestError("Token inválido");
    }

    const userDB = await this.userDatabase.findUserByEmail(emailToEdit);

    if (!userDB) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    let hashedPassword;

    if(password) {
      hashedPassword = await this.hashManager.hash(password);
    }

    const editUser = new User(
      payload.id,
      name || userDB.name,
      email || userDB.email,
      hashedPassword  || userDB.password,
      userDB.role
    );

    const editUserDB = editUser.toDBModel();
    await this.userDatabase.updateUser(editUserDB, emailToEdit);

    const output: EditUserOutputDTO = {
      message: "Usuário alterado com sucesso!",
    };

    return output;
  };

  public deleteUser = async (
    input: DeleteUserInputDTO
  ): Promise<DeleteUserOutputDTO> => {
    const { email, token } = input;

    const payload = this.tokenManager.getPayload(token);

    if (!payload) {
      throw new BadRequestError("Token inválido");
    }

    const userDBExists = await this.userDatabase.findUserByEmail(email);

    if (!userDBExists) {
      throw new BadRequestError("Usuário não encontrado.");
    }

    await this.userDatabase.deleteUser(email);

    const output: DeleteUserOutputDTO = {
      message: "Usuário deletado com sucesso!",
    };

    return output;
  };
}
