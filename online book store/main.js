function UpdateValues(){
   let name1 = document.getElementById("name1").value;
   let name2 = document.getElementById("name2").value;
   let name3 = document.getElementById("name3").value;
   let name4 = document.getElementById("name4").value;
   let author1 = document.getElementById("author1").value;
   let author2 = document.getElementById("author2").value;
   let author3 = document.getElementById("author3").value;
   let author4 = document.getElementById("author4").value;

   let cardsValue={
      Card1name1: name1,
      Card1Author1: author1,
      Card2Name2: name2,
      Card2Author2: author2,
      Card3Name3: name3,
      Card3Author3: author3,
      Card4Name4: name4,
      Card4Author4: author4
   }

   localStorage.setItem("cardsValue", JSON.stringify(cardsValue))
   
}


function loadCardsFromLocalStorage() {
   const storedCardsValue = localStorage.getItem("cardsValue");

   if (storedCardsValue) {
      const cardsValue = JSON.parse(storedCardsValue);
      console.log(cardsValue);

      document.getElementById("card1Name").textContent = cardsValue.Card1name1;
      document.getElementById("card1Author").textContent = cardsValue.Card1Author1;

      document.getElementById("card2Name").textContent = cardsValue.Card2Name2;
      document.getElementById("card2Author").textContent = cardsValue.Card2Author2;

      document.getElementById("card3Name").textContent = cardsValue.Card3Name3;
      document.getElementById("card3Author").textContent = cardsValue.Card3Author3;

      document.getElementById("card4Name").textContent = cardsValue.Card4Name4;
      document.getElementById("card4Author").textContent = cardsValue.Card4Author4;
   }
}

// Call the loadCardsFromLocalStorage function on page load
loadCardsFromLocalStorage();
