import React from 'react';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';

const RowDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
const ColMd6 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 768px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
`


const RowBlock = ({left, right}) => {
    return (
        <RowDiv>
            <ColMd6>
                <ErrorMessage>
                    {left}
                </ErrorMessage>
            </ColMd6>
            <ColMd6>
                <ErrorMessage>
                    {right}
                </ErrorMessage>
            </ColMd6>
        </RowDiv>
    )
}

export default RowBlock