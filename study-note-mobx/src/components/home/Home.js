import React from 'react';
import { observer,inject } from 'mobx-react';
import SectionHeader from '../commons/SectionHeader';

export default inject("counter")(
    observer(({counter})=>(
        <section className='section'>
          <SectionHeader title="Home"/>
          <div className="card">
            <h1>{counter.number}</h1>
            <button onClick={counter.increase}>+1</button>
            <button onClick={counter.decrease}>-1</button>
          </div>
        </section>
    ))
);  