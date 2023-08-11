const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
const currency = 'R';
const expenses =transport + food + rent;

if ((hourOfDay !== undefined) && (minuteOfDay !== undefined)) {
    const taxAsDecimal = parseInt(tax) / 100;
    const startingAfterTax = salary * (1- taxAsDecimal);
    const balace = startingAfterTax - expenses;
    console.log(currency + balace.toFixed(2).toString());
}

