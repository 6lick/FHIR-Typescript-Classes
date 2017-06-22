fs = require('fs');

let library = fs.readFileSync('./tsInterfaces.ts','utf-8');
library = library.split('\n');
console.log(library[2])
//
let regex = /.+(class)( \w+).+/

for (let i = 0; i < library.length; i++){
    let tmp = library[i].toString();

    if (tmp.match(regex)){
        let match = regex.exec(tmp);
        console.log('case ' + '\'' + match[2] + '\'' + ':\n\tfoo = fhirObs as ' + 'resources.' + match[2] +';'+ '\nbreak;');
    }
 
}