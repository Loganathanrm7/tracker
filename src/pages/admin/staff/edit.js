import AdminSideBar from "@/components/AdminSideBar";

export default function StaffEdit() {
  return (
    <div className="dashboard flex  relative">
      <AdminSideBar />
      <div className="container">
        <h1 className="text-teal-800 w-full ">Edit Staff </h1>
        <form>
          <div className="flex flex-col my-4">
            <label for="staffname" className="my-2">
              Name
            </label>
            <input
              className="border border-teal-800 px-2 py-1 rounded-md"
              type="text"
              id="staffName"
              name="staffname"
              placeholder="Give a staffname"
            ></input>
          </div>
        </form>
        <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
          Update
        </button>
      </div>
    </div>
  );
}
