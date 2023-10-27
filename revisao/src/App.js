import Imagem from  './img/HondaCivic.png'
import './App.css';
import  ProfileImage from './componentes/produdos';


function App() {
  return (
    <div className='App'>
      <h1>Consorcio Honda</h1>
      <ProfileImage
        titulo="Honda Civic Type R"
        Imagem={Imagem}
        alt="Consorcio Honda"
        descricao="Civic Type R é equipado com um motor 2.0 VTEC turbo a gasolina, que desenvolve 297 cv de potência e 42,8 kgfm de 
        torque máximo, embora fique abaixo do ajuste visto em outros mercados. No Japão, por exemplo, o modelo entrega 330 cv, enquanto
        nos Estados Unidos desenvolve 320 cv."
        preco="Valor: R$429.900,00"
      />
    </div>
  );
}

export default App;
