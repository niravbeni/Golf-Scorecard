export interface IHole {
  holeNumber: number;
  par: number;
  distance: number;
}

export interface IPlayer {
  id: number;
  name: string;
  points: number[];
}

export interface IHammerThrows {
  playerId: number;
  holeNumber: number;
  accepted: boolean;
  won: boolean;
  pointsWon: number;
}

export interface IData {
  holes: IHole[];
  players: IPlayer[];
  hammerThrows: IHammerThrows[];
}

export const data: IData = {
  holes: [
    { holeNumber: 1, par: 4, distance: 350 },
    { holeNumber: 2, par: 3, distance: 182 },
    { holeNumber: 3, par: 5, distance: 582 },
    { holeNumber: 4, par: 4, distance: 460 },
    { holeNumber: 5, par: 4, distance: 372 },
    { holeNumber: 6, par: 3, distance: 156 },
    { holeNumber: 7, par: 5, distance: 612 },
    { holeNumber: 8, par: 4, distance: 402 },
    { holeNumber: 9, par: 4, distance: 494 },
  ],
  players: [
    { id: 0, name: "Tiger Woods", points: [0, 1, 0, 0, 1, 0, 0, 1, 0] },
    { id: 1, name: "Rory McIlroy", points: [0, 0, 2, 0, 0, 0, 0, 0, 2] },
  ],
  hammerThrows: [
    { playerId: 0, holeNumber: 2, accepted: false, won: true, pointsWon: 1 },
    { playerId: 1, holeNumber: 3, accepted: true, won: true, pointsWon: 2 },
    { playerId: 0, holeNumber: 8, accepted: false, won: true, pointsWon: 1 },
    { playerId: 1, holeNumber: 9, accepted: true, won: true, pointsWon: 2 },
  ],
};
