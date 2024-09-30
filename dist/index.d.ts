import React$1, { ReactNode, HTMLAttributes } from 'react';
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

declare const Accordian: React$1.FC<AccordianProps>;
declare const AccordianItem: React$1.FC<AccordianItemProps>;

declare const TodoList: () => react_jsx_runtime.JSX.Element;

interface CarouselProps {
    children: React.ReactNode;
    size: string;
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

declare function Carousel({ children, size, autoSlide, autoSlideInterval, }: CarouselProps): react_jsx_runtime.JSX.Element;

export { Accordian, AccordianItem, type AccordianItemProps, type AccordianProps, Carousel, type CarouselProps, TodoList };
