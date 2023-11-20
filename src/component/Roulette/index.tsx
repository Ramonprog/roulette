
import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

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
        <div>
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
            <button onClick={handleSpinClick}>SPIN</button>
        </div>
    )
}

export default RouletteComponent