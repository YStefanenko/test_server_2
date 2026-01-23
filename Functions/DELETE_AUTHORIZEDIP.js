import { CONNECTED_IPS, Authorized_Players } from "../globalVariables";

export default {
  name: 'DELETE_AUTHORIZEDIP',
  execute: async (centralWS, msg) => {
    const ip = msg.content.ip;

    Authorized_Players.delete(ip);
  }
};