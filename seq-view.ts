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
//    onselect: SelectEventHandler | null = null;

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
        for (let i = 0; i < this.model.cols; i++) {
            let line: HTMLElement = document.createElement("div");
            //modified
            line.setAttribute("class", "line" + i);
            for (let i = 0; i < this.model.rows; i++) {

                let checkbox: HTMLInputElement = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                console.log(checkbox);
                line.appendChild(checkbox);
            }
            this.body.appendChild(line);
        }
    }


    play(): void {

        let sequence = 0;
        let repeat = (): void => {
            let temp = 0;
            //can change 7 in model
            let step = sequence % 7;
            let firstRow = this.body.querySelector(
                `.line${temp++} input:nth-child(${step + 1})`
            ) as HTMLInputElement;
            let secondRow = document.querySelector(
                `.line${temp++} input:nth-child(${step + 1})`
            ) as HTMLInputElement;
            let thirdRow = document.querySelector(
                `.line${temp++} input:nth-child(${step + 1})`
            ) as HTMLInputElement;
            
            sequence++;

            if (firstRow.checked) {
                this.model.playSoundOne();
            }
            if (secondRow.checked) {
                this.model.playSoundTwo();
            }
            if (thirdRow.checked) {
                this.model.playSoundThree();
            }

        };

        Tone.Transport.scheduleRepeat(repeat, "8n");
        Tone.Transport.start();


    }

    stop(): void {
        // stop the transport, which stop the sound
        Tone.Transport.stop();
    }






}



