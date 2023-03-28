/*
App
|
|-Header
    |-Search

|
|-ListingsContainer
    |-ListingCard




*/
import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(listings=> setListings(listings))
  })

  function handleDelete(id) {
    setListings(listings.filter(listing=> listing.id !== id))
  }

  const displayedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} onDel={handleDelete}/>
    </div>
  );
}

export default App;
