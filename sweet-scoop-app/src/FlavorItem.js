import { useState } from 'react';

function parsePrice(priceStr) {
  return parseFloat(String(priceStr).replace(/[^0-9.]/g, '')) || 0;
}

function FlavorItem({ flavor, onAddToOrder }) {
  const [showDescription, setShowDescription] = useState(false);

  const imageSrc = flavor.image.startsWith('/')
    ? flavor.image
    : `/${flavor.image}`;

  function handleAdd() {
    onAddToOrder({
      id: flavor.id,
      name: flavor.name,
      unitPrice: parsePrice(flavor.price),
      priceDisplay: flavor.price,
    });
  }

  return (
    <div
      className="flavor-card"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={imageSrc} alt={flavor.name} />
      <h3>{flavor.name}</h3>
      <p>{flavor.price}</p>
      {showDescription && (
        <p className="flavor-description">{flavor.description}</p>
      )}
      <button type="button" onClick={handleAdd}>
        Add to Order
      </button>
    </div>
  );
}

export default FlavorItem;
