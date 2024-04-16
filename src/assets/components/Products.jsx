import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Products() {

    return (

        <>
            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='row'>

                        <CardPattern></CardPattern>
                        <CardPattern></CardPattern>
                        <CardPattern></CardPattern>
                        <CardPattern></CardPattern>
                        <CardPattern></CardPattern>
                        <CardPattern></CardPattern>


                    </div>


                </div>

            </div>



        </>
    )

}


function CardPattern() {

    return (
        <div className='col-md-3'>

            <Card className='my-2'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className='text-danger'>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default Products