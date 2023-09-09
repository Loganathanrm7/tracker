export default function SideBar(){
    return(
        <>
        
      <div className="m-10 border-2 border-teal-700  min-h-screen min-w-fit p-6 bg-teal-100  ">
        <span className="flex items-center p-2 text-lg ">
          <input
            type="radio"
            id="course-details"
            name="adminuse"
            value="coursedata"
          ></input>
          <label for="coursedata" className="pl-2">
            Courses
          </label>
        </span>
        <span className="flex items-center p-2 text-lg">
          <input
            type="radio"
            id="student-details"
            name="adminuse"
            value="studentdata"
          ></input>
          <label for="studentdata" className="pl-2">
            Students
          </label>
        </span>
        <span className="flex items-center p-2 text-lg">
          <input
            type="radio"
            id="staff-details"
            name="adminuse"
            value="staffdata"
          ></input>
          <label for="staffdata" className="pl-2">
            Staff
          </label>
        </span>
      </div>
    
        </>
    )
}
