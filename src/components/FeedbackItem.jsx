
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import Card from './shared/Card'

import React from 'react'

function FeedbackItem({item, handleDelete}) {

   
  
  return ( 
    <Card className='card' reverse= {false} >
        <div className="num-display">{item.rating} </div>
        <button onClick={()=> handleDelete(item.id)}
        className="close" >
          <FaTimes className='close' />
        </button>
        <div className="text-display">{item.text}</div>

        
        
    </Card>
  )
}

export default FeedbackItem
