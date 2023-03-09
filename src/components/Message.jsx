export function Message({ data }) {
  return (
    <>
      <div className="px-2 py-3">
        <div className="py-1 px-4  min-w-[100px] w-fit bg-white rounded-2xl shadow-lg ">
          <div className="text-l font-medium text-primary">You</div>
          <p className="text-slate-500 text-base">{data}</p>
        </div>
      </div>
    </>
  );
}
