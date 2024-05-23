import React, { useState } from 'react';
import { useThrottleFn } from 'ahooks';
import throttle from 'lodash/throttle'

const delay = 2000

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setValue1(val => val + 1);
    },
    { wait: delay },
  );
  const [value1, setValue1] = useState(0);
  const { run: run1 } = throttle(
    () => {
      setValue1(val => val + 1);
    },
    delay,
    // { leading: true, trailing: false }, //默认
  );
  const [value2, setValue2] = useState(0);
  const { run: run2 } = throttle(
    () => {
      setValue2(val => val + 1);
    },
    delay,
    { leading: false, trailing: true },
  );
  const [value3, setValue3] = useState(0);
  const { run: run3 } = throttle(
    () => {
      setValue3(val => val + 1);
    },
    delay,
    { leading: true, trailing: true },
  );
  const [value4, setValue4] = useState(0);
  const { run: run4 } = throttle(
    () => {
      setValue4(val => val + 1);
    },
    delay,
    { leading: false, trailing: false },
  );

  return (
    <>
      <div>
        <p> useThrottleFn </p>
        <p style={{ marginTop: 16 }}> Clicked count1: {value} </p>
        <button type="button" onClick={run}>
          Click fast!
        </button>
      </div>
      <div>
        <p> lodash.throttle leading=true，trailing=false 【默认值】</p>
        <p style={{ marginTop: 16 }}> Clicked count1: {value1} </p>
        <button type="button" onClick={run1}>
          Click fast!
        </button>
      </div>
      <div>
        <p> lodash.throttle leading=false，trailing=true </p>
        <p style={{ marginTop: 16 }}> Clicked count2: {value2} </p>
        <button type="button" onClick={run2}>
          Click fast!
        </button>
      </div>
      <div>
        <p> lodash.throttle leading=true，trailing=true </p>
        <p style={{ marginTop: 16 }}> Clicked count3: {value3} </p>
        <button type="button" onClick={run3}>
          Click fast!
        </button>
      </div>
      <div>
        <p> lodash.throttle leading=false，trailing=false </p>
        <p style={{ marginTop: 16 }}> Clicked count3: {value4} </p>
        <button type="button" onClick={run4}>
          Click fast!
        </button>
      </div>
    </>
  );
};