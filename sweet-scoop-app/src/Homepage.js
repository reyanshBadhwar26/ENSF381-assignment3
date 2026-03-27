import flavors from './data/flavors.js';
import { useState, useEffect } from "react";

function Header() {
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
                <a href='/'>Home</a>
                <a href='/Login'>Login</a>
                <a href='/Flavors'>Flavors</a>
            </div>
        </div>
    );
}

function getRandomFlavors(arr, n) {
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

function MainSection() {
    return (
        <div className="main-section">
            <section>
                <h2>About Sweet Scoop Ice Cream</h2>
                <p>Sweet Scoop Ice Cream is a family-owned business that has been serving delicious ice cream since 1990. We pride ourselves on using only the freshest ingredients to create our unique flavors. Whether you’re in the mood for a classic vanilla or something more adventurous like our signature “Chocolate Explosion,” we have something for everyone. Come visit us and treat yourself to a sweet scoop today!</p>
            </section>

            <div className="flavor-grid">

            </div>

        </div>
    );
}

function Footer() {
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