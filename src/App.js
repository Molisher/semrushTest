import { useState, useEffect } from "react";
import { Input, Button, Result, Select } from "./components";
import { AppContainer, InputPart, ResultPart, Container } from "./globalStyles";
function App() {
  const [price, setPrice] = useState(null);
  const [payment, setPayment] = useState(null);
  const [percent, setPercent] = useState(null)
  const [term, setTerm] = useState(null);
  const [interest, setInterest] = useState(null);

  const deleteWhiteSpace = (number) => {
    if (number) {
      return number.replace(/\s/g, "");
    }
  };
  let body = deleteWhiteSpace(price) - deleteWhiteSpace(payment);
  let interestDevided = deleteWhiteSpace(interest) / 1200;
  let monthly = body * ( interestDevided + (interestDevided / (Math.pow(1 + interestDevided, 10) - 1)));
  let income = 5 * monthly / 3;
  let over = monthly * term - body

  const handleSaveClick = () => {
    let items = {
      price,
      payment,
      term,
      interest,
      percent
    }
    window.localStorage.setItem('savedItems', JSON.stringify(items))
  }
  const handleClearClick = () => {
    window.localStorage.clear()
    setPrice(null)
    setPayment(null)
    setTerm(null)
    setInterest(null)
    setInterest(null)
  }

  useEffect(() => {
    if(window.localStorage.getItem('savedItems')){
      let items = JSON.parse(window.localStorage.getItem('savedItems')  ) 
      setPrice(items.price)
      setPayment(items.payment)
      setTerm(items.term)
      setInterest(items.interest)
      setPercent(items.percent)
    }
  }, [])

  return (
    <AppContainer>
      <h1>Калькулятор кредита</h1>
      <Container>
      <InputPart>
        <Input
          id="price"
          suffix="₽"
          label="Стоимость недвижимости"
          value={price}
          setter={setPrice}
        />
        <Input
          id="payment"
          suffix="₽"
          label="Первоначальный взнос"
          value={payment}
          setter={setPayment}
          selectSetter = {setPercent}
        />
        <Select value={percent} setter={setPercent} setPayment = {setPayment} price={deleteWhiteSpace(price)} />
        <Input
          id="term"
          suffix="лет"
          label="Срок кредита"
          value={term}
          setter={setTerm}
        />
        <Input
          id="interest"
          suffix="%"
          label="Процентная ставка"
          value={interest}
          setter={setInterest}
        />
        <Button type="primary" label="Save" onClick = {handleSaveClick}/>
        <Button type="default" label="Clear" onClick = {handleClearClick}/>
      </InputPart>
      <ResultPart>
        <Result
          label="Ежемесячный платеж"
          value={monthly ? Math.floor(monthly).toLocaleString() : 0}
        />
        <Result label="Необходимый доход" value = {income ? Math.floor(income).toLocaleString() : 0}/>
        <Result label="Переплата"  value = {over ? Math.floor(over).toLocaleString() : 0}/>
        <Result label="Тело кредита" value={body ? Math.floor(body).toLocaleString() : 0} />
      </ResultPart>
      </Container>
    </AppContainer>
  );
}

export default App;
