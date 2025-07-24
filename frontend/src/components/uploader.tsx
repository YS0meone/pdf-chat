import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { UploadZone } from "./upload-zone";
import { Button } from "@/components/ui/button";

export default function Uploader() {
  return (
    <Card className="mt-4 w-full max-w-2xl mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Upload your PDF</CardTitle>
      </CardHeader>
      <CardContent>
        <UploadZone />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="rounded-full">Upload</Button>
      </CardFooter>
    </Card>
  );
}
