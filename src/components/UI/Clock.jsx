import React, { useEffect, useState } from "react";
import '../../styles/clock.css'

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minites, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("jun 10, 2023").getTime()
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(different % (1000 * 60 * 60)/ (1000 * 60 *60));
      const minites = Math.floor(different % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minites);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown()
  });

  return (
    <div className='clock_wrapper d-flex align-items-center gap-5'>

      <div className='clock_data d-flex align-items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white fs-3'>{days}</h1>
          <h5 className='text-white fs-6'>Days</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>

      <div className='clock_data d-flex align-items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white fs-3'>{hours}</h1>
          <h5 className='text-white fs-6'>Hours</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>

      <div className='clock_data d-flex align-items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white fs-3'>{minites}</h1>
          <h5 className='text-white fs-6'>Minutes</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>

      <div className='clock_data d-flex align-items-center gap-5'>
        <div className='text-center'>
          <h1 className='text-white fs-3'>{seconds}</h1>
          <h5 className='text-white fs-6'>Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
