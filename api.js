// Define the path to the JSON file you want to read
const fullPath = '/controller/JSON/arquivo.json';

// Use the fetch() method to fetch the JSON file
fetchJSONFile(fullPath)
    .then(data => {
        // After receiving the file data, create the table dynamically
        const table = createTable(data);
        console.log(table);
        // Add the table to the container element
        addTableToContainer(table);
        const cardContainer = createCardContainer();
        createCards(data.library.author, cardContainer);
        // Add the card container to the page element
        addCardContainerToPage(cardContainer);
    })
    .catch(error => console.error(error));

// Function to fetch a JSON file and return the parsed data
function fetchJSONFile(fullPath) {
    return fetch(fullPath)
        .then(response => response.json())
        .catch(error => console.error(error));
}

// Function to create the table dynamically based on the received data
function createTable(data) {
    console.log(data); // check if data has the expected structure
    console.log(data.library); // check if the library property is defined
    // Create the table element
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    // Define the table header columns and create the header row
    const headers = ["#", "Imagem", "Autor", "Livro", "Ano", "Sinopse", "Ação"];
    const thead = createTableHeader(headers);

    // Create the table body rows
    const tbody = createTableBody(data.library.author);

    // Append the header and body to the table element
    table.appendChild(thead);
    table.appendChild(tbody);

    // Return the completed table
    return table;
}


// Function to create the table header row dynamically
function createTableHeader(headers) {
    // Create the table header element
    const thead = document.createElement('thead');
    thead.classList.add('bg-dark', 'text-light');

    // Create the header row element and add each column to it
    const tr = document.createElement('tr');
    for (const header of headers) {
        const th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    }

    // Append the header row to the table header element
    thead.appendChild(tr);

    // Return the completed table header element
    return thead;
}

// Function to create the table body rows dynamically based on the received data
function createTableBody(authorList) {
    // Create the table body element
    const tbody = document.createElement('tbody');

    // Loop through each author and their books
    for (const author of authorList) {
        let id = 1;
        for (const book of author.book) {
            // Create a row element for each book
            const row = createTableRow(id, author.name, book);
            tbody.appendChild(row);
            id++;
        }
    }

    // Return the completed table body element
    return tbody;
}

// Function to create a table row with book data
function createTableRow(id, authorName, book) {
    // Create a new row element
    const row = document.createElement('tr');

    // Create a cell element for the book ID
    const idBook = document.createElement('td');
    idBook.textContent = id;
    row.appendChild(idBook);

    // Create a link element for the book image with the book link as the target
    const imageLink = createImageLink(book.image.url, book.link);
    // Create a cell element for the book image with the link as the content
    const imageCell = createImageCell(imageLink);
    row.appendChild(imageCell);

    // Create a cell element for the book author
    const authorCell = createTableCell(authorName);
    row.appendChild(authorCell);

    // Create a cell element for the book title
    const bookCell = createTableCell(book.title);
    row.appendChild(bookCell);

    // Create a cell element for the book year
    const yearCell = createTableCell(book.year);
    row.appendChild(yearCell);

    // Create a cell element for the book chapters with an ordered list
    const chapterCell = createChapterTableCell(book.chapter);
    row.appendChild(chapterCell);

    // Create a cell element for the action buttons
    const buttonsCell = createButtonsCell(book, imageLink.href);
    row.appendChild(buttonsCell);

    // Return the created row element
    return row;
}

/**
 * Creates a table cell containing an image link.
 * @param {Element} imageLink - The image link element to be added to the cell.
 * @returns {Element} - The table cell containing the image link.
 */
function createImageCell(imageLink) {
    const cell = document.createElement('td');
    cell.appendChild(imageLink);
    return cell;
}

// Function to create a link element with the book image and link
function createImageLink(imageUrl, linkUrl) {
    // Create a new link element with the book link as the target
    const link = document.createElement('a');
    link.href = linkUrl;
    link.target = '_blank';

    // Create a new image element with the book image URL as the source
    const image = document.createElement('img');
    image.src = imageUrl;
    image.style.width = '150px';

    // Add the image element to the link element and return the link element
    link.appendChild(image);
    return link;
}

// Function to create a cell element with the provided text content
function createTableCell(text) {
    // Create a new cell element with the text content and return it
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

// Function to create a cell element for the book chapters with an ordered list
function createChapterTableCell(chapterList) {
    // Create a new cell element
    const cell = document.createElement('td');
    // Create a new ordered list element
    const ol = document.createElement('ul');

    // Loop through each chapter in the chapter list and create a new list item for it
    for (const chapter of chapterList) {
        const li = document.createElement('li');
        li.textContent = chapter['#text'];
        ol.appendChild(li);
    }

    // Add the ordered list element to the cell element and return the cell element
    cell.appendChild(ol);
    return cell;
} function createButtonsCell(book, linkUrl) {
    const cell = document.createElement('td');

    // Create the info button
    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.classList.add('btn');
    button1.classList.add('btn-primary');
    button1.innerHTML = '<i class="bi bi-info-circle"></i>';

    // Add event listener to the info button
    button1.addEventListener('click', () => {
        // Get the book details
        const bookName = book.title;
        const bookYear = book.year;
        const bookLink = linkUrl;

        // Create and show the modal with the book details
        const modal = new bootstrap.Modal(document.getElementById('bookModal'), {});
        const modalTitle = document.getElementById('bookModalLabel');
        const modalName = document.getElementById('bookName');
        const modalYear = document.getElementById('bookYear');
        const modalLink = document.getElementById('bookLink');
        modalTitle.textContent = 'Detalhes do livro';
        modalName.textContent = 'Livro: ' + bookName;
        modalYear.textContent = 'Ano: ' + bookYear;
        modalLink.innerHTML = `<a href="${bookLink}" target="_blank">Comprar</a>`;
        modal.show();
    });

    // Add the info button to the cell
    cell.appendChild(button1);

    // Create the delete button
    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.classList.add('btn');
    button2.classList.add('btn-danger');
    button2.innerHTML = '<i class="bi bi-trash"></i>';

    // Add event listener to the delete button
    button2.addEventListener('click', () => {
        // Remove the row from the table
        row.remove();
    });

    // Add the delete button to the cell
    cell.appendChild(button2);

    return cell;
}

// Function to add the table element to the container element
function addTableToContainer(table) {
    // Get the element of the div where the table will be displayed
    const container = document.getElementById('table-container');
    // Add the table to the container element
    container.appendChild(table);
}

/// Create cards views

// Function to create the card container
function createCardContainer() {
    const container = document.createElement('div');
    container.classList.add('card-container');
    return container;
}

// Function to create cards based on the received data
function createCards(authorList, cardContainer) {
        let count = 0;
        for (const author of authorList) {
            for (const book of author.book) {
                if (count === 3) {
                    break; // exit the loop once three cards have been appended
                }
                const card = createCard(author.name, book.title, book.year, book.image.url, book.link);
                cardContainer.appendChild(card);
                count++;
            }
            if (count === 3) {
                break; // exit the loop once three cards have been appended
            }
        }
}

// Function to create a single card
function createCard(authorName, bookTitle, bookYear, imageUrl, linkUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.margin = '20px';
    card.style.width = '200px';
    const img = createCardImage(imageUrl, linkUrl);
    const author = createCardText(`${authorName}`);
    const title = createCardText(`${bookTitle}`);
    const year = createCardText(`${bookYear}`);
    const buyButton = document.createElement('a');
    buyButton.classList.add('btn', 'btn-primary');
    buyButton.href = linkUrl;
    buyButton.innerHTML = '<i class="bi bi-cart"></i> Comprar';

    card.appendChild(img);
    card.appendChild(author);

    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(buyButton);
    return card;
}

// Function to create an image inside the card
function createCardImage(imageUrl, linkUrl) {
    const imgContainer = document.createElement('a');
    imgContainer.href = linkUrl;
    imgContainer.target = '_blank';
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('card-img');
    imgContainer.appendChild(img);
    return imgContainer;
}

// Function to create a text element inside the card
function createCardText(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}

// Function to add the card container to the page element
function addCardContainerToPage(cardContainer) {
    const container = document.getElementById('card-container');
    container.appendChild(cardContainer);
}
