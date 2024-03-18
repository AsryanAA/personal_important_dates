import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
    const [currentTime, setCurrentTime] = useState(new Date)
    const [datingDay, setDatingDay] = useState(new Date('01.25.2023 12:30:00'))
    const [weddingDay, setWeddingDay] = useState(new Date('10.07.2023 18:00:00'))
    const [birthDay, setBirthDay] = useState(new Date('12.02.2023 12:00:00'))

    const [datingDayString, setDatingDayString] = useState('')
    const [weddingDayString, setWeddingDayString] = useState('')
    const [birthDayString, setBirthDayString] = useState('')    

    const updateDatingDate = () => {
        const diff = new Date - datingDay
        setDatingDayString(
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12) + ' year ' +
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30 % 12) + ' month ' +
            Math.floor(diff / 1000 / 60 / 60 / 24 - 365) + ' days ' +
            Math.floor(diff / 1000 / 60 / 60 % 24) + ' hours ' +
            Math.round(diff / 1000 / 60 % 60) + ' minutes ' +
            // Math.round(diff / 1000 % 60) + ' seconds ' +
            ''
        )
    }

    const updateWeddingDate = () => {
        const diff = new Date - weddingDay
        setWeddingDayString(
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12) + ' year ' +
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30 % 12) + ' month ' +
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30) + ' days ' +
            Math.floor(diff / 1000 / 60 / 60 % 24) + ' hours ' +
            Math.round(diff / 1000 / 60 % 60) + ' minutes ' +
            // Math.round(diff / 1000 % 60) + ' seconds ' +
            ''
        )
    }

    const updateBirthDate = () => {
        const diff = new Date - birthDay
        setBirthDayString(
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12) + ' year ' +
            Math.floor(diff / 1000 / 60 / 60 / 24 / 30 % 12) + ' month ' +
            Math.floor(diff / 1000 / 60 / 60 / 24 - 365) + ' days ' +
            Math.floor(diff / 1000 / 60 / 60 % 24) + ' hours ' +
            // Math.round(diff / 1000 / 60 % 60) + ' minutes ' +
            // Math.round(diff / 1000 % 60) + ' seconds ' +
            ''
        )
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date)
            updateDatingDate()
            updateWeddingDate()
            updateBirthDate()
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return <>
        <div className='container'>
            <div className='main_photo'></div>
            <div className='dates'>
                <div className='dating_day'>
                    <p>Мы познакомились <span>{datingDay.toLocaleString()}</span></p>
                    <p>Нашим отношениям уже</p>
                    <h4>{datingDayString}</h4>
                </div>
                <div className='wedding_day'>
                    <p>Мы поженились <span>{weddingDay.toLocaleString()}</span></p>
                    <p>Нашей семье уже</p>
                    <h4>{weddingDayString}</h4>
                </div>
                <div className='baby_time'>
                    <p>Мы создали жизнь <span>{birthDay.toLocaleString()}</span></p>
                    <p>Малышу уже</p>
                    <h4>{birthDayString}</h4>
                </div>
                <div className='current_time'>
                    <span>{currentTime.toLocaleString()}</span>
                    <span className='copy'>Created by Asryan AA 2023 &copy;</span>
                </div>
            </div>
        </div>
    </>
}

export default App