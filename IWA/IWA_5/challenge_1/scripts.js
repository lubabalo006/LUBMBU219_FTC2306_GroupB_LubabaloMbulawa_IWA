const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * parseInt(NONE_SELECTED);
let batteries = 35 * 2;
let pens = 5 * parseInt(NONE_SELECTED);

let shipping = null;
let currency = '$';

let customers = '1'; 
let customerLocation = 'RSA';
let usersCost = shoes+toys+shirts+batteries+pens;
//currency = null

RSA = ()=> {
    if (customerLocation == 'RSA') {
        currency='R';
        shipping = 400;
        if ((usersCost>=1000) && (customers=="1")) {
            shipping = 0;
        }
        if ((usersCost>=1000) && (customers > 1)) {
            console.log(FREE_WARNING);
        }
    console.log('Price: ',currency, usersCost + shipping);
    }
}
RSA();

NAM = ()=> {
    if (customerLocation == 'NAM') {
        shipping =600;
        if ((usersCost>=60) && (customers="1")) {
            shipping = 0;
        }
        if ((usersCost>=60) && (customers > 1)) {
            console.log(FREE_WARNING);
        }
    console.log('Price: ',currency, usersCost + shipping);
    }
}
NAM();

NK = () => {
    if (customerLocation == 'NK') {
        console.log(BANNED_WARNIN);
    }

    else {
        shipping = 800;
    }
}
NK();