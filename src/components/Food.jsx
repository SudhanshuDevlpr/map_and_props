import List from "./list";
function Food({vegitables}){
    return <>
    <ul class="list-group">
    {vegitables.map((item)=>(
        <List list={item}></List>
      ))}
 
    </ul>
    </>
}
export default Food;