const each = (array, fn) => {
    return array.forEach(fn);
}


const map = (array, fn) => {
    var result = [];
    array.forEach(element => result.push(fn(element)));
    return result;
    // return array.map(fn);

}

const sortBy = (array, fn) => {

    var result = [...array];

    for (var i = 0; i < result.length; i++) {
        var val = result[i];
        for (var j = i - 1; j >= 0 && fn(result[j], val) > 0; j--) {
            result[j + 1] = result[j];
        }
        result[j + 1] = val;
    }
    return result;
    // return array.sort(fn);
}

const some = (array, fn) => {
    var result;
    array.filter((ele) => {
        if (fn(ele)) {
            result = true;
        }
    });
    return result != undefined;
    // return array.some(fn);
}

const keys = (obj) => {

    return Object.keys(obj);

}

const every = (array, fn) => {
    let result;
    array.filter(ele => {
        if (!fn(ele)) {
            result = false;
        }

    });
    return result == undefined;
    // return array.every(fn); 
}

const atleast2 = (array, fn) => {
    let result = 0;
    array.find(ele => {
        if (fn(ele)) {
            result += 1;
        }
    })
    return result >= 2;

}

const everybut1 = (array, fn) => {
    let but1 = 0;
    array.find(ele => {
        if (!fn(ele)) {
            but1 += 1;
        }
    })
    return but1 == 1;
}

const padding = (x, y) => x.padStart(y);

const intersection = (array1, array2) => array1.filter(ele1 => array2.includes(ele1));

const intersectionBy = (array1, array2, fn) => {

    let changeArray = array2.map(ele2 => fn(ele2));
    return array1.filter(ele1 => changeArray.includes(fn(ele1)));
}


const zip = (...matrix) => {
    var output = [];
    let firstArray = matrix[0];
    matrix.forEach(row => {
        firstArray.forEach((e, index) => {
            output[index] = output[index] || [];
            output[index].push(row[index]);

        })
    })
    return output
}

const reverse = (array) => {
    var result = [];
    array.forEach((element, index) => {
        result[array.length - index - 1] = element;
    });
    return result;
    // return array.reverse();
}

const filter = (arrObj, fnOrObj) => {
    if (typeof fnOrObj === 'function') {
        return arrObj.filter(fnOrObj);
    } else {
        let result = [];
        arrObj.find(ele => {
            if (fnOrObj.active == ele.active) {
                result.push(ele);
            }
        });
        return result;
    }
}

const merge = (...objects) => objects.reduce((a, b) => {
    return {...a,
        ...b
    }
});

const mergeDeep = (...objects) => {

    return objects.reduce((a, b) => {
        Object.keys(b).forEach(key => {
            const aVal = a[key];
            const bVal = b[key];
            if (typeof aVal == 'object' && typeof bVal == 'object') {
                a[key] = mergeDeep(aVal, bVal);
            } else {
                a[key] = bVal;
            }
        });
        return a;
    }, {});
}

const superfunction1 = () => () => 100;

const superfunction2 = (value) => () => value;

const superfunction3 = (fn) => fn;

const superfunction4 = (value) => () => value += 1;

const godFunction = (arr, exp) => new Function(arr, 'return ' + exp);


const godFunction2 = (string, arr, exp) => {

    return new Function(`function ${string}(${arr.join(",")}){ return  ${exp} ;}; return ${string}`)();
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

    var object = {};
    object.name = x;
    object.age = y;
    return object
}
const object2 = (x, y) => {

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

    var output = [];

    array.forEach(ele => {
        if (!output.includes(ele)) {
            output.push(ele);
        }
    })

    return output;

}



const uniqueeBy = (arrObj, fn) => {

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

    var value = arr1;

    for (var i = 0; i < arrfn.length; i++) {

        value = arrfn[i][0](value, arrfn[i][1]);

    }
    return value;
}

const reduce = (arr, fn) => {

    return arr.reduce((a, b) => {
        return a = fn(a, b);
    })

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

    var strings = [];

    return (string) => {
        if (string === undefined) {
            let output = strings.join('\n');
            strings.splice(0, strings.length);
            return output;
        } else {
            strings.push(string);
        }
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