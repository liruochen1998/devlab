/*
author: Tony and Larry
Model for sequencer, it contains all the basic element for the project and handls all the logic, controller modifies model then update view
Potentially, we want this part to be the problem set so students can modify classes/functions in this file, leaving other two files untouched
*/

import { SequencerView } from "./seq-view";
import { SequencerController } from "./seq-controller";
import * as Tone from "tone";

let synth = new Tone.Synth().toMaster();

let guitarOptions = {
    attackNoise: 0.5,
    dampening: 4000,
    resonance: 0.7,
};
let guitar = new Tone.PluckSynth(guitarOptions).toMaster();

export class Sequencer {
    rows: number;
    cols: number;
    grid: boolean[][];
    pitches: string[] = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
    instruments: Tone.Instrument[] = [guitar, synth, guitar, synth, guitar, synth, guitar, synth];

    constructor(grid: boolean[][]) {
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
    }
    
    playSound(row: number): void {
        let instrument = this.instruments[row];
        instrument.triggerAttackRelease(this.pitches[row], "8n");
    }

    // some methods here

}

// export class Piano extends Tone.Synth {
// }

// export class Guitar extends Tone.PluckSynth {
// }

export class Drum {

}




