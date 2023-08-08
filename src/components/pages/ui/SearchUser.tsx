export interface SearchProps {
  searchRole: string;
  setSearchRole: (data: string) => void;
}

const SearchUser = ({ searchRole, setSearchRole }: SearchProps) => {
  return (
    <input
      type="text"
      value={searchRole}
      placeholder="Search Role"
      onChange={(e) => setSearchRole(e.target.value)}
      className="border-2 border-yellow-400 bg-gray-100 text-gray-600 rounded w-30 h-10 p-3"
    />
  );
};

export default SearchUser;
