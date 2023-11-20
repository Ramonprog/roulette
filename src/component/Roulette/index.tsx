
import { useState, useContext, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import styles from './styles.module.css'
import { Button } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { ParticipantsContext } from '../../context/ParticipantsContext';

const RouletteComponent = () => {
    const { participants } = useContext(ParticipantsContext);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [dataRoulette, setDataRoulette] = useState([])

    useEffect(() => {
        const data = participants.map((item: string) => ({
            option: item
        }))
        setDataRoulette(data)
        console.log(data)
    }, [participants])


    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * dataRoulette.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)

    }
    return (
        <div className={styles.roulette}>
            {dataRoulette.length > 0 && (
                <>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={dataRoulette}
                        backgroundColors={['red', 'green', 'blue', 'pink']}
                        textColors={['#ffffff']}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            alert(dataRoulette[prizeNumber].option)
                        }}

                    />
                    <div className={styles.spin}>
                        <Button sx={{ borderRadius: '50%', height: '67px' }} variant='contained' onClick={handleSpinClick}><CachedIcon /></Button>
                    </div>
                </>

            )}
        </div>
    )
}

export default RouletteComponent