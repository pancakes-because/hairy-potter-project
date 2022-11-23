/* Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array. */ 

let saleItems = []

/* Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold. */ 

/* The toSellOrNotToSell function must accept a pottery object as input. */ 

/* 

If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.

If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.

If the piece of pottery is cracked, do not add a price property to it.

If the pottery is not cracked, add the object to the module-level array of items to be sold. 

*/ 

// ALROGITHMIC THINKING 
// I'm naming the pottery I've made and baked "potteryObject", which is passed in as a parameter
// The variable storing an empty array that I made above, "saleItems" 

/* Return the augmented object. */ 

export const toSellOrNotToSell = (potteryObject) => {

    if (potteryObject.weight >= 6 && potteryObject.cracked === false) {
        potteryObject.price = 40 
        saleItems.push(potteryObject)
    } else if (potteryObject.weight <= 6 && potteryObject.cracked === false) {
        potteryObject.price = 20
        saleItems.push(potteryObject) 
    } 
    return saleItems
}


/* Define and export a function named usePottery returns a copy of the array of items to be sold. Recall which array method creates a copy of the array. */ 

// ALGORITHMIC THINKING 
// I need to make a copy of the saleItems array, which should have my sale items in it now.
// Use the .map array method to make a copy of the "saleItems" array. 


// example of .map array method 
// export const getCities = () => {
//     return database.cities.map((city) => ({ ...city }));
//   }; 

export const usePottery = () => { 
    return saleItems.map(saleItem => ({ ...saleItem }));
}; 