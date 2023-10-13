import user from "../assets/images/user.jpg";
const Profile = () => {
  const changePlaceholder = (e) => {
    const placeholder = document.querySelector("#img");
    placeholder.src = URL.createObjectURL(e.target.files[0]);
  };
  return (
    <div className="profile">
      <div className="profile-pic text-center ">
        <div className="img">
          <img src={user} className="img-fluid" alt="" id="img" />
        </div>
        <input type="file" hidden id="pic" onChange={changePlaceholder} />
        <label className="mt-4 img-lbl" htmlFor="pic">
          Change Image
        </label>
      </div>
      <div className="info">
        <div className="name info-box">
          <label htmlFor="">Name :</label>
          <input type="text" placeholder="your name" />
          <button>Update</button>
        </div>
        <div className="email info-box">
          <label htmlFor="">Email :</label>

          <input type="email" placeholder="xxxxx@xxx.com" />
          <button>Update</button>
        </div>
        <div className="password info-box">
          <label htmlFor="">Password :</label>
          <input type="password" placeholder="old password" />
          <input type="password" placeholder="new password" className="mt-2" />
          <button>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
