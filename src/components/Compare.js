import React, { Fragment, useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { compare, calculate } from 'specificity';

const Compare = () => {
    const [selector1, setSelector1] = useState('');
    const [selector2, setSelector2] = useState('');
    const [spec1, setSpec1] = useState('');
    const [spec2, setSpec2] = useState('');
    const [comparison, setComparison] = useState(null);
    const [error, setError] = useState(null)

    function handleSelectorChange (e) {
        if (e.target.id === 'selector1')
            setSelector1(e.target.value)
        else if (e.target.id === 'selector2')
            setSelector2(e.target.value)
    }

    function compareSelectors () {
        if (selector1 === '' || selector2 === '') {
            setError('Please enter two selectors.')
            return;
        }
        setError(null);
        setComparison(compare(selector1, selector2));
        setSpec1(calculate(selector1)[0].specificity);//Array.join("");
        setSpec2(calculate(selector2)[0].specificity);//Array.join("");
    }

    function reset () {
        setSelector1('')
        setSelector2('')
        setComparison(null)
    }

    return(
        <Fragment>
            {!comparison &&
                <Fragment>
                    <h5 className='text-secondary'>chicken Pit two CSS selectors head to head to see which one is more specific</h5>
                    {error && <Alert color="danger">{error}</Alert>}
                    <Row>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="selector1">Selector #1</Label>
                                <Input bsSize="lg" id="selector1" value={selector1} onChange={handleSelectorChange} />                        
                            </FormGroup>
                        </Col>
                        <Col xs="12" sm="6">
                            <FormGroup>
                                <Label for="selector2">Selector #2</Label>
                                <Input bsSize="lg" id="selector2" value={selector2} onChange={handleSelectorChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button color="info" onClick={compareSelectors}>Compare!</Button>
                </Fragment>
            }

            {comparison && 
                <Fragment>
                    <Row className='my-3'>
                        <Col xs="6">
                            <div className="text-center display-4">
                                <h5>{selector1}</h5>
                                <div className={
                                    comparison > 0 
                                        ? "text-success" 
                                        : comparison === 0 
                                            ? "text-secondary"
                                            : "text-danger"
                                    }>{spec1}</div>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div className="text-center display-4">
                                <h5>{selector2}</h5>
                                <div className={
                                    comparison < 0 
                                        ? "text-success" 
                                        : comparison === 0 
                                            ? "text-secondary"
                                            : "text-danger"
                                    }>{spec2}</div>
                            </div>
                        </Col>
                    </Row>

                    <Button color="info" onClick={reset} block>Compare some more!</Button>
                </Fragment>
            }
        </Fragment>
    );
}

export default Compare;