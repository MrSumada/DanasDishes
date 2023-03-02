import Name from '../components/Name';
import Cards from '../components/Cards'
import Bio from '../components/Bio';


const Recipe = ({ recipe, Tab, setTab }) => {

    return (
        <div>
            <Name recipe={recipe}></Name>
            <Cards recipe={recipe} Tab={Tab} setTab={setTab}></Cards>
            <Bio></Bio>
        </div>
    )
}

export default Recipe;