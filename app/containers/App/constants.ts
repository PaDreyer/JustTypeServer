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

    USER_NOTIFICATION_REQUEST = 'app/HomePage/USER_NOTIFICATION_REQUEST',
    USER_NOTIFICATION_SUCCESS = 'app/HomePage/USER_NOTIFICATION_SUCCESS',
    USER_NOTIFICATION_FAILURE = 'app/HomePage/USER_NOITIFICATION_FAILURE',

    USER_GROUP_REQUEST = 'app/HomePage/USER_GROUP_REQUEST',
    USER_GROUP_SUCCESS = 'app/HomePage/USER_GROUP_SUCCESS',
    USER_GROUP_FAILURE = 'app/HomePage/USER_GROUP_FAILURE',

    USER_GROUP_BETS_REQUEST = 'app/HomePage/USER_GROUP_BETS_REQUEST',
    USER_GROUP_BETS_SUCCESS = 'app/HomePage/USER_GROUP_BETS_SUCCESS',
    USER_GROUP_BETS_FAILURE = 'app/HomePage/USER_GROUP_BETS_FAILURE',

    USER_GROUP_CREATE_REQUEST = 'app/HomePage/USER_GROUP_CREATE_REQUEST',
    USER_GROUP_CREATE_SUCCESS = 'app/HomePage/USER_GROUP_CREATE_SUCCESS',
    USER_GROUP_CREATE_FAILURE = 'app/HomePage/USER_GROUP_CREATE_FAILURE',

    USER_FRIENDS_REQUEST = 'app/Bets/USER_FRIENDS_REQUEST',
    USER_FRIENDS_SUCCESS = 'app/Bets/USER_FRIENDS_SUCCESS',
    USER_FRIENDS_FAILURE = 'app/Bets/USER_FRIENDS_FAILURE',

    USER_BETS_REQUEST = 'app/HomePage/USER_BETS_REQUEST',
    USER_BETS_SUCCESS = 'app/HomePage/USER_BETS_SUCCESS',
    USER_BETS_FAILURE = 'app/HomePage/USER_BETS_FAILURE',

    USER_BETS_CREATE_REQUEST = 'app/HomePage/USER_BETS_CREATE_REQUEST',
    USER_BETS_CREATE_SUCCESS = 'app/HomePage/USER_BETS_CREATE_SUCCESS',
    USER_BETS_CREATE_FAILURE = 'app/HomePage/USER_BETS_CREATE_FAILURE',
  }

export default ActionTypes;

