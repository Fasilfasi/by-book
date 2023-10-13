//admin js
const bookDataArray = [];
function changePage2Values() {
   var bookName = document.getElementById("name").value;
   var bookAuthor = document.getElementById("author").value;
   // Use localStorage to store the values
   localStorage.setItem("bookName", bookName);
   localStorage.setItem("bookAuthor", bookAuthor);

   card={
      bookName:bookName,
      bookAuthor:bookAuthor
   }
   bookDataArray.push(card)
 }


//index js
























/*let cardvalue=[]
function updateCard(){

   var bookName = document.getElementById("name").value;
   var bookAuthor = document.getElementById("author").value;

   var bookTitleElement = document.getElementById("bookTitle");
   var bookAuthorElement = document.getElementById("bookAuthor");
 
   bookTitleElement.innerText = bookName;
   bookAuthorElement.innerText = bookAuthor;
  
   card={
      bookname:bookName,
      bookauthor:bookAuthor
   }
   cardvalue.push(card)
  
}*/





















//index js














































