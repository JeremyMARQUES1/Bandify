import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import authMiddleware from 'src/middlewares/authMiddleware';
import usersMiddleware from 'src/middlewares/usersMiddleware';
import signupMiddleware from 'src/middlewares/signupMiddleware';
import searchMiddleware from 'src/middlewares/searchMiddleware';
import chatMiddleware from 'src/middlewares/chatMiddleware';
import invitationMiddleware from 'src/middlewares/invitationMiddleware';
import notificationMiddleware from 'src/middlewares/notificationMiddleware';
import socketMiddleware from '../middlewares/socketMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    usersMiddleware,
    signupMiddleware,
    searchMiddleware,
    chatMiddleware,
    invitationMiddleware,
    socketMiddleware,
    notificationMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
