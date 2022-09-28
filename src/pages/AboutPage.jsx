import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

import React from 'react'

function AboutPage() {
  return (
    <Card>
      About us ninjaaaaaaa

      <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quo repellat nobis nemo numquam assumenda quasi doloribus id error officiis.</p>
      <br />
      <br />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius iste officiis suscipit amet. Nobis, magnam!</p>
      

         <Link to="/"> Back To Home</Link>
    </Card>
  )
}

export default AboutPage
