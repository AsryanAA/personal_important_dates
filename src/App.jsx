import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
    const [currentTime, setCurrentTime] = useState(new Date)

    const datingDay = new Date('01.25.2023 12:30:00')
    const weddingDay = new Date('10.07.2023 18:00:00')
    const birthDay = new Date('12.02.2023 12:00:00')

    const [datingDayString, setDatingDayString] = useState('')
    const [weddingDayString, setWeddingDayString] = useState('')
    const [birthDayString, setBirthDayString] = useState('')    

    const updateDatingDate = () => {
        setDatingDayString(timeSince(datingDay))
    }

    const updateWeddingDate = () => {
        setWeddingDayString(timeSince(weddingDay))
    }

    const updateBirthDate = () => {
        setBirthDayString(timeSince(birthDay))
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

    function timeSince(start) {
        const now = new Date();

        if (isNaN(start)) return "Некорректная дата";

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();
        let hours = now.getHours() - start.getHours();
        let minutes = now.getMinutes() - start.getMinutes();
        let seconds = now.getSeconds() - start.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }

        if (minutes < 0) {
            minutes += 60;
            hours--;
        }

        if (hours < 0) {
            hours += 24;
            days--;
        }

        if (days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }

        if (months < 0) {
            months += 12;
            years--;
        }

        const plural = (n, forms) => {
            n = Math.abs(n) % 100;
            const n1 = n % 10;
            if (n > 10 && n < 20) return forms[2];
            if (n1 > 1 && n1 < 5) return forms[1];
            if (n1 === 1) return forms[0];
            return forms[2];
        };

        const parts = [
            `${years} ${plural(years, ["год", "года", "лет"])}`,
            `${months} ${plural(months, ["месяц", "месяца", "месяцев"])}`,
            `${days} ${plural(days, ["день", "дня", "дней"])}`,
            `${hours} ${plural(hours, ["час", "часа", "часов"])}`,
            `${minutes} ${plural(minutes, ["минута", "минуты", "минут"])}`,
            `${seconds} ${plural(seconds, ["секунда", "секунды", "секунд"])}`,
        ];

        return parts.join(", ");
    }

    return <>
        <div className='container'>
            <div className='main_photo'></div>
            <div className='dates'>
                <div className='dating_day'>
                    <p>Мы познакомились <span>{ datingDay.toLocaleString() }</span></p>
                    <p>Нашим отношениям уже</p>
                    <h4>{ datingDayString }</h4>
                </div>
                <div className='wedding_day'>
                    <p>Мы поженились <span>{ weddingDay.toLocaleString() }</span></p>
                    <p>Нашей семье уже</p>
                    <h4>{ weddingDayString }</h4>
                </div>
                <div className='baby_time'>
                    <p>Мы создали жизнь <span>{ birthDay.toLocaleString() }</span></p>
                    <p>Малышу уже</p>
                    <h4>{ birthDayString }</h4>
                </div>
                <div className='current_time'>
                    <span>{ currentTime.toLocaleString() }</span>
                    <span className='copy'>Created by Asryan AA 2023 &copy;</span>
                </div>
            </div>
        </div>
    </>
}

export default App