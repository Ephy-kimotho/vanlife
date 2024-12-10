import income from "../assets/income.png"

function Income() {
  return (
    <section className="pb-10">
      <div className="px-4 sm:px-8 text-night font-inter">
        <header className="space-y-4">
          <h2 className="font-bold text-2xl sm:text-3xl">Income</h2>
          <p className="font-bold text-gray-200">
            last 
            <span className="underline underline-offset-4 font-normal">
              &nbsp;30 days
            </span>
          </p>
          <p className="font-bold text-2xl sm:text-3xl">$2,260</p>
        </header>

        <img src={income} className="sm:h-64 my-4" alt="a graph showing income per month" />

        <section className="mt-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg sm:text-xl">
              Your transactions(3)
            </h3>
            <p className="text-base sm:textxl text-gray-200">
              last
              <span className="underline underline-offset-4 font-bold">
                &nbsp;30 days
              </span>
            </p>
          </div>

          <ul className="list-none flex flex-col gap-4">
            <li className="bg-white flex justify-between items-center p-5 rounded">
              <span className="font-bold text-night text-xl">$720</span>
              <span className="text-gray-200">1/12/22</span>
            </li>
            <li className="bg-white flex justify-between items-center p-5 rounded">
              <span className="font-bold text-night text-xl">$560</span>
              <span className="text-gray-200">10/11/12</span>
            </li>
            <li className="bg-white flex justify-between items-center p-5 rounded">
              <span className="font-bold text-night text-xl">$980</span>
              <span className="text-gray-200">23/11/22</span>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Income;
