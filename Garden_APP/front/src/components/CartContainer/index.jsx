import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';
import { clearCartAction } from '../../store/reducers/cartReducer';
import s from './index.module.css'
import DirectionIcon from '../../Icons/DirectionIcon';

const countries = [
  { code: '+373', label: "Moldova"},
  { code: '+1', label: 'USA' },
  { code: '+44', label: 'UK' },
  { code: '+49', label: 'Germany' },
];

export default function CartContainer() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
};

const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
};

const handleSubmit = () => {
    console.log('Selected Country:', selectedCountry);
    console.log('Phone Number:', phoneNumber);
};

const cart_state = useSelector(state => state.cart);

const dispatch = useDispatch();

return (
  <div className={s.cart}>
    <h2>Shopping cart</h2>
    <Link to={`/products`}>Back to the store <DirectionIcon /> </Link>
    <div  className={s.cart_container}>
      <div className={s.cart_item}>
        {
          cart_state.map(el => <CartItem key={el.id} {...el} />)
        }
      </div>
      <div className={s.cart_form}>
        <h3>Order details</h3>
        <div>
          <p>Total:</p>
          <p>
            {
              cart_state.reduce((acc, { price, count }) => acc + price * count, 0)
            }$
          </p>
        </div>
        <div className={s.form_item}>
          <input type="tel" id="phone-number" placeholder='Phone number' className={s.form_input_number} value={phoneNumber}
                    onChange={handlePhoneNumberChange}/>
          <button onClick={handleSubmit}>
          Order
          </button>
        </div>  
        </div>
      </div>
    </div>
  )
}
