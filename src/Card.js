import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes} from '@fortawesome/free-solid-svg-icons';
function Card(props){
  return(

    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5 mb-5 ml-2 mr-2">
        
  <div className="card border">
  <div class="card-header">
  <p>{props.data.header}</p>
 <h2>$ {props.data.month}/ month</h2>
  </div>
  <div className="card-body">
  <ul class="list-group ">
{
  props.data.listitems.map((li)=>{
    //return<li className="li"><FontAwesomeIcon icon={faCheck}/> {li.list}</li> 
    //<FontAwesomeIcon icon={fa-xmark} />
    return li.enable !== false ? (<li className="li"><FontAwesomeIcon icon={faCheck}/> {li.list}</li>) :
    (<li className="li text-muted"><FontAwesomeIcon icon={faTimes}/> {li.list}</li>)
    
  })
}
</ul>
<button type="button" class="btn btn-primary mt-5 mb-5 ">Button</button>


   </div>
  </div>
  </div>

)
  
}
export default Card;