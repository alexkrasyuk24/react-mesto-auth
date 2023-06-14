const AuthForm = ({ title, buttonText, onSubmit }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="form auth__form" onSubmit={onSubmit} noValidate>
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

        <button type="submit">{buttonText}</button>
        <span className="auth__login-hint"></span>
      </form>
    </div>
  );
};
