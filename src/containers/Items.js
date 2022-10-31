import { useSelector } from "react-redux";
import Items from "../components/Items"

export default (props) => {

       const items = useSelector(state => state.items); 
       // useselector es un hook que trae la data del state de redux 
       //mismo que mapdispatch to props y selecciona el estado especifico

        return (
            <Items {...props} items={items}/>
        );
}

