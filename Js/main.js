// creazioni variabil e copia codici sconto
let availableDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calculateOffer(e){
    e.preventDefault();

    console.log("Prenvent default");
     
    let hours = parseInt(document.getElementById("hours").value);
    let optionTypeOffer = parseInt(document.getElementById("type-of-work").value);
    let discountCode = document.getElementById("discount-code").value;

    let finalPrice = 0;
    
    // switch per le commissioni 
    switch(optionTypeOffer){
        case 1:
            // offerta backend 
            finalPrice = 20.5 * hours;
            break;
        case 2:
            // offerta frontend 
            finalPrice = 15.3 * hours;
            break;
        case 3:
            // offerta project analysis 
            finalPrice = 33.6 * hours;
    }
 // Verifico e applicazione sconti
 let DiscountCodePresent = false;
 for(let i = 0; i < availableDiscountCodes.length; i++){
     if(availableDiscountCodes[i] == discountCode){
         DiscountCodePresent = true;

         // rimuovere il codice sconto una volta usato,
         
         availableDiscountCodes.splice(i, 1); 

         break;
     }
 }

 if((discountCode != "") && !DiscountCodePresent){
    alert("Il codice sconto inserito non è valido");

    // codice sconto errato di colore rosso
    document.getElementById("discount-code").classList.add("text-danger");
}

if(DiscountCodePresent){
    finalPrice = 0.75 * finalPrice;
}

finalPrice = finalPrice.toFixed(2);

document.getElementById("price").innerHTML = "Il prezzo finale è di: " + finalPrice;
}

  