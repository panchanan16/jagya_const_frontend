import React, { useState } from "react";
import { Link } from "react-router-dom";

function UsersDropdown() {
  const [openUser, setOpenUser] = useState(false);
  return (
    <>
    <div className="add-button">
      <button
        className="btn-primary"
        type="button"
        onClick={() => setOpenUser(!openUser)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="plus-circle"
          className=""
        >
          <path
            fill=""
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
          ></path>
        </svg>
        <span className="text">Add Users</span>
      </button>
    </div>
    <div className={`${openUser ? "" : "hide"} roles`}>
      <button className="btn-secondary">Select a Role</button>
      <ul className="">
        <li>
          <Link to="add-user">Super Admin</Link>
        </li>
        <li>
          <Link to="">Incharge</Link>
        </li>
        <li>
          <Link to="">Financer</Link>
        </li>
        <li>
          <Link to="">Admin</Link>
        </li>
      </ul>
    </div>
    </>
  );
}

export default UsersDropdown;
