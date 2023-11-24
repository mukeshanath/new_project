import React from 'react'
import Fullbar from '../../layouts/Fullbar'
import Branchlist from '../../view/master/branchlist'


export default function Branchlist_controller() {
  return (
    <div>
    <>
    <Fullbar title="branchlist"  divdata={<Branchlist/>} />
    </>
   </div>
  )
}
