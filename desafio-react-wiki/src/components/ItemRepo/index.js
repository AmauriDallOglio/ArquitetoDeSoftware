import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo}) {
  return (
    <ItemContainer>
        <h3>Amauri</h3>
        <p>dio/amauri</p>
        <a href="#" >Ver repositório</a> <br/>
        <a href="#" className="remover">Remover</a>
        <hr/>
    </ItemContainer>
  )
}


export default ItemRepo;

//rfc