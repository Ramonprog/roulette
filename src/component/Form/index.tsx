import styles from './styles.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormEvent, useContext, useState } from 'react';
import { ParticipantsContext } from '../../context/ParticipantsContext';
const FromComponent = () => {
    const { participants, setParticipants } = useContext(ParticipantsContext);
    const [newParticipant, setNewParticipant] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setParticipants([...participants, newParticipant])
        setNewParticipant('')
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.text}>Bw Experience</h2>
                <p className={styles.text}>Escolha o nome dos participantes</p>

                <TextField
                    id="outlined-basic"
                    label="Nome do participante"
                    variant="outlined"
                    sx={{ width: '100%', margin: '10px 0 10px 0' }}
                    value={newParticipant}
                    onChange={(e) => setNewParticipant(e.target.value)}
                />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' type='submit'>Adicionar Participante</Button>
                </div>
            </form>
        </div>
    )
}

export default FromComponent