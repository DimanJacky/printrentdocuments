import { useState } from 'react';
import { Product } from './Product';

export const ReactLifecycle = () => {
  const [items, setItems] = useState([{ id: 1, product: 'Product 1' }]);
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  let products = null;

  products = items.map((item, i) => {
    return <Product key={i} name={item.product} change={() => {}} />;
  });

  return (
    <>
      <button onClick={toggleProducts}>toggle products</button>
      {showProducts && products}
    </>
  );
};
