class ShopProductModel {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string

  constructor(
    foto: string,
    nome: string,
    descricao: string,
    id: number,
    porcao: string,
    preco: number
  ) {
    this.foto = foto
    this.nome = nome
    this.descricao = descricao
    this.id = id
    this.porcao = porcao
    this.preco = preco
  }
}

export default ShopProductModel
