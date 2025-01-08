import { jwtDecode } from 'jwt-decode';

import baseService from './base';
import { ManagerLoginObject } from '../utils/types';

/**
 *Validates the JWT, decodes out the id and grabs the user from the database based on that ID
 * @param token - The JWT
 * @returns the user
 */
const loginManager = async (token: string): Promise<ManagerLoginObject> => {
  try {
    //calls to see if the token is valid. If not, a 401 gets sent. If the user exists, we get a 200 and are kicked back here
    const validated = await baseService.get('/auth/validate/me');
    console.log(`VALIDATED from login.ts service:`, validated);
    if (validated?.message !== 'success') {
      throw new Error(
        'token bad, something went wrong with frontend check of token'
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //decode the token to get the user id
    const decoded: any = jwtDecode(token);
    console.log(`DECODED from login.ts service:`, decoded);
    //set the user id
    const userId: string = decoded.id;
    //get the manager from the database based on the user id
    //HERE im thinking we need to get settings and stuff cauase we already know, based on the validate, that the token is good. So we should be able to get the user data from the token
    const managerSettings = await baseService.get(
      `/api/managers/settings/${userId}`
    );
    const { activeEvents, archivedEvents } = await baseService.get(
      `/api/managers/events/${userId}`
    );

    return { ...managerSettings, ...activeEvents, ...archivedEvents };
  } catch (error) {
    console.log(`ERROR in auth.ts in services:`, error);
    throw error;
  }
};

export default {
  loginManager,
};
