import React, {FC} from 'react'
import Link from 'next/link';

import {MenuLinkProps} from './types';

export const MenuLink = ({id, path, title}:MenuLinkProps) => {
    return (
        <div key={id}>
            <Link href={path}>
                <h5>{title}</h5>
            </Link>
        </div>
    )
}
