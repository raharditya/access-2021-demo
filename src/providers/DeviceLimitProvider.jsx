import React, { useState, createContext } from "react";

export const DeviceLimitContext = createContext(undefined);

function DeviceLimitProvider(props) {
  const [isAllowed, setIsAllowed] = useState(true);

  return (
    <DeviceLimitContext.Provider value={{ isAllowed, setIsAllowed }}>
      {props.children}
    </DeviceLimitContext.Provider>
  );
}

export default DeviceLimitProvider;
