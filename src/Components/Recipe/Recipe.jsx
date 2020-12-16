import React, { useContext } from 'react';

import { ModalContext } from '../../Context/ModalContext';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: '500px',
    overflow: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Recipe = ({ drink, image, drinkId }) => {
  //Get context values
  const {
    setSelectedDrinkId,
    recipeInstructions,
    setRecipeInstructions,
    ingredientsList,
    setIngredientsList,
  } = useContext(ModalContext);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              setTimeout(() => {
                handleOpen();
              }, 300);
            }}>
            See Recipe
          </button>
          {open ? (
            <Modal
              open={open}
              onClose={() => {
                handleClose();
                setSelectedDrinkId(null);
                setRecipeInstructions('');
                setIngredientsList([]);
              }}
              aria-labelledby='simple-modal-title'
              aria-describedby='simple-modal-description'>
              <div className={classes.paper}>
                <h2 id='simple-modal-title'>{drink}</h2>
                <h3>Ingredients</h3>
                <ul>
                  {ingredientsList.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>;
                  })}
                </ul>
                <h3>Instructions</h3>
                <p id='simple-modal-description'>{recipeInstructions}</p>
                <img
                  className='img-fluid'
                  src={image}
                  alt={`imagen de ${drink}`}
                />
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
