export const Navbar = ({ user = "Juan" }) => {
  return (
    <nav className="navbar navbar-dark bg-black px-3 shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
          <i className="fa-regular fa-calendar"></i>
          <span>{user}</span>
        </span>
        <button className="btn btn-outline-danger">salir</button>
      </div>
    </nav>
  );
};
