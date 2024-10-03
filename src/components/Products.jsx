import React , {useState, useEffect, useRef } from 'react';
import { Card, Row, Col } from 'react-bootstrap';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore]  = useState(true);
    const [page, setPage] = useState(0);

    const ElementRef = useRef(null);

    function handleObserver(entries) {
        const firstEntry = entries[0];
        if(firstEntry.isIntersecting && hasMore) {
            fetchMoreProducts();
        }
    }

    async function fetchMoreProducts() {
        const response = await
            fetch(`https://dummyjson.com/products?limit=10&skip=${page *10}`);
            const data = await response.json();
            if(data.products.length == 0) {
                setHasMore(false);
            } else {
                setProducts(prevProducts => [...prevProducts, ...data.products]);
                setPage(prevPage => prevPage +1)
            }
}

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver);
        if(observer && ElementRef.current) {
            observer.observe(ElementRef.current)
        } 
        
        return () => {
            if(observer) {
                observer.disconnect();
            }
        }
    }, [products]);

  return (
    <>
    {products.map(item => 
        <Card key={item.id} style={{width: '600px', margin: '0 auto'}} className={'mb-2'}>
            <Row>
                <Col md={4}>
                    <img src={item.thumbnail} alt="product Image" style={{width: '100%', margin: '10px'}}/>
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                           $ {item.price}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )}
      {hasMore && <div ref={ElementRef} style={{textAlign : 'center'}}>Load More items</div>}
   </>
  )
}

export default Products;
