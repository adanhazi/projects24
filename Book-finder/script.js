// Capture the search bar’s trimmed value.
const captureSearchValue = () => {
  return document.querySelector('#search-bar').value.trim();
};

// Filter books based on a provided search string.
// It uses flattenObjectValuesIntoArray() to flatten each book's values (title, author, tags)
// and returns only the books where at least one value (after lowercasing) exactly matches the search string.
const filterBooks = (searchString, books) => {
  const searchValue = searchString.toLowerCase();
  if (searchValue === "") return [...books];
  
  return books.filter(book => {
    // Use the helper function to flatten the book object into an array of values.
    const flattenedValues = flattenObjectValuesIntoArray([book])[0];
    // Check if any of the flattened values (converted to a string and lowercased) exactly match the search value.
    return flattenedValues.some(item => String(item).toLowerCase() === searchValue);
  });
};

// Convert the filtered books into HTML elements using the provided helper function.
const structureBooksAsHtml = (filteredBooks) => {
  return filteredBooks.map(book => structureBookAsHtml(book));
};

// When the user clicks the "Search" button, this function captures the search input,
// filters the books using the search string, formats the resulting books as HTML,
// and renders them to the DOM.
const searchBtnClickHandler = (books) => {
  const searchValue = captureSearchValue();
  const filteredBooks = filterBooks(searchValue, books);
  const booksHtml = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(booksHtml); 
};

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });