if (module === require.main) {
    console.log('direct execution not allowed. try running the following command\n');
    try {
        require('chai');
        console.log('\tnpm test');
    } catch (e) {
        console.log('\tnpm install');
    }
    process.exit(1);
}
const expect = require('chai').expect;

const Js = require('./fns');

describe('tests', () => {
    const isOdd = n => n % 2 === 1;
    const asc = (a, b) => (a < b) ? -1 : (b < a) ? 1 : 0;
    const desc = (a, b) => (a < b) ? 1 : (b < a) ? -1 : 0;

    it('map works', () => {
        let o = Js.map([1, 2, 5], a => (a + 1) * 2);
        expect(o.length).to.equal(3);
        expect(o[0]).to.equal(4);
        expect(o[1]).to.equal(6);
        expect(o[2]).to.equal(12);
        const input1 = [{
            name: 'ram',
            age: 23,
            sex: 'M'
        }, {
            name: 'babu',
            age: 34,
            sex: 'F'
        }];
        o = Js.map(input1, a => a.name);
        expect(o.length).to.equal(2);
        expect(o[0]).to.equal('ram');
        expect(o[1]).to.equal('babu');
        o = Js.map(input1, a => a.age);
        expect(o.length).to.equal(2);
        expect(o[0]).to.equal(23);
        expect(o[1]).to.equal(34);
    });

    it('sort works', () => {
        const actual = Js.sortBy([1, 4, 5, 2, 3], asc);
        expect(actual.length).to.equal(5);
        expect(actual[0]).to.equal(1);
        expect(actual[1]).to.equal(2);
        expect(actual[2]).to.equal(3);
        expect(actual[3]).to.equal(4);
        expect(actual[4]).to.equal(5);
        const output5 = Js.sortBy([1, 4, 5, 2, 3], desc);
        expect(output5.length).to.equal(5);
        expect(output5[0]).to.equal(5);
        expect(output5[1]).to.equal(4);
        expect(output5[2]).to.equal(3);
        expect(output5[3]).to.equal(2);
        expect(output5[4]).to.equal(1);
    });

    it('some works', () => {
        var actual = Js.some([1, 2, 3, 4], isOdd);
        expect(actual).to.equal(true);
        actual = Js.some([1, 2, 4, 6], isOdd);
        expect(actual).to.equal(true);
        actual = Js.some([2, 4, 6], isOdd);
        expect(actual).to.equal(false);
    });

    it('keys works', () => {
        var actual = Js.keys({'name': 'ram', 'age': 20});
        expect(actual).to.eql(['name', 'age']);

        actual = Js.keys({name: 'ram', age: 20, sex: 'M'});
        expect(actual).to.eql(['name', 'age', 'sex']);

        actual = Js.keys({a: 1, b: 2, c: 3, d: 100});
        expect(actual).to.eql(['a', 'b', 'c', 'd']);

        actual = Js.keys([5, 3, 2, 7]);
        expect(actual).to.eql(['0', '1', '2', '3']);
    });

    it('every works', () => {
        var actual = Js.every([1, 2, 3, 4], isOdd);
        expect(actual).to.equal(false);
        actual = Js.every([1, 2, 4, 6], isOdd);
        expect(actual).to.equal(false);
        actual = Js.every([1, 3, 5], isOdd);
        expect(actual).to.equal(true);
    });

    it('atleast2 works', () => {
        var actual = Js.atleast2([1, 2, 3, 4], isOdd);
        expect(actual).to.equal(true);
        actual = Js.atleast2([1, 2, 4, 6], isOdd);
        expect(actual).to.equal(false);
        actual = Js.atleast2([2, 4, 6], isOdd);
        expect(actual).to.equal(false);
        actual = Js.atleast2([1, 3], isOdd);
        expect(actual).to.equal(true);
    });

    it('everybut1 works', () => {
        var actual = Js.everybut1([1, 2, 3, 4], isOdd);
        expect(actual).to.equal(false);
        actual = Js.everybut1([2, 1, 3, 5], isOdd);
        expect(actual).to.equal(true);
        actual = Js.everybut1([2, 4, 6], isOdd);
        expect(actual).to.equal(false);
        vactual = Js.everybut1([1, 3], isOdd);
        expect(actual).to.equal(false);
    });

    it('padding works', () => {
        expect(Js.padding('abc', 10)).to.equal('       abc');
        expect(Js.padding('abcdef', 10)).to.equal('    abcdef');
        expect(Js.padding('abcd', 6)).to.equal('  abcd');
    });

    it('choose2 works', () => {
        var person = {'name': {'first': 'John', 'last': 'Cena'}, 'age': 23, 'sex': 'M'};

        expect(Js.choose2(person, ['sex'])).to.eql({'sex': 'M'});
        expect(Js.choose2(person, ['age'])).to.eql({'age': 23});
        expect(Js.choose2(person, ['age', 'name.first'])).to.eql({'name': {'first': 'John'}, 'age': 23});
    });

    it('choose1 works', () => {
        var person = {'name': {'first': 'John', 'last': 'Cena'}, 'age': 23, 'sex': 'M'};

        expect(Js.choose1(person, 'sex')).to.eql('M');
        expect(Js.choose1(person, 'age')).to.eql(23);
        expect(Js.choose1(person, 'name.first')).to.eql('John');
        expect(Js.choose1(person, 'name.last')).to.eql('Cena');
    });

    it('intersection works', () => {
        var actual = Js.intersection([1, 2, 3], [4, 5, 6]);
        expect(actual.length).to.equal(0);
        actual = Js.intersection([1, 2, 3, 4, 5, 6], [4, 5, 6]);
        expect(actual.length).to.equal(3);
        expect(actual[0]).to.equal(4);
        expect(actual[1]).to.equal(5);
        expect(actual[2]).to.equal(6);
        actual = Js.intersection([4, 5, 6], [1, 2, 3, 4, 5, 6]);
        expect(actual.length).to.equal(3);
        expect(actual[0]).to.equal(4);
        expect(actual[1]).to.equal(5);
        expect(actual[2]).to.equal(6);
        actual = Js.intersection([4, 5, 6, 7], [1, 2, 3, 4, 5, 6]);
        expect(actual.length).to.equal(3);
        expect(actual[0]).to.equal(4);
        expect(actual[1]).to.equal(5);
        expect(actual[2]).to.equal(6);
        actual = Js.intersection([4, 6, 3], [1, 2, 4]);
        expect(actual.length).to.equal(1);
        expect(actual[0]).to.equal(4);
        actual = Js.intersection([1, 2, 3], [2, 3, 4, 5, 6]);
        expect(actual.length).to.equal(2);
        expect(actual[0]).to.equal(2);
        expect(actual[1]).to.equal(3);
    });

    it('zip works', () => {
        var actual = Js.zip(
            ['aa', 'bb'],
            [1000, 2000],
            [true, false]
        );
        var expected = [
            ['aa', 1000, true],
            ['bb', 2000, false]
        ];
        expect(actual).to.eql(expected);
        actual = Js.zip(
            ['aa', 'bb'],
            [1000, 2000],
            [true, false],
            [5000]
        );
        expected = [
            ['aa', 1000, true, 5000],
            ['bb', 2000, false, undefined]
        ];
        expect(actual).to.eql(expected);
        actual = Js.zip(
            ['a', 'b', 'c'],
            [2, 3, 5],
            ['x', 'y']
        );
        expected = [
            ['a', 2, 'x'],
            ['b', 3, 'y'],
            ['c', 5, undefined]
        ];
        expect(actual).to.eql(expected);
        actual = Js.zip(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
            [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
            [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
            [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
            [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
            [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140],
            [141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
            [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
            [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
            [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220],
            [221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
            [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260],
            [261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
            [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
            [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
            [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340],
            [341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
            [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380],
            [381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
        );
        expected = [
            [1, 21, 41, 61, 81, 101, 121, 141, 161, 181, 201, 221, 241, 261, 281, 301, 321, 341, 361, 381],
            [2, 22, 42, 62, 82, 102, 122, 142, 162, 182, 202, 222, 242, 262, 282, 302, 322, 342, 362, 382],
            [3, 23, 43, 63, 83, 103, 123, 143, 163, 183, 203, 223, 243, 263, 283, 303, 323, 343, 363, 383],
            [4, 24, 44, 64, 84, 104, 124, 144, 164, 184, 204, 224, 244, 264, 284, 304, 324, 344, 364, 384],
            [5, 25, 45, 65, 85, 105, 125, 145, 165, 185, 205, 225, 245, 265, 285, 305, 325, 345, 365, 385],
            [6, 26, 46, 66, 86, 106, 126, 146, 166, 186, 206, 226, 246, 266, 286, 306, 326, 346, 366, 386],
            [7, 27, 47, 67, 87, 107, 127, 147, 167, 187, 207, 227, 247, 267, 287, 307, 327, 347, 367, 387],
            [8, 28, 48, 68, 88, 108, 128, 148, 168, 188, 208, 228, 248, 268, 288, 308, 328, 348, 368, 388],
            [9, 29, 49, 69, 89, 109, 129, 149, 169, 189, 209, 229, 249, 269, 289, 309, 329, 349, 369, 389],
            [10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390],
            [11, 31, 51, 71, 91, 111, 131, 151, 171, 191, 211, 231, 251, 271, 291, 311, 331, 351, 371, 391],
            [12, 32, 52, 72, 92, 112, 132, 152, 172, 192, 212, 232, 252, 272, 292, 312, 332, 352, 372, 392],
            [13, 33, 53, 73, 93, 113, 133, 153, 173, 193, 213, 233, 253, 273, 293, 313, 333, 353, 373, 393],
            [14, 34, 54, 74, 94, 114, 134, 154, 174, 194, 214, 234, 254, 274, 294, 314, 334, 354, 374, 394],
            [15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255, 275, 295, 315, 335, 355, 375, 395],
            [16, 36, 56, 76, 96, 116, 136, 156, 176, 196, 216, 236, 256, 276, 296, 316, 336, 356, 376, 396],
            [17, 37, 57, 77, 97, 117, 137, 157, 177, 197, 217, 237, 257, 277, 297, 317, 337, 357, 377, 397],
            [18, 38, 58, 78, 98, 118, 138, 158, 178, 198, 218, 238, 258, 278, 298, 318, 338, 358, 378, 398],
            [19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219, 239, 259, 279, 299, 319, 339, 359, 379, 399],
            [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400],
        ];
        expect(actual).to.eql(expected);
    });

    it('reverse works', () => {
        var actual = Js.reverse([1, 3, 2, 'n', 'a', 5]);
        expect(actual).to.eql([5, "a", "n", 2, 3, 1]);

        actual = Js.reverse([1, 2, 3, 4, 5]);
        expect(actual).to.eql([5, 4, 3, 2, 1]);

        expect(Js.reverse(Js.reverse([1, 'n', 'a', 5]))).to.eql([1, 'n', 'a', 5]);
    });

    it('filter works', () => {
        var users = [
            {'user': 'karan', 'age': 16, 'active': true},
            {'user': 'sundar', 'age': 20, 'active': false}
        ];

        var actual = Js.filter(users, (o) => {
            return !o.active;
        });
        expect(actual).to.eql([{'user': 'sundar', 'age': 20, 'active': false}]);

        actual = Js.filter(users, {'age': 16, 'active': true});

        expect(actual).to.eql([{'user': 'karan', 'age': 16, 'active': true}]);
    });

    it('merges 0', () => {
        var actual = Js.merge({name: 'ram', age: 20}, {weight: 70}, {height: 165});
        expect(actual).to.eql({name: 'ram', age: 20, weight: 70, height: 165});
    });

    it('merge 1', () => {
        let actual = Js.mergeDeep({name: 'ram', likes: {movie: 'Robot'}}, {
            name: 'ram',
            likes: {song: 'Cheap Thrills'}
        });
        expect(actual).to.eql({name: 'ram', likes: {movie: 'Robot', song: 'Cheap Thrills'}});
    });

    it('superfunction1', () => {
        var actualFn = Js.superfunction1();
        var actual = actualFn();
        expect(actual).to.eql(100);
    });

    it('superfunction2', () => {
        expect(Js.superfunction2(100)()).to.eql(100);
        expect(Js.superfunction2(250)()).to.eql(250);
        expect(Js.superfunction2(50)()).to.eql(50);
    });

    it('superfunction3', () => {
        expect(Js.superfunction3(() => 100)()).to.eql(100);
        expect(Js.superfunction3(() => 250)()).to.eql(250);
        expect(Js.superfunction3(() => 50)()).to.eql(50);
    });

    it('superfunction4', () => {
        var actualFn = Js.superfunction4(0);
        expect(actualFn()).to.eql(1);
        expect(actualFn()).to.eql(2);
        expect(actualFn()).to.eql(3);

        actualFn = Js.superfunction4(50);
        expect(actualFn()).to.eql(51);
        expect(actualFn()).to.eql(52);
        expect(actualFn()).to.eql(53);
    });

    it('god functions 1', () => {
        var actualFn = Js.godFunction(['a', 'b'], 'a+b');
        expect(actualFn(1, 2)).to.eql(3);
        expect(actualFn(3, 1)).to.eql(4);
        expect(actualFn('a', 'b')).to.eql('ab');

        var actualFn = Js.godFunction(['a', 'b'], 'a*b');
        expect(actualFn(1, 2)).to.eql(2);
        expect(actualFn(3, 1)).to.eql(3);
        expect(actualFn(1, 0)).to.eql(0);

        var actualFn = Js.godFunction(['a', 'b'], 'a/b');
        expect(actualFn(1, 2)).to.eql(0.5);
        expect(actualFn(3, 1)).to.eql(3);
        expect(actualFn(1, 0)).to.eql(Infinity);
    });

    it('god functions 2', () => {
        var actualFn = Js.godFunction2('add', ['a', 'b'], 'a+b');
        expect(actualFn(1, 2)).to.eql(3);
        expect(actualFn.name).to.eql('add');
    });

    it('should split', () => {
        var actual = Js.split('ab-cd-ef-gf', '-');
        expect(actual).to.eql(['ab', 'cd', 'ef', 'gf']);

        actual = Js.split('ab-ad-af-af', '-a');
        expect(actual).to.eql(['ab', 'd', 'f', 'f']);

        actual = Js.split('ab-ad-af-af', '-af');
        expect(actual).to.eql(['ab-ad', '', '']);

        actual = Js.split('hello world', 'ello worl');
        expect(actual).to.eql(['h', 'd']);
    });

    it('should check it is before', () => {
        expect(Js.before(1, 2)).to.eql(true);
        expect(Js.before(3, 10)).to.eql(true);
        expect(Js.before(30, 3)).to.eql(false);

        expect(Js.before('a', 'b')).to.eql(true);
        expect(Js.before('c', 'd')).to.eql(true);
        expect(Js.before('f', 'a')).to.eql(false);

        expect(Js.before(new Date('2017-01-01'), new Date('2018-01-01'))).to.eql(true);
        expect(Js.before(new Date('2018-01-01'), new Date('2017-01-01'))).to.eql(false);

        const a = 10, b = 20, c = 'f', d = 'a';

        expect(Js.before(() => a, () => b)).to.eql(true);
        expect(Js.before(() => c, () => d)).to.eql(false);

        expect(Js.before(() => () => a, () => () => b)).to.eql(true);
        expect(Js.before(() => () => c, () => () => d)).to.eql(false);

        expect(Js.before(() => () => () => a, () => () => () => b)).to.eql(true);
        expect(Js.before(() => () => () => c, () => () => () => d)).to.eql(false);
    });

    it('object1', () => {
        expect(Js.object1('Ram Babu', 23)).to.eql({name: 'Ram Babu', age: 23});
        expect(Js.object1('Ram Babu', 25)).to.eql({name: 'Ram Babu', age: 25});
        expect(Js.object1('John Cena', 23)).to.eql({name: 'John Cena', age: 23});
    });

    it('object2', () => {
        var actual = Js.object2('Ram Babu', 23);
        expect(actual.getName()).to.eql('Ram Babu');
        expect(actual.getAge()).to.eql(23);

        actual = Js.object2('Sita Ram', 35);
        expect({name: actual.getName(), age: actual.getAge()}).to.eql({name: 'Sita Ram', age: 35});
    });

    it('Person works. object3', () => {
        const person1 = new Js.Person('Sita Ram', 35);
        expect(person1.getName()).to.eql('Sita Ram');
        expect(person1.getAge()).to.eql(35);
        const person2 = new Js.Person('Ram', 70);
        expect(person2.getName()).to.eql('Ram');
        expect(person2.getAge()).to.eql(70);

        expect(person1.getName, 'condition failed person1.getName === person2.getName').to.equal(person2.getName);
    });

    it('Person works. object4', () => {
        const person1 = new Js.Person('Sita Ram', 35);
        expect(person1.name).to.eql(undefined);
        expect(person1.age).to.eql(undefined);
        expect(person1.getName()).to.eql('Sita Ram');
        expect(person1.getAge()).to.eql(35);
    });

    it('Man and Woman. object5', () => {
        const person1 = new Js.Person('Sita', 40, 'F');
        expect(person1).to.be.an.instanceof(Js.Person);
        expect(person1.getName()).to.eql('Sita');
        expect(person1.getAge()).to.eql(40);
        expect(person1.getSex()).to.eql('F');

        const person2 = new Js.Woman('Lila', 30);
        expect(person2).to.be.an.instanceof(Js.Woman);
        expect(person2.getName()).to.eql('Lila');
        expect(person2.getAge()).to.eql(30);
        expect(person2.getSex()).to.eql('F');
        expect(person2).to.be.an.instanceof(Js.Person);

        const person3 = new Js.Man('Raja', 25);
        expect(person3).to.be.an.instanceof(Js.Man);
        expect(person3.getName()).to.eql('Raja');
        expect(person3.getAge()).to.eql(25);
        expect(person3.getSex()).to.eql('M');
        expect(person3).to.be.an.instanceof(Js.Person);
    });

    it('uniquee works', () => {
        expect(Js.uniquee([1, 3, 2, 5, 4, 3, 7, 4, 5, 3, 2, 9, 6])).to.eql([1, 3, 2, 5, 4, 7, 9, 6]);
        expect(Js.uniquee([4, 5, 3, 2, 9, 6, 1, 3, 2, 5, 4, 3, 7])).to.eql([4, 5, 3, 2, 9, 6, 1, 7]);
    });

    it('uniqueeBy works', () => {
        const input = [{name: 'RAM', age: 23, id: 1}, {name: 'ram', age: 25, id: 1}, {name: 'babu', age: 25, id: 1}];
        expect(Js.uniqueeBy(input, x => x.name.toLowerCase())).to.eql([input[0], input[2]]);
        expect(Js.uniqueeBy(input, x => x.age)).to.eql([input[0], input[1]]);
        expect(Js.uniqueeBy(input, x => x.id)).to.eql([input[0]]);
    });

    it('first and last both works', () => {
        const input = [{name: 'RAM', age: 23, id: 1}, {name: 'ram', age: 25, id: 1}, {name: 'babu', age: 25, id: 1}];
        let actual = Js.first(input);
        expect(actual).to.eql(input[0]);
        actual = Js.last(input);
        expect(actual).to.eql(input[2]);
        actual = Js.last([1, 3, 5, 6, 2, 9]);
        expect(actual).to.eql(9);
    });

    it('reuse test 1', () => {
        expect(Js.reuse1.toString(), 'Js.reuse1 should not use loops').to.not.match(/for|while/);
        let actual = Js.reuse1([{n: 1}, {n: 2}, {n: 3}, {n: 10}, {n: 100}], isOdd);
        expect(actual).to.eql([1, 3]);
        actual = Js.reuse1([{n: 1}, {n: 2}, {n: 3}, {n: 5}, {n: 7}], isOdd);
        expect(actual).to.eql([1, 3, 5, 7]);
    });

    it('reuse test 2', () => {
        expect(Js.reuse2.toString(), 'Js.reuse2 should not use loops').to.not.match(/for|while/);
        let actual = Js.reuse2([{n: 1}, {n: 2}, {n: 3}, {n: 10}, {n: 100}], 'n', isOdd);
        expect(actual).to.eql([1, 3]);
        actual = Js.reuse2([{a: 1}, {a: 2}, {a: 3}, {a: 5}, {a: 7}], 'a', isOdd);
        expect(actual).to.eql([1, 3, 5, 7]);
    });

    it('reuse test 3', () => {
        expect(Js.reuse3.toString(), 'Js.reuse3 should not use loops').to.not.match(/for|while/);
        let actual = Js.reuse3([{a: 1}, {a: 2}, {a: 3}, {a: 5}, {a: 7}], ['a'], isOdd);
        expect(actual).to.eql([1, 3, 5, 7]);

        actual = Js.reuse3([{a: {n: 1}}, {a: {n: 2}}, {a: {n: 3}}, {a: {n: 10}}, {a: {n: 100}}], ['a', 'n'], isOdd);
        expect(actual).to.eql([1, 3]);

        actual = Js.reuse3([{a: {b: {c: 1}}}, {a: {b: {c: 2}}}, {a: {b: {c: 3}}}, {a: {b: {c: 100}}}], ['a', 'b', 'c'], isOdd);
        expect(actual).to.eql([1, 3]);
    });

    it('reuse test 4', () => {
        expect(Js.reuse4.toString(), 'Js.reuse4 should not use loops').to.not.match(/for|while/);
        let actual = Js.reuse4([{a: 1}, {a: 2}, {a: 3}, {a: 5}, {a: 7}], ['a'], isOdd);
        expect(actual).to.eql([{a: 1}, {a: 3}, {a: 5}, {a: 7}]);

        actual = Js.reuse4([{a: {b: {c: 1}}}, {a: {b: {c: 2}}}, {a: {b: {c: 3}}}, {a: {b: {c: 100}}}], ['a', 'b', 'c'], isOdd);
        expect(actual).to.eql([{a: {b: {c: 1}}}, {a: {b: {c: 3}}}]);
    });

    it('reuse test 5 | chain 1', () => {
        expect(Js.chain([1, 2, 3, 4, 5], [
            [Js.filter, isOdd]
        ])).to.eql([1, 3, 5]);
        expect(Js.chain([1, 2, 3, 4, 5], [
            [Js.filter, isOdd],
            [Js.reduce, (a, b) => a + b]
        ])).to.eql(9);

        const input = [{J: {K: {L: 1}}}, {J: {K: {L: 2}}}, {J: {K: {L: 3}}}, {J: {K: {L: 4}}}, {J: {K: {L: 5}}}];
        let actual = Js.chain(input, [
            [Js.map, (x) => x.J.K.L],
            [Js.filter, isOdd],
            [Js.reduce, (a, b) => a + b],
        ]);
        expect(actual).to.eql(9);
    });

    it('reduce ', () => {
        expect(Js.reduce([1, 2, 3, 4], (a, b) => a + b)).to.eql(10);
        expect(Js.reduce([1, 3, 5, 7], (a, b) => a + b)).to.eql(16);
        expect(Js.reduce([1, 2, 3, 4], (a, b) => a > b ? a : b)).to.eql(4);
        expect(Js.reduce([7, 1, 4, 2], (a, b) => a < b ? a : b)).to.eql(1);
    });

    it('i want array', () => {
        expect([]).to.be.an('array');
        expect(Js.anarray).to.be.an('array');
        expect(Js.anarray.length).to.be.a('number');
    });

    it('i want number', () => {
        expect(100).to.be.a('number');
        expect(Js.anumber).to.be.a('number');
        expect(Js.anumber / Js.anumber).to.eql(1);
    });

    it('i want function', () => {
        expect(x => x).to.be.a('function');
        expect(Js.afunction).to.be.a('function');
        expect(Js.afunction.name).to.eql('afunction');
    });

    it('gates AND', () => {
        expect(Js.AND(false, false)).to.eql(false);
        expect(Js.AND(false, true)).to.eql(false);
        expect(Js.AND(true, false)).to.eql(false);
        expect(Js.AND(true, true)).to.eql(true);
    });
    it('gates OR', () => {
        expect(Js.OR(false, false)).to.eql(false);
        expect(Js.OR(false, true)).to.eql(true);
        expect(Js.OR(true, false)).to.eql(true);
        expect(Js.OR(true, true)).to.eql(true);
    });
    it('gates NAND', () => {
        expect(Js.NAND(false, false)).to.eql(true);
        expect(Js.NAND(false, true)).to.eql(true);
        expect(Js.NAND(true, false)).to.eql(true);
        expect(Js.NAND(true, true)).to.eql(false);
    });
    it('gates NOT', () => {
        expect(Js.NOT(false)).to.eql(true);
        expect(Js.NOT(true)).to.eql(false);
    });
    it('gates NOR', () => {
        expect(Js.NOR(false, false)).to.eql(true);
        expect(Js.NOR(false, true)).to.eql(false);
        expect(Js.NOR(true, false)).to.eql(false);
        expect(Js.NOR(true, true)).to.eql(false);
    });
    it('gates XOR', () => {
        expect(Js.XOR(false, false)).to.eql(false);
        expect(Js.XOR(false, true)).to.eql(true);
        expect(Js.XOR(true, false)).to.eql(true);
        expect(Js.XOR(true, true)).to.eql(false);
    });
    it('gates XNOR', () => {
        expect(Js.XNOR(false, false)).to.eql(true);
        expect(Js.XNOR(false, true)).to.eql(false);
        expect(Js.XNOR(true, false)).to.eql(false);
        expect(Js.XNOR(true, true)).to.eql(true);
    });

    it('generator 1', () => {
        const x = function* () {
        };
        const GeneratorFunction = (x).constructor;
        expect(Js.range).to.be.an.instanceof(GeneratorFunction);
    });

    it('generator 2', () => {
        let gen = Js.range(0, 0);
        expect(gen.next().done, 'specs file location: 101').to.eql(true);

        gen = Js.range(0, 1);
        expect(gen.next().done, 'specs file location: 102').to.eql(false);
        expect(gen.next().done, 'specs file location: 103').to.eql(true);

        gen = Js.range(0, 2);
        expect(gen.next().done, 'specs file location: 104').to.eql(false);
        expect(gen.next().done, 'specs file location: 105').to.eql(false);
        expect(gen.next().done, 'specs file location: 106').to.eql(true);

        gen = Js.range(0, 5);
        expect(gen.next().done, 'specs file location: 107').to.eql(false);
        expect(gen.next().done, 'specs file location: 108').to.eql(false);
        expect(gen.next().done, 'specs file location: 109').to.eql(false);
        expect(gen.next().done, 'specs file location: 110').to.eql(false);
        expect(gen.next().done, 'specs file location: 111').to.eql(false);
        expect(gen.next().done, 'specs file location: 112').to.eql(true);

        gen = Js.range(0, 100);
        let counter = 0;
        while (!gen.next().done) counter++;
        expect(counter).to.eql(100);
    });

    it('generator 3', () => {
        let gen, counter;
        gen = Js.range(0, 13, 5);

        expect(gen.next().done, 'specs file location: 100').to.eql(false);
        expect(gen.next().done, 'specs file location: 101').to.eql(false);
        expect(gen.next().done, 'specs file location: 102').to.eql(false);
        expect(gen.next().done, 'specs file location: 103').to.eql(true);

        gen = Js.range(0, 100, 5);
        counter = 0;
        while (!gen.next().done) counter++;
        expect(counter, 'specs file location: 104').to.eql(20);

        gen = Js.range(0, 97, 5);
        counter = 0;
        while (!gen.next().done) counter++;
        expect(counter, 'specs file location: 105').to.eql(20);
    });

    it('myself', () => {
        expect(Js).to.equal(Js);
        expect(Js.me).to.equal(Js);
        expect(Js.me.me).to.equal(Js);
        expect(Js.me.me.me).to.equal(Js);
        expect(Js.me.me.me.me).to.equal(Js);
        expect(Js.me.me.me.me.me).to.equal(Js);
    });

    it('hide and seek', () => {
        expect(Js.seek(
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------P-----------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------')).to.equal('P');
        expect(Js.seek(
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '-----------------------APPLE----' +
            '--------------------------------')).to.equal('A');
        expect(Js.seek(
            '--------------------------------' +
            '--------------------------------' +
            '------ORANGE--------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '----BANANA----------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '--------------------------------' +
            '-----------------------APPLE----' +
            '--------------------------------')).to.equal('O');
    });

    it('counter 1', ()=> {
        const counter = new Js.Counter();

        expect(counter.get()).to.eql(0);
        counter.inc(); expect(counter.get()).to.eql(1);
        counter.inc(); expect(counter.get()).to.eql(2);
        counter.inc(); expect(counter.get()).to.eql(3);
        counter.inc(); expect(counter.get()).to.eql(4);
    });

    it('counter 2', ()=> {
        const counter = Js.counter();

        expect(counter.get()).to.eql(0);
        counter.inc(); expect(counter.get()).to.eql(1);
        counter.inc(); expect(counter.get()).to.eql(2);
        counter.inc(); expect(counter.get()).to.eql(3);
        counter.inc(); expect(counter.get()).to.eql(4);
    });

    it('textacc | closure 1', ()=> {
      const acc1 = Js.textacc();

      expect(acc1()).to.eql('');

      acc1(' hi ');
      expect(acc1()).to.eql(' hi ');
      expect(acc1()).to.eql('');

      acc1(' hi ');
      acc1(' hello ');
      acc1(' how are you? ');
      expect(acc1()).to.eql(' hi \n hello \n how are you? ');
      expect(acc1()).to.eql('');

      acc1('');
      acc1('');
      expect(acc1()).to.eql('\n');
      expect(acc1()).to.eql('');
    });

    it('counter 3 | closure 2', ()=> {
        const counter = Js.counter3();

        counter.reset; expect(counter.get).to.eql(0);
        counter(); expect(counter.get).to.eql(1);
        counter(); expect(counter.get).to.eql(2);
        counter(); expect(counter.get).to.eql(3);
        counter(); expect(counter.get).to.eql(4);
        counter.reset; expect(counter.get).to.eql(0);
    });
});
