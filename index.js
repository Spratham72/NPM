var QRCode = require('qrcode')
var { Command } = require('commander');
var program = new Command();
program.version('0.0.1');

program.argument('[Name]','Name to Print')
        .argument('[lastName','Last Name')
        .action(function(text){
            QRCode.toFile("output.png",text)
        })

program.parse(process.argv)

 
// QRCode.toFile("file.png");
// QRCode.toString('I am a pony!')
//   .then(url => {
//     console.log(url);
    
//   })
//   .catch(err => {
//     console.error(err)
//   })