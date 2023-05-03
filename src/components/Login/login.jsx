import styles from "../../constants/style";
import hero from "../../assets/Home/hero3.jpeg";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { currentUserContext } from "../../NavbarComp/navRoutes";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [credentials, setcredentials] = useState(true);
  const { ISLoggedIn, setIsLoggedIn, setuserName } =
    useContext(currentUserContext);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    localStorage.setItem(
      "userData",
      '{"name":"Warriors","password":"Titans@300"}'
    );
  }, []);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    setRegister(!register);
    let userData;
    event.preventDefault();
    if (register) {
      userData = JSON.stringify(formData);
      localStorage.setItem("userData", userData);

      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      // submit the form data to your backend API
      const storedData = localStorage.getItem("userData");
      userData = JSON.parse(storedData);

      if (
        userData.name === formData.name &&
        userData.password === formData.password
      ) {
        setuserName(userData.name);
        setIsLoggedIn(true);
        localStorage.setItem("userName", userData.name);
        console.log("Login successful!");

        navigate("/Programms");
      } else {
        setRegister(false);
        setcredentials(false);
        console.log("Invalid credentials.");
      }
    }
  };
  return (
    <section className=" flex justify-center  relative h-screen text-white">
      <div className={`w-screen   relative  `}>
        <img
          src={hero}
          alt="image"
          className="hover:grayscale-0 cursor-pointer
            grayscale w-full overflow-y-hidden   "
        />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
        {/* <div className="hover:hidden absolute z-[110] w-[80%] h-[80%] rounded-full white__gradient bottom-40 left-0" /> */}
      </div>
      <section className="absolute w-3/4 sm:w-1/3  text-2xl sm:text-lg sm:h-full  sm:top-10 bottom-1/4">
        <div
          className={`mt-11 p-6 ${styles.paddingX} sm:h-2/4  rounded-xl border-2 border-lime-400 relative bg-transparent/60 text-white `}
        >
          <h2 className="text-black font-bold bg-lime-400 rounded-lg w-[30%] absolute -top-3 left-3 pl-4">
            {register ? "Register" : "Login"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mt-5 ">
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                className="w-full bg-transparent outline-none border-b-2 peer  border-lime-400"
                required
                autoComplete="off"
              />
              <label className="text-lime-500 absolute left-0 peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:text-lime-500/70 transition-all">
                {register ? "UserName" : "Name"}
              </label>
              <p className="text-red-500 capitalize text-sm hidden peer-focus:invalid:block">
                * please enter a valid name
              </p>
            </div>
            {register && (
              <div className="relative mt-5">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none peer focus border-b-2 border-lime-400 peer-focus:text-lime-500/70 "
                />
                <label className="absolute left-0 peer-focus:-translate-y-5 transition-all  peer-valid:-translate-y-5 text-lime-500">
                  Email
                </label>
              </div>
            )}
            <div className="relative mt-5 ">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                name="password"
                className="w-full bg-transparent outline-none border-b-2 peer  border-lime-400"
                required
              />
              <label className="absolute left-0 peer-focus:-translate-y-5 peer-valid:-translate-y-5 text-lime-500/70 transition-all">
                Password
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="text-slate-500 text-sm text-end"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
              <p className="text-red-500 capitalize text-sm hidden peer-focus:invalid:block">
                * please enter a valid password
              </p>
            </div>
            {register && (
              <button
                className="mt-2 text-lime-300 capitalize"
                onClick={() => setRegister(!register)}
              >
                click here to Login
              </button>
            )}
            {!register && (
              <button
                className="my-6 text-lime-300 capitalize"
                onClick={() => setRegister(!register)}
              >
                create your account
              </button>
            )}
            <div className="relative text-center ">
              {!credentials && !register && (
                <p className="text-red-500">* * Invalid credentiasla * *</p>
              )}
              <button
                type="submit "
                className="text-black bg-lime-300 p-3 rounded-xl font-bold hover:animate-pulse mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-xl font-bold">
          <p>Testing Purpose</p>
          <p className="text-lime-400">
            username :-Warriors <br /> password:- Titans@300
          </p>
        </div>
      </section>
    </section>
  );
};

export default Login;
