export let checkcart = JSON.parse(localStorage.getItem('cart'));

if (!checkcart) {
  checkcart = [{
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity : 2 ,
    deliveryOptionId : '1'
       
   },
   {
    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity : 1 ,
    deliveryOptionId : '1'
   }];
}




function saveToStorage (){
  localStorage.getItem('cart', JSON.stringify(cart));
}


export const cart = [


    
]


export function addToCart (productId){
    let matchingItem;
  
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId : '1'
      });
    }
    saveToStorage();
  }


  export function removeFromCart(productId) {
   
    const index = cart.findIndex((cartItem) => cartItem.productId === productId);

    
    if (index !== -1) {
        cart.splice(index, 1); 
    }
    saveToStorage();
}
