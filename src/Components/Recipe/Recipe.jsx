import React, { useContext } from 'react';

import { ModalContext } from '../../Context/ModalContext';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ drink, image, drinkId }) => {
  //Get context values
  const { setSelectedDrinkId } = useContext(ModalContext);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Este debería ser el nombre de la bebida</h2>
      <p id='simple-modal-description'>Aquí iria la receta de la Bebida</p>
    </div>
  );

  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{drink}</h2>
        <img className='card-img-top' src={image} alt={`imagen de ${drink}`} />
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={() => {
              setSelectedDrinkId(drinkId);
              handleOpen();
            }}>
            See Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setSelectedDrinkId(null);
            }}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            {body}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
