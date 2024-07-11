"use client";
import { useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  incrementMajorStep,
  decrementMajorStep,
  resetMajorStep,
  incrementMinorStep,
  decrementMinorStep,
  resetMinorStep,
} from "@/lib/features/counter/stepCounterSlice";

const OnboardButtons = () => {
  const majorStepCount = useSelector(
    (state: RootState) => state.stepCounter.currentMajorStep,
  );
  const minorStepCount = useSelector(
    (state: RootState) => state.stepCounter.currentMinorStep,
  );
  console.log("major and minor step count: ", majorStepCount, minorStepCount);
  const dispatch = useDispatch();

  // const router = useRouter();
  const majorSteps = useMemo(
    () => [
      "/property-details",
      "/room-details",
      "/upload-photos",
      "/final-steps",
    ],
    [],
  );

  const minorSteps = useMemo(
    () => [
      [
        "/location",
        "/name",
        "/facilities",
        "/breakfast",
        "/parking",
        "/languages",
        "/house-rules",
      ],
      ["/room-type", "/price", "/amenities", "/name"],
    ],
    [],
  );

  // useEffect(() => {
  //   if (count >= 0 && count < steps.length) {
  //     router.push(steps[count]);
  //   }
  // }, [count, router, steps]);
  const handleBack = () => {
    if (majorStepCount === 0) return;
    dispatch(decrementMajorStep());
  };
  const handleContinue = () => {
    if (majorStepCount === majorSteps.length) return;
    if (majorStepCount < majorSteps.length) {
      if (minorSteps[majorStepCount].length === minorStepCount - 1) {
        dispatch(incrementMajorStep());
        dispatch(resetMinorStep());
      } else {
        dispatch(incrementMinorStep());
      }
    }
  };
  const handleReset = () => {
    dispatch(resetMajorStep());
    dispatch(resetMinorStep());
  };
  return (
    <div className="mt-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl">Major Step Count: {majorStepCount}</h1>
        <h1 className="text-2xl">Minor Step Count: {minorStepCount}</h1>
      </div>
      <div className="mt-2 flex gap-2">
        <button
          className="rounded-lg bg-white px-4 py-2 text-black"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="rounded-lg bg-violet-700 px-4 py-2"
          onClick={handleContinue}
        >
          Continue
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default OnboardButtons;
