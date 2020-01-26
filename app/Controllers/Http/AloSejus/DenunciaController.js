'use strict'

const Denuncia = use("App/Models/AloSejus/Denuncia");

class DenunciaController {


  async index ({ request, response, view }) {
    const denuncia = await Denuncia.query()
      .with("user")
      .fetch();

    return denuncia;
  }

  async store ({ request, auth, response }) {
    const dados = request.only(['desc_denuncia, situacao, desc_solucao, processo_sei, denuncias_assuntos_id']);
    const denuncia = await Denuncia.create({ user_id: auth.user.id, ...dados });

    return denuncia;
  }

  async show ({ params, request, response, view }) {
    const denuncia = await Denuncia.findOrFail(params.id);

    return denuncia;
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

module.exports = DenunciaController;
