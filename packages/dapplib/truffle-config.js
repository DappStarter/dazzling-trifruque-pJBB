require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind mixture harvest crime outer time'; 
let testAccounts = [
"0xfe7d371319d71fd8fb7c28b0b0db34cb7c0c4c9c391f07abef6a7a0733f7edc7",
"0x6799e83abca58d35e8a58e237b2b50a07f310f37b1b7427154748991721f774f",
"0x25fa59426423491c90caf1244f09cd736e7d0de851c3017bb01167e7ffc5217e",
"0xe36c03402ef6622d1d665b38376b1340e1664e8d95f64354a6eea502ea550ddc",
"0x4c04f8f822f5fb417435a170d7424a1d33e84211cfefb4351b42d70456ced1ac",
"0x4a648c07a522e32226b4636784e73f7bf0cfd37db95484d038834acb2f440430",
"0x4fd62526faf8ca239dbb37e982536a0d5c07f3220926854635ee0898905070cf",
"0x0afc480ab6fa874c654954c24a4e5433aaaf4273ebdd4c0703299527b8d1157c",
"0x6bd02c2ce8944f84773c0984906c728f29feb930df8586987505765e4e509842",
"0xa89cdb8f5a8badc9aafe5a1e8e9fabd724c7022d94239894e827188476038815"
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


