import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  editDescription, handleSubmitDescription, editFormToggle, user, description, onChangeProfileInput,
}) => (
  <>
    {editDescription ? (
      <form type="submit" onSubmit={handleSubmitDescription}>
        <div>
          <label htmlFor="description">
            Description
            <textarea name="description" id="description" type="text" value={description} onChange={(e) => onChangeProfileInput('user_description', e.target.value)} placeholder="Faire une courte description de vous" />
          </label>
        </div>
        <button type="submit">Envoyer</button>
        <button
          type="button"
          onClick={() => editFormToggle('editDescription')}
          className="myprofile__user--close-edit-description"
        >
          <i className="fas fa-times-circle" />
        </button>
      </form>
    ) : (
      <div className="myprofile__user--description">
        Description
        <span>
          <button
            type="button"
            onClick={() => editFormToggle('editDescription')}
            className="myprofile__user--edit-description"
          >
            <i className="fas fa-pen" />
          </button>
        </span>
        <p className="myprofile__user--description-details">{user.user_description}</p>
      </div>
    )}
  </>
);

Description.propTypes = {
  editFormToggle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  editDescription: PropTypes.bool.isRequired,
  handleSubmitDescription: PropTypes.func.isRequired,
  onChangeProfileInput: PropTypes.func.isRequired,
  user: PropTypes.shape({
    user_description: PropTypes.string,
  }),
};
Description.defaultProps = {
  user: {
    user_description: '',
  },
};

export default Description;
