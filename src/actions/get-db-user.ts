import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import Database from 'better-sqlite3';
import { drizzle } from "drizzle-orm/better-sqlite3";
import { eq } from "drizzle-orm";
import { Action } from "../action.js";


const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  givenName: text("given_name"),
  familyName: text("family_name"),
  username: text("username").notNull(),
  email: text("email").notNull()
})

const db = drizzle(new Database('database.db'), {schema: {users: users}})

export const getDbUser: Action<GetDbUserActionInput, DbUser | undefined> = async (input) => {
  return await db.query.users.findFirst({
    where: eq(users.username, input.username)
    
  })
}

interface GetDbUserActionInput {
  username: string
}

interface DbUser {
  id: number,
  givenName?: string | null,
  familyName?: string | null,
  username: string,
  email: string
}
