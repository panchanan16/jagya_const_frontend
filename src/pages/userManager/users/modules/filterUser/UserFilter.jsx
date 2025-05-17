
function UserFilter({ SetFilter }) {
  return (
    <div className="filter" onChange={(e)=> SetFilter(e.target.value)}>
      <select>
        <option value="super_admin">Admin User</option>
        <option value="branch">Branch User</option>
        <option value="finance_user">Finance User</option>
        <option value="incharge_user">Incharge User</option>
      </select>
    </div>
  );
}

export default UserFilter;
