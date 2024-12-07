"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="hero-section relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            quality={100}
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-90"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white/90 leading-relaxed">
            Track films you’ve watched.
            <br />
            Save those you want to see.
            <br />
            <span className="text-white">Tell your friends what’s good.</span>
          </h1>
          {/* Redirect Button */}
          <Link href="/signup" passHref>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">
              Get started — it’s free!
            </button>
          </Link>
          <p className="text-sm mt-4 opacity-70">
            The social network for film lovers. Also available on
            <span className="mx-1">🍎</span> and <span>🤖</span>.
          </p>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="px-10 py-16 bg-gray-900">
        {/* Movie List Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Popular Movies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{ id: 1, title: "Inception", src: "/images/inception.jpg" },
              { id: 2, title: "Interstellar", src: "/images/interstellar.jpg" },
              { id: 3, title: "The Dark Knight", src: "/images/dark-knight.jpg" },
              { id: 4, title: "Avatar", src: "/images/avatar.jpg" }].map((movie) => (
              <div
                key={movie.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={movie.src}
                  alt={movie.title}
                  width={400}
                  height={600}
                  className="transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Welcome to our community of film lovers!
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Here’s what people are saying about their favorite movies.
          </p>
          <div className="space-y-12">
            {[
              {
                id: 1,
                name: "Kats",
                image: "/images/somebro.png",
                movie: "Arrival",
                year: "2024",
                moviePoster: "/images/arrival.jpg",
                rating: "★★★★★",
                review:
                  "The way the entire theater moaned every single time Jonathan Bailey was on screen should be studied.",
                likes: "20,036 likes",
              },
              {
                id: 2,
                name: "Jane Smith",
                image: "/images/somebro2.jpg",
                movie: "Inception",
                year: "2010",
                moviePoster: "/images/inception.jpg",
                rating: "★★★★☆",
                review:
                  "Nolan’s masterpiece takes you on a dream within a dream journey like no other.",
                likes: "8,422 likes",
              },
              {
                id: 3,
                name: "Alex Carter",
                image: "/images/somebro3.jpg",
                movie: "The Dark Knight",
                year: "2008",
                moviePoster: "/images/dark-knight.jpg",
                rating: "★★★★★",
                review: "Heath Ledger’s Joker remains unmatched in this thrilling masterpiece.",
                likes: "15,743 likes",
              },
              {
                id: 4,
                name: "Emma Wilson",
                image: "/images/somebro4.jpg",
                movie: "Interstellar",
                year: "2014",
                moviePoster: "/images/interstellar.jpg",
                rating: "★★★★☆",
                review: "A visually stunning exploration of space and time, guided by Hans Zimmer’s score.",
                likes: "12,539 likes",
              },
              {
                id: 5,
                name: "Liam Parker",
                image: "/images/somebro5.jpg",
                movie: "Avatar",
                year: "2009",
                moviePoster: "/images/avatar.jpg",
                rating: "★★★★★",
                review: "James Cameron’s groundbreaking visuals bring Pandora to life like never before.",
                likes: "18,201 likes",
              },
            ].map((review) => (
              <div
                key={review.id}
                className="flex flex-col md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0"
              >
                {/* Left Section */}
                <div className="flex items-start space-x-6">
                  {/* Reviewer Image */}
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  {/* Review Content */}
                  <div>
                    <p className="text-white font-semibold">
                      {review.movie}{" "}
                      <span className="text-gray-400">({review.year})</span>
                    </p>
                    <p className="text-white font-semibold mt-1">{review.name}</p>
                    <p className="text-yellow-400 mt-1">{review.rating}</p>
                    <p className="text-gray-300 mt-3">{review.review}</p>
                    <p className="text-gray-500 text-sm mt-2">{review.likes}</p>
                  </div>
                </div>

                {/* Right Section: Movie Poster */}
                <div className="mt-4 md:mt-0">
                  <Image
                    src={review.moviePoster}
                    alt={`${review.movie} Poster`}
                    width={100}
                    height={150}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
