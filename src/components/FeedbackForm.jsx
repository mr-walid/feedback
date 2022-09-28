import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


import React from 'react'

function FeedbackForm({handleAdd}) {


   const [text, setText] = useState('')
   const [rating, setRating] = useState('')
   const [message, setMessage] = useState(10)


    const handleTextChange = (e) => {
    
        if(text === ''){
            setMessage(null)

        }else if(text !== '' && text.trim().length <= 10){

            setMessage('Text must be at least 10 characters')
        }
        else {
            setMessage(null)
        }


        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text:text,
                rating: rating,  
            }
           console.log(newFeedback)
        }
    }


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service</h2>
              <RatingSelect  select ={(rating)=> setRating(rating)} />
          <div className="input-group">
        <input 
                onChange={handleTextChange} 
                type="text"
                placeholder='write a review'
                value={text}
                />
                <Button  type='submit' 
                > 
                Send
                 </Button>
        </div>

        {message && <div className='message'>{message}</div> }
       
      </form>
    </Card>
  )
}

export default FeedbackForm
