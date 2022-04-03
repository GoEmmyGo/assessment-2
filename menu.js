///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

let pizza = {
    name: `olive`,
    price: 13,
    category: `Main Course`,
    popularity: 1,
    rating: 100,
    tags: [`superb`, `winner`, `if you hate olives, shut up`]
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1])
/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let {price: cost} = pizza

//let {price} = pizza

console.log(cost)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
const {category} = pizza

console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

//Had to bail and start the design portion here

const foodArr = [
   {name: `Mushroom Pizza`,
    price: 13,
    category: `Main Dish`,
    popularity: 1,
    rating: 100,
    tags: [`Alfredo Sauce`, 'Rich']
    },
    {name: `Hot Wings`,
    price: 7,
    category: `Starters`,
    popularity: 3,
    rating: 97,
    tags: [`Deadly spicy`, 'Milk is not an option', 'Top Ten']
    },
    {name: `Soft Pretzels`,
    price: 8,
    category: `Starters`,
    popularity: 5,
    rating: 89,
    tags: [`Mustard Lovers`, `Cheese Dip`, `Kid-Friendly`]
    },
    {name: `Oreo Cheesecake`,
    price: 6,
    category: `Desserts`,
    popularity: 1,
    rating: 99,
    tags: [`Zagat Rated`, `Decadent`, `Must-Have`]
    },
    {name: `Hazy IPA`,
    price: 5,
    category: `Drinks`,
    popularity: 1,
    rating: 98,
    tags: [`Super Sour`, `Floral`]
    },
 ]
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

//const filteredFood = foodArr.filter('superb')

const filteredFood = foodArr.filter(pizzaTagsCallback => {
    return pizzaTagsCallback.tags.includes('Zagat Rated')
    })

console.log(filteredFood)
//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

const filterByProperty = (property, number, type) => {
    const filteredArr = foodArr.filter(pizza => {
        if (type === 'above') {
            return pizza[property] > number
        } else if (type === 'below') {
            return pizza[property] < number
        } else {
            return 'you did not pass a valid type'
        }
    })
    return filteredArr
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty('popularity', 1, 'above'))