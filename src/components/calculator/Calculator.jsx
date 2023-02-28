import React, { useState } from 'react';
import style from "../calculator/calculator.module.css";

function Calculator() {
    const [count, setCount] = useState("");

    // Похож на componentDidMount и componentDidUpdate:
    function onChanges(e) {

        setCount(e.target.value.replace(/[A-Za-zА-Яа-яЁё]/g, ''))


    }
    function insert(num) {
        setCount(count + num);
    }
    function clean(e) {
        setCount("")
    }
    function back() {
        setCount(count.substring(0, count.length - 1))
    }
    function equal() {
        switch (count[0]) {
            case "/":

                return false
            case "*":

                return false
            case "-":

                return false
            case "+":

                return false

            default:
                break;
        };
        switch (count[count.length - 1]) {
            case "/":

                return false
            case "*":

                return false
            case "-":

                return false
            case "+":

                return false

            default:
                break;
        }
        setCount(eval(count))

    }
    function fun(event) {
        event.preventDefault()
        switch (count[0]) {
            case "/":

                return false
            case "*":

                return false
            case "-":

                return false
            case "+":

                return false

            default:
                break;
        };
        switch (count[count.length - 1]) {
            case "/":

                return false
            case "*":

                return false
            case "-":

                return false
            case "+":

                return false

            default:
                break;
        }
        setCount(eval(count))
    }
    return (
        <div className='container'  >
            <a className="btn btn-outline-danger mt-3 p-3 rounded-50 " href="#/portfolio" ><h4 className="font-weight-bolder">Back</h4></a>
            <div className="mt-5 mb-5 d-flex justify-content-center">
                <div className={style.container}>

                    <div className={style.item + " " + style.input}><form className={style.form} name="form " onSubmit={fun} ><input value={count} onInput={onChanges} type="text" name="textview" readonly /></form></div>
                    <button className={style.item + " " + style.clean} onClick={() => { clean() }}>C</button>
                    <button className={style.item + " " + style.back} onClick={() => { back() }}>&larr;</button>
                    <button className={style.item} onClick={() => { insert('+') }}>+</button>
                    <button className={style.item} onClick={() => { insert('-') }}>-</button>
                    <button className={style.item} onClick={() => { insert('*') }}>&times;</button>
                    <button className={style.item} onClick={() => { insert('/') }}>&divide;</button>
                    <button className={style.item} onClick={() => { insert('7') }}>7</button>
                    <button className={style.item} onClick={() => { insert('8') }}>8</button>
                    <button className={style.item} onClick={() => { insert('9') }}>9</button>
                    <button className={style.item} onClick={() => { insert('(') }}>(</button>
                    <button className={style.item} onClick={() => { insert('4') }}>4</button>
                    <button className={style.item} onClick={() => { insert('5') }}>5</button>
                    <button className={style.item} onClick={() => { insert('6') }}>6</button>
                    <button className={style.item} onClick={() => { insert(')') }}>)</button>
                    <button className={style.item} onClick={() => { insert('1') }}>1</button>
                    <button className={style.item} onClick={() => { insert('2') }}>2</button>
                    <button className={style.item} onClick={() => { insert('3') }}>3</button>
                    <button className={style.item + " " + style.equal} onClick={() => { equal() }}>=</button>
                    <button className={style.item + " " + style.zero} onClick={() => { insert('0') }}>0</button>
                    <button className={style.item} onClick={() => { insert('.') }}>.</button>
                </div>
            </div>
        </div>
    );
}
export default Calculator;