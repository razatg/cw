"use client";

import { uploadToS3 } from "@/lib/s3";
import { useMutation } from "@tanstack/react-query";
import { Inbox, Key } from "lucide-react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import toast from "react-hot-toast";

const FileUpload = () =>{
    const {mutate} = useMutation({
        mutationFn: async ({file_key, file_name}: {file_key:string, file_name:string} ) => {
            const response = await axios.post('/api/create-chat', {file_key, file_name});
            return response.data;
            }});

    const {getRootProps, getInputProps} = useDropzone({
        accept: {"application/pdf": [".pdf"]},
        maxFiles:1,
        onDrop: async (acceptedFiles) =>{
            console.log(acceptedFiles);
            const file = acceptedFiles[0];
            if (file.size > 10*1024*1024){
                toast.error("File too large");
                alert('Please upload a smaller file');
                return;
            }

            try {
                const data = await uploadToS3(file);
                console.log("data", data);
                if (!data?.file_key || !data.file_name){
                    toast.error("something went wrong");
                    return;
                }
                mutate(data, {
                    onSuccess: (data) => {console.log(data);},
                    onError: (err) => {
                        console.log(err);
                        toast.error("Error creating Chat!")
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },
    }
    );
    return(
        <div className="p-2 bg-white rounded-x1">
            <div {...getRootProps()}
            className = "border-dashed border-2 rounded-x1 cursor-pointer bg-gray-59 py-8 flex justify-center items-center flex-col"
            >
                <input {...getInputProps()}/>
                <>
                <Inbox className="w-10 h-10 text-blue-500"/>
                <p className="mt-2 text-sm text-slate-400">Drop Doc Here</p>
                </>
            </div>
        </div>
    )
}

export default FileUpload;