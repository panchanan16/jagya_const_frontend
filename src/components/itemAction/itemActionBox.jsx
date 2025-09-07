import crudActions from "@/redux/crudActions";
import { PenIcon, Square, SquarePenIcon, Trash2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ItemActionBox({ viewFn, editFn, deleteFn }) {
  const [showModel, setShowModel] = useState(false);
  const itemMenuRef = useRef();
  const dispatch = useDispatch();
  const { deleteItem } = crudActions;

  function deleteTheItem(id) {
    const isDelete = confirm("Are you sure to delete ??");
    isDelete && deleteItem(deleteFn, dispatch, { id });
    setShowModel(false);
  }

  function toggleModel(event) {
    if (
      itemMenuRef &&
      itemMenuRef.current &&
      itemMenuRef.current.contains(event.target)
    ) {
    } else {
      setShowModel(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", toggleModel);
    return () => {
      document.removeEventListener("click", toggleModel);
    };
  }, []);

  return (
    <div className="menu-dropdown" ref={itemMenuRef}>
      {/* <div className="dropdown-icon" onClick={() => setShowModel(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="view-all"
        >
          <path
            fill=""
            d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
          ></path>
        </svg>
      </div> */}
      {/* <div
        className={`menu-dropdown-list flex align-center flex-column ${
          showModel ? "" : "hide"
        }`}
      >
        {viewFn && (
          <Link
            to={viewFn}
            onClick={() => setShowModel(false)}
            className="flex align-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="eye"
              className="svg-18"
            >
              <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path>
            </svg>
            <span className="text">View</span>
          </Link>
        )}

        {editFn && (
          <Link
            to={editFn}
            onClick={() => setShowModel(false)}
            className="flex align-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="svg-18"
            >
              <path
                fill=""
                d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
              ></path>
            </svg>
            <span className="text">Edit</span>
          </Link>
        )}
        <Link
          className="title flex align-center"
          onClick={() => deleteTheItem(viewFn)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="svg-18"
          >
            <path
              fill=""
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            ></path>
          </svg>
          <span className="text">Delete</span>
        </Link>
      </div> */}

      <Link to={viewFn}>
        <FaEye style={{ marginRight: "8px" }} />
      </Link>
      {editFn && (
        <Link to={editFn}>
          <SquarePenIcon style={{ marginRight: "8px" }} />
        </Link>
      )}
      <Trash2Icon
        onClick={() => deleteTheItem(viewFn)}
        style={{ marginRight: "8px" }}
      />
    </div>
  );
}

export default ItemActionBox;
