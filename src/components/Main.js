import React, { useEffect, useState } from "react";
import { store } from "../store/store";
import { observersUtil } from "../store/ObserversUtil";

const Main = () => {
  const [value, setValue] = useState(store.boolean);
  const [count, setCount] = useState(store.count);

  useEffect(() => {
    const subscriptions = initSubscriptionStore();
    return () => {
      observersUtil.unsubscribe(subscriptions);
    };
  }, []);

  function initSubscriptionStore() {
    return [
      store.booleanSubject.subscribe((value) => {
        setValue(value);
      }),
      // oservable Subject bắt đầu subscibe
      // bắt buộc subcribe để xem sử thay đổi biến Subject
      // cấp giá trị của Subject() cho biến count
      store.countSubject.subscribe((count) => {
        setCount(count);
      }),
    ];
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Welcome to Rxjs</h1>
      {value === true ? <p>True</p> : <p>False</p>}
      <button onClick={() => store.setNewBoolean(!value)}>CHANGE</button>
      <p>{count}</p>
      <button onClick={() => store.setPlusCount(1)}>PLUS</button>
      <button onClick={() => store.setMinusCount(2)}>MINUS</button>
    </div>
  );
};

export default Main;
