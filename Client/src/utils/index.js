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




export const BlocksValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    ownerName: Yup.string().required('Owner Name is Required'),
    status: Yup.string().oneOf(['Active', 'InActive']).required('Status is Required'),
    society: Yup.string().required('Society is Required'),
    phase: Yup.string().required('Phase is Required'),

});

export const PropertySchema = Yup.object().shape({
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is Required'),
    status: Yup.string().required('Status is Required'),
    type: Yup.string().required('Type is Required'),
    rooms: Yup.number().required('Select Number Of Rooms'),
    price: Yup.number().required('Price is Required'),
    area: Yup.string().required('Area is Required'),
    address: Yup.string().required('Address is Required'),
    city: Yup.string().required('City is Required'),
    state: Yup.string().required('State is Required'),
    country: Yup.string().required('Country is Required'),
    latitude: Yup.string().required('Latitude is Required'),
    longitude: Yup.string().required('Longitude is Required'),
    age: Yup.string().required('Age is Required'),
    bathrooms: Yup.number().required('Select Number of Bathrooms'),
    condition: Yup.string().required('Select Room Condition'),
    ctInfoName: Yup.string().required('Name is Required'),
    ctInfoUsername: Yup.string().required('Username is Required'),
    ctInfoEmail: Yup.string().required('Email is Required'),
    ctInfoPhone: Yup.string().required('Phone is Required'),
    society: Yup.string().required('Society is Required'),
    phase: Yup.string().required('Phase is Required'),
    block: Yup.string().required('Block is Required'),
    photo: Yup.array().required('Images Are Required'),
})
export const FormDataFunc = (Data) => {
    const formData = new FormData();
    var objMap = new Map(Object.entries(Data));
    objMap.forEach((item, key) => {
        formData.append(key, item)
    });
    return formData;
}


export const FormDataMultipleFiles = (Data) => {
    console.log("Data", Data.photo)
    const formData = new FormData();
    var objMap = new Map(Object.entries(Data));
    objMap.forEach((item, key) => {
        if (key === 'photo') {
            Data?.photo?.map((itemm) => (
                formData.append(key, itemm)
            ))
        }
        if (key !== 'photo') {
            formData.append(key, item)
        }
    });
    return formData;
}
