import React from 'react'
import s from './Message.module.css'

export type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt='ava' className={s.ava}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>


            </div>


        </div>
    )
}

export default Message
