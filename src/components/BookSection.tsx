import bookCover from "../images/book_cover.jpeg";
import { Link } from "react-router-dom";

const BookSection = () => {
  return (
    <section
      id="book"
      className="py-20 bg-gradient-to-br from-pink-50 to-rose-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Book Image */}
        <div className="flex justify-center">
          <img
            src={bookCover}
            alt="Blooming Together Book Cover"
            className="rounded-2xl shadow-lg w-72 sm:w-80 lg:w-96 object-cover"
          />
        </div>

        {/* Book Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Blooming <span className="text-rose-500">Together</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 italic">
            Lessons Through the Year — by Ife Oluwatosin
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This book is a collection of lessons drawn from real-life
            experiences, biblical wisdom, and heartfelt reflections. It walks
            you through the seasons of marriage and relationships, teaching
            about resilience in trials, faith as the foundation, the joy of
            giving. Each lesson is a reminder that thriving love is built
            through grace, patience, and God’s design.
          </p>
          <Link
            to="/blooming-together"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            className="inline-block px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            Get the Book
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
