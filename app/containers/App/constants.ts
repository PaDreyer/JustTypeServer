/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */
enum ActionTypes {
    DEFAULT_ACTION = 'app/AppPage/DEFAULT_ACTION',

    LOGIN_REQUEST = 'app/AppPage/LOGIN_REQUEST',
    LOGIN_SUCCESS = 'app/AppPage/LOGIN_SUCCESS',
    LOGIN_FAILURE = 'app/AppPage/LOGIN_FAILURE',

    REGISTER_REQUEST = 'app/AppPage/REGISTER_REQUEST',
    REGISTER_SUCCESS = 'app/AppPage/REGISTER_SUCCESS',
    REGISTER_FAILURE = 'app/AppPage/REGISTER_FAILURE',

    AUTH_REQUEST = 'app/AppPage/AUTH_REQUEST',
    AUTH_SUCCESS = 'app/AppPage/AUTH_SUCCESS',
    AUTH_FAILURE = 'app/AppPage/AUTH_FAILURE',
  }
  
export default ActionTypes;
  