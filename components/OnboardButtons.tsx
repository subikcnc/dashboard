"use client";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  increment,
  decrement,
  reset,
} from "@/lib/features/counter/stepCounterSlice";

const OnboardButtons = () => {
  const count = useSelector((state: RootState) => state.stepCounter.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const steps = useMemo(
    () => [
      "/property-details/location",
      "/property-details/name",
      "/property-details/facilities",
      "/property-details/breakfast",
      "/property-details/parking",
      "/property-details/languages",
      "/property-details/house-rules",
      "/room-details/room-type",
    ],
    [],
  );
  useEffect(() => {
    if (count >= 0 && count < steps.length) {
      router.push(steps[count]);
    }
  }, [count, router, steps]);
  return (
    <div className="mt-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl">Step Count: {count}</h1>
      </div>
      <div className="mt-2 flex gap-2">
        <button
          className="rounded-lg bg-white px-4 py-2 text-black"
          onClick={() => dispatch(decrement())}
        >
          Back
        </button>
        <button
          className="rounded-lg bg-violet-700 px-4 py-2"
          onClick={() => dispatch(increment())}
        >
          Continue
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default OnboardButtons;
