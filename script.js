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
    console.log(compo); 
    
    //converting the user's entry into an array
    stringToArray= (composition) => composition.split(/[,.]/g).map(item => item.trim());
    let compoArray= stringToArray(compo); 
    console.log(compoArray); 

    //comparing the user's entry with the ingredients array 
    // console.log(ingredients); 
    for (let i= 0; i < ingredients.length; i++){
        console.log(`Comedogenic ingredient : ${ingredients[i][0]}`); 
        let comedogenicIngredient= ingredients[i][0];

        for (let i=0; i < compoArray.length; i++){
            console.log(compoArray[i]); 

            if (comedogenicIngredient === compoArray[i]){
                console.log("There is a comedogenic ingredient in the user's entry"); 
            };
        };

    };
   
};



