class CheckVarType {

    result = false;
    typeRegexp = /[,; ，|]/

    check(type,input){
        if(!this.checkString(type)){
            throw error(`${type}必须为string`)
        }
        switch(type.toLowerCase()){
            case 'string':
                this.result = this.checkString(input)
                break;
            case 'number':
                this.result = this.checkNumber(input)
                break;    
            case 'boolean':
                this.result = this.checkBoolean(input) 
                break;
            case 'date':
                this.result = this.checkDate(input) 
                break;
            case 'regexp':
                this.result = this.checkRegExp(input) 
                break;
            case 'symbol':
                this.result = this.checkSymbol(input) 
                break;
            case 'null':
                this.result = this.checkNull(input) 
                break;
            case 'undefined':
                this.result = this.checkUndefined(input) 
                break;
            case 'object':
                this.result = this.checkObject(input) 
                break;    
            case 'array':
                this.result = this.checkArray(input) 
                break;
            case type.match(this.typeRegexp).input:
                const typeList = type.split(this.typeRegexp).filter(item => !!item);
                this.result = typeList.some(item => this[`check${item[0].toUpperCase()}${item.slice(1,item.length)}`](input))
                break  
            default:
                break;
        }
        return this.result 
    }

    checkString(input){
        return  Object.prototype.toString.call(input) === '[object String]'
    }

    checkNumber(input){
        return  Object.prototype.toString.call(input) === '[object Number]'
    }

    checkBoolean(input){
        return  Object.prototype.toString.call(input) === '[object Boolean]'
    }

    checkDate(input){
        return  Object.prototype.toString.call(input) === '[object Date]'
    }

    checkRegExp(input){
        return  Object.prototype.toString.call(input) === '[object RegExp]'
    }

    checkFunction(input){
        return  Object.prototype.toString.call(input) === '[object RegExp]'
    }

    checkSymbol(input){
        return  Object.prototype.toString.call(input) === '[object Symbol]'
    }

    checkNull(input){
        return  Object.prototype.toString.call(input) === '[object Null]'
    }

    checkUndefined(input){
        return  Object.prototype.toString.call(input) === '[object Undefined]'
    }

    checkObject(input){
        return  Object.prototype.toString.call(input) === '[object Object]'
    }

    checkArray(input){
        return  Object.prototype.toString.call(input) === '[object Array]'
    }
}


const checkVarType = new CheckVarType()

export default checkVarType
