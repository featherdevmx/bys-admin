import React from 'react';
import { ButtonProps } from './types';
import { ButtonSuccess } from './Button.styled';

export const Button = ({ title, action }: ButtonProps) => <ButtonSuccess onClick={action}>{title}</ButtonSuccess>;
