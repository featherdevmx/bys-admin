import React from 'react'
import Link from 'next/link';

import {MenuLinkProps} from './types';

export const MenuLink = ({id, path, title, type, action}:MenuLinkProps) => {
    return (
        <div key={id}>
            {type === 'btn' && (
                <div onClick={action}>
                    <h5>{title}</h5>
                </div>
            )}
            {type === 'link' && (
                <Link href={path as string}>
                    <h5>{title}</h5>
                </Link>
            )}
        </div>
    )
}
