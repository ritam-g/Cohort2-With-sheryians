
let arr = [
    {
        team: "CSK",
        primary: "yellow",
        secondary: "blue",
        fullName: "Chennai Super Kings",
        trophies: 5,
        captain: "MS Dhoni"
    },
    {
        team: "MI",
        primary: "blue",
        secondary: "gold",
        fullName: "Mumbai Indians",
        trophies: 5,
        captain: "Hardik Pandya"
    },
    {
        team: "RCB",
        primary: "red",
        secondary: "black",
        fullName: "Royal Challengers Bengaluru",
        trophies: 0,
        captain: "Faf du Plessis"
    },
    {
        team: "KKR",
        primary: "purple",
        secondary: "gold",
        fullName: "Kolkata Knight Riders",
        trophies: 3,
        captain: "Shreyas Iyer"
    },
    {
        team: "RR",
        primary: "pink",
        secondary: "blue",
        fullName: "Rajasthan Royals",
        trophies: 1,
        captain: "Sanju Samson"
    },
    {
        team: "SRH",
        primary: "orange",
        secondary: "black",
        fullName: "Sunrisers Hyderabad",
        trophies: 1,
        captain: "Pat Cummins"
    },
    {
        team: "DC",
        primary: "blue",
        secondary: "red",
        fullName: "Delhi Capitals",
        trophies: 0,
        captain: "Rishabh Pant"
    },
    {
        team: "PBKS",
        primary: "red",
        secondary: "silver",
        fullName: "Punjab Kings",
        trophies: 0,
        captain: "Shikhar Dhawan"
    },
    {
        team: "GT",
        primary: "darkblue",
        secondary: "gold",
        fullName: "Gujarat Titans",
        trophies: 1,
        captain: "Shubman Gill"
    },
    {
        team: "LSG",
        primary: "skyblue",
        secondary: "orange",
        fullName: "Lucknow Super Giants",
        trophies: 0,
        captain: "KL Rahul"
    }
];
let parent=document.querySelector(".parent")

let box=document.querySelector(".parent > .box");


let btn=document.querySelector(".parent > button");

//! TODAYS TASK  


let trophiesI=document.querySelector(".parent h1 > i");

let teamName=box.children[0].children[0];
let fullName=box.children[1].children[0];
let captain=box.children[2].children[0];
btn.addEventListener("click",()=>{
    let team =arr[Math.floor(Math.random()*arr.length+1)]
    parent.style.background=`${team.secondary}`;
    box.style.background=`${team.primary}`;
    teamName.textContent=team.team;
    fullName.textContent=`${team.fullName}`;
    captain.textContent=`${team.captain}`;
    trophiesI.textContent=`${team.trophies}`
    
    
})











