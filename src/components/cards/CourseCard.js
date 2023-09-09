export default function CourseCard(props) {
  return (
    <>
      <div className="flex flex-wrap m-1 p-4 border-2 rounded-md bg-slate-800 text-white  items-center min-h-fit ">
        <span className="m-1 p-1 flex  min-w-full  bg-teal-800 text-white border-2 rounded-md items-center justify-center">
          <button>{props.course}</button>
        </span>
        <div className="flex justify-center items-center">
          <span className="m-2 p-1  border-2 bg-teal-700 text-white rounded-md">
            <button className="min-w-fit">{props.edit}</button>
          </span>
          <span className="m-2 p-1  border-2 bg-teal-700 text-white rounded-md">
            <button className="min-w-fit">{props.delete}</button>
          </span>
        </div>
      </div>
    </>
  );
}
