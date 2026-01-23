import { CONNECTED_IPS, Authorized_Players } from "../globalVariables.js";

export default {
  name: 'DELETE_AUTHORIZEDIP',
  execute: async (msg) => {
    const ip = msg.content.ip;

    Authorized_Players.delete(ip);
  }
};