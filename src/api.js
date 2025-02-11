export async function askQuestionAPI({ question, image, voice }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                answer: `This is the answer for: ${question || 'an image question'}`,
                explanation: `Explanation generated using the ${voice} voice.`,
            });
        }, 1000);
    });
}