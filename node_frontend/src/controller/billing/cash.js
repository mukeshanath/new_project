import React from 'react'
import Fullbar from '../../layouts/Fullbar'
import Cash from '../../view/billing/cash'


export default function Cash_controller() {
  return (
    <div>
    <>
    <Fullbar title="cash"  divdata={<Cash/>} />
    </>
   </div>
  )
}
