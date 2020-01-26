'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnqueteRespostaSchema extends Schema {
  up () {
    this.create('enquete_respostas', (table) => {
      table.increments()
      table.integer('enquete_alternativa_id').unsigned().notNullable().references('id').inTable('enquete_alternativas');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('enquete_respostas')
  }
}

module.exports = EnqueteRespostaSchema
