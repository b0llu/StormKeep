import "./Header.css";

export const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <h1 className="name">
          <i className="fas fa-bolt"></i> StormKeep
        </h1>
        <input
          className="header-input"
          placeholder="Search"
          // value={searchTerm}
          type="text"
        />
        <div className="margin-left-auto">
          <div className="icon-container">
            {/* <p>{user}</p> */}
            <div className="badge">
              <i className="fa-solid fas fa-user"></i>
            </div>
            <div onClick={() => signout()} className="badge">
              <i className="fas fa-sign-out"></i>
            </div>
            <i id="toggle-theme" className="fas fa-moon icon"></i>
          </div>
        </div>
        <input className="mobile-input" type="text" placeholder="Search" />
      </div>
    </nav>
  );
};
