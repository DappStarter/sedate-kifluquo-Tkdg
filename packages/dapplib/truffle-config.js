require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan remember pitch snow install merry forward gesture'; 
let testAccounts = [
"0xf7081fa7c147574c7ec77720fc1640ca595a0fd4aec181304ab5397359f49994",
"0xaba636d239543ee3ee72399334e2eb8737b8ded623de31965fa73c191ac94c52",
"0x41467b71271a35055021702e39beb47cbea87024583afe0b0997b51d045815b8",
"0xf40985473379a8bec1f3916e7e2ea0da0b7968d72945f397a549aa546a4c6eec",
"0x848f5ec6d3ac56ff13e2ec69c7c944b1433cb6bc711d3bfa03852c52055df738",
"0x83dd36bc5cd4a976bd9f450d7e198a9bbd4832716da48de305da53972d90bce9",
"0xbde77edb2e75995601c54b79269df8531a265626d06fb3b16955bd3b78831fab",
"0x18c88085a0ea017df9a3c61ff8ca8804d8643f6b99939eba84b9882bf499e922",
"0x7c86252f8a5c1d7f474548e7456b5232faae765545747cc01372632504797ac0",
"0x677ee5a2ae57d32d8927f2b153067213811ab2693d99266970e00965fb773517"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


