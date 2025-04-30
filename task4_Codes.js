// 1. JSON Data Structure

let books = [
  { "title": "Clean Code", "author": "Robert C. Martin", "year": 2008, "genre": "Software Engineering" },
  { "title": "Eloquent JavaScript", "author": "Marijn Haverbeke", "year": 2018, "genre": "Programming" },
  { "title": "HTML & CSS", "author": "Jon Duckett", "year": 2011, "genre": "Web Design" }
];



// 2. Displaying Data in HTML

function displayBooks() {
  const tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  books.forEach(book => {
    let row = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${book.genre}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}


// 3. Updating Book Data

function updateBook() {
  const title = document.getElementById("updateTitle").value;
  const author = document.getElementById("updateAuthor").value;
  const year = parseInt(document.getElementById("updateYear").value);
  const genre = document.getElementById("updateGenre").value;

  if (!title || !author || !year || isNaN(year) || !genre) {
    alert("All fields must be filled with valid data.");
    return;
  }

  const book = books.find(b => b.title === title);
  if (book) {
    book.author = author;
    book.year = year;
    book.genre = genre;
    displayBooks();
  } else {
    alert("Book not found.");
  }
}



// 4. Removing Book Data

function removeBook() {
  const title = document.getElementById("removeTitle").value;

  if (!title) {
    alert("Enter the title of the book to remove.");
    return;
  }

  books = books.filter(book => book.title !== title);
  displayBooks();
}
