
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';

// Page to show film details
const Film = ({ film }) => (
  <Layout>
    <h2>{film.title}</h2>
    <p><strong>Director:</strong> {film.director}</p>
    <p><strong>Release Date:</strong> {film.release_date}</p>
    <p>{film.opening_crawl}</p>
  </Layout>
);

// Fetches data for a specific film
Film.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://swapi.dev/api/films/${query.id}/`);
  const film = await res.json();
  return { film };
};

export default withRouter(Film);
