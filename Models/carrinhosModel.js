const conexao = require("../infraestrutura/conexao")
//regras de negócio
class CarrinhoModel {

    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) => {
                if(error) {
                    return reject(error);
                }
                return resolve(resposta)
            })
        })
    }

    listar() {
        const sql = "SELECT * FROM carrinho";
        return this.executaQuery(sql)
    }
    criar(novoCarrinho) {
        const sql = "insert into carrinho set ?"
        return this.executaQuery(sql, novoCarrinho)
    }
    atualizar(carrinhoAtualizado, id) {
        const sql = "update carrinho set ? where idcarrinho = ?"
        return this.executaQuery(sql, [carrinhoAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from carrinho where idcarrinho = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from carrinho"
        return this.executaQuery(sql)
    }
}

module.exports = new CarrinhoModel();