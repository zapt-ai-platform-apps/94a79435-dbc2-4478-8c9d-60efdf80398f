export function playAnswer(answer, voice) {
    const utterance = new SpeechSynthesisUtterance(answer);
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.name.toLowerCase().includes(voice));
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    speechSynthesis.speak(utterance);
}