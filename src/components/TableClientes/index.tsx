import { useEffect, useState } from 'react';
import {api} from '../../services/api';
import styles from './table.module.scss';


interface TableProps {
    onOpenClienteModal : () => void;
}

export function TableClientes ({onOpenClienteModal} : TableProps){   
    
    const [clientes, setClientes] = useState([]); 

      
    useEffect(() => {
    api.get('/clientes')
        .then(result => {
          setClientes(result.data)
          console.log(result.data)
        }).catch(err => {
          console.log(err);
        })      
    }, []);
  

    return(
        <div className={styles.container}>
        <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Responsavel</th>
                <th>Expediente</th>
                <th>Telefones</th>
                <th>Sistema</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead> 
     
     <tbody>         
      {clientes.map(cliente => (
            <tr key={cliente.id_cliente}>
                <td>{cliente.nome}</td>
                <td>{cliente.responsavel}</td>
                <td>{cliente.expediente}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.sistema}</td>
                <td>{cliente.status === 'A' ? 'Ativo' : 'Bloqueado'}</td> 
                <td><button type="button">Editar</button><button type="button" onClick={onOpenClienteModal}>Visualizar</button></td>          
            </tr>   
        ))}
     </tbody>
     </table> 
     </div>
    );
}