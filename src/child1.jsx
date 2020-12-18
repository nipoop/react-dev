import React, { useState } from 'react';

export default function Child1({count}) {

  const [num, setNum] = useState(0);

  return (
    <div>
      <span onClick={() => { setNum(n => n + 1) }}>{count + num}</span>
    </div>
  )
}