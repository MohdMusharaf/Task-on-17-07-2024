import React, { useState } from 'react';

function GoogleSearch(){
    
    const [searchNameGoogle,setSearchNameGoogle] = useState("")


    const googleSearchList=  [
        {
          uniqueNoSearch: 1,
          nameSearch: 'Java',
          imageSearch:'https://vectorified.com/images/select-arrow-icon-15.png'
          
        },
        {
            uniqueNoSearch: 2,
            nameSearch: 'Java Script',
            imageSearch:'https://vectorified.com/images/select-arrow-icon-15.png'
            
          },
          {
            uniqueNoSearch: 3,
            nameSearch: 'Python',
            imageSearch:'https://vectorified.com/images/select-arrow-icon-15.png'
            
          },
          {
            uniqueNoSearch: 4,
            nameSearch: 'Sql',
            imageSearch:'https://vectorified.com/images/select-arrow-icon-15.png'
            
          },
          {
            uniqueNoSearch: 5,
            nameSearch: 'Sql Mongo',
            imageSearch:'https://vectorified.com/images/select-arrow-icon-15.png'
            
          },
        
        ]
        const onChangeSearchInput1 = event => {
           
            setSearchNameGoogle(event.target.value)
      
     }

     const filteredList = googleSearchList.filter(search =>
        search.nameSearch.toLowerCase().includes(searchNameGoogle.toLowerCase())
    );
        
        // const onClickArrow = (uniqueNoSearch) => {
        //     if( search.uniqueNoSearch === uniqueNoSearch){
        //         setSearchNameGoogle(search.nameSearch)
        //     }
        // };

        const onClickArrow = (uniqueNoSearch) => {
            const selectedItem = googleSearchList.find(search => search.uniqueNoSearch === uniqueNoSearch);
            if (selectedItem) {
                setSearchNameGoogle(selectedItem.nameSearch);
            }
        };
        

return(
    

    
    <div className='googleSearch'>  
    <img src='https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' className='googleLogo'/>
    <div>
        
        <input type='search' className='googleSearchBar' value = {searchNameGoogle} onChange={onChangeSearchInput1}/>
            
        <ul >
        {filteredList.map(search =>(
        <div className='unorderSearch' key={search.uniqueNoSearch}>
        <li className='nameSearch'>{search.nameSearch}</li>
        <img src={search.imageSearch} onClick={() => onClickArrow(search.uniqueNoSearch)} className='arrowSearch'/>
        </div>
        
        ))}
       </ul>

         {/* <div className='unorderSearch'>  
        <li className='nameSearch'>mushu sir helo mornng</li>
        <img src='https://vectorified.com/images/select-arrow-icon-15.png' className='arrowSearch'/>
        </div>
        <div className='unorderSearch'>
        <li className='nameSearch'>mushu</li>
        <img src='https://vectorified.com/images/select-arrow-icon-15.png' className='arrowSearch'/>
        </div>  */}
        
        
        


    </div>
      
      
    </div>
)
}

export default GoogleSearch;