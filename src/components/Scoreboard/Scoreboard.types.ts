import { IPlayer, IHole, IHammerThrows } from "../../constants/data";

export interface IScoreboard {
  players: IPlayer[];
  holes: IHole[];
  hammerThrows: IHammerThrows[];
  currentHole: number;
  currentPlayer: number;
}
