// NFT constructor function
function NFT(name, eyeColor, shirtType, bling) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.shirtType = shirtType;
    this.bling = bling;
}

// Array to store all NFTs
let nftCollection = [];

// Function to create and add a new NFT to the collection
function mintNFT(name, eyeColor, shirtType, bling) {
    let newNFT = new NFT(name, eyeColor, shirtType, bling);
    nftCollection.push(newNFT);
}

// Function to print details of all NFTs in the collection
function printNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Bling: ${nft.bling}`);
        console.log('----------------------');
    });
}

// Minting some NFTs
mintNFT('Epic Dragon', 'Red', 'Armor', 'Golden Crown');
mintNFT('Mystic Phoenix', 'Blue', 'Flame Shirt', 'Ruby Necklace');
mintNFT('Shadow Wolf', 'Black', 'Leather Jacket', 'Silver Ring');

// Printing all NFTs
printNFTs();
