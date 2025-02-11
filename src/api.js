export async function askQuestionAPI({ question, image, voice }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        answer: `This is the answer for: ${question}`,
        explanation: 'This is the explanation for your question.'
    };
}