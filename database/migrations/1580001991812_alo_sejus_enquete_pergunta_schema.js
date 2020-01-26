'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnquetePerguntaSchema extends Schema {
  up () {
    this.create('enquete_perguntas', (table) => {
      table.increments()
      table.string('desc_pergunta', 240).notNullable();
      table.integer('enquete_id').unsigned().notNullable().references('id').inTable('enquetes');
      table.timestamps()
    })
  }

  down () {
    this.drop('enquete_perguntas')
  }
}

module.exports = EnquetePerguntaSchema
