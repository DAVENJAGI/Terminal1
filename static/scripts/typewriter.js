document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById("h2text");
    const text = "Where all your GitHub data makes more sense !!!";
    let index = 0;

    function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
    } else {
        setTimeout(() => {
            textElement.textContent = "";
            index = 0;
        }, 1000);
    }

    setTimeout(typeWriter, 240);
    }
    typeWriter();
});