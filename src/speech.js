export function playAnswer(answer, voice) {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(answer);
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(v => v.name.toLowerCase().includes(voice)) || voices[0];
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        window.speechSynthesis.speak(utterance);
    }
}