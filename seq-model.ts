/*
author: Tony and Larry
Model for sequencer, it contains all the basic element for the project and handls all the logic, controller modifies model then update view
Potentially, we want this part to be the problem set so students can modify classes/functions in this file, leaving other two files untouched
*/

import { SequencerView } from "./seq-view";
import { SequencerController } from "./seq-controller";
import * as Tone from "tone";
import { Instrument } from "tone";
import { getToneSynth } from "./synth";

/*
export class Oscillator {
    type: Tone.OscillatorType;
    frequency: number;
    
    constructor(type: Tone.OscillatorType) {
        this.type = type;
        this.frequency = 440;
    }
    get = (): Tone.Oscillator => {
        return new Tone.Oscillator(this.type).toMaster();
    }
}

export class Envelope {
    attack: number;
    decay: number;
    sustain: number;
    release: number;

    constructor(attack: number, decay: number, sustain: number, release: number) {
        this.attack = attack;
        this.decay = decay;
        this.sustain = sustain;
        this.release = release;
    }
    get = (): Tone.Envelope => {
        return new Tone.Envelope(this.attack, this.decay, this.sustain, this.release).toMaster();
    }
}

export class Synth {
    oscillator: Oscillator;
    envelope: Envelope;
    constructor(oscillator: Oscillator, envelope: Envelope) {
        this.oscillator = oscillator;
        this.envelope = envelope;
    }
}

let oscillator = new Oscillator("sine");
let envelope = new Envelope(0.005, 0.1, 0.3, 1);
let synth = getToneSynth(new Synth(oscillator, envelope));

// let synth = new Tone.Synth({
//     oscillator: {
//         type: "sine"
//     },
//     envelope: {
//         attack: 0.005,
//         decay: 0.1,
//         sustain: 0.3,
//         release: 1
//     }
// }).toMaster();


// export class PluckSynth {
//     attackNoise: number;
//     dampening: number;
//     resonance: number;

//     constructor(attackNoise: number, dampening: number, resonance: number) {
//         this.attackNoise = attackNoise;
//         this.dampening = dampening;
//         this.resonance = resonance;
//     }

//     getInstrument = (): Tone.PluckSynth => {
//         return new Tone.PluckSynth(this).toMaster();
//     }
// }
// let pluckSynth = new PluckSynth(0.5, 4000, 0.7).getInstrument().toMaster();

// Other instruments we could use
let membraneSynth = new Tone.MembraneSynth().toMaster();
let metalSynth = new Tone.MetalSynth().toMaster();

*/


let synth = new Tone.Synth().toMaster();
let synth2 = new Tone.Synth().toMaster();
let synth3 = new Tone.Synth().toMaster();
let synth4 = new Tone.Synth().toMaster();

/*
let pluckSynth = new Tone.PluckSynth().toMaster();
let membraneSynth = new Tone.MembraneSynth().toMaster();
let metalSynth = new Tone.MetalSynth().toMaster();
*/

export class Sequencer {
    rows: number;
    cols: number;
    grid: boolean[][] = new Array();
    rowPitches: string[];
    rowInstruments: Tone.Instrument[];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;

        for (let row = 0; row < rows; row++) {
            this.grid[row] = [];
            for (let col = 0; col < cols; col++) {
                this.grid[row][col] = false;
            }
        }

        this.rowPitches = this.getPitchesArray();
        let allInstruments = [synth, /*pluckSynth, */membraneSynth, metalSynth];
        this.rowInstruments = this.getInstrumentsArray(allInstruments);
        this.fillGridDiagonal();
        this.fillGridRandom(10);
    }

    fillGridDiagonal = (): void => {
        for (let i = 0; i < this.rows; i++) {
            this.grid[i][i] = true;
        }
    }

    toggleCell = (row: number, column: number): void => {
        this.grid[row][column] = !this.grid[row][column];
    }

    fillGridRandom = (count: number): void => {
        for (let i = 0; i < count; i++) {
            let randRow = getRandomInteger(this.rows);
            let randCol = getRandomInteger(this.cols);
            if (this.grid[randRow][randCol]) {
                i--;
            } else {
                this.grid[randRow][randCol] = true;
            }
        }
    }

    getPitchesArray = (): string[] => {
        let arr = [];
        for (let row = 0; row < this.rows; row++) {
            arr[row] = getRandomPitch(3, 5);
        }
        return arr;
    }

    getInstrumentsArray = (allInstruments: Tone.Instrument[]): Tone.Instrument[] => {
        let arr = [];
        for (let row = 0; row < this.rows; row++) {
            arr[row] = allInstruments[row % allInstruments.length];
        }
        return arr;
    }
    
    playSound(row: number): void {
        let instrument = this.rowInstruments[row];
        instrument.triggerAttackRelease(this.rowPitches[row], "8n");
    }
}

let getRandomInteger = (max: number): number => {
    return Math.floor(Math.random() * max);
};

let getRandomPitch = (minOctave: number, maxOctave: number): string => {
    let notes = ["A", "B", "C", "D", "E", "F", "G"];
    let randNote = notes[getRandomInteger(notes.length)];
    let randOctave = minOctave + getRandomInteger(maxOctave - minOctave + 1);
    return randNote + randOctave; 
};

