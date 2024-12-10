import Review from "../components/common/Review";
import star from "../assets/Star.png";
import review from "../assets/reviews.png";

function Reviews() {
  return (
    <section className="pb-10">
      <div className="font-inter  px-4 sm:px-8">
        <header className="flex items-center gap-4">
          <h2 className="font-bold text-2xl sm:text-3xl text-night">
            Your reviews
          </h2>
          <p className="text-gray-200 text-sm">
            last
            <span className="font-bold underline underline-offset-4">
              30 days
            </span>
          </p>
        </header>

        <div>
          <p className="flex gap-2 items-center mt-4">
            <span className="font-bold text-lg sm:text-2xl text-night">
              5.0
            </span>
            <img src={star} alt="a start" className="inline" />
            <span className="text-night text-base">overall rating</span>
          </p>
          <img src={review} className="sm:h-52 my-4" alt="a column bar graph showing review ratings" />
        </div>

        <div>
          <h3 className="font-bold text-night text-xl my-5">Reviews (2)</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Review
              name="Elliot"
              date="December 1, 2022"
              review="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
            />

            <Review
              name="Sandy"
              date="November 23, 2022"
              review="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
