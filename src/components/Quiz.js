import React, {useEffect,useState} from 'react'

import Questions from './Questions'

import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import {useSelector, useDispatch} from 'react-redux'
import { movePrevAction } from '../redux/question_reducer';
export default function Quiz() {

  const[check, setChecked] = useState(undefined);
  const state = useSelector(state => state);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch = useDispatch();

  useEffect(() =>{
     console.log(state)
  })
  /** next button event handler*/
  function onNext(){
    console.log('On next click')

    if(trace < (queue.length)){
      dispatch(moveNextQuestion());

      dispatch(PushAnswer(check));
    }
    /**update the trace value by one using MoveNextAction */
  }

  /** Prev button event handler*/
  function onPrev(){
    console.log('On onPrev click')
    if(trace > 0){
      dispatch(movePrevQuestion())
    }
 
  }

  function onChecked(check){
    console.log(check);
    setChecked(check)
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application </h1>
      {/**display questions */}
      <Questions onChecked={onChecked}/>
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}


