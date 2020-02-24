import * as Tone from "tone";
import { Synth } from "./seq-model";

export let getToneSynth = (synth: Synth): Tone.Synth => {
    return new Tone.Synth(JSON.stringify(synth) as Tone.SynthOptions).toMaster();
};
