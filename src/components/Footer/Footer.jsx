import React from 'react'
import Style from './Footer.module.css'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Footer() {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {

    }, []);

  return <>
  <h1>Footer</h1>
  </>
}
