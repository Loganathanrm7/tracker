import SideBar from "../../../components/cards/SideBar";
export default function StudentEdit() {
  return (
    <>
      <div className="dashboard flex m-10 border-2 border-teal-900 min-h-screen ">
        <div>
          <SideBar />
        </div>
        <div className="container">
          <form>
            <div className="flex flex-col my-4">
              <label for="firstname" className="my-2">
                Name
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="studentName"
                name="firstname"
                placeholder="Enter student name"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="selectedcourse" className="my-2">
                Course Name
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="selectedCourse"
                name="selectedcourse"
                placeholder="Enter selected course name"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="studentdegree" className="my-2">
                Degree
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="studentDegree"
                name="studentdegree"
                placeholder="Enter  student degree"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="phonenumber" className="my-2">
                PhoneNumber
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="tel"
                id="phoneNumber"
                name="phonenumber"
                placeholder="Enter student phonenumber"
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
