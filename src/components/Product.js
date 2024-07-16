import React, { useEffect, useState } from 'react';

export const Product = React.memo((props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Монтирование (Компонент Product создается)');

    return () => {
      console.log('Размонтирование (Компонент Product удаляется)');
    };
  }, []);

  useEffect(() => {
    console.log('Компонент Product обновляется');
  }, [count]);

  const onChangeCount = () => {
    setCount(count + 1);
  };

  console.log('render');

  return (
    <div>
      <p>{count}</p>
      <p>This is {props.name}</p>
      <button onClick={onChangeCount}>+</button>
    </div>
  );
});
