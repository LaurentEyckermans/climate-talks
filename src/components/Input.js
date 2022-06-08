import React from 'react'
import styled from 'styled-components'
import './input.css'

export default function Input({ title, placeholder, widthBar }) {
    return (
        <Container>
             <div className="label-float"  style={{ width: widthBar }}>
            <input placeholder={title}></input>
            <label>{placeholder}</label>
             </div>
        </Container>

    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 200px;
    `