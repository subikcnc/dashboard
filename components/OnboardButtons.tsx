'use client'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { increment, decrement } from '@/lib/features/counter/stepCounterSlice';
const OnboardButtons = () => {
  const count = useSelector((state: RootState) => state.stepCounter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <h1 className="text-white">Onboard buttons</h1>
      <h1>Step Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Back</button>
      <button onClick={() => dispatch(increment())}>Continue</button>
    </div>
  )
}

export default OnboardButtons