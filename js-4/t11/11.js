
let picArray = [
    {
        title: "Forest",
        image: {
            medium: "https://picsum.photos/id/10/400/300",
            large: "https://picsum.photos/id/10/1200/900"
        },
        caption: "A beautiful forest",
        description: "A picture of a green forest."
    },
    {
        title: "Mountain",
        image: {
            medium: "https://picsum.photos/id/29/400/300",
            large: "https://picsum.photos/id/29/1200/900"
        },
        caption: "A beautiful mountain",
        description: "A picture of a mountain."
    },
    {
        title: "Ocean",
        image: {
            medium: "https://picsum.photos/id/37/400/300",
            large: "https://picsum.photos/id/37/1200/900"
        },
        caption: "A beautiful ocean",
        description: "A picture of the ocean."
    }
];

let target = document.getElementById('target');

let dialog = document.querySelector('dialog');
let dialogImage = document.querySelector('dialog img');
let closeButton = document.querySelector('dialog span');

for (let pic of picArray) {

    let article = document.createElement('article');
    article.classList.add('card');

    let heading = document.createElement('h2');
    heading.textContent = pic.title;

    let figure = document.createElement('figure');

    let image = document.createElement('img');
    image.src = pic.image.medium;
    image.alt = pic.title;

    let caption = document.createElement('figcaption');
    caption.textContent = pic.caption;

    let description = document.createElement('p');
    description.textContent = pic.description;

    figure.appendChild(image);
    figure.appendChild(caption);

    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(description);

    article.addEventListener('click', function() {
        dialogImage.src = pic.image.large;
        dialogImage.alt = pic.title;
        dialog.showModal();
    });

    target.appendChild(article);
}

closeButton.addEventListener('click', function() {
    dialog.close();
});
