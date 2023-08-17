const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const currency='R'
const owed = Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance));

let owedAmount = owed.toFixed(2);
const [integerAmount, decimalAmount] = owedAmount.split(".")
const spacedAmount = integerAmount.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const totalAmount = `${spacedAmount}.${decimalAmount}`



const leo = `${leoName} ${leoSurname.trim()} (Owed: ${currency} ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: ${currency} ${Math.abs(parseFloat(leoBalance).toFixed(2)).toFixed(2)})`
const total = `Total amount owed: ${currency} ${totalAmount}`;
const result = ` ${leo} \n ${sarah} \n \n ${divider} \n\t${total} \n ${divider} \n `;

console.log(result);


