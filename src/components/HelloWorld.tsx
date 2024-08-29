import React from 'react';
import styles from './HelloWorld.module.css'

interface HelloWorldProps {
  name: string;

}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {

const handleClick = ()=>{
  alert(`Hello, ${name}`);
};

  return(
    <div>
  <h1 className={styles.greeting}> Hello, {name}!</h1>
  <button onClick={handleClick}>Click Me </button>
  </div>
  );
  };

export default HelloWorld;



