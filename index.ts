type Pizza = {
    id: number,
    name: string,
    price: number,
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed",
}



let menu: Pizza[] = [
    {id: 1, name: "Margherita", price: 8 },
    {id: 2, name: "Pepperoni", price: 10 },
    {id: 3, name: "Hawaiian", price: 10 },
    {id: 4, name: "Veggie", price: 9 },
]

let cashInRegister: number = 100
let nextOrderId: number = 1
const orderQueue: Order[] = []

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu.
 */

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}
/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return

    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}


addNewPizza({ id: 5,name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 5,name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 5,name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

