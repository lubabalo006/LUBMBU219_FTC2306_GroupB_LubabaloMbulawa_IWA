const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * parseInt(NONE_SELECTED);
const batteries = 35 * 2;
const pens = 5 * parseInt(NONE_SELECTED);

let shipping = null;

const customers = '1'; 
const customerLocation = 'RSA';
let usersCost = shoes+toys+shirts+batteries+pens;
currency = null

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
        let currency = '$';
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