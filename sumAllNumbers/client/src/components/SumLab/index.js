import React, {Component} from 'react';
import './sumLab.css'
import { sum } from 'mathjs'


export class SumLab extends Component {
  array = [1,2,3,4,5,6,7,8,9,10];

  first = () => {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
       sum += this.array[i];
    }
    return sum;
  }
  second = () => this.array.reduce((a, b) => a + b);
  third = () => eval(this.array.join('+'));
  forth = () => {
    var sum=0;
    this.array.forEach(el => {
      sum+=el;
    })
    return sum;
  }
  fifth = () => {
    var sum=0;
    this.array.map(el => {
      sum+=el;
    })
    return sum;
  }
  sixth = () =>{
    let sum = 0;
    for (var value of this.array) {
      sum += value;
    }
    return sum;
  }
  seventh = () => this.array.reduceRight((a,b)=>a+b);
  eigth = () => sum(this.array);
  ninth = () => {
    const iterator = this.array.values();
    var sum = 0;
    let iteratorState;
    while (!iteratorState || !iteratorState.done) {
      iteratorState = iterator.next();
      if (iteratorState.value) {
        sum += iteratorState.value;
      }
    }
    return sum;
  }

  render () {
    return (
      <div className="sumWrapper">
        <h1>Sum 10 numbers in 10 ways</h1>
        <h3>
          Given the following array, you will have to sum all values in 10 different ways
        </h3>
        <pre className="info">
          {`
            var array = [1,2,3,4,5,6,7,8,9,10];
          `}
        </pre>
        <h3>First: for loop</h3>
        <pre className="first">
          {`
            var sum;
            for (let i = 0; i < numbers.length; i++) {
              el += numbers[i];
            }
            console.log(sum);
            //${this.first()}
          `}
        </pre>
        <h3>Second: reduce</h3>
        <pre className="info second">
          {`
            var sum = this.array.reduce((a, b) => a + b);
            console.log(sum);
            //${this.second()}
          `}
        </pre>
        <h3>Third:eval</h3>
        <pre className="info third">
          {`
            var sum = eval(this.array.join('+'));
            console.log(sum);
            //${this.third()}
          `}
        </pre>
        <h3>Forth:forEach</h3>
        <pre className="info forth">
          {`
            var sum=0;
            arr.forEach(el => {
              sum+=el;
            })
            console.log(sum);
            //${this.forth()}
          `}
        </pre>
        <h3>Fifth:map?</h3>
        <pre className="info fifth">
          {`
            //This form is not correct because a map function should return something
            var sum=0;
            arr.map(el => {
              sum+=el;
            })
            console.log(sum);
            //${this.fifth()}
          `}
        </pre>
        <h3>Sixth: for of</h3>
        <pre className="info sixth">
          {`
            let sum = 0;
            for (var value of this.array) {
              sum += value;
            }
            console.log(sum);
            //${this.sixth()}
          `}
        </pre>
        <h3>Seventh: Reduce from right</h3>
        <pre className="info seventh">
          {`
            var sum = this.array.reduceRight((a, b) => a + b);
            console.log(sum);
            //${this.seventh()}
          `}
        </pre>
        <h3>Eigth: Over Engineering</h3>
        <pre className="info eigth">
          {`
            npm i --save mathjs
            import { sum } from 'mathjs'
            var sum = sum(this.array);
            console.log(sum);
            //${this.eigth()}
          `}
        </pre>
        <h3>Ninth: Iterators</h3>
        <pre className="info eigth">
          {`
            const iterator = this.array.values();
            var sum = 0;
            let iteratorState;
            while (!iteratorState || !iteratorState.done) {
              iteratorState = iterator.next();
              if (iteratorState.value) {
                sum += iteratorState.value;
              }
            }
            //${this.ninth()}
          `}
        </pre>
        <h1>Tenth: Call oxford math institute </h1>
        <a href="tel:+441865273525">Phone: +44 1865 273525</a>
      </div>
    );
  }
}

export default SumLab;
