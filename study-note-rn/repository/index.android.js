import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

const load = async (callback) => {
    const { type, uri } = await DocumentPicker.getDocumentAsync({'type':'application/json'})
    if (type === "success"){
        const json = await FileSystem.readAsStringAsync(uri)
        callback(JSON.parse(json))
    }
}

const save = async (filename,data) => {
    var json = JSON.stringify(data)
    const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync()
    if (permissions.granted) {
        try{
            fileUri = await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, 'application/json')
            await FileSystem.StorageAccessFramework.writeAsStringAsync(fileUri, json, { encoding: FileSystem.EncodingType.UTF8 });
        }
        catch(e){
            console.log(e)
        }
    }
}

export {load, save}