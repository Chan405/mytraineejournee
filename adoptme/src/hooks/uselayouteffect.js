import { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [value, setvalue] = useState('');
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div className="p-5 text-center">
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width}px </h2>
      <h2>textarea height: {height}px </h2>
      <textarea
      style={ {border: '1px solid black', resize: 'both'} }
      	value={value}
        onClick={() => {
          setWidth(0);
          setHeight(0);
        }}
        ref={el}
        onChange={ (v)=> setvalue(v)}
      />
    </div>
  );
};

export default LayoutEffectComponent;