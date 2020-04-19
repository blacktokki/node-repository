import React from 'react';
import { observer,inject } from 'mobx-react';

export default inject("store")(
    observer(({store})=>(
        <div>
          <h2>Home</h2>
          <h1>{store.number}</h1>
          <button onClick={store.increase}>+1</button>
          <button onClick={store.decrease}>-1</button>
        </div>
    ))
);  