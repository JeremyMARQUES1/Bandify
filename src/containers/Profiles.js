import { connect } from 'react-redux';
import Profiles from 'src/components/Profiles';

const mapStateToProps = (state) => ({
  users: state.users.users,
  user: state.users.user,
  connectedUserId: state.login.id,
  isLogged: state.login.isLogged,
  isDeleteModalClosed: state.settings.isDeleteModalClosed,
  editPhoto: state.users.editPhoto,
  editName: state.users.editName,
  editCity: state.users.editCity,
  editBirthdate: state.users.editBirthdate,
  editInstruments: state.users.editInstruments,
  editStyles: state.users.editStyles,
  editEmail: state.users.editEmail,
  editPassword: state.users.editPassword,
  editDescription: state.users.editDescription,
  firstName: state.users.user.firstName,
  lastName: state.users.user.lastName,
  dateOfBirth: state.users.user.dateOfBirth,
  emailInput: state.users.user.email,
  password: state.users.user.user_password,
  description: state.users.user.user_description,
  passwordShown: state.login.passwordShown,
  city: state.users.city,
  instrumentsData: state.settings.instruments,
  instruments: state.users.user.plays,
  stylesData: state.settings.musicstyles,
  levelsData: state.settings.levels,
  pendingInvitations: state.users.pendingInvitations,
  acceptedInvitations: state.users.acceptedInvitations,
  friends: state.users.friends,
  isDeleteFriendModalOpen: state.settings.isDeleteFriendModalOpen,
  isEditing: state.users.isEditing,
  isLoading: state.settings.isLoading,
  isProfileMenuOpen: state.settings.isProfileMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getOneMember: () => {
    dispatch({ type: 'GET_ONE_MEMBER' });
  },
  onDeleteProfile: () => {
    dispatch({ type: 'SAID_YES_TO_DELETE_PROFILE' });
  },
  onWishToDeleteProfile: () => {
    dispatch({ type: 'DELETE_PROFILE_WISH' });
  },
  editFormToggle: (key) => {
    dispatch({
      type: 'EDIT_FORM_TOGGLE',
      key,
    });
  },
  togglePasswordVisibility: () => {
    dispatch({ type: 'ON_PASSWORD_TOGGLE' });
  },
  onChangeProfileInput: (key, value) => {
    dispatch({
      type: 'CHANGE_INPUT_MODIFY_PROFILE',
      key,
      value,
    });
  },
  handleSubmitPhoto: (e, image) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_MODIFIED_PHOTO', image });
  },
  handleSubmitName: (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_MODIFIED_NAME' });
  },
  handleSubmitEmail: (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_MODIFIED_EMAIL' });
  },
  handleSubmitBirthdate: (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_MODIFIED_BIRTHDATE' });
  },
  handleSubmitDescription: (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_MODIFIED_DESCRIPTION' });
  },
  handleSubmitCity: (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_MODIFIED_CITY' });
  },
  handleSubmitStyles: (e, style) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_NEW_STYLE', style });
  },
  deleteStyle: (style) => {
    dispatch({ type: 'WISH_TO_DELETE_STYLE', style });
  },
  handleSubmitInstruments: (e, play) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_NEW_INSTRUMENT', play });
  },
  onCityChange: (key, value) => {
    dispatch({
      type: 'CHANGE_CITY_INPUT',
      key,
      value,
    });
  },
  onSelectInput: (e, index, key) => {
    dispatch({
      type: 'CHANGE_INSTRUMENT_LEVEL_ON_PROFILE',
      key,
      index,
      value: e.target.value,
    });
  },
  deleteInstrumentAssociation: (play) => {
    dispatch({
      type: 'WISH_TO_DELETE_INSTRUMENT_ASSOCIATION', play,
    });
  },
  sendInvitation: (id) => {
    dispatch({
      type: 'SEND_INVITATION_TO_USER', id,
    });
  },
  wishToDeleteFriend: () => {
    dispatch({ type: 'DELETE_FRIEND_WISH' });
  },
  deleteFromFriendList: (accepted,
    friends, acceptedUser, foundUser) => {
    dispatch({
      type: 'DELETE_FROM_FRIENDLIST', accepted, friends, acceptedUser, foundUser,
    });
  },
  toggleProfileMenuOpen: () => {
    dispatch({ type: 'TOGGLE_PROFILE_MENU' });
  },
  closeProfileMenu: () => {
    dispatch({ type: 'CLOSE_PROFILE_MENU' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
