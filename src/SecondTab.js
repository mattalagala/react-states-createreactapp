import React, {useState} from 'react';
import './style.css';

function Counter (props) {
    let initialValue = props.countervalue
    console.log(props, " THIS IS PROPPPS")
    console.log("````````````````````````````````````````````````````````````````")

    if (props.initialValue) initialValue = parseInt(props.initialValue, 10)
  
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(initialValue);
  
    let myTitle = props.title
    if (!myTitle) myTitle = 'Counter value'
  
    return (
      <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus at magna sit amet tristique. 
        Suspendisse ut varius dui, tincidunt semper sapien. Nullam bibendum eros lectus, eu posuere velit ultrices sed. 
        Proin consectetur lacus nec metus ullamcorper, ac tempus felis eleifend. Donec eu euismod nisl. 
        Morbi fringilla justo sit amet blandit dictum. Fusce sollicitudin ipsum ut mauris posuere pharetra. 
        Praesent vitae elit nec ex placerat faucibus a in diam. Sed bibendum sit amet dui at facilisis. 
        Vivamus vitae felis lacinia, gravida lectus id, placerat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Integer feugiat, sem in interdum tempor, nisi enim mollis nibh, luctus laoreet massa ligula nec ex.
        </p>
        <hr />
      </div>
    );
  }

function RenderSecondTab (props) {
        let initialValue = null
        // if (props.initialValue) initialValue = parseInt(props.initialValue, 10)

        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(initialValue);
              
        let myTitle = props.title
        if (!myTitle) myTitle = 'Counter value'

        const [numCounters, setNumCounters] = useState(1)

        const countersArr = [...Array(numCounters).keys()]

        console.log(countersArr)
      
        return (
            <>       
            <h2>{myTitle} {numCounters}</h2>
           
            <button type="button" id='addParaBtn' class="btn btn-primary btn-lg" onClick={() => setNumCounters(numCounters + 1)}>Add Paragraph</button>
            <button type="button" class="btn btn-primary btn-lg" onClick={() => setNumCounters(numCounters - 1)}>Remove Paragraph</button>
            {countersArr.map((idx) => <Counter key={idx} />)}
            <p>{count}</p>
            </>
        )
}

function SecondTab () {

    return (
        <div>
            <RenderSecondTab title="Number of Lorem Ipsum paragraphs:" />
        </div>
    )
}


export default SecondTab;
