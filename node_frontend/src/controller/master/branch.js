import React from 'react'
import Fullbar from '../../layouts/Fullbar'
import Branch from '../../view/master/branch'


export default function Branch_controller() {
  return (
    <div>
    <>
    <Fullbar title="branch"  divdata={<Branch/>} />
    </>
   </div>
  )
}
