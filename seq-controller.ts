/* author: Tony and Larry
 controller for sequencer, basically it gets and handles user events and update model then view
 */
import { SequencerView } from "./seq-view";
import { Sequencer } from "./seq-model";
import * as Tone from "tone";

export class SequencerController {

    model: Sequencer;
    view: SequencerView;

    // can add some buttons here
    startButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
    testButton: HTMLButtonElement;

    constructor(model: Sequencer, view: SequencerView) {
        this.model = model;
        this.view = view;

        this.startButton = document.getElementById("start") as HTMLButtonElement;
        this.stopButton = document.getElementById("stop") as HTMLButtonElement;
        this.testButton = document.getElementById("test") as HTMLButtonElement;

        this.initEvents();

    }
    
    initEvents(): void {
        this.startButton.onclick = this.start.bind(this);
        this.stopButton.onclick = this.stop.bind(this);
    }

    start(): void {
        // play the sound
        this.view.play_sync();

    }

    stop(): void {
        // stop playing the sound
        this.view.stop();
    }
    
}