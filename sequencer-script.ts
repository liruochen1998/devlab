/* Author: Tony and Larry

*/
import { Sequencer } from "./seq-model";
import { SequencerView } from "./seq-view";
import { SequencerController } from "./seq-controller";
import * as Tone from "tone";

export let main = (): void => {

    let model: Sequencer = new Sequencer(7, 7);
    let view: SequencerView = new SequencerView(model);
    let controller: SequencerController = new SequencerController(model, view);


    return;

};

main();