import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import { closeEditModal } from '../actions/modal.actions';
import useEntryDetails from '../hooks/useEntryDetails';
import EntryForm from './EntryForm'

function ModalEdit({ isOpen, 
    description, 
    value, 
    isExpense, 
    id
   }) {

    const dispatch = useDispatch (); 
    const entryUpdate = useEntryDetails(description, value, isExpense, id)
  return (
    <Modal open={isOpen}>
        <Modal.Header>Edit entry</Modal.Header>
        <Modal.Content>
            <EntryForm
                 description={entryUpdate.description}
                 value={entryUpdate.value}
                 isexpense={entryUpdate.isExpense}
                 setValue={entryUpdate.setValue}
                 setDescription={entryUpdate.setDescription}
                 setIsExpense={entryUpdate.setIsExpense}/>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
            <Button onClick={() => entryUpdate.updateEntry(id)} primary>Ok
            </Button>
          
        </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
