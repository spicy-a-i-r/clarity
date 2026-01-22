
let bookInfo = {
    "name": "boom",
    "chapters": 0
};
let currentChapter = 1;
let chaptersRead = 0;
let quotes = [
    '“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.” - George R.R. Martin',
    '“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.” - Oscar Wilde',
    `“You don't have to burn books to destroy a culture. Just get people to stop reading them.” - Ray Bradbury`
]

function getBookInfo() {

    bookInfo.name = capitalizeFirstLetter(prompt("what is the name of the book"))
    bookInfo.chapters = parseInt(prompt(`How many chapters does ${bookInfo.name} have?`))

    getCurrentBook();
    getTotalChapters();
    getCurrentChapter();
    getQuote();
    getChaptersRead();
    // returns book name and chapters
}



function getCurrentBook() {
    // checks bookInfo
    
    if (!bookInfo.name) {
        getBookInfo();
        return;
    }

    document.getElementById("current-book").innerText = bookInfo.name;
    
    console.log("got book name")
    // if no info, call getBookInfo
   
    // changes the value of "current-book" -> bookInfo["name"]
}

function getTotalChapters() {

    if (!bookInfo.chapters) {
        getBookInfo();
    } 
    // checks bookInfo
    // if no info, call it
    
    document.getElementById("total-chapters").innerText = bookInfo.chapters;
    // changes the value of "total-chapters" -> bookInfo["chapters"]
}

function getCurrentChapter() {
    // checks current chapter
    document.getElementById("current-chapter").innerText = currentChapter;

    //changes the value of "current-chapter" -> currentChapter
}

function getChaptersRead() {
    document.getElementById("chapters-read").innerText = chaptersRead;
    // changes value of "chapters-read" -> chaptersRead
}

function addChapter() {
    if (currentChapter == bookInfo.chapters) {
        bookInfo.name = capitalizeFirstLetter(prompt("you finished the book, whats the next book name?"));
        bookInfo.chapters = parseInt(prompt("How many chapters does this book have?"));
        chaptersRead = 0;
        currentChapter = 1;

        getCurrentBook();
        getCurrentChapter();
        getTotalChapters();
        getChaptersRead();
        
    }
    currentChapter += 1;
    chaptersRead += 1;
}

function subtractChapter() {
    currentChapter -= 1;
    chaptersRead -= 1;
}

function getQuote() {
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase()+String(val).slice(1);
}

