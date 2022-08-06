import { gql, useQuery } from "@apollo/client";

export const Test = () => {
  const GET_MOVIES = gql`
    query {
      movie {
        id
        title
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MOVIES);

  console.log(loading, error, data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>GraphQL -- Error</p>;
  return (
    <div className="App">
      {data.movies.map((movie: { id: string; title: string }) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};
