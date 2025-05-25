import "../style/account-and-settings.css";

const Account = () => {
    return (
      <div className="content">
        <h2>Account Info</h2>
        <div className="flex row">
          <p className="label">Name</p>
          <p className="data">Name</p>
        </div>
        <div className="flex row">
          <p className="label">Username</p>
          <p className="data">username</p>
        </div>
        <div className="flex row">
          <p className="label">Phone Number</p>
          <p className="data">+1 (000) 000 - 0000</p>
        </div>
        <div className="flex row">
          <p className="label">Email</p>
          <p className="data">example@email.com</p>
        </div>
        <div className="flex row">
          <p className="label">Password</p>
          <p className="data">****************</p>
        </div>
        <h2>Social Media Links</h2>
        <div className="flex row">
          <p className="label">Facebook</p>
          <p className="data">Name</p>
        </div>
        <div className="flex row">
          <p className="label">Twitter</p>
          <p className="data">@twitter-username</p>
        </div>
        <div className="flex row">
          <p className="label">Instagram</p>
          <p className="data">@instagram-username</p>
        </div>
        <div className="flex row">
          <p className="label">Tiktok</p>
          <p className="data">@tiktok-username</p>
        </div>
        <div className="flex row">
          <p className="label">Tumblr</p>
          <p className="data">@tumblr-username</p>
        </div>
      </div>
    )
}

export default Account;
