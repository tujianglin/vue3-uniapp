import { LogsApi } from './modules/Logs';
import { UserApi } from './modules/User';

export default {
  ...new LogsApi(),
  ...new UserApi(),
};
