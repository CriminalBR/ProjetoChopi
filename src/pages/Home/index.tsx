import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

   
    const [tarefa, setTarefa] = useState('');
    
    const [tarefas, setTarefas] = useState<string[]>([]);

   
    useEffect(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        if (tarefasSalvas) {
            setTarefas(JSON.parse(tarefasSalvas));
        }
    }, []);

    
    useEffect(() => {
        
        if (tarefas.length > 0) {
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        }
    }, [tarefas]);

    
    const handleAdicionarTarefa = useCallback(() => {
        if (tarefa.trim() !== '') { 
            setTarefas(tarefasAnteriores => [...tarefasAnteriores, tarefa]);
            setTarefa(''); 
        }
    }, [tarefa]); 

    return (
        <>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                  
                    <li><Link to="/sobre/10">Ir para exemplo sobre 10</Link></li>
                    <li><Link to="/sobre/50000">Ir para exemplo sobre 50000</Link></li>
                    <li>
                        <button onClick={() => navigate('/categorias/geral')}>
                            Navegar para Categorias
                        </button>
                    </li>
                </ul>
            </nav>

            <hr />

            <h2>Lista de Tarefas</h2>

           
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={tarefa}
                onChange={e => setTarefa(e.target.value)}
            />
            <button onClick={handleAdicionarTarefa}>Adicionar</button>

           
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};