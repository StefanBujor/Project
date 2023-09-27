import React, { useState } from 'react'
import s from "./GetDiscount.module.css"
import bg_image from "../../assets/discount_img.png"
import { useForm } from 'react-hook-form';
import { sendDiscount } from '../../requests/discount_req';

const countries = [
    { code: '+373', label: "Moldova"},
    { code: '+1', label: 'USA' },
    { code: '+44', label: 'UK' },
    { code: '+49', label: 'Germany' },
  ];

const GetDiscount = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur"});

    const phoneRegister = register("phone", {
        required: "*Phone number is required",
        pattern: {
          value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
          message: "*incorrect format, write your phone number like this: +491602484373"
        }
      })
    
      const submit = (data) => {
        const phone = `${selectedCountry}${data.phone}`;
        sendDiscount({phone})
        reset();
      }


    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
  return (
    <section className={s.section}>
        <div className={s.container}>
            <img className={s.bg_image} src={bg_image} alt="dwarf" />
            <form className={s.form} onSubmit={handleSubmit(submit)}>
                <h2>5% off <br/>
                <span>on the first order</span>
                </h2>
                <div className={s.form_group}>
                    <select id="country-code" className={s.form_control} value={selectedCountry}
                    onChange={handleCountryChange}>
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {selectedCountry === country.code ? country.code : country.label}
                        </option>
                    ))}
                    </select>
                    <input type="tel" name="phone" className={s.form_input_number} {...phoneRegister}/>
                </div>
                <button type="submit" className={s.form_submit_btn}>Get a discount</button>
            </form>
        </div>
    </section>
  )
}

export default GetDiscount