import "./NewUser.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewUser = ({ addUser }) => {
  const [user, setUser] = useState({
    id: uuidv4(),
    imageUrl: "",
    firstName: "",
    lastName: "",
    age: null,
    country: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image Url:</span>
              <input
                type="url"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, imageUrl: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>First Name: </span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Last Name: </span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                type="number"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, age: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Country:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, country: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                type="text"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
              />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="female"
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
