import { connect } from 'react-redux';
import Auth from './Auth';
import { signup } from '../redux/auth';

const mapState = (state) => ({
    message : 'Sign up'
});
const mapDispatch = (dispatch) => ({
    login : signup
});

export default connect(mapState, mapDispatch)(Auth)