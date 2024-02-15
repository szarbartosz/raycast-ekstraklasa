enum MATCH_RESULT {
  WIN = 0,
  DRAW = 1,
  LOSE = 2,
}

export type Standing = {
  position: number;
  teamName: string;
  logoUrl: string;
  lastResults: MATCH_RESULT[];
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  teamPoints: number;
};

export type Table = {
  standings: Standing[];
};
