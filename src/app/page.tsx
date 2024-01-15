import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-3xl font-semibold"> Your Context to Any Document</h1>
          </div>
          <div className="flex mt-2">
            <Button>Go to Documents</Button>
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Your Window to Context of Any Artifact
          </p>
          <div className="w-full mt-4">
            <FileUpload/>
            <Button>Get Started!<ArrowRight className="ml-2"/></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
