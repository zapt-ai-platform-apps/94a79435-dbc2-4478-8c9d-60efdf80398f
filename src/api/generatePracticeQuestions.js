export async function generatePracticeQuestions() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const generated = Array.from({ length: 3 }, (_, i) => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        return {
            id: i + 1,
            question: `What is ${num1} + ${num2}?`,
            correctAnswer: num1 + num2,
            userAnswer: "",
            isCorrect: null,
        };
    });
    return generated;
}