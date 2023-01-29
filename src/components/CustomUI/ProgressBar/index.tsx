import styled from 'styled-components';

export const Progress = styled.progress`
    &::-webkit-progress-value {
        background-color: ${(props) => props.color};
    }
`;

type ProgressStatusProps = {
    statusval: number;
    color: string;
};

export const ProgressStatus = ({ statusval, color }: ProgressStatusProps) => {
    return <Progress value={statusval} max="150" color={color} />;
};
