import fs from 'fs';

export const CONNECTED_IPS = new Map();
export const Authorized_Players = new Map();
export const activeCustomMatches = new Map();
export const activeMatches = new Map();

const FILE = "rounds.json";

export function loadRounds() {
  if (!fs.existsSync(FILE)) return 0;
  const data = JSON.parse(fs.readFileSync(FILE));
  return data.roundsPlayed || 0;
}

export function saveRounds(rounds) {
  fs.writeFileSync(FILE, JSON.stringify({ roundsPlayed: rounds }));
}