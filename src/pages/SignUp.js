const SignUp = () => {
    return (
        <div>
            <h1>회원가입</h1>
            <form>
                <input type="email" placeholder="이메일" required />
                <input type="password" placeholder="비밀번호" required />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
