'use client'
import {useEffect, useMemo} from 'react'
import {useRouter} from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { increment, decrement, reset } from '@/lib/features/counter/stepCounterSlice';
const OnboardButtons = () => {
  const count = useSelector((state: RootState) => state.stepCounter.value);
  const dispatch = useDispatch();
  const router = useRouter()

  const steps = useMemo(() => [
    '/property-details/location',
    '/property-details/name',
    '/property-details/parking'
  ], []);
  useEffect(() => {
    if (count >= 0 && count < steps.length) {
      router.push(steps[count]);
    }
  }, [count, router, steps]);
  return (
    <div className="flex justify-center">
      <h1 className="text-white">Onboard buttons</h1>
      <h1>Step Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Back</button>
      <button onClick={() => dispatch(increment())}>Continue</button>
      <button onClick={() => dispatch(reset())}>Reset Count</button>
    </div>
  )
}

export default OnboardButtons