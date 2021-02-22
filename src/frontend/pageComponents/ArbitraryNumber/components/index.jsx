import React from 'react'
import styles from '../styles/index.scss'
import Number from '../../Number/components'
import { useInput } from '../../../library/hooks/Input'
import { useArrayConvertion } from '../../../library/hooks/Number'
import Input from '../../Input/components'
import NumberList from '../../NumberList/components'

const ArbitraryNumber = ({ mod, title, legend }) => {

    const [inputControl, resetInput] = useInput("", "Please write your number...")
    const [inputControlHeigth, resetInputHeigth] = useInput("", "Please the height...")
    const [inputControlWidth, resetInputWidth] = useInput("", "Please the width...")
    const [data] = useArrayConvertion(inputControl.value, [], inputControlHeigth.value, inputControlWidth.value)

    return (
        <main className={styles.Main}>
            <div className={styles.Exercise1Container}>
                <Input min={0} inputControl={inputControl} resetInput={resetInput} />
                {mod && <Input min={1} inputControl={inputControlHeigth} resetInput={resetInputHeigth} />}
                {mod && <Input min={1} inputControl={inputControlWidth} resetInput={resetInputWidth} />}
                <NumberList>
                    {
                        data.numbersConsole.map((item) => {


                            console.log(item);
                            return (
                                <div className={styles.NumberContainer}>
                                    {
                                        item.map(element => {
                                            return (
                                                <div>{element.map(char => char)}</div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </NumberList>
                {!mod &&
                    <NumberList>
                        {
                            data.numbers.map(item => {
                                return <Number nameNumber={item} />
                            })
                        }
                    </NumberList>}
            </div>
            <div className={styles.ArbitLabel}>
                <h1>{title}</h1>

                <h3>
                    {legend}
                </h3>
            </div>
        </main>
    )
}

export default ArbitraryNumber
