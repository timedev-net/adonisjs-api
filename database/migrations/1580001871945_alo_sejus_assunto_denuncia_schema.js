'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssuntoDenunciaSchema extends Schema {
  up () {
    this.create('assunto_denuncias', (table) => {
      table.increments();
      table.string('nome_assunto', 240).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('assunto_denuncias')
  }
}

module.exports = AssuntoDenunciaSchema
