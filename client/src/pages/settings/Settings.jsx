import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./settings.css";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <>
      <div className="setting-section">
        <div className="setting-page-title">account setting</div>
        <div className="setting-container">
          <div className="setting">
            <div className="user-profile-image-container">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt="profile"
                className="user-profile-image"
              />
              <label className="insert-button" htmlFor="profileInput">
                Upload picture
              </label>
              <input
                type="file"
                id="profileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <form className="profile-form" onSubmit={handleSubmit} id="form2">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <label>About yourself</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your briefly description..."
              ></textarea> */}
            </form>
            <div className="update-button-section">
              <button type="submit" className="btn btn-secondary" form="form2">
                Update
              </button>
              {success && (
                <span style={{ color: "green", fontSize: "12px" }}>
                  Profile has been updated...
                </span>
              )}
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}
