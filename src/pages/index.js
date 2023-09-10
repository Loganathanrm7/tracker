import Button from "@/components/Button";
import { TbChristmasTree } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="container flex justify-center min-h-screen items-center">
        <div className="w-1/3 ">
          <h1 className="text-teal-800 w-full text-center">Login360 Tracker</h1>
          <div>
            <form>
              <div className="flex flex-col my-4">
                <label for="username" className="my-2">
                  Employee ID
                </label>
                <input
                  className="border border-teal-800 px-2 py-1 rounded-md"
                  type="text"
                  id="userName"
                  name="username"
                  placeholder="Enter your username"
                ></input>
              </div>
              <div className="flex flex-col my-4">
                <label for="Password" className="my-2">
                  Password
                </label>
                <input
                  className="border border-teal-800 px-2 py-1 rounded-md"
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                ></input>
              </div>
            </form>
            <div className="my-3">
              <a href="#" className="underline underline-offset-4">
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <button className="my-4 py-2 min-w-full border-2 bg-teal-800 text-white rounded-md ">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      

<p>
  Plant trees <TbChristmasTree />
</p>
    </>
  );
}
