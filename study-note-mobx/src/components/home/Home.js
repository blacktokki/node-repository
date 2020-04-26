import React from 'react';
import { observer,inject } from 'mobx-react';
import SectionHeader from '../commons/SectionHeader';

export default inject("store")(
    observer(({store})=>(
        <section className='section'>
          <SectionHeader title="Home"/>
          <div className="card">
            <h1>{store.counter.number}</h1>
            <button onClick={store.counter.increase}>+1</button>
            <button onClick={store.counter.decrease}>-1</button>
          </div>
        </section>
    ))
);  