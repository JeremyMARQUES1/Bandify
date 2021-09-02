import React from 'react';
import PropTypes from 'prop-types';

const Email = ({
  editEmail, handleSubmitEmail, emailInput, onChangeProfileInput, editFormToggle, email,
}) => (
  <>
    {editEmail ? (
      <form type="submit" onSubmit={handleSubmitEmail}>
        <div>
          <input
            name="email"
            type="text"
            value={emailInput.trim()}
            onChange={(e) => onChangeProfileInput('email', e.target.value)}
            placeholder="E-mail"
            className="myprofile__user--edit-input"
            required
          />
        </div>
        <div className="myprofile__user--submit-container">
          <button type="submit" className="myprofile__user--edit-submit-btn">Envoyer</button>
          <button
            type="button"
            onClick={() => editFormToggle('editEmail')}
            className="myprofile__user--close-edit-btn"
          >
            <i className="fas fa-times-circle" />
          </button>
        </div>
      </form>
    ) : (
      <div className="myprofile__user--email">
        Email: {email}
        <span>
          <button
            type="button"
            onClick={() => editFormToggle('editEmail')}
            className="myprofile__user--edit-email"
          >
            <i className="fas fa-pen" />
          </button>
        </span>
      </div>
    )}
  </>
);

Email.propTypes = {
  editEmail: PropTypes.bool.isRequired,
  handleSubmitEmail: PropTypes.func.isRequired,
  emailInput: PropTypes.string.isRequired,
  onChangeProfileInput: PropTypes.func.isRequired,
  editFormToggle: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default Email;
