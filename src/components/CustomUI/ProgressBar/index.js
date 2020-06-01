import React from 'react';
import styled from 'styled-components';

export const Progress = styled.progress`
    &::-webkit-progress-value {
        background-color: ${(props) => props.color};
    }
`;

export const ProgressStatus = ({statusval, color }) => {
    return <Progress value={statusval} max="150" color={color}></Progress>;
};
