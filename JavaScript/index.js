var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo.val === bar.val); // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);
