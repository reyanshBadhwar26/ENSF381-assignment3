import flavors from './data/flavors.js';
import FlavorItem from './FlavorItem.js';

function FlavorCatalog({ onAddToOrder }) {
  return (
    <section className="flavor-catalog">
      <h2>Ice Cream Flavors</h2>
      <div className="flavor-grid">
        {flavors.map((flavor) => (
          <FlavorItem
            key={flavor.id}
            flavor={flavor}
            onAddToOrder={onAddToOrder}
          />
        ))}
      </div>
    </section>
  );
}

export default FlavorCatalog;
