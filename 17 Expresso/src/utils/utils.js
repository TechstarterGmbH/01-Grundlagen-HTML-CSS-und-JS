import dayjs from 'dayjs'; // ES 2015
import path from  'path'
import { fileURLToPath } from 'url';


/**
 * Dieses Modul enthält kleine "Helferlein" => kurze CodeSnippets, die den 
 * Programmablauf unterstützen, aber nicht für die eigentliche Programmlogik 
 * erforderlich sind.
 */
export {expresso_utils}


//Das ist das Verzeichnis, in dem sich das Utils-Modul befindet
let _utilsFolder = path.dirname(fileURLToPath(import.meta.url))
let _srcFolder =  path.dirname(path.dirname(fileURLToPath(import.meta.url)))
let _publicFolder = path.join(_srcFolder, 'public')
let _viewFolder = path.join(_srcFolder, 'views')


let expresso_utils =  {
    utils:_utilsFolder,
    src: _srcFolder,
    public: _publicFolder,
    views: _viewFolder
}

expresso_utils.log = (req) =>{
    let day = dayjs().format('DD.MM.YYYY')
    let time = dayjs().format('HH:mm:ss');

    let msg = `[${day}] ${time} Error 404 - HTTP-Method: ${req.method}  - URL: ${req.originalUrl}`
    console.log(msg);
}


