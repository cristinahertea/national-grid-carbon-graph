import React from 'react'
import { render } from 'react-dom'
import { Home } from './components/Home'
import './reset.css'

const here = document.querySelector('#here')
render(<Home />, here)
