import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalForDelate = ({onCancel, onDelate, modal}) => {

        return (
        <div>
            <Modal isOpen={modal}>
            <ModalHeader>Предупреждение</ModalHeader>
            <ModalBody>
                Вы точно хотите удалить сообщение?
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onDelate}>Да</Button>{' '}
                <Button color="secondary" onClick={onCancel}>Отмена</Button>
            </ModalFooter>
            </Modal>
        </div>
        )
    
}

export default ModalForDelate