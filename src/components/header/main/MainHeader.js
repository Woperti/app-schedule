import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
//import { SearchMain, SearchViewRecommendations } from '../common/filters/GeneralFilter'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { useOnFocusOutside } from '../../../hooks/useOnFocusOutside'
//import Woperti from '../../assets/images/wop-azul.png'

import './main-header.css'  

import { Link } from 'react-router-dom'
import { Elements } from '../../common/elements/Elements';


const Img = () => {
    return (
        <svg aria-label="Ordenes" className="_8-yt5"
            height="22"
            width="22"
            viewBox="0 0 48 48"
            color="#262626"
            fil="#262626"
            role="img"
        >
            <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 
    2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 
    1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
            ></path>
        </svg>
    )
}
const HeaderFull = (props) => {
  const { account, notifications, history } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuProfile, setToggleMenuProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showDifferentColor, setShowDifferentColor] = useState(0);
  const ref = useRef();

  useClickOutside(ref, () => {
      if (toggleMenu) setToggleMenu(false)
      if (setToggleMenuProfile) setToggleMenuProfile(false)
  });

  useOnFocusOutside(ref, () => {
      if (showMenu) setShowMenu(false)
      if (showMenuDropdown) setShowMenuDropdown(false)

  });

  const hideSideBar = () => {
      setToggleMenu(false)
  }

  const sendEmailComments = () => {

  }

  return (
      <>
          {
              toggleMenuProfile && (
                  <ProfileDropdownMenu onClickCloseR={() => setToggleMenuProfile(false)} />
              )
          }
          <nav className="hd12q">
              <div className='hd-resp'>
                  <header className='hd-wb-n-res'>
                      <div className='spa-l-r'>
                          <Link to="/" tabIndex="0">
                              <img
                                  src={''}
                                  srcSet={''}
                                  alt="Woperti Logo"
                                  className="hd-img-1"
                              />
                          </Link>
                      </div>
                      <div className='spa-l-r dissap'>
                          <Search />
                      </div>
                      <div className='spa-l-r'>
                          <IconSection
                              onClickOpenMenu={() => setToggleMenu(!toggleMenu)}
                              openMenuDropDown={() => setToggleMenuProfile(!toggleMenuProfile)}
                          />
                      </div>
                  </header>
                  <div className='sear-res'>
                      <Search />
                  </div>
              </div>
          </nav>
          {toggleMenu && (
              <Menu onClickCloseL={() => setToggleMenu(false)} />
          )}

      </>
  )
}

export const Search = ({ value }) => {
  return (
      <div className="hdsec-2">
          <input autoCapitalize="none"
              placeholder="Buscar"
              type="text"
              value={value}
          />
          <button className='hd-btn-sea'>go</button>
      </div>
  )
}

export const IconSection = ({ userPhoto, username, onClickOpenMenu, openMenuDropDown }) => {
  const userHasPhoto = "https://instagram.fmex18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/220493524_218181433533502_6190529701038280812_n.jpg?_nc_ht=instagram.fmex18-1.fna.fbcdn.net&_nc_ohc=n5rxKJZVQb8AX8sms6b&tn=R6bJ3Mcuq02j_Gh5&edm=AIQHJ4wBAAAA&ccb=7-4&oh=c3bc297b39d536eb73fa5464cd0c53e5&oe=616124C1&_nc_sid=7b02f1"
  
  const isLogin = false;

  return (
      <div className="cont-icon">
          <div className="OXsIW">
              {isLogin ?
                  <div onClick={openMenuDropDown} className='fl-col'>
                      <svg aria-label="Menu" className="_8-yt5"
                          height="22"
                          width="22"
                          viewBox="0 0 48 48"
                          color="#262626"
                          fill="#262626"
                          role="img"
                      >
                          <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 
                      32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 
                      29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 
                      0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 
                      .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                          ></path>
                      </svg>
                      <span className='mar-side'>
                          <span className='ov-tex'>{`${"Mariana"}`}</span>
                      </span>
                  </div>
                  :
                  <Link to="/iniciar" className='a-dis-lnk'>
                      <div className='fl-col'>
                          <svg aria-label="Menu" className="_8-yt5"
                              height="22"
                              width="22"
                              viewBox="0 0 48 48"
                              color="#262626"
                              fill="#262626"
                              role="img"
                          >
                              <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 
                      32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 
                      29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 
                      0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 
                      .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                              ></path>
                          </svg>
                          <span className='mar-side'>{"Iniciar"}</span>

                      </div>
                  </Link>
              }

          </div>
          <div className="OXsIW">
              <span onClick={onClickOpenMenu} className='fl-col' >
                  <svg aria-label="Profile" className="_8-yt5"
                      height="22"
                      width="22"
                      viewBox="0 0 48 48"
                      color="#262626"
                      fill="#262626"
                      role="img"
                  >
                      <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 
                      2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 
                      1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
                      ></path>

                  </svg>
                  <span className='mar-side'>{"Menu"}</span>
              </span>

          </div>
          <div className="OXsIW">
              <Link to="carritodecompras" title={"carritodecompras"} className='a-dis-lnk'>
                  <div className='fl-col'>
                      <svg aria-label="Carrito de compras" className="_8-yt5"
                          height="22"
                          width="22"
                          viewBox="0 0 48 48"
                          color="#262626"
                          fil="#262626"
                          role="img"
                      >
                          <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 
                      2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 
                      1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
                          ></path>
                      </svg>
                      <span className='mar-side'>Carrito</span>
                  </div>
              </Link>
          </div>
      </div>
  )
}

export const Menu = ({ onClickCloseL }) => {
  const ref = useRef();

  return (
      <>
          <div className='menu-dark-bck' ref={ref}>
              <div className='menu-x-l' ref={ref} onClick={onClickCloseL}></div>
          </div>
          <div className='menu-open-left' >

              <div className='menu-o-l-cnt'>
                  <section className='menu-o-l-sec-1'>
                      <span className=''>
                          <span>
                              <Elements
                                  text="Inicio"
                                  linkTo='/'
                              />
                          </span>
                          <div>
                              <h2>Categorias</h2>
                              <Elements
                                  text="Salud y Belleza"
                              />
                              <Elements
                                  text="Salud y Belleza"
                              />
                              <Elements
                                  text="Unete"
                              />
                          </div>

                      </span>

                      <Elements
                          text="Comprar de nuevo"
                      />
                      <Elements
                          text="Cancelar un servicio o subscripcion"
                      />
                  </section>
                  <section className='menu-o-l-sec-2'>
                      <span><h2>Mi cuenta</h2></span>
                      <Elements
                          text="Tus subscripciones"
                      />
                      <Elements
                          text="Tus reservaciones"
                      />
                      <Elements
                          text="Salir"
                      />
                      <Elements
                          text="Metodos de Pago"
                      />
                  </section>
              </div>
          </div>
      </>
  )
}

export const ProfileDropdownMenu = ({ onClickCloseR }) => {
  const ref = useRef();

  return (
      <>
          <div className='menu-dark-bck'>
              <div className='menu-x' ref={ref} onClick={onClickCloseR}></div>
          </div>
          <div className='menu-open-right' ref={ref}>

              <div className='menu-o-r-cnt'>
                  <section className='menu-o-r-sec-1'>
                      <span className=''>

                      </span>
                      <span><h2>Tus Pedidos</h2></span>
                      <Elements
                          text="Comprar de nuevo"
                      />
                      <Elements
                          text="Cancelar un servicio o subscripcion"
                      />
                  </section>
                  <section className='menu-o-r-sec-2'>
                      <span><h2>Mi cuenta</h2></span>
                      <Elements
                          text="Tus subscripciones"
                      />
                      <Elements
                          text="Tus reservaciones"
                      />
                      <Elements
                          text="Metodos de Pago"
                      />
                      <Elements
                          text="Salir"
                      />

                  </section>
              </div>
          </div>
      </>
  )
}

export default HeaderFull