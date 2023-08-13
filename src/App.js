import {useState, useEffect, Suspense} from 'react'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';
import { createResource as fetchData } from './helper';

function App() {
  let [message, setMessage] = useState('Seach for music')
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState(null)
  //const API_URL = 'https://itunes.apple.com/search?term='

  //UseEffect
 useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
}, [searchTerm])

//Handle Search
  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term)
  }

  //Render Gallery
  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />}>
                <Gallery data={data} />
            </Suspense>
        )
    }
}


  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch}/>
      {message}
      {renderGallery()}
    </div>
  );
}
export default App;
