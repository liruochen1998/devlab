/*
author: Tony and Larry
View for sequencer, basically create all the user interface, representing a UI for the model
*/
import { SequencerController } from "./seq-controller";
import { Sequencer } from "./seq-model";
import { SelectEventHandler } from "../tone-of-life/gol-view";

export class SequencerView {

    model: Sequencer;
    background: HTMLElement;
    onselect: SelectEventHandler | null = null;

    constructor(model: Sequencer) {
        this.model = model;
        this.background = document.getElementById("background") as HTMLElement;
    }



}



