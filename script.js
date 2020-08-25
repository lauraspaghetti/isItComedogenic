console.log('script.js'); 

//Let's define a function that retrieve the user's entry
retrieve = () =>{
    const compoEntry=    document.getElementById('compo').value;
    // console.log(compoEntry);  
    return compoEntry.toLowerCase(); 
}; 

///Then let's apply a function to the form, preventing it to send the results to the server
//First we need to aim the form
const productForm=      document.getElementById('product-form'); 
console.log(productForm); 
//Next we set an event to the form, calling the function anytime the user submit the form
productForm.addEventListener("submit", onSubmit); 
//And finally we define that function 
function onSubmit(event){

    //preventing the form submission to the server
    event.preventDefault(); 

    //retrieving the user entry
    let compo= retrieve(); 
    //console.log(compo); 
    
    //converting the user's entry into an array
    stringToArray= (composition) => composition.split(/[,.]/g).map(item => item.trim());
    let compoArray= stringToArray(compo); 
    //console.log(compoArray); 

    //comparing the user's entry with the ingredients array 
    // console.log(ingredients); 
    let result=  document.getElementById('ingredients');
    for (let i= 0; i < ingredients.length; i++){
         
        let comedogenicIngredient= ingredients[i][0];
        console.log(comedogenicIngredient); 
        let comedogenicRate= ingredients[i][1]; 
        let irritationRate= ingredients[i][2]; 

        //console.log(`Ingredient from the list : ${comedogenicIngredient}, comedogenic rate : ${comedogenicRate}, irritation rate : ${irritationRate}`); 

        for (let i=0; i < compoArray.length; i++){
            let userEntryIngredient= compoArray[i];
            console.log(userEntryIngredient); 
            //is there any ingredients in the user's entry that matches our list of comedogenic ingredients ? 
            if (comedogenicIngredient === userEntryIngredient){
                //Yes, so if it's comedogenic, we display it and we show its comedogenic rate 
                if (comedogenicRate > 0){
                    console.log("This user's entry ingredient is comedogenic"); 
                    result.innerHTML+= `<p>${comedogenicIngredient.toUpperCase()}, comedogenic rate : ${comedogenicRate}</p>`; 
                }
                //And if the ingredient is irritating, we display it and we show its irritation rate 
                if (irritationRate > 0){
                    console.log("This user's entry ingredient is irritating");
                    result.innerHTML+= `${comedogenicIngredient.toUpperCase()}, irritation rate : ${irritationRate}`;  
                };

            }

        }//end of the user's entry loop

    }//end of the ingredient list loop

    //Once the comparison is done, if no matching ingredient is found, we want to inform the user that the composition of the product they entered is suitable for acne prone skin
    if (result.innerHTML === ""){

        result.innerHTML= "There is no comedogenic nor irritaing ingredient in the product you entered !"; 
        console.log("empty"); 
     }

};



