class ProductModel {
  imagem: string
  titulo: string
  origem: string
  destaque?: boolean
  nota: string
  descricao: string
  id: number

  constructor(
    imagem: string,
    titulo: string,
    origem: string,
    nota: string,
    descricao: string,
    id: number,
    destaque?: boolean
  ) {
    this.id = id
    this.titulo = titulo
    this.origem = origem
    this.imagem = imagem
    this.nota = nota
    this.descricao = descricao
    this.destaque = destaque
  }
}

export default ProductModel
