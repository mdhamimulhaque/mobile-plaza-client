import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';
import LOGO from "../../img/logo.png";

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const [token] = useToken(loginUserEmail);

    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    // --->handle password login
    const handleLogin = data => {
        const email = data.email;
        const password = data.password;
        // --->email login
        loginUser(email, password)
            .then(data => {
                if (data.user) {
                    setLoginUserEmail(data.user.email);
                    setLoginError('');
                    toast.success('login successfully!!');
                    navigate(from, { replace: true });
                }
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message)
            })
    };

    // ---> handle google login
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(res => {
                if (res?.user?.uid) {
                    const email = res.user?.email;
                    const userImg = res.user?.phoneNumber;
                    const name = res.user?.displayName;
                    saveUserInfo(name, userImg, email);
                    setLoginUserEmail(email);
                    navigate(from, { replace: true });
                }
                setLoginError('');
            })
            .catch(err => {
                setLoginError(err.message)
                console.err(err)
            })
    }
    // --->save userInfo to database
    const saveUserInfo = (name, userImg, email) => {
        // -->user data
        const userInfo = {
            name: name,
            email: email,
            phone: 'not available',
            img: userImg,
            role: 'buyer',
        }

        //     // ---> data store to server (axios)
        axios
            .put('https://mobile-plaza-server.vercel.app/users', {
                body: userInfo
            })
            .then((res) => {
                if (res.status === 200) {
                    setLoginError('');
                    toast.success('Login successfully!!');
                }
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message);
            })
    }





    return (
        <section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center
            bg-[url('https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
            " >
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">Login !! Mobile Plaza</h1>
                    <p className="text-3xl my-4">Buy your dream products</p>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-6 z-20">
                    <h1 className=" text-white flex items-center justify-center font-semibold text-3xl">
                        <img src={LOGO} alt="logo" /> <span>Mobile Plaza</span>
                    </h1>
                    <article className='my-3 border border-red-500'>
                        <h4 className='text-red-500'>For Admin Role:</h4>
                        <small>Email: admin@gmail.com </small> <br />
                        <small>Password : 123456</small>
                    </article>
                    <div className="sm:w-2/3 px-4 lg:px-0 mx-auto flex justify-center mb-2">
                        <button onClick={handleGoogleLogin} className="flex items-center justify-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48"            >
                                <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                <path fill="#e53935" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                                <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                <path fill="#1565c0" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                            </svg>
                            Google
                        </button>
                    </div>
                    <p className="text-gray-100">
                        or use email your account
                    </p>
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input type="email"
                                id="email"
                                placeholder="Email"
                                className="block w-full p-4 text-lg rounded-sm bg-black"
                                {...register('email')}
                            />
                        </div>
                        <div className="pb-2 pt-4">
                            <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password"
                                id="password"
                                placeholder="Password"
                                {...register('password')}
                            />
                        </div>
                        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                            <Link to="#">Forgot your password?</Link>
                            <p className='text-red-400 my-2'>{loginError}</p>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">Log in</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;