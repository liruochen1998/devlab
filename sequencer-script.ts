/* Author: Tony and Larry

*/
import { Sequencer } from "./seq-model";
import { SequencerView } from "./seq-view";
import { SequencerController } from "./seq-controller";
import * as Tone from "tone";

export let main = (): void => {

    let rows = 4;
    let cols = 8;
    let grid = new Array(rows).fill(false).map(
        () => new Array(cols).fill(false));
    grid[2][3] = true;

    let model: Sequencer = new Sequencer(grid);
    let view: SequencerView = new SequencerView(model);
    let controller: SequencerController = new SequencerController(model, view);

    return;
};

main();