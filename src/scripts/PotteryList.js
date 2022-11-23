/* Define and export a PotteryList function. */ 

/* The PotteryList function must get the items to be sold from the PotteryCatalog.js module. */ 

// ALGORITHMIC THINKING 
// The "catalogItems" paramater represents the approved list of pottery to be sold 

/* The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations. 

<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">Mug</h2>
  <div class="pottery__properties">
    Item weighs 3 grams and is 6 cm in height
  </div>
  <div class="pottery__price">Price is $20</div>
</section>

*/ 

/* The PotteryList function must then return a single string that contains ALL of the pottery HTML representation. */ 

// ALGORITHMIC THINKING 
// Define a new variable to hold the html string, which will be empty for now 
// Use string interpolation to for

export const potteryList = (catalogItems) => {

    let potteryHTML = ""

    // potteryHTML += `<section class="pottery"` 
    
    for (const catalogItem of catalogItems) {
        potteryHTML += `<section class="pottery" id="pottery--${catalogItem.primaryId}">` 
        potteryHTML += `<h2 class= "${catalogItem.shape}">${catalogItem.shape}</h2>`
        potteryHTML += `<div class="pottery_properties">` 
        potteryHTML += `Item weighs ${catalogItem.weight} and is ${catalogItem.height} in height`
        potteryHTML += `</div>`
        potteryHTML += `<div class="pottery_price">Price is $${catalogItem.price}` 
        potteryHTML += `</section>`
    }

    // potteryHTML += `</section>`

    return potteryHTML

}