const e01 = require('./eventbox.js');
//e01.empty();
//e01.withArgs(["Luffy", "Zoro", "Usopp", "Robin", "Nami", "Sanji", "Ch0pper"]);

const e02 = require('./streambox');
//e02.duplicate("main.js");
/*e02.transform(
    'Comp0ser.csv', // filename
    /[a-z]/g,      // regex
    (letter) => letter.toUpperCase(), // fn
  )
*/
//e02.csv2json('./Comp0ser.csv')
e02.WTFIsThisPipe();