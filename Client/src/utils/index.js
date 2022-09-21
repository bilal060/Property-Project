const CryptoJS = require("crypto-js");
import * as Yup from 'yup';

export const DataEncryption = (Data) => {
    // Encrypt
    const EncryptedText = CryptoJS.AES.encrypt(JSON.stringify(Data), process.env.REACT_APP_ENCRYPTION_KEY).toString();
    return EncryptedText;
}


export const registerValidationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Minimum Length Should Be 3').required('First Name is Required'),
    lastName: Yup.string().min(3, 'Minimum Length Should Be 3').required('Last Name is Required'),
    email: Yup.string().email('Enter valid email').required('Email is Required'),
    userType: Yup.string().oneOf(['customer', 'agent'], 'Required').required('Select User Type'),
    password: Yup.string()
        .min(8, 'Password minimum length should be 8')
        .required('Password is Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password not matched')
        .required('Confrim Your Password'),

});



export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Enter valid email').required('Email is Required'),
    password: Yup.string()
        .min(8, 'Password minimum length should be 8')
        .required('Password is Required'),
    rememberMe: Yup.boolean().oneOf([true, false], 'Required').required('Select User Type'),
});


export const SocietiesValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    ownerName: Yup.string().required('Owner Name is Required'),
    address: Yup.string().required('address is Required'),
    managerName: Yup.string().required('Manager Name is Required'),
    // photo: Yup.array().min(1, "select at least 1 file"),
});


export const PhasesValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    ownerName: Yup.string().required('Owner Name is Required'),
    status: Yup.string().oneOf(['Active', 'InActive']).required('Status is Required'),
    society: Yup.string().required('Society is Required'),
});

export const FormDataFunc = (Data) => {
    console.log(Data)
    const formData = new FormData();
    var objMap = new Map(Object.entries(Data));
    objMap.forEach((item, key) => {
        formData.append(key, item)
    });
    return formData;
}

