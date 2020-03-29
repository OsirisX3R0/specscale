import React, { useState, useContext } from 'react';
import { compare, calculate } from 'specificity';
import { Container, Grid, Alert, Label, Input, CompareButton, ResetButton, Results, Result, Selector, Specificity, CompareMoreButton } from './Styles';
import { GlobalContext } from '../context/GlobalContext';

const Compare = () => {
    const { dark } = useContext(GlobalContext);
    const [selector1, setSelector1] = useState('');
    const [selector2, setSelector2] = useState('');
    const [spec1, setSpec1] = useState('');
    const [spec2, setSpec2] = useState('');
    const [comparison, setComparison] = useState(null);
    const [error, setError] = useState(null);

    const compareSelectors = () => {
        if (selector1 === '' || selector2 === '') {
            setError('Please enter two selectors.')
            return;
        }
        setError(null);
        setComparison(compare(selector1, selector2));
        setSpec1(calculate(selector1)[0].specificity);//Array.join("");
        setSpec2(calculate(selector2)[0].specificity);//Array.join("");
    }

    const reset = () => {
        setSelector1('')
        setSelector2('')
        setComparison(null)
    }

    const display = () => {
        if (!comparison) {
            return (
                <Grid>
                    {error && <Alert color="danger">{error}</Alert>}

                    <Label htmlFor="selector1">Selector #1</Label>
                    <Input type="text" dark={dark} value={selector1} onChange={(e) => setSelector1(e.target.value)} />                        
                
                    <Label htmlFor="selector2">Selector #2</Label>
                    <Input type="text" dark={dark} value={selector2} onChange={(e) => setSelector2(e.target.value)} />

                    <CompareButton onClick={compareSelectors}>Compare!</CompareButton>
                    <ResetButton dark={dark} onClick={() => reset()}>Reset</ResetButton>
                </Grid>
            )
        }

        return (
            <Results>
                <Result>
                    <Selector>{selector1}</Selector>
                    <Specificity comparison={comparison > 0}>{spec1}</Specificity>
                </Result>
                <Result>
                    <Selector>{selector2}</Selector>
                    <Specificity comparison={comparison < 0}>{spec2}</Specificity>
                </Result>

                <CompareMoreButton color="info" onClick={reset} block>Compare some more!</CompareMoreButton>
            </Results>
        )
    }

    return(
        <Container>
            <h5 className='text-secondary'>Pit two CSS selectors head to head to see which one is more specific</h5>
            
            {display()}
            
        </Container>
    );
}

export default Compare;