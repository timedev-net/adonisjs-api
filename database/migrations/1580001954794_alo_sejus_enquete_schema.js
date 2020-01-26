'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnqueteSchema extends Schema {
  up () {
    this.create('enquetes', (table) => {
      table.increments()
      table.string('titulo', 240).notNullable();
      table.string('situacao', 240).notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('enquetes')
  }
}

module.exports = EnqueteSchema
