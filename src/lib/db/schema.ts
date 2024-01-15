import {pgTable, serial, text, timestamp, varchar, integer, pgEnum } from 'drizzle-orm/pg-core'

export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"])

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    docName: text('doc_name').notNull(),
    docURL: text('doc_url').notNull(),
    createAt: timestamp('created_at').notNull().defaultNow(),
    userID: varchar('user_id', {length:256}).notNull(),
    fileKey: text('file_key').notNull()
})

export const messages = pgTable("messages",{
    id: serial('id').primaryKey(),
    chatID: integer ("chat_id").references(()=>chats.id).notNull(),
    content: text("content").notNull(),
    createAt: timestamp('created_at').notNull().defaultNow(),
    role: userSystemEnum("role").notNull(),

});

