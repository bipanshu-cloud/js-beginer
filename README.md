
let nfts = [];


function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nfts.push(nft);
}


function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Eye Color: ${nft.eyeColor}`);
        console.log(`  Shirt Type: ${nft.shirtType}`);
        console.log(`  Bling: ${nft.bling}`);
        console.log('----------------------');
    });
}


function getTotalSupply() {
    return nfts.length;
}


mintNFT("CryptoPanda", "Blue", "Hoodie", "Gold Chain");
mintNFT("DigitalDragon", "Green", "T-Shirt", "Silver Ring");
mintNFT("VirtualUnicorn", "Pink", "Dress", "Diamond Tiara");

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);
0 comments on commit 76beed0
