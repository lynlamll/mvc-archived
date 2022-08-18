import { Knex } from "knex";

// this is going to interact with database

export class UserService {
  constructor(private knex: Knex) {}

  async login() {
    const result = await this.knex.select(/* sql */ `SELECT * FROM apples`);
    return result;
  }
}
