

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/components/404'), universalOptions)
      t_0.template = '__react_static_root__/src/components/404'
      
const t_1 = universal(import('__react_static_root__/src/components/Home'), universalOptions)
      t_1.template = '__react_static_root__/src/components/Home'
      
const t_2 = universal(import('__react_static_root__/src/components/About'), universalOptions)
      t_2.template = '__react_static_root__/src/components/About'
      
const t_3 = universal(import('__react_static_root__/src/components/ProductDetail'), universalOptions)
      t_3.template = '__react_static_root__/src/components/ProductDetail'
      
const t_4 = universal(import('__react_static_root__/src/components/Products'), universalOptions)
      t_4.template = '__react_static_root__/src/components/Products'
      
const t_5 = universal(import('__react_static_root__/src/components/Contact'), universalOptions)
      t_5.template = '__react_static_root__/src/components/Contact'
      

// Template Map
export default {
  '__react_static_root__/src/components/404': t_0,
'__react_static_root__/src/components/Home': t_1,
'__react_static_root__/src/components/About': t_2,
'__react_static_root__/src/components/ProductDetail': t_3,
'__react_static_root__/src/components/Products': t_4,
'__react_static_root__/src/components/Contact': t_5
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/components/404"

