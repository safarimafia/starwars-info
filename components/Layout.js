import '../app/globals.css';
import Link from 'next/link'; 

// Layout compnent for the app
const Layout = ({ children }) => (
  <div className="container">
    <header>
      <h1>Nicci Star Wars Search App</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
