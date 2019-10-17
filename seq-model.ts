/*
author: Tony and Larry
Model for sequencer, it contains all the basic element for the project and handls all the logic, controller modifies model then update view
Potentially, we want this part to be the problem set so students can modify classes/functions in this file, leaving other two files untouched
*/

import { SequencerView } from "./seq-view";
import { SequencerController } from "./seq-controller";
import * as Tone from "tone";


export class Sequencer {
    rows: number;
    cols: number;
    grids: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
    }

    playSoundOne(): void {
        // play sound one
    }

    playSoundTwo(): void {
        // play sound two
    }
    
    playSoundThree(): void {
        // play sound three

    }

    // some methods here

}

export class Piano {

}

export class Guitar {

}

export class Drum {

}




