//CommonJS, every file is module (by default)
// Modules - ENCAPSULATED CODE (only share minimum)

const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

// sayHi('luciano')
// sayHi(john)
// sayHi(peter)

