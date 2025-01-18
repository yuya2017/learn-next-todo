import React, { useState, useCallback } from 'react';

// 子コンポーネント
const Child = React.memo(function Child({ onClick }: { onClick: () => void }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // 関数をメモ化
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // 依存配列が空なので、一度だけ作成

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
