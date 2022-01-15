import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { hourSelector, minuteState } from '../../Atom/TimeAtom';

interface Props {

}

const Main = (props: Props) => {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);

    const onChangeMinutes = (e: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+e.currentTarget.value);
    }

    const onChangeHours = (e: React.FormEvent<HTMLInputElement>) => {
        setHours(+e.currentTarget.value);
    }

    return (
        <div>
            <input type="number" onChange={onChangeMinutes} value={minutes} placeholder="minutes" />
            <br />
            <input type="number" onChange={onChangeHours} value={hours} placeholder="hours" />
        </div>
    )
}

export default Main
