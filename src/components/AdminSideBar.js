import Link from "next/link";

export default function AdminSideBar() {
  return (
    <div className="subcontainer  fixed h-full flex flex-col justify-between bg-teal-400  ">
      <div className="flex flex-col">
        <div className="mb-8">
          <h3 className="mb-2">Login360 Tracker</h3>
          <p>Admin Panel</p>
        </div>
        <Link href="/admin" className="font-bold text-2xl mb-2">
          Home
        </Link>
        <div className="flex flex-col my-4">
          <Link href="/admin/courses" className="font-bold text-2xl mb-2">
            Courses
          </Link>
          <Link href="/admin/courses/add">Add Course</Link>
          <Link href="/admin/courses/edit">Edit Course</Link>
        </div>
        <div className="flex flex-col ">
          <Link href="/admin/students" className="font-bold text-2xl mb-2">
            Students
          </Link>
          <Link href="/admin/students/add">Add Student</Link>
          <Link href="/admin/students/edit">Edit Student</Link>
        </div>
        <div className="flex flex-col  my-4 ">
          <Link href="/admin/staff" className="font-bold text-2xl mb-2">
            Staff
          </Link>
          <Link href="/admin/staff/add">Add Staff</Link>
          <Link href="/admin/staff/edit">Edit Staff</Link>
        </div>
      </div>
      <div>
        <Link href="/staff">Login to Staff</Link>
      </div>
    </div>
  );
}
