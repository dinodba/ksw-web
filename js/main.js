
// Init the Sohn Ppae Ki array
const sonpaki = ['sohn pa ghi one',
                 'sohn pa ghi two',
                 'sohn pa ghi three',
                 'sohn pa ghi four',
                 'sohn pa ghi five'
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

// Init the Eue Bohk Soo array
const euebohksoo =  ['oobok soo one',
                     'oobok soo two',
                     'oobok soo three',
                     'oobok soo four',
                     'oobok soo five',
                     'oobok soo six',
                     'oobok soo seven',
                     'oobok soo eight',
                     'oobok soo nine',
                     'oobok soo ten',
                     'oobok soo eleven',
                     'oobok soo twelve',
                     'oobok soo thirteen'
                    ];

// Init the Sohn Mohk Soo array
const ahnsohnmohksoo =     ['ann sohnmock soo one',
                            'ann sohnmock soo two',
                            'ann sohnmock soo three',
                            'ann sohnmock soo four',
                            'ann sohnmock soo five',
                            'ann sohnmock soo six'
                            ];

// Init the Maek Chi Ki array
const maekchiki =      ['makcheegheh one',
                        'makcheegheh two',
                        'makcheegheh three',
                        'makcheegheh four',
                        'makcheegheh five',
                        'makcheegheh six',
                        'makcheegheh seven',
                        'makcheegheh eight',
                        'makcheegheh nine',
                        'makcheegheh ten',
                        'makcheegheh eleven',
                        'makcheegheh twelve',
                        'makcheegheh thirteen',
                        'makcheegheh fourteen',
                        'makcheegheh fifteen'
                        ];

// Init the Maek Cha Ki array
const maekchaki =      ['makchaah keh one',
                        'makchaah keh two',
                        'makchaah keh three',
                        'makchaah keh four',
                        'makchaah keh five',
                        'makchaah keh six',
                        'makchaah keh seven',
                        'makchaah keh eight',
                        'makchaah keh nine',
                        'makchaah keh ten',
                        'makchaah keh eleven',
                        'makchaah keh twelve',
                        'makchaah keh thirteen',
                        'makchaah keh fourteen',
                        'makchaah keh fifteen'
                        ];

// Init the Joo Muhk Maga Ki Bon Soo array
const joomuhk =      ['joo muhk maga ki bon soo one',
                        'joo muhk maga ki bon soo two',
                        'joo muhk maga ki bon soo three',
                        'joo muhk maga ki bon soo four',
                        'joo muhk maga ki bon soo five',
                        'joo muhk maga ki bon soo six',
                        'joo muhk maga ki bon soo seven',
                        'joo muhk maga ki bon soo eight',
                        'joo muhk maga ki bon soo nine',
                        'joo muhk maga ki bon soo ten',
                        'joo muhk maga ki bon soo eleven',
                        'joo muhk maga ki bon soo twelve',
                        'joo muhk maga ki bon soo thirteen',
                        'joo muhk maga ki bon soo fourteen',
                        'joo muhk maga ki bon soo fifteen'
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
    var obsCheck = document.getElementById('technique4');
    var asmsCheck = document.getElementById('technique5');
    var mckCheck = document.getElementById('technique6');
    var mck2Check = document.getElementById('technique7');
    var jmmCheck = document.getElementById('technique8');
    if (spkCheck.checked == true) {
        allTechniques = allTechniques.concat(sonpaki);
    }
    if (kbsCheck.checked == true) {
        allTechniques = allTechniques.concat(kibonsoo);
    }
    if (smsCheck.checked == true) {
        allTechniques = allTechniques.concat(sohnmohksoo);
    }
    if (obsCheck.checked == true) {
        allTechniques = allTechniques.concat(euebohksoo);
    }
    if (asmsCheck.checked == true) {
        allTechniques = allTechniques.concat(ahnsohnmohksoo);
    }
    if (mckCheck.checked == true) {
        allTechniques = allTechniques.concat(maekchiki);
    }
    if (mck2Check.checked == true) {
        allTechniques = allTechniques.concat(maekchaki);
    }
    if (jmmCheck.checked == true) {
        allTechniques = allTechniques.concat(joomuhk);
    }
    console.log(kbsCheck.checked);
    console.log(allTechniques);
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
