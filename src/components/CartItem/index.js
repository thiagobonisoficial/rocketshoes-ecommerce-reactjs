import React from 'react';
import PropTypes from 'prop-types';

import { Item, Subtotal, ButtonContainer } from './styles';
import {
  ProductAvatar,
  ProductDescription,
  AmountController,
  RemoveToCart,
} from 'components';

function CartItem({
  productID,
  productAvatar,
  title,
  priceConverted,
  amount,
  subtotalConverted,
}) {
  return (
    <Item>
      <ProductAvatar src={productAvatar} alt={title} />
      <ProductDescription description={title} price={priceConverted} />
      <AmountController productID={productID} amount={amount} />
      <Subtotal>{subtotalConverted}</Subtotal>
      <ButtonContainer>
        <RemoveToCart productID={productID} />
      </ButtonContainer>
    </Item>
  );
}

CartItem.propTypes = {
  productID: PropTypes.number.isRequired,
  productAvatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priceConverted: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
