import React, { Fragment, useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const Compare = () => {
    const [selector1, setSelector1] = useState('');
    const [selector2, setSelector2] = useState('');

    function handleSelectorChange (e) {
        if (e.target.id == 'selector1')
            setSelector1(e.target.value)
        else if (e.target.id == 'selector2')
            setSelector2(e.target.value)
    }

    // function handleSelector2Change (e) {
    // }

    return(
        <Fragment>
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

            <Button color="info">Compare!</Button>
        </Fragment>
    );
}

export default Compare;