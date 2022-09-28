
import Header from './components/Header'
import FeedbackData from './components/data/FeedbackData';
import {v4 as uuidv4} from 'uuid'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import AboutIcon from './components/AboutIcon';
import Card from './components/shared/Card';

function App() {

     const [feedback, setFeedback] = useState(FeedbackData)

     const addFeedback = (newFeedback)=> {
      
                newFeedback.id = uuidv4()

              setFeedback([newFeedback,...feedback])
             
     }
     
     const deletFeedback = (id) =>{

      if(window.confirm("are you sure you want to delete it ?!")){
               
        setFeedback(feedback.filter((item) =>  item.id !== id))
      }
     }

  return (

    <Router>
          <Header text = {"Feedback Ui"} />
          <div className="container">
          <Routes>
              <Route exact path='/'  
               element={
                <>
                   <FeedbackForm handleAdd = {addFeedback} />        
                  <FeedbackStats feedback ={feedback}/>  
                  <FeedbackList feedback={feedback}
                    handleDelete = {deletFeedback}
                  />
                </>
               }
              >   
              </Route>
          
        
        <Route path='/about' element={<AboutPage/>} /> 
        </Routes>
           <AboutIcon/>
          </div>
        
    </Router>
  );
}

export default App;
