import PropTypes from 'prop-types';

export const ProductoType = PropTypes.shape({
    id: PropTypes.number.isRequired, 
    nombre: PropTypes.string.isRequired, 
    precio: PropTypes.number.isRequired, 
    img: PropTypes.string.isRequired
});