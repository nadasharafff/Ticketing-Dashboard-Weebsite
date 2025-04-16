import React from 'react'
import Style from './Error.module.css'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Error() {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {

    }, []);

  return <>
  <h1>Error</h1>
  </>
}
