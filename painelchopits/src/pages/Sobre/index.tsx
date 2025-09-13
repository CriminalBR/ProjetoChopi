import { useParams, Link } from "react-router-dom";

export const Sobre = () => {
    
    const { id } = useParams();

    return (
        <>
            
            <h1>Sobre selecionado: {id}</h1>

            <br />

           
            <Link to="/">Voltar para Home</Link>
        </>
    )
}