
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import styles from './styles.module.css'
import { Button } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

const RouletteComponent = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const data = [
        { option: 'Ramon' },
        { option: 'Lucas' },
        { option: 'Wellington' },
        { option: 'Raphael' },
        { option: 'Pedro' },
        { option: 'Livia' },
        { option: 'Adriana' },
        { option: 'Ian' },
    ]


    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)

    }
    return (
        <div className={styles.roulette}>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={['red', 'green', 'blue', 'pink']}
                textColors={['#ffffff']}
                onStopSpinning={() => {
                    setMustSpin(false);
                    alert(prizeNumber)
                }}

            />
            <div className={styles.spin}>
                <Button sx={{ borderRadius: '50%', height: '67px' }} variant='contained' onClick={handleSpinClick}><CachedIcon /></Button>
            </div>
        </div>
    )
}

export default RouletteComponent