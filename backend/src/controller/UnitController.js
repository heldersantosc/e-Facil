const connection = require("../database/connection");

module.exports = {
  /** lista as unidades */
  async index(request, response) {
    const list = await connection("unit")
      .join("status", "unit.status_id", "=", "status.id")
      .select("unit.id", "unit.name", "status.name as status");

    return response.json(list);
  },

  /** criação de unidade */
  async store(request, response) {
    const unit = request.body;
    const query = await connection("unit")
      .insert(unit)
      .then(() => {
        return response
          .status(200)
          .json({ sucess: "Unidade cadastrada com sucesso" });
      })
      .catch(err => {
        console.clear();
        console.log(err);
        return response.json({ erro: "Unidade já cadastrada" });
      });
  },

  /** atualiza unidade */
  async update(request, response) {
    const { id, status_id } = request.body;
    const query = await connection("unit")
      .where("id", "=", id)
      .update({ status_id: status_id })
      .decrement({
        balance: 50
      })
      .clearCounters()
      .then(() => {
        return response.json({
          success: `Campo ${id} atualizado com sucesso!`
        });
      })
      .catch(err => {
        return response.json(err);
      });
  },

  /** deleta uma unidade */
  async delete(request, response) {
    console.log(request.body);
    const { id } = request.params;
    const query = await connection("unit")
      .where("id", id)
      .del();
    return response.json(id);
  }
};
