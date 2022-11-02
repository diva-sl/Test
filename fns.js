const each = (array, fn) => {

    return array.forEach(fn);
}


const map = (array, fn) => {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i]))
    }
    return result;
    // return array.map(fn);

}

const sortBy = (array, fn) => {

    // for (var i = 0; i < array.length - 1; i++) {
    //     var val = i;
    //     for (var j = i + 1; j < array.length; j++) {
    //         if (fn(array[val], array[j]) < 0) {
    //             val = val;
    //         } else {
    //             val = j;
    //         }

    //     }
    //     if (val != i) {
    //         var target = array[i];
    //         array[i] = array[val];
    //         array[val] = target;
    //     }

    // }

    // return array;

    for (var i = 0; i < array.length; i++) {

        var val = array[i];

        for (var j = i - 1; j >= 0 && fn(array[j], val) > 0; j--) {

            array[j + 1] = array[j];

        }

        array[j + 1] = val;

    }

    return array;

    // return array.sort(fn);

}

const some = (array, fn) => {
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return true;
            break;
        }

    }
    return false;
    // return array.some(fn);

}

const keys = (obj) => {

    return Object.keys(obj);

}

const every = (array, fn) => {

    for (var i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            return false;
            break;
        }

    }
    return true;

    // return array.every(fn); 
}

const atleast2 = (array, fn) => {
    let result = 0;
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result += 1;
        }

    }
    return result >= 2;
    //     array.some(ele => {
    //         if(fn(ele)){
    //           result +=1;
    //         }

    //     });
    // return result>=2;

}

const everybut1 = (array, fn) => {
    let but1 = 0;
    for (var i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            but1 += 1;
        }

    }
    return but1 == 1;

    // array.forEach(ele => {
    //         if(!fn(ele)){
    //           but1 +=1;
    //         }

    //     });
    // return but1 == 1;


}
const padding = (x, y) => {
    //   let pad = '';
    //  for (var i=0;i<y-x.length;i++){
    //         pad +=' ';
    //  }
    // return pad + x;
    return x.padStart(y);

}

const intersection = (array1, array2) => {

    // let result = [];
    // array1.forEach(ele1 => {
    //     array2.forEach(ele2 => {
    //         if (ele1 == ele2){
    //                 result.push(ele1);
    //           }
    //             })
    // });

    // return result;

    const matching = array1.filter(ele => array2.includes(ele));
    return matching;
}

const intersectionBy = (array1, array2, fn) => {

    let changeArray = array2.map(ele => fn(ele));
    let matchingBy = array1.filter(ele => changeArray.includes(fn(ele)));

    // array1.filter(ele => {
    //     array2.find(ele1 => {
    //         if (fn(ele1) == fn(ele)) {
    //             matchingBy.push(ele);
    //         }
    //     })
    // });
    return matchingBy;


}


const zip = (...arrays) => {
    var output = [];
    let row;
    let firstArray = arrays[0];
    // for(var i=0;i<arrays.length;i++){
    //    var row = arrays[i];
    //    var length = arrays[0].length;
    //    for(var j=0;j<length;j++){
    //     output[j] = output[j] || [];
    //     output[j].push(row[j])
    //    }

    // }
    // return output
    [...arrays].forEach(array => {
        row = array;
        firstArray.forEach((element, index) => {
            output[index] = output[index] || [];
            output[index].push(row[index]);

        })
    })
    return output

}

const reverse = (array) => {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
    // return array.reverse();
}

const filter = (arrObj, fn) => {
    let result = [];
    for (var i = 0; i < arrObj.length; i++) {
        if (typeof fn == 'function' && fn(arrObj[i]) == true) {
            result.push(arrObj[i]);
        } else if (typeof fn == 'object' && fn.active == arrObj[i].active) {
            result.push(arrObj[i]);
        }
    }
    // return arrObj.filter(ele => {
    //   if(typeof fn == 'function' && fn(ele) == true){
    //        return [ele];
    //   }else if(typeof fn == 'object' && fn.active == ele.active){
    //        return [ele];
    //   } 
    // });
    return result;
}

const merge = (obj1, obj2, obj3) => {

    return {...obj1,
        ...obj2,
        ...obj3
    }

    // return Object.assign(obj1,obj2,obj3);
    // return {objects};


}

const mergeDeep = (target, source) => {

    for (const key in source) {
        if (typeof source[key] == 'object') {
            mergeDeep(target[key], source[key]);
        } else {
            if (target[key] != source[key]) {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }
    return target
}

const superfunction1 = () => {

    return () => 100;

}

const superfunction2 = (value) => {

    return () => value;
}

const superfunction3 = (fn) => {
    return fn;

}

const superfunction4 = (value) => {

    return () => value += 1;

}

const godFunction = (arr, exp) => {

    return (a, b, c) => eval(exp);
}


const godFunction2 = (string, arr, exp) => {

    // const god = 'const ' + string + '= (' + arr[0] + ',' + arr[1] + ') => { return ' + exp + ' ;}; return ' + string + ';'
    //  return new Function(god)();    
    return new Function('const ' + string + '= (' + arr[0] + ',' + arr[1] + ') => { return ' + exp + ' ;}; return ' + string + ';')();


}


const split = (string, separator) => {

    return string.split(separator);


}


const before = (x, y) => {

    for (var i = 0; typeof x == 'function'; i++) {
        x = x();
        y = y();
    }
    return x < y;
}


const object1 = (x, y) => {

    // return Object.create(
    //     {
    //         'name': x,
    //         'age': y

    //     })

    var object = {};
    object.name = x;
    object.age = y;
    return object
}
const object2 = (x, y) => {
    // var obj = {}
    // obj.getName =() => x;
    // obj.getAge = () => y;
    // return obj;

    return Object.create({
        getName: () => x,
        getAge: () => y

    })

}

class Person {

    constructor(x, y, z) {

        this.getname = x;
        this.getage = y;
        this.getsex = z;
    }
    getName() {

        return this.getname;
    }
    getAge() {

        return this.getage;
    }
    getSex() {

        return this.getsex
    }

}


class Woman extends Person {

    constructor(x, y, z) {

        super(x, y, z);

        var z = 'F';

        this.getname = x;
        this.getage = y;
        this.getsex = z;
    }

}

class Man extends Person {

    constructor(a, b, c) {

        super(a, b, c);

        var c = 'M';
        this.getname = a;
        this.getage = b;
        this.getsex = c;

    }
}

const uniquee = (array) => {

    // return [...new Set(array)];

    // return array.filter((ele,idx) => array.indexOf(ele) === idx);

    //    return array.reduce((acc,cur) => {
    //       if(acc.indexOf(cur) === -1){
    //         acc.push(cur);
    //       }
    //       return acc;

    //    },[]); 

    var output = [];

    array.forEach(ele => {
        if (!output.includes(ele)) {
            output.push(ele);
        }
    })

    return output;

}



const uniqueeBy = (arrObj, fn) => {

    // const result = arrObj.map(ele => fn(ele))
    //     .map((ele, idx, arr) => arr.indexOf(ele) === idx && idx)
    //     .filter(obj => arrObj[obj]).map(obj => arrObj[obj]);
    // return result;
    var arr = [];

    return arrObj.filter((ele, idx, array) => {
        if (!arr.includes(fn(ele))) {
            arr.push(fn(ele));
            return array[idx];
        }
    })
}

const first = (arrObj) => {

    return arrObj[0]

}

const last = (arrObj) => {

    return arrObj[arrObj.length - 1];
}


const reuse1 = (arr, cond) => {
    let result = [];
    arr.filter(obj => {
        if (cond(obj.n)) result.push(obj.n);
    })
    return result;
}

const reuse2 = (arr, str, cond) => {
    let result = [];
    arr.filter(obj => {
        if (cond(obj[str])) result.push(obj[str]);

    })
    return result;

}

const reuse3 = (arrObj, arr, cond) => {
    let result = [];
    arrObj.filter(obj => {
        arr.reduce((obj, key) => {
            if (typeof obj[key] != 'object') {
                if (cond(obj[key])) result.push(obj[key]);
            }
            return obj[key]

        }, obj)
    })

    return result;

}

const reuse4 = (arrObj, arr, cond) => {

    return arrObj.filter(obj => {
        let value = arr.reduce((obj, key) => {
            return obj[key];
        }, obj)
        if (cond(value)) return value
    })


}

const chain = (arr1, arrfn) => {

    // var result= arrfn.map((fn,idx,arrfn) => {
    //        console.log(arrfn[idx][0](arr1,arrfn[idx][1]));
    //        return arrfn[idx][0](arr1,arrfn[idx][1]);

    // })   

    var value = arr1;

    for (var i = 0; i < arrfn.length; i++) {

        value = arrfn[i][0](value, arrfn[i][1]);

    }

    return value;
}

const reduce = (arr, fn) => {
    var result = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        result = fn(result, arr[i + 1]);
    }
    return result;

}

const anarray = [];

const anumber = 100;

const afunction = () => x;

const AND = (x, y) => x && y;

const OR = (x, y) => x || y;

const NAND = (x, y) => !(x && y);

const NOT = (x) => !x;

const NOR = (x, y) => !(x || y);

const XOR = (x, y) => !(x == y);

const XNOR = (x, y) => !(x != y);

const range = function*(a, b, c) {
    if (c !== undefined) b = Math.ceil(b / c);
    var i = a;
    while (i < b) {
        yield i++;
    }

}

const seek = (string) => {

    var result = string[0];

    for (var i = 1; i <= string.length; i++) {
        if (result != string[i]) {
            result = string[i];
            break;
        }
    }
    return result;

}

class Counter {
    constructor() {
        this.value = 0;
    }
    get() {
        return this.value;
    }
    inc() {
        return this.value++;
    }

}

const counter = () => new Counter();

const superfunction5 = (array) => {
    var i = -1;
    return function() {
        i++;
        return array[i];
    }

}

const textacc = () => {

    var str;

    return (string) => {

        if (string != undefined) {

            if (str != undefined) {
                str += '\n' + string;
                return;
            }

            str = string;
        }

        if (string == undefined) {

            if (str != undefined) {

                const str1 = str;
                str = undefined;
                return str1;

            }
        }

        return '';

    }
}

const proxy1 = () => {

    var a;
    return Object.defineProperty({}, 'val', {

        set: (b) => a = b * 2,
        get: () => a
    })

}

const proxy2 = () => {
    var a;

    return Object.defineProperties({}, {
        'val': {

            set: (b) => a = b * 2
        },
        'get': {

            get: () => a
        },
        'reset': {

            get: () => a = undefined
        }
    });

}

const proxy3 = (input) => {

    var a;

    return Object.defineProperties(input, {
        'val': {

            set: (b) => a = b * 2
        },
        'get': {

            get: () => a
        },
        'reset': {

            get: () => a = undefined
        }
    });



}

const counter3 = () => {

    var count = 0;

    const countObj = () => count++;

    Object.defineProperties(countObj, {

        'get': {
            get: () => count
        },
        'reset': {
            get: () => count = 0
        }
    });
    return countObj;


}

const saftynet = (fn) => {

    try {
        fn();
    } catch (e) {
        return e;
    }

}

const choose2 = (input, array) => {
        let object = {};
        var lastKeyIndex;
        var key;
        for (var i = 0; i < array.length; i++) {
            var keys = array[i].split('.');
            assign(object, keys, input);
        }

        function assign(obj, keys, o) {

            lastKeyIndex = keys.length - 1;

            for (var j = 0; j < keys.length; ++j) {
                key = keys[j];
                if (key in o) {
                    o = o[key];
                } else {
                    return;
                }

                if (lastKeyIndex > j) {
                    if (!(key in obj)) {
                        if (isNaN(keys[j + 1])) {
                            obj[key] = {}

                        } else {
                            obj[key] = []

                        }
                    }
                    obj = obj[key];

                }
            }

            obj[keys[lastKeyIndex]] = o;

        }


        return object;
    }
    // function nestedObjValue(o, keys) {
    //     for (var j = 0; j < keys.length; ++j) {
    //         var k = keys[j];
    //         if (k in o) {
    //             o = o[k];
    //         } else {
    //             return;
    //         }
    //     }
    //     return o;
    // }

const choose1 = (input, str) => {
    var key;
    var keys = str.split('.');
    for (var i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key in input) {
            input = input[key];
        } else {
            return;
        }
    }

    return input;


}

class Node {
    constructor(value, next = undefined) {
        this.value = value,
            this.next = () => next;
    }


}


class SinglyLinkedList {
    constructor(val) {
        this.value = val,
            this.next = () => undefined;
    }

    add(val) {
        let newNode = new SinglyLinkedList(val);
        if (!this.next()) {
            this.next = () => newNode;
            return this.next();
        }
        let tail = this.next();
        while (tail.next() !== undefined) {
            tail = tail.next();
        }
        tail.next = () => newNode;
        return this.next();
    }

}





module.exports = {
    each,
    map,
    sortBy,
    some,
    keys,
    every,
    atleast2,
    everybut1,
    padding,
    intersection,
    intersectionBy,
    zip,
    reverse,
    filter,
    merge,
    mergeDeep,
    superfunction1,
    superfunction2,
    superfunction3,
    superfunction4,
    godFunction,
    godFunction2,
    split,
    before,
    object1,
    object2,
    Person,
    Woman,
    Man,
    uniquee,
    uniqueeBy,
    first,
    last,
    reuse1,
    reuse2,
    reuse3,
    reuse4,
    chain,
    reduce,
    anarray,
    anumber,
    afunction,
    AND,
    OR,
    NAND,
    NOT,
    NOR,
    XOR,
    XNOR,
    range,
    seek,
    Counter,
    counter,
    superfunction5,
    textacc,
    proxy1,
    proxy2,
    proxy3,
    counter3,
    saftynet,
    choose2,
    choose1,
    SinglyLinkedList

}
module.exports.me = module.exports