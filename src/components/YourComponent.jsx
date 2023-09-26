import React, { useState } from 'react';
import Dummydb from './dummydb';

function YourComponent() {
  const [data, setData] = useState({
    userName: "",
    country: "",
    email: "",
    tryCountry: ""
  });

  const handleData = (e) => {
    const enteredUserName = e.target.value;
    const foundUser = Dummydb.find((user) => user.name === enteredUserName);

    if (foundUser) {
      setData({
        ...data,
        [e.target.name]: foundUser[e.target.name]
      });
    } else {
      setData({
        ...data,
        [e.target.name]: ""
      });
    }
  };

  return (
    <>
      <h2>User Information</h2>
      <form className="user-information">
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          name="userName"
          placeholder="Full Name"
          value={data.userName}
          onChange={handleData}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={data.country}
          onChange={handleData}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleData}
        />

        <label htmlFor="tryCountry">tryCountry</label>
        <input
          type="text"
          name="tryCountry"
          placeholder="TryCountry"
          value={data.tryCountry}
          onChange={handleData}
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default YourComponent;