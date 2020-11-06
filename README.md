# check-var-types
a little library for check js var types 

# install
`npm install check-var-types -S`

# example
```
import checkVarType from 'check-var-types'
  
checkVarType.check('number',123) //true
checkVarType.check('symbol',Symbol(1)) //true
checkVarType.check('null,undefined',null) //true
checkVarType.check('date|regexp',new Date()) //true
```
# API
- check
- checkString
- checkNumber
- checkBoolean
- checkDate
- checkRegExp
- checkFunction
- checkSymbol
- checkNull
- checkUndefined
- checkObject
- checkArray
