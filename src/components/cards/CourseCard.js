export default function CourseCard(props) {
  return (
    <>
      <div className="p-4 flex flex-col justify-between rounded-md bg-teal-800 shadow-md hover:shadow-xl text-white h-48 cursor-pointer ">
        <span className=" ">
          <p className="text-2xl mb-2 ">{props.coursename}</p>
          <p className="">{props.batchtime}</p>
        </span>
        <span className="flex justify-between">
          <button className="w-fit text-base underline underline-offset-4">
            Edit
          </button>
          <button className="w-fit text-base underline underline-offset-4">
            Delete
          </button>
        </span>
      </div>
    </>
  );
}
