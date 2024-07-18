import React, { useState } from 'react';

function DestinationSearch(){
    
    const [serachName,setSearchName] = useState("")


    const initialUserDetailsList = [
        {
          uniqueNo: 1,
          imageUrl: 'https://www.china-silkroad-travel.com/uploads/allimg/1812/1-1Q206110154.jpg',
          name: 'Melaka Mosque',
          
        },
        {
            uniqueNo: 2,
            imageUrl: '	https://i.pinimg.com/originals/93/18/cb/9318cbb6668133d598bd04998aa4b3fc.jpg',
            name: 'Shrubland',
            
          },
          {
            uniqueNo: 3,
            imageUrl: '	https://rare-gallery.com/uploads/posts/1246865-manhattan-skyline-new-york-panorama.jpg',
            name: 'New York',
            
          },
          {
            uniqueNo: 4,
            imageUrl: 'https://cdn.audleytravel.com/4214/3003/79/1327349-gods-window-south-africa.jpg',
            name: 'Escarpment',
            
          },
          {
            uniqueNo: 5,
            imageUrl: '	https://i.pinimg.com/originals/f1/ea/94/f1ea948473dd2c8cedc43ff5b7242fd5.jpg',
            name: 'Westminster Abbey',
            
          },
          {
            uniqueNo: 6,
            imageUrl: '	https://tse3.mm.bing.net/th?id=OIP.BGT3vjHJy4CBJQRxJ93sgAEsCo&pid=Api&P=0&h=180',
            name: 'South National Park',
            
          },
        ]

        const filteredList = initialUserDetailsList.filter(user =>
            user.name.toLowerCase().includes(serachName.toLowerCase())
        );

       const onChangeSearchInput = event => {
           
                 setSearchName(event.target.value)
           
          }
        

return(
    
    <div className='linear'>  
    <p> 2</p>
      <p id='para' className='textRabdom'> Destination Search  </p>
      <input type='search' className='inputSearch' id='input' onChange={onChangeSearchInput} /><br/><br/><br/>
       
      <div className='flexDisplay'>
        {filteredList.map(user =>(
            <div className='innerDiv'>
            <img src={user.imageUrl} className='imageSearch' />
            <p className='fontDestina'>{user.name}</p>
        </div>
        ))}
        
      </div>
      
      
    </div>
)
}

export default DestinationSearch;