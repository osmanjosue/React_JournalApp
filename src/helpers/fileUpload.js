export const fileUpload = async (file) => {

    const CloudUrl = 'https://api.cloudinary.com/v1_1/cursososman/upload'
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(
            CloudUrl,
            {
                method: 'POST',
                body: formData
            }
        );


        if (!resp.ok) throw new Error('No se pudo subir la imagen');

        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    }
    catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

}