const {
    it,
    describe,
    equals,
    deepEquals,
} = require('./util');

const fns = require('./fns');

describe('tests', () => {
    const isOdd = n => n % 2 === 1;
    const asc = (a, b) => (a < b) ? -1 : (b < a) ? 1 : 0;
    const desc = (a, b) => (a < b) ? 1 : (b < a) ? -1 : 0;

    it('fn100', () => {
        let o = fns.fn100([1, 2, 5], a => (a + 1) * 2);
        equals('fn100', o.length, 3);
        equals('fn100', o[0], 4);
        equals('fn100', o[1], 6);
        equals('fn100', o[2], 12);
        const input1 = [{
            name: 'ram',
            age: 23,
            sex: 'M'
        }, {
            name: 'babu',
            age: 34,
            sex: 'F'
        }];
        o = fns.fn100(input1, a => a.name);
        equals('fn100', o.length, 2);
        equals('fn100', o[0], 'ram');
        equals('fn100', o[1], 'babu');
        o = fns.fn100(input1, a => a.age);
        equals('fn100', o.length, 2);
        equals('fn100', o[0], 23);
        equals('fn100', o[1], 34);
    });

    it('fn200', () => {
        const actual = fns.fn200([1, 4, 5, 2, 3], asc);
        equals('fn200', actual.length, 5);
        equals('fn200', actual[0], 1);
        equals('fn200', actual[1], 2);
        equals('fn200', actual[2], 3);
        equals('fn200', actual[3], 4);
        equals('fn200', actual[4], 5);
        const output5 = fns.fn200([1, 4, 5, 2, 3], desc);
        equals('fn200', output5.length, 5);
        equals('fn200', output5[0], 5);
        equals('fn200', output5[1], 4);
        equals('fn200', output5[2], 3);
        equals('fn200', output5[3], 2);
        equals('fn200', output5[4], 1);
    });

    it('some', () => {
        var actual = fns.some([1, 2, 3, 4], isOdd);
        equals('some', actual, true);
        actual = fns.some([1, 2, 4, 6], isOdd);
        equals('some', actual, true);
        actual = fns.some([2, 4, 6], isOdd);
        equals('some', actual, false);
    });

    it('keys', () => {
        var actual = fns.keys({'name': 'ram', 'age': 20});
        deepEquals('1', actual, ['name', 'age']);

        actual = fns.keys({name: 'ram', age: 20, sex: 'M'});
        deepEquals('1', actual, ['name', 'age', 'sex']);

        actual = fns.keys({a: 1, b: 2, c: 3, d: 100});
        deepEquals('1', actual, ['a', 'b', 'c', 'd']);

        actual = fns.keys([5, 3, 2, 7]);
        deepEquals('1', actual, ['0', '1', '2', '3']);
    });

    it('every', () => {
        var actual = fns.every([1, 2, 3, 4], isOdd);
        equals('every', actual, false);
        actual = fns.every([1, 2, 4, 6], isOdd);
        equals('every', actual, false);
        actual = fns.every([1, 3, 5], isOdd);
        equals('every', actual, true);
    });

    it('atleast2', () => {
        var actual = fns.atleast2([1, 2, 3, 4], isOdd);
        equals('1', actual, true);
        actual = fns.atleast2([1, 2, 4, 6], isOdd);
        equals('2', actual, false);
        actual = fns.atleast2([2, 4, 6], isOdd);
        equals('3', actual, false);
        actual = fns.atleast2([1, 3], isOdd);
        equals('4', actual, true);
    });

    it('everybut1', () => {
        var actual = fns.everybut1([1, 2, 3, 4], isOdd);
        equals('1', actual, false);
        actual = fns.everybut1([2, 1, 3, 5], isOdd);
        equals('2', actual, true);
        actual = fns.everybut1([2, 4, 6], isOdd);
        equals('3', actual, false);
        vactual = fns.everybut1([1, 3], isOdd);
        equals('4', actual, false);
    });

    it('padding', () => {
        equals('1', fns.padding('abc', 10), '       abc');
        equals('2', fns.padding('abcdef', 10), '    abcdef');
        equals('3', fns.padding('abcd', 6), '  abcd');
    });

    it('choose2', () => {
        var person = {'name': {'first': 'John', 'last': 'Cena'}, 'age': 23, 'sex': 'M'};

        deepEquals('1', fns.choose2(person, ['sex']),
            {'sex': 'M'});
        deepEquals('2', fns.choose2(person, ['age']),
            {'age': 23});
        deepEquals('3', fns.choose2(person, ['age', 'name.first']),
            {'name': {'first': 'John'}, 'age': 23});
    });

    it('choose1', () => {
        var person = {'name': {'first': 'John', 'last': 'Cena'}, 'age': 23, 'sex': 'M'};

        deepEquals('1', fns.choose1(person, 'sex'), 'M');
        deepEquals('2', fns.choose1(person, 'age'), 23);
        deepEquals('3', fns.choose1(person, 'name.first'), 'John');
        deepEquals('4', fns.choose1(person, 'name.last'), 'Cena');
    });

    it('intersection', () => {
        var actual = fns.intersection([1, 2, 3], [4, 5, 6]);
        equals('1', actual.length, 0);
        actual = fns.intersection([1, 2, 3, 4, 5, 6], [4, 5, 6]);
        equals('2', actual.length, 3);
        equals('3', actual[0], 4);
        equals('4', actual[1], 5);
        equals('5', actual[2], 6);
        actual = fns.intersection([4, 5, 6], [1, 2, 3, 4, 5, 6]);
        equals('6', actual.length, 3);
        equals('7', actual[0], 4);
        equals('8', actual[1], 5);
        equals('9', actual[2], 6);
        actual = fns.intersection([4, 5, 6, 7], [1, 2, 3, 4, 5, 6]);
        equals('10', actual.length, 3);
        equals('11', actual[0], 4);
        equals('12', actual[1], 5);
        equals('13', actual[2], 6);
        actual = fns.intersection([4, 6, 3], [1, 2, 4]);
        equals('14', actual.length, 1);
        equals('15', actual[0], 4);
        actual = fns.intersection([1, 2, 3], [2, 3, 4, 5, 6]);
        equals('16', actual.length, 2);
        equals('17', actual[0], 2);
        equals('18', actual[1], 3);
    });

    it('Zip', () => {
        var actual = fns.zip(
            ['aa', 'bb'],
            [1000, 2000],
            [true, false]
        );
        var expected = [
            ['aa', 1000, true],
            ['bb', 2000, false]
        ];
        deepEquals('1', actual, expected);
        actual = fns.zip(
            ['aa', 'bb'],
            [1000, 2000],
            [true, false],
            [5000]
        );
        expected = [
            ['aa', 1000, true, 5000],
            ['bb', 2000, false, undefined]
        ];
        deepEquals('2', actual, expected);
        actual = fns.zip(
            ['a', 'b', 'c'],
            [2, 3, 5],
            ['x', 'y']
        );
        expected = [
            ['a', 2, 'x'],
            ['b', 3, 'y'],
            ['c', 5, undefined]
        ];
        deepEquals('3', actual, expected);
        actual = fns.zip(
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
        deepEquals('4', actual, expected);
    });

    it('reverse', () => {
        var actual = fns.reverse([1, 3, 2, 'n', 'a', 5]);
        deepEquals('1', actual, [5, "a", "n", 2, 3, 1]);

        actual = fns.reverse([1, 2, 3, 4, 5]);
        deepEquals('1', actual, [5, 4, 3, 2, 1]);

        deepEquals('1', fns.reverse(fns.reverse([1, 'n', 'a', 5])), [1, 'n', 'a', 5]);
    });

    it('filter', () => {
        var users = [
            {'user': 'karan', 'age': 16, 'active': true},
            {'user': 'sundar', 'age': 20, 'active': false}
        ];

        var actual = fns.filter(users, (o) => {
            return !o.active;
        });
        deepEquals('1', actual, [{'user': 'sundar', 'age': 20, 'active': false}]);

        actual = fns.filter(users, {'age': 16, 'active': true});

        deepEquals('2', actual, [{'user': 'karan', 'age': 16, 'active': true}]);
    });

    it('merge', () => {
        var actual = fns.merge({name: 'ram', age: 20}, {weight: 70}, {height: 165});
        deepEquals('1', actual, {name: 'ram', age: 20, weight: 70, height: 165});

        actual = fns.merge({name: 'ram', likes: {movie: 'Robot'}}, {name: 'ram', likes: {song: 'Cheap Thrills'}});

        deepEquals('2', actual, {name: 'ram', likes: {movie: 'Robot', song: 'Cheap Thrills'}});
    });

    it('superfunction1', () => {
        var actualFn = fns.superfunction1();
        var actual = actualFn();
        deepEquals('1', actual, 100);
    });

    it('superfunction2', () => {
        deepEquals('1', fns.superfunction2(100)(), 100);
        deepEquals('2', fns.superfunction2(250)(), 250);
        deepEquals('3', fns.superfunction2(50)(), 50);
    });

    it('superfunction3', () => {
        deepEquals('1', fns.superfunction3(() => 100)(), 100);
        deepEquals('2', fns.superfunction3(() => 250)(), 250);
        deepEquals('3', fns.superfunction3(() => 50)(), 50);
    });

    it('superfunction4', () => {
        var actualFn = fns.superfunction4(0);
        deepEquals('1', actualFn(), 1);
        deepEquals('2', actualFn(), 2);
        deepEquals('3', actualFn(), 3);

        actualFn = fns.superfunction4(50);
        deepEquals('4', actualFn(), 51);
        deepEquals('5', actualFn(), 52);
        deepEquals('6', actualFn(), 53);
    });

    it('split', () => {
        var actual = fns.split('ab-cd-ef-gf', '-');
        deepEquals('1', actual, ['ab', 'cd', 'ef', 'gf']);

        actual = fns.split('ab-ad-af-af', '-a');
        deepEquals('2', actual, ['ab', 'd', 'f', 'f']);

        actual = fns.split('ab-ad-af-af', '-af');
        deepEquals('3', actual, ['ab-ad', '', '']);

        actual = fns.split('hello world', 'ello worl');
        deepEquals('4', actual, ['h', 'd']);
    });
});
