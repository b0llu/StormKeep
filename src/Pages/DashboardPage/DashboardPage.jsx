import "./DashboardPage.css";

export const DashboardPage = () => {
  return (
    <div className="showcase-container">
      <div className="dashboard">
        <h1 className="dashboard-header">Account</h1>
        <div className="dasboard-container">
          <div className="dashboard-sections">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="dashboard-section-details">
            <div className="profile-details">
              <h2>Profile Details</h2>
              <div className="txt-container">
                <div className="text-row">
                  <span>Name:</span>
                  <span>12313</span>
                </div>
                <div className="text-row">
                  <span>Email:</span>
                  <span>123123</span>
                </div>
              </div>

              <h2>Account Settings</h2>
              <button>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
