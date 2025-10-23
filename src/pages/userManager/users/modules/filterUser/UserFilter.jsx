
function UserFilter({ SetFilter }) {
  return (
    <div className="filter" onChange={(e)=> SetFilter(e.target.value)}>
      <select>
        <option value="super_admin">Super Admin Users</option>
        <option value="branch">Branch Users</option>
        <option value="finance">Finance Users</option>
        <option value="incharge_user">Incharge Users</option>
      </select>
    </div>
  );
}

export default UserFilter;
