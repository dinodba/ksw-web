

// Init the Ki Bohn Soo array
const kibonsoo =   ['key bon soo one',
                    'key bon soo two',
                    'key bon soo three',
                    'key bon soo four',
                    'key bon soo five',
                    'key bon soo six',
                    'key bon soo seven',
                    'key bon soo eight',
                    'key bon soo nine',
                    'key bon soo ten',
                    'key bon soo eleven',
                    'key bon soo twelve',
                    'key bon soo thirteen',
                    'key bon soo fourteen',
                    'key bon soo fifteen'];

// Init the Sohn Mohk Soo array
const sohnmohksoo =    ['sohn mock soo one',
                        'sohn mock soo two',
                        'sohn mock soo three',
                        'sohn mock soo four',
                        'sohn mock soo five',
                        'sohn mock soo six',
                        'sohn mock soo seven',
                        'sohn mock soo eight',
                        'sohn mock soo nine',
                        'sohn mock soo ten',
                        'sohn mock soo eleven'];

function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

// Get the 'speak' button
var button = document.getElementById('speak');

var technique = new SpeechSynthesisUtterance();


button.addEventListener('click', function(e) {
    var secondsDelay = document.getElementById("speakDelay").value*1000 || 2000;
    console.log(secondsDelay);
    const shuffledkbs = shuffle(kibonsoo);
    console.log(shuffledkbs);
    console.log(shuffledkbs.length);
    (function theLoop (i) {
        setTimeout(function () {
            technique.voiceURI = "Fiona";
            technique.lang = "en-scotland";
            technique.text = shuffledkbs[i-1];
            speechSynthesis.speak(technique);
            if (--i) {
                theLoop(i);
            }
        }, secondsDelay);
    })(shuffledkbs.length);
});

/*
for (var i=0; i<5; i++) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(shuffledkbs[i]))
}


// Init SpeachSynth APE
const synth = window.speechSynthesis;

var randkbs = kibonsoo[Math.floor(Math.random() * kibonsoo.length)];

*/