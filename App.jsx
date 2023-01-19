import './App.css';
import React, { useState } from 'react';

function App() {
  function clickName(){
    setName('Даниль')
  }
  function clickfname(){
    setFname('Даниль')
  }
  function clickAge1(){
    setAge(Number(age) + 1)
  }
  function clickAge2(){
    setAge(Number(age) - '1')
  }
  let [name, setName] = useState('даниль')
  let [fname, setFname] = useState('Гвниев')
  let [age, setAge] = useState('16')
  let [ban, setBan] = useState(false)
  let [ban1, setBan1] = useState(false)


  let [fam, setFam] = useState('Фамилия')
  let [im, setIm] = useState('Имя')
  function hadleChandge(event){
    setFam(event.target.fam);
  }
  function hadleChandge1(event){
    setIm(event.target.im);
  }
  function btn1(){
    setFam('йцукен')
  }
  function btn2(){
    setIm('йцук')
  }
  let [text, setText] = useState('Введите текст')

  function inputText(event){
    setText(event.target.value);
  }
  function inpute(event){
    setBan(event.target.value)
  }
  function inputes(event){
    setBan1(event.target.value)
  }
  let [inAge, setInAge]= useState('12')
  function inpAge(event){
    setInAge(event.target.value)
  }
  let [grad,setGrad]=useState('')
  function inpGrad(event){
    setGrad(event.target.value)
  }
  let [num1,setNum1]=useState('')
  function inpNumber1(event){
    setNum1(event.target.value)
  }
  let [num2,setNum2]=useState('')
  function inpNumber2(event){
    setNum2(event.target.value)
  }
  let [num3,setNum3]=useState('')
  function inpNumber3(event){
    setNum3(event.target.value)
  }
  let [num4,setNum4]=useState('')
  function inpNumber4(event){
    setNum4(event.target.value)
  }
  let [num5,setNum5]=useState('')
  function inpNumber5(event){
    setNum5(event.target.value)
  }
  let[number1,setNumber1]= useState('')
  function inpSetNumber1(event){
    setNumber1(event.target.value)
  }
  let[number,setNumber]= useState('')
  function inpSetNumber(event){
    setNumber(event.target.value)
  }
  let[res,setRes]=useState('')
  let[date1,setDate1]=useState('')
  let[date2,setDate2]=useState('')
  function inpDate1(event){
    setDate1(event.target.value)
  }
  function sum(){ 
    date1.getDate()
    date2.getDate()
   let res= Number(date1)-Number(date2) 
  } 
  function inpDate2(event){
    setDate2(event.target.value)
  }
  let[btn,setBtn]=useState('')
  console.log(btn)
  

  let [welcome, setWelcome] = useState(true)
  let message;
  if (welcome){
    message = <p>Добро пожаловать</p>
  }else{
    message = <p>Досвидания</p>
  }
  let inpjs;
  if(inpjs){
    inpjs = <p></p>
  }else{
    inpjs =<p>JS</p>
  }
  let[js,setJs]=useState(true)
  let[css,setCss]=useState(true)
  let[html,setHtml]=useState(true)
  let[checked,setChecked]=useState(true)
  let check;
  if(checked){
    check = "есть 18"
  }else{
    check='нет 18 лет'
  }
  let[checked1,setChecked1]=useState(true)
  let check1
  if(checked1){
    check1='написано'
  }else{
    check1=''
  };
  

  let[select,setSelect]=useState('');
  function selectChange(event){
    setSelect(event.target.value);}

  const texts = ['сургут', 'ниднекамск', 'елабуга', 'казань'];
  const [value, setValue] = useState('');
  const options = texts.map((text, index) => { 
    return <option key={index}>{text}</option>;
  });
  const texts11 = ['от 0 до 12', 'от 13 до 17', 'от 18 до 25', 'старше 25'];
  const [select2, setSelect2] = useState('');
  const options1 = texts11.map((text, index) => { 
    return <option key={index}>{text}</option>;});

  
  const [radio, setRadio] = useState(1);
  function radioHandler(event) {
    setRadio(event.target.value);
  }


  const [radio1, setRadio1] = useState(1);
  function radioHandler1(event) {
    setRadio1(event.target.value);
  }
  return (
    // 1 задание
    <div className ="App">
    <p>{name}</p>
    <button onClick={clickName}>Изменить имя</button>
    <p>{fname}</p>
    <button onClick={clickfname}>Изменить Фамилию</button>
    <p>{age} лет</p>
    <button onClick={clickAge1}>Добавить 1 год</button> <button onClick={clickAge2}>Забрать 1 год</button>
    <p>{ban ? 'в бане' : 'Не забанен'}</p>
    <input type='checkbox' checked= {ban} onChange={() => setBan(!ban)} />Забанить{ban}

{/* 2 задание */}<br />
    <p><input value={fam} onChange={hadleChandge}/></p>
    <p><input value={im} onChange={hadleChandge1}/></p>
    <button onClick={btn1}>Изменить фамилию</button> <button onClick={btn2}>изменить имя</button><br/>

    <input value={text} onChange={inputText}/><p>{text.length}</p>
    <p>{ban1 ? 'в бане' : 'Не забанен'}</p>
    <input type='checkbox' checked= {ban1} onChange={() => setBan1(!ban1)} />Забанить{ban1}<br></br>
    <input value={inAge} onChange={inpAge}></input><p>Год Рождения: {2023-inAge}</p><br/>
    <input value={grad} onChange={inpGrad} placeholder='Введите ℉'></input><p>{Math.floor((grad-32)*5/9)} °C</p>
    <input value={num1} onChange={inpNumber1} placeholder='Введите число'/>
    <input value={num2} onChange={inpNumber2} placeholder='Введите число'/>
    <input value={num3} onChange={inpNumber3} placeholder='Введите число'/>
    <input value={num4} onChange={inpNumber4} placeholder='Введите число'/>
    <input value={num5} onChange={inpNumber5} placeholder='Введите число'/>
    <p>Среднее арефметическое: {(Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5))/5}</p>
    
    <input value={number} onChange={inpSetNumber}></input>
    <input value={number1} onChange={inpSetNumber1}></input> <button onClick={() =>setRes(Number(number)+Number(number1))}>Сложить</button> <button onClick={() =>setRes(Number(number)*Number(number1))}>Умножить</button> <p>{res}</p>

    <input type='date' onChange={inpDate1}></input><input type='date' onChange={inpDate2}></input>
    <button onClick={()=>setBtn()}>Количество дней</button> <p>{btn}</p> 
    <br></br>


    <input type='checkbox' checked={welcome} onChange={()=>setWelcome()}></input>
    <button onClick={()=>setWelcome(!welcome)}></button><p>{message}</p>
    <input type='checkbox' checked= {css} onChange={() => setCss(!css)} />Удалить{css} <br></br>
    <input type='checkbox' checked= {html} onChange={() => setHtml(!html)} />Удалить{html}<br></br>
    <input type='checkbox' checked= {js} onChange={() => setJs(!js)} />Удалить{js}<br></br>
    <p>{css ? '' : 'CSS'}</p>
    <p>{html ? '' : 'Html'}</p>
    <p>{js ? '' : 'JS'}</p>
    <input type='checkbox' checked={checked} onChange={()=> setChecked(!checked)}></input>
    <>{check}</><br></br>
    <input type='checkbox' checked={checked1} onChange={()=> setChecked1(!checked1)}></input> <p>{check1}</p>


    <select value={select} onChange={selectChange}>
      <option>Елабуга</option>
      <option>Альметьевск</option>
      <option>Набережные челны</option>
      <option>Нижнекамск</option>
    </select>
    <p>Город который вы выбрали: {select}</p>
    <select value={value} onChange={(event) => setValue(event.target.value)}>
			{options}
		</select>
		<p>
			ваш выбор: {value}
		</p>
    <select value={select2} onChange={(event) => setSelect2(event.target.value)}>
			{options1}
		</select>
		<p>
			вы выбрали: {select2}
		</p>

    <input
			type="radio"
			name="radio"
			value="Первая кнопка"
			checked={radio === '1' ? true : false}
			onChange={radioHandler}
		/>
		<input
			type="radio"
			name="radio"
			value="Вторая кнопка"
			checked={radio === '2' ? true : false}
			onChange={radioHandler}
		/>
		<input
			type="radio"
			name="radio"
			value="Третья Кнопка"
			checked={radio === '3' ? true : false}
			onChange={radioHandler}
		/>
    <p>{radio}</p>

    <input
			type="radio"
			name="radio"
			value="JavaScript, хорош"
			checked={radio1 === '1' ? true : false}
			onChange={radioHandler1}
		/>
		<input
			type="radio"
			name="radio"
			value="Python"
			checked={radio1 === '2' ? true : false}
			onChange={radioHandler1}
		/>
		<input
			type="radio"
			name="radio"
			value="PHP"
			checked={radio1 === '3' ? true : false}
			onChange={radioHandler1}
		/>
    <p>{radio1}</p>
    </div>
  ); 
}

export default App;

