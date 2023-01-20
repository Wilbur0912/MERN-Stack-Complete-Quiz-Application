import React, {useEffect,useState} from 'react'

import Questions from './Questions'

import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import {useSelector, useDispatch} from 'react-redux'
import {Navigate } from 'react-router-dom'

import { movePrevAction } from '../redux/question_reducer';
export default function Quiz() {

  const[check, setChecked] = useState(undefined);
  const result = useSelector(state => state.result.result);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch = useDispatch();

  useEffect(() =>{
     console.log(result);
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

  /**finished exam after the last question */
  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace="true"></Navigate>
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


