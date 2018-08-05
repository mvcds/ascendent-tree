import { combineReducers } from 'redux';

import notifications from './notifications';
import ascendentTree from './ascendent-tree';

export default combineReducers({
  notifications,
  ascendentTree,
})
