import { useState, useEffect } from "react";

function UserInformation({ data, handleData }) {
  const userName = data.info[0].text;
  const country = data.info[1].text;
  const email = data.info[2].text;
  const tryCountry = data.info[3].text;

  return (
    <>
      <div className="user-information">
        <h2>User Information</h2>
        <form className="user-info">
          <label htmlFor="name">Name</label>

          <input
            className="user-input"
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={handleData}
          />

          <label htmlFor="country">Country</label>
          <input
            className="user-input"
            type="text"
            placeholder="Country"
            value={country}
            onChange={handleData}
          />

          <label htmlFor="email">Email</label>
          <input
            className="user-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleData}
          />
        </form>
      </div>
    </>
  );
}

export default UserInformation;
