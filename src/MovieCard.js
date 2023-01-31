import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';

function MovieCard({ el }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {showMore ? el.description : `${el.description.substring(0, 45)}`}
          <button className="btn" onClick={()=>setShowMore(!showMore)} >{showMore ? "Show Less" : "Show more"}</button>
        </Card.Text>

      </Card.Body>
      <Rating name="read-only" value={el.rating} readOnly />
    </Card>
  );
}

export default MovieCard;