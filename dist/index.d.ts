import React, { ReactNode, HTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface AccordianProps {
    children: ReactNode;
    value?: number[];
    onChange?: (selected: number[]) => void;
    className?: string;
}
interface AccordianItemProps extends HTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    value: number;
    trigger: string;
    className?: string;
}

declare const Accordian: React.FC<AccordianProps>;
declare const AccordianItem: React.FC<AccordianItemProps>;

declare const TodoList: () => react_jsx_runtime.JSX.Element;

export { Accordian, AccordianItem, type AccordianItemProps, type AccordianProps, TodoList };
