import React from 'react'
import Fullbar from '../../layouts/Fullbar';
import Companylist from '../../view/billing/companylist';


export default function Comapnylist_controller() {
  return (
    <div>
        <>
        <Fullbar title="companylist" divdata={<Companylist/>}/>
        </>
    </div>
  )
}
