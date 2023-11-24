import React from 'react'
import Fullbar from '../../layouts/Fullbar'
import Credit from '../../view/billing/credit'


export default function Credit_controller() {
  return (
    <div>
    <>
    <Fullbar title="credit"  divdata={<Credit/>} />
    </>
   </div>
  )
}
