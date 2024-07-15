
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

// This is the main page
const Index = ({ films }) => (
  <Layout>
    <h2>Star Wars Films</h2>
    <ul>
      {films.map(film => (
        <li key={film.episode_id}>
          <a href={`/film?id=${film.episode_id}`}>{film.title}</a>
        </li>
      ))}
    </ul>
  </Layout>
);

// Fetches data from the API
Index.getInitialProps = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();
  return {
    films: data.results
  };
};

export default Index;
