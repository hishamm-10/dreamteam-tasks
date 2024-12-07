"use client"; // Ensures this is treated as a client-side component

import { usePathname } from "next/navigation"; 
import { useState, useEffect } from "react";


const memberDetails = {
  1: {
    name: "Sam Rosenberg",
    stats: "2.6K films • 1.8K reviews",
    bio: "An avid film lover with a passion for sci-fi and fantasy genres. Sam believes that movies are a window into endless possibilities.",
    image: "/images/somebro.png",
    reviews: [
      { title: "Avatar", rating: 4.5, review: "Visually stunning, a true spectacle!" },
      { title: "Inception", rating: 5, review: "A masterpiece of storytelling and visual effects." },
      { title: "The Dark Knight", rating: 5, review: "Simply iconic, Nolan at his best." },
    ],
  },
  2: {
    name: "Maya Cade",
    stats: "295 films • 103 reviews",
    bio: "Maya has a deep appreciation for indie films and documentaries. She’s a voice for unsung cinematic treasures.",
    image: "/images/somebro2.jpg",
    reviews: [
      { title: "Moonlight", rating: 5, review: "Poetic and profound storytelling." },
      { title: "Lady Bird", rating: 4, review: "Heartfelt and beautifully acted." },
      { title: "Parasite", rating: 5, review: "A social commentary masterpiece." },
    ],
  },
  3: {
    name: "Cristiano",
    stats: "7295 films • 1603 reviews",
    bio: "Maya has a deep appreciation for indie films and documentaries. She’s a voice for unsung cinematic treasures.",
    image: "/images/somebro3.jpg",
    reviews: [
      { title: "Moonlight", rating: 5, review: "Poetic and profound storytelling." },
      { title: "Lady Bird", rating: 4, review: "Heartfelt and beautifully acted." },
      { title: "Parasite", rating: 5, review: "A social commentary masterpiece." },
    ],
  },
  4: {
    name: "Joseph Mathew",
    stats: "8295 films • 1083 reviews",
    bio: "Maya has a deep appreciation for indie films and documentaries. She’s a voice for unsung cinematic treasures.",
    image: "/images/somebro4.jpg",
    reviews: [
      { title: "Moonlight", rating: 5, review: "Poetic and profound storytelling." },
      { title: "Lady Bird", rating: 4, review: "Heartfelt and beautifully acted." },
      { title: "Parasite", rating: 5, review: "A social commentary masterpiece." },
    ],
  },
  5: {
    name: "Kylian Mbappe",
    stats: "6295 films • 1033 reviews",
    bio: "Maya has a deep appreciation for indie films and documentaries. She’s a voice for unsung cinematic treasures.",
    image: "/images/somebro5.jpg",
    reviews: [
      { title: "Moonlight", rating: 5, review: "Poetic and profound storytelling." },
      { title: "Lady Bird", rating: 4, review: "Heartfelt and beautifully acted." },
      { title: "Parasite", rating: 5, review: "A social commentary masterpiece." },
    ],
  },
  
};

export default function MemberDetail() {
  const pathname = usePathname(); 
  const id = pathname.split("/").pop();
  const [member, setMember] = useState(null);

  useEffect(() => {
    if (id) {
      setMember(memberDetails[id]);
    }
  }, [id]);

  if (!member) {
    return <div>Loading...</div>; 
  }

  return (
    <div style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "20px" }}>
      {/* Member Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
          gap: "20px",
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div>
          <h1 style={{ margin: 0 }}>{member.name}</h1>
          <p style={{ color: "#bbb" }}>{member.stats}</p>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{member.bio}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <section>
        <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "10px" }}>
          Past Reviews & Ratings
        </h2>
        <div style={{ marginTop: "20px" }}>
          {member.reviews.map((review, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#2a2a2a",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              <h3 style={{ marginBottom: "5px" }}>{review.title}</h3>
              <p style={{ margin: "5px 0", fontSize: "14px", color: "#bbb" }}>
                Rating: <strong>{review.rating} / 5</strong>
              </p>
              <p style={{ fontSize: "14px" }}>{review.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "10px" }}>
          Fun Facts
        </h2>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#bbb" }}>
          <em>
            "{member.name} has a knack for finding hidden gems in cinema. They
            often recommend movies that become instant favorites."
          </em>
        </p>
      </section>
    </div>
  );
}
