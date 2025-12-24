import { useSearchParams } from "react-router-dom";

function UserFilter({ SetFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function HandleFilter(e) {
    SetFilter(e.target.value)
    setSearchParams({ category: "books" });
  }

  return (
    <div className="filter" onChange={HandleFilter}>
      <select>
        <option value="super_admin">Super Admin Users</option>
        <option value="branch">Branch Users</option>
        <option value="finance">Finance Users</option>
        <option value="supervisor">Incharge Users</option>
      </select>
    </div>
  );
}

export default UserFilter;
