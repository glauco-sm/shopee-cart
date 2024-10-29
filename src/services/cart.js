//quais ações meu carrinho pode fazer


//CASOS DE USO
// ✅->adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// ->calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🛍️Total: R$ ${result.toFixed(2)}\n`);
}

// ->deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}
// ->remover um item - diminui um item
async function removeItem(userCart, item) {
    // encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //caso não encontre o item
    if (indexFound === -1) {
        console.log("Item not found!");
        return;
    }

    //item > 1 subtrair um item, item = 1 deletar item
    if (userCart[indexFound].quantity > 1)
        userCart[indexFound].quantity -= 1;
    else
        userCart.splice(indexFound, 1);
}

async function displayCart(userCart) {
    console.log("Carrinho cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };