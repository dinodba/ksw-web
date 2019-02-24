
// Init the Sohn Ppae Ki array
const sonpaki = ['sohn pa key one',
                 'sohn pa key two',
                 'sohn pa key three',
                 'sohn pa key four',
                 'sohn pa key five'
                ];

// Init the Ki Bon Soo array
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
                    'key bon soo fifteen'
                    ];

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
                        'sohn mock soo eleven'
                        ];

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

var technique = new SpeechSynthesisUtterance();

var button = document.getElementById('speak');

button.addEventListener('click', function(e) {
    var allTechniques = [];
    var spkCheck = document.getElementById('technique1');
    var kbsCheck = document.getElementById('technique2');
    var smsCheck = document.getElementById('technique3');
    if (spkCheck.checked == true) {
        allTechniques = allTechniques.concat(sonpaki);
    }
    if (kbsCheck.checked == true) {
        allTechniques = allTechniques.concat(kibonsoo);
    }
    if (smsCheck.checked == true) {
        allTechniques = allTechniques.concat(sohnmohksoo);
    }
    console.log(kbsCheck.checked);
    console.log(allTechniques);
    const shuffledkbs = shuffle(kibonsoo);
    const shuffledTechniques = shuffle(allTechniques);
    console.log(shuffledTechniques);
    console.log(allTechniques.length);
    var secondsDelay = document.getElementById("speakDelay").value || 2;
    console.log(secondsDelay);
    (function theLoop (i) {
        technique.voiceURI = "fiona";
        technique.lang = "en-scotland";
        technique.rate = 1.2;
        technique.text = shuffledTechniques[i-1];
        speechSynthesis.speak(technique);
        setTimeout(function () {
            if (--i) {
                theLoop(i);
            }
        }, 1000*secondsDelay);
    })(allTechniques.length);
});
