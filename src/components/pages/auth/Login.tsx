import { useForm } from "react-hook-form";
import { AuthTypes } from "../../types/AuthTypes";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit
  } = useForm();
  const submitFn = (data: AuthTypes) => {
    console.log(data);
    reset();
  };
  return (
    <section className="w-screen h-screen bg-gray-200 grid place-items-center">
      <div className="w-1/3 h-[20rem]  shadow-xl p-5 bg-white rounded-md">
        <h1 className="m-3 text-[2rem] font-normal leading-[1.75rem] text-gray-500 text-center">
          Login
        </h1>
        <div className="w-full max-h-48 mx-auto flex flex-col bg-white items-center justify-center">
          <form
            onSubmit={handleSubmit(submitFn as any)}
            className="w-5/6 relative top-5 "
          >
            <div className="flex flex-col  h-20">
              <input
                type="text"
                {...register("username")}
                className="h-12 p-3 bg-gray-200 focus:outline-none rounded-md text-gray-600"
                placeholder="Enter Username"
              />
            </div>
            <div className="flex flex-col  h-20">
              <input
                type="password"
                {...register("password")}
                className="h-12 p-3 bg-gray-200 focus:outline-none rounded-md "
                placeholder="Enter Password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-24 rounded h-10 flex items-center justify-center shadow-md text-white bg-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
