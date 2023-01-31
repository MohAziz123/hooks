import { Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';


const FilterMovie=({setTitre,setEtoile,titre,etoile})=>{
    const handleRest=({setEtoile,setTitre,titre,etoile})=>{
        setEtoile(0)
        setTitre('')
    }
    return(
        <div>
            <input value={titre} onChange={(e)=>setTitre(e.target.value)} type='text'></input>
            <Rating value={etoile} onChange={(e)=>setEtoile(e.target.value)} name="simple-controlled"/>
            <button onClick={handleRest}>Rest</button>
        </div>
    )
}
export default FilterMovie