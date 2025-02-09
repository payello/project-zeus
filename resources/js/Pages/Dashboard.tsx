import IconComponent from '@/Components/IconComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { ChangeEvent, useRef, useState } from 'react';

type DashboardProps = {
    first_name: string;
    last_name: string;
};

export default function Dashboard({ first_name, last_name }: DashboardProps) {
    const [file, setFile] = useState<File | null>(null);
    const inputFile = useRef<HTMLInputElement | null>(null);

    const uploadFile = () => {
        if (!inputFile) {
            return;
        }

        if (inputFile.current) {
            inputFile.current.click();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('ev', event);
        const file = event.target.files[0];
        console.log({ file });
        pdfToUpload(file);
    };

    const pdfToUpload = (file: File) => {
        setFile(file);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Hello {first_name} {last_name}
                        </div>
                    </div>

                    <div
                        className="my-8·bg-white·p-6·shadow-sm·sm:rounded-lg cursor-pointer"
                        onClick={uploadFile}
                    >
                        <div>
                            {file?.name ? (
                                <div>
                                    <IconComponent iconName="icon-document-up" />
                                    {file.name}
                                </div>
                            ) : (
                                <div className="bg-white·p-6 border-dashed·border-2">
                                    <input
                                        id="file-input"
                                        type="file"
                                        accept="application/pdf"
                                        ref={inputFile}
                                        style={{ display: 'none' }}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        <strong>
                                            Drag and drop your file here
                                        </strong>
                                        <div>
                                            <span>
                                                Limit 15MB per file. Supported
                                                PDF
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
