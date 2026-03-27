import { useEffect, useState } from 'react';
import OrderItem from './OrderItem.js';

const STORAGE_KEY = 'sweetScoopOrder';

function OrderList({ order, setOrder }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setOrder(parsed);
        }
      } catch {
        // ignore invalid data
      }
    }
    setHydrated(true);
  }, [setOrder]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  }, [order, hydrated]);

  function handleRemove(flavorId) {
    setOrder((prev) =>
      prev
        .map((item) => {
          if (item.id !== flavorId) return item;
          const newQty = item.quantity - 1;
          if (newQty <= 0) return null;
          return { ...item, quantity: newQty };
        })
        .filter((item) => item != null)
    );
  }

  const total = order.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  return (
    <div className="order-list">
      <h2>Your Order</h2>
      {order.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <>
          {order.map((item) => (
            <OrderItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              lineTotal={item.quantity * item.unitPrice}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
          <p className="order-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
}

export default OrderList;
