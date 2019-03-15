//import * as React from 'react'
import React from 'react'
import GridLayout, {Layout} from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import './index.css';

class Hello extends React.Component {
  render() {
    const layout1: Layout[] = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2},
    ]

    const layout2: Layout[] = [
      {i: 'm', x: 0, y: 0, w: 1, h: 1},
      {i: 'n', x: 1, y: 0, w: 1, h: 2},
    ]

    return <div>
      <h1>Hello React</h1>
      <GridLayout className='layout' layout={layout1} cols={12} rowHeight={30} width={1200}>
        <div key='a' className='outer'>A</div>
        <div key='b' className='outer'>
          <GridLayout className='layout' layout={layout2} cols={12} rowHeight={30} width={1200}
                      containerPadding={[0, 0]}>
            <div key='m' className='inner'>M</div>
            <div key='n' className='inner'>N</div>
          </GridLayout>
        </div>
        <div key='c' className='outer'>C</div>
      </GridLayout>
    </div>
  }
}

export default Hello
