'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InformativoSchema extends Schema {
  up () {
    this.create('informativos', (table) => {
      table.increments()
      table.string('titulo', 240).notNullable();
      table.string('descricao', 240).notNullable();
      table.string('imagem', 240).notNullable();
      table.string('status', 240).notNullable();
      table.string('fonte', 240).notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('informativos')
  }
}

module.exports = InformativoSchema
