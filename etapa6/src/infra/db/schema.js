import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const contatos = pgTable('contatos', {
  id: uuid('id').primaryKey(),
  nome: text('nome').notNull(),
  email: text('email').notNull().unique(),
  telefone: text('telefone'),
  cpf: text('cpf')
});

//toda vez que tiver um alteração de banco de dados, executa o generate e depois o migrate
