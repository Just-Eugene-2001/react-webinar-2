import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import numberFormat from "../../utils/numberFormat";
import './style.css';

function ItemDescription(props) {
  const cn = bem('ItemDescription');

  const callbacks = {
    onAdd: useCallback((e) => props.onAdd(props.item._id), [props.onAdd, props.item]),
  };

  return (
    <div className={cn()}>
      <div className={cn('description')}>{props.item.description}</div>
      <div className={cn('maidIn')}>Страна производитель: <strong>{props.item.maidIn}</strong></div>
      <div className={cn('category')}>Категория: <strong>{props.item.category}</strong></div>
      <div className={cn('edition')}>Год выпуска: <strong>{props.item.edition}</strong></div>
      <h2 className={cn('price')}>Цена: {numberFormat(props.item.price)}</h2>
      <button onClick={callbacks.onAdd}>Добавить</button>
    </div>
  )
}

ItemDescription.propTypes = {
}

ItemDescription.defaultProps = {
  onAdd: () => {},
}

export default React.memo(ItemDescription);
