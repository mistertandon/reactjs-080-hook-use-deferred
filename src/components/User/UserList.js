import React, { useDeferredValue, useState, useMemo } from "react";
import { FakeUsers } from "./../../helpers/fakeName";

const UserList = () => {
    
  const [needle, setNeedle] = useState("");

  const deferredNeedle = useDeferredValue(needle);

  const usersMemoized = useMemo(() => {
    const filteredUsers = FakeUsers.filter(({ fullName }) =>
      deferredNeedle
        ? fullName.toLowerCase().includes(deferredNeedle.toLowerCase())
        : true
    );

    return filteredUsers;
  }, [deferredNeedle]);

  const changeHandler = (event) => {
    event.preventDefault();

    const {
      target: { value },
    } = event;

    setNeedle(value);
  };

  return (
    <>
      <input onChange={changeHandler} />
      {Array.isArray(usersMemoized) &&
        usersMemoized.map(({ id, fullName }, index) => (
          <div key={`${id}-${index}`}>{fullName}</div>
        ))}
    </>
  );
};

export default UserList;
