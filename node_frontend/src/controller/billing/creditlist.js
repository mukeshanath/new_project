import React from 'react'
import Fullbar from '../../layouts/Fullbar'
import CreditList from '../../view/billing/creditlist';


export default function Zone() {
  return (
    <div>
    <>
    <Fullbar title="creditlist" divdata={<CreditList/>} />
    </>
   </div>
  )
}
