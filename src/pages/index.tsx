import React, { useState } from 'react';
import { TableClientes } from '../components/TableClientes';
import { ClienteModal } from '../components/ClienteModal';

export default function Home() {
   const [isEditClienteModalOpen, setIsEditClienteModalOpen] = useState(false);

    function handleOpenClienteModal(){
        setIsEditClienteModalOpen(true);

    }

    function handleCloseClienteModal(){
        setIsEditClienteModalOpen(false);  
    }
 


  return (
    <>
     <TableClientes onOpenClienteModal={handleOpenClienteModal} />
     <ClienteModal isOpen={isEditClienteModalOpen} onRequestClose={handleCloseClienteModal} /> 
    </>
  )
}
