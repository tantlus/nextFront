import React from 'react';
import 'resource/css/style.css';

const Login = () => {
    return (
<div className="ub-layout login">
	<div className="login-content">
		<div className="logo-area">
			<h1><img src={require('resource/images/common/img_h1_login.png')}  alt="유비원" /></h1>
		</div>
		<div className="login-form">
			<form name="login" method="post">
				<fieldset>
					<legend>Login</legend>
					<div className="id-insert">
						<label htmlFor="userid">아이디</label>
						<span className="login-inputtext">
							<input type="text" id="userid" name="userid" className="ub-control input-text" width="240px" placeholder="아이디" />
						</span>
					</div>
					<div className="pw-insert">
						<label htmlFor="userpw">비밀번호</label>
						<span className="login-inputtext">
							<input type="password" id="userpw" name="userpw" className="ub-control input-text" width="240px" placeholder="비밀번호" />
						</span>
					</div>
					<div className="login-idcheck"><input type="checkbox" id="login-idSave" className="ub-control checkbox" /> <label htmlFor="login-idSave" className="save">아이디저장</label></div>
					<div className="login-btn" id="login" name="login"><span><a href="none;"><img src={require('resource/images/common/btn_login.png')} alt="로그인" /></a></span></div>
				</fieldset>						
			</form>
		</div>		
		<div className="login-foot">
			<p>&#169; Copyright (c) 2017 UB-One all rights reserved	</p>
		</div>
	</div>	
</div>
    );
};

export default Login;