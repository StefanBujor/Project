import React, { useState } from 'react'
import s from "./GetDiscount.module.css"
import bg_image from '../../assets/discount_img.png'

const countries = [
    { code: '+49', label: 'Germany' },
    { code: '+373', label: "Moldova"},
    { code: '+1', label: 'USA' },
    { code: '+44', label: 'UK' },
  ];

const GetDiscount = () => {
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
  return (
    <section className={s.section}>
        <div className={s.container}>
            <img className={s.bg_image} src={bg_image} alt="Bg_Image" />
            <form className={s.form} onSubmit={handleSubmit}>
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
                    <input type="tel" id="phone-number" className={s.form_input_number} value={phoneNumber}
                    onChange={handlePhoneNumberChange}/>
                </div>
                <button type="submit" className={s.form_submit_btn}>Get a discount</button>
            </form>
        </div>
    </section>
  )
}

export default GetDiscount