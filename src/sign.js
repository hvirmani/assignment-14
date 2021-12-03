const SignIn = () => {
  return (
    <form className="container">
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

const SignUp = () => {
  return (
    <form className="container">
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export { SignIn, SignUp };
