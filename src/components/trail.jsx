function Trail(){
    let food=['dal','sabji','potato','tomato','fingerlady','pumpkin','speenech'];
    return <>
    <h1>Healthy Food</h1>
    <ul class="list-group">
      {food.map((item,index)=>(
        <li key={index} class="list-group-item" >{item}</li>
      ))}
  </ul>
    </>
}//this code is not rendrin this is only for understanding of map function