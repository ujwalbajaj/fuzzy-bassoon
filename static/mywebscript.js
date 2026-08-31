function runEmotionDetection() {
    const text = document.getElementById("textToAnalyze").value;
    const responseElement = document.getElementById("system_response");

    fetch(
        `/emotionDetector?textToAnalyze=${encodeURIComponent(text)}`
    )
        .then(async response => {
            const message = await response.text();

            if (!response.ok) {
                throw new Error(message);
            }

            return message;
        })
        .then(message => {
            responseElement.innerText = message;
        })
        .catch(error => {
            responseElement.innerText = error.message;
        });
}
