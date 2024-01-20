// practice  find, filter 

let friends = [
    { name: "Zelda", age: 12 },
    { name: "Amy", age: 21 },
    { name: "Chris", age: 47 },
    { name: "Tom", age: 18 }
];

//find - 1st who can take possible drive (over 16)
let firstDrivingAge = friends.find(function(friend){
    return friend.age > 16;
});

console.log(`firstDrivingAge`, firstDrivingAge);

let centenarian  = friends.find(function(friend){
    return friend.age > 100;
});

console.log(`centenarian `, centenarian );


//filter all who can vote (over 18)
let allWhoCanVote = friends.filter(function(friend){
    return friend.age >= 18;
});

console.log(`allWhoCanVote`, allWhoCanVote);

//sort, by name, by age, by email

// BONUS 

listFriends("");

sortFriends("name");

listFriends("name");

sortFriends("age");

listFriends("age");

function sortFriends(attrib) {
    friends.sort(function (a, b) {
        if (a[attrib] < b[attrib]) {
            return -1;
        } else if (a[attrib] > b[attrib]) {
            return 1;
        } else {
            return 0;
        }
    });
}

function listFriends(attrib) {
    if (attrib == "") {
        console.log("Friends as they appear in object:");
    } else {
        console.log(`Friends sorted by ${attrib}:`);
    }

    friends.forEach(function (friend) {
        console.log(`${friend.name} is ${friend.age} years old `);
    });

    console.log("****************************************");
}