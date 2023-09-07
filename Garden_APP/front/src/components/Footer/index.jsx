import React from 'react'
import s from './index.module.css'
import InstagramIcon from '../../Icons/InstagramIcon'
import WhatsupIcon from '../../Icons/WhatsupIcon'

export default function Footer() {
  return (
    <div>
      <div className={s.info_conteiner}>
        <div className={s.contact_item}>
          <p>Contact</p>
          <p>+49 999 999 99 99</p>
          <div className={s.icon_item}>
            <div className={s.icon_style}>
              <InstagramIcon />
              <p>Instagram</p>
            </div>
            <div className={s.icon_style}>
              <WhatsupIcon />
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
        <div className={s.adress_item}>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          <p>Working Hours:</p>
          <p>24 hours a day</p>
        </div>        
      </div>
      <iframe className={s.map_item} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792297!2d13.372469776680424!3d52.507932872058106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1692654952290!5m2!1sru!2sde" ></iframe>
    </div>
  )
}
