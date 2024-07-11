import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

const Grid = () => {
  return (
    <>
      <div className="content">
        <h4 className="pl-3 title">
          XS Grid <small>Always Horizontal</small>
        </h4>
        <Row>
          <Col xs="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="pl-3 title">
          SM Grid <small>Collapsed at 576px</small>
        </h4>
        <Row>
          <Col sm="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="pl-3 title">
          MD Grid <small>Collapsed at 768px</small>
        </h4>
        <Row>
          <Col md="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="pl-3 title">
          LG Grid <small>Collapsed at 992px</small>
        </h4>
        <Row>
          <Col lg="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-lg-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-lg-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-lg-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="pl-3 title">
          XL Grid <small>Collapsed at 1200px</small>
        </h4>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-xl-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-xl-4</code>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-xl-4</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="pl-3 title">
          Mixed Grid <small>Showing different sizes on different screens</small>
        </h4>
        <Row>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-sm-6 col-lg-3</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="pl-3 title">
          Offset Grid <small>Adding some space when needed</small>
        </h4>
        <Row>
          <Col md="3">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-3</code>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto" md="3">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-3 ml-auto</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-4 ml-auto mr-auto</code>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="4">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-4 ml-auto mr-auto</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="6">
            <Card>
              <CardBody className="py-5 text-center">
                <code>col-md-6 ml-auto mr-auto</code>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h3 className="mt-5 text-center title">Paragraphs</h3>
        <CardBody>
          <Row>
            <Col sm="6">
              <h3 className="mt-5">Some Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. "What's happened to me?" he
                thought.
              </p>
            </Col>
            <Col sm="6">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked. "What's happened to me?" he
                thought.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4">
              <h3 className="mt-5">Some Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </Col>
            <Col sm="4">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </Col>
            <Col sm="4">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="4">
              <h3 className="mt-5">Some Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment.
              </p>
            </Col>
            <Col sm="8">
              <h3 className="mt-5">Another Title Here</h3>
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. One morning, when
                Gregor Samsa woke from troubled dreams, he found himself
                transformed in his bed into a horrible vermin. He lay on his
                armour-like back, and if he lifted his head a little he could
                see his brown belly, slightly domed and divided by arches into
                stiff sections. The bedding was hardly able to cover it and
                seemed ready to slide off any moment.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    </>
  );
};

export default Grid;
