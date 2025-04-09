const fileUploader = async (file: { uri: string; name: string; type: string }) => {
    const cloud_name = 'dadsz1fot';
    const upload_preset = 'perkpro';

    // Create FormData - React Native specific way
    const formData = new FormData();
    formData.append('file', {
        uri: file.uri,
        name: file.name,
        type: file.type
    });
    
    formData.append('upload_preset', upload_preset);
    formData.append('cloud_name', cloud_name);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });

        const data = await response.json();
        
        if (!response.ok) {
            const errorMsg = data.error?.message || 'File upload failed';
            throw new Error(`${errorMsg} (Status: ${response.status})`);
        }

        return data?.secure_url ?? null; 
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export default fileUploader;