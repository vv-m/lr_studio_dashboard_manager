import React, { FC, memo } from 'react';
import ProtectedRoutesProps from './ProtectedRoutes.model';

const ProtectedRoutex : FC<ProtectedRoutesProps> = memo(({children}) => {
    return children;
});

export default ProtectedRoutex;