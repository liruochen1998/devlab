/*
author: Tony and Larry
View for sequencer, basically create all the user interface, representing a UI for the model
*/
import { SequencerController } from "./seq-controller";
import { Sequencer } from "./seq-model";
import * as Tone from "tone";

export class SequencerView {
    model: Sequencer;
    body: HTMLElement;

    constructor(model: Sequencer) {
        this.model = model;
        this.body = document.getElementById("mainbody") as HTMLElement;

        this.initialize();
        this.draw();
    }

    initialize(): void {
        let startButton: HTMLButtonElement = document.createElement("button");
        startButton.innerHTML = "start";
        startButton.setAttribute("id", "start");
        let stopButton: HTMLButtonElement = document.createElement("button");
        stopButton.innerHTML = "stop";
        stopButton.setAttribute("id", "stop");

        this.body.appendChild(startButton);
        this.body.appendChild(stopButton);
        this.body.appendChild(document.createElement("br"));
    }

    draw(): void {
        // now draw using divs
        let containerDiv: HTMLElement = document.createElement("div");
        containerDiv.setAttribute("id", "container");
        this.body.appendChild(containerDiv);
        for (let col = 0; col < this.model.cols; col++) {
            let colDiv: HTMLElement = document.createElement("div");
            colDiv.setAttribute("class", "column");
            containerDiv.appendChild(colDiv);
            for (let row = 0; row < this.model.rows; row++) {
                let rowDiv: HTMLElement = document.createElement("div");
                rowDiv.setAttribute("class", "row");
                rowDiv.onclick = () => {
                    if (rowDiv.className === "row") { 
                        rowDiv.setAttribute("class", "row filled");
                    } else {
                        rowDiv.setAttribute("class", "row");
                    }

                }; 
                colDiv.appendChild(rowDiv);
            }
        }
    }

    play(): void {
        let sequence = 0;
        let repeat = (): void => {
            let step = sequence % this.model.cols;
            for (let row = 0; row < this.model.rows; row++) {
                let checkbox = this.body.querySelector(
                    `.line${row} input:nth-child(${step + 1})`
                ) as HTMLInputElement;
                if (checkbox.checked) {
                    this.model.playSound(row);
                }
            }
            sequence++;
        };

        Tone.Transport.scheduleRepeat(repeat, "8n");
        Tone.Transport.start();
    }

    stop(): void {
        // stop the transport, which stop the sound
        Tone.Transport.stop();
    }
}



