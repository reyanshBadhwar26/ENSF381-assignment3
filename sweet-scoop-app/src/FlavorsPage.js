import { useState, useCallback } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import FlavorCatalog from './FlavorCatalog.js';
import OrderList from './OrderList.js';

function FlavorsPage() {
  const [order, setOrder] = useState([]);

  const onAddToOrder = useCallback((payload) => {
    setOrder((prev) => {
      const existing = prev.find((item) => item.id === payload.id);
      if (existing) {
        return prev.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: payload.id,
          name: payload.name,
          unitPrice: payload.unitPrice,
          quantity: 1,
        },
      ];
    });
  }, []);

  return (
    <div className="flavors-page">
      <Header />
      <div className="content">
        <FlavorCatalog onAddToOrder={onAddToOrder} />
        <OrderList order={order} setOrder={setOrder} />
      </div>
      <Footer />
    </div>
  );
}

export default FlavorsPage;
