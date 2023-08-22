const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

if (holidays.futureId) {
    console.log(holidays.futureId.name)
}else {
    console.log(`ID ${futureId} not created yet`)
}

let copied = JSON.parse(JSON.stringify(holidays[6]));
copied.date = new Date(copied.date);
copied.name = 'X-mas Day';
copied.date.setHours(0,0,0,0);

function correctDate(dateObject) {
    const parts = {
        date: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        //year: dateObject.getFullYear(),
        //hour: dateObject.getHours().toString().padStart(2, '0'),
        //minute: dateObject.getMinutes().toString().padStart(2, '0')
    };
    return `${parts.date}/${parts.month}/${currentYear}`
}
const myDateFormatted = correctDate(copied.date);
console.log(myDateFormatted)


isEarlier = copied.date < holidays[christmas].date
console.log(`New date is earlier: ${isEarlier}`)


console.log('ID change:', copied.id !== holidays[christmas].id);

if (copied.name !== holidays[christmas].name){
    console.log('Name change:',copied.name)
}
if (copied.date !== holidays[christmas].date)
console.log('Date change:', myDateFormatted )



const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)


const firstDay = holidays[3].date.getDate().toString().padStart(2, '0')
const firstMonth = (holidays[3].date.getMonth()+1).toString().padStart(2, '0')
const lastDay = holidays[2].date.getDate().toString().padStart(2, '0')
const lastMonth = (holidays[2].date.getMonth()+1).toString().padStart(2, '0')

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const holidaysArray = Object.values(holidays);
const randomIndex = Math.floor(Math.random() * holidaysArray.length);
const randomHoliday = holidays[randomIndex];

console.log(randomHoliday);