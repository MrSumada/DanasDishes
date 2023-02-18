import Name from '../components/Name';
import Cards from '../components/Cards'
import Bio from '../components/Bio';


const Recipe = ({ recipe }) => {

    return (
        <div>
            <Name recipe={recipe}></Name>
            <Cards recipe={recipe}></Cards>
            <Bio></Bio>
        </div>
    )
}

export default Recipe;