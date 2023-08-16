"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import SearchManufacture from './SearchManufacture'
import SearchButton from './SearchButton'
import Image from 'next/image'
const SearchBar = () => {
  const[manuFacture,setManuFature]=useState("")
  const[model,setModel] = useState("")
  const router = useRouter()
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manuFacture === "" && model === "") {
      return alert("Please fill in the search bar")
    }else{
      updateSearchParams(model.toLowerCase(),manuFacture.toLowerCase())
    }
  }

  const updateSearchParams = (model:string , manuFacture:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set("model",model)
    }else{
      searchParams.delete("model")
    }

    if(manuFacture){
      searchParams.set("manufacturer",manuFacture)
    }else{
      searchParams.delete("manufacturer")
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName)
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture manuFacture={manuFacture} setManuFature={setManuFature}/>
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt='car modal'/>
        <input type="text" name="model" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="Tiguan" className='searchbar__input'/>
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar