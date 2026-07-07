import api from "./api";

// Get Documents
export const getDocuments = async () => {
    const response = await api.get("/documents/");
    return response.data;
};

// Delete Document
export const deleteDocument = async (id) => {
    const response = await api.delete(`/documents/${id}`);
    return response.data;
};

// Download
// Download
export const downloadDocument = async (id) => {

    const response = await api.get(
        `/documents/download/${id}`,
        {
            responseType: "blob",
        }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");

    link.href = url;
    link.download = "document.pdf";

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
};

// Upload Document
export const uploadDocument = async (formData) => {

    const response = await api.post(
        "/documents/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};
