const properties = [
    {
        location: "Gardens",
        name: "Rose Villa",
        price: "R4,200,000",
        bedrooms: 3,
        bathrooms: 2,
        garages: 2,
        squareFeet: 1800,
        petFriendly: true,
        description: "Spacious family house with a beautiful garden.",
        propertyType: "House"
    },
    {
        location: "Gardens",
        name: "Lily Apartments",
        price: "R3,750,000",
        bedrooms: 2,
        bathrooms: 2,
        garages: 1,
        squareFeet: 1450,
        petFriendly: false,
        description: "Modern apartment with stunning city views.",
        propertyType: "Apartment/Flat"
    },
    {
        location: "Sea Point",
        name: "Ocean Breeze",
        price: "R8,500,000",
        bedrooms: 4,
        bathrooms: 3,
        garages: 2,
        squareFeet: 3000,
        petFriendly: true,
        description: "Luxury apartment with ocean views.",
        propertyType: "Apartment/Flat"
    },
    {
        location: "Sea Point",
        name: "Atlantic Tower",
        price: "R6,700,000",
        bedrooms: 3,
        bathrooms: 2,
        garages: 1,
        squareFeet: 2200,
        petFriendly: false,
        description: "Spacious flat with modern amenities.",
        propertyType: "Apartment/Flat"
    },
    {
        location: "Camps Bay",
        name: "Camps Bay Mansion",
        price: "R18,500,000",
        bedrooms: 6,
        bathrooms: 5,
        garages: 4,
        squareFeet: 5200,
        petFriendly: true,
        description: "Luxurious mansion with ocean views.",
        propertyType: "House"
    },
    {
        location: "Camps Bay",
        name: "Mountain Retreat",
        price: "R12,750,000",
        bedrooms: 4,
        bathrooms: 4,
        garages: 3,
        squareFeet: 3800,
        petFriendly: true,
        description: "Spacious retreat near the mountains.",
        propertyType: "House"
    },
    {
        location: "Green Point",
        name: "Greenpoint Villa",
        price: "R7,500,000",
        bedrooms: 4,
        bathrooms: 3,
        garages: 2,
        squareFeet: 2700,
        petFriendly: true,
        description: "Modern villa with a garden.",
        propertyType: "House"
    },
    {
        location: "Green Point",
        name: "The Urban Flat",
        price: "R6,300,000",
        bedrooms: 3,
        bathrooms: 2,
        garages: 2,
        squareFeet: 2000,
        petFriendly: false,
        description: "Stylish flat with city views.",
        propertyType: "Apartment/Flat"
    },
    {
        location: "Muizenberg",
        name: "Beachside Cottage",
        price: "R3,200,000",
        bedrooms: 3,
        bathrooms: 2,
        garages: 1,
        squareFeet: 1600,
        petFriendly: true,
        description: "Cottage just steps from the beach.",
        propertyType: "House"
    },
    {
        location: "Muizenberg",
        name: "Lakeview Apartments",
        price: "R2,500,000",
        bedrooms: 2,
        bathrooms: 1,
        garages: 1,
        squareFeet: 1200,
        petFriendly: false,
        description: "Affordable apartment with lake views.",
        propertyType: "Apartment/Flat"
    },
    {
        location: "Melkbosstrand",
        name: "Seaside Villa",
        price: "R6,500,000",
        bedrooms: 4,
        bathrooms: 3,
        garages: 2,
        squareFeet: 3200,
        petFriendly: true,
        description: "Luxury villa with direct beach access.",
        propertyType: "House"
    },
    {
        location: "Melkbosstrand",
        name: "Dune House",
        price: "R4,200,000",
        bedrooms: 3,
        bathrooms: 2,
        garages: 2,
        squareFeet: 2000,
        petFriendly: false,
        description: "Cozy house near the dunes.",
        propertyType: "House"
    }
];


// console.log(properties)

//Display all properties

let images = document.getElementById("container")
let displayProperties = "";

for(let i = 0; i < properties.length; i++){

    displayProperties += `
    <div class="card">
    <p><strong>Location:</strong> ${properties[i].location}</p>
    <p><strong>Description:</strong> ${properties[i].name}</p>
    <p><strong>Price:</strong> ${properties[i].price}</p>
    </div>
    `
images.innerHTML = displayProperties;
}


//Search Functionality
function findData(){

    //Gets input from searchbar and finds matching locations from properties array
    let searchInput = document.getElementById("search").value;

    let Output = document.getElementById("container")

    let displayOutput = "";

    // console.log(searchInput)

    for(let i = 0; i < properties.length; i++){
        if(searchInput == properties[i].location){
            displayOutput += `
            <div class="card">
            <p><strong>Location:</strong> ${properties[i].location}</p>
            <p><strong>Description:</strong> ${properties[i].name}</p>
            </div>
            `
        }
    }
    Output.innerHTML = displayOutput; 
}

//filter functionality




//filer
// price:
// bedrooms:
// bathrooms:
// garages:
// squareFeet:
// petFriendly:
// description:
// propertyType: