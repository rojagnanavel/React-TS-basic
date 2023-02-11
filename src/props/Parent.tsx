import {Child}  from './Child';

// interface defines what props child expects to receive
// Are we providing the correct props to child when we show it in parent
// are we using the correctly named + props in child
const Parent =()=>{
    return <Child color="red" />
};

export default Parent;
