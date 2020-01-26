'use strict'

const AssuntoDenuncia = use("App/Models/AloSejus/AssuntoDenuncia");


class AssuntoDenunciaController {


  async index () {
    const assunto_denuncia = await AssuntoDenuncia.all();
    return assunto_denuncia;
  }

  async store ({ request, response }) {
    const dados = request.only(['nome_assunto']);
    const assunto = await AssuntoDenuncia.create({ ...dados });

    return assunto;
  }

  async show ({ params, request, response, view }) {
    const assunto = await AssuntoDenuncia.findOrFail(params.id);
    return assunto;
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, auth, request, response }) {
    const denuncia = await Denuncia.findOrFail(params.id);
    // if (denuncia.user_id !== auth.user.id) {
    //   return response.status(401);
    // }
    await denuncia.delete();
  }
}

module.exports = AssuntoDenunciaController;
