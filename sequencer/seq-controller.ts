/* author: Tony and Larry
 controller for sequencer, basically it gets and handles user events and update model then view
 */
import { SequencerView } from "./seq-view";
import { Sequencer } from "./seq-model";

export class SequencerController {

    model: Sequencer;
    view: SequencerView;

    // can add some buttons here

    constructor(model: Sequencer, view: SequencerView) {
        this.model = model;
        this.view = view;


    }




}


