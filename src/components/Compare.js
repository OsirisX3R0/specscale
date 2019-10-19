import React, { Fragment, useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { calculate } from 'specificity/dist/specificity.mjs';

const Compare = () => {
    const [selector1, setSelector1] = useState('');
    const [selector2, setSelector2] = useState('');
    const [spec1, setSpec1] = useState(0);
    const [spec2, setSpec2] = useState(0);
    const [error, setError] = useState(null)

    function handleSelectorChange (e) {
        if (e.target.id === 'selector1')
            setSelector1(e.target.value)
        else if (e.target.id === 'selector2')
            setSelector2(e.target.value)
    }

    function compare () {
        if (selector1 === '' || selector2 === '') {
            setError('Please enter two selectors.')
            return;
        }
        setError(null);
        let compare1 = +calculate(selector1)[0].specificityArray.join("");
        let compare2 = +calculate(selector2)[0].specificityArray.join("");
        setSpec1(compare1);
        setSpec2(compare2);
    }

    return(
        <Fragment>
            {error && <Alert color="danger">{error}</Alert>}
            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Label for="selector1">Selector #1</Label>
                        <Input bsSize="lg" id="selector1" value={selector1} onChange={handleSelectorChange} />                        
                    </FormGroup>
                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Label for="selector2">Selector #2</Label>
                        <Input bsSize="lg" id="selector2" value={selector2} onChange={handleSelectorChange} />
                    </FormGroup>
                </Col>
            </Row>

            <Button color="info" onClick={compare}>Compare!</Button>

            <Row>
                <Col xs="6">
                    {spec1 > 0 && 
                        <div className="text-center display-4">
                            <div>{selector1}</div>
                            <div className={spec1 > spec2 ? "text-success" : "text-danger"}>{spec1}</div>
                        </div>
                    }
                </Col>
                <Col xs="6">
                    {spec2 > 0 && 
                        <div className="text-center display-4">
                            <div>{selector2}</div>
                            <div className={spec2 > spec1 ? "text-success" : "text-danger"}>{spec2}</div>
                        </div>
                    }
                </Col>
            </Row>
        </Fragment>
    );
}

export default Compare;