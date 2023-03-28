import React, {useState} from "react";

function ListingCard({ listing, onDel }) {
  const [isFavorited, setIsFavorited] =useState(false)
  function handleFavorite() {
    setIsFavorited(!isFavorited)
  }

  function handleClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    onDel(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
