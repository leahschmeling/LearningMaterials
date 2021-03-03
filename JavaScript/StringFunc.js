const stringFunc = function (string1, string2) {
  console.log(`${string1} ${string2}`);
};

stringFunc('Tomato, potato,', 'I drive a Winnebago');
stringFunc('Hello', 'world');
stringFunc('How are', 'you?');


const stringFunc2 = function (string1, string2) {
  return `${string1} ${string2}`;
};

const output = stringFunc2('Whatcha', 'eating?');
// puts output on a new line
console.log('output: ', output);
// keeps output in-line
console.log('output: '+ output);
