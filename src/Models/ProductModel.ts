import ShopProductModel from './ShopProductModel'

class ProductModel {
  capa: string
  titulo: string
  tipo: string
  destacado?: boolean
  avaliacao: string
  descricao: string
  id: number
  cardapio: ShopProductModel[]

  constructor(
    capa: string,
    titulo: string,
    tipo: string,
    avaliacao: string,
    descricao: string,
    id: number,
    cardapio: ShopProductModel[],
    destacado?: boolean
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.capa = capa
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.cardapio = cardapio
    this.destacado = destacado
  }
}

export default ProductModel
