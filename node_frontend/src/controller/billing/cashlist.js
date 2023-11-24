import React from 'react'
import Fullbar from '../../layouts/Fullbar';
import Cashlist from '../../view/billing/cashlist';


export default function Cashlist_controller() {
  return (
    <div>
        <>
        <Fullbar title="cashlist" divdata={<Cashlist/>}/>
        </>
    </div>
  )
}
