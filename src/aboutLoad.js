function homeLoad() {
    const image = document.createElement('img');
    image.src = '../image.jpg';
    image.alt = "restaurant logo";
    image.width = '200';
    const content = document.getElementById("content");
    content.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "About";
    content.appendChild(headline);

    const text = document.createElement('p');
    text.textContent = "This about is bussin";
    content.appendChild(text);
}

export default homeLoad;