import React from "react";
import { useHistory } from "react-router-dom";
import { apiUrl } from "utils/constants";
import "./DeleteVacancy.css";

interface IDeleteVacancy {
  id: string;
  setToggleDeleteModal: (active: boolean) => void;
}

export const DeleteVacancy: React.FC<IDeleteVacancy> = ({
  id,
  setToggleDeleteModal,
}): React.ReactElement => {
  const history = useHistory();

  const deleteVacancy = async () => {
    fetch(`${process.env.REACT_APP_API_URL}${apiUrl.vacancies}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // Handle successful api call
        if (res.ok) {
          res.json();
          // Show error message
        }
      })
      .catch((err) => err);
    setToggleDeleteModal(false);
    history.push("/interview/vacancies");
  };
  return (
    <article className="delete-modal">
      <h3 className="delete-modal-text">
        Are you sure you would like to delete the current vacancy?
      </h3>
      <div className="button-container">
        <button
          onClick={() => deleteVacancy()}
          className="standard-button"
          type="button"
        >
          Confirm
        </button>
        <button
          onClick={() => setToggleDeleteModal(false)}
          className="standard-button"
          type="button"
        >
          Cancel
        </button>
      </div>
    </article>
  );
};
