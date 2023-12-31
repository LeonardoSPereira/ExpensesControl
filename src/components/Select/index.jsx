import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import "./styles.css"

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

// eslint-disable-next-line react/prop-types
export const SelectHome = ({value}) => (
    <Select.Root onValueChange={value}>
      <Select.Trigger className="SelectTrigger" aria-label="Filtro dos gastos">
        <Select.Value placeholder="Selecione" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">

          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <SelectItem value={null}>Todos</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">Categoria</Select.Label>
              <SelectItem value="Aluguel">Aluguel</SelectItem>
              <SelectItem value="Alimentação">Alimentação</SelectItem>
              <SelectItem value="Roupas">Roupas</SelectItem>
              <SelectItem value="Streaming">Streaming</SelectItem>
              <SelectItem value="Extras">Extras</SelectItem>
            </Select.Group>

            <Select.Separator className="SelectSeparator" />

            <Select.Group>
              <Select.Label className="SelectLabel">Preço</Select.Label>
              <SelectItem value="menormaior">Do menor para o maior</SelectItem>
              <SelectItem value="maiormenor">Do maior para o maior</SelectItem>
            </Select.Group>

          </Select.Viewport>

          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>

        </Select.Content>
      </Select.Portal>
    </Select.Root>
);

export const SelectDescription = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Categoria do gasto">
      <Select.Value placeholder="Selecione" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">

        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        <Select.Viewport className="SelectViewport">

          <Select.Group>
            <Select.Label className="SelectLabel">Categoria</Select.Label>
            <SelectItem value="casa">Aluguel</SelectItem>
            <SelectItem value="alimento">Alimentação</SelectItem>
            <SelectItem value="roupa">Roupas</SelectItem>
            <SelectItem value="streaming">Streaming</SelectItem>
            <SelectItem value="extra">Extras</SelectItem>
          </Select.Group>

        </Select.Viewport>

        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>

      </Select.Content>
    </Select.Portal>
  </Select.Root>
);


