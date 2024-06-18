import SearchBar from "../components/searchbar";

export default async function HomePage() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
