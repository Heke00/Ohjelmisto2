let picArray = [
    {
        title: "Forest",
        image: {
            medium: "https://picsum.photos/id/10/400/300"
        },
        caption: "A beautiful forest",
        description: "A picture of a green forest."
    },
    {
        title: "Mountain",
        image: {
            medium: "https://picsum.photos/id/29/400/300"
        },
        caption: "A beautiful mountain",
        description: "A picture of a mountain."
    },
    {
        title: "Ocean",
        image: {
            medium: "https://picsum.photos/id/37/400/300"
        },
        caption: "A beautiful ocean",
        description: "A picture of the ocean."
    }
];

let section = document.getElementById('target');

for (let i = 0; i < picArray.length; i++) {

    let article = document.createElement('article');
    article.classList.add('card');

    let heading = document.createElement('h2');
    heading.textContent = picArray[i].title;

    let figure = document.createElement('figure');

    let image = document.createElement('img');
    image.src = picArray[i].image.medium;
    image.alt = picArray[i].title;

    let caption = document.createElement('figcaption');
    caption.textContent = picArray[i].caption;

    let paragraph = document.createElement('p');
    paragraph.textContent = picArray[i].description;

    figure.appendChild(image);
    figure.appendChild(caption);

    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(paragraph);

    section.appendChild(article);
}