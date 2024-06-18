import { getParticipant } from "../action";
import SearchBar from "../components/searchbar";

export default async function HomePage() {
  return (
    <div>
      <SearchBar getParticipant={getParticipant} />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
