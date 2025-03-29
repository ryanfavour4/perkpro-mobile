import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Feather } from "@expo/vector-icons";
import { formatFileSize } from "@/utils/format-file-size";
import { sliceFromLastTo } from "@/utils/utils";

const FileDropzone = ({
    onFileSelected,
    placeholder = "Tap to upload a file",
    camera = false,
    icon,
    className,
}: {
    onFileSelected?: (
        file:
            | DocumentPicker.DocumentPickerResult
            | ImagePicker.ImagePickerResult
    ) => void;
    placeholder?: string;
    className?: string;
    camera?: boolean;
    icon?: JSX.Element;
}) => {
    const [files, setFiles] = useState<DocumentPicker.DocumentPickerResult[]>(
        []
    );
    const [cameraFiles, setCameraFiles] = useState<
        ImagePicker.ImagePickerResult[]
    >([]);

    const handleFilePick = async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type: "*/*", // Accept all files
            });

            if (res.canceled) return;

            setFiles((prev) => [...prev, res]);
            onFileSelected && onFileSelected(res);
        } catch (err) {
            console.error("File picking error:", err);
        }
    };

    const openCamera = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();

        if (!permission.granted) {
            alert("Camera access is required!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setCameraFiles((prev) => [...prev, result]);
            onFileSelected && onFileSelected(result);
        }
    };

    return (
        <>
            <TouchableOpacity
                onPress={camera ? openCamera : handleFilePick}
                className={`${className} w-full items-center py-6 p-4 border border-gray-300 rounded-lg bg-gray-100 mb-2`}
            >
                <TouchableOpacity className="items-center">
                    {icon ? icon : <Feather name="upload" size={30} />}
                    <Text className="text-gray-500 mt-2">{placeholder}</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            {files.length > 0 && (
                <View className="flex gap-1.5 flex-wrap flex-row">
                    {files.map((file, index) => (
                        <View
                            key={index}
                            className="flex flex-row items-center self-start gap-2 py-1.5 px-2 bg-primary-100/20 rounded-full"
                        >
                            <Text className="text-primary-100 text-sm max-w-xs line-clamp-1">
                                {file.assets?.map((asset) => asset.name)}
                            </Text>
                            <Text className="text-primary-100 p-1 bg-light-100 border border-primary-100 rounded-full px-2 text-sm">
                                {file.assets?.map((asset) =>
                                    formatFileSize(asset.size)
                                )}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            {cameraFiles.length > 0 && (
                <View className="flex gap-1.5 flex-wrap flex-row">
                    {cameraFiles.map((file, index) => (
                        <View
                            key={index}
                            className="flex flex-row items-center self-start gap-2 py-1.5 px-2 bg-primary-100/20 rounded-full"
                        >
                            <Text className="text-primary-100 text-sm max-w-xs line-clamp-1">
                                {file.assets?.map(
                                    (asset) =>
                                        asset.fileName ||
                                        sliceFromLastTo(asset.uri, "-")
                                )}
                            </Text>
                            <Text className="text-primary-100 p-1 bg-light-100 border border-primary-100 rounded-full px-2 text-sm">
                                {file.assets?.map((asset) =>
                                    formatFileSize(asset.fileSize)
                                )}
                            </Text>
                        </View>
                    ))}
                </View>
            )}
        </>
    );
};

export default FileDropzone;
