import { useForm } from 'react-hook-form';

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
      };
    
      return (
        <div className="w-full h-screen text-white p-3 flex justify-center items-center pb-48 bg-black">
          <div className="flex flex-wrap max-w-7xl flex-col space-y-5 justify-center items-center border border-slate-600 p-3 mt-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 p-2"
            >
              <h1 className="flex justify-center items-center text-3xl">Login To Your Account</h1>
              <div>
                <label className="block">Username / Email:</label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="p-2 border rounded-md w-full"
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
    
              <div>
                <label className="block">Password:</label>
                <input
                  type="password"
                  placeholder="*********"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="p-2 border rounded-md w-full"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
    
              <button
                type="submit"
                className="w-full sm:py-3 py-2 bg-purple-500 hover:bg-purple-700 text-lg"
              >
                Login
              </button>
    
              <p className="text-center text-sm">
                Don&apos;t have an account? <a href="/signup" className="text-blue-400">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      );
}

export default LoginPage