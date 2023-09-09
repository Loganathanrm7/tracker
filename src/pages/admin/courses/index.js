import SideBar from "@/components/SideBar";

export default function CourseEdit() {
  return (
    <>
      <div className="dashboard flex m-10 border-2 border-teal-900 min-h-screen ">
        <div>
          <SideBar />
        </div>
        <div className="container">
          <form>
            <div className="flex flex-col my-4">
              <label for="coursename" className="my-2">
                Course Name
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="courseName"
                name="coursename"
                placeholder="Give a course name"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="batch" className="my-2">
                Batch
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="batchNumber"
                name="batch"
                placeholder="Give  a batchnumber"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="time" className="my-2">
                Time
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="batchTime"
                name="time"
                placeholder="Enter  schedule time"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="staffname" className="my-2">
                Staff Name
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="staffName"
                name="staffname"
                placeholder="Enter batch staffname"
              ></input>
            </div>
          </form>
          <button className="m-4 p-2  border-2 bg-teal-800 text-white rounded-md ">
            Add
          </button>
        </div>
      </div>
    </>
  );
}
