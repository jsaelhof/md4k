import { useGetLists } from "../../graphql/queries";

export const Test = () => {
  const { lists, loading, error } = useGetLists({ onCompleted: console.log });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>GraphQL -- Error</p>;
  return (
    <div className="App">
      {lists.map((list: { id: string; label: string }) => (
        <div key={list.id}>{list.label}</div>
      ))}
    </div>
  );
};
