import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to My Modern React App</h1>
        <p>Built with Vite, React Router, and advanced CSS styling.</p>
        <button className="cta-btn">Explore Features</button>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <h3>⚡ Blazing Fast</h3>
          <p>Powered by Vite for instant server start and lightning-fast builds.</p>
        </div>
        <div className="feature-card">
          <h3>🧭 Multi-Page</h3>
          <p>Seamless client-side navigation using React Router.</p>
        </div>
        <div className="feature-card">
          <h3>🎨 Responsive</h3>
          <p>Designed with modern CSS Grid and Flexbox for any screen size.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;