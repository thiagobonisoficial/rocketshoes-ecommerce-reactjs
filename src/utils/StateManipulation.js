export function convertProductPrice(number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}

export function filterProductAmount(arrayData, productID) {
  let productFiltred = arrayData.filter(product => product.id === productID);

  return productFiltred.length !== 0 ? productFiltred[0].amount : 0;
}

export function mergeCartListProps(productList, cartList) {
  let arrCartList = [];

  productList.forEach(productList => {
    cartList.forEach(cartList => {
      if (productList.id === cartList.id) {
        arrCartList.push({
          ...productList,
          ...cartList,
          priceConverted: convertProductPrice(productList.price),
          subtotalConverted: convertProductPrice(cartList.subtotal),
        });
      }
    });
  });

  return arrCartList;
}

export function calculeTotal(cartList) {
  let total = cartList.reduce((total, product) => {
    return (total += product.subtotal);
  }, 0);

  return convertProductPrice(total);
}

export function hasProducts(productList, cartList) {
  return productList.length === 0 && cartList.length === 0 ? false : true;
}
