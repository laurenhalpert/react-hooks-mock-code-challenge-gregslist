import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDel }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(listing=>{
          return <ListingCard key={listing.id} listing={listing} onDel={onDel}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
