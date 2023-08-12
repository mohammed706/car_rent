"use client"
import React,{useState} from 'react'
import SearchManufacture from './SearchManufacture'

const SearchBar = () => {
  const[manuFacture,setManuFature]=useState('')
  const handleSearch = () => {
    console.log("Hello")
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture manuFacture={manuFacture} setManuFature={setManuFature}/>
      </div>
    </form>
  )
}

export default SearchBar