import Image from 'next/image'
import React from 'react'
interface SearchButtonProp{
    otherClasses:string
}
const SearchButton = ({otherClasses}:SearchButtonProp) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt='search-img' width={40} height={40} className="object-contain"/>
    </button>
  )
}

export default SearchButton