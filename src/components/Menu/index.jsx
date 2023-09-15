import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FiEdit2, FiMenu, FiX } from 'react-icons/fi';
import './styles.css';

export const DropdownMenuExpense = () => {


  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <FiMenu />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
             <button className="RightSlot"> Editar <FiEdit2 /></button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
             <button className="RightSlot delete"> Excluir <FiX /> </button>
          </DropdownMenu.Item>
        

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

