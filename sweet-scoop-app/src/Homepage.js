import flavors from './data/flavors.js';
import { useState, useEffect } from "react";
import reviews from './data/reviews.js';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div>
            <header>
                <div>
                    <div><img src="/images/logo.webp" alt="Sweet Scoop Ice Cream Logo"/></div>
                </div>

                <div>
                    <h1>Sweet Scoop Ice Cream</h1>
                </div>
            </header>

            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/Flavors'>Flavors</Link>
            </div>
        </div>
    );
}

function getRandomObjects(arr, n) {
  const result = [];

  while (result.length < n) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];

    if (!result.includes(randomItem)) {
      result.push(randomItem);
    }
  }

  return result;
}

function getRating(rating) {
    const finalString = "★".repeat(rating) + "☆".repeat(5-rating);

    return finalString;
}

function MainSection() {

    const [featuredFlavors, setFeaturedFlavors] = useState([]);
    const [featuredReviews, setfeaturedReviews] = useState([]);

    useEffect(() => {
        setFeaturedFlavors(getRandomObjects(flavors, 3));
        setfeaturedReviews(getRandomObjects(reviews, 2));
    }, []);

    return (
        <div className="main-section">
            <section>
                <h2>About Sweet Scoop Ice Cream</h2>
                <p>Sweet Scoop Ice Cream is a family-owned business that has been serving delicious ice cream since 1990. We pride ourselves on using only the freshest ingredients to create our unique flavors. Whether you’re in the mood for a classic vanilla or something more adventurous like our signature “Chocolate Explosion,” we have something for everyone. Come visit us and treat yourself to a sweet scoop today!</p>
            </section>

            <h2>Featured Flavors</h2>
            <div className="flavor-grid">
                {featuredFlavors.map((flavor) =>
                    <div className="flavor-card">
                        <h3>{flavor.name}</h3>
                        <p>{flavor.description}</p>
                        <p>Price: {flavor.price}</p>
                        <img src={flavor.image} alt={flavor.name}/>
                    </div>
                )}
            </div>

            <div>
                <h2>Customer Reviews</h2>
                {featuredReviews.map((review) =>
                    <div>
                        <h3>{review.customerName}</h3>
                        <p>Rating: {getRating(review.rating)}</p>
                        <p>{review.review}</p>
                    </div>
                )}
            </div>

        </div>
    );
}

export function Footer() {
    return (
        <footer>
            <p>&copy; 2026 Sweet Scoop Ice Cream.</p>
        </footer>
    );
}

function Homepage() {
    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Homepage;
