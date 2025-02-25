import React from "react";

export default function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="textarea" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select an option</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="AUS">AUS</option>
            <option value="CA">CA</option>
            <option value="PAK">PAK</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
