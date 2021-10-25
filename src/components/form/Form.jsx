import React, { Component } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {
    componentDidMount() {
        loadCaptchaEnginge(5, 'white', 'black', 'upper');
        validateCaptcha();
    };

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            // alert('неее');
            // loadCaptchaEnginge(5, 'white', 'black', 'upper');
            // document.getElementById('user_captcha_input').value = "";
        }

        else {
            toast.error('не успешно!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            loadCaptchaEnginge(5, 'white', 'black', 'upper');
            document.getElementById('user_captcha_input').value = "";
        }
    };


    render() {
        return (
            <>
                <form className="form-inline w-100 " >
                    <div className="form-group mb-2">
                        <input type="text" className="form-control" id="inputPassword" placeholder="Ваше имя" />
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                    <div className="col-xs-5 mb-2 ">
                        <textarea className="form-control" placeholder="видите ваше сообщение"
                            style={{
                                height: "200px"
                            }}></textarea>
                    </div>
                    <div className="d-flex">
                        <div className="ml-2 w-20">
                            < LoadCanvasTemplate reloadText=" " reloadColor="red" />
                        </div>
                        <div className="ml-2 w-20">
                            <input className="form-control" autoComplete="off" placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input>
                        </div>
                        <div className="mr-2 w-20">
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                            <button type="submit" className="btn btn-primary " onClick={() => this.doSubmit()}
                                style={{
                                    marginLeft: "10px"
                                }}
                            >отпавить</button>
                        </div>
                    </div>

                    {/* <button type="submit" className="btn btn-primary">отправить</button> */}
                </form>
            </>
        );
    };
};
export default Form;