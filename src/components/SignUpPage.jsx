import { useForm } from 'react-hook-form';

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Send the data to your backend for signup
  };

  return (
    <div className="w-full h-screen text-white p-3 flex justify-center items-center pb-48 bg-black">
      <div className="flex flex-wrap max-w-7xl flex-col space-y-5 justify-center items-center border border-slate-600 p-3 mt-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-2">
          <h1 className="flex justify-center items-center text-3xl">Create Your Account</h1>
          
          <div>
            <label className="block">Full Name:</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullname", {
                required: "Full Name is required",
              })}
              className="p-2 border rounded-md w-full"
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname.message}</p>
            )}
          </div>

          <div>
            <label className="block">Username:</label>
            <input
              type="text"
              placeholder="username"
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
            <label className="block">Email:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Please enter a valid email",
                },
              })}
              className="p-2 border rounded-md w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block">Password:</label>
            <input
              type="password"
              placeholder="*********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
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
            Sign Up
          </button>

          <p className="text-center text-sm">
            Already have an account? <a href="/login" className="text-blue-400">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;

