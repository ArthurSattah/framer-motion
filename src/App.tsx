import { Route, Routes ,useLocation} from 'react-router-dom';
import { useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Base from './components/base/Base';
import Toppings from './components/toppings/Toppings';
import Order from './components/order/Order';
import { AnimatePresence } from "framer-motion";
import Modal from './components/modal/Modal';

function App() {

  const [pizza, setPizza] = useState<{ base: string, toppings: string[] }>({ base: "", toppings: [] });
  const location =useLocation();
  const [showModal, setShowModal]= useState<boolean>(false)

  const addBase = (base: string) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping: string) => {
    let newPizza: { base: string, toppings: string[] };
    if (pizza.toppings.includes(topping))
      newPizza = { ...pizza, toppings: pizza.toppings.filter((value) => value !== topping) };
    else {
      newPizza = { ...pizza };
      newPizza.toppings.push(topping);
    }
    setPizza(newPizza)
  }


  return (
    <div className={styles.app}>
      <Header />
      <Modal showModal={showModal}/>
      <AnimatePresence mode='wait' onExitComplete={()=>{setShowModal(false)}}>

        <Routes location={location} key={location.key}>

          <Route path='/' element={<Home />} />
          <Route path='/base' element={<Base pizza={pizza} addBase={addBase} />} />
          <Route path='/toppings' element={<Toppings pizza={pizza} addTopping={addTopping} />} />
          <Route path='/order' element={<Order pizza={pizza} setShowModal={setShowModal} />} />

        </Routes>

      </AnimatePresence>
    </div>
  )
}

export default App
