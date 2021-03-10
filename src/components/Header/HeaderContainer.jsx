import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {loginAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        loginAPI.getLogin(this.props.isAuth, this.props.login).then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProp = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProp, {setAuthUserData}) (HeaderContainer);