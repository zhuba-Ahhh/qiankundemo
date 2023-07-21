import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function render(props: any) {
  let { container } = props;
  if (container) {
    root = ReactDOM.createRoot(container.querySelector('#root'));
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, 
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({})
}


export async function bootstrap() {
  console.log("[react-ts] react app bootstrap");
}

export async function mount(props: any) {
  console.log("[react-ts] props from main framework", props);
  render(props)
}

export async function unmount(props: any) {
  // let { container } = props
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.getElementById('root'));
  root.unmount()
}