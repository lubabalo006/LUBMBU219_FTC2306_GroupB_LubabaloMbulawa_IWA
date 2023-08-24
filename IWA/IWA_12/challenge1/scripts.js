
// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const aGoodBook = () => {
    const book1 = document.getElementById('book1')
    const status = 'overdue';
    const statusSpan = book1.querySelector('.status');
    const reserveBtn = book1.querySelector('.reserve');
    const checkoutBtn = book1.querySelector('.checkout');
    const checkinBtn = book1.querySelector('.checkin');
    
    statusSpan.style.color = STATUS_MAP[status].color;
    reserveBtn.disabled = !STATUS_MAP[status].canReserve;
    checkoutBtn.disabled = !STATUS_MAP[status].canCheckout;
    checkinBtn.disabled = !STATUS_MAP[status].canCheckIn;

};
aGoodBook();


const theBookOfBooks = () => {
    const book2 = document.getElementById('book2')
    const status = 'reserved';
    const statusSpan = book2.querySelector('.status');
    const reserveBtn = book2.querySelector('.reserve');
    const checkoutBtn = book2.querySelector('.checkout');
    const checkinBtn = book2.querySelector('.checkin');
    
    statusSpan.style.color = STATUS_MAP[status].color;
    reserveBtn.disabled = !STATUS_MAP[status].canReserve;
    checkoutBtn.disabled = !STATUS_MAP[status].canCheckout;
    checkinBtn.disabled = !STATUS_MAP[status].canCheckIn;

};
theBookOfBooks()

const anotherBook = () => {
    const book3 = document.getElementById('book3')
    const status = 'shelf';
    const statusSpan = book3.querySelector('.status');
    const reserveBtn = book3.querySelector('.reserve');
    const checkoutBtn = book3.querySelector('.checkout');
    const checkinBtn = book3.querySelector('.checkin');
    
    statusSpan.style.color = STATUS_MAP[status].color;
    reserveBtn.disabled = !STATUS_MAP[status].canReserve;
    checkoutBtn.disabled = !STATUS_MAP[status].canCheckout;
    checkinBtn.disabled = !STATUS_MAP[status].canCheckIn;

};
anotherBook()