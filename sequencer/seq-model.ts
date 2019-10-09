/*
author: Tony and Larry
Model for sequencer, it contains all the basic element for the project and handls all the logic, controller modifies model then update view
Potentially, we want this part to be the problem set so students can modify classes/functions in this file, leaving other two files untouched
*/

import { SequencerView } from "./seq-view";
import { SequencerController } from "./seq-controller";


export class Sequencer {
    rows: number;
    cols: number;
    grids: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
    }


    // some methods here

}



