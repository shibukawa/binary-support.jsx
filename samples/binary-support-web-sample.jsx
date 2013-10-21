import "js/web.jsx";
import "binary-support.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        dom.window.document.write("<p>ArrayBuffer: " + BinarySupport.arraybuffer as string + '</p>');
        dom.window.document.write("<p>NodeBuffer: " + BinarySupport.nodebuffer as string + '</p>');
        dom.window.document.write("<p>Uint8Array: " + BinarySupport.uint8array as string + '</p>');
        dom.window.document.write("<p>Blob: " + BinarySupport.blob as string + '</p>');
    }
}
