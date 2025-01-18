import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);

  // 配列の合計をメモ化して計算
  const total = useMemo(() => {
    console.log('Calculating total...');
    return items.reduce((sum, item) => sum + item, 0);
  }, [items]); // itemsが変更された場合のみ再計算

  const addItem = () => {
    setItems((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Total: {total}</p>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default ExpensiveCalculation;
