export async function askQuestionAPI({ question, image, voice }) {
    console.log("askQuestionAPI called with:", { question, image, voice });
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        question: question,
        answer: "This is the simulated answer for your question.",
        explanation: "Step-by-step explanation: First, consider the context. Then compute the answer based on available data.",
    };
}