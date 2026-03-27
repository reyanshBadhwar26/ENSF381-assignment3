function OrderItem({ name, quantity, lineTotal, onRemove }) {
  return (
    <div className="order-item">
      <p>
        <strong>{name}</strong>
      </p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${lineTotal.toFixed(2)}</p>
      <button type="button" className="remove" onClick={onRemove}>
        Remove Item
      </button>
    </div>
  );
}

export default OrderItem;
