import React from 'react'
import  LocationSearch  from '../InputSearch/LocationSearch'
import Map from '../Mapa/Map'
import Switch from '../Switch/Switch';

const SearchMap = () => {

    const [searchQuery,setSearchQuery] = React.useState<google.maps.places.PlaceResult | null >(null);
    const [currentValue, setCurrentValue] = React.useState<boolean>(false);
    const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
        setSearchQuery(place);
    }

    const handleToggle = (isOn:boolean) => {
        setCurrentValue(isOn);
    }

  return (
    <div className='flex flex-col gap-1'>
        <LocationSearch onPlaceSelect={handlePlaceSelect} otherStyles='border border-gray-300'/>
        <p>{searchQuery?.rating}</p>
        <Map searchQuery={searchQuery} height='60vh' width='100vh' />
        <p>Current value is {currentValue ? 'ON' :'OFF'}</p>
        <Switch initialOn={true} onToggle={handleToggle} />
    </div>
  )
}

export default SearchMap