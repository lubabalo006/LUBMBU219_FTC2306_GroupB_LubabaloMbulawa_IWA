// script.js

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function internal() {
    const added = add(this.internal.a, this.internal.b);
    //console.log(added)
    return this.multiply(added,this.internal.c)
    //const multiplied = multiply(this.internal.a, this.internal.b);
    //return added * multiplied;
  }
  


// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()



console.log(example1.calculate());
console.log(example2.calculate());