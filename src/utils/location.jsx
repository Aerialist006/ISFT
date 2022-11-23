import { useLocation } from "react-router-dom";
const CurrLoc= ()=> {
    const {pathname} = useLocation()
    if (pathname.length===1 && pathname[0]==='/'){
        return "Inicio"
    }
    else {
        return pathname.slice(1);
    }
}
export default CurrLoc;