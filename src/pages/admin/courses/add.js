export default function CourseAdd() {
  return (
    <div className="dashboard flex  relative">
      <div className="subcontainer fixed h-full flex flex-col items-start border-2 border-teal-900 p-5  text-2xl text-teal-900">
        <button className="m-5">Courses</button>
        <button className="m-5">Students</button>
        <button className="m-5">Staff</button>
      </div>
      <div className="container">
        <h1 className="text-teal-800 w-full text-center">Add New Course</h1>
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
          ADD
        </button>
      </div>
    </div>
  );
}
