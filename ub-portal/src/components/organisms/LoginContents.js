import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

import BaseInputTypeText from "components/molecules/BaseInputTypeText";
import BaseInputTypePassword from "components/molecules/BaseInputTypePassword";

import 'resource/styles/organisms/LoginContents.scss';

class LoginContents extends Component {
    render() {
        return (
            <div className="login-content">
                <div className="logo-area">
                    <h1><img src={require('resource/images/common/img_h1_login.png')}  alt="유비원" /></h1>
                </div>
                <div className="login-form">
                    <form name="login" method="post">
                        <fieldset>
                            <legend>Login</legend>
                            <BaseInputTypeText id="userId" text="아이디" className="id-insert"/>
                            <BaseInputTypePassword id="passwd" text="비밀번호" className="pw-insert" />
        
                            <div className="login-idcheck"><input type="checkbox" id="login-idSave" className="ub-control checkbox" /> <label htmlFor="login-idSave" className="save">아이디저장</label></div>
                            <div className="login-btn" id="login" name="login">
                                <span><Link to="/Main"><img src={require('resource/images/common/btn_login.png')} alt="로그인" /></Link></span></div>
                        </fieldset>						
                    </form>
                </div>		
                <div className="login-foot">
                    <p>&#169; Copyright (c) 2017 UB-One all rights reserved	</p>
                </div>
            </div>
        );
    }
}

export default LoginContents;
