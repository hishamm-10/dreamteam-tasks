"use client"; 

import Link from "next/link";

const featuredMembers = [
  {
    id: "1",
    name: "Sam Rosenberg",
    stats: "2.6K films • 1.8K reviews",
    image: "/images/somebro.png",
    films: ["/images/avatar.jpg", "/images/killers.jpg", "/images/arrival.jpg"],
  },
  {
    id: "2",
    name: "Maya Cade",
    stats: "295 films • 103 reviews",
    image: "/images/somebro2.jpg",
    films: ["/images/avatar.jpg", "/images/killers.jpg", "/images/arrival.jpg"],
  },
  {
    id: "3",
    name: "Cristiano",
    stats: "1.2K films • 523 reviews",
    image: "/images/somebro3.jpg",
    films: ["/images/avatar.jpg", "/images/killers.jpg", "/images/arrival.jpg"],
  },
  {
    id: "4",
    name: "Joseph Mathew",
    stats: "11.2K films • 5223 reviews",
    image: "/images/somebro4.jpg",
    films: ["/images/avatar.jpg", "/images/killers.jpg", "/images/arrival.jpg"],
  },
  {
    id: "5",
    name: "Kylian Mbappe",
    stats: "11.2K films • 5223 reviews",
    image: "/images/somebro5.jpg",
    films: ["/images/avatar.jpg", "/images/killers.jpg", "/images/arrival.jpg"],
  },
  
];

const reviewers = [
  {
    id: "1",
    name: "Emily Clark",
    reviews: 220,
    likes: 450,
    rating: 4.8,
  },
  {
    id: "2",
    name: "James Doe",
    reviews: 180,
    likes: 320,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Sophia Brown",
    reviews: 300,
    likes: 980,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Michael Green",
    reviews: 150,
    likes: 220,
    rating: 4.3,
  },
];

export default function Members() {
  return (
    <div style={{ backgroundColor: "#222", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Film lovers, critics, and friends — find popular members.
      </h1>

      {/* Featured Members Section */}
      <section>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          Featured Members
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {featuredMembers.map((member) => (
            <Link key={member.id} href={`/members/${member.id}`} passHref>
              <div
                style={{
                  textAlign: "center",
                  width: "150px",
                  border: "1px solid #444",
                  padding: "15px",
                  borderRadius: "10px",
                  backgroundColor: "#333",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#bbb" }}>{member.stats}</p>
                <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                  {member.films.map((film, idx) => (
                    <img
                      key={idx}
                      src={film}
                      alt={`Film ${idx + 1}`}
                      style={{
                        width: "40px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviewers Section */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          Top Reviewers
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#444", color: "#fff" }}>
              <th style={{ padding: "10px" }}>Name</th>
              <th>Reviews</th>
              <th>Likes</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {reviewers.map((reviewer) => (
              <tr key={reviewer.id} style={{ borderBottom: "1px solid #444" }}>
                <td style={{ padding: "10px" }}>{reviewer.name}</td>
                <td>{reviewer.reviews}</td>
                <td>{reviewer.likes}</td>
                <td>⭐ {reviewer.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
