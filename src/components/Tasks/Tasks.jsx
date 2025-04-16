import React from 'react'
import Style from './Tasks.module.css'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Tasks() {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {

    }, []);

  return <>
  <h1>Tasks</h1>
  </>
}
