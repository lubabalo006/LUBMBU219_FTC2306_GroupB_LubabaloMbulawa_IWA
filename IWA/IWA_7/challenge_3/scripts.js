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

var owedAmount = owed.toFixed(2).toString();

if(owedAmount.length > 3){
    const thousandSeparater = -6;
    const strgOwedAmount = owedAmount.slice(0, owedAmount.length+thousandSeparater);
    const strgspace = (" " + owedAmount.slice(thousandSeparater));
    owedAmount = strgOwedAmount + strgspace;
}

const leo = `${leoName} ${leoSurname.trim()} (Owed: ${currency} ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: ${currency} ${Math.abs(parseFloat(leoBalance).toFixed(2)).toFixed(2)})`
const total = `Total amount owed: ${currency} ${owedAmount}`;
const result = ` ${leo} \n ${sarah} \n \n ${divider} \n   ${total} \n ${divider} \n `;

console.log(result);
