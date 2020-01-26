'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Foragido extends Model {
  static get connection () {
    return 'mysql2'
  }

  static get table () {
    return 'migrations'
  }
}

module.exports = Foragido
