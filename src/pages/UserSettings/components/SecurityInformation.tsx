import "components/Packages/Packages.css";

export const SecurityInformation = () => {
  return (
    <div className="packages-page-container">
      <h1>Security Information</h1>
      <h2>Change password</h2>
      <form className="modal-form">
        <label htmlFor="password">
          New password
          <input
            name="password"
            type="password"
            placeholder="Enter your new password"
          />
        </label>
        <label htmlFor="confirm">
          Confirm password
          <input
            name="confirm"
            type="text"
            placeholder="Confirm your new password"
          />
        </label>
        <div>
          <button type="submit" className="standard-button">
            Save
          </button>
          <button type="submit" className="standard-button text-button">
            Undo changes
          </button>
        </div>  
      </form>
    </div>
  );
};
