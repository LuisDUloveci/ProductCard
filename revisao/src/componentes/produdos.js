import React from 'react'
import '../produtos.css'

const  ProfileImage = ({ titulo,Imagem, alt, preco, descricao }) => {
    return(
        <div className='card'>
            <h2 className='titulo'>{titulo}</h2>
            <img src={Imagem} alt={alt} className='imagem'/>
            <h3 className='descricao'>{descricao}</h3>
            <h2 className='preco'>{preco}</h2>
        </div>
    )
}

export default  ProfileImage