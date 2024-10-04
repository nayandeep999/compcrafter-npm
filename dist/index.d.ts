import React$1, { ReactNode, HTMLAttributes, ChangeEvent } from 'react';
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

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

declare function Modal({ open, onClose, children }: ModalProps): react_jsx_runtime.JSX.Element;

interface PlanSelectorContextType {
    value: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
interface PlanSelectorGroupProps {
    value: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    children: ReactNode;
}
interface PlanSelectorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    value: string | number;
}
interface PlanProps {
    icon: ReactNode;
    title: string;
    features: string[];
    price: number;
}

declare function PlanSelectorGroup({ value, onChange, children, }: PlanSelectorGroupProps): react_jsx_runtime.JSX.Element;
declare function PlanSelector({ children, ...props }: PlanSelectorProps): react_jsx_runtime.JSX.Element;
declare function Plan({ icon, title, features, price }: PlanProps): react_jsx_runtime.JSX.Element;

interface SidebarContextType {
    expanded: boolean;
}
interface SidebarProps {
    children: ReactNode;
}
interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
}

declare function Sidebar({ children }: SidebarProps): react_jsx_runtime.JSX.Element;
declare function SidebarItem({ icon, text, active, alert, }: SidebarItemProps): react_jsx_runtime.JSX.Element;

export { Accordian, AccordianItem, type AccordianItemProps, type AccordianProps, Carousel, type CarouselProps, Modal, type ModalProps, Plan, type PlanProps, PlanSelector, type PlanSelectorContextType, PlanSelectorGroup, type PlanSelectorGroupProps, type PlanSelectorProps, Sidebar, type SidebarContextType, SidebarItem, type SidebarItemProps, type SidebarProps, TodoList };
