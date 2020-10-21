import React from 'react'

function Filmcards (props) {
    return (
        
<div class="card" >
  <div class="card-body">
    <h5 class="card-title">{props.oneFilm.title}</h5>
    <p class="card-text">{props.oneFilm.description}</p>

  </div>
</div>
    )
}

export default Filmcards



