'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnqueteAlternativaSchema extends Schema {
  up () {
    this.create('enquete_alternativas', (table) => {
      table.increments()
      table.string('desc_alternativa', 240).notNullable();
      table.integer('enquete_pergunta_id').unsigned().notNullable().references('id').inTable('enquete_perguntas');
      table.timestamps()
    })
  }

  down () {
    this.drop('enquete_alternativas')
  }
}

module.exports = EnqueteAlternativaSchema
