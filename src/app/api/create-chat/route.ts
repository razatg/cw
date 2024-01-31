import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { loadS3IntoPinecode } from "@/lib/pinecone";
import { getS3Url } from "@/lib/s3";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        // await loadS3IntoPinecode(file_key);
        const chat_id = await db
            .insert(chats)
            .values({
                fileKey: file_key,
                docName: file_name,
                docURL: getS3Url(file_key),
                userID:""
            })
            .returning({
                insertedId: chats.id,
            });

        return NextResponse.json(
            { message: "successfully uploaded file", chat_id: chat_id[0].insertedId },
            { status: 200 }
        );


    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "internal server error" }, { status: 500 }
        );

    }

}