import { CONNECTED_IPS, Authorized_Players } from "../globalVariables";

export default {
  name: 'SUBMIT_AUTHORIZEDIP',
  execute: async (centralWS, msg) => {
    const ip = msg.content.ip;
    const username = msg.content.username;
    const title = msg.content.title;
    const elo = msg.content.elo;

    CONNECTED_IPS.get(ip).authorized = true;

    Authorized_Players.set(ip, {ws: CONNECTED_IPS.get(ip).ws, username: username, title: title, elo: elo});
  }
};