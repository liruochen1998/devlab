

function demo_start() {
    let index = 0;

    // funtion to repeat
    Tone.Transport.scheduleRepeat(repeat, "6n");
    // defalut para start now 
    Tone.Transport.start();


    function repeat() {
        let step = index % 3;
        let firstRow = document.querySelector(
            `.first input:nth-child(${step+1})`
        );
        let secondRow = document.querySelector(
            `.second input:nth-child(${step+1})`
        );
        let thirdRow = document.querySelector(
            `.third input:nth-child(${step+1})`
        );
        index++;
        if (firstRow.checked) {
            let synth = new Tone.Synth().toMaster();
            synth.triggerAttackRelease('C4', '8n');
        }
        if (secondRow.checked) {
            let synth = new Tone.MembraneSynth().toMaster();
            synth.triggerAttackRelease("C2", "8n");
        }
        if (thirdRow.checked) {
            var synth = new Tone.AMSynth().toMaster();
            synth.triggerAttackRelease("C4", "4n");
        }
            

    }
}


$("button").click(function() {
    alert("Start!!!");
    demo_start();
});
