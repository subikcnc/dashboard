import OnboardButtons from "@/components/OnboardButtons";
import React from "react";

const LocationPage = () => {
  console.log("location page");
  return (
    <div>
      <h1 className="text-3xl">Property Details</h1>
      <h2 className="text-xl">Location</h2>
      <OnboardButtons />
    </div>
  );
};

export default LocationPage;
