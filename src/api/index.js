export async function askQuestionAPI({ question, image, voice }) {
    let body;
    let headers = {};

    if (image) {
        body = new FormData();
        body.append('question', question);
        body.append('image', image);
        body.append('voice', voice);
    } else {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify({ question, voice });
    }

    const response = await fetch('/api/askQuestion', {
        method: 'POST',
        headers,
        body,
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
}