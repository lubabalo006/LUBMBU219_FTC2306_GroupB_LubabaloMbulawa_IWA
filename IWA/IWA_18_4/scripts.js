/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
//my start

import {
    html,
    updateDraggingHtml,
    createOrderHtml,
    moveToColumn,
} from './view.js';

import {
    state,
    COLUMNS,
    createOrderData,
    updateDragging,
} from './data.js';

// Function to open the "Add Order" overlay
function openAddOrderOverlay() {
    const addOverlay = document.querySelector('[data-add-overlay]');
    if (addOverlay) {
        addOverlay.open = true;
        const titleInput = document.querySelector('[data-add-title]');
        if (titleInput) {
            titleInput.focus();
        }
    }
}
//console.log(document.querySelector('.overlay__input overlay__input_select'))
// Separate event listeners and buttons for adding orders
const addOrderButton = document.querySelector('[data-add]');
if (addOrderButton) {
    addOrderButton.addEventListener('click', openAddOrderOverlay);
    console.log(addOrderButton)
}

function closeAndClearAddOrderOverlay() {
    const addOverlay = document.querySelector('[data-add-overlay]');
    if (addOverlay) {
        addOverlay.open = false;
        const titleInput = document.querySelector('[data-add-title]');
        const tableInput = document.querySelector('[data-add-table]');

        if (titleInput && tableInput) {
            titleInput.value = ''; // Clear order title input
            tableInput.value = ''; // Clear order table input
        }
    }
}

const addCancelBtn = document.querySelector('[data-add-cancel]');
if (addCancelBtn) {
    addCancelBtn.addEventListener('click', closeAndClearAddOrderOverlay);
}

const addBtn = document.querySelector('[data-add-form]');
if (addBtn) {
    addBtn.addEventListener('submit', function (event) {
        event.preventDefault();
        handleAddOrder();
    });
}

// Function to handle adding an order
function handleAddOrder() {
    // Get the order information from the inputs
    const titleInput = document.querySelector('[data-add-title]');
    const tableInput = document.querySelector('[data-add-table]');

    const title = titleInput.value;
    const table = tableInput.value;

    if (title && table) {
        // Create a new order object and add it to the "Ordered" column
        const newOrder = createOrderData({ title, table, column: 'ordered' });
        html.columns.ordered.appendChild(createOrderHtml(newOrder));

        state.orders[newOrder.id] = newOrder;

        // Close and clear the "Add Order" overlay
        closeAndClearAddOrderOverlay();
    }
}

// Function to open the "Add Order" overlay

function openEditOrderOverlay(orderId) {
    const order = state.orders[orderId];
    if (order) {
        // Pre-fill the "Edit Order" overlay with order details
        const editTitleInput = document.querySelector('[data-edit-title]');
        const editTableInput = document.querySelector('[data-edit-table]');
        const editIdInput = document.querySelector('[data-edit-id]');

        if (editTitleInput && editTableInput && editIdInput) {
            editIdInput.value = orderId;
            editTitleInput.value = order.title;
            editTableInput.value = order.table;
        }

        // Display the "Edit Order" overlay
        const editOverlay = document.querySelector('[data-edit-overlay]');
        if (editOverlay) {
            editOverlay.open = true;
        }
    }
}

// function openEditOrderOverlay() {
//     const editOverlay = document.querySelector('[data-edit-overlay]');
//     if (editOverlay) {
//         editOverlay.open = true;
//         const titleInput = document.querySelector('[data-edit-title]');
//         if (titleInput) {
//             titleInput.focus();
//         }
//     }
// };


const grid = document.querySelector('[data-grid]');

grid.addEventListener('click', (event) => {
    // Check if the clicked element has the class 'button_edit'
    if (event.target.classList.contains('grid_title')) {
        // Retrieve the order ID from the 'data-edit-order' attribute
        const orderId = event.target.getAttribute('data-edit-order');
        openEditOrderOverlay(orderId);
    }
});

const helpbtn = document.querySelector('[data-help]');
console.log(helpbtn);
helpbtn.addEventListener("click", (event) => {
    console.log('clicked');
    helpOverlay();
});

const cancelHelpbtn = document.querySelector('[data-help-cancel]');
console.log(cancelHelpbtn);
cancelHelpbtn.addEventListener("click", (event) => {
    console.log('clicked');
    cancelOverlay();
});

function helpOverlay() {
    const help = html.help.overlay
    if (help) {
        help.showModal();
        // const titleInput = document.querySelector('[data-search-form]');
        // if (titleInput) {
        //     titleInput.focus();
        // }
    }
}

function cancelOverlay() {
    const cancel = html.help.overlay
    if (cancel) {
        cancel.style.display = 'none';
        window.location.reload();
    }
}
/*


// Attach event listeners to edit buttons
const editButtons = document.querySelectorAll('[data-edit-title]');
console.log(editButtons)
if (editButtons) {
    editButtons.addEventListener('click', openEditOrderOverlay)
}


/*
// Function to open the "Edit Order" overlay and pre-fill it with order details


/*
// Function to handle updating an order
function handleUpdateOrder() {
    // Get the updated order information from the inputs
    const editTitleInput = document.querySelector('[data-edit-title]');
    const editTableInput = document.querySelector('[data-edit-table]');
    const editIdInput = document.querySelector('[data-edit-id]');

    const updatedTitle = editTitleInput.value;
    const updatedTable = editTableInput.value;
    const orderId = editIdInput.value;

    if (updatedTitle && updatedTable && orderId) {
        // Update the order's details in the HTML
        const orderElement = document.querySelector(`[data-id="${orderId}"]`);
        if (orderElement) {
            // Update the order's title and table in the HTML
            const order = state.orders[orderId];
            if (order) {
                order.title = updatedTitle;
                order.table = updatedTable;
                const orderTitleElement = orderElement.querySelector('[data-order-title]');
                const orderTableElement = orderElement.querySelector('[data-order-table]');
                if (orderTitleElement && orderTableElement) {
                    orderTitleElement.textContent = updatedTitle;
                    orderTableElement.textContent = updatedTable;
                }
            }
        }

        // Update the order's details in the data structure
        state.orders[orderId].title = updatedTitle;
        state.orders[orderId].table = updatedTable;

        // Close and clear the "Edit Order" overlay
        closeAndClearEditOrderOverlay();
    }
}

// Function to close and clear the "Edit Order" overlay
function closeAndClearEditOrderOverlay() {
    const editOverlay = document.querySelector('[data-edit-overlay]');
    if (editOverlay) {
        editOverlay.open = false;
    }
}
*/