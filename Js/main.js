// creazioni variabil e copia codici sconto
let availableDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calculateOffer(e){
    e.preventDefault();

    console.log("Prenvent default");
     
    let hours = parseInt(document.getElementById("hours").value);
    let optionTypeOffer = parseInt(document.getElementById("type-of-work").value);
    let discountCode = document.getElementById("discount-code").value;

    let finalPrice = 0;
    
   