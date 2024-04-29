import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.scss';
import Sound from './gav.mp3';
import PropTypes from 'prop-types';

export default function Dog({dog}) {
      const playSound = () => {
      const audio = new Audio(Sound);
      audio.play();
      }
    

    return(
        <Card  style={{ width: '20rem'}}>
      <Card.Img  style={{ height: '12rem' }} src={dog.image} alt={dog.name} />
      <Card.Body>
        <Card.Title className='fs-1 text-center'>{dog.name}</Card.Title>
        <Card.Text className='fs-4 text-center'>
        {dog.breed}, {dog.weight}
        </Card.Text>
        <div className="d-flex align-items-center justify-content-center">
         <Button onClick={playSound} variant="primary">Buy</Button>
        </div>
      </Card.Body>
    </Card>
    )
}

Dog.propTypes = {
  dog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
  }).isRequired,
};