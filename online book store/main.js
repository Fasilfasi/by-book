



function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth'});
  }
}


// View html 


//admin page 
function updateValues() {

   const imageFile = document.getElementById("imageFile").files[0];
   const name1 = document.getElementById("name1").value;
   const bkPrice = document.getElementById("bkPrice").value;    
   const bkauthor = document.getElementById("bkauthor").value;    
   if (!imageFile) {
    alert("Please select an image");
    return;
 }  
 if (!name1) {
    alert("Please enter a book name");
    return;
 }
 if (!bkauthor) {
   alert("Please enter a book author");
   return;
}
 if (!bkPrice) {
    alert("Please enter a book price");
    return;
 }

   if (imageFile && name1 && bkPrice && bkauthor) {
       const reader = new FileReader();                                                                                  // Store values in local storage
       reader.onload = function(event) {
           const img1 = event.target.result;
           const cardData = {
               img: img1,
               name: name1,
               price: bkPrice,
               Author: bkauthor
           };
// Check if local storage already has data
                  
           let cardsData = JSON.parse(localStorage.getItem("cardsData")) || [];
           cardsData.push(cardData);           
           localStorage.setItem("cardsData", JSON.stringify(cardsData));
           
// Create and append a card
           const cardContainer = document.getElementById("cards_landscape_wrap-2");
           const newCard = createCard(img1, name1, bkPrice,bkauthor);
           cardContainer.appendChild(newCard);  
       
       };

       reader.readAsDataURL(imageFile);
   }

     document.getElementById("imageFile").value = "";
     document.getElementById("name1").value = "";
     document.getElementById("bkPrice").value = "";
     document.getElementById("bkauthor").value = "";
}




function createCard(imgUrl, bookName, BookPrice, ) {
   const cardDiv = document.createElement("div");
   cardDiv.className = "col-xs-12 col-sm-6 col-md-3 col-lg-3";

   cardDiv.innerHTML = `
       <a href="" class="card-link">
           <div class="card-flyer">
               <div class="text-box">
                   <div class="image-box">
                       <span onclick="View()"  id="books"><img src="${imgUrl}" alt="" /></span>
                   </div>
                   <div onclick="View()" class="text-container">
                       <h6>${bookName}</h6>
                       <p><span style="font-weight: 900; margin-right: -5px;">₹</span> <span style="font-weight: 700;">${BookPrice}</span></p>
                   </div>
               </div>
           </div>
       </a>
   `;
   return cardDiv;
}

// Function to initialize(arambikkunnu) cards from local storage
function initializeCardsFromLocalStorage() {
   const cardsData = JSON.parse(localStorage.getItem("cardsData"));

   if (cardsData) {
       const cardContainer = document.getElementById("cards_landscape_wrap-2");

       cardsData.forEach(cardData => {
           const newCard = createCard(cardData.img, cardData.name, cardData.price);
           console.log(newCard)
           cardContainer.appendChild(newCard);
       });
   }
}
// Call the initialization function
initializeCardsFromLocalStorage();












// sign in page
function signin(){
   let firstname= document.getElementById("firstname").value
   let lastname= document.getElementById("lastname").value
   let email= document.getElementById("exampleInputEmail1").value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Enter a valid Gmail address");
        return;}
   let password= document.getElementById("exampleInputPassword1").value

   let sing_in={
    firstnamename:firstname,
    lastname:lastname,
    email:email,
    password:exampleInputPassword1,
}
if (
  firstname === "",
  lastname === "",
  email === "" ,
  password === ""
){
  alert("Fill Form");
} else if (password.length !== 8) {
  alert("password must be 8 letters"); 
}else{
alert("Sign In successfull")
window.open("index.html")
if (window.opener) {
  window.opener.document.getElementById("signUp").style.display = "none";
  }  
  
}
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("signUp").style.display = "none";
});
}















function View() {
   // Values to be passed as query parameters
   const imgUrl = "image_url_here";
   const bookName = "book_name_here";
   const bookPrice = "book_price_here";

   // Construct the URL with query parameters
   const url = `view.html?img=${encodeURIComponent(imgUrl)}&name=${encodeURIComponent(bookName)}&amount=${encodeURIComponent(bookPrice)}`;

   // Open the new page with the constructed URL
   window.open(url);
}































































