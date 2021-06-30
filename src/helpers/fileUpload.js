export const fileUpload = async (file) => {
    
    const cloudUrl = 'https://pone-la-url-aqui';

    const formData = new FormData();

    formData.append('upload_present -> escribilo bien', 'react-journal-app');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
}