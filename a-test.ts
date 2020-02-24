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

describe("synth", () => {
    it("must be defined and exported", () => {
        isClass("Sequencer", student.Sequencer);
    });
});