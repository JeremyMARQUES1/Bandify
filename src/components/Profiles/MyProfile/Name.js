import React from 'react';
import PropTypes from 'prop-types';

const Name = ({
  editName, handleSubmitName, firstName, lastName, user, editFormToggle, onChangeProfileInput,
}) => (
  <>
    {editName ? (
      <form type="submit" onSubmit={handleSubmitName}>
        <div>
          <label htmlFor="firstName">
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => onChangeProfileInput('firstName', e.target.value)}
              placeholder="Prénom"
              className="myprofile__user--edit-input"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            <input
              name="lastName"
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => onChangeProfileInput('lastName', e.target.value)}
              placeholder="Nom"
              className="myprofile__user--edit-input"
              required
            />
          </label>
        </div>
        <div className="myprofile__user--submit-container">
          <button type="submit" className="myprofile__user--edit-submit-btn">Envoyer</button>
          <button
            type="button"
            onClick={() => editFormToggle('editName')}
            className="myprofile__user--close-edit-btn"
          >
            <i className="fas fa-times-circle" />
          </button>
        </div>
      </form>
    ) : (
      <p className="myprofile__user--name">
        {user.firstname} {user.lastname}
        <span>
          <button
            type="button"
            onClick={() => editFormToggle('editName')}
            className="myprofile__user--edit-name"
          >
            <i className="fas fa-pen" />
          </button>
        </span>
      </p>
    )}
  </>
);

Name.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }),
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  editFormToggle: PropTypes.func.isRequired,
  editName: PropTypes.bool.isRequired,
  handleSubmitName: PropTypes.func.isRequired,
  onChangeProfileInput: PropTypes.func.isRequired,
};
Name.defaultProps = {
  user: {
    firstname: '',
    lastname: '',
  },
};

export default Name;
