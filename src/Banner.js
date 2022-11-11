import React, {useState} from 'react';

function Banner() {
  const [movie,setMovie] = useState([]);


//   useEffect is a special method which runs on a special condition

  useEffect(() => {
   async function fetchData(){

   }
   fetchData();
  }, []);


  return (
    <header>
        {/* background image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
    </header>
  )
}

export default Banner;
