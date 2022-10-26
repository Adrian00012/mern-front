import PropTypes from 'prop-types'

import React, { Component , useState, useRef, useEffect } from 'react'
import {getItems} from "./services/funciones"
export default function Items () {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        getItems(setItems)
        
      
          
        }, [])
}