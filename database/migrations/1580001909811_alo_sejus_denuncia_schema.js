'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DenunciaSchema extends Schema {
  up () {
    this.create('denuncias', (table) => {
      table.increments()
      table.string('desc_denuncia', 240).notNullable();
      table.string('situacao', 240).notNullable();
      table.string('desc_solucao', 240).notNullable();
      table.string('processo_sei', 240).notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.integer('denuncias_assuntos_id').unsigned().notNullable().references('id').inTable('assunto_denuncias');
      table.timestamps()
    })
  }

  down () {
    this.drop('denuncias')
  }
}

module.exports = DenunciaSchema
