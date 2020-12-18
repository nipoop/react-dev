import React, { useState } from 'react';
import {Button} from 'antd';

export default function HooksDemo() {

  const [count, setCount] = useState(0);

  const handleClick = () => {

    setCount(count + 1)
    setTimeout(() => {
      console.log('count: ', count)
    }, 3000)
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={handleClick}
      >
        {count}
      </Button>
    </div>
  )
}

