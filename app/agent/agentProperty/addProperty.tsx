import { View, Text, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import AgentNavbar from '@/layouts/agent-navbar'
import { TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { Image } from 'react-native'
import { router } from 'expo-router'
import { images } from '@/constants/images'
import { StatusBar } from 'expo-status-bar'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import addPropertyValidationSchema from '@/schema/addPropertyValidationSchema'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { addProperty, clearPropertyLog } from '@/redux/slices/propertySlice'
import fileUploader from '@/_helpers/FileUploader'
import Toast from '@/components/Toast'
import { ActivityIndicator } from 'react-native'

export default function AddProperty() {
    const dispatch = useDispatch()
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'For Rent',
            value: 'Rent'
        },
        {
            id: '2',
            label: 'For Sale',
            value: 'Sale'
        }, {
            id: '3',
            label: "For Shortlet",
            value: 'Shortlet'
        }
    ]), [])
    const [showToast, setShowToast] = useState(false)
    const [message, setMessage] = useState('')
    const { loading, error, errorMessage, success } = useSelector(state => state.property)


    useEffect(() => {
        if (success) {
            setShowToast(true)
        }
    }, [success])

    const { values, handleChange, setFieldValue, handleSubmit, touched, errors, resetForm } = useFormik({
        initialValues: {
            propertyType: '',
            images: [],
            features: [],
            short_description: '',
            long_description: '',
            address: '',
            lga: '',
            state: '',
            property_price: '',
            total_package: '',
            property_title: ''
        },
        validationSchema: addPropertyValidationSchema,
        onSubmit: async (values) => {

            if (values.images && values.images.length > 0) {
                try {
                    const uploadPromises = values.images.map((image, index) => {
                        const img = {
                            uri: image.uri,
                            name: `image_${index}.jpg`,
                            type: 'image/jpeg',
                        };
                        return fileUploader(img);
                    });

                    const results: any = await Promise.all(uploadPromises);
                    console.log('All uploads completed:', results);

                    if (results && results?.length > 0) {
                        const formData = new FormData()

                        formData.append('title', values.property_title)
                        formData.append('features', values.features)
                        formData.append('lga', values.lga)
                        formData.append('state', values.state)
                        formData.append('address', values.address)
                        formData.append('total_package', values.total_package)
                        formData.append('price', values.property_price)
                        formData.append('category', 'Non-Estate')
                        formData.append('summary', values.short_description)
                        formData.append('description', values.long_description)
                        formData.append('property_type', values.propertyType)
                        formData.append('images', results)

                        dispatch(addProperty(formData))


                    }
                } catch (error) {
                    console.error('Error uploading images:', error);
                }
            }



        }
    })

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        })

        if (!result.canceled) {
            // Add all selected images
            const newImages = result.assets
            setFieldValue('images', [...values.images, ...newImages])
        }
    }


    const [featureInput, setFeatureInput] = useState('')

    const addFeature = () => {
        if (featureInput.trim() !== '') {
            setFieldValue('features', [...values.features, featureInput.trim()])
            setFeatureInput('')
        }
    }

    const removeImage = (index: number) => {
        const newImages = [...values.images]
        newImages.splice(index, 1)
        setFieldValue('images', newImages)
    }

    const removeFeature = (index: number) => {
        const newFeatures = [...values.features]
        newFeatures.splice(index, 1)
        setFieldValue('features', newFeatures)
    }

    return (
        <SafeAreaView className='flex-1 bg-white'>
            {showToast && error && <Toast
                message={errorMessage}
                status="Error"
                onClose={() => {
                    setShowToast(false);
                    dispatch(clearPropertyLog())
                }} />}
            {
                showToast && success && <Toast
                    message={message}
                    status="Success"
                    onClose={() => {
                        setShowToast(false);
                        resetForm()
                        dispatch(clearPropertyLog())
                    }}
                />
            }
            <StatusBar style="dark" />
            <AgentNavbar />
            <View className='bg-white flex-row justify-between px-5 py-3 mb-3' style={{ marginTop: 1 }}>
                <View className='flex-row gap-2 mt-1'>
                    <TouchableOpacity onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text className='text-xl font-[600] mt-1'>Add Property</Text>
                <View></View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className='flex-1'
            >
                <ScrollView className='px-5'>
                    <View className="mb-5">
                        <View className="flex-row items-center gap-2 space-x-1">
                            <Text>Property Type:</Text>
                            {radioButtons.map((radio) => (
                                <TouchableOpacity
                                    key={radio.id}
                                    onPress={() => setFieldValue('propertyType', radio.value)}
                                    style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}
                                >
                                    <View
                                        style={{
                                            height: 16,
                                            width: 16,
                                            borderRadius: 8,
                                            borderWidth: 1,
                                            borderColor: '#0415FE',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {values.propertyType === radio.value && (
                                            <View
                                                style={{
                                                    height: 8,
                                                    width: 8,
                                                    borderRadius: 4,
                                                    backgroundColor: '#0415FE',
                                                }}
                                            />
                                        )}
                                    </View>
                                    <Text style={{ marginLeft: 4 }}>{radio.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {touched.propertyType && errors.propertyType && <Text className="text-red-400 mt-2 font-medium">{errors.propertyType}</Text>}
                    </View>
                    <View className='mb-4'>
                        <Text className='mb-3'>Add Images</Text>
                        <View className='flex-row gap-3 flex-wrap'>
                            <TouchableOpacity className='border border-[#0415FEA6] flex-row justify-center items-center rounded-lg bg-[#0415FE1F] border-dashed' style={{ width: 100, height: 100 }} onPress={pickImage}>
                                <AntDesign name="plus" size={24} color="black" />
                            </TouchableOpacity>
                            {values.images.map((img, index) => (
                                <View key={index} style={{ position: 'relative' }}>
                                    <Image source={{ uri: img.uri }} style={{ width: 100, height: 100, borderRadius: 8 }} />
                                    <TouchableOpacity
                                        style={{
                                            position: 'absolute',
                                            top: 5,
                                            right: 5,
                                            backgroundColor: 'rgba(0,0,0,0.5)',
                                            borderRadius: 10,
                                            padding: 2
                                        }}
                                        onPress={() => removeImage(index)}
                                    >
                                        <AntDesign name="close" size={16} color="white" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                        {touched.images && errors.images && <Text className="text-red-400 mt-2 font-medium">{errors.images}</Text>}

                    </View>

                    <View className='mb-4'>
                        <TextInput
                            placeholder='Property Title'
                            className='p-4 text-xl font-[700]'
                            style={{ borderBottomWidth: 1, borderBottomColor: '#0415FE' }}
                            value={values.property_title}
                            onChangeText={handleChange('property_title')}
                        />
                        {touched.property_title && errors.property_title && <Text className="text-red-400 mt-2 font-medium">{errors.property_title}</Text>}

                    </View>

                    <View className='mb-4'>
                        <Text className='mb-1'>Short Description (Summary)</Text>
                        <TextInput
                            multiline
                            className='px-4 pt-2 pb-10 text-sm rounded-lg'
                            value={values.short_description}
                            onChangeText={handleChange('short_description')}
                            style={{ borderWidth: 1, borderColor: '#0415FE' }}
                        />
                        {touched.short_description && errors.short_description && <Text className="text-red-400 mt-2 font-medium">{errors.short_description}</Text>}

                    </View>

                    <View className='mb-4'>
                        <Text className='mb-1'>Long Description</Text>
                        <TextInput
                            multiline
                            className='px-4 pt-2 pb-10 text-sm rounded-lg '
                            style={{ borderWidth: 1, borderColor: '#0415FE' }}
                            value={values.long_description}
                            onChangeText={handleChange('long_description')}
                        />
                        {touched.long_description && errors.long_description && <Text className="text-red-400 mt-2 font-medium">{errors.long_description}</Text>}

                    </View>

                    <View className='mb-4'>
                        <Text className='mb-1'>Property Features</Text>
                        <View className='flex-row gap-3 mb-2'>
                            <TextInput
                                value={featureInput}
                                onChangeText={(text) => setFeatureInput(text)}
                                className='p-4 text-sm flex-1 rounded-lg'
                                style={{ borderWidth: 1, borderColor: '#0415FE' }}
                                placeholder="Add a feature"
                            />
                            <TouchableOpacity onPress={addFeature} className='p-4 flex-row justify-center items-center bg-[#0415FE] rounded-lg'>
                                <AntDesign name="plus" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row flex-wrap gap-2">
                            {values.features.map((f, idx) => (
                                <View key={idx} className="bg-[#0415FE1F] px-3 py-2 rounded-full flex-row items-center">
                                    <Text>{f}</Text>
                                    <TouchableOpacity onPress={() => removeFeature(idx)} className="ml-1">
                                        <AntDesign name="close" size={14} color="black" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                        {touched.features && errors.features && <Text className="text-red-400 mt-2 font-medium">{errors.features}</Text>}

                    </View>


                    <View className='mb-2'>
                        <Text className='mb-1'>Location - Address</Text>
                        <TextInput
                            className='p-4 text-sm flex-1 rounded-lg'
                            style={{ borderWidth: 1, borderColor: '#0415FE' }}
                            value={values.address}
                            onChangeText={handleChange('address')}
                        />
                        {touched.address && errors.address && <Text className="text-red-400 mt-2 font-medium">{errors.address}</Text>}

                    </View>

                    <View className='mb-4 flex-row gap-4'>
                        <View className='flex-1'>
                            <Text className='mb-1'>LGA</Text>
                            <TextInput
                                className='p-4 text-sm rounded-lg'
                                style={{ borderWidth: 1, borderColor: '#0415FE' }}
                                value={values.lga}
                                onChangeText={handleChange('lga')}
                            />
                            {touched.lga && errors.lga && <Text className="text-red-400 mt-2 font-medium">{errors.lga}</Text>}

                        </View>
                        <View className='flex-1'>
                            <Text className='mb-1'>State</Text>
                            <TextInput
                                className='p-4 text-sm rounded-lg'
                                style={{ borderWidth: 1, borderColor: '#0415FE' }}
                                value={values.state}
                                onChangeText={handleChange('state')}
                            />
                            {touched.state && errors.state && <Text className="text-red-400 mt-2 font-medium">{errors.state}</Text>}

                        </View>
                    </View>

                    <View className='mb-4'>
                        <Text className='mb-1'>Property Price ₦</Text>
                        <TextInput
                            className='p-4 text-sm flex-1 rounded-lg'
                            style={{ borderWidth: 1, borderColor: '#0415FE' }}
                            value={values.property_price}
                            onChangeText={handleChange('property_price')}
                            keyboardType="number-pad"
                        />
                        {touched.property_price && errors.property_price && <Text className="text-red-400 mt-2 font-medium">{errors.property_price}</Text>}

                    </View>

                    <View className='mb-5'>
                        <Text className='mb-1'>Total Package ₦</Text>
                        <TextInput
                            className='p-4 text-sm flex-1 rounded-lg'
                            style={{ borderWidth: 1, borderColor: '#0415FE' }}
                            value={values.total_package}
                            onChangeText={handleChange('total_package')}
                            keyboardType="number-pad"
                        />
                        {touched.total_package && errors.total_package && <Text className="text-red-400 mt-2 font-medium">{errors.total_package}</Text>}

                    </View>

                    <View className='flex-row gap-4 mb-10 flex-nowrap'>
                        <TouchableOpacity
                            className='p-4 flex-1 flex-row gap-3 rounded-lg bg-[#0415FE] justify-center'
                            onPress={handleSubmit}
                            disabled={loading}
                            style={{ backgroundColor: loading ? '#0415FEA6' : '#0415FE' }}
                        >
                            {
                                loading ? (
                                    <ActivityIndicator
                                        color='white'
                                        size={17}
                                    />
                                ) : (
                                    <>
                                        <Text className='text-white'>Publish Property</Text>
                                        <MaterialCommunityIcons name="folder" size={17} color="white" />
                                    </>
                                )
                            }

                        </TouchableOpacity>
                        <TouchableOpacity
                            className='p-4 flex-1 flex-row gap-3 rounded-lg justify-center'
                            style={{ backgroundColor: '#000000' }}
                            onPress={() => router.push('/agent/agentProperty/editProperty')}
                        >
                            <Text className='text-white'>Save Draft</Text>
                            <FontAwesome5 name="folder-plus" size={17} color="white" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}