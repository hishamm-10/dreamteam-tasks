import Link from "next/link";

const films = [
  { id: 1, title: "Inception", poster: "/images/inception.jpg" },
  { id: 2, title: "Interstellar", poster: "/images/interstellar.jpg" },
  { id: 3, title: "The Dark Knight", poster: "/images/dark-knight.jpg" },
  { id: 4, title: "Avatar", poster: "/images/avatar.jpg" },
  { id: 5, title: "Titanic", poster: "/images/titanic.jpg" },
  { id: 6, title: "The Matrix", poster: "/images/matrix.jpg" },
  { id: 7, title: "The Lion King", poster: "/images/lion-king.jpg" },
  { id: 8, title: "Gladiator", poster: "/images/gladiator.jpg" },
  { id: 9, title: "Forrest Gump", poster: "/images/forrest-gump.jpg" },
  { id: 10, title: "Avengers", poster: "/images/avengers.jpg" },
  { id: 11, title: "GoodFellas", poster: "/images/goodfellas.jpg" },
  { id: 12, title: "Killers of the Flower Moon", poster: "/images/killers.jpg" },
  { id: 13, title: "Arrival", poster: "/images/arrival.jpg" },
  { id: 14, title: "The Godfather", poster: "/images/godfather.jpg" },
  { id: 15, title: "Fight Club", poster: "/images/fight-club.jpg" },
];

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-10">
      <h1 className="text-center text-4xl font-bold mb-2">Films</h1>
      <p className="text-center text-lg text-gray-400 mb-8">
        Welcome to the world of films
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {films.map((film) => (
          <Link key={film.id} href={`/films/${film.id}`} className="group">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              {/* Poster Image */}
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-[450px] object-cover rounded-lg"
              />

              {/* Hover Effect */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h2 className="text-lg font-semibold text-white">{film.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


