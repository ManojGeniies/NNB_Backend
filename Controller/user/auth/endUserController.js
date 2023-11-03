const endUserModel = require("../../../Model/user/auth/endUserModel");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');

const controller = {
    async endUserRegister(req, res) {
        try {
            const { mobile, name, password, confirmPassword } = req.body;
            if (mobile && name && password, confirmPassword) {
                const findMobile = await endUserModel.findOne({ mobile: mobile });
                const newUser = async () => {
                    if (password == confirmPassword) {
                        const salt = await bcryptjs.genSalt(10);
                        const passwordEncrypt = await bcryptjs.hash(password, salt);
                        const userRegister = await endUserModel.create({
                            mobile,
                            name,
                            password: passwordEncrypt
                        });
                        res.status(200).json({ status: true, message: "You're successfully registered", userRegister });
                    } else {
                        res.status().json({ status: false, message: "Password Doesn't matched" });
                    }
                }
                if (!findMobile) {
                    newUser()
                } else {
                    res.status(403).json({ status: false, message: 'Mobile number already exist' });
                }
            } else {
                res.status(403).json({ status: false, message: "Please fill the all details" });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error });
        }
    },

    async endUserLogin(req, res) {
        try {
            const { mobile, password } = req.body
            if (mobile && password) {
                const loginCheck = async (userExist) => {
                    const login = await bcryptjs.compare(password, userExist.password);
                    if (login) {
                        const token = jwt.sign({ id: userExist._id }, 'abcd', {
                            expiresIn: '1hr'
                        });
                        res.status(201).json({ status: true, message: 'Login successfully', token: token });
                    } else {
                        res.status(401).json({ status: false, message: 'Invalid password' });
                    }
                }
                const checkMobile = await endUserModel.findOne({ mobile });
                if (checkMobile) {
                    loginCheck(checkMobile)
                } else {
                    res.status(403).json({ status: false, message: "User doesn't exist" });
                }
            } else {
                res.status(403).json({ status: true, message: "Please fill all the details" });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error })
        }
    }

}

module.exports = controller