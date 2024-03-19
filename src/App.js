import './App.css';
import ProductsPage from './Components/ProductsPage';

function App() {
  const products = [
    {
        id: 3,
        name: 'Navajas',
        price: 25,
    },
    {
        id: 2,
        name: 'Chorizo a la sidra',
        price: 15,
    },
    {
      id: 1,
      name: 'Chachopo',
      price: 30,
    },
  ]


  return (
    <div className="App">
      <ProductsPage items={products}></ProductsPage>
    </div>
  );
}

export default App;
