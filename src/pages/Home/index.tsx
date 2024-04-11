import ProductModel from '../../Models/ProductModel'
import ProductsList from '../../components/ProductsList'
import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const ProdutosHome: ProductModel[] = [
  {
    id: 1,
    imagem: sushi,
    titulo: 'Hioki Sushi',
    origem: 'Japonesa',
    nota: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    destaque: true
  },
  {
    id: 2,
    imagem: massa,
    titulo: 'La Dolce Vita Trattoria',
    origem: 'Italiana',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    imagem: massa,
    titulo: 'La Dolce Vita Trattoria',
    origem: 'Italiana',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    imagem: massa,
    titulo: 'La Dolce Vita Trattoria',
    origem: 'Italiana',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    imagem: massa,
    titulo: 'La Dolce Vita Trattoria',
    origem: 'Italiana',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    imagem: massa,
    titulo: 'La Dolce Vita Trattoria',
    origem: 'Italiana',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList products={ProdutosHome} />
    <Footer />
  </>
)

export default Home
