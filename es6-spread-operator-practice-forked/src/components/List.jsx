import React from "react";

function List(props){
   props.items.map( item => {
     return <div>
     <ul>
       <li>item</li>
     </ul>
   </div>
   })

}

export default List;