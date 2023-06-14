const Login = ({ onLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="form auth__form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          required
        />

        <input
          type="password"
          minLength="8"
          name="password"
          placeholder="Пароль"
          autoComplete="password"
          value={values.password}
          onChange={onChange}
          required
        />

        <button type="submit">Войти</button>
        <span className="auth__login-hint"></span>
      </form>
    </div>
  );
};

export default Login;
