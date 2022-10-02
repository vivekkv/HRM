import React from 'react';
import { showWarningMessage } from 'utils/notification';

export default class FileUpload extends React.Component {

    render() {
        return (
            <input type="file" className={this.props.className} onChange={this.onChange.bind(this)} name={this.props.name} />
        )
    }

    onChange(e) {

        if (this.checkFile(e, this.props.supportedExtensions, this.props.maxSizeToUpload)) {

            const reader = new FileReader();
            const file = e.target.files[0];

            reader.onload = (upload) => {

                this.props.onChange(this.props.name, {

                    data_uri: upload.target.result,
                    filename: file.name,
                    filetype: file.type,
                    file: file
                });

            };

            reader.readAsDataURL(file);

        } else {

        }
    }

    checkFile(e, supportedExtensions, maxSizeToUpload) {

        debugger
        var file_list = e.target.files;

        for (var i = 0, file; file = file_list[i]; i++) {

            var sFileName = file.name; 
            var sFileExtension = sFileName.split('.')[sFileName.split('.').length - 1].toLowerCase();
            var iFileSize = file.size;
            var iConvert = (file.size / 10485760).toFixed(2);

            if(supportedExtensions && supportedExtensions.length > 0) { 

                if(supportedExtensions.indexOf(sFileExtension) == -1) {

                    showWarningMessage("Please make sure your file is in any of the ["+ supportedExtensions.join(",")  +"] format");
                    return false;
                }
            }

            if(maxSizeToUpload && (iFileSize > maxSizeToUpload)) {

                showWarningMessage("Please make sure your file is less than "+ ( Math.floor(((maxSizeToUpload / 1024) / 1024)) ) + " MB.")
                return false;
            }
        }

        return true;
    }
}