import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

const load = async (callback) => {
    const { type, uri } = await DocumentPicker.getDocumentAsync({'type':'application/json'})
    if (type === "success"){
        const json = await FileSystem.readAsStringAsync(uri)
        callback(JSON.parse(json))
    }
}

const save = async (filename,data) => {
    var json = JSON.stringify(data)
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
        let fileUri = FileSystem.documentDirectory + filename;
        await FileSystem.writeAsStringAsync(fileUri, json, { encoding: FileSystem.EncodingType.UTF8 });
        const asset = await MediaLibrary.createAssetAsync(fileUri)
        await MediaLibrary.createAlbumAsync("Download/note", asset, false)
    }
}

export {load, save}