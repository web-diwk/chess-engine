export class Piece {
  constructor(
    type: "King" | "Rook" | "Knight" | "Bishop" | "Pawn" | "Queen",
    color: "W" | "B"
  ) {
    this.type = type;
    this.color = color;
    const multiplier = color === "W" ? 1 : -1;
    if (type === "King") this.importance = 1500 * multiplier;
    else if (type === "Queen") this.importance = 900 * multiplier;
    else if (type === "Knight") this.importance = 300 * multiplier;
    else if (type === "Rook") this.importance = 500 * multiplier;
    else if (type === "Bishop") this.importance = 300 * multiplier;
    else this.importance = 100 * multiplier;
  }

  type: String = "";
  color: String = "";
  canMoveTo: boolean[][] = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];
  numOfMoves: number = 0;
  turnsSinceLastMove: number = 0;
  importance: number;
}
