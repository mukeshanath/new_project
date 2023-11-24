import React from 'react'
import Fullbar from '../../layouts/Fullbar';
import Company from '../../view/billing/company';


export default function Company_controller() {
  return (
    <div>
        <>
        <Fullbar title="company" divdata={<Company/>}/>
        </>
    </div>
  )
}
