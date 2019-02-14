

const msg = new SpeechSynthesisUtterance();

msg.volume = 1;
msg.rate = 1;
msg.pitch = 1;
//msg.text = "Key Bon Soo";
msg.voiceURI = "Fiona";
msg.lang = "en-scotland";

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
                    'key bon soo fifteen'];

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

const shuffledkbs = shuffle(kibonsoo);
console.log(shuffledkbs);

var technique = new SpeechSynthesisUtterance();


(function theLoop (i) {
    setTimeout(function () {
        technique.voiceURI = "fiona";
        technique.lang = "en-scotland";
        technique.text = shuffledkbs[i-1];
        speechSynthesis.speak(technique);
        if (--i) {
            theLoop(i);
        }
    }, 1000);
})(3);


/*
for (var i=0; i<5; i++) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(shuffledkbs[i]))
}
*/



/*
// Init SpeachSynth APE
const synth = window.speechSynthesis;

// DOM elements
const textForm = document.querySelector('form');
const voiceSelect = document.querySelector('#voice-select');

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
                    'key bon soo fifteen'];

var randkbs = kibonsoo[Math.floor(Math.random() * kibonsoo.length)];

// Init the voices array
let voices = [];

const getVoices =  () => {
    voices = synth.getVoices();
    
    // Loop through voices and create an option for each one
    voices.forEach(voice => {
        // Create option element
        const option = document.createElement('option');
        // Fill option with the voice and language
        option.textContent = voice.name + '('+ voice.lang +')';

        // Set needed option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}


// Speak
const speak = () => {
    // Check if speaking
    if(synth.speaking) {
        console.error('Already speaking...');
        return;
    }
    //if(textInput.value !== '') {
        // Get speak text
        // const speakText = new SpeechSynthesisUtterance(textInput.value);
        const speakText = new SpeechSynthesisUtterance(randkbs);
        // Speak end
        speakText.onend = e => {
            console.log('Done speaking...');
    //    }

        // Speak error
        speakText.onerror = e => {
            console.error('Something went wrong');
        }

        // Selected voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        // Loop through voices
        voices.forEach(voice => {
            if(voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });

        // Set pitch and rate
        //speakText.rate = rate.value;
        speakText.rate = 1;
        //speakText.pitch = pitch.value;
        speakText.pitch = 1;
        // Speak
        synth.speak(speakText);
    }
};

// EVENT LISTENER

// Text form submit
//textForm.addEventListener('submit', e => {
//    e.preventDefault();
//    speak();
//    textInput.blur();
//});

// Rate value change
//rate.addEventListener('change', e => rateValue.textContent = rate.value)

// Pitch value change
//pitch.addEventListener('change', e=> pitchValue.textContent = pitch.value)

// Voice select change
voiceSelect.addEventListener('change', e => speak());
*/