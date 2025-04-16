import React from 'react'
import Style from './Infrastructure.module.css'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Infrastructure() {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {

    }, []);

  return <>
  <h1>Infrastructure</h1>
  </>
}
