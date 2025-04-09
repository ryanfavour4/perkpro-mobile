import * as Yup from 'yup';

const addPropertyValidationSchema = Yup.object().shape({
    images: Yup.array()
        .of(Yup.object())
        .min(1, 'At least one image is required')
        .required('Images are required'),
    features: Yup.array()
        .of(Yup.string().min(1, 'Empty feature not allowed'))
        .min(1, 'At least one feature is required'),
    short_description: Yup.string().required('Short description is required'),
    long_description: Yup.string().required('Long description is required'),
    address: Yup.string().required('Address is required'),
    lga: Yup.string().required('LGA is required'),
    state: Yup.string().required('State is required'),
    property_price: Yup.string().required('Property price is required'),
    total_package: Yup.string().required('Total package is required'),
    property_title: Yup.string().required('Property title is required'),
    propertyType: Yup.string().required('Property type is required').oneOf(['Rent', 'Sale', 'Shortlet'], 'Please select the data property type'),

});

export default addPropertyValidationSchema;
