import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class LoginContents extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1><Link to="/Main">홈</Link></h1>
                </div>
                <div>
                    <form name="login" method="post">
                        <fieldset>
                            <legend>Login</legend>
                            <input type="text" text="아이디"></input>
                            <input type="password" text="비밀번호"></input>
                            <div>
                                <input type="checkbox" id="login-idSave" />
                                <label htmlFor="login-idSave" className="save">아이디저장</label></div>
                            <div id="login" name="login">
                                <span><Link to="/Main">로그인</Link></span></div>
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
