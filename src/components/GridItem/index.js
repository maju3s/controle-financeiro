import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? ( //aqui se for uma despesa ele vai  carregar com a cor vermelha e se for entrada ele vai carregar com verde
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>  
     
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)}  />
      </C.Td>
    </C.Tr>
  ) //aqui em cima ele pega e exclui o item do banco com o id ou pelo id;
};

export default GridItem;