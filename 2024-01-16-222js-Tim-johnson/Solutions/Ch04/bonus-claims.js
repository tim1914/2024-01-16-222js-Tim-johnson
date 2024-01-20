const claims = [
    { id: 76125, description: 'Crash' },
    { id: 16542, description: 'Tire' },
    { id: 97326, description: 'Scratch' },
    { id: 2654, description: 'Scratch' }

];

console.log('claims :>> ', claims);

let highestId = claims[0];

for (const claimObject of claims) {
    if (claimObject.id > highestId.id) {
        highestId = claimObject;
    }
}

console.log('highestId :>> ', highestId);