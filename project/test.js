

function demo_start() {
    let index = 0;

    // funtion to repeat
    Tone.Transport.scheduleRepeat(repeat, "8n");
    // defalut para start now 
    Tone.Transport.start();


    function repeat() {
        let step = index % 6; 
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
            playSoundOne();
        }
        if (secondRow.checked) {
            playSoundTwo();
        }
        if (thirdRow.checked) {
            playSoundThree();
        }
    }
}

/*
$("#test").click(function() {
    alert("test clicked");
    $(this).data('clicked', true);

});
function test() {
if ($("test").data('clicked')) {
    alert("yes!");
} else {
    alert("no");
}
}
*/

function playSoundOne() {
    let synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease('C4', '8n');
}
function playSoundTwo() {
    let synth = new Tone.MembraneSynth().toMaster();
    synth.triggerAttackRelease("C2", "8n");
}
function playSoundThree() {
    var synth = new Tone.AMSynth().toMaster();
    synth.triggerAttackRelease("C4", "4n");
}




$("#start").click(function() {
    alert("Start!!!");
    demo_start();
});

$("#stop").click(function() {
    alert("stop!!!");
    Tone.Transport.stop();
});
