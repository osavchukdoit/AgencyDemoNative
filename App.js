import React, { useState } from "react";
import { AppStack } from "./src/navigation/AppStack";
import { Loader } from "./src/components/utils/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <AppStack setIsLoading={setIsLoading} />
      {isLoading && <Loader />}
    </>
  );
}
