
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-black fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto p-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Create</a>
        </li>
      </ul>
        <button className="btn btn-dark" type="submit">Login</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header