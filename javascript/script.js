// Arithmatic operator
console.log("addition");
	var a=10;
	var b=20;
	var c = a+b;
    console.log(c);
console.log("subtraction")
    var a=10;
    var b=20;
    var c = b-a;
    console.log(c);
console.log("multification");
    var a=10;
    var b=20;
    var c = a*b;
    console.log(c);
console.log("division");
    var a=10;
    var b=20;
    var c = b/a;
    console.log(c);
console.log("module");
    var a=10;
    var b=20;
    var c = a%b;
    console.log(c);
// assignment Operator
var a=5;
a+=30;
console.log(a);
a-=30;
console.log(a);
a*=10;
console.log(a);
a/=50;
console.log(a);
console.log(5 + 5); 
console.log('5' + 5); 
console.log(5 + '5'); 
console.log(5 + 'a' + 5); 
console.log('a' + 5 + 5); 
console.log(5 + 5 + 'a'); 
console.log(NaN + 5); 
console.log(NaN + '5');
console.log(-2+1);
console.log(-2+"1");
console.log("-2"+1);

console.log('---------\nsubtraction with string\n----------');

console.log('5' - 5); 
console.log(5 - '5'); 
console.log(5 - '5a'); 
console.log('5a' - 5);

console.log('---------\nmultiplication with string\n----------');
console.log('5' * 5); 
console.log(5 * '5'); 
console.log(5 * '5a'); 
console.log('5a' * 5); 

if ({} == {}) {
    console.log('{} == {}');
}

var obj1 = {
    a: 1
};
var obj2 = {
    a: 1
};

if (obj1 != obj2) {
    console.log('obj1 != obj2');
}

if ([] != []) {
    console.log('[] != []');
}

if ([]) {
    console.log('[] is true');
}

if (null != null) {
    console.log('null != null');
} else {
    console.log('null == null');
}

if (NaN != NaN) {
    console.log('NaN != NaN');
} else {
    console.log('NaN == NaN');
}

if (undefined != undefined) {
    console.log('undefined != undefined');
} else {
    console.log('undefined == undefined');
}