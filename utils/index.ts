import { CarProps } from "@/types";
import { filterProps } from "@/types";


export async function fetchCars(filters : filterProps) {
  const {manufacturer,year,fuel,limit,model} = filters
  
    const headers = {
        'X-RapidAPI-Key': '8d8aad4ae7msh8c962441d3f6dc5p10eadajsn1de3d963cdce',
		    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}&feul_type=${fuel}&year=${year}`,{
        headers : headers
    });
    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car : CarProps , angle?:string) =>{
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

export const UpdateParams = (type:string , value:string) =>{
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type , value)

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}