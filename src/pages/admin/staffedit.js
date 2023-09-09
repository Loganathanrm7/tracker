import SideBar from "../../components/cards/SideBar";
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
                placeholder="Enter Staff name"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="designation" className="my-2">
                Designation
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="staffDesignation"
                name="designation"
                placeholder="Enter staff designation"
              ></input>
            </div>
            <div className="flex flex-col my-4">
              <label for="staffdegree" className="my-2">
                Degree
              </label>
              <input
                className="border border-teal-800 px-2 py-1 rounded-md"
                type="text"
                id="staffDegree"
                name="staffdegree"
                placeholder="Enter  staff degree"
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
                placeholder="Enter staff phonenumber"
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
