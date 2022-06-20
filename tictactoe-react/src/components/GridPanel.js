import React, { Component } from "react";
import CrossToken from "./CrossToken";
import NoughtToken from "./NoughtToken";
import { getMovement } from "../services/api";

class GridPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPos: 4,
      cells: [null, null, null, null, null, null, null, null, null],
    };
  }

  render() {
    const cells = this.state.cells;
    return (
      <div className="grid">
        {cells.map((value, pos) => {
          return (
            <div className="cell" key={pos} onClick={() => this.play(pos)}>
              {value === 0 && <CrossToken />}
              {value === 1 && <NoughtToken />}
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.setInitialDisposition();
  }

  setInitialDisposition() {
    this.move(1, this.state.initialPos);
  }
  /**
   * 0 = Cross (User), 1 = Nought (Machine)
   */
  move(user, position) {
    const cells = [...this.state.cells];
    position ??= this.state.initialPos;
    cells[position] ?? cells.splice(position, 1, user);
    this.setState({ cells });
  }
  /**
   * Permforms user's move a triggers the next turn
   */
  async play(position) {
    this.move(0, position);
    this.getStatus() || (await this.getComputerPosition());
  }
  /**
   * Get computer's next move
   */
  async getComputerPosition() {
    const move = await getMovement(this.state.cells);
    this.move(1, move);
    this.getStatus();
  }
  /**
   * Checks the game status (is there a winner?)
   */
  getStatus() {}
}

export default GridPanel;
