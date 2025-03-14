function Alert() {
  return (
    <div className="alert-dialog">
      {/* <div className="alert-popup success-alert flex align-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check">
          <path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path>
        </svg>
        <span className="alertText"></span>
      </div> */}

      {/* <div className="alert-popup warning-alert flex align-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times">
          <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
        </svg>
        <span className="alertText"></span>
      </div> */}

      {/* <div className="alert-popup confirm-alert flex j-center align-center flex-column">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="trash-alt"
        >
          <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
        </svg>
        <span className="alertText"></span>
        <div className="alert-btns flex align-center gap-10">
          <button className="btn-alert btn-primary j-center" type="button">
            Proceed
          </button>
          <button
            className="btn-alert btn-warning"
            type="button"
            onclick="closeAlert(this)"
          >
            Cancel
          </button>
        </div>
      </div> */}

      <div className="alert-popup error-alert flex j-center align-center flex-column">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
          viewBox="0 0 24 24"
          id="exclamation-octagon"
        >
          <path d="M21.7,7.6l-5.3-5.3C16.2,2.1,16,2,15.7,2H8.3C8,2,7.8,2.1,7.6,2.3L2.3,7.6C2.1,7.8,2,8,2,8.3v7.5c0,0.3,0.1,0.5,0.3,0.7l5.3,5.3C7.8,21.9,8,22,8.3,22h7.5c0.3,0,0.5-0.1,0.7-0.3l5.3-5.3c0.2-0.2,0.3-0.4,0.3-0.7V8.3C22,8,21.9,7.8,21.7,7.6z M12,17c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,17,12,17z M13,12c0,0.6-0.4,1-1,1s-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1V12z"></path>
        </svg>
        <span className="alertText">Hello welcome too alert part</span>
      </div>
    </div>
  );
}

export default Alert;
