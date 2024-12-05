import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './elements.css'

export const Elements = ({ icon, text, linkTo, hideSideBar, linkColor }) => {
    const [close, setClose] = useState(true);

    const [style, setStyle] = useState({})
    const showColorSelected = () => { }

    const ref = useRef();

    return (

            <Link style={{ overflow: 'hidden'}} to={`/${linkTo}`} className={`selk1A pad ${linkColor}`} id="__allLitem" draggable="false">
                <div className="_selTX1" onClick={hideSideBar}>
                    <span aria-hidden="true" className="_selTX2 _selTX3">
                        <div className="" style={{}} >{icon}</div>
                    </span>
                </div>
                <div className="_SelTxp1">
                    <p className="_SelTxp01 _SelTxp02 _SelTxp1a _SelTx50" style={{marginBlockStart: '0 !important'}}>
                        <span className="stzR1">{text}</span>
                    </p>
                </div>
            </Link>
    )
}

Elements.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.string,
    onClickCloseNav: PropTypes.func
}