import { LogsApi } from './modules/Logs';
import { UsersApi } from './modules/Users';
import { AuthApi } from './modules/Auth';

export default {
  ...new LogsApi(),
  ...new UsersApi(),
  ...new AuthApi(),
};
