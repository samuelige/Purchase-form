import React from 'react'
import './App.css';
import Header from './Header/Header';
import BillingInfo from './Pages/Billing Info/BillingInfo';
import ConfirmPayment from './Pages/Confirm Payment/ConfirmPayment';
import PersonalInfo from './Pages/Personal Info/PersonalInfo';
import { ReactComponent as Background} from './Svgs/background.svg'
import { Switch, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import BillingSecondPage from './Pages/Billing-second-page/BillingSecondPage';
import { useSelector } from 'react-redux';

const App = () => {

  const successful_payment = useSelector(state => state.completed.purchase)
  console.log(successful_payment)


  return (

    <div className="App">
      <Background />
     { !successful_payment ? (
     <>
      <Header />
      <Navbar />
        <Switch>
          <Route exact path="/">
            {PersonalInfo}
          </Route>
          <Route exact path="/billingInfo">
            <BillingInfo/>
          </Route>
          <Route exact path="/comfirmPayment">
            <ConfirmPayment/>
          </Route>
          <Route path="/billingSecondPage">
            <BillingSecondPage />
          </Route>
        </Switch>
        </>
        ) : (
          <ConfirmPayment/>
        )
    } 
      
    </div>
  )
}

export default App
