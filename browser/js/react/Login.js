import { connect } from 'react-redux';
import Auth from './Auth';
import { login } from '../redux/auth';

const mapState = (state) => ({
    message : 'Log in'
});
const mapDispatch = (dispatch) => ({
    login : login
});

export default connect(mapState, mapDispatch)(Auth)