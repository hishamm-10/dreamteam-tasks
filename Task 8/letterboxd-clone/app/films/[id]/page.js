"use client";  // This marks the component as a Client Component

import React from 'react'; // Import React for useState and useEffect

const films = [
  { id: 1, title: "Inception", poster: "/images/inception.jpg", description: "A mind-bending thriller about dreams.", reviews: [
    { user: "John Doe", rating: 5, comment: "Incredible plot twists!" },
    { user: "Jane Smith", rating: 4, comment: "A must-see for fans of psychological thrillers." }
  ]},
  { id: 2, title: "Interstellar", poster: "/images/interstellar.jpg", description: "A space exploration adventure with a twist.", reviews: [
    { user: "Alice Brown", rating: 5, comment: "Visually stunning." },
    { user: "Bob White", rating: 4, comment: "A truly emotional journey." }
  ]},
  { id: 3, title: "The Dark Knight", poster: "/images/dark-knight.jpg", description: "Batman faces his greatest adversary, the Joker.", reviews: [
    { user: "Michael Green", rating: 5, comment: "Heath Ledger's Joker is legendary." },
    { user: "Sara Blue", rating: 5, comment: "A perfect balance of action and drama." }
  ]},
  { id: 4, title: "Avatar", poster: "/images/avatar.jpg", description: "Humans discover the planet Pandora and its inhabitants.", reviews: [
    { user: "Tom Red", rating: 5, comment: "A visual masterpiece." },
    { user: "Clara White", rating: 4, comment: "Great world-building, though the plot is predictable." }
  ]},
  { id: 5, title: "Titanic", poster: "/images/titanic.jpg", description: "A love story set aboard the ill-fated RMS Titanic.", reviews: [
    { user: "Emily Green", rating: 5, comment: "A timeless love story." },
    { user: "John Smith", rating: 4, comment: "Beautiful but sad." }
  ]},
  { id: 6, title: "The Matrix", poster: "/images/matrix.jpg", description: "A computer hacker learns the truth about his reality.", reviews: [
    { user: "Mark Gray", rating: 5, comment: "A mind-blowing movie." },
    { user: "Sophia Black", rating: 4, comment: "A bit confusing at first, but worth it." }
  ]},
  { id: 7, title: "The Lion King", poster: "/images/lion-king.jpg", description: "A young lion must reclaim his kingdom.", reviews: [
    { user: "Lucas Brown", rating: 5, comment: "A childhood classic!" },
    { user: "Anna Lee", rating: 5, comment: "The soundtrack is iconic." }
  ]},
  { id: 8, title: "Gladiator", poster: "/images/gladiator.jpg", description: "A betrayed Roman general seeks revenge.", reviews: [
    { user: "Liam King", rating: 5, comment: "A powerful performance by Russell Crowe." },
    { user: "Olivia Ray", rating: 4, comment: "Epic battle scenes, but slow in some parts." }
  ]},
  { id: 9, title: "Forrest Gump", poster: "/images/forrest-gump.jpg", description: "A simple man influences major events in history.", reviews: [
    { user: "Jake Wilson", rating: 5, comment: "A heartwarming story." },
    { user: "Mia Turner", rating: 5, comment: "One of the best films of all time." }
  ]},
  { id: 10, title: "Avengers", poster: "/images/avengers.jpg", description: "Superheroes unite to save the world from an alien invasion.", reviews: [
    { user: "Chris Johnson", rating: 5, comment: "The ultimate superhero crossover." },
    { user: "Katie Evans", rating: 4, comment: "A fun, action-packed film." }
  ]},
  { id: 11, title: "GoodFellas", poster: "/images/goodfellas.jpg", description: "The rise and fall of a mobster.", reviews: [
    { user: "Tommy Black", rating: 5, comment: "A masterpiece of American cinema." },
    { user: "Nancy Red", rating: 4, comment: "An intense and thrilling experience." }
  ]},
  { id: 12, title: "Killers of the Flower Moon", poster: "/images/killers.jpg", description: "A dark chapter in American history involving the Osage murders.", reviews: [
    { user: "Sarah White", rating: 5, comment: "Scorsese at his best." },
    { user: "David Brown", rating: 4, comment: "A gripping, emotional story." }
  ]},
  { id: 13, title: "Arrival", poster: "/images/arrival.jpg", description: "A linguist tries to communicate with alien visitors.", reviews: [
    { user: "Elena Green", rating: 5, comment: "A thought-provoking film." },
    { user: "Ryan Blue", rating: 4, comment: "Unique and visually stunning." }
  ]},
  { id: 14, title: "The Godfather", poster: "/images/godfather.jpg", description: "A powerful mafia family struggles to maintain control.", reviews: [
    { user: "Mike Red", rating: 5, comment: "The greatest film of all time." },
    { user: "Julia Brown", rating: 5, comment: "A cinematic classic." }
  ]},
  { id: 15, title: "Fight Club", poster: "/images/fight-club.jpg", description: "An insomniac office worker forms an underground fight club.", reviews: [
    { user: "Sean White", rating: 5, comment: "A mind-bending film with deep themes." },
    { user: "Grace Gray", rating: 4, comment: "Intense and thought-provoking." }
  ]},
];

export default function FilmDetailPage({ params }) {
  // Unwrap the params using React.use()
  const { id } = React.use(params); // Get the dynamic id from the URL
  const film = films.find((f) => f.id === parseInt(id)); // Find the film with the matching id

  if (!film) {
    return <div>Film not found</div>;
  }

  // Helper function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-400">★</span>
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <span key={`half-${index}`} className="text-yellow-400">☆</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-400">☆</span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{film.title}</h1>

        {/* Film Poster with fixed size, ensuring the full image is visible */}
        <div className="relative mb-4">
          <img
            src={film.poster}
            alt={film.title}
            className="w-full h-[500px] object-contain mb-4 rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-400 mb-8">{film.description}</p>

        {/* Reviews Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Reviews</h2>
          {film.reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-white">{review.user}</h3>
                {renderStars(review.rating)}
              </div>
              <p className="text-sm text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
