class AntraMath {
    constructor(value) {
        this.value = value;
    }

    add(value1) {
        this.value += value1;

    }

    multiply(value2) {
        this.value *= value2;
    }

    done() {
        return (this.value);
    }
}


// function AntraMath(initialval) {
//     this.result = initialval;
//     this.add = function (num) {
//         this.result += num;
//     }
//     this.multiply = function (num) {
//         this.result *= num;
//     }
//     this.done = function () {
//         return (this.result);

//     }

// }

let myMath = new AntraMath(10);
myMath.add(5);
myMath.multiply(2);
let res = myMath.done();
console.log(res);

function reverse_string(s) {
    return (s.split("").reverse().join(""));
}

let x = reverse_string('hello');
console.log(x);