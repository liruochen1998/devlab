import * as student from "./seq-model";
import * as Tone from "tone";

import { expect, assert } from "chai";

export function isClass(name: string, input: any) {
    if (input === undefined) {
        throw new Error(
            "Expected the class `" + name + 
            "` to be defined. Check spelling, case, and be sure you exported the class."
        );
    }
    expect(input).to.be.a("function");
}

interface Sequencer {
    rows: number;
    cols: number;
    grid: boolean[][];
    rowPitches: string[];
    rowInstruments: Tone.Instrument[];

    fillGridDiagonal: void;
    toggleCell: void;
    fillGridRandom: void;
    getPitchesArray: void;
    getInstrumentsArray: void;
    playSound: void;
}

describe("synth", () => {
    it("must be defined and exported", () => {
        isClass("Sequencer", student.Sequencer);
    });

    it("must have a constuctor", () => {
        isClass("Sequencer", student.Sequencer);
    });

    it("must have a method fillGridDiagonal", () => {
        isClass("Sequencer", student.Sequencer);
        let seq = new student.Sequencer(1, 1);
        expect(seq.fillGridDiagonal).to.not.be.an("undefined");
    });

    it("must have a method toggleCell", () => {
        isClass("Sequencer", student.Sequencer);
    });

    it("must have a method fillGridRandom", () => {
        isClass("Sequencer", student.Sequencer);
    });

    it("must ahve a method getPitchArray", () => {
        isClass("Sequencer", student.Sequencer);
    });

    it("must ahve a method getInstrumentsArray", () => {
        isClass("Sequencer", student.Sequencer);
    });

    it("must ahve a method playSound", () => {
        isClass("Sequencer", student.Sequencer);
    });

});


