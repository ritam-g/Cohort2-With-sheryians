// Array of card objects
// Array of card objects
const cards = [
    {
        state: "Mountain Range",
        nature: "High altitude rocky mountains",
        description: "A peaceful region known for breathtaking sunrise views.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        state: "Evergreen Forest",
        nature: "Dense green woodland",
        description: "A quiet forest filled with ancient trees and wildlife.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        state: "Blue Ocean Coast",
        nature: "Wide open sea with strong waves",
        description: "A beautiful coastline perfect for marine exploration.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        state: "Crystal Lake",
        nature: "Calm and clear freshwater lake",
        description: "A peaceful spot surrounded by hills and pine trees.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    },
    {
        state: "Misty Waterfall",
        nature: "Tall natural waterfall",
        description: "A dramatic waterfall hidden deep in the forest.",
        image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699"
    }
];


let container=document.querySelector(".card-container");


cards.forEach((obj)=>{
container.innerHTML +=`<div class="card">
            <img src="${obj.image}" alt="">
            <div class="name">${obj.state}</div>
            <div class="description">${obj.description}</div>
        </div>`
})
