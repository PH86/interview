import "components/Packages/Packages.css";

export const AccountInformation = () => {
  return (
    <div className="packages-page-container">
      <h1>Account Information</h1>
      <form className="modal-form">
        <label htmlFor="first-name">
          First name
          <input
            name="first-name"
            type="text"
            placeholder="Enter your first name"
          />
        </label>
        <label htmlFor="last-name">
          Last name
          <input
            name="last-name"
            type="text"
            placeholder="Enter your last name"
          />
        </label>
        <label htmlFor="email">
          Email address
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
        </label>
        <label htmlFor="phone">
          Phone number
          <input
            name="phone"
            type="number"
            placeholder="Enter your phone number"
          />
        </label>
        <label htmlFor="job-position">
          Job position
          <input
            name="job-position"
            type="text"
            placeholder="Enter your job position"
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
