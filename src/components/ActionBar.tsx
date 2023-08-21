export default function ActionBar() {
  return (
    <div className="flex h-24 justify-center flex-col gap-5 rounded-2xl bg-white">
      <div className="flex justify-center items-center rounded-full p-4 gap-4">
        <div className="h-[72px] w-[260px] rounded-full p-3 gap-6 bg-neutral-100"></div>
        {/* <div className="h-16 w-10 self-stretch border-t-0 border-neutral-300"></div> */}
        <div className="inline-block h-full min-h-[1em] w-px mx-5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
        <div className="h-[72px] w-[260px] rounded-full p-3 gap-6 bg-neutral-100"></div>
        <button className="h-16 w-[160px] rounded-full py-3 px-6 gap-2 ml-auto bg-green-900 text-white font-poppins font-medium">
          Search
        </button>
      </div>
    </div>
  );
}
