import styled from 'styled-components';

export const ThemeIcon = styled.div`
    text-align: right;
    padding: .5rem;
`;

export const ThemeButton = styled.button`
    border-width: 0;
    background-color: transparent;
    cursor: pointer;
`;

export const Heading = styled.h1`
    font-weight: 100;
    text-align: center;
    margin-bottom: 0 0 1rem;
    letter-spacing: .65rem;
`;

export const Logo = styled.img`
    width: 100px;
    margin: 0 auto;
    display: block;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`;

export const Alert = styled.div`
    background-color: #f20;
    color: #f5f5f5;
    border-radius: 5px;
    padding: .75rem;
    grid-column: 1 / span 2;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 1rem;
`;

export const Group = styled.div`
    grid-column: 1 / span 2;
`;

export const Label = styled.label`
    grid-column: 1 / span 2;
`;

export const Input = styled.input`
    grid-column: 1 / span 2;
    background-color: transparent;
    color: 2px solid ${props => (props.dark ? '#bbb' : '#999')};
    border: 2px solid ${props => (props.dark ? '#bbb' : '#999')};
    border-radius: 5px;
    padding: .65rem;
`;

export const Button = styled.button`
    border-radius: 5px;
    padding: .45rem 0;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: #f90;
        color: #f5f5f5;
    }
`;

export const CompareButton = styled(Button)`
    background-color: #fb0;
    color: #f5f5f5;
    border-width: 0;
`;

export const ResetButton = styled(Button)`
    background-color: transparent;
    color: ${props => (props.dark ? '#bbb' : '#999')};
    border: 2px solid ${props => (props.dark ? '#bbb' : '#999')};
`;

export const Results = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`;

export const Result = styled.div`
    font-size: 1.25rem;
    font-weight:200;
    text-align: center;
`;

export const Selector = styled.h5`
    margin: 0;
`;

export const Specificity = styled.div`
    color: ${props => (props.comparison 
                ? '#f20' 
                : '#09a'
            )};
    font-size: 2rem;
`;

export const CompareMoreButton = styled(CompareButton)`
    grid-column: 1 / span 2;
`;

export const FooterContainer = styled.footer`    
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: .75rem;
    padding: 1rem;
    text-align: center;
`;